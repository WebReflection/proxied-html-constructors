'use strict';
const proxiedHTMLConstructors = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('./index.js'));

const handler = {get: (_, name) => name};

module.exports = proxiedHTMLConstructors(new Proxy(handler, handler));
