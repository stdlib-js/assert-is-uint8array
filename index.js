// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,n=o,e=function(t){return n.call(t)},r=Object.prototype.hasOwnProperty,i=function(t,o){return null!=t&&r.call(t,o)},l="function"==typeof Symbol?Symbol.toStringTag:"",f=i,y=l,u=o,c=e,a=function(t){var o,n,e;if(null==t)return u.call(t);n=t[y],o=f(t,y);try{t[y]=void 0}catch(o){return u.call(t)}return e=u.call(t),o?t[y]=n:delete t[y],e},p=t&&"symbol"==typeof Symbol.toStringTag?a:c,b="function"==typeof Uint8Array;return function(t){return b&&t instanceof Uint8Array||"[object Uint8Array]"===p(t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).isUint8Array=o();
//# sourceMappingURL=index.js.map