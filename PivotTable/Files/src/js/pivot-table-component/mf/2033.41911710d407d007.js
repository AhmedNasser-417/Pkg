(self.webpackChunkapp_studio_enterprise_pivot_table=self.webpackChunkapp_studio_enterprise_pivot_table||[]).push([[2033,8239,5036,6118,7344,8160,1034,8056],{66219:(S,E,R)=>{R.d(E,{Z:()=>I});var b=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];n.call(r,s[1],s[0])}},t}()}(),m=typeof window<"u"&&typeof document<"u"&&window.document===document,u=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),y=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(u):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),w=2;function l(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&f()}function s(){y(o)}function f(){var h=Date.now();if(n){if(h-i<w)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=h}return f}var p=20,_=["top","right","bottom","left","width","height","size","weight"],d=typeof MutationObserver<"u",v=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=l(this.refresh.bind(this),p)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!m||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),d?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!m||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=_.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),a=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},c=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||u},M=O(0,0,0,0);function g(e){return parseFloat(e)||0}function A(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+g(o)},0)}function k(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],s=e["padding-"+o];n[o]=g(s)}return n}function D(e){var t=e.getBBox();return O(0,0,t.width,t.height)}function P(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return M;var r=c(e).getComputedStyle(e),i=k(r),o=i.left+i.right,s=i.top+i.bottom,f=g(r.width),h=g(r.height);if(r.boxSizing==="border-box"&&(Math.round(f+o)!==t&&(f-=A(r,"left","right")+o),Math.round(h+s)!==n&&(h-=A(r,"top","bottom")+s)),!L(e)){var z=Math.round(f+o)-t,C=Math.round(h+s)-n;Math.abs(z)!==1&&(f-=z),Math.abs(C)!==1&&(h-=C)}return O(i.left,i.top,f,h)}var G=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof c(e).SVGGraphicsElement}:function(e){return e instanceof c(e).SVGElement&&typeof e.getBBox=="function"}}();function L(e){return e===c(e).document.documentElement}function W(e){return m?G(e)?D(e):P(e):M}function F(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return a(s,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),s}function O(e,t,n,r){return{x:e,y:t,width:n,height:r}}var B=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=O(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=W(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),H=function(){function e(t,n){var r=F(n);a(this,{target:t,contentRect:r})}return e}(),j=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new b,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof c(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new B(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof c(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new H(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),x=typeof WeakMap<"u"?new WeakMap:new b,T=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=v.getInstance(),r=new j(t,n,this);x.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){T.prototype[e]=function(){var t;return(t=x.get(this))[e].apply(t,arguments)}});var q=function(){return typeof u.ResizeObserver<"u"?u.ResizeObserver:T}();const I=q},8239:(S,E,R)=>{R.d(E,{Z:()=>m});function b(u,y,w,l,p,_,d){try{var v=u[_](d),a=v.value}catch(c){w(c);return}v.done?y(a):Promise.resolve(a).then(l,p)}function m(u){return function(){var y=this,w=arguments;return new Promise(function(l,p){var _=u.apply(y,w);function d(a){b(_,l,p,d,v,"next",a)}function v(a){b(_,l,p,d,v,"throw",a)}d(void 0)})}}}}]);
