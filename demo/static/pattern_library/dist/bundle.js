(()=>{var e={705:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},738:e=>{"use strict";e.exports=function(e){return e[1]}},695:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(738),r=n.n(i),o=n(705),a=n.n(o)()(r());a.push([e.id,'@keyframes fadeInOut{0%{opacity:0}20%{opacity:1}80%{opacity:1}100%{opacity:0}}*,*::before,*::after{box-sizing:border-box}html,body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;height:100%}p,h1,h2,h3,h4,h5,h6{margin:0;font-weight:400}a{word-wrap:break-word;color:#0001ee}.section-group-heading:not(:first-of-type){margin-top:100px}.pattern-group-heading{font-weight:500;margin:30px 0 10px}.border-group{box-sizing:border-box;padding:20px;margin-bottom:20px;border:2px solid #eee;display:block;border-radius:5px;transition:background-color 300ms ease}.border-group:hover{background:#f1f1f1}.is-hidden{position:absolute;width:1px;height:1px;overflow:hidden;opacity:0;clip:rect(1px, 1px, 1px, 1px)}.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;opacity:0;clip:rect(1px, 1px, 1px, 1px)}.code{width:600px;overflow:scroll}@media only screen and (min-width: 1200px){.code{width:80vw}}.button--resize{border:2px solid #c4c4c4;color:#606060;padding:5px 10px;margin:0 5px;font-weight:bold;background-color:#f6f6f6}.button--resize:hover{cursor:pointer}.button--resize.is-active{border:2px solid #606060}.button--resize:last-of-type{margin:0 0 0 5px}.button--close-menu{display:flex;background-color:#333;align-self:stretch;align-items:center;justify-content:center;width:45px}.button__icon{width:18px;height:20px;fill:#c4c4c4;vertical-align:middle}.heading--iframe-size{color:#606060;align-self:center;margin-right:10px}.heading--iframe-hint{position:fixed;top:20%;left:50%;transform:translate(-50%, -50%);background:rgba(0,0,0,.78);padding:20px;border-radius:10px;font-weight:bold;color:#fff;opacity:0;pointer-events:none}.iframe-open .heading--iframe-hint{animation-delay:.2s;animation-name:fadeInOut;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:1.75s}.heading--iframe-hint span{border:1px solid #fff;padding:10px 5px;margin:0 5px;border-radius:5px}.iframe{box-sizing:content-box;width:100%;border:1px solid #c4c4c4;margin:20px 0;resize:both;overflow:auto;height:300px;height:415px}.iframe.is-animatable{transition:width .25s ease}.iframe-open .iframe{position:absolute;top:0;left:0;height:100%;background:#fff;margin:0;border:0;resize:none}.icon--close-menu{width:14px;height:14px;fill:#fff;transition:transform .25s ease}.nav-closed .icon--close-menu{transform:rotate(-45deg)}.icon--external{width:18px;height:20px;fill:#0001ee;vertical-align:-4px;margin-left:3px}.list{list-style:none;padding:0;margin:0}.list--child,.list--grandchild{font-size:13px;color:#606060;display:none;padding-left:10px}.list--child.is-open,.list--grandchild.is-open{display:block}.list--grandchild{padding-left:15px}.list__button{display:flex;align-items:center;margin:10px 0;user-select:none;font-size:19px;appearance:none;background-color:rgba(0,0,0,0);border:0;gap:5px;padding:0}.list__button:hover{cursor:pointer}.list__button--child{color:#606060;font-size:13px}.list__item-icon{width:15px;height:15px;pointer-events:none;transition:transform .15s ease-in-out}.is-open>.list__item-icon{transform:rotate(90deg)}.list__item-icon--small{height:10px}.list__item-link{background:#f6f6f6;display:block;font-size:inherit;border-left:5px solid #f6f6f6;transition:background,border,.15s ease-in-out;padding:10px 20px 10px 30px;margin:0 -20px 0 -35px}.list__item-link:hover,.list__item-link.is-active{background:#fff;border-left:5px solid #34b2b2}.md{padding:20px;background-color:#eee}.md h1,.md h2,.md h3,.md h4,.md h5,.md h6{margin-bottom:.67em;font-weight:700}.md h1{font-size:30px}.md h2{font-size:25px}.md h3{font-size:20px}.md h4,.md h5,.md h6{font-size:16px}.md p{margin-top:1em;margin-bottom:1em}.tabbed-content__list{list-style:none;margin:0;padding:0;display:flex;justify-content:space-around}.tabbed-content__heading{flex-grow:1;text-align:center}.tabbed-content__heading>a{color:#4d4d4d;padding:12px 0;display:block;width:100%;background-color:#9de2e2;text-decoration:none;transition:color .25s ease,background-color .25s ease}.tabbed-content__heading>a:hover{color:#000;background-color:#34b2b2}.tabbed-content__heading--active>a{color:#000;background-color:#34b2b2}.tabbed-content__heading:not(:last-child){border-right:1px solid #75d7d7}.tabbed-content__item{display:none}.tabbed-content__item--active{display:block}.tabbed-content pre{margin-top:0}.tabbed-content .hljs{width:100%}.wrapper{display:flex;height:100%}.wrapper--pattern-header{display:block;align-items:center;justify-content:space-between}@media only screen and (min-width: 1010px){.wrapper--pattern-header{display:flex;overflow:hidden}}.wrapper--resize-buttons{margin-top:20px}@media only screen and (min-width: 1010px){.wrapper--resize-buttons{margin-top:0}}.body{display:-ms-grid;display:grid;-ms-grid-columns:230px 1fr;-ms-grid-rows:45px 1fr;grid-template-columns:230px 1fr}.body.nav-closed{-ms-grid-columns:0 1fr;grid-template-columns:0 1fr}@media only screen and (min-width: 600px){.body{transition:grid-template-columns .25s ease}}.header{background-color:#34b2b2;display:flex;align-items:center;height:45px;-ms-grid-column:1;-ms-grid-row:1;-ms-grid-column-span:2;grid-column:1/span 2}.header__title{color:#fff;font-weight:200;text-transform:uppercase;letter-spacing:1px;font-size:16px;margin-left:15px}.header__title::after{content:"Django Pattern Library"}@media only screen and (min-width: 600px){.header__title{font-size:22px;letter-spacing:5px}}.main{display:block;padding:20px;background:#fff;overflow:scroll;-ms-grid-column:2;-ms-grid-row:2}.sidebar{background-color:#f6f6f6;height:100vh;margin-left:0;overflow:auto;-ms-grid-column:1;-ms-grid-row:2}.sidebar__inner{padding:20px}.sidebar__search{width:100%;padding:10px;font-size:15px;margin:0 0 15px}.sidebar__search-results>a{margin-bottom:7px;display:block;font-size:13px}.sidebar__nav--inactive{display:none}.hljs-comment,.hljs-quote{color:#d4d0ab}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#ffa07a}.hljs-number,.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link{color:#f5ab35}.hljs-attribute{color:gold}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:#abe338}.hljs-title,.hljs-section{color:#00e0e0}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0}.hljs{display:block;overflow-x:auto;background:#2b2b2b;color:#f8f8f2;padding:.5em}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}@media screen and (-ms-high-contrast: active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-builtin-name,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:bold}}',""]);const s=a},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},a=[],s=0;s<e.length;s++){var l=e[s],c=i.base?l[0]+i.base:l[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var g=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==g)t[g].references++,t[g].updater(h);else{var p=r(h,i);i.byIndex=s,t.splice(s,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var l=i(e,r),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},384:e=>{var t={exports:{}};function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var i=e[t];"object"!=typeof i||Object.isFrozen(i)||n(i)})),e}t.exports=n,t.exports.default=n;var i=t.exports;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const s=e=>!!e.kind;class l{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=o(e)}openNode(e){if(!s(e))return;let t=e.kind;t=e.sublanguage?`language-${t}`:((e,{prefix:t})=>{if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")}return`${t}${e}`})(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class d extends c{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function u(e){return e?"string"==typeof e?e:e.source:null}function g(e){return f("(?=",e,")")}function h(e){return f("(?:",e,")*")}function p(e){return f("(?:",e,")?")}function f(...e){return e.map((e=>u(e))).join("")}function m(...e){const t=function(e){const t=e[e.length-1];return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}(e);return"("+(t.capture?"":"?:")+e.map((e=>u(e))).join("|")+")"}function b(e){return new RegExp(e.toString()+"|").exec("").length-1}const x=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n;let i=u(e),r="";for(;i.length>0;){const e=x.exec(i);if(!e){r+=i;break}r+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+t):(r+=e[0],"("===e[0]&&n++)}return r})).map((e=>`(${e})`)).join(t)}const w="[a-zA-Z]\\w*",_="[a-zA-Z_]\\w*",v="\\b\\d+(\\.\\d+)?",E="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",k="\\b(0b[01]+)",j={begin:"\\\\[\\s\\S]",relevance:0},N={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[j]},S={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[j]},L=function(e,t,n={}){const i=a({scope:"comment",begin:e,end:t,contains:[]},n);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=m("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:f(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},M=L("//","$"),O=L("/\\*","\\*/"),A=L("#","$"),R={scope:"number",begin:v,relevance:0},T={scope:"number",begin:E,relevance:0},I={scope:"number",begin:k,relevance:0},z={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[j,{begin:/\[/,end:/\]/,relevance:0,contains:[j]}]}]},B={scope:"title",begin:w,relevance:0},C={scope:"title",begin:_,relevance:0};var H=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:w,UNDERSCORE_IDENT_RE:_,NUMBER_RE:v,C_NUMBER_RE:E,BINARY_NUMBER_RE:k,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=f(t,/.*\b/,e.binary,/\b.*/)),a({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:j,APOS_STRING_MODE:N,QUOTE_STRING_MODE:S,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:L,C_LINE_COMMENT_MODE:M,C_BLOCK_COMMENT_MODE:O,HASH_COMMENT_MODE:A,NUMBER_MODE:R,C_NUMBER_MODE:T,BINARY_NUMBER_MODE:I,REGEXP_MODE:z,TITLE_MODE:B,UNDERSCORE_TITLE_MODE:C,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function D(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function $(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function P(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=D,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function U(e,t){Array.isArray(e.illegal)&&(e.illegal=m(...e.illegal))}function q(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function W(e,t){void 0===e.relevance&&(e.relevance=1)}const K=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]})),e.keywords=n.keywords,e.begin=f(n.beforeMatch,g(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Z=["of","and","for","in","not","or","if","then","parent","list","value"];function G(e,t,n="keyword"){const i=Object.create(null);return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach((function(n){Object.assign(i,G(e[n],t,n))})),i;function r(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((function(t){const n=t.split("|");i[n[0]]=[e,F(n[0],n[1])]}))}}function F(e,t){return t?Number(t):function(e){return Z.includes(e.toLowerCase())}(e)?0:1}const X={},J=e=>{console.error(e)},V=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Y=(e,t)=>{X[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),X[`${e}/${t}`]=!0)},Q=new Error;function ee(e,t,{key:n}){let i=0;const r=e[n],o={},a={};for(let e=1;e<=t.length;e++)a[e+i]=r[e],o[e+i]=!0,i+=b(t[e-1]);e[n]=a,e[n]._emit=o,e[n]._multi=!0}function te(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw J("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Q;if("object"!=typeof e.beginScope||null===e.beginScope)throw J("beginScope must be object"),Q;ee(e,e.begin,{key:"beginScope"}),e.begin=y(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw J("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Q;if("object"!=typeof e.endScope||null===e.endScope)throw J("endScope must be object"),Q;ee(e,e.end,{key:"endScope"}),e.end=y(e.end,{joinWith:""})}}(e)}function ne(e){function t(t,n){return new RegExp(u(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=b(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=t(y(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),function n(r,o){const s=r;if(r.isCompiled)return s;[$,q,te,K].forEach((e=>e(r,o))),e.compilerExtensions.forEach((e=>e(r,o))),r.__beforeBegin=null,[P,U,W].forEach((e=>e(r,o))),r.isCompiled=!0;let l=null;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),l=r.keywords.$pattern,delete r.keywords.$pattern),l=l||/\w+/,r.keywords&&(r.keywords=G(r.keywords,e.case_insensitive)),s.keywordPatternRe=t(l,!0),o&&(r.begin||(r.begin=/\B|\b/),s.beginRe=t(s.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(s.endRe=t(s.end)),s.terminatorEnd=u(s.end)||"",r.endsWithParent&&o.terminatorEnd&&(s.terminatorEnd+=(r.end?"|":"")+o.terminatorEnd)),r.illegal&&(s.illegalRe=t(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return a(e,{variants:null},t)}))),e.cachedVariants?e.cachedVariants:ie(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}("self"===e?r:e)}))),r.contains.forEach((function(e){n(e,s)})),r.starts&&n(r.starts,o),s.matcher=function(e){const t=new i;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(s),s}(e)}function ie(e){return!!e&&(e.endsWithParent||ie(e.starts))}class re extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const oe=o,ae=a,se=Symbol("nomatch");var le=function(e){const t=Object.create(null),n=Object.create(null),o=[];let a=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let c={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:d};function u(e){return c.noHighlightRe.test(e)}function b(e,t,n){let i="",r="";"object"==typeof t?(i=e,n=t.ignoreIllegals,r=t.language):(Y("10.7.0","highlight(lang, code, ...args) has been deprecated."),Y("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),r=e,i=t),void 0===n&&(n=!0);const o={code:i,language:r};N("before:highlight",o);const a=o.result?o.result:x(o.language,o.code,n);return a.code=o.code,N("after:highlight",a),a}function x(e,n,i,o){const l=Object.create(null);function d(){if(!j.keywords)return void S.addText(L);let e=0;j.keywordPatternRe.lastIndex=0;let t=j.keywordPatternRe.exec(L),n="";for(;t;){n+=L.substring(e,t.index);const r=_.case_insensitive?t[0].toLowerCase():t[0],o=(i=r,j.keywords[i]);if(o){const[e,i]=o;if(S.addText(n),n="",l[r]=(l[r]||0)+1,l[r]<=7&&(M+=i),e.startsWith("_"))n+=t[0];else{const n=_.classNameAliases[e]||e;S.addKeyword(t[0],n)}}else n+=t[0];e=j.keywordPatternRe.lastIndex,t=j.keywordPatternRe.exec(L)}var i;n+=L.substr(e),S.addText(n)}function u(){null!=j.subLanguage?function(){if(""===L)return;let e=null;if("string"==typeof j.subLanguage){if(!t[j.subLanguage])return void S.addText(L);e=x(j.subLanguage,L,!0,N[j.subLanguage]),N[j.subLanguage]=e._top}else e=y(L,j.subLanguage.length?j.subLanguage:null);j.relevance>0&&(M+=e.relevance),S.addSublanguage(e._emitter,e.language)}():d(),L=""}function g(e,t){let n=1;const i=t.length-1;for(;n<=i;){if(!e._emit[n]){n++;continue}const i=_.classNameAliases[e[n]]||e[n],r=t[n];i?S.addKeyword(r,i):(L=r,d(),L=""),n++}}function h(e,t){return e.scope&&"string"==typeof e.scope&&S.openNode(_.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(S.addKeyword(L,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),L=""):e.beginScope._multi&&(g(e.beginScope,t),L="")),j=Object.create(e,{parent:{value:j}}),j}function p(e,t,n){let i=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,n);if(i){if(e["on:end"]){const n=new r(e);e["on:end"](t,n),n.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return p(e.parent,t,n)}function f(e){return 0===j.matcher.regexIndex?(L+=e[0],1):(R=!0,0)}function m(e){const t=e[0],i=n.substr(e.index),r=p(j,e,i);if(!r)return se;const o=j;j.endScope&&j.endScope._wrap?(u(),S.addKeyword(t,j.endScope._wrap)):j.endScope&&j.endScope._multi?(u(),g(j.endScope,e)):o.skip?L+=t:(o.returnEnd||o.excludeEnd||(L+=t),u(),o.excludeEnd&&(L=t));do{j.scope&&S.closeNode(),j.skip||j.subLanguage||(M+=j.relevance),j=j.parent}while(j!==r.parent);return r.starts&&h(r.starts,e),o.returnEnd?0:t.length}let b={};function w(t,o){const s=o&&o[0];if(L+=t,null==s)return u(),0;if("begin"===b.type&&"end"===o.type&&b.index===o.index&&""===s){if(L+=n.slice(o.index,o.index+1),!a){const t=new Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=b.rule,t}return 1}if(b=o,"begin"===o.type)return function(e){const t=e[0],n=e.rule,i=new r(n),o=[n.__beforeBegin,n["on:begin"]];for(const n of o)if(n&&(n(e,i),i.isMatchIgnored))return f(t);return n.skip?L+=t:(n.excludeBegin&&(L+=t),u(),n.returnBegin||n.excludeBegin||(L=t)),h(n,e),n.returnBegin?0:t.length}(o);if("illegal"===o.type&&!i){const e=new Error('Illegal lexeme "'+s+'" for mode "'+(j.scope||"<unnamed>")+'"');throw e.mode=j,e}if("end"===o.type){const e=m(o);if(e!==se)return e}if("illegal"===o.type&&""===s)return 1;if(A>1e5&&A>3*o.index)throw new Error("potential infinite loop, way more iterations than matches");return L+=s,s.length}const _=E(e);if(!_)throw J(s.replace("{}",e)),new Error('Unknown language: "'+e+'"');const v=ne(_);let k="",j=o||v;const N={},S=new c.__emitter(c);!function(){const e=[];for(let t=j;t!==_;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach((e=>S.openNode(e)))}();let L="",M=0,O=0,A=0,R=!1;try{for(j.matcher.considerAll();;){A++,R?R=!1:j.matcher.considerAll(),j.matcher.lastIndex=O;const e=j.matcher.exec(n);if(!e)break;const t=w(n.substring(O,e.index),e);O=e.index+t}return w(n.substr(O)),S.closeAllNodes(),S.finalize(),k=S.toHTML(),{language:e,value:k,relevance:M,illegal:!1,_emitter:S,_top:j}}catch(t){if(t.message&&t.message.includes("Illegal"))return{language:e,value:oe(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:O,context:n.slice(O-100,O+100),mode:t.mode,resultSoFar:k},_emitter:S};if(a)return{language:e,value:oe(n),illegal:!1,relevance:0,errorRaised:t,_emitter:S,_top:j};throw t}}function y(e,n){n=n||c.languages||Object.keys(t);const i=function(e){const t={value:oe(e),illegal:!1,relevance:0,_top:l,_emitter:new c.__emitter(c)};return t._emitter.addText(e),t}(e),r=n.filter(E).filter(j).map((t=>x(t,e,!1)));r.unshift(i);const o=r.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(E(e.language).supersetOf===t.language)return 1;if(E(t.language).supersetOf===e.language)return-1}return 0})),[a,s]=o,d=a;return d.secondBest=s,d}function w(e){let t=null;const i=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=c.languageDetectRe.exec(t);if(n){const t=E(n[1]);return t||(V(s.replace("{}",n[1])),V("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>u(e)||E(e)))}(e);if(u(i))return;if(N("before:highlightElement",{el:e,language:i}),e.children.length>0&&(c.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),c.throwUnescapedHTML))throw new re("One of your code blocks includes unescaped HTML.",e.innerHTML);t=e;const r=t.textContent,o=i?b(r,{language:i,ignoreIllegals:!0}):y(r);e.innerHTML=o.value,function(e,t,i){const r=t&&n[t]||i;e.classList.add("hljs"),e.classList.add(`language-${r}`)}(e,i,o.language),e.result={language:o.language,re:o.relevance,relevance:o.relevance},o.secondBest&&(e.secondBest={language:o.secondBest.language,relevance:o.secondBest.relevance}),N("after:highlightElement",{el:e,result:o,text:r})}let _=!1;function v(){"loading"!==document.readyState?document.querySelectorAll(c.cssSelector).forEach(w):_=!0}function E(e){return e=(e||"").toLowerCase(),t[e]||t[n[e]]}function k(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{n[e.toLowerCase()]=t}))}function j(e){const t=E(e);return t&&!t.disableAutodetect}function N(e,t){const n=e;o.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){_&&v()}),!1),Object.assign(e,{highlight:b,highlightAuto:y,highlightAll:v,highlightElement:w,highlightBlock:function(e){return Y("10.7.0","highlightBlock will be removed entirely in v12.0"),Y("10.7.0","Please use highlightElement now."),w(e)},configure:function(e){c=ae(c,e)},initHighlighting:()=>{v(),Y("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){v(),Y("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(n,i){let r=null;try{r=i(e)}catch(e){if(J("Language definition for '{}' could not be registered.".replace("{}",n)),!a)throw e;J(e),r=l}r.name||(r.name=n),t[n]=r,r.rawDefinition=i.bind(null,e),r.aliases&&k(r.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e];for(const t of Object.keys(n))n[t]===e&&delete n[t]},listLanguages:function(){return Object.keys(t)},getLanguage:E,registerAliases:k,autoDetection:j,inherit:ae,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),o.push(e)}}),e.debugMode=function(){a=!1},e.safeMode=function(){a=!0},e.versionString="11.5.0",e.regex={concat:f,lookahead:g,either:m,optional:p,anyNumberOfTimes:h};for(const e in H)"object"==typeof H[e]&&i(H[e]);return Object.assign(e,H),e}({});e.exports=le,le.HighlightJS=le,le.default=le}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(379),t=n.n(e),i=n(795),r=n.n(i),o=n(569),a=n.n(o),s=n(565),l=n.n(s),c=n(216),d=n.n(c),u=n(589),g=n.n(u),h=n(695),p={};p.styleTagTransform=g(),p.setAttributes=l(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=d(),t()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals;const f=n(384);function m(e){const t={begin:/\|[A-Za-z]+:?/,keywords:{name:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"},contains:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE]};return{name:"Django",aliases:["jinja"],case_insensitive:!0,subLanguage:"xml",contains:[e.COMMENT(/\{%\s*comment\s*%\}/,/\{%\s*endcomment\s*%\}/),e.COMMENT(/\{#/,/#\}/),{className:"template-tag",begin:/\{%/,end:/%\}/,contains:[{className:"name",begin:/\w+/,keywords:{name:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"},starts:{endsWithParent:!0,keywords:"in by as",contains:[t],relevance:0}}]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[t]}]}}function b(e){const t="true false yes no null",n="[\\w#;/?:@&=+$,.~*'()[\\]]+",i={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]}]},r=e.inherit(i,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),o={end:",",endsWithParent:!0,excludeEnd:!0,keywords:t,relevance:0},a={begin:/\{/,end:/\}/,contains:[o],illegal:"\\n",relevance:0},s={begin:"\\[",end:"\\]",contains:[o],illegal:"\\n",relevance:0},l=[{className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]},{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+n},{className:"type",begin:"!<"+n+">"},{className:"type",begin:"!"+n},{className:"type",begin:"!!"+n},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:t,keywords:{literal:t}},{className:"number",begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"},{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},a,s,i],c=[...l];return c.pop(),c.push(r),o.contains=c,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:l}}document.addEventListener("DOMContentLoaded",(()=>{f.registerLanguage("django",m),f.registerLanguage("yaml",b),f.highlightAll(),document.querySelectorAll(".js-toggle-pattern").forEach((e=>{e.addEventListener("click",(e=>{e.target.classList.toggle("is-open");for(const t of e.target.closest(".js-list-item").childNodes)"UL"===t.nodeName&&t.classList.toggle("is-open")}))})),function(){const e=document.querySelector("body"),t=document.querySelector(".js-iframe"),n=document.querySelectorAll(".js-resize-iframe");t.addEventListener("mousedown",(function(){this.classList.remove("is-animatable")})),t.addEventListener("mouseup",(function(){this.classList.add("is-animatable")})),t.contentWindow.addEventListener("resize",(e=>{document.querySelector(".js-iframe-size").innerHTML=`${e.target.innerWidth} x ${e.target.innerHeight}`})),document.addEventListener("keydown",(t=>{"Escape"===(t=t||window.event).key&&e.classList.remove("iframe-open")})),n.forEach((e=>{e.addEventListener("click",(e=>{n.forEach((e=>e.classList.remove("is-active"))),e.target.classList.add("is-active"),t.style.width=100==e.target.dataset.resize?`${e.target.dataset.resize}%`:`${e.target.dataset.resize}px`}))}))}(),function(){const e=document.querySelector(".js-iframe").contentWindow;document.querySelector(".js-iframe-size").innerHTML=`${e.innerWidth} x ${e.innerHeight}`}(),document.querySelector(".js-close-menu").addEventListener("click",(e=>{document.querySelector("body").classList.toggle("nav-closed")})),function(){let e,t=document.querySelectorAll(".tabbed-content__heading");function n(n){for(let e=0;e<t.length;e++)t[e].classList.remove("tabbed-content__heading--active");n.currentTarget.classList.add("tabbed-content__heading--active"),n.preventDefault();let i=document.querySelectorAll(".tabbed-content__item");for(e=0;e<i.length;e++)i[e].classList.remove("tabbed-content__item--active");let r=n.target.getAttribute("href");document.querySelector(r).classList.add("tabbed-content__item--active")}for(e=0;e<t.length;e++)t[e].addEventListener("click",n)}(),function(){if(location.pathname.includes("/pattern/")){const e=location.pathname.split("/pattern/")[1],t=document.getElementById(e);t.classList.add("is-active");const n=t.closest("ul"),i=n.previousElementSibling,r=i.closest("ul"),o=r.previousElementSibling;n.classList.add("is-open"),i.classList.add("is-open"),r.classList.add("is-open"),o.classList.add("is-open")}}(),function(){const e=document.getElementById("js-pattern-search-input"),t=[...document.querySelectorAll(".list__item-link")],n=document.getElementById("sidebar-nav"),i=document.getElementById("js-pattern-search-results-container");e.addEventListener("keyup",(e=>{let r=e.target.value.toLowerCase();if(""===r&&(i.innerHTML="",n.classList.remove("sidebar__nav--inactive")),13==e.keyCode&&""!=r){i.innerHTML="",n.classList.add("sidebar__nav--inactive");let e=t.filter((function(e){return e.textContent.toLowerCase().includes(r)}));e.length?e.forEach((e=>{i.innerHTML+='<a href="'+e.getAttribute("href")+'">'+e.textContent+"</a>"})):i.innerHTML="No results found."}}))}(),window.matchMedia("(max-width: 600px)").matches&&document.querySelector("body").classList.add("nav-closed")}))})()})();