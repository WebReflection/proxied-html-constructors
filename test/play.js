/*! (c) Andrea Giammarchi - ISC */

const {writeFileSync} = require('node:fs');
const {join} = require('node:path');

const puppeteer = require('puppeteer');
const retype = require('./retype.js');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
    {waitUntil: 'load'}
  );

  const [facades, constructors, types, missed, deprecated] = await page.evaluate(() => {
    const facades = {};
    const deprecated = [];
    const types = {};
    const missed = {};
    const constructors = ['Element'];

    const reHTML = /^HTML(.*?)Element$/;
    const elements = document.querySelectorAll('.standard-table td:first-of-type code');

    for (const element of elements) {
      // grab clear tag name within angled brackets
      const tag = element.textContent.trim().replace(/^<|>$/g, '').toLowerCase();

      // flag the tag as deprecated if within the deprecated section
      if (element.closest('section[aria-labelledby="obsolete_and_deprecated_elements"]'))
        deprecated.push(tag);

      // create an element through the tag to reach its constructor
      const {name} = document.createElement(tag).constructor;

      // drop prefix and suffix from the constructor name, fallback to Element
      const shortcut = name.replace(reHTML, '$1') || 'Element';

      // if creating the element resulted into its tag name backed within
      // the constructor name, associate its shortcut name to the full one
      if (shortcut.toLowerCase() === tag)
        types[shortcut] = name;
      // if the name of the constructor does not include the tag
      else {
        // relate the tag name to such constructor
        missed[tag] = name;
        // retrieve the index of the constructor or push it if new
        let i = constructors.indexOf(shortcut);
        // only these elements require mapping between shortcut and name
        // i.e. HTML.A results into HTML.Anchor hence HTMLAnchorElement constructor
        facades[tag] = i < 0 ? constructors.push(shortcut) - 1 : i;
      }
    }

    // return all collected details to the outer process
    return [facades, constructors, types, missed, deprecated];
  });

  const close = browser.close();

  // use retype.js hash map to deal with CamelCases
  // i.e. blockquote => BlockQuote, colgroup => ColGroup
  for (const [tag, name] of Object.entries(missed)) {
    // if something is missing it requires manual maintainance
    // at the retype.js file
    if (!retype[tag])
      throw new TypeError(`Unknown tag: ${tag}`);
    // add the shortcut to point at the full name (used by TS)
    types[retype[tag]] = name;
  }

  // order all tags for human eyes sake while reading the code
  const ordered = {};
  for (const tag of [...Object.keys(facades)].sort())
    ordered[tag] = facades[tag];

  // save all found tags and constructors, even those deprecated
  saveAs('all');

  // map back TagShortcut to tagshortcut to help dropping types
  // that are either obsolete or deprecated
  const dropType = {};
  for (const key of Object.keys(types))
    dropType[key.toLowerCase()] = key;

  // loop through all deprecated types and tags
  const droppedConstructors = new Set;
  for (const drop of deprecated) {
    // remove from types for TS purpose
    delete types[dropType[drop]];
    // if not already added as constructor to drop
    if (!droppedConstructors.has(ordered[drop])) {
      // add it and then remove it from ordered
      droppedConstructors.add(ordered[drop]);
      delete ordered[drop];
    }
  }

  // remove constructors that are in ordered from dropped
  // Note: this logic is pretty bad at O(n) but it's "good enough"
  for (const index of Object.values(ordered))
    droppedConstructors.delete(index);

  // per each constructor, remove those that are not used anywhere
  // inverted loop just because obsolete/deprecated are likely at the end
  for (let i = constructors.length; i--;) {
    if (droppedConstructors.has(i)) {
      constructors.splice(i, 1);
      // update by decreasing the value by 1 each ordered tag/type
      for (const [key, value] of Object.entries(ordered)) {
        if (value > i)
          ordered[key] = value - 1;
      }
    }
  }

  // save the ceaned up version of the module without obsolete/deprecated
  saveAs('index');

  function saveAs(name) {
    // create the TypeScript definition of the returned HTML object type
    const TS = [`/**`, ` * @typedef {Object} HTML`];
    for (const field of [...Object.keys(types)].sort())
      TS.push(` * @property {new () => ${types[field]}} ${field}`);
    TS.push(` */`);

    // simplify minifiers life by referencing once each constructor
    const declarations = [];
    for (const shortcut of constructors)
      declarations.push(`const ${shortcut} = ${JSON.stringify(shortcut)};`);

    // use a new Map<key:string, shortcut:string> to proxy
    const map = [];
    for (const [key, index] of Object.entries(ordered))
      map.push(`[${JSON.stringify(key)}, ${constructors[index]}]`);

    // save the file
    writeFileSync(
      join(__dirname, '..', 'esm', name + '.js'),
      `/*! (c) Andrea Giammarchi - ISC */

// ⚠ THIS FILE IS CREATED VIA AUTOMATION

${TS.join('\n')}

${declarations.join('\n')}

/**
 * Given an optional global context, returns a proxy that resolves
 * all tag names into their global constructors.
 * @property {globalThis} [self=globalThis]
 * @returns {HTML}
 */
export default (self = globalThis) => new Proxy(
  new Map([
    ${map.join(',\n    ')}
  ]),
  {
    get(tags, name) {
      const Class = tags.get(name.toLowerCase()) || (name === Element ? '' : name);
      return self['HTML' + Class + Element];
    }
  }
);
`
    );

    // also save the proxied version of the module that returns just strings
    // creating a TypeScript definition as Object<string,string> with Shortcut => HTMLShortcutElement
    writeFileSync(
      join(__dirname, '..', 'esm', (name === 'index' ? 'names' : 'all-names') + '.js'),
      `/*! (c) Andrea Giammarchi - ISC */

// ⚠ THIS FILE IS CREATED VIA AUTOMATION

import proxiedHTMLConstructors from './${name}.js';

${TS.join('\n').replace(/\{new \(\) => (\S+)\} (\S+)/gm, '{"$1"} $2')}

const handler = {get: (_, name) => name};

/** @type {HTML} */
export default proxiedHTMLConstructors(new Proxy(handler, handler));
`
    );
  }

  // enjoy 🥳
  await close;
})();
