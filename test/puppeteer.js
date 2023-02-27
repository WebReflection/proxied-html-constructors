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

  const data = await page.evaluate(() => {
    const data = {element: {
      deprecated: false,
      constructor: 'HTMLElement',
      shortcut: 'Element'
    }};
    const reHTML = /^HTML(.*?)Element$/;
    const elements = document.querySelectorAll('.table-container > table td:first-of-type code');

    for (const element of elements) {
      // grab clear tag name within angled brackets
      const tag = element.textContent.trim().replace(/^<|>$/g, '').toLowerCase();

      // create an element through the tag to reach its constructor
      const {name} = document.createElement(tag).constructor;

      // drop prefix and suffix from the constructor name, fallback to Element
      const shortcut = name.replace(reHTML, '$1') || 'Element';

      data[tag] = {
        deprecated: !!element.closest('section[aria-labelledby="obsolete_and_deprecated_elements"]'),
        constructor: name,
        shortcut: shortcut.toLowerCase() === tag ? shortcut : ''
      };
    }

    // return all collected details to the outer process
    return data;
  });

  const close = browser.close();

  const orderedData = {};
  for (const tag of [...Object.keys(data)].sort()) {
    orderedData[tag] = data[tag];
    if (!data[tag].shortcut) {
      if (!retype[tag])
        throw new TypeError(`Unknown tag: ${tag}`);
      data[tag].shortcut = retype[tag];
    }
  }

  writeFileSync(
    join(__dirname, '..', 'esm', 'data.js'),
    `export default (${JSON.stringify(orderedData, null, '  ')});\n`
  );

  // save all found tags and constructors, even those deprecated
  saveAs('all', true);

  // save the ceaned up version of the module without obsolete/deprecated
  saveAs('index', false);

  function saveAs(name, withDeprecated) {
    const warning = '// ⚠ THIS FILE IS CREATED VIA AUTOMATION';

    const reHTML = /^HTML(.*?)Element$/;

    // simplify minifiers life by referencing once each constructor
    const declarations = [];
    const knownDeclarations = new Set;

    // use a new Map<key:string, shortcut:string> to proxy
    const map = [];

    // create the TypeScript definition of the returned HTML object type
    const TS = [`/**`, ` * @typedef {Object} HTML`];
    for (const [tag, {constructor, deprecated, shortcut}] of Object.entries(orderedData)) {
      if (!withDeprecated && deprecated) continue;
      TS.push(` * @property {new () => ${constructor}} ${shortcut}`);
      const name = constructor.replace(reHTML, '$1') || 'Element';
      if (name !== shortcut) {
        if (!knownDeclarations.has(name)) {
          knownDeclarations.add(name);
          declarations.push(`const ${name} = ${JSON.stringify(name)};`);
        }
        map.push(`[${JSON.stringify(tag)}, ${name}]`);
      }
    }
    TS.push(` */`);

    // save the file
    writeFileSync(
      join(__dirname, '..', 'esm', name + '.js'),
      `/*! (c) Andrea Giammarchi - ISC */

${warning}

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

${warning}

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
