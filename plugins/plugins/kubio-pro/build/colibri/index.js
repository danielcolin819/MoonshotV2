this.kubio=this.kubio||{},this.kubio.colibri=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=704)}({12:function(t,e){!function(){t.exports=this.wp.blocks}()},2:function(t,e){!function(){t.exports=this.lodash}()},704:function(t,e,r){"use strict";r.r(e),r.d(e,"extendBlockMeta",(function(){return i}));var n=r(2),o=r.n(n),u=r(12);const i=(t,e)=>{let r=o.a.merge(t,e,{apiVersion:2,supports:{anchor:!0,customClassName:!0}});return r=function(t){if(o.a.has(t.attributes,["anchor","type"]))return t;return Object(u.hasBlockSupport)(t,"anchor")&&(t.attributes={...t.attributes,anchor:{type:"string"}}),t}(r),r}}});
