!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/BooleanCurse/",n(n.s=1)}([function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return W})),n.d(t,"hydrate",(function(){return q})),n.d(t,"createElement",(function(){return v})),n.d(t,"h",(function(){return v})),n.d(t,"Fragment",(function(){return m})),n.d(t,"createRef",(function(){return g})),n.d(t,"isValidElement",(function(){return o})),n.d(t,"Component",(function(){return b})),n.d(t,"cloneElement",(function(){return F})),n.d(t,"createContext",(function(){return L})),n.d(t,"toChildArray",(function(){return O})),n.d(t,"_unmount",(function(){return U})),n.d(t,"options",(function(){return r}));var r,o,l,u,i,s,_,c,a={},f=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function d(e,t){for(var n in t)e[n]=t[n];return e}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n){var r,o=arguments,l={};for(r in t)"key"!==r&&"ref"!==r&&(l[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(l.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===l[r]&&(l[r]=e.defaultProps[r]);return y(e,l,t&&t.key,t&&t.ref,null)}function y(e,t,n,o,l){var u={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:l};return null==l&&(u.__v=u),r.vnode&&r.vnode(u),u}function g(){return{}}function m(e){return e.children}function b(e,t){this.props=e,this.context=t}function k(e,t){if(null==t)return e.__?k(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?k(e):null}function x(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return x(e)}}function w(e){(!e.__d&&(e.__d=!0)&&l.push(e)&&!u++||s!==r.debounceRendering)&&((s=r.debounceRendering)||i)(S)}function S(){for(var e;u=l.length;)e=l.sort((function(e,t){return e.__v.__b-t.__v.__b})),l=[],e.some((function(e){var t,n,r,o,l,u,i;e.__d&&(u=(l=(t=e).__v).__e,(i=t.__P)&&(n=[],(r=d({},l)).__v=r,o=A(i,l,r,t.__n,void 0!==i.ownerSVGElement,null,n,null==u?k(l):u),E(n,l),o!=u&&x(l)))}))}function C(e,t,n,r,o,l,u,i,s,_){var c,p,d,v,g,b,x,w,S,C=r&&r.__k||f,O=C.length;for(s==a&&(s=null!=u?u[0]:O?k(r,0):null),n.__k=[],c=0;c<t.length;c++)if(null!=(v=n.__k[c]=null==(v=t[c])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?y(null,v,null,null,v):Array.isArray(v)?y(m,{children:v},null,null,null):null!=v.__e||null!=v.__c?y(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(d=C[c])||d&&v.key==d.key&&v.type===d.type)C[c]=void 0;else for(p=0;p<O;p++){if((d=C[p])&&v.key==d.key&&v.type===d.type){C[p]=void 0;break}d=null}if(g=A(e,v,d=d||a,o,l,u,i,s,_),(p=v.ref)&&d.ref!=p&&(w||(w=[]),d.ref&&w.push(d.ref,null,v),w.push(p,v.__c||g,v)),null!=g){if(null==x&&(x=g),S=void 0,void 0!==v.__d)S=v.__d,v.__d=void 0;else if(u==d||g!=s||null==g.parentNode){e:if(null==s||s.parentNode!==e)e.appendChild(g),S=null;else{for(b=s,p=0;(b=b.nextSibling)&&p<O;p+=2)if(b==g)break e;e.insertBefore(g,s),S=s}"option"==n.type&&(e.value="")}s=void 0!==S?S:g.nextSibling,"function"==typeof n.type&&(n.__d=s)}else s&&d.__e==s&&s.parentNode!=e&&(s=k(d))}if(n.__e=x,null!=u&&"function"!=typeof n.type)for(c=u.length;c--;)null!=u[c]&&h(u[c]);for(c=O;c--;)null!=C[c]&&U(C[c],C[c]);if(w)for(c=0;c<w.length;c++)D(w[c],w[++c],w[++c])}function O(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?f.concat.apply([],e.map(O)):[e]}function P(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===p.test(t)?n+"px":null==n?"":n}function N(e,t,n,r,o){var l,u,i,s,_;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(l=e.style,"string"==typeof n)l.cssText=n;else{if("string"==typeof r&&(l.cssText="",r=null),r)for(s in r)n&&s in n||P(l,s,"");if(n)for(_ in n)r&&n[_]===r[_]||P(l,_,n[_])}else"o"===t[0]&&"n"===t[1]?(u=t!==(t=t.replace(/Capture$/,"")),i=t.toLowerCase(),t=(i in e?i:t).slice(2),n?(r||e.addEventListener(t,j,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,j,u)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function j(e){this.l[e.type](r.event?r.event(e):e)}function A(e,t,n,o,l,u,i,s,_){var c,a,f,p,h,v,y,g,k,x,w,S=t.type;if(void 0!==t.constructor)return null;(c=r.__b)&&c(t);try{e:if("function"==typeof S){if(g=t.props,k=(c=S.contextType)&&o[c.__c],x=c?k?k.props.value:c.__:o,n.__c?y=(a=t.__c=n.__c).__=a.__E:("prototype"in S&&S.prototype.render?t.__c=a=new S(g,x):(t.__c=a=new b(g,x),a.constructor=S,a.render=T),k&&k.sub(a),a.props=g,a.state||(a.state={}),a.context=x,a.__n=o,f=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=S.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=d({},a.__s)),d(a.__s,S.getDerivedStateFromProps(g,a.__s))),p=a.props,h=a.state,f)null==S.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==p&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(g,x),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(g,a.__s,x)||t.__v===n.__v){for(a.props=g,a.state=a.__s,t.__v!==n.__v&&(a.__d=!1),a.__v=t,t.__e=n.__e,t.__k=n.__k,a.__h.length&&i.push(a),c=0;c<t.__k.length;c++)t.__k[c]&&(t.__k[c].__=t);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(g,a.__s,x),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(p,h,v)}))}a.context=x,a.props=g,a.state=a.__s,(c=r.__r)&&c(t),a.__d=!1,a.__v=t,a.__P=e,c=a.render(a.props,a.state,a.context),null!=a.getChildContext&&(o=d(d({},o),a.getChildContext())),f||null==a.getSnapshotBeforeUpdate||(v=a.getSnapshotBeforeUpdate(p,h)),w=null!=c&&c.type==m&&null==c.key?c.props.children:c,C(e,Array.isArray(w)?w:[w],t,n,o,l,u,i,s,_),a.base=t.__e,a.__h.length&&i.push(a),y&&(a.__E=a.__=null),a.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=M(n.__e,t,n,o,l,u,i,_);(c=r.diffed)&&c(t)}catch(e){t.__v=null,r.__e(e,t,n)}return t.__e}function E(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function M(e,t,n,r,o,l,u,i){var s,_,c,p,d,h=n.props,v=t.props;if(o="svg"===t.type||o,null!=l)for(s=0;s<l.length;s++)if(null!=(_=l[s])&&((null===t.type?3===_.nodeType:_.localName===t.type)||e==_)){e=_,l[s]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),l=null,i=!1}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else{if(null!=l&&(l=f.slice.call(e.childNodes)),c=(h=n.props||a).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!i){if(null!=l)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||c)&&(p&&c&&p.__html==c.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,o){var l;for(l in n)"children"===l||"key"===l||l in t||N(e,l,null,n[l],r);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||N(e,l,t[l],n[l],r)})(e,v,h,o,i),p?t.__k=[]:(s=t.props.children,C(e,Array.isArray(s)?s:[s],t,n,r,"foreignObject"!==t.type&&o,l,u,a,i)),i||("value"in v&&void 0!==(s=v.value)&&s!==e.value&&N(e,"value",s,h.value,!1),"checked"in v&&void 0!==(s=v.checked)&&s!==e.checked&&N(e,"checked",s,h.checked,!1))}return e}function D(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function U(e,t,n){var o,l,u;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||D(o,null,t)),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(u=0;u<o.length;u++)o[u]&&U(o[u],t,n);null!=l&&h(l)}function T(e,t,n){return this.constructor(e,n)}function W(e,t,n){var o,l,u;r.__&&r.__(e,t),l=(o=n===_)?null:n&&n.__k||t.__k,e=v(m,null,[e]),u=[],A(t,(o?t:n||t).__k=e,l||a,a,void 0!==t.ownerSVGElement,n&&!o?[n]:l?null:t.childNodes.length?f.slice.call(t.childNodes):null,u,n||a,o),E(u,e)}function q(e,t){W(e,t,_)}function F(e,t){var n,r;for(r in t=d(d({},e.props),t),arguments.length>2&&(t.children=f.slice.call(arguments,2)),n={},t)"key"!==r&&"ref"!==r&&(n[r]=t[r]);return y(e.type,n,t.key||e.key,t.ref||e.ref,null)}function L(e){var t={},n={__c:"__cC"+c++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(e){o.props.value!==e.value&&r.some((function(t){t.context=e.value,w(t)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return w(n.__E=n)}catch(t){e=t}throw e}},o=function(e){return null!=e&&void 0===e.constructor},b.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&d(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),w(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),w(this))},b.prototype.render=m,l=[],u=0,i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=a,c=0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);n(2);var o=n(3);r.render(r.h("div",null,r.h(o.default,null)),document.querySelector("body")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register((n.p?n.p:"")+"/service-worker.js")}))},function(e,t,n){},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=n(4),i=n(5),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleRoute=function(e){t.currentUrl=e.url},t}return o(t,e),t.prototype.render=function(){return l.h("div",{id:"app",className:"mx-auto max-w-md"},l.h(u.default,null),l.h(i.default,null))},t}(l.Component);t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(){return r.h("header",{className:"header"},r.h("h1",{className:"AppTitle text-center text-xl font-bold"},"Программа проверки полноты системы булевых функций"))}},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var l=arguments[t],u=0,i=l.length;u<i;u++,o++)r[o]=l[u];return r};Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=n(6),s=n(7),_=function(e){function t(t){var n=e.call(this,t)||this;return n.state={equations:["1111","",""],input:"",output:""},n}return o(t,e),t.prototype.calculate=function(){try{var e=i.checkCompleteness(this.state.equations);this.setState({output:"Система функций "+(e?"полна":"не полна")})}catch(e){this.setState({output:e.message})}},t.prototype.add=function(){this.setState({equations:l(this.state.equations,[""])})},t.prototype.del=function(e){var t=this,n=l(this.state.equations);n.splice(e,1),this.setState({equations:n},(function(){0==t.state.equations.length&&t.add()}))},t.prototype.onChangeHandler=function(e,t){var n=l(this.state.equations);n[e]=t,this.setState({equations:n},this.calculate)},t.prototype.render=function(){var e=this;return u.h("div",null,u.h("h3",null,"Ввод формулы (в виде кортежа значений (1111), пустые строки игнорируются):"),u.h("div",null,this.state.equations.map((function(t,n){return u.h(s.default,{key:n,id:n,value:t,onChange:e.onChangeHandler.bind(e),onDelete:e.del.bind(e)})}))),u.h("div",{className:"flex"},u.h("button",{class:"block mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.add.bind(this)},"Добавить формулу"),u.h("button",{class:"block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.calculate.bind(this)},"Вычислить")),u.h("div",{id:"output",className:"text-center my-3"},this.state.output))},t}(u.Component);t.default=_},function(e,t,n){"use strict";function r(e){if(!e||""==e)throw Error("Пустая функция");var t=e.length;if(t-1&t)throw new Error("Not a boolean funcion");return{keepsZero:o(e),keepsOne:l(e),s:u(e),mono:i(e),linear:c(e)}}function o(e){return"0"===e[0]}function l(e){return"1"==e[e.length-1]}function u(e){for(var t=0;t<e.length/2;t++)if(e[t]===e[e.length-1-t])return!1;return!0}function i(e){for(var t=0;t<e.length;t++)for(var n=t.toString(2),r=0;r<e.length;r++){if(_(n,r.toString(2))&&e[t]>e[r])return!1}return!0}function s(e){var t="";if(1==e.length)return e[0];for(var n=0;n<e.length-1;n++)t+=f(e[n],e[n+1]);return e[0]+s(t)}function _(e,t){var n=e,r=t;if(r.length<n.length)for(var o=n.length-r.length,l=0;l<o;l++)r="0"+r.toString();if(r.length>n.length)for(o=r.length-n.length,l=0;l<o;l++)n="0"+n.toString();for(l=0;l<r.length;l++)if(n[l]>r[l])return!1;return!0}function c(e){e.split("");for(var t=s(e),n=1;n<t.length;n++)if(!a(n)&&"0"!=t[n])return!1;return!0}function a(e){for(var t=e.toString(2),n=0,r=0;r<t.length;r++)if("1"==t[r]&&++n>1)return!1;return!0}function f(e,t){return"1"==e&&"1"==t?"0":"1"==e&&"0"==t||"0"==e&&"1"==t?"1":"0"==e&&"0"==t?"0":void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.singleVariable=t.linear=t.pascal=t.monoSlow=t.mono=t.Samdv=t.keepsOne=t.keepsZero=t.analyzeFunctionString=t.checkCompleteness=void 0,t.checkCompleteness=function(e){if(!e||e==[])throw Error("Нет функций");var t={keepsZero:!0,keepsOne:!0,s:!0,mono:!0,linear:!0};return e.forEach((function(e){if(""!==e){var n=r(e);n.keepsOne||(t.keepsOne=!1),n.keepsZero||(t.keepsZero=!1),n.s||(t.s=!1),n.mono||(t.mono=!1),n.linear||(t.linear=!1)}})),console.info(t),!(t.keepsOne||t.keepsZero||t.s||t.mono||t.linear)},t.analyzeFunctionString=r,t.keepsZero=o,t.keepsOne=l,t.Samdv=u,t.mono=function(e){for(var t=e.length;(t/=2)>0;){for(var n=0;n<e.length;)for(var r=t;n<e.length;r--+ ++n)if(e[n]>e[n+t])return!1;n+=t}},t.monoSlow=i,t.pascal=s,t.linear=c,t.singleVariable=a},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=function(e){function t(t){return e.call(this,t)||this}return o(t,e),t.prototype.onChangeHandler=function(e){var t;e.preventDefault();var n=e.target.value;n&&/[^10]+/g.test(n)?e.target.value=this.props.value:null===(t=this.props)||void 0===t||t.onChange(this.props.id,n)},t.prototype.render=function(){var e;return l.h(l.Fragment,null,l.h("div",{className:"flex flex-row my-1  rounded-lg"},l.h("input",{class:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none leading-normal",type:"text",value:this.props.value,onInput:this.onChangeHandler.bind(this)}),l.h("button",{onClick:null===(e=this.props)||void 0===e?void 0:e.onDelete.bind(this),className:"block mx-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"},"X")))},t}(l.Component);t.default=u}]);