this.kubio=this.kubio||{},this.kubio.inspectors=function(e){var t={};function o(c){if(t[c])return t[c].exports;var n=t[c]={i:c,l:!1,exports:{}};return e[c].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(c,n,function(t){return e[t]}.bind(null,n));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=694)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.compose}()},12:function(e,t){!function(){e.exports=this.wp.blocks}()},16:function(e,t){!function(){e.exports=this.wp.blockEditor}()},24:function(e,t){!function(){e.exports=this.wp.hooks}()},3:function(e,t){!function(){e.exports=this.wp.components}()},32:function(e,t){!function(){e.exports=this.kubio.editorData}()},4:function(e,t){!function(){e.exports=this.kubio.core}()},5:function(e,t){!function(){e.exports=this.kubio.controls}()},6:function(e,t,o){"use strict";function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c])}return e},c.apply(this,arguments)}o.d(t,"a",(function(){return c}))},694:function(e,t,o){"use strict";o.r(t),o.d(t,"AdvancedStyleBlockInspector",(function(){return m})),o.d(t,"AdvancedInspectorControls",(function(){return k})),o.d(t,"ContentBlockInspector",(function(){return S})),o.d(t,"ContentInspectorControls",(function(){return j})),o.d(t,"DataHelperContextFromClientId",(function(){return B})),o.d(t,"BlockInspectorTopControls",(function(){return g})),o.d(t,"StyleBlockInspector",(function(){return F})),o.d(t,"StyleInspectorControls",(function(){return T})),o.d(t,"useCurrentInspectorTab",(function(){return H}));var c=o(32),n=o(0),l=o(1),r=o(12),i=o(8),s=o(10),u=o(3),b=o(16);const{Fill:a,Slot:d}=Object(u.createSlotFill)("AdvancedInspectorControls"),p=Object(s.createHigherOrderComponent)((e=>t=>{const o=Object(b.useBlockEditContext)(),{isSelected:c}=o;return c?Object(n.createElement)(e,t):null}),"ifBlockEditSelectedAdvancedInspectorControls"),k=Object(s.compose)([p])(a);k.Slot=d;var O=Object(s.compose)([Object(i.withSelect)((e=>{const{getSelectedBlockClientId:t,getSelectedBlockCount:o,getBlockName:c}=e("core/block-editor"),{getBlockStyles:n}=e("core/blocks"),l=t(),i=l&&c(l),s=l&&Object(r.getBlockType)(i),u=l&&n(i);return{count:o(),hasBlockStyles:u&&u.length>0,selectedBlockName:i,selectedBlockClientId:l,blockType:s}}))])((e=>{let{blockType:t,selectedBlockClientId:o,selectedBlockName:c,showNoBlockSelectedMessage:i=!0}=e;const s=c===Object(r.getUnregisteredTypeHandlerName)();return t&&o&&!s?Object(n.createElement)("div",{className:"block-editor-block-inspector kubio-inspector"},Object(n.createElement)(k.Slot,{bubblesVirtually:!0})):i?Object(n.createElement)("span",{className:"block-editor-block-inspector__no-blocks"},Object(l.__)("No block selected.","kubio")):null}));const m=()=>Object(n.createElement)(n.Fragment,null,Object(n.createElement)(O,null));var f=o(6);const j=e=>{const t=Object(b.useBlockEditContext)(),{isSelected:o}=t;return o&&Object(n.createElement)(u.__experimentalStyleProvider,{document:document},Object(n.createElement)(b.InspectorControls,Object(f.a)({className:"kubio-inspector"},e)))},S=()=>Object(n.createElement)(n.Fragment,null,Object(n.createElement)(b.BlockInspector,null));var y=o(4);const B=Object(s.compose)([Object(y.withObserveOtherBlocks)(((e,t)=>{let{clientId:o}=t;return o})),y.withKubioBlockContext])((e=>{let{children:t}=e;return t})),{Fill:h,Slot:E}=Object(u.createSlotFill)("StyleInspectorControlsTop"),C=Object(s.createHigherOrderComponent)((e=>t=>{const o=Object(b.useBlockEditContext)(),{isSelected:c}=o;return c?Object(n.createElement)(e,t):null}),"ifBlockEditSelectedStyleInspectorControls"),g=Object(s.compose)([C])(h);g.Slot=E;var I=o(24),v=o(5);const x="StyleInspectorControls",{Fill:w,Slot:N}=Object(u.createSlotFill)(x),_=Object(s.createHigherOrderComponent)((e=>t=>{const o=Object(b.useBlockEditContext)(),{isSelected:c}=o;return c?Object(n.createElement)(u.__experimentalStyleProvider,{document:document},Object(n.createElement)(e,t)):null}),"ifBlockEditSelectedStyleInspectorControls"),T=Object(s.compose)([_])(w);T.Slot=e=>!Object(y.useSlotHasFills)(x)&&window.isKubioBlockEditor?Object(n.createElement)("div",{className:"kubio-editing-header"},Object(n.createElement)(v.ControlNotice,{content:Object(l.__)("Current block does not support styling","kubio")})):Object(n.createElement)(N,e);const F=Object(s.compose)([Object(i.withSelect)((e=>{const{getSelectedBlockClientId:t,getSelectedBlockCount:o,getBlockName:c}=e("core/block-editor"),{getBlockStyles:n}=e("core/blocks"),l=t(),i=l&&c(l),s=l&&Object(r.getBlockType)(i),u=l&&n(i);return{count:o(),hasBlockStyles:u&&u.length>0,selectedBlockName:i,selectedBlockClientId:l,blockType:s}}))])((e=>{let{blockType:t,selectedBlockClientId:o,selectedBlockName:c,showNoBlockSelectedMessage:i=!0}=e;const s=c===Object(r.getUnregisteredTypeHandlerName)();return t&&o&&!s?Object(n.createElement)("div",{className:"block-editor-block-inspector kubio-inspector"},Object(n.createElement)(T.Slot,{bubblesVirtually:!0})):i?Object(n.createElement)("span",{className:"block-editor-block-inspector__no-blocks"},Object(l.__)("No block selected.","kubio")):null})),P=Object(s.createHigherOrderComponent)((e=>t=>Object(n.createElement)(n.Fragment,null,!window.isKubioBlockEditor&&Object(n.createElement)(b.InspectorControls,null,Object(n.createElement)(v.LinkedNotice,t)),Object(n.createElement)(e,t),!window.isKubioBlockEditor&&Object(n.createElement)(b.InspectorControls,null,Object(n.createElement)(F,null)))),"withKubioStyleInspectorOutsideKubioEditor");Object(I.addFilter)("editor.BlockEdit","kubio.third-party-controls",P);const H=()=>{const[e,t]=Object(c.useGlobalSessionProp)("displayed-block-panel","content");return[e,t]}},8:function(e,t){!function(){e.exports=this.wp.data}()}});
