(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[3865],{91658:(C,w,m)=>{m.d(w,{Z:()=>E});var c=m(83612),b=m.n(c),S=1e3;function E(a){this._eventBus=a}E.$inject=["eventBus"];function N(a,f){return function(l){return a.call(f||null,l.context,l.command,l)}}E.prototype.on=function(a,f,l,g,v,s){if(((0,c.isFunction)(f)||(0,c.isNumber)(f))&&(s=v,v=g,g=l,l=f,f=null),(0,c.isFunction)(l)&&(s=v,v=g,g=l,l=S),(0,c.isObject)(v)&&(s=v,v=!1),!(0,c.isFunction)(g))throw new Error("handlerFn must be a function");(0,c.isArray)(a)||(a=[a]);var h=this._eventBus;(0,c.forEach)(a,function(_){var y=["commandStack",_,f].filter(function(T){return T}).join(".");h.on(y,l,v?N(g,s):g,s)})};var p=["canExecute","preExecute","preExecuted","execute","executed","postExecute","postExecuted","revert","reverted"];(0,c.forEach)(p,function(a){E.prototype[a]=function(f,l,g,v,s){((0,c.isFunction)(f)||(0,c.isNumber)(f))&&(s=v,v=g,g=l,l=f,f=null),this.on(f,a,l,g,v,s)}})},33112:(C,w,m)=>{m.d(w,{Z:()=>S});var c=m(83612),b=m.n(c);function S(){var E={"no-fill":{fill:"none"},"no-border":{strokeOpacity:0},"no-events":{pointerEvents:"none"}},N=this;this.cls=function(p,a,f){var l=this.style(a,f);return(0,c.assign)(l,{class:p})},this.style=function(p,a){!(0,c.isArray)(p)&&!a&&(a=p,p=[]);var f=(0,c.reduce)(p,function(l,g){return(0,c.assign)(l,E[g]||{})},{});return a?(0,c.assign)(f,a):f},this.computeStyle=function(p,a,f){return(0,c.isArray)(a)||(f=a,a=[]),N.style(a||[],(0,c.assign)({},f,p||{}))}}},28229:(C,w,m)=>{m.d(w,{JS:()=>E,aw:()=>S,cY:()=>p,ot:()=>N});var c=m(83612),b=m.n(c);function S(a){return a.ctrlKey||a.metaKey||a.shiftKey||a.altKey}function E(a){return a.altKey?!1:a.ctrlKey||a.metaKey}function N(a,f){return a=(0,c.isArray)(a)?a:[a],a.indexOf(f.key)>-1}function p(a){return a.shiftKey}},44610:(C,w,m)=>{m.d(w,{By:()=>S,G:()=>v,Pi:()=>f,U:()=>g,Wn:()=>l,hT:()=>a,w3:()=>E});var c=Math.abs,b=Math.round;function S(s,h,_){_=_===void 0?10:_;var y,T;for(y=0;y<h.length;y++)if(T=h[y],c(T-s)<=_)return T}function E(s){return{x:s.x,y:s.y}}function N(s){return{x:s.x+s.width,y:s.y}}function p(s){return{x:s.x,y:s.y+s.height}}function a(s){return{x:s.x+s.width,y:s.y+s.height}}function f(s,h){return!s||isNaN(s.x)||isNaN(s.y)?h:{x:b(s.x+s.width/2),y:b(s.y+s.height/2)}}function l(s,h){var _=s.snapped;return _?typeof h=="string"?_[h]:_.x&&_.y:!1}function g(s,h,_){if(typeof h!="string")throw new Error("axis must be in [x, y]");if(typeof _!="number"&&_!==!1)throw new Error("value must be Number or false");var y,T=s[h],x=s.snapped=s.snapped||{};return _===!1?x[h]=!1:(x[h]=!0,y=_-T,s[h]+=y,s["d"+h]+=y),T}function v(s){return s.children||[]}},18872:(C,w,m)=>{m.d(w,{Iu:()=>S,U1:()=>E,vs:()=>b});var c=m(21537);function b(p,a,f,l,g){var v=(0,c.pH)();v.setTranslate(a,f);var s=(0,c.pH)();s.setRotate(l||0,0,0);var h=(0,c.pH)();h.setScale(g||1,g||1),(0,c.vs)(p,[v,s,h])}function S(p,a,f){var l=(0,c.pH)();l.setTranslate(a,f),(0,c.vs)(p,l)}function E(p,a){var f=(0,c.pH)();f.setRotate(a,0,0),(0,c.vs)(p,f)}function N(p,a){var f=createTransform();f.setScale(a,a),svgTransform(p,f)}},21537:(C,w,m)=>{m.d(w,{Lj:()=>l,Od:()=>T,R3:()=>S,Sh:()=>_,Ue:()=>k,ZH:()=>x,d9:()=>L,pH:()=>W,vs:()=>o,wz:()=>H});function c(e,t){if(e.ownerDocument!==t.ownerDocument)try{return t.ownerDocument.importNode(e,!0)}catch{}return e}function b(e,t){return t.appendChild(c(e,t))}function S(e,t){return b(t,e),e}var E=2,N={"alignment-baseline":1,"baseline-shift":1,clip:1,"clip-path":1,"clip-rule":1,color:1,"color-interpolation":1,"color-interpolation-filters":1,"color-profile":1,"color-rendering":1,cursor:1,direction:1,display:1,"dominant-baseline":1,"enable-background":1,fill:1,"fill-opacity":1,"fill-rule":1,filter:1,"flood-color":1,"flood-opacity":1,font:1,"font-family":1,"font-size":E,"font-size-adjust":1,"font-stretch":1,"font-style":1,"font-variant":1,"font-weight":1,"glyph-orientation-horizontal":1,"glyph-orientation-vertical":1,"image-rendering":1,kerning:1,"letter-spacing":1,"lighting-color":1,marker:1,"marker-end":1,"marker-mid":1,"marker-start":1,mask:1,opacity:1,overflow:1,"pointer-events":1,"shape-rendering":1,"stop-color":1,"stop-opacity":1,stroke:1,"stroke-dasharray":1,"stroke-dashoffset":1,"stroke-linecap":1,"stroke-linejoin":1,"stroke-miterlimit":1,"stroke-opacity":1,"stroke-width":E,"text-anchor":1,"text-decoration":1,"text-rendering":1,"unicode-bidi":1,visibility:1,"word-spacing":1,"writing-mode":1};function p(e,t){return N[t]?e.style[t]:e.getAttributeNS(null,t)}function a(e,t,i){var u=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),d=N[u];d?(d===E&&typeof i=="number"&&(i=String(i)+"px"),e.style[u]=i):e.setAttributeNS(null,t,i)}function f(e,t){var i=Object.keys(t),u,d;for(u=0,d;d=i[u];u++)a(e,d,t[d])}function l(e,t,i){if(typeof t=="string")if(i!==void 0)a(e,t,i);else return p(e,t);else f(e,t);return e}function g(e,t){if(e.indexOf)return e.indexOf(t);for(var i=0;i<e.length;++i)if(e[i]===t)return i;return-1}var v=/\s+/,s=Object.prototype.toString;function h(e){return typeof e<"u"}function _(e){return new y(e)}function y(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}y.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array(),i=g(t,e);return~i||t.push(e),h(this.el.className.baseVal)?this.el.className.baseVal=t.join(" "):this.el.className=t.join(" "),this},y.prototype.remove=function(e){if(s.call(e)==="[object RegExp]")return this.removeMatching(e);if(this.list)return this.list.remove(e),this;var t=this.array(),i=g(t,e);return~i&&t.splice(i,1),this.el.className.baseVal=t.join(" "),this},y.prototype.removeMatching=function(e){for(var t=this.array(),i=0;i<t.length;i++)e.test(t[i])&&this.remove(t[i]);return this},y.prototype.toggle=function(e,t){return this.list?(h(t)?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(h(t)?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},y.prototype.array=function(){var e=this.el.getAttribute("class")||"",t=e.replace(/^\s+|\s+$/g,""),i=t.split(v);return i[0]===""&&i.shift(),i},y.prototype.has=y.prototype.contains=function(e){return this.list?this.list.contains(e):!!~g(this.array(),e)};function T(e){var t=e.parentNode;return t&&t.removeChild(e),e}function x(e){for(var t;t=e.firstChild;)T(t);return e}function L(e){return e.cloneNode(!0)}var D={svg:"http://www.w3.org/2000/svg"},R='<svg xmlns="'+D.svg+'"';function U(e){var t=!1;e.substring(0,4)==="<svg"?e.indexOf(D.svg)===-1&&(e=R+e.substring(4)):(e=R+">"+e+"</svg>",t=!0);var i=J(e);if(!t)return i;for(var u=document.createDocumentFragment(),d=i.firstChild;d.firstChild;)u.appendChild(d.firstChild);return u}function J(e){var t;return t=new DOMParser,t.async=!1,t.parseFromString(e,"text/xml")}function k(e,t){var i;return e.charAt(0)==="<"?(i=U(e).firstChild,i=document.importNode(i,!0)):i=document.createElementNS(D.svg,e),t&&l(i,t),i}function V(e,t,i,u){e.addEventListener(t,i,u)}function G(e,t,i,u){e.removeEventListener(t,i,u)}var j=null;function M(){return j===null&&(j=k("svg")),j}function K(e,t){var i,u,d=Object.keys(t);for(i=0;u=d[i];i++)e[u]=t[u];return e}function F(e,t){var i=M().createSVGPoint();switch(arguments.length){case 0:return i;case 2:e={x:e,y:t};break}return K(i,e)}function H(e,t,i,u,d,I){var A=M().createSVGMatrix();switch(arguments.length){case 0:return A;case 1:return K(A,e);case 6:return K(A,{a:e,b:t,c:i,d:u,e:d,f:I})}}function W(e){return e?M().createSVGTransformFromMatrix(e):M().createSVGTransform()}var O=/([&<>]{1})/g,B=/([\n\r"]{1})/g,$={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"'"};function P(e,t){function i(u,d){return $[d]||d}return e.replace(t,i)}function z(e,t){var i,u,d,I,A;switch(e.nodeType){case 3:t.push(P(e.textContent,O));break;case 1:if(t.push("<",e.tagName),e.hasAttributes())for(d=e.attributes,i=0,u=d.length;i<u;++i)I=d.item(i),t.push(" ",I.name,'="',P(I.value,B),'"');if(e.hasChildNodes()){for(t.push(">"),A=e.childNodes,i=0,u=A.length;i<u;++i)z(A.item(i),t);t.push("</",e.tagName,">")}else t.push("/>");break;case 8:t.push("<!--",P(e.nodeValue,O),"-->");break;case 4:t.push("<![CDATA[",e.nodeValue,"]]>");break;default:throw new Error("unable to handle node "+e.nodeType)}return t}function Q(e,t){var i=U(t);if(x(e),!!t){q(i)||(i=i.documentElement);for(var u=Y(i.childNodes),d=0;d<u.length;d++)b(u[d],e)}}function Z(e){for(var t=e.firstChild,i=[];t;)z(t,i),t=t.nextSibling;return i.join("")}function q(e){return e.nodeName==="#document-fragment"}function re(e,t){if(t!==void 0){try{Q(e,t)}catch(i){throw new Error("error parsing SVG: "+i.message)}return e}else return Z(e)}function Y(e){return Array.prototype.slice.call(e)}function ne(e,t){return e.querySelector(t)}function ie(e,t){var i=e.querySelectorAll(t);return[].map.call(i,function(u){return u})}function X(e,t){return t.insertBefore(c(e,t),t.firstChild||null)}function ee(e,t){return X(t,e),e}function te(e,t){return e.parentNode.replaceChild(c(t,e),e),t}function r(e,t){return t instanceof SVGMatrix?e.createSVGTransformFromMatrix(t):t}function n(e,t){var i,u;for(e.clear(),i=0;u=t[i];i++)e.appendItem(r(e,u))}function o(e,t){var i=e.transform.baseVal;return t&&(Array.isArray(t)||(t=[t]),n(i,t)),i.consolidate()}},66270:(C,w,m)=>{m.d(w,{Lj:()=>l,Od:()=>h,R3:()=>S,Sh:()=>v,Ue:()=>R,d9:()=>y,vs:()=>te,wz:()=>M});function c(r,n){if(r.ownerDocument!==n.ownerDocument)try{return n.ownerDocument.importNode(r,!0)}catch{}return r}function b(r,n){return n.appendChild(c(r,n))}function S(r,n){return b(n,r),r}var E=2,N={"alignment-baseline":1,"baseline-shift":1,clip:1,"clip-path":1,"clip-rule":1,color:1,"color-interpolation":1,"color-interpolation-filters":1,"color-profile":1,"color-rendering":1,cursor:1,direction:1,display:1,"dominant-baseline":1,"enable-background":1,fill:1,"fill-opacity":1,"fill-rule":1,filter:1,"flood-color":1,"flood-opacity":1,font:1,"font-family":1,"font-size":E,"font-size-adjust":1,"font-stretch":1,"font-style":1,"font-variant":1,"font-weight":1,"glyph-orientation-horizontal":1,"glyph-orientation-vertical":1,"image-rendering":1,kerning:1,"letter-spacing":1,"lighting-color":1,marker:1,"marker-end":1,"marker-mid":1,"marker-start":1,mask:1,opacity:1,overflow:1,"pointer-events":1,"shape-rendering":1,"stop-color":1,"stop-opacity":1,stroke:1,"stroke-dasharray":1,"stroke-dashoffset":1,"stroke-linecap":1,"stroke-linejoin":1,"stroke-miterlimit":1,"stroke-opacity":1,"stroke-width":E,"text-anchor":1,"text-decoration":1,"text-rendering":1,"unicode-bidi":1,visibility:1,"word-spacing":1,"writing-mode":1};function p(r,n){return N[n]?r.style[n]:r.getAttributeNS(null,n)}function a(r,n,o){var e=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),t=N[e];t?(t===E&&typeof o=="number"&&(o=String(o)+"px"),r.style[e]=o):r.setAttributeNS(null,n,o)}function f(r,n){var o=Object.keys(n),e,t;for(e=0,t;t=o[e];e++)a(r,t,n[t])}function l(r,n,o){if(typeof n=="string")if(o!==void 0)a(r,n,o);else return p(r,n);else f(r,n);return r}const g=Object.prototype.toString;function v(r){return new s(r)}function s(r){if(!r||!r.nodeType)throw new Error("A DOM element reference is required");this.el=r,this.list=r.classList}s.prototype.add=function(r){return this.list.add(r),this},s.prototype.remove=function(r){return g.call(r)=="[object RegExp]"?this.removeMatching(r):(this.list.remove(r),this)},s.prototype.removeMatching=function(r){const n=this.array();for(let o=0;o<n.length;o++)r.test(n[o])&&this.remove(n[o]);return this},s.prototype.toggle=function(r,n){return typeof n<"u"?n!==this.list.toggle(r,n)&&this.list.toggle(r):this.list.toggle(r),this},s.prototype.array=function(){return Array.from(this.list)},s.prototype.has=s.prototype.contains=function(r){return this.list.contains(r)};function h(r){var n=r.parentNode;return n&&n.removeChild(r),r}function _(r){for(var n;n=r.firstChild;)h(n);return r}function y(r){return r.cloneNode(!0)}var T={svg:"http://www.w3.org/2000/svg"},x='<svg xmlns="'+T.svg+'"';function L(r){var n=!1;r.substring(0,4)==="<svg"?r.indexOf(T.svg)===-1&&(r=x+r.substring(4)):(r=x+">"+r+"</svg>",n=!0);var o=D(r);if(!n)return o;for(var e=document.createDocumentFragment(),t=o.firstChild;t.firstChild;)e.appendChild(t.firstChild);return e}function D(r){var n;return n=new DOMParser,n.async=!1,n.parseFromString(r,"text/xml")}function R(r,n){var o;return r.charAt(0)==="<"?(o=L(r).firstChild,o=document.importNode(o,!0)):o=document.createElementNS(T.svg,r),n&&l(o,n),o}function U(r,n,o,e){r.addEventListener(n,o,e)}function J(r,n,o,e){r.removeEventListener(n,o,e)}var k=null;function V(){return k===null&&(k=R("svg")),k}function G(r,n){var o,e,t=Object.keys(n);for(o=0;e=t[o];o++)r[e]=n[e];return r}function j(r,n){var o=V().createSVGPoint();switch(arguments.length){case 0:return o;case 2:r={x:r,y:n};break}return G(o,r)}function M(r,n,o,e,t,i){var u=V().createSVGMatrix();switch(arguments.length){case 0:return u;case 1:return G(u,r);case 6:return G(u,{a:r,b:n,c:o,d:e,e:t,f:i})}}function K(r){return r?V().createSVGTransformFromMatrix(r):V().createSVGTransform()}var F=/([&<>]{1})/g,H=/([\n\r"]{1})/g,W={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"'"};function O(r,n){function o(e,t){return W[t]||t}return r.replace(n,o)}function B(r,n){var o,e,t,i,u;switch(r.nodeType){case 3:n.push(O(r.textContent,F));break;case 1:if(n.push("<",r.tagName),r.hasAttributes())for(t=r.attributes,o=0,e=t.length;o<e;++o)i=t.item(o),n.push(" ",i.name,'="',O(i.value,H),'"');if(r.hasChildNodes()){for(n.push(">"),u=r.childNodes,o=0,e=u.length;o<e;++o)B(u.item(o),n);n.push("</",r.tagName,">")}else n.push("/>");break;case 8:n.push("<!--",O(r.nodeValue,F),"-->");break;case 4:n.push("<![CDATA[",r.nodeValue,"]]>");break;default:throw new Error("unable to handle node "+r.nodeType)}return n}function $(r,n){var o=L(n);if(_(r),!!n){z(o)||(o=o.documentElement);for(var e=Z(o.childNodes),t=0;t<e.length;t++)b(e[t],r)}}function P(r){for(var n=r.firstChild,o=[];n;)B(n,o),n=n.nextSibling;return o.join("")}function z(r){return r.nodeName==="#document-fragment"}function Q(r,n){if(n!==void 0){try{$(r,n)}catch(o){throw new Error("error parsing SVG: "+o.message)}return r}else return P(r)}function Z(r){return Array.prototype.slice.call(r)}function q(r,n){return r.querySelector(n)}function re(r,n){var o=r.querySelectorAll(n);return[].map.call(o,function(e){return e})}function Y(r,n){return n.insertBefore(c(r,n),n.firstChild||null)}function ne(r,n){return Y(n,r),r}function ie(r,n){return r.parentNode.replaceChild(c(n,r),r),n}function X(r,n){return n instanceof SVGMatrix?r.createSVGTransformFromMatrix(n):n}function ee(r,n){var o,e;for(r.clear(),o=0;e=n[o];o++)r.appendItem(X(r,e))}function te(r,n){var o=r.transform.baseVal;return n&&(Array.isArray(n)||(n=[n]),ee(o,n)),o.consolidate()}}}]);
