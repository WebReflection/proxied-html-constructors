/*! (c) Andrea Giammarchi - ISC */

// ⚠ THIS FILE IS CREATED VIA AUTOMATION

import proxiedHTMLConstructors from './index.js';

const handler = {get: (_, name) => name};

export default proxiedHTMLConstructors(new Proxy(handler, handler));
