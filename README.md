# HTML Tags To Constructors

<sup>**Social Media Photo by [Jackson Sophat](https://unsplash.com/@jacksonsophat) on [Unsplash](https://unsplash.com/)**</sup>

This module goal is to relate, through an entirely automated process, [HTML tags names to their constructor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), also differentiating between the obsolete or deprecated tags and those still vald.

```js
// const createHTMLProxy = require('proxied-html-constructors');
import createHTMLProxy from 'proxied-html-constructors';

// the default export is a callback that optionally accepts
// a `globalThis` context to retrieve classes from it.
const HTML = createHTMLProxy();

HTML.A;   // the HTMLAnchorElement class
HTML.Div; // the HTMLDivElement class
HTML.TD;  // the HTMLTableCellElement class
HTML.TH;  // also the HTMLTableCellElement class
// ... and so on ... every tag maps to its constructor
```

The extended export that includes deprecated and obsolete tags, hence their constructors, can be reached via `proxied-html-constructors/all` dedicated export.

### Constructors just as string

As classes might not be present in the global context, or simply to facilitate any possible library or tool out there, the `/names` and `/all-names` exports are also available to provide a way to retrieve only fully qualified strings.

```js
// const HTML = require('proxied-html-constructors/names');
import HTML from 'proxied-html-constructors/names';

// the default export is a Proxied object that returns names.

HTML.A;   // "HTMLAnchorElement"
HTML.Div; // "HTMLDivElement"
HTML.TD;  // "HTMLTableCellElement"
HTML.TH;  // "HTMLTableCellElement"
// ... and so on ... every tag maps to its constructor's name
```

### Just data

The `/data` export of this module provides an object with *tags* as keys and `deprecated`, `constructor` and `shortcut` fields, respectively a *boolean*, a *string* and also a *string*.
