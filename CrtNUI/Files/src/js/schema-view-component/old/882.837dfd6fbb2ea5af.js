(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[882],{38:(Je,x,z)=>{"use strict";z.d(x,{J:()=>ve});function ve(G){return G}},37044:(Je,x,z)=>{"use strict";z.d(x,{g0:()=>$});function ve(e){return!!(e&&typeof e.then=="function")}function G(e){return e||(e=0),new Promise(function(r){return setTimeout(r,e)})}function F(e,r){return Math.floor(Math.random()*(r-e+1)+e)}function he(){return Math.random().toString(36).substring(2)}var De=0,ge=0;function Y(){var e=new Date().getTime();return e===De?(ge++,e*1e3+ge):(De=e,ge=0,e*1e3)}var q=Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]",Ze=Y,Ie="native";function Qe(e){var r={messagesCallback:null,bc:new BroadcastChannel(e),subFns:[]};return r.bc.onmessage=function(i){r.messagesCallback&&r.messagesCallback(i.data)},r}function et(e){e.bc.close(),e.subFns=[]}function tt(e,r){try{return e.bc.postMessage(r,!1),Promise.resolve()}catch(i){return Promise.reject(i)}}function A(e,r){e.messagesCallback=r}function C(){if(q&&typeof window>"u")return!1;if(typeof BroadcastChannel=="function"){if(BroadcastChannel._pubkey)throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");return!0}else return!1}function rt(){return 150}const Ne={create:Qe,close:et,onMessage:A,postMessage:tt,canBeUsed:C,type:Ie,averageResponseTime:rt,microSeconds:Ze};var K=function(){function e(r){this.ttl=r,this.set=new Set,this.timeMap=new Map}return e.prototype.has=function(r){return this.set.has(r)},e.prototype.add=function(r){var i=this;this.timeMap.set(r,ke()),this.set.add(r),setTimeout(function(){Te(i)},0)},e.prototype.clear=function(){this.set.clear(),this.timeMap.clear()},e}();function Te(e){for(var r=ke()-e.ttl,i=e.set[Symbol.iterator]();;){var u=i.next().value;if(!u)return;var f=e.timeMap.get(u);if(f<r)e.timeMap.delete(u),e.set.delete(u);else return}}function ke(){return new Date().getTime()}function oe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=JSON.parse(JSON.stringify(e));return typeof r.webWorkerSupport>"u"&&(r.webWorkerSupport=!0),r.idb||(r.idb={}),r.idb.ttl||(r.idb.ttl=1e3*45),r.idb.fallbackInterval||(r.idb.fallbackInterval=150),e.idb&&typeof e.idb.onclose=="function"&&(r.idb.onclose=e.idb.onclose),r.localstorage||(r.localstorage={}),r.localstorage.removeTimeout||(r.localstorage.removeTimeout=1e3*60),e.methods&&(r.methods=e.methods),r.node||(r.node={}),r.node.ttl||(r.node.ttl=1e3*60*2),typeof r.node.useFastPath>"u"&&(r.node.useFastPath=!0),r}var J=Y,ie="pubkey.broadcast-channel-0-",L="messages",Pe="idb";function R(){if(typeof indexedDB<"u")return indexedDB;if(typeof window<"u"){if(typeof window.mozIndexedDB<"u")return window.mozIndexedDB;if(typeof window.webkitIndexedDB<"u")return window.webkitIndexedDB;if(typeof window.msIndexedDB<"u")return window.msIndexedDB}return!1}function nt(e){var r=R(),i=ie+e,u=r.open(i,1);u.onupgradeneeded=function(p){var h=p.target.result;h.createObjectStore(L,{keyPath:"id",autoIncrement:!0})};var f=new Promise(function(p,h){u.onerror=function(O){return h(O)},u.onsuccess=function(){p(u.result)}});return f}function at(e,r,i){var u=new Date().getTime(),f={uuid:r,time:u,data:i},p=e.transaction([L],"readwrite");return new Promise(function(h,O){p.oncomplete=function(){return h()},p.onerror=function(B){return O(B)};var te=p.objectStore(L);te.add(f)})}function T(e){var r=e.transaction(L).objectStore(L),i=[];return new Promise(function(u){r.openCursor().onsuccess=function(f){var p=f.target.result;p?(i.push(p.value),p.continue()):u(i)}})}function Ee(e,r){var i=e.transaction(L).objectStore(L),u=[];function f(){try{var p=IDBKeyRange.bound(r+1,1/0);return i.openCursor(p)}catch{return i.openCursor()}}return new Promise(function(p){f().onsuccess=function(h){var O=h.target.result;O?O.value.id<r+1?O.continue(r+1):(u.push(O.value),O.continue()):p(u)}})}function xe(e,r){var i=e.transaction([L],"readwrite").objectStore(L).delete(r);return new Promise(function(u){i.onsuccess=function(){return u()}})}function D(e,r){var i=new Date().getTime()-r,u=e.transaction(L).objectStore(L),f=[];return new Promise(function(p){u.openCursor().onsuccess=function(h){var O=h.target.result;if(O){var te=O.value;if(te.time<i)f.push(te),O.continue();else{p(f);return}}else p(f)}})}function ot(e,r){return D(e,r).then(function(i){return Promise.all(i.map(function(u){return xe(e,u.id)}))})}function m(e,r){return r=oe(r),nt(e).then(function(i){var u={closed:!1,lastCursorId:0,channelName:e,options:r,uuid:he(),eMIs:new K(r.idb.ttl*2),writeBlockPromise:Promise.resolve(),messagesCallback:null,readQueuePromises:[],db:i};return i.onclose=function(){u.closed=!0,r.idb.onclose&&r.idb.onclose()},W(u),u})}function W(e){e.closed||ye(e).then(function(){return G(e.options.idb.fallbackInterval)}).then(function(){return W(e)})}function se(e,r){return!(e.uuid===r.uuid||r.eMIs.has(e.id)||e.data.time<r.messagesCallbackTime)}function ye(e){return e.closed||!e.messagesCallback?Promise.resolve():Ee(e.db,e.lastCursorId).then(function(r){var i=r.filter(function(u){return!!u}).map(function(u){return u.id>e.lastCursorId&&(e.lastCursorId=u.id),u}).filter(function(u){return se(u,e)}).sort(function(u,f){return u.time-f.time});return i.forEach(function(u){e.messagesCallback&&(e.eMIs.add(u.id),e.messagesCallback(u.data))}),Promise.resolve()})}function be(e){e.closed=!0,e.db.close()}function Ae(e,r){return e.writeBlockPromise=e.writeBlockPromise.then(function(){return at(e.db,e.uuid,r)}).then(function(){F(0,10)===0&&ot(e.db,e.options.idb.ttl)}),e.writeBlockPromise}function it(e,r,i){e.messagesCallbackTime=i,e.messagesCallback=r,ye(e)}function we(){if(q)return!1;var e=R();return!!e}function st(e){return e.idb.fallbackInterval*2}const Fe={create:m,close:be,onMessage:it,postMessage:Ae,canBeUsed:we,type:Pe,averageResponseTime:st,microSeconds:J};var Ue=Y,Se="pubkey.broadcastChannel-",Be="localstorage";function Z(){var e;if(typeof window>"u")return null;try{e=window.localStorage,e=window["ie8-eventlistener/storage"]||window.localStorage}catch{}return e}function He(e){return Se+e}function ut(e,r){return new Promise(function(i){G().then(function(){var u=He(e.channelName),f={token:he(),time:new Date().getTime(),data:r,uuid:e.uuid},p=JSON.stringify(f);Z().setItem(u,p);var h=document.createEvent("Event");h.initEvent("storage",!0,!0),h.key=u,h.newValue=p,window.dispatchEvent(h),i()})})}function lt(e,r){var i=He(e),u=function(p){p.key===i&&r(JSON.parse(p.newValue))};return window.addEventListener("storage",u),u}function ft(e){window.removeEventListener("storage",e)}function ct(e,r){if(r=oe(r),!ze())throw new Error("BroadcastChannel: localstorage cannot be used");var i=he(),u=new K(r.localstorage.removeTimeout),f={channelName:e,uuid:i,eMIs:u};return f.listener=lt(e,function(p){!f.messagesCallback||p.uuid!==i&&(!p.token||u.has(p.token)||p.data.time&&p.data.time<f.messagesCallbackTime||(u.add(p.token),f.messagesCallback(p.data)))}),f}function dt(e){ft(e.listener)}function mt(e,r,i){e.messagesCallbackTime=i,e.messagesCallback=r}function ze(){if(q)return!1;var e=Z();if(!e)return!1;try{var r="__broadcastchannel_check";e.setItem(r,"works"),e.removeItem(r)}catch{return!1}return!0}function pt(){var e=120,r=navigator.userAgent.toLowerCase();return r.includes("safari")&&!r.includes("chrome")?e*2:e}const _t={create:ct,close:dt,onMessage:mt,postMessage:ut,canBeUsed:ze,type:Be,averageResponseTime:pt,microSeconds:Ue};var vt=Y,ht="simulate",ue=new Set;function gt(e){var r={name:e,messagesCallback:null};return ue.add(r),r}function a(e){ue.delete(e)}function s(e,r){return new Promise(function(i){return setTimeout(function(){var u=Array.from(ue);u.filter(function(f){return f.name===e.name}).filter(function(f){return f!==e}).filter(function(f){return!!f.messagesCallback}).forEach(function(f){return f.messagesCallback(r)}),i()},5)})}function c(e,r){e.messagesCallback=r}function _(){return!0}function v(){return 5}const I={create:gt,close:a,onMessage:c,postMessage:s,canBeUsed:_,type:ht,averageResponseTime:v,microSeconds:vt};var w=[Ne,Fe,_t];if(q){var U=z(68211);typeof U.canBeUsed=="function"&&w.push(U)}function j(e){var r=[].concat(e.methods,w).filter(Boolean);if(e.type){if(e.type==="simulate")return I;var i=r.find(function(f){return f.type===e.type});if(i)return i;throw new Error("method-type "+e.type+" not found")}!e.webWorkerSupport&&!q&&(r=r.filter(function(f){return f.type!=="idb"}));var u=r.find(function(f){return f.canBeUsed()});if(u)return u;throw new Error("No useable methode found:"+JSON.stringify(w.map(function(f){return f.type})))}var $=function(r,i){this.name=r,Me&&(i=Me),this.options=oe(i),this.method=j(this.options),this._iL=!1,this._onML=null,this._addEL={message:[],internal:[]},this._uMP=new Set,this._befC=[],this._prepP=null,le(this)};$._pubkey=!0;function kt(e){e=fillOptionsWithDefaults(e);var r=chooseMethod(e);return r.type==="node"?r.clearNodeFolder().then(function(){return!0}):Promise.resolve(!1)}var Me;function Pt(e){Me=e}$.prototype={postMessage:function(r){if(this.closed)throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed");return Q(this,"message",r)},postInternal:function(r){return Q(this,"internal",r)},set onmessage(e){var r=this.method.microSeconds(),i={time:r,fn:e};je(this,"message",this._onML),e&&typeof e=="function"?(this._onML=i,Ge(this,"message",i)):this._onML=null},addEventListener:function(r,i){var u=this.method.microSeconds(),f={time:u,fn:i};Ge(this,r,f)},removeEventListener:function(r,i){var u=this._addEL[r].find(function(f){return f.fn===i});je(this,r,u)},close:function(){var r=this;if(!this.closed){this.closed=!0;var i=this._prepP?this._prepP:Promise.resolve();return this._onML=null,this._addEL.message=[],i.then(function(){return Promise.all(Array.from(r._uMP))}).then(function(){return Promise.all(r._befC.map(function(u){return u()}))}).then(function(){return r.method.close(r._state)})}},get type(){return this.method.type},get isClosed(){return this.closed}};function Q(e,r,i){var u=e.method.microSeconds(),f={time:u,type:r,data:i},p=e._prepP?e._prepP:Promise.resolve();return p.then(function(){var h=e.method.postMessage(e._state,f);return e._uMP.add(h),h.catch().then(function(){return e._uMP.delete(h)}),h})}function le(e){var r=e.method.create(e.name,e.options);ve(r)?(e._prepP=r,r.then(function(i){e._state=i})):e._state=r}function We(e){return e._addEL.message.length>0||e._addEL.internal.length>0}function Ge(e,r,i){e._addEL[r].push(i),ee(e)}function je(e,r,i){e._addEL[r]=e._addEL[r].filter(function(u){return u!==i}),Le(e)}function ee(e){if(!e._iL&&We(e)){var r=function(f){e._addEL[f.type].forEach(function(p){f.time>=p.time&&p.fn(f.data)})},i=e.method.microSeconds();e._prepP?e._prepP.then(function(){e._iL=!0,e.method.onMessage(e._state,r,i)}):(e._iL=!0,e.method.onMessage(e._state,r,i))}}function Le(e){if(e._iL&&!We(e)){e._iL=!1;var r=e.method.microSeconds();e.method.onMessage(e._state,null,r)}}},23358:function(Je){/*! @license DOMPurify 2.5.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.4/LICENSE */(function(x,z){Je.exports=z()})(this,function(){"use strict";function x(a){return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},x(a)}function z(a,s){return z=Object.setPrototypeOf||function(_,v){return _.__proto__=v,_},z(a,s)}function ve(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function G(a,s,c){return ve()?G=Reflect.construct:G=function(v,I,w){var U=[null];U.push.apply(U,I);var j=Function.bind.apply(v,U),$=new j;return w&&z($,w.prototype),$},G.apply(null,arguments)}function F(a){return he(a)||De(a)||ge(a)||q()}function he(a){if(Array.isArray(a))return Y(a)}function De(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function ge(a,s){if(!!a){if(typeof a=="string")return Y(a,s);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return Y(a,s)}}function Y(a,s){(s==null||s>a.length)&&(s=a.length);for(var c=0,_=new Array(s);c<s;c++)_[c]=a[c];return _}function q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ze=Object.hasOwnProperty,Ie=Object.setPrototypeOf,Qe=Object.isFrozen,et=Object.getPrototypeOf,tt=Object.getOwnPropertyDescriptor,A=Object.freeze,C=Object.seal,rt=Object.create,Ne=typeof Reflect<"u"&&Reflect,K=Ne.apply,Te=Ne.construct;K||(K=function(s,c,_){return s.apply(c,_)}),A||(A=function(s){return s}),C||(C=function(s){return s}),Te||(Te=function(s,c){return G(s,F(c))});var ke=D(Array.prototype.forEach),oe=D(Array.prototype.pop),J=D(Array.prototype.push),ie=D(String.prototype.toLowerCase),L=D(String.prototype.toString),Pe=D(String.prototype.match),R=D(String.prototype.replace),nt=D(String.prototype.indexOf),at=D(String.prototype.trim),T=D(RegExp.prototype.test),Ee=ot(TypeError);function xe(a){return typeof a=="number"&&isNaN(a)}function D(a){return function(s){for(var c=arguments.length,_=new Array(c>1?c-1:0),v=1;v<c;v++)_[v-1]=arguments[v];return K(a,s,_)}}function ot(a){return function(){for(var s=arguments.length,c=new Array(s),_=0;_<s;_++)c[_]=arguments[_];return Te(a,c)}}function m(a,s,c){var _;c=(_=c)!==null&&_!==void 0?_:ie,Ie&&Ie(a,null);for(var v=s.length;v--;){var I=s[v];if(typeof I=="string"){var w=c(I);w!==I&&(Qe(s)||(s[v]=w),I=w)}a[I]=!0}return a}function W(a){var s=rt(null),c;for(c in a)K(Ze,a,[c])===!0&&(s[c]=a[c]);return s}function se(a,s){for(;a!==null;){var c=tt(a,s);if(c){if(c.get)return D(c.get);if(typeof c.value=="function")return D(c.value)}a=et(a)}function _(v){return console.warn("fallback value for",v),null}return _}var ye=A(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),be=A(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ae=A(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),it=A(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),we=A(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),st=A(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Fe=A(["#text"]),Ue=A(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Se=A(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Be=A(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Z=A(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),He=C(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ut=C(/<%[\w\W]*|[\w\W]*%>/gm),lt=C(/\${[\w\W]*}/gm),ft=C(/^data-[\-\w.\u00B7-\uFFFF]/),ct=C(/^aria-[\-\w]+$/),dt=C(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),mt=C(/^(?:\w+script|data):/i),ze=C(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),pt=C(/^html$/i),_t=C(/^[a-z][.\w]*(-[.\w]+)+$/i),vt=function(){return typeof window>"u"?null:window},ht=function(s,c){if(x(s)!=="object"||typeof s.createPolicy!="function")return null;var _=null,v="data-tt-policy-suffix";c.currentScript&&c.currentScript.hasAttribute(v)&&(_=c.currentScript.getAttribute(v));var I="dompurify"+(_?"#"+_:"");try{return s.createPolicy(I,{createHTML:function(U){return U},createScriptURL:function(U){return U}})}catch{return console.warn("TrustedTypes policy "+I+" could not be created."),null}};function ue(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:vt(),s=function(t){return ue(t)};if(s.version="2.5.4",s.removed=[],!a||!a.document||a.document.nodeType!==9)return s.isSupported=!1,s;var c=a.document,_=a.document,v=a.DocumentFragment,I=a.HTMLTemplateElement,w=a.Node,U=a.Element,j=a.NodeFilter,$=a.NamedNodeMap,kt=$===void 0?a.NamedNodeMap||a.MozNamedAttrMap:$,Me=a.HTMLFormElement,Pt=a.DOMParser,Q=a.trustedTypes,le=U.prototype,We=se(le,"cloneNode"),Ge=se(le,"nextSibling"),je=se(le,"childNodes"),ee=se(le,"parentNode");if(typeof I=="function"){var Le=_.createElement("template");Le.content&&Le.content.ownerDocument&&(_=Le.content.ownerDocument)}var e=ht(Q,c),r=e?e.createHTML(""):"",i=_,u=i.implementation,f=i.createNodeIterator,p=i.createDocumentFragment,h=i.getElementsByTagName,O=c.importNode,te={};try{te=W(_).documentMode?_.documentMode:{}}catch{}var B={};s.isSupported=typeof ee=="function"&&u&&u.createHTMLDocument!==void 0&&te!==9;var Tt=He,Et=ut,yt=lt,ir=ft,sr=ct,ur=mt,xt=ze,lr=_t,bt=dt,E=null,Ft=m({},[].concat(F(ye),F(be),F(Ae),F(we),F(Fe))),y=null,Ut=m({},[].concat(F(Ue),F(Se),F(Be),F(Z))),g=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Oe=null,At=null,Bt=!0,wt=!0,Ht=!1,zt=!0,fe=!1,St=!0,re=!1,Mt=!1,Lt=!1,ce=!1,$e=!1,Xe=!1,Wt=!0,Gt=!1,fr="user-content-",Ot=!0,Ce=!1,de={},me=null,jt=m({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),$t=null,Xt=m({},["audio","video","img","source","image","track"]),Ct=null,Vt=m({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ve="http://www.w3.org/1998/Math/MathML",Ye="http://www.w3.org/2000/svg",X="http://www.w3.org/1999/xhtml",pe=X,Rt=!1,Dt=null,cr=m({},[Ve,Ye,X],L),ne,dr=["application/xhtml+xml","text/html"],mr="text/html",b,_e=null,Yt=255,pr=_.createElement("form"),qt=function(t){return t instanceof RegExp||t instanceof Function},It=function(t){_e&&_e===t||((!t||x(t)!=="object")&&(t={}),t=W(t),ne=dr.indexOf(t.PARSER_MEDIA_TYPE)===-1?ne=mr:ne=t.PARSER_MEDIA_TYPE,b=ne==="application/xhtml+xml"?L:ie,E="ALLOWED_TAGS"in t?m({},t.ALLOWED_TAGS,b):Ft,y="ALLOWED_ATTR"in t?m({},t.ALLOWED_ATTR,b):Ut,Dt="ALLOWED_NAMESPACES"in t?m({},t.ALLOWED_NAMESPACES,L):cr,Ct="ADD_URI_SAFE_ATTR"in t?m(W(Vt),t.ADD_URI_SAFE_ATTR,b):Vt,$t="ADD_DATA_URI_TAGS"in t?m(W(Xt),t.ADD_DATA_URI_TAGS,b):Xt,me="FORBID_CONTENTS"in t?m({},t.FORBID_CONTENTS,b):jt,Oe="FORBID_TAGS"in t?m({},t.FORBID_TAGS,b):{},At="FORBID_ATTR"in t?m({},t.FORBID_ATTR,b):{},de="USE_PROFILES"in t?t.USE_PROFILES:!1,Bt=t.ALLOW_ARIA_ATTR!==!1,wt=t.ALLOW_DATA_ATTR!==!1,Ht=t.ALLOW_UNKNOWN_PROTOCOLS||!1,zt=t.ALLOW_SELF_CLOSE_IN_ATTR!==!1,fe=t.SAFE_FOR_TEMPLATES||!1,St=t.SAFE_FOR_XML!==!1,re=t.WHOLE_DOCUMENT||!1,ce=t.RETURN_DOM||!1,$e=t.RETURN_DOM_FRAGMENT||!1,Xe=t.RETURN_TRUSTED_TYPE||!1,Lt=t.FORCE_BODY||!1,Wt=t.SANITIZE_DOM!==!1,Gt=t.SANITIZE_NAMED_PROPS||!1,Ot=t.KEEP_CONTENT!==!1,Ce=t.IN_PLACE||!1,bt=t.ALLOWED_URI_REGEXP||bt,pe=t.NAMESPACE||X,g=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&qt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(g.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&qt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(g.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(g.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),fe&&(wt=!1),$e&&(ce=!0),de&&(E=m({},F(Fe)),y=[],de.html===!0&&(m(E,ye),m(y,Ue)),de.svg===!0&&(m(E,be),m(y,Se),m(y,Z)),de.svgFilters===!0&&(m(E,Ae),m(y,Se),m(y,Z)),de.mathMl===!0&&(m(E,we),m(y,Be),m(y,Z))),t.ADD_TAGS&&(E===Ft&&(E=W(E)),m(E,t.ADD_TAGS,b)),t.ADD_ATTR&&(y===Ut&&(y=W(y)),m(y,t.ADD_ATTR,b)),t.ADD_URI_SAFE_ATTR&&m(Ct,t.ADD_URI_SAFE_ATTR,b),t.FORBID_CONTENTS&&(me===jt&&(me=W(me)),m(me,t.FORBID_CONTENTS,b)),Ot&&(E["#text"]=!0),re&&m(E,["html","head","body"]),E.table&&(m(E,["tbody"]),delete Oe.tbody),A&&A(t),_e=t)},Kt=m({},["mi","mo","mn","ms","mtext"]),Jt=m({},["foreignobject","annotation-xml"]),_r=m({},["title","style","font","a","script"]),qe=m({},be);m(qe,Ae),m(qe,it);var Nt=m({},we);m(Nt,st);var vr=function(t){var n=ee(t);(!n||!n.tagName)&&(n={namespaceURI:pe,tagName:"template"});var o=ie(t.tagName),d=ie(n.tagName);return Dt[t.namespaceURI]?t.namespaceURI===Ye?n.namespaceURI===X?o==="svg":n.namespaceURI===Ve?o==="svg"&&(d==="annotation-xml"||Kt[d]):Boolean(qe[o]):t.namespaceURI===Ve?n.namespaceURI===X?o==="math":n.namespaceURI===Ye?o==="math"&&Jt[d]:Boolean(Nt[o]):t.namespaceURI===X?n.namespaceURI===Ye&&!Jt[d]||n.namespaceURI===Ve&&!Kt[d]?!1:!Nt[o]&&(_r[o]||!qe[o]):!!(ne==="application/xhtml+xml"&&Dt[t.namespaceURI]):!1},N=function(t){J(s.removed,{element:t});try{t.parentNode.removeChild(t)}catch{try{t.outerHTML=r}catch{t.remove()}}},Ke=function(t,n){try{J(s.removed,{attribute:n.getAttributeNode(t),from:n})}catch{J(s.removed,{attribute:null,from:n})}if(n.removeAttribute(t),t==="is"&&!y[t])if(ce||$e)try{N(n)}catch{}else try{n.setAttribute(t,"")}catch{}},Zt=function(t){var n,o;if(Lt)t="<remove></remove>"+t;else{var d=Pe(t,/^[\r\n\t ]+/);o=d&&d[0]}ne==="application/xhtml+xml"&&pe===X&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var k=e?e.createHTML(t):t;if(pe===X)try{n=new Pt().parseFromString(k,ne)}catch{}if(!n||!n.documentElement){n=u.createDocument(pe,"template",null);try{n.documentElement.innerHTML=Rt?r:k}catch{}}var M=n.body||n.documentElement;return t&&o&&M.insertBefore(_.createTextNode(o),M.childNodes[0]||null),pe===X?h.call(n,re?"html":"body")[0]:re?n.documentElement:M},Qt=function(t){return f.call(t.ownerDocument||t,t,j.SHOW_ELEMENT|j.SHOW_COMMENT|j.SHOW_TEXT|j.SHOW_PROCESSING_INSTRUCTION|j.SHOW_CDATA_SECTION,null,!1)},er=function(t){return t instanceof Me&&(typeof t.__depth<"u"&&typeof t.__depth!="number"||typeof t.__removalCount<"u"&&typeof t.__removalCount!="number"||typeof t.nodeName!="string"||typeof t.textContent!="string"||typeof t.removeChild!="function"||!(t.attributes instanceof kt)||typeof t.removeAttribute!="function"||typeof t.setAttribute!="function"||typeof t.namespaceURI!="string"||typeof t.insertBefore!="function"||typeof t.hasChildNodes!="function")},Re=function(t){return x(w)==="object"?t instanceof w:t&&x(t)==="object"&&typeof t.nodeType=="number"&&typeof t.nodeName=="string"},V=function(t,n,o){!B[t]||ke(B[t],function(d){d.call(s,n,o,_e)})},tr=function(t){var n;if(V("beforeSanitizeElements",t,null),er(t)||T(/[\u0080-\uFFFF]/,t.nodeName))return N(t),!0;var o=b(t.nodeName);if(V("uponSanitizeElement",t,{tagName:o,allowedTags:E}),t.hasChildNodes()&&!Re(t.firstElementChild)&&(!Re(t.content)||!Re(t.content.firstElementChild))&&T(/<[/\w]/g,t.innerHTML)&&T(/<[/\w]/g,t.textContent)||o==="select"&&T(/<template/i,t.innerHTML)||t.nodeType===7||St&&t.nodeType===8&&T(/<[/\w]/g,t.data))return N(t),!0;if(!E[o]||Oe[o]){if(!Oe[o]&&nr(o)&&(g.tagNameCheck instanceof RegExp&&T(g.tagNameCheck,o)||g.tagNameCheck instanceof Function&&g.tagNameCheck(o)))return!1;if(Ot&&!me[o]){var d=ee(t)||t.parentNode,k=je(t)||t.childNodes;if(k&&d)for(var M=k.length,S=M-1;S>=0;--S){var ae=We(k[S],!0);ae.__removalCount=(t.__removalCount||0)+1,d.insertBefore(ae,Ge(t))}}return N(t),!0}return t instanceof U&&!vr(t)||(o==="noscript"||o==="noembed"||o==="noframes")&&T(/<\/no(script|embed|frames)/i,t.innerHTML)?(N(t),!0):(fe&&t.nodeType===3&&(n=t.textContent,n=R(n,Tt," "),n=R(n,Et," "),n=R(n,yt," "),t.textContent!==n&&(J(s.removed,{element:t.cloneNode()}),t.textContent=n)),V("afterSanitizeElements",t,null),!1)},rr=function(t,n,o){if(Wt&&(n==="id"||n==="name")&&(o in _||o in pr||o==="__depth"||o==="__removalCount"))return!1;if(!(wt&&!At[n]&&T(ir,n))){if(!(Bt&&T(sr,n))){if(!y[n]||At[n]){if(!(nr(t)&&(g.tagNameCheck instanceof RegExp&&T(g.tagNameCheck,t)||g.tagNameCheck instanceof Function&&g.tagNameCheck(t))&&(g.attributeNameCheck instanceof RegExp&&T(g.attributeNameCheck,n)||g.attributeNameCheck instanceof Function&&g.attributeNameCheck(n))||n==="is"&&g.allowCustomizedBuiltInElements&&(g.tagNameCheck instanceof RegExp&&T(g.tagNameCheck,o)||g.tagNameCheck instanceof Function&&g.tagNameCheck(o))))return!1}else if(!Ct[n]){if(!T(bt,R(o,xt,""))){if(!((n==="src"||n==="xlink:href"||n==="href")&&t!=="script"&&nt(o,"data:")===0&&$t[t])){if(!(Ht&&!T(ur,R(o,xt,"")))){if(o)return!1}}}}}}return!0},nr=function(t){return t!=="annotation-xml"&&Pe(t,lr)},ar=function(t){var n,o,d,k;V("beforeSanitizeAttributes",t,null);var M=t.attributes;if(!!M){var S={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:y};for(k=M.length;k--;){n=M[k];var ae=n,H=ae.name,P=ae.namespaceURI;if(o=H==="value"?n.value:at(n.value),d=b(H),S.attrName=d,S.attrValue=o,S.keepAttr=!0,S.forceKeepAttr=void 0,V("uponSanitizeAttribute",t,S),o=S.attrValue,!S.forceKeepAttr&&(Ke(H,t),!!S.keepAttr)){if(!zt&&T(/\/>/i,o)){Ke(H,t);continue}if(St&&T(/((--!?|])>)|<\/(style|title)/i,o)){Ke(H,t);continue}fe&&(o=R(o,Tt," "),o=R(o,Et," "),o=R(o,yt," "));var or=b(t.nodeName);if(!!rr(or,d,o)){if(Gt&&(d==="id"||d==="name")&&(Ke(H,t),o=fr+o),e&&x(Q)==="object"&&typeof Q.getAttributeType=="function"&&!P)switch(Q.getAttributeType(or,d)){case"TrustedHTML":{o=e.createHTML(o);break}case"TrustedScriptURL":{o=e.createScriptURL(o);break}}try{P?t.setAttributeNS(P,H,o):t.setAttribute(H,o),er(t)?N(t):oe(s.removed)}catch{}}}}V("afterSanitizeAttributes",t,null)}},hr=function l(t){var n,o=Qt(t);for(V("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)if(V("uponSanitizeShadowNode",n,null),!tr(n)){var d=ee(n);n.nodeType===1&&(d&&d.__depth?n.__depth=(n.__removalCount||0)+d.__depth+1:n.__depth=1),(n.__depth>=Yt||xe(n.__depth))&&N(n),n.content instanceof v&&(n.content.__depth=n.__depth,l(n.content)),ar(n)}V("afterSanitizeShadowDOM",t,null)};return s.sanitize=function(l){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,o,d,k,M;if(Rt=!l,Rt&&(l="<!-->"),typeof l!="string"&&!Re(l))if(typeof l.toString=="function"){if(l=l.toString(),typeof l!="string")throw Ee("dirty is not a string, aborting")}else throw Ee("toString is not a function");if(!s.isSupported){if(x(a.toStaticHTML)==="object"||typeof a.toStaticHTML=="function"){if(typeof l=="string")return a.toStaticHTML(l);if(Re(l))return a.toStaticHTML(l.outerHTML)}return l}if(Mt||It(t),s.removed=[],typeof l=="string"&&(Ce=!1),Ce){if(l.nodeName){var S=b(l.nodeName);if(!E[S]||Oe[S])throw Ee("root node is forbidden and cannot be sanitized in-place")}}else if(l instanceof w)n=Zt("<!---->"),o=n.ownerDocument.importNode(l,!0),o.nodeType===1&&o.nodeName==="BODY"||o.nodeName==="HTML"?n=o:n.appendChild(o);else{if(!ce&&!fe&&!re&&l.indexOf("<")===-1)return e&&Xe?e.createHTML(l):l;if(n=Zt(l),!n)return ce?null:Xe?r:""}n&&Lt&&N(n.firstChild);for(var ae=Qt(Ce?l:n);d=ae.nextNode();)if(!(d.nodeType===3&&d===k)&&!tr(d)){var H=ee(d);d.nodeType===1&&(H&&H.__depth?d.__depth=(d.__removalCount||0)+H.__depth+1:d.__depth=1),(d.__depth>=Yt||xe(d.__depth))&&N(d),d.content instanceof v&&(d.content.__depth=d.__depth,hr(d.content)),ar(d),k=d}if(k=null,Ce)return l;if(ce){if($e)for(M=p.call(n.ownerDocument);n.firstChild;)M.appendChild(n.firstChild);else M=n;return(y.shadowroot||y.shadowrootmod)&&(M=O.call(c,M,!0)),M}var P=re?n.outerHTML:n.innerHTML;return re&&E["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&T(pt,n.ownerDocument.doctype.name)&&(P="<!DOCTYPE "+n.ownerDocument.doctype.name+`>
`+P),fe&&(P=R(P,Tt," "),P=R(P,Et," "),P=R(P,yt," ")),e&&Xe?e.createHTML(P):P},s.setConfig=function(l){It(l),Mt=!0},s.clearConfig=function(){_e=null,Mt=!1},s.isValidAttribute=function(l,t,n){_e||It({});var o=b(l),d=b(t);return rr(o,d,n)},s.addHook=function(l,t){typeof t=="function"&&(B[l]=B[l]||[],J(B[l],t))},s.removeHook=function(l){if(B[l])return oe(B[l])},s.removeHooks=function(l){B[l]&&(B[l]=[])},s.removeAllHooks=function(){B={}},s}var gt=ue();return gt})}}]);
