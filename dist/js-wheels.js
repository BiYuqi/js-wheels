!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.JsWheels=t():e.JsWheels=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){var r,o,i;o=[t,n(5)],void 0===(i="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var n=["Array","String","Object","Date","Number","RegExp","Null","Undefined","Function","Set","Map"],r={},o=n.length,i=function(e){r["is"+n[e]]=function(r){return t.objTag.call(r)==="[object "+n[e]+"]"}},u=0;u<o;u++)i(u);r.isNaN=function(e){return e!=e},e.default=r})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){var r,o;void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.filterObjectBy=function(e,t){for(var n=[],r=!1,o=e.length,i=0;i<o;i++){r=!1;for(var u=n.length,f=0;f<u;f++)if(e[i][t]===n[f][t]){r=!0;break}r||n.push(e[i])}return n}})?r.apply(t,[t]):r)||(e.exports=o)},function(e,t,n){var r,o,i;o=[t,n(0)],void 0===(i="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.flattenArray=e.differenceWith=e.difference=e.chunck=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(t);e.chunck=function(e,t){if(!n.default.isArray(e))throw"The source must be an Array";if(!n.default.isNumber(t))throw"size must be an Number";var r=e.length?e.length:0,o=[];if(!r||t<1)return[];for(var i=Math.ceil(r/t),u=0;u<i;u++){var f=u*t,a=f+t;o.push(e.slice(f,a))}return o},e.difference=function(e,t){var n=new Set(t),r=new Set(e);return[].concat(e.filter(function(e){return!n.has(e)})).concat(t.filter(function(e){return!r.has(e)}))},e.differenceWith=function(e,t){var n=new Set(t);return[].concat(e.filter(function(e){return n.has(e)}))},e.flattenArray=function(e){if(!n.default.isArray(e))throw new Error("source must be an array");var t=[];return function e(r){for(var o=r.length,i=0;i<o;i++)n.default.isArray(r[i])?e(r[i]):t.push(r[i])}(e),t}})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){var r,o;void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=e.inBrowser="undefined"!=typeof window,n=e.inWeex="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,r=e.weexPlatform=n&&WXEnvironment.platform.toLowerCase(),o=e.UA=t&&window.navigator.userAgent.toLowerCase(),i=(e.isIE=o&&/msie|trident/.test(o),e.isIE9=o&&o.indexOf("msie 9.0")>0,e.isEdge=o&&o.indexOf("edge/")>0);e.isAndroid=o&&o.indexOf("android")>0||"android"===r,e.isIOS=o&&/iphone|ipad|ipod|ios/.test(o)||"ios"===r,e.isChrome=o&&/chrome\/\d+/.test(o)&&!i})?r.apply(t,[t]):r)||(e.exports=o)},function(e,t,n){var r,o,i;o=[t,n(0)],void 0===(i="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.formatQuery=function(e){if(!t.isObject(e))throw new Error("query must be an Object");var n=[];for(var r in e)e.hasOwnProperty(r)&&e[r]&&(n.push(r),n.push("="),n.push(e[r]),n.push("&"));return n.join("").replace(/&$/,"")}})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){var r,o;void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.objTag=Object.prototype.toString})?r.apply(t,[t]):r)||(e.exports=o)},function(e,t,n){var r,o,i;o=[e,n(0),n(2),n(1),n(3),n(4)],void 0===(i="function"==typeof(r=function(e,t,n,r,o,i){"use strict";var u=function(e){return e&&e.__esModule?e:{default:e}}(t),f=l(n),a=l(r),c=l(o),s=l(i);function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var d=Object.assign({},f,a,c,s,u.default);e.exports=d})?r.apply(t,o):r)||(e.exports=i)}])});
//# sourceMappingURL=js-wheels.js.map