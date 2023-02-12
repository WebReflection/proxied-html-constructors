const {writeFileSync} = require('node:fs');
const {join} = require('node:path');

const puppeteer = require('puppeteer');
const { collapseTextChangeRangesAcrossMultipleVersions } = require('typescript');
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
      const tag = element.textContent.trim().replace(/^<|>$/g, '');
      if (element.closest('section[aria-labelledby="obsolete_and_deprecated_elements"]'))
        deprecated.push(tag);
      const {name} = document.createElement(tag).constructor;
      const shortcut = name.replace(reHTML, '$1') || 'Element';
      if (shortcut.toLowerCase() === tag)
        types[shortcut] = name;
      else {
        missed[tag] = name;
        let i = constructors.indexOf(shortcut);
        facades[tag] = i < 0 ? constructors.push(shortcut) - 1 : i;
      }
    }

    return [facades, constructors, types, missed, deprecated];
  });

  for (const [tag, name] of Object.entries(missed)) {
    if (!retype[tag])
      throw new TypeError(`Unknown tag: ${tag}`);
    types[retype[tag]] = name;
  }

  const ordered = {};
  for (const tag of [...Object.keys(facades)].sort())
    ordered[tag] = facades[tag];

  saveAs('all');

  const dropType = {};
  for (const key of Object.keys(types))
    dropType[key.toLowerCase()] = key;

  const droppedConstructors = new Set;
  for (const drop of deprecated) {
    delete types[dropType[drop]];
    if (!droppedConstructors.has(ordered[drop])) {
      droppedConstructors.add(ordered[drop]);
      delete ordered[drop];
    }
  }

  for (const index of Object.values(ordered)) {
    droppedConstructors.delete(index);
  }

  for (let i = constructors.length; i--;) {
    if (droppedConstructors.has(i)) {
      constructors.splice(i, 1);
      for (const [key, value] of Object.entries(ordered)) {
        if (value > i)
          ordered[key] = value - 1;
      }
    }
  }

  saveAs('index');

  function saveAs(name) {
    const TS = [`/**`, ` * @typedef {Object} HTML`];
    for (const field of [...Object.keys(types)].sort())
      TS.push(` * @property {new () => ${types[field]}} ${field}`);
    TS.push(` */`);

    writeFileSync(
      join(__dirname, '..', 'esm', name + '.js'),
    `/*! (c) Andrea Giammarchi - ISC */

// ⚠ THIS FILE IS CREATED VIA AUTOMATION

${TS.join('\n')}

/**
 * Given an optional global context, returns a proxy that resolves
 * all tag names into their global constructors.
 * @property {globalThis} [self=globalThis]
 * @returns {HTML}
 */
export default (self = globalThis) => new Proxy(
  [
    ${JSON.stringify(ordered, null, '      ').replace(/(\S+)$/, '    $1')},
    ${JSON.stringify(constructors, null, '      ').replace(/(\S+)$/, '    $1')},
  ],
  {
    get([tags, constructors], name) {
      const _ = name.toLowerCase();
      const $ = _ in tags ?
        constructors[tags[_]] :
        (name === constructors[0] ? '' : name);
      return self[\`HTML\${$}\${constructors[0]}\`];
    }
  }
);
`
  );
  }

  await browser.close();
})();
