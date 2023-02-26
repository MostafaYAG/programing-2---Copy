!function(e,d,u,p){var s=[],t={_version:"3.11.7",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}};(l=function(){}).prototype=t;var l=new l,c=[];function f(e,t){return typeof e===t}var i,n,m=u.documentElement,h="svg"===m.nodeName.toLowerCase();function a(e){var t,n=m.className,r=l._config.classPrefix||"";h&&(n=n.baseVal),l._config.enableJSClass&&(t=new RegExp("(^|\\s)"+r+"no-js(\\s|$)"),n=n.replace(t,"$1"+r+"js$2")),l._config.enableClasses&&(0<e.length&&(n+=" "+r+e.join(" "+r)),h?m.className.baseVal=n:m.className=n)}function v(e,t){if("object"==typeof e)for(var n in e)i(e,n)&&v(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=l[r[0]];if(void 0!==(o=2===r.length?o[r[1]]:o))return l;t="function"==typeof t?t():t,1===r.length?l[r[0]]=t:(!l[r[0]]||l[r[0]]instanceof Boolean||(l[r[0]]=new Boolean(l[r[0]])),l[r[0]][r[1]]=t),a([(t&&!1!==t?"":"no-")+r.join("-")]),l._trigger(e,t)}return l}function g(e){return"function"!=typeof u.createElement?u.createElement(e):h?u.createElementNS.call(u,"http://www.w3.org/2000/svg",e):u.createElement.apply(u,arguments)}i=void 0!==(n={}.hasOwnProperty)&&void 0!==n.call?function(e,t){return n.call(e,t)}:function(e,t){return t in e&&void 0===e.constructor.prototype[t]},t._l={},t.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),l.hasOwnProperty(e)&&setTimeout(function(){l._trigger(e,l[e])},0)},t._trigger=function(e,t){var n;this._l[e]&&(n=this._l[e],setTimeout(function(){for(var e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e])},l._q.push(function(){t.addTest=v}),h||function(e,a){var o,s,t=e.html5||{},r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,n="_html5shiv",l=0,c={};function f(e,t){var n=e.createElement("p"),e=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",e.insertBefore(n.lastChild,e.firstChild)}function d(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function p(e){var t=c[e[n]];return t||(t={},l++,e[n]=l,c[l]=t),t}function u(e,t,n){return t=t||a,s?t.createElement(e):!(t=(n=n||p(t)).cache[e]?n.cache[e].cloneNode():i.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||r.test(e)||t.tagUrn?t:n.frag.appendChild(t)}function m(e){var t,n,r=p(e=e||a);return!h.shivCSS||o||r.hasCSS||(r.hasCSS=!!f(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||(t=e,(n=r).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return h.shivMethods?u(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,n.frag)),e}!function(){try{var e=a.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e,s=1==e.childNodes.length||function(){a.createElement("a");var e=a.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=o=!0}}();var h={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==t.shivCSS,supportsUnknownElements:s,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:m,createElement:u,createDocumentFragment:function(e,t){if(e=e||a,s)return e.createDocumentFragment();for(var n=(t=t||p(e)).frag.cloneNode(),r=0,o=d(),i=o.length;r<i;r++)n.createElement(o[r]);return n},addElements:function(e,t){var n=h.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),h.elements=n+" "+e,m(t)}};e.html5=h,m(a);var v=/^$|\b(?:all|print)\b/,g="html5shiv",y=!(s||(t=a.documentElement,void 0===a.namespaces||void 0===a.parentWindow||void 0===t.applyElement||void 0===t.removeNode||void 0===e.attachEvent));function E(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+d().join("|")+")$","i"),i=[];r--;)t=n[r],o.test(t.nodeName)&&i.push(t.applyElement(function(e){var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(g+":"+e.nodeName);for(;r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}(t)));return i}function b(s){var l,c,e=p(s),t=s.namespaces,n=s.parentWindow;return!y||s.printShived||(void 0===t[g]&&t.add(g),n.attachEvent("onbeforeprint",function(){u();for(var e,t,n,r=s.styleSheets,o=[],i=r.length,a=Array(i);i--;)a[i]=r[i];for(;n=a.pop();)if(!n.disabled&&v.test(n.media)){try{t=(e=n.imports).length}catch(e){t=0}for(i=0;i<t;i++)a.push(e[i]);try{o.push(n.cssText)}catch(e){}}o=function(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+d().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+g+"\\:$2";r--;)(t=n[r]=n[r].split("}"))[t.length-1]=t[t.length-1].replace(o,i),n[r]=t.join("}");return n.join("{")}(o.reverse().join("")),c=E(s),l=f(s,o)}),n.attachEvent("onafterprint",function(){!function(e){for(var t=e.length;t--;)e[t].removeNode()}(c),clearTimeout(e._removeSheetTimer),e._removeSheetTimer=setTimeout(u,500)}),s.printShived=!0),s;function u(){clearTimeout(e._removeSheetTimer),l&&l.removeNode(!0),l=null}}h.type+=" print",(h.shivPrint=b)(a),"object"==typeof module&&module.exports&&(module.exports=h)}(void 0!==d?d:this,u);var r={elem:g("modernizr")};l._q.push(function(){delete r.elem});var y={style:r.elem.style};function E(e,t,n,r){var o,i,a,s="modernizr",l=g("div"),c=((a=u.body)||((a=g(h?"svg":"body")).fake=!0),a);if(parseInt(n,10))for(;n--;)(o=g("div")).id=r?r[n]:s+(n+1),l.appendChild(o);return(a=g("style")).type="text/css",a.id="s"+s,(c.fake?c:l).appendChild(a),c.appendChild(l),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(u.createTextNode(e)),l.id=s,c.fake&&(c.style.background="",c.style.overflow="hidden",i=m.style.overflow,m.style.overflow="hidden",m.appendChild(c)),e=t(l,e),c.fake&&c.parentNode?(c.parentNode.removeChild(c),m.style.overflow=i,m.offsetHeight):l.parentNode.removeChild(l),!!e}function b(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function S(e,t,n){var r,o;return"getComputedStyle"in d?(r=getComputedStyle.call(d,e,t),o=d.console,null!==r?n&&(r=r.getPropertyValue(n)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")):r=!t&&e.currentStyle&&e.currentStyle[n],r}function x(e,t,n,r){if(r=void 0!==r&&r,void 0!==n){var o=function(e,t){var n=e.length;if("CSS"in d&&"supports"in d.CSS){for(;n--;)if(d.CSS.supports(b(e[n]),t))return!0;return!1}if("CSSSupportsRule"in d){for(var r=[];n--;)r.push("("+b(e[n])+":"+t+")");return E("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===S(e,null,"position")})}return p}(e,n);if(void 0!==o)return o}for(var i,a,s,l,c,u=["modernizr","tspan","samp"];!y.style&&u.length;)i=!0,y.modElem=g(u.shift()),y.style=y.modElem.style;function f(){i&&(delete y.style,delete y.modElem)}for(s=e.length,a=0;a<s;a++)if(l=e[a],c=y.style[l],~(""+l).indexOf("-")&&(l=l.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),y.style[l]!==p){if(r||void 0===n)return f(),"pfx"!==t||l;try{y.style[l]=n}catch(e){}if(y.style[l]!==c)return f(),"pfx"!==t||l}return f(),!1}l._q.unshift(function(){delete y.style});t.testProp=function(e,t,n){return x([e],p,t,n)};var o="Moz O ms Webkit",w=t._config.usePrefixes?o.split(" "):[];t._cssomPrefixes=w;var C=t._config.usePrefixes?o.toLowerCase().split(" "):[];function T(e,t,n){var r,o;for(o in e)if(e[o]in t)return!1===n?e[o]:f(r=t[e[o]],"function")?function(e,t){return function(){return e.apply(t,arguments)}}(r,n||t):r;return!1}function _(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+w.join(i+" ")+i).split(" ");return f(t,"string")||void 0===t?x(a,t,r,o):T(a=(e+" "+C.join(i+" ")+i).split(" "),t,n)}function N(e,t,n){return _(e,p,p,t,n)}t._domPrefixes=C,t.testAllProps=_,t.testAllProps=N,l.addTest("svg",!!u.createElementNS&&!!u.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var j=t._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];t._prefixes=j;var P,z=(P=d.matchMedia||d.msMatchMedia)?function(e){e=P(e);return e&&e.matches||!1}:function(e){var t=!1;return E("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"===S(e,null,"position")}),t};t.mq=z,l.addTest("touchevents",function(){if("ontouchstart"in d||d.TouchEvent||d.DocumentTouch&&u instanceof DocumentTouch)return!0;var e=["(",j.join("touch-enabled),("),"heartz",")"].join("");return z(e)}),l.addTest("flexbox",N("flexBasis","1px",!0)),l.addTest("flexboxlegacy",N("boxDirection","reverse",!0)),l.addTest("flexboxtweener",N("flexAlign","end",!0)),function(){var e,t,n,r,o,i,a;for(a in s)if(s.hasOwnProperty(a)){if(e=[],(t=s[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=f(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?l[i[0]]=r:(l[i[0]]&&(!l[i[0]]||l[i[0]]instanceof Boolean)||(l[i[0]]=new Boolean(l[i[0]])),l[i[0]][i[1]]=r),c.push((r?"":"no-")+i.join("-"))}}(),a(c),delete t.addTest,delete t.addAsyncTest;for(var k=0;k<l._q.length;k++)l._q[k]();e.Modernizr=l}(window,window,document);