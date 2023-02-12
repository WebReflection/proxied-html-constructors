const proxiedHTMLConstructors = require('../cjs');

const self = {
  HTMLAnchorElement: class HTMLAnchorElement {},
  HTMLDivElement: class HTMLDivElement {},
  HTMLElement: class HTMLElement {}
};

const HTML = proxiedHTMLConstructors(self);

console.assert(HTML.A === self.HTMLAnchorElement, 'HTML.A');
console.assert(HTML.Div === self.HTMLDivElement, 'HTML.Div');
console.assert(HTML.Element === self.HTMLElement, 'HTML.Element');
