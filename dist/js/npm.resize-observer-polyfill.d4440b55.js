(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.resize-observer-polyfill"],{"6dd8":function(t,e,n){n.r(e),function(t){var n="undefined"!=typeof Map?Map:(Object.defineProperty(i.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),i.prototype.get=function(t){return t=r(this.__entries__,t),(t=this.__entries__[t])&&t[1]},i.prototype.set=function(t,e){var n=r(this.__entries__,t);~n?this.__entries__[n][1]=e:this.__entries__.push([t,e])},i.prototype.delete=function(t){var e=this.__entries__;~(t=r(e,t))&&e.splice(t,1)},i.prototype.has=function(t){return!!~r(this.__entries__,t)},i.prototype.clear=function(){this.__entries__.splice(0)},i.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,i=this.__entries__;n<i.length;n++){var r=i[n];t.call(e,r[1],r[0])}},i);function i(){this.__entries__=[]}function r(t,e){var n=-1;return t.some((function(t,i){return t[0]===e&&(n=i,!0)})),n}var o="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,s=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),a="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(s):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},c=["top","right","bottom","left","width","height","size","weight"],h="undefined"!=typeof MutationObserver,u=(f.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},f.prototype.removeObserver=function(t){var e=this.observers_;~(t=e.indexOf(t))&&e.splice(t,1),!e.length&&this.connected_&&this.disconnect_()},f.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},f.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),0<t.length},f.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),h?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},f.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},f.prototype.onTransitionEnd_=function(t){var e=void 0===(t=t.propertyName)?"":t;c.some((function(t){return!!~e.indexOf(t)}))&&this.refresh()},f.getInstance=function(){return this.instance_||(this.instance_=new f),this.instance_},f.instance_=null,f);function f(){function t(){o&&(o=!1,i()),s&&n()}function e(){a(t)}function n(){var t=Date.now();if(o){if(t-c<2)return;s=!0}else s=!(o=!0),setTimeout(e,r);c=t}var i,r,o,s,c;this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=(i=this.refresh.bind(this),s=o=!(r=20),c=0,n)}var d=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},p=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||s},v=y(0,0,0,0);function l(t){return parseFloat(t)||0}function _(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+l(t["border-"+n+"-width"])}),0)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof p(t).SVGGraphicsElement}:function(t){return t instanceof p(t).SVGElement&&"function"==typeof t.getBBox};function m(t){var e;return o?b(t)?y(0,0,(e=(e=t).getBBox()).width,e.height):function(t){var e,n,i,r,o,s,a=t.clientWidth,c=t.clientHeight;return a||c?(n=(e=function(t){for(var e={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var r=i[n],o=t["padding-"+r];e[r]=l(o)}return e}(s=p(t).getComputedStyle(t))).left+e.right,i=e.top+e.bottom,r=l(s.width),o=l(s.height),"border-box"===s.boxSizing&&(Math.round(r+n)!==a&&(r-=_(s,"left","right")+n),Math.round(o+i)!==c)&&(o-=_(s,"top","bottom")+i),t!==p(t).document.documentElement&&(s=Math.round(r+n)-a,t=Math.round(o+i)-c,1!==Math.abs(s)&&(r-=s),1!==Math.abs(t))&&(o-=t),y(e.left,e.top,r,o)):v}(t):v}function y(t,e,n,i){return{x:t,y:e,width:n,height:i}}g.prototype.isActive=function(){var t=m(this.target);return(this.contentRect_=t).width!==this.broadcastWidth||t.height!==this.broadcastHeight},g.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var w=g;function g(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}var E=function(t,e){n=(e=e).x,i=e.y,o=e.width,e=e.height,r="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,r=Object.create(r.prototype),d(r,{x:n,y:i,width:o,height:e,top:i,right:n+o,bottom:e+i,left:n});var n,i,r,o=r;d(this,{target:t,contentRect:o})},O=(M.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof p(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new w(t)),this.controller_.addObserver(this),this.controller_.refresh())}},M.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof p(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},M.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},M.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},M.prototype.broadcastActive=function(){var t,e;this.hasActive()&&(t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new E(t.target,t.broadcastRect())})),this.callback_.call(t,e,t),this.clearActive())},M.prototype.clearActive=function(){this.activeObservations_.splice(0)},M.prototype.hasActive=function(){return 0<this.activeObservations_.length},M);function M(t,e,i){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}var A=new("undefined"!=typeof WeakMap?WeakMap:n),T=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance();e=new O(e,n,this);A.set(this,e)};["observe","unobserve","disconnect"].forEach((function(t){T.prototype[t]=function(){var e;return(e=A.get(this))[t].apply(e,arguments)}})),t=void 0!==s.ResizeObserver?s.ResizeObserver:T;e.default=t}.call(this,n("c8ba"))}}]);