!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.wikipediaPreviews=t():e.wikipediaPreviews=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".wp-popup {\n  box-sizing: border-box;\n  padding: 0;\n  position: absolute;\n  border: solid rgba(0, 0, 0, 0.05) 1px;\n  border-radius: 2px;\n  background-color: white;\n  box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.3), 0 0 1px 1px rgba(0, 0, 0, 0.05);\n  height: 200px;\n  width: auto;\n  z-index: 110;\n}\n.wp-popup * {\n  box-sizing: border-box;\n}\n.wp-popup .wp-article-preview {\n  display: flex;\n}\n.wp-popup .wp-article-preview .wp-text-content {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-title {\n  font-size: 20px;\n  font-family: 'Linux Libertine', 'Georgia', 'Times', serif;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview {\n  font-size: 14px;\n  flex-grow: 1;\n  font-family: sans-serif;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview p {\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  line-height: 20px;\n  max-height: 140px;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview p:after {\n  content: ' ';\n  position: absolute;\n  bottom: 25px;\n  left: 10px;\n  right: 200px;\n  top: 160px;\n  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffffff', GradientType=0);\n  /* IE6-9 */\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview .wp-link {\n  font-family: 'Linux Libertine';\n}\n.wp-popup .wp-article-preview .wp-image {\n  width: 200px;\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(p," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,p;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(h(r.parts[a],t))}else{for(var s=[];a<r.parts.length;a++)s.push(h(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,g=0;function h(e,t){var n,r,o;if(t.singleton){var i=g++;n=v||(v=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e,t);return p(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i],u=o[a.id];u&&(u.refs--,r.push(u))}e&&p(s(e,t),t);for(var c=0;c<r.length;c++){var l=r[c];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete o[l.id]}}}}},function(e,t,n){"use strict";n.r(t);var r,o=function(e,t){return t=t||{},new Promise((function(n,r){var o=new XMLHttpRequest,i=[],a=[],s={},p=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:p,headers:{keys:function(){return i},entries:function(){return a},get:function(e){return s[e.toLowerCase()]},has:function(e){return e.toLowerCase()in s}}}};for(var u in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){i.push(t=t.toLowerCase()),a.push([t,n]),s[t]=s[t]?s[t]+","+n:n})),n(p())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(u,t.headers[u]);o.send(t.body||null)}))},i={},a={},s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;return void 0!==i[e]?Promise.resolve(i[e]):a[e]?a[e]:a[e]=n(e).then((function(e){return e.json()})).then((function(e){return t(e)})).then((function(t){return i[e]=t,t}))},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,r="https://".concat(e,".wikipedia.org/api/rest_v1/page/summary/").concat(encodeURIComponent(t));return n(r,(function(e){return"standard"===e.type&&("ltr"===e.dir&&{title:e.displaytitle,extractHtml:e.extract_html,pageUrl:e.content_urls.desktop.page,imgUrl:e.thumbnail?e.thumbnail.source:null})}))},u=function(e,t,n,r,o,i){var a,s="",p="";return a=e.x>o/2?n+e.right-t:n+e.left,e.y>i/2?p=i-e.top-r:s=r+e.bottom,{left:a,right:"",top:s,bottom:p}},c=function(e){return e?e+"px":e},l=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;r||((r=n.document.createElement("div")).setAttribute("dir","ltr"),r.classList.add("wp-popup"),r.style.visibility="hidden",e.appendChild(r));var o=function e(n){var o=n.toElement;o===t||r.contains(o)||(r.style.visibility="hidden",t.removeEventListener("mouseleave",e),t=null)};r.addEventListener("mouseleave",o);var i=function(e,i){r.innerHTML=e;var a=void 0!==n.pageXOffset?n.pageXOffset:(n.document.documentElement||n.document.body.parentNode||n.document.body).scrollLeft,s=void 0!==n.pageYOffset?n.pageYOffset:(n.document.documentElement||n.document.body.parentNode||n.document.body).scrollTop,p=u(i.getBoundingClientRect(),r.offsetWidth,a,s,n.innerWidth,n.innerHeight);r.style.left=c(p.left),r.style.right=c(p.right),r.style.top=c(p.top),r.style.bottom=c(p.bottom),(t=i).addEventListener("mouseleave",o),r.style.visibility="visible"};return{show:i}},f={en:{wikipedia:"Wikipedia"},fr:{wikipedia:"Wikipédia"},es:{wikipedia:"Wikipedia"}},d=function(e,t){var n=t.imgUrl?'<div class="wp-image" style="background-image: url(\''.concat(t.imgUrl,"');\" />"):"",r=function(e,t){return(f[e]||f.en)[t]}(e,"wikipedia");return'\n\t\t<div class="wp-article-preview">\n\t\t\t<div class="wp-text-content">\n\t\t\t\t<div class="wp-title">'.concat(t.title,'</div>\n\t\t\t\t<div class="wp-preview">').concat(t.extractHtml,'</div>\n\t\t\t\t<a class="wp-link" href="').concat(t.pageUrl,'" target="_blank">').concat(r,"</a>\n\t\t\t</div>\n\t\t\t").concat(n,"\n\t\t</div>\n\t").trim()};n(0);function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.root,n=e.selector,r=e.lang,o=e.popupContainer,i=r||"en";t=t||document,n=n||"[data-wikipedia-preview]",o=o||document.body;var a=l(o),s=function(e){var t=e.target,n=t.getAttribute("data-wp-title")||t.textContent,r=t.getAttribute("data-wp-lang")||i;p(r,n).then((function(e){e&&a.show(d(r,e),t)}))};Array.prototype.forEach.call(t.querySelectorAll(n),(function(e){e.addEventListener("mouseenter",s)}))}n.d(t,"init",(function(){return v}))}])}));