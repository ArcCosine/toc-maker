!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";!function(){var e=function(e,t,n){var o=e.appendChild(document.createElement(t));return void 0!==n&&o.appendChild(document.createTextNode(n)),o},t=function(){var t=document.querySelector("head");e(t,"style","\n        .__toc__ul {\n            max-height:0;\n            overflow: hidden;\n            transition: max-height .8s linear;\n        }\n        .__toc__open {\n            max-height: 50em;\n            height: auto;\n        }").setAttribute("type","text/css")},n=function(e,t){var n=document.querySelectorAll("h1,h2,h3,h4,h5,h6"),r=[],a=0;Array.prototype.forEach.call(n,function(e){e.id||e.setAttribute("id","toc-maker-"+a),r.push({level:parseInt(e.tagName.replace(/h/i,""),10),text:e.textContent,link:"#"+e.id}),a++});var i=o(r,t);e.appendChild(i)},o=function(t,n){n.toggleOpen=n.toggleOpen||!1;var o=document.createDocumentFragment();if(n.title&&e(o,"span",n.titleLabel||"title"),n.toggle){var r=n.toggleLabelOpen||"[open]",a=n.toggleLabelClose||"[close]",i=function(){var e=l.parentNode.querySelector("ul");e.classList.toggle("__toc__open"),setTimeout(function(){c.textContent=e.classList.contains("__toc__open")?a:r},800)},l=e(o,"span"),c=e(l,"a",n.toggleOpen?a:r);c.href="#",c.addEventListener("click",i,!1)}var u=e(o,"ul");u.classList.add("__toc__ul"),n.toggleOpen&&u.classList.add("__toc__open");var s=n.startLevel||1;return t.forEach(function(t){if(t.level!==s){var n=t.level-s;if(n>0)u=e(u,"ul");else for(var o=n;o<0;o++)u=u.parentNode}var r=e(u,"li");e(r,"a",t.text).setAttribute("href",t.link),s=t.level}),o};document.addEventListener("DOMContentLoaded",function e(){var o=window._tocMakerParam||{},r=o.id||"#toc",a=document.querySelector(r);if(a)return t(),void n(a,o);window.setTimeout(e,160)},!1)}()}]);