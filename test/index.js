const assert = (provided, expected, message) => {
  if (provided !== expected) {
    console.error(message);
    process.exit(1);
  }
};

test(require('../cjs'));
test(require('../cjs/all'));

function test(proxiedHTMLConstructors) {
  const self = {
    HTMLAnchorElement: class HTMLAnchorElement {},
    HTMLDivElement: class HTMLDivElement {},
    HTMLElement: class HTMLElement {}
  };

  const HTML = proxiedHTMLConstructors(self);

  assert(HTML.A, self.HTMLAnchorElement, 'HTML.A');
  assert(HTML.Div, self.HTMLDivElement, 'HTML.Div');
  assert(HTML.Element, self.HTMLElement, 'HTML.Element');
}

testNames(require('../cjs/names'));
testNames(require('../cjs/all-names'));

function testNames(HTML) {
  assert(HTML.A, 'HTMLAnchorElement', 'HTML.A');
  assert(HTML.Div, 'HTMLDivElement', 'HTML.Div');
  assert(HTML.Element, 'HTMLElement', 'HTML.Element');
}
