!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/BooleanCurse/",n(n.s=2)}([function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return L})),n.d(e,"hydrate",(function(){return D})),n.d(e,"createElement",(function(){return v})),n.d(e,"h",(function(){return v})),n.d(e,"Fragment",(function(){return m})),n.d(e,"createRef",(function(){return g})),n.d(e,"isValidElement",(function(){return o})),n.d(e,"Component",(function(){return b})),n.d(e,"cloneElement",(function(){return W})),n.d(e,"createContext",(function(){return F})),n.d(e,"toChildArray",(function(){return O})),n.d(e,"_unmount",(function(){return R})),n.d(e,"options",(function(){return r}));var r,o,u,i,l,c,a,s,f={},p=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function d(t,e){for(var n in e)t[n]=e[n];return t}function h(t){var e=t.parentNode;e&&e.removeChild(t)}function v(t,e,n){var r,o=arguments,u={};for(r in e)"key"!==r&&"ref"!==r&&(u[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(u.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===u[r]&&(u[r]=t.defaultProps[r]);return y(t,u,e&&e.key,e&&e.ref,null)}function y(t,e,n,o,u){var i={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:u};return null==u&&(i.__v=i),r.vnode&&r.vnode(i),i}function g(){return{}}function m(t){return t.children}function b(t,e){this.props=t,this.context=e}function k(t,e){if(null==e)return t.__?k(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?k(t):null}function x(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return x(t)}}function C(t){(!t.__d&&(t.__d=!0)&&u.push(t)&&!i++||c!==r.debounceRendering)&&((c=r.debounceRendering)||l)(S)}function S(){for(var t;i=u.length;)t=u.sort((function(t,e){return t.__v.__b-e.__v.__b})),u=[],t.some((function(t){var e,n,r,o,u,i,l;t.__d&&(i=(u=(e=t).__v).__e,(l=e.__P)&&(n=[],(r=d({},u)).__v=r,o=A(l,u,r,e.__n,void 0!==l.ownerSVGElement,null,n,null==i?k(u):i),N(n,u),o!=i&&x(u)))}))}function w(t,e,n,r,o,u,i,l,c,a){var s,_,d,v,g,b,x,C,S,w=r&&r.__k||p,O=w.length;for(c==f&&(c=null!=i?i[0]:O?k(r,0):null),n.__k=[],s=0;s<e.length;s++)if(null!=(v=n.__k[s]=null==(v=e[s])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?y(null,v,null,null,v):Array.isArray(v)?y(m,{children:v},null,null,null):null!=v.__e||null!=v.__c?y(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(d=w[s])||d&&v.key==d.key&&v.type===d.type)w[s]=void 0;else for(_=0;_<O;_++){if((d=w[_])&&v.key==d.key&&v.type===d.type){w[_]=void 0;break}d=null}if(g=A(t,v,d=d||f,o,u,i,l,c,a),(_=v.ref)&&d.ref!=_&&(C||(C=[]),d.ref&&C.push(d.ref,null,v),C.push(_,v.__c||g,v)),null!=g){if(null==x&&(x=g),S=void 0,void 0!==v.__d)S=v.__d,v.__d=void 0;else if(i==d||g!=c||null==g.parentNode){t:if(null==c||c.parentNode!==t)t.appendChild(g),S=null;else{for(b=c,_=0;(b=b.nextSibling)&&_<O;_+=2)if(b==g)break t;t.insertBefore(g,c),S=c}"option"==n.type&&(t.value="")}c=void 0!==S?S:g.nextSibling,"function"==typeof n.type&&(n.__d=c)}else c&&d.__e==c&&c.parentNode!=t&&(c=k(d))}if(n.__e=x,null!=i&&"function"!=typeof n.type)for(s=i.length;s--;)null!=i[s]&&h(i[s]);for(s=O;s--;)null!=w[s]&&R(w[s],w[s]);if(C)for(s=0;s<C.length;s++)E(C[s],C[++s],C[++s])}function O(t){return null==t||"boolean"==typeof t?[]:Array.isArray(t)?p.concat.apply([],t.map(O)):[t]}function P(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===_.test(e)?n+"px":null==n?"":n}function U(t,e,n,r,o){var u,i,l,c,a;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(u=t.style,"string"==typeof n)u.cssText=n;else{if("string"==typeof r&&(u.cssText="",r=null),r)for(c in r)n&&c in n||P(u,c,"");if(n)for(a in n)r&&n[a]===r[a]||P(u,a,n[a])}else"o"===e[0]&&"n"===e[1]?(i=e!==(e=e.replace(/Capture$/,"")),l=e.toLowerCase(),e=(l in t?l:e).slice(2),n?(r||t.addEventListener(e,j,i),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,j,i)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function j(t){this.l[t.type](r.event?r.event(t):t)}function A(t,e,n,o,u,i,l,c,a){var s,f,p,_,h,v,y,g,k,x,C,S=e.type;if(void 0!==e.constructor)return null;(s=r.__b)&&s(e);try{t:if("function"==typeof S){if(g=e.props,k=(s=S.contextType)&&o[s.__c],x=s?k?k.props.value:s.__:o,n.__c?y=(f=e.__c=n.__c).__=f.__E:("prototype"in S&&S.prototype.render?e.__c=f=new S(g,x):(e.__c=f=new b(g,x),f.constructor=S,f.render=T),k&&k.sub(f),f.props=g,f.state||(f.state={}),f.context=x,f.__n=o,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=d({},f.__s)),d(f.__s,S.getDerivedStateFromProps(g,f.__s))),_=f.props,h=f.state,p)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==_&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(g,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(g,f.__s,x)||e.__v===n.__v){for(f.props=g,f.state=f.__s,e.__v!==n.__v&&(f.__d=!1),f.__v=e,e.__e=n.__e,e.__k=n.__k,f.__h.length&&l.push(f),s=0;s<e.__k.length;s++)e.__k[s]&&(e.__k[s].__=e);break t}null!=f.componentWillUpdate&&f.componentWillUpdate(g,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(_,h,v)}))}f.context=x,f.props=g,f.state=f.__s,(s=r.__r)&&s(e),f.__d=!1,f.__v=e,f.__P=t,s=f.render(f.props,f.state,f.context),null!=f.getChildContext&&(o=d(d({},o),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(v=f.getSnapshotBeforeUpdate(_,h)),C=null!=s&&s.type==m&&null==s.key?s.props.children:s,w(t,Array.isArray(C)?C:[C],e,n,o,u,i,l,c,a),f.base=e.__e,f.__h.length&&l.push(f),y&&(f.__E=f.__=null),f.__e=!1}else null==i&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=M(n.__e,e,n,o,u,i,l,a);(s=r.diffed)&&s(e)}catch(t){e.__v=null,r.__e(t,e,n)}return e.__e}function N(t,e){r.__c&&r.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){r.__e(t,e.__v)}}))}function M(t,e,n,r,o,u,i,l){var c,a,s,_,d,h=n.props,v=e.props;if(o="svg"===e.type||o,null!=u)for(c=0;c<u.length;c++)if(null!=(a=u[c])&&((null===e.type?3===a.nodeType:a.localName===e.type)||t==a)){t=a,u[c]=null;break}if(null==t){if(null===e.type)return document.createTextNode(v);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,v.is&&{is:v.is}),u=null,l=!1}if(null===e.type)h!==v&&t.data!=v&&(t.data=v);else{if(null!=u&&(u=p.slice.call(t.childNodes)),s=(h=n.props||f).dangerouslySetInnerHTML,_=v.dangerouslySetInnerHTML,!l){if(null!=u)for(h={},d=0;d<t.attributes.length;d++)h[t.attributes[d].name]=t.attributes[d].value;(_||s)&&(_&&s&&_.__html==s.__html||(t.innerHTML=_&&_.__html||""))}(function(t,e,n,r,o){var u;for(u in n)"children"===u||"key"===u||u in e||U(t,u,null,n[u],r);for(u in e)o&&"function"!=typeof e[u]||"children"===u||"key"===u||"value"===u||"checked"===u||n[u]===e[u]||U(t,u,e[u],n[u],r)})(t,v,h,o,l),_?e.__k=[]:(c=e.props.children,w(t,Array.isArray(c)?c:[c],e,n,r,"foreignObject"!==e.type&&o,u,i,f,l)),l||("value"in v&&void 0!==(c=v.value)&&c!==t.value&&U(t,"value",c,h.value,!1),"checked"in v&&void 0!==(c=v.checked)&&c!==t.checked&&U(t,"checked",c,h.checked,!1))}return t}function E(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){r.__e(t,n)}}function R(t,e,n){var o,u,i;if(r.unmount&&r.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||E(o,null,e)),n||"function"==typeof t.type||(n=null!=(u=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){r.__e(t,e)}o.base=o.__P=null}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&R(o[i],e,n);null!=u&&h(u)}function T(t,e,n){return this.constructor(t,n)}function L(t,e,n){var o,u,i;r.__&&r.__(t,e),u=(o=n===a)?null:n&&n.__k||e.__k,t=v(m,null,[t]),i=[],A(e,(o?e:n||e).__k=t,u||f,f,void 0!==e.ownerSVGElement,n&&!o?[n]:u?null:e.childNodes.length?p.slice.call(e.childNodes):null,i,n||f,o),N(i,t)}function D(t,e){L(t,e,a)}function W(t,e){var n,r;for(r in e=d(d({},t.props),e),arguments.length>2&&(e.children=p.slice.call(arguments,2)),n={},e)"key"!==r&&"ref"!==r&&(n[r]=e[r]);return y(t.type,n,e.key||t.key,e.ref||t.ref,null)}function F(t){var e={},n={__c:"__cC"+s++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return e[n.__c]=o,e},this.shouldComponentUpdate=function(t){o.props.value!==t.value&&r.some((function(e){e.context=t.value,C(e)}))},this.sub=function(t){r.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){r.splice(r.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}r={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return C(n.__E=n)}catch(e){t=e}throw t}},o=function(t){return null!=t&&void 0===t.constructor},b.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&d(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),C(this))},b.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),C(this))},b.prototype.render=m,u=[],i=0,l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a=f,s=0},function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return _})),n.d(e,"getCurrentUrl",(function(){return h})),n.d(e,"route",(function(){return v})),n.d(e,"Router",(function(){return C})),n.d(e,"Route",(function(){return w})),n.d(e,"Link",(function(){return S})),n.d(e,"exec",(function(){return i}));var r=n(0),o={};function u(t,e){for(var n in e)t[n]=e[n];return t}function i(t,e,n){var r,u=/(?:\?([^#]*))?(#.*)?$/,i=t.match(u),l={};if(i&&i[1])for(var c=i[1].split("&"),s=0;s<c.length;s++){var f=c[s].split("=");l[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=a(t.replace(u,"")),e=a(e||"");for(var p=Math.max(t.length,e.length),_=0;_<p;_++)if(e[_]&&":"===e[_].charAt(0)){var d=e[_].replace(/(^:|[+*?]+$)/g,""),h=(e[_].match(/[+*?]+$/)||o)[0]||"",v=~h.indexOf("+"),y=~h.indexOf("*"),g=t[_]||"";if(!g&&!y&&(h.indexOf("?")<0||v)){r=!1;break}if(l[d]=decodeURIComponent(g),v||y){l[d]=t.slice(_).map(decodeURIComponent).join("/");break}}else if(e[_]!==t[_]){r=!1;break}return(!0===n.default||!1!==r)&&l}function l(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function c(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,a(e).map(s).join(""));var e}(t),t.props}function a(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function s(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var f=null,p=[],_=[],d={};function h(){var t;return""+((t=f&&f.location?f.location:f&&f.getCurrentLocation?f.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function v(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=p.length;e--;)if(p[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),f&&f[e]?f[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),y(t)}function y(t){for(var e=!1,n=0;n<p.length;n++)!0===p[n].routeTo(t)&&(e=!0);for(var r=_.length;r--;)_[r](t);return e}function g(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return v(e)}}function m(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return g(t.currentTarget||t.target||this),b(t)}function b(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function k(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(g(e))return b(t)}}while(e=e.parentNode)}}var x=!1;var C=function(t){function e(e){t.call(this,e),e.history&&(f=e.history),this.state={url:e.url||h()},x||("function"==typeof addEventListener&&(f||addEventListener("popstate",(function(){y(h())})),addEventListener("click",k)),x=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){p.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;f&&(this.unlisten=f.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),p.splice(p.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(c).sort(l).map((function(t){var o=i(e,t.props.path,t.props);if(o){if(!1!==n){var l={url:e,matches:o};return u(l,o),delete l.ref,delete l.key,Object(r.cloneElement)(t,l)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,u=e.url,i=this.getMatchingChildren(Object(r.toChildArray)(n),u,!0),l=i[0]||null,c=this.previousUrl;return u!==c&&(this.previousUrl=u,"function"==typeof o&&o({router:this,url:u,previous:c,active:i,current:l})),l},e}(r.Component),S=function(t){return Object(r.createElement)("a",u({onClick:m},t))},w=function(t){return Object(r.createElement)(t.component,t)};C.subscribers=_,C.getCurrentUrl=h,C.route=v,C.Router=C,C.Route=w,C.Link=S,C.exec=i,e.default=C},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);n(3);var o=n(4);r.render(r.h("div",null,r.h(o.default,null)),document.querySelector("body"))},function(t,e,n){},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var u=n(0),i=n(1),l=n(5),c=n(6),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleRoute=function(t){e.currentUrl=t.url},e}return o(e,t),e.prototype.render=function(){return u.h("div",{id:"app",className:"mx-auto max-w-md"},u.h(l.default,null),u.h(i.Router,{onChange:this.handleRoute},u.h(c.default,{path:"/"}),u.h(c.default,{path:"/profile/"}),u.h(c.default,{path:"/profile/:user"})))},e}(u.Component);e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(1);e.default=function(){return r.h("header",{className:"header"},r.h("h1",{className:"AppTitle text-center text-xl font-bold"},"Программа проверки полноты системы булевых функций"),r.h("nav",{className:"flex flex-row justify-center"},r.h(o.Link,{activeClassName:"active",href:"/",className:"block text-blue-700"},"Главная")))}},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var u=n(0),i=n(7),l=function(t){function e(e){var n=t.call(this,e)||this;return n.state={operations:[{}],input:"",output:""},n}return o(e,t),e.prototype.calculate=function(){try{var t=i.analyzeFunctionString(this.state.input);this.setState({output:"\nСохраняет 0: "+(t.keepsZero?"Да":"Нет")+" ;\nСохраняет 1: "+(t.keepsOne?"Да":"Нет")+" ;\nМонотонна: "+(t.mono?"Да":"Нет")+" ;\nЛинейна: "+(t.linear?"Да":"Нет")+" ;\nСамодвойственна: "+(t.s?"Да":"Нет")+" ;\n\t\t\t\t"})}catch(t){this.setState({output:t.message})}},e.prototype.onChangeHandler=function(t){var e=this;t.preventDefault();var n=t.currentTarget.value;console.log(n),n&&/[^10]+/g.test(n)?this.setState({input:this.state.input}):this.setState({input:n},(function(){n.length>0&&(console.log("calc"),e.calculate())}))},e.prototype.render=function(){return u.h("div",null,u.h("h3",null,"Ввод формулы:"),u.h("input",{class:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal",type:"text",value:this.state.input,onInput:this.onChangeHandler.bind(this)}),u.h("button",{class:"block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.calculate.bind(this)},"Вычислить"),u.h("div",{id:"output"},this.state.output))},e}(u.Component);e.default=l},function(t,e,n){"use strict";function r(t){return"0"===t[0]}function o(t){return"1"==t[t.length-1]}function u(t){for(var e=0;e<t.length/2;e++)if(t[e]===t[t.length-1-e])return!1;return!0}function i(t){for(var e=0;e<t.length;e++)for(var n=e.toString(2),r=0;r<t.length;r++){if(c(n,r.toString(2))&&t[e]>t[r])return!1}return!0}function l(t){var e="";if(1==t.length)return console.log(t),t[0];for(var n=0;n<t.length-1;n++)e+=f(t[n],t[n+1]);return console.log(t),t[0]+l(e)}function c(t,e){var n=t,r=e;if(r.length<n.length)for(var o=n.length-r.length,u=0;u<o;u++)r="0"+r.toString();if(r.length>n.length)for(o=r.length-n.length,u=0;u<o;u++)n="0"+n.toString();for(u=0;u<r.length;u++)if(n[u]>r[u])return!1;return!0}function a(t){t.split("");var e=l(t);console.log(e);for(var n=1;n<e.length;n++)if(s(n))console.log("single:  "+n+" = "+n.toString(2));else if(console.log("multiple:  "+n+" = "+n.toString(2)),"0"!=e[n])return!1;return!0}function s(t){for(var e=t.toString(2),n=0,r=0;r<e.length;r++)if("1"==e[r]&&++n>1)return!1;return!0}function f(t,e){return"1"==t&&"1"==e?"0":"1"==t&&"0"==e||"0"==t&&"1"==e?"1":"0"==t&&"0"==e?"0":void 0}Object.defineProperty(e,"__esModule",{value:!0}),e.singleVariable=e.linear=e.pascal=e.monoSlow=e.mono=e.Samdv=e.keepsOne=e.keepsZero=e.analyzeFunctionString=void 0,e.analyzeFunctionString=function(t){if(!t||""==t)throw Error("Пустая функция");var e=t.length;if(e-1&e)throw new Error("Not a boolean funcion");return{keepsZero:r(t),keepsOne:o(t),s:u(t),mono:i(t),linear:a(t)}},e.keepsZero=r,e.keepsOne=o,e.Samdv=u,e.mono=function(t){for(var e=t.length;(e/=2)>0;){for(var n=0;n<t.length;)for(var r=e;n<t.length;r--+ ++n)if(t[n]>t[n+e])return!1;n+=e}},e.monoSlow=i,e.pascal=l,e.linear=a,e.singleVariable=s}]);