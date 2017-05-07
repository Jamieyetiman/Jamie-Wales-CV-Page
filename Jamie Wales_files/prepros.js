
window.__PreprosConfig__ = {"projectPath":"/Users/jamiewales/Desktop/Jamie-Wales-CV-Page","webSocketServerPort":36642};
!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(1),r=n(5),c=function(e){return e&&e.__esModule?e:{default:e}}(r);new(function(){function e(){i(this,e),window.__Prepros__=this,this.emitter=new s.Emitter,this.ready=!1,this.browserId=Math.random().toString();var t=window.__PreprosConfig__,n=t.webSocketServerPort,o=t.projectPath,r=document.querySelector("script[data-prepros-origin-host]").dataset.preprosOriginHost;this.config={webSocketServerPort:n,projectPath:o,originHostName:r},this.onMessage=this.onMessage.bind(this),this.onOpen=this.onOpen.bind(this),this.onClose=this.onClose.bind(this),this.initServerConnection()}return o(e,[{key:"onMessage",value:function(e){var t=JSON.parse(e.data),n=t.browserId,i=t.projectPath;i&&(0,c.default)(i)!==(0,c.default)(this.config.projectPath)||n!==this.browserId&&this.emitter.emit("event",t)}},{key:"onOpen",value:function(){clearInterval(this.connectionInterval),this.connectionInterval=null,this.webSocketConnection.removeEventListener("open",this.onOpen),this.ready=!0,this.emitter.emit("did-connect"),this.emitter.emit("ready")}},{key:"onClose",value:function(){var e=this;this.ready=!1,this.emitter.emit("did-disconnect"),this.unbindEvents(),this.connectionInterval||(this.connectionInterval=setInterval(function(){e.connect(),e.bindEvents()},1e3))}},{key:"bindEvents",value:function(){this.webSocketConnection.addEventListener("open",this.onOpen),this.webSocketConnection.addEventListener("close",this.onClose),this.webSocketConnection.addEventListener("message",this.onMessage)}},{key:"unbindEvents",value:function(){this.webSocketConnection.removeEventListener("open",this.onOpen),this.webSocketConnection.removeEventListener("close",this.onClose),this.webSocketConnection.removeEventListener("message",this.onMessage)}},{key:"connect",value:function(){this.webSocketConnection=new WebSocket("ws://"+this.config.originHostName+":"+this.config.webSocketServerPort)}},{key:"initServerConnection",value:function(){this.connect(),this.bindEvents()}},{key:"onWebSocketEvent",value:function(e,t){return this.emitter.on("event",function(n){n.eventName===e&&t(n)})}},{key:"sendWebSocketEvent",value:function(e,t){var n=JSON.stringify({eventName:e,data:t,browserId:this.browserId,projectPath:this.config.projectPath});this.webSocketConnection.send(n)}},{key:"onDidConnect",value:function(e){return this.emitter.on("did-connect",e)}},{key:"onDidDisconnect",value:function(e){return this.emitter.on("did-disconnect",e)}},{key:"onReady",value:function(e){if(this.ready)setTimeout(function(){return e()},0);else var t=this.emitter.on("ready",function(){t.dispose(),e()})}}]),e}())},function(e,t,n){(function(){t.Emitter=n(2),t.Disposable=n(3),t.CompositeDisposable=n(4)}).call(this)},function(e,t,n){(function(){var t;t=n(3),e.exports=function(){function e(){this.clear()}return e.exceptionHandlers=[],e.onEventHandlerException=function(e){return 0===this.exceptionHandlers.length&&(this.dispatch=this.exceptionHandlingDispatch),this.exceptionHandlers.push(e),new t(function(t){return function(){if(t.exceptionHandlers.splice(t.exceptionHandlers.indexOf(e),1),0===t.exceptionHandlers.length)return t.dispatch=t.simpleDispatch}}(this))},e.simpleDispatch=function(e,t){return e(t)},e.exceptionHandlingDispatch=function(e,t){var n,i,o,s,r,c;try{return e(t)}catch(e){for(n=e,r=this.exceptionHandlers,c=[],o=0,s=r.length;o<s;o++)i=r[o],c.push(i(n));return c}},e.dispatch=e.simpleDispatch,e.prototype.disposed=!1,e.prototype.clear=function(){return this.handlersByEventName={}},e.prototype.dispose=function(){return this.handlersByEventName=null,this.disposed=!0},e.prototype.on=function(e,n,i){var o;if(null==i&&(i=!1),this.disposed)throw new Error("Emitter has been disposed");if("function"!=typeof n)throw new Error("Handler must be a function");return(o=this.handlersByEventName[e])?this.handlersByEventName[e]=i?[n].concat(o):o.concat(n):this.handlersByEventName[e]=[n],new t(this.off.bind(this,e,n))},e.prototype.once=function(e,t,n){var i,o;return null==n&&(n=!1),o=function(e){return i.dispose(),t(e)},i=this.on(e,o,n)},e.prototype.preempt=function(e,t){return this.on(e,t,!0)},e.prototype.off=function(e,t){var n,i,o,s,r;if(!this.disposed&&(o=this.handlersByEventName[e])){for(i=[],s=0,r=o.length;s<r;s++)(n=o[s])!==t&&i.push(n);i.length>0?this.handlersByEventName[e]=i:delete this.handlersByEventName[e]}},e.prototype.emit=function(e,t){var n,i,o,s,r;if(i=null!=(r=this.handlersByEventName)?r[e]:void 0)for(o=0,s=i.length;o<s;o++)n=i[o],this.constructor.dispatch(n,t)},e.prototype.getEventNames=function(){return Object.keys(this.handlersByEventName)},e.prototype.listenerCountForEventName=function(e){var t,n;return null!=(t=null!=(n=this.handlersByEventName[e])?n.length:void 0)?t:0},e.prototype.getTotalListenerCount=function(){var e,t,n,i,o;for(t=0,o=Object.keys(this.handlersByEventName),n=0,i=o.length;n<i;n++)e=o[n],t+=this.handlersByEventName[e].length;return t},e}()}).call(this)},function(e,t){(function(){e.exports=function(){function e(e){this.disposalAction=e}return e.prototype.disposed=!1,e.isDisposable=function(e){return"function"==typeof(null!=e?e.dispose:void 0)},e.prototype.dispose=function(){this.disposed||(this.disposed=!0,"function"==typeof this.disposalAction&&this.disposalAction(),this.disposalAction=null)},e}()}).call(this)},function(e,t,n){(function(){var t,i;t=null,e.exports=function(){function e(){var e,t,n;for(this.disposables=new Set,t=0,n=arguments.length;t<n;t++)e=arguments[t],this.add(e)}return e.prototype.disposed=!1,e.prototype.dispose=function(){this.disposed||(this.disposed=!0,this.disposables.forEach(function(e){return e.dispose()}),this.disposables=null)},e.prototype.add=function(){var e,t,n;if(!this.disposed)for(t=0,n=arguments.length;t<n;t+=1)e=arguments[t],i(e),this.disposables.add(e)},e.prototype.remove=function(e){this.disposed||this.disposables.delete(e)},e.prototype.delete=function(e){this.remove(e)},e.prototype.clear=function(){this.disposed||this.disposables.clear()},e}(),i=function(e){if(null==t&&(t=n(3)),!t.isDisposable(e))throw new TypeError("Arguments to CompositeDisposable.add must have a .dispose() method")}}).call(this)},function(e,t){"use strict";e.exports=function(e){var t=/^\\\\\?\\/.test(e),n=/[^\x00-\x80]+/.test(e);return t||n?e:e.replace(/\\/g,"/")}}]);;
window.__PreprosBrowserSyncConfig__ = {"enable":true,"clicks":true,"forms":true,"scroll":true};
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),l=r(a),u=n(3),c=r(u),s=n(4),f=r(s),v=function(){function e(){o(this,e),this.prepros=window.__Prepros__,this.config=window.__PreprosBrowserSyncConfig__,this.events={},this.prepros.browserSync=this,this.listen()}return i(e,[{key:"listen",value:function(){var e=this;this.config.enable&&(this.listenServerEvents(),this.prepros.onReady(function(){e.listenBrowserEvents()}))}},{key:"listenServerEvents",value:function(){var e=this;this.prepros.onWebSocketEvent("sync",function(t){e.handleSyncEvent(t.data)})}},{key:"sendEvent",value:function(e){this.prepros.sendWebSocketEvent("sync",e)}},{key:"listenMouseEvents",value:function(){var t=!0,n=!1,r=void 0;try{for(var o,i=e.mouseEvents[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;this.events[a]=new l.default({name:a,onEvent:this.sendEvent.bind(this)})}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}},{key:"listenKeyboardEvents",value:function(){var t=!0,n=!1,r=void 0;try{for(var o,i=e.keyboardEvents[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;this.events[a]=new c.default({name:a,onEvent:this.sendEvent.bind(this)})}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}},{key:"listenScrollEvents",value:function(){this.events.scroll=new f.default({onEvent:this.sendEvent.bind(this)})}},{key:"listenBrowserEvents",value:function(){this.config.enable&&(this.config.clicks&&this.listenMouseEvents(),this.config.forms&&this.listenKeyboardEvents(),this.config.scroll&&this.listenScrollEvents())}},{key:"handleSyncEvent",value:function(e){var t=e.name;this.events[t]&&this.events[t].dispatch(e)}}]),e}();v.mouseEvents=["click","mousedown","mouseup"],v.keyboardEvents=["keyup","keypress","keydown","input","change"],t.default=v,new v},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},u=n(2),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=function(e){function t(e){var n=e.name,i=e.onEvent;r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.onEvent=i,a.name=n,a.listen(),a}return i(t,e),a(t,[{key:"listen",value:function(){var e=this;l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"listenToEvent",this).call(this,this.name,function(t,n){["SELECT","LABEL","OPTION"].some(function(e){return e===n.target.tagName})||e.onEvent(t)})}},{key:"createEvent",value:function(e){var t=void 0;this.supportsCustomEvents?t=new MouseEvent(this.name,e):(t=document.createEvent("MouseEvent"),t.initEvent(e.type,!!e.bubbles,!!e.cancelable));var n=!0,r=!1,o=void 0;try{for(var i,a=Object.keys(e)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value;try{t[l]=e[l]}catch(e){}}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return t}},{key:"dispatch",value:function(e){var n=this.getElementFromPath(e.targetPath);if(n){var r=this.createEvent(e);l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"dispatch",this).call(this,n,r)}}}]),t}(c.default);t.default=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){n(this,e),this.supportsCustomEvents=e.checkCustomEventSupport()}return r(e,[{key:"normalize",value:function(t){var n={},r=!0,o=!1,i=void 0;try{for(var a,l=e.syncProps[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value;n[u]=t[u]}}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}if(n.target=t.target||t.srcElement||document,n.which=n.charCode||n.keyCode,null!==t.clientX){var c=document.documentElement,s=c.body,f=c||s;f&&(n.pageX=t.clientX+(f.scrollLeft||0)-(f.clientLeft||0),n.pageY=t.clientY+(f.scrollTop||0)-(f.clientTop||0))}return n.targetPath=this.getPathFromElement(n.target),n.name=t.type,n}},{key:"dispatch",value:function(e,t){t.__SYNC_EVENT__=!0,e.dispatchEvent(t)}},{key:"listenToEvent",value:function(e,t,n){var r=this;n||(n=t,t=null),t=t||document,t.addEventListener(e,function(e){e.__SYNC_EVENT__||n(r.normalize(e),e)})}},{key:"getElementFromPath",value:function(e){return document.querySelector(e)}},{key:"getPathFromElement",value:function(e){for(var t="";e&&"html"!==e.localName;){var n=e.localName;if(!n)break;var r=Array.prototype.slice.call(e.classList),o="",i=!0,a=!1,l=void 0;try{for(var u,c=r[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){o=o+"."+u.value}}catch(e){a=!0,l=e}finally{try{!i&&c.return&&c.return()}finally{if(a)throw l}}var s=""+n+o,f=e.parentNode;if(Array.prototype.slice.call(f.querySelectorAll(n)).length>1){s=s+":nth-child("+(Array.prototype.slice.call(f.children).indexOf(e)+1)+")"}t=s+(t?">"+t:""),e=f}return t}}],[{key:"checkCustomEventSupport",value:function(){var e=!1;try{new KeyboardEvent("click",{}),e=!0}catch(e){}return e}}]),e}();o.syncProps=["bubbles","cancelBubble","cancelable","target","targetPath","type","name","which","keyCode","charCode","ctrlKey","shiftKey","altKey","metaKey","button","buttons","screenX","screenY","clientX","clientY"],t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},u=n(2),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=function(e){function t(e){var n=e.name,i=e.onEvent;r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.onEvent=i,a.name=n,a.listen(),a}return i(t,e),a(t,[{key:"listen",value:function(){var e=this;l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"listenToEvent",this).call(this,this.name,function(t){t.targetValue=t.target.value,e.onEvent(t)})}},{key:"createEvent",value:function(e){var t=void 0;this.supportsCustomEvents?t=new KeyboardEvent(this.name,e):(t=document.createEvent("KeyboardEvent"),t.initEvent(e.type,!!e.bubbles,!!e.cancelable));var n=!0,r=!1,o=void 0;try{for(var i,a=Object.keys(e)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value;try{t[l]=e[l]}catch(e){}}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return t}},{key:"dispatch",value:function(e){var n=this.getElementFromPath(e.targetPath);if(n){var r=this.createEvent(e);n.value=e.targetValue,l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"dispatch",this).call(this,n,r)}}}]),t}(c.default);t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},c=n(2),s=r(c),f=n(5),v=r(f),p=function(e){function t(e){var n=e.onEvent;o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.onEvent=n,r.name="scroll",r.isLeader=!0,r.isFollower=!0,r.leaderTimeout=null,r.followerTimeout=null,r.leaderFollowerSwitchTime=2e3,r.listen(),r}return a(t,e),l(t,[{key:"makeLeader",value:function(){var e=this;this.isLeader=!1,clearTimeout(this.leaderTimeout),this.leaderTimeout=setTimeout(function(){e.isLeader=!0},this.leaderFollowerSwitchTime)}},{key:"makeFollower",value:function(){var e=this;this.isFollower=!1,clearTimeout(this.followerTimeout),this.followerTimeout=setTimeout(function(){e.isFollower=!0},this.leaderFollowerSwitchTime)}},{key:"listen",value:function(){var e=this;u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"listenToEvent",this).call(this,this.name,(0,v.default)(function(){if(e.isLeader){var t=document.body,n=document.documentElement,r=window.scrollY,o=Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight),i=window.innerHeight;e.onEvent({relative:r/(o-i),name:e.name}),e.makeFollower()}},50))}},{key:"dispatch",value:function(e){if(this.isFollower){this.makeLeader();var t=document.body,n=document.documentElement,r=Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight),o=window.innerHeight,i=e.relative*(r-o);window.scrollTo(window.scrollX,i)}}}]),t}(s.default);t.default=p},function(e,t){(function(t){function n(e,t,n){function r(t){var n=h,r=d;return h=d=void 0,k=t,m=e.apply(r,n)}function i(e){return k=e,w=setTimeout(s,t),j?r(e):m}function a(e){var n=e-E,r=e-k,o=t-n;return P?_(o,b-r):o}function c(e){var n=e-E,r=e-k;return void 0===E||n>=t||n<0||P&&r>=b}function s(){var e=O();if(c(e))return f(e);w=setTimeout(s,a(e))}function f(e){return w=void 0,T&&h?r(e):(h=d=void 0,m)}function v(){void 0!==w&&clearTimeout(w),k=0,h=E=d=w=void 0}function p(){return void 0===w?m:f(O())}function y(){var e=O(),n=c(e);if(h=arguments,d=this,E=e,n){if(void 0===w)return i(E);if(P)return w=setTimeout(s,t),r(E)}return void 0===w&&(w=setTimeout(s,t)),m}var h,d,b,m,w,E,k=0,j=!1,P=!1,T=!0;if("function"!=typeof e)throw new TypeError(u);return t=l(t)||0,o(n)&&(j=!!n.leading,P="maxWait"in n,b=P?g(l(n.maxWait)||0,t):b,T="trailing"in n?!!n.trailing:T),y.cancel=v,y.flush=p,y}function r(e,t,r){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(u);return o(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),n(e,t,{leading:i,maxWait:t,trailing:a})}function o(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||i(e)&&E.call(e)==s}function l(e){if("number"==typeof e)return e;if(a(e))return c;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=p.test(e);return n||y.test(e)?h(e.slice(2),n?2:8):v.test(e)?c:+e}var u="Expected a function",c=NaN,s="[object Symbol]",f=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,y=/^0o[0-7]+$/i,h=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,m=d||b||Function("return this")(),w=Object.prototype,E=w.toString,g=Math.max,_=Math.min,O=function(){return m.Date.now()};e.exports=r}).call(t,function(){return this}())}]);;
!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),l=n(u),s=r(4),c=n(s),f=function(){function e(){i(this,e),this.importCacheWaitPeriod=200,this.animationDuration=600,this.animationStyleAttached=!1,this.prepros=window.__Prepros__,this.prepros.liveReload=this,this.listen()}return a(e,[{key:"listen",value:function(){var e=this;this.prepros.onWebSocketEvent("reload",function(t){e.reload(t.data.file,{animate:t.data.animate})})}},{key:"reload",value:function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{animate:!0}).animate&&this.startAnimation(),e.match(/\.css$/i)?this.reloadStylesheet(e):this.reloadPage()}},{key:"reloadPage",value:function(){window.location.reload()}},{key:"injectAnimation",value:function(){if(!this.animationStyleAttached){var e="\n      .__prepros-reload__ *, .__prepros-reload__ {\n         -webkit-transition: all "+this.animationDuration+"ms;\n        -moz-transition: all "+this.animationDuration+"ms;\n        transition: all "+this.animationDuration+"ms;\n     }",t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t),this.animationStyleAttached=!0}}},{key:"startAnimation",value:function(){this.injectAnimation(),document.body.classList.add("__prepros-reload__"),setTimeout(function(){document.body.classList.remove("__prepros-reload__")},this.animationDuration+100)}},{key:"getLinkedStylesheets",value:function(){var e=document.getElementsByTagName("link");return e=Array.prototype.slice.call(e),e=e.filter(function(e){return e.rel.match(/^stylesheet$/i)&&!e.__RELOAD_PENDING_REMOVAL__})}},{key:"getStyleTagStyleSheets",value:function(){var e=document.getElementsByTagName("style");return e=Array.prototype.slice.call(e)}},{key:"pathFromUrl",value:function(e){var t=document.createElement("a");return t.href=e,decodeURIComponent(t.pathname)}},{key:"reloadStylesheet",value:function(e){for(var t=this,r=this.getLinkedStylesheets(),n=this.getStyleTagStyleSheets(),i=[],a=[].concat(o(r),o(n)),u=0;u<a.length;u++){var l=a[u];l.sheet&&(i=[].concat(o(i),o(this.collectImportedStylesheets(l,l.sheet))))}var s=c.default.basename(e),f=function(e){return c.default.basename(t.pathFromUrl(e.href))===s},h=i.filter(f),d=r.filter(f);if(h.length+d.length<1){var m=!0,p=!1,y=void 0;try{for(var v,g=r[Symbol.iterator]();!(m=(v=g.next()).done);m=!0){var _=v.value;this.reattachStylesheetLink(_)}}catch(e){p=!0,y=e}finally{try{!m&&g.return&&g.return()}finally{if(p)throw y}}}else{var b=!0,A=!1,S=void 0;try{for(var w,E=h[Symbol.iterator]();!(b=(w=E.next()).done);b=!0){var k=w.value;this.reattachImportedRule(k)}}catch(e){A=!0,S=e}finally{try{!b&&E.return&&E.return()}finally{if(A)throw S}}var T=!0,R=!1,C=void 0;try{for(var x,N=d[Symbol.iterator]();!(T=(x=N.next()).done);T=!0){var L=x.value;this.reattachStylesheetLink(L)}}catch(e){R=!0,C=e}finally{try{!T&&N.return&&N.return()}finally{if(R)throw C}}}}},{key:"collectImportedStylesheets",value:function(e,t){var r=[];try{r=t.cssRules}catch(e){}if(!r||!r.length)return[];r=Array.prototype.slice.call(r);var n=[],i=!0,a=!1,u=void 0;try{for(var l,s=r[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c=l.value;c.type===CSSRule.IMPORT_RULE&&(n=[].concat(o(n),[{tag:e,rule:c,href:c.href,index:r.indexOf(c)}]),n=[].concat(o(n),o(this.collectImportedStylesheets(e,c.styleSheet))))}}catch(e){a=!0,u=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw u}}return n}},{key:"reattachStylesheetLink",value:function(e){if(!e.__RELOAD_PENDING_REMOVAL__){e.__RELOAD_PENDING_REMOVAL__=!0;var t=e.cloneNode(!1);t.href=this.generateCacheBustUrl(e.href);var r=e.parentNode;r.lastChild===e?r.appendChild(t):r.insertBefore(t,e),t.onload=function(){e.parentNode&&e.parentNode.removeChild(e)}}}},{key:"cacheStylesheet",value:function(e,t){var r=document.createElement("link");return r.setAttribute("rel","stylesheet"),r.__RELOAD_PENDING_REMOVAL__=!0,r.href=e,t.parentNode.insertBefore(r,t),function(){r.parentNode&&r.parentNode.removeChild(r)}}},{key:"reattachImportedRule",value:function(e){var t=e.rule,r=e.index,n=e.tag,o=t.parentStyleSheet,i=this.generateCacheBustUrl(t.href),a=t.media.length?[].join.call(t.media,", "):"",u='@import url("'+i+'") '+a+";";t.__SYNC_NEW_HREF__=i;var l=this.cacheStylesheet(i,n);setTimeout(function(){l(),t.__SYNC_NEW_HREF__===i&&(o.insertRule(u,r),o.deleteRule(r+1))},this.importCacheWaitPeriod)}},{key:"generateCacheBustUrl",value:function(e){var t=document.createElement("a");if(t.href=e,t.search.length>1){var r=l.default.parse(t.search.split("?")[1]);r["cache-bust"]=Math.random(),t.search="?"+l.default.stringify(r)}else t.search="?cache-bust="+Math.random();return t.href}}]),e}();t.default=f,new f},function(e,t,r){"use strict";t.decode=t.parse=r(2),t.encode=t.stringify=r(3)},function(e,t){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var i={};if("string"!=typeof e||0===e.length)return i;e=e.split(t);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var u=e.length;a>0&&u>a&&(u=a);for(var l=0;l<u;++l){var s,c,f,h,d=e[l].replace(/\+/g,"%20"),m=d.indexOf(n);m>=0?(s=d.substr(0,m),c=d.substr(m+1)):(s=d,c=""),f=decodeURIComponent(s),h=decodeURIComponent(c),r(i,f)?Array.isArray(i[f])?i[f].push(h):i[f]=[i[f],h]:i[f]=h}return i}},function(e,t){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,o){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(o){var i=encodeURIComponent(r(o))+n;return Array.isArray(e[o])?e[o].map(function(e){return i+encodeURIComponent(r(e))}).join(t):i+encodeURIComponent(r(e[o]))}).join(t):o?encodeURIComponent(r(o))+n+encodeURIComponent(r(e)):""}},function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return o.exec(e).slice(1)};t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,o="/"===a.charAt(0))}return t=r(n(t.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===a(e,-1);return e=r(n(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),i=n(r.split("/")),a=Math.min(o.length,i.length),u=a,l=0;l<a;l++)if(o[l]!==i[l]){u=l;break}for(var s=[],l=u;l<o.length;l++)s.push("..");return s=s.concat(i.slice(u)),s.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=i(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},t.basename=function(e,t){var r=i(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){return i(e)[3]};var a="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(t,r(5))},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===r||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===n||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){p&&d&&(p=!1,d.length?m=d.concat(m):y=-1,m.length&&u())}function u(){if(!p){var e=o(a);p=!0;for(var t=m.length;t;){for(d=m,m=[];++y<t;)d&&d[y].run();y=-1,t=m.length}d=null,p=!1,i(e)}}function l(e,t){this.fun=e,this.array=t}function s(){}var c,f,h=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:r}catch(e){c=r}try{f="function"==typeof clearTimeout?clearTimeout:n}catch(e){f=n}}();var d,m=[],p=!1,y=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];m.push(new l(e,t)),1!==m.length||p||o(u)},l.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=s,h.addListener=s,h.once=s,h.off=s,h.removeListener=s,h.removeAllListeners=s,h.emit=s,h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}}]);;
!function(e){function r(t){if(n[t])return n[t].exports;var i=n[t]={exports:{},id:t,loaded:!1};return e[t].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}var n={};r.m=e,r.c=n,r.p="",r(0)}([function(e,r){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),i=function(){function e(){n(this,e),this.prepros=window.__Prepros__,this.prepros.weinre=this,this.injected=!1,this.sendReady(),this.listen()}return t(e,[{key:"sendReady",value:function(){var e=this;this.prepros.onReady(function(){e.prepros.sendWebSocketEvent("weinre-ready",{})})}},{key:"injectWeinre",value:function(e){var r=e.weinreId,n=e.weinreServerPort;if(!this.injected){var t=document.createElement("script");t.src="http://"+window.location.hostname+":"+n+"/target/target-script-min.js#"+r,document.body.appendChild(t),this.injected=!0}}},{key:"listen",value:function(){var e=this;this.prepros.onWebSocketEvent("inject-weinre",function(r){var n=r.data,t=n.browserId,i=n.weinreId,o=n.weinreServerPort;t===e.prepros.browserId&&e.injectWeinre({weinreId:i,weinreServerPort:o})})}}]),e}();r.default=i,new i}]);;