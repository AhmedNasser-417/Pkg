(self.webpackChunkapp_studio_enterprise_pivot_table=self.webpackChunkapp_studio_enterprise_pivot_table||[]).push([[5998],{5998:(Ke,X,P)=>{P.r(X),P.d(X,{BrowserModule:()=>g,BrowserTransferStateModule:()=>b,By:()=>ze,DomSanitizer:()=>v,EVENT_MANAGER_PLUGINS:()=>M,EventManager:()=>f,HAMMER_GESTURE_CONFIG:()=>R,HAMMER_LOADER:()=>N,HammerGestureConfig:()=>h,HammerModule:()=>O,Meta:()=>D,REMOVE_STYLES_ON_COMPONENT_DESTROY:()=>k,Title:()=>_,TransferState:()=>I,VERSION:()=>$e,bootstrapApplication:()=>Ie,createApplication:()=>be,disableDebugTools:()=>ke,enableDebugTools:()=>He,makeStateKey:()=>xe,platformBrowser:()=>Ne,provideProtractorTestingSupport:()=>Re,\u0275BrowserDomAdapter:()=>j,\u0275BrowserGetTestability:()=>q,\u0275DomEventsPlugin:()=>T,\u0275DomRendererFactory2:()=>p,\u0275DomSanitizerImpl:()=>E,\u0275DomSharedStylesHost:()=>d,\u0275HammerGesturesPlugin:()=>m,\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>$,\u0275KeyEventsPlugin:()=>c,\u0275NAMESPACE_URIS:()=>H,\u0275SharedStylesHost:()=>y,\u0275TRANSITION_ID:()=>U,\u0275escapeHtml:()=>Ue,\u0275flattenStyles:()=>B,\u0275getDOM:()=>a.\u0275getDOM,\u0275initDomAdapter:()=>le,\u0275shimContentAttribute:()=>ee,\u0275shimHostAttribute:()=>te});var a=P(31134),n=P(94450);/**
 * @license Angular v15.2.9
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */class ye extends a.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class j extends ye{static makeCurrent(){(0,a.\u0275setRootDomAdapter)(new j)}onAndCancel(e,t,r){return e.addEventListener(t,r,!1),()=>{e.removeEventListener(t,r,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){const t=ge();return t==null?null:me(t)}resetBaseElement(){A=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return(0,a.\u0275parseCookieValue)(document.cookie,e)}}let A=null;function ge(){return A=A||document.querySelector("base"),A?A.getAttribute("href"):null}let L;function me(o){L=L||document.createElement("a"),L.setAttribute("href",o);const e=L.pathname;return e.charAt(0)==="/"?e:`/${e}`}const U=new n.InjectionToken("TRANSITION_ID");function Ee(o,e,t){return()=>{t.get(n.ApplicationInitStatus).donePromise.then(()=>{const r=(0,a.\u0275getDOM)(),s=e.querySelectorAll(`style[ng-transition="${o}"]`);for(let i=0;i<s.length;i++)r.remove(s[i])})}}const Se=[{provide:n.APP_INITIALIZER,useFactory:Ee,deps:[U,a.DOCUMENT,n.Injector],multi:!0}];class q{addToWindow(e){n.\u0275global.getAngularTestability=(r,s=!0)=>{const i=e.findTestabilityInTree(r,s);if(i==null)throw new Error("Could not find testability for element.");return i},n.\u0275global.getAllAngularTestabilities=()=>e.getAllTestabilities(),n.\u0275global.getAllAngularRootElements=()=>e.getAllRootElements();const t=r=>{const s=n.\u0275global.getAllAngularTestabilities();let i=s.length,l=!1;const u=function(S){l=l||S,i--,i==0&&r(l)};s.forEach(function(S){S.whenStable(u)})};n.\u0275global.frameworkStabilizers||(n.\u0275global.frameworkStabilizers=[]),n.\u0275global.frameworkStabilizers.push(t)}findTestabilityInTree(e,t,r){if(t==null)return null;const s=e.getTestability(t);return s??(r?(0,a.\u0275getDOM)().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null)}}class C{build(){return new XMLHttpRequest}}C.\u0275fac=function(e){return new(e||C)},C.\u0275prov=n.\u0275\u0275defineInjectable({token:C,factory:C.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(C,[{type:n.Injectable}],null,null)}();const M=new n.InjectionToken("EventManagerPlugins");class f{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,r){return this._findPluginFor(t).addEventListener(e,t,r)}addGlobalEventListener(e,t,r){return this._findPluginFor(t).addGlobalEventListener(e,t,r)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const r=this._plugins;for(let s=0;s<r.length;s++){const i=r[s];if(i.supports(e))return this._eventNameToPlugin.set(e,i),i}throw new Error(`No event manager plugin found for event ${e}`)}}f.\u0275fac=function(e){return new(e||f)(n.\u0275\u0275inject(M),n.\u0275\u0275inject(n.NgZone))},f.\u0275prov=n.\u0275\u0275defineInjectable({token:f,factory:f.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(f,[{type:n.Injectable}],function(){return[{type:void 0,decorators:[{type:n.Inject,args:[M]}]},{type:n.NgZone}]},null)}();class F{constructor(e){this._doc=e}addGlobalEventListener(e,t,r){const s=(0,a.\u0275getDOM)().getGlobalEventTarget(this._doc,e);if(!s)throw new Error(`Unsupported event target ${s} for event ${t}`);return this.addEventListener(s,t,r)}}class y{constructor(){this.usageCount=new Map}addStyles(e){for(const t of e)this.changeUsageCount(t,1)===1&&this.onStyleAdded(t)}removeStyles(e){for(const t of e)this.changeUsageCount(t,-1)===0&&this.onStyleRemoved(t)}onStyleRemoved(e){}onStyleAdded(e){}getAllStyles(){return this.usageCount.keys()}changeUsageCount(e,t){const r=this.usageCount;let s=r.get(e)??0;return s+=t,s>0?r.set(e,s):r.delete(e),s}ngOnDestroy(){for(const e of this.getAllStyles())this.onStyleRemoved(e);this.usageCount.clear()}}y.\u0275fac=function(e){return new(e||y)},y.\u0275prov=n.\u0275\u0275defineInjectable({token:y,factory:y.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(y,[{type:n.Injectable}],null,null)}();class d extends y{constructor(e){super(),this.doc=e,this.styleRef=new Map,this.hostNodes=new Set,this.resetHostNodes()}onStyleAdded(e){for(const t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){const t=this.styleRef;t.get(e)?.forEach(s=>s.remove()),t.delete(e)}ngOnDestroy(){super.ngOnDestroy(),this.styleRef.clear(),this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(const t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}addStyleToHost(e,t){const r=this.doc.createElement("style");r.textContent=t,e.appendChild(r);const s=this.styleRef.get(t);s?s.push(r):this.styleRef.set(t,[r])}resetHostNodes(){const e=this.hostNodes;e.clear(),e.add(this.doc.head)}}d.\u0275fac=function(e){return new(e||d)(n.\u0275\u0275inject(a.DOCUMENT))},d.\u0275prov=n.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(d,[{type:n.Injectable}],function(){return[{type:void 0,decorators:[{type:n.Inject,args:[a.DOCUMENT]}]}]},null)}();const H={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},x=/%COMP%/g,J=typeof ngDevMode>"u"||!!ngDevMode,Q="%COMP%",Me=`_nghost-${Q}`,Te=`_ngcontent-${Q}`,we=!1,k=new n.InjectionToken("RemoveStylesOnCompDestory",{providedIn:"root",factory:()=>we});function ee(o){return Te.replace(x,o)}function te(o){return Me.replace(x,o)}function B(o,e){return e.flat(100).map(t=>t.replace(x,o))}function ne(o){return e=>{if(e==="__ngUnwrap__")return o;o(e)===!1&&(e.preventDefault(),e.returnValue=!1)}}class p{constructor(e,t,r,s){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestory=s,this.rendererByCompId=new Map,this.defaultRenderer=new z(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;const r=this.getOrCreateRenderer(e,t);return r instanceof se?r.applyToHost(e):r instanceof V&&r.applyStyles(),r}getOrCreateRenderer(e,t){const r=this.rendererByCompId;let s=r.get(t.id);if(!s){const i=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestory;switch(t.encapsulation){case n.ViewEncapsulation.Emulated:s=new se(i,l,t,this.appId,u);break;case n.ViewEncapsulation.ShadowDom:return new Ce(i,l,e,t);default:s=new V(i,l,t,u);break}s.onDestroy=()=>r.delete(t.id),r.set(t.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}begin(){}end(){}}p.\u0275fac=function(e){return new(e||p)(n.\u0275\u0275inject(f),n.\u0275\u0275inject(d),n.\u0275\u0275inject(n.APP_ID),n.\u0275\u0275inject(k))},p.\u0275prov=n.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(p,[{type:n.Injectable}],function(){return[{type:f},{type:d},{type:void 0,decorators:[{type:n.Inject,args:[n.APP_ID]}]},{type:void 0,decorators:[{type:n.Inject,args:[k]}]}]},null)}();class z{constructor(e){this.eventManager=e,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,t){return t?document.createElementNS(H[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){(oe(e)?e.content:e).appendChild(t)}insertBefore(e,t,r){e&&(oe(e)?e.content:e).insertBefore(t,r)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let r=typeof e=="string"?document.querySelector(e):e;if(!r)throw new Error(`The selector "${e}" did not match any elements`);return t||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,r,s){if(s){t=s+":"+t;const i=H[s];i?e.setAttributeNS(i,t,r):e.setAttribute(t,r)}else e.setAttribute(t,r)}removeAttribute(e,t,r){if(r){const s=H[r];s?e.removeAttributeNS(s,t):e.removeAttribute(`${r}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,r,s){s&(n.RendererStyleFlags2.DashCase|n.RendererStyleFlags2.Important)?e.style.setProperty(t,r,s&n.RendererStyleFlags2.Important?"important":""):e.style[t]=r}removeStyle(e,t,r){r&n.RendererStyleFlags2.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,r){J&&re(t,"property"),e[t]=r}setValue(e,t){e.nodeValue=t}listen(e,t,r){return J&&re(t,"listener"),typeof e=="string"?this.eventManager.addGlobalEventListener(e,t,ne(r)):this.eventManager.addEventListener(e,t,ne(r))}}const ve=(()=>"@".charCodeAt(0))();function re(o,e){if(o.charCodeAt(0)===ve)throw new Error(`Unexpected synthetic ${e} ${o} found. Please make sure that:
  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.
  - There is corresponding configuration for the animation named \`${o}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`)}function oe(o){return o.tagName==="TEMPLATE"&&o.content!==void 0}class Ce extends z{constructor(e,t,r,s){super(e),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=B(s.id,s.styles);for(const l of i){const u=document.createElement("style");u.textContent=l,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,r){return super.insertBefore(this.nodeOrShadowRoot(e),t,r)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class V extends z{constructor(e,t,r,s,i=r.id){super(e),this.sharedStylesHost=t,this.removeStylesOnCompDestory=s,this.rendererUsageCount=0,this.styles=B(i,r.styles)}applyStyles(){this.sharedStylesHost.addStyles(this.styles),this.rendererUsageCount++}destroy(){!this.removeStylesOnCompDestory||(this.sharedStylesHost.removeStyles(this.styles),this.rendererUsageCount--,this.rendererUsageCount===0&&this.onDestroy?.())}}class se extends V{constructor(e,t,r,s,i){const l=s+"-"+r.id;super(e,t,r,i,l),this.contentAttr=ee(l),this.hostAttr=te(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){const r=super.createElement(e,t);return super.setAttribute(r,this.contentAttr,""),r}}class T extends F{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r){return e.addEventListener(t,r,!1),()=>this.removeEventListener(e,t,r)}removeEventListener(e,t,r){return e.removeEventListener(t,r)}}T.\u0275fac=function(e){return new(e||T)(n.\u0275\u0275inject(a.DOCUMENT))},T.\u0275prov=n.\u0275\u0275defineInjectable({token:T,factory:T.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(T,[{type:n.Injectable}],function(){return[{type:void 0,decorators:[{type:n.Inject,args:[a.DOCUMENT]}]}]},null)}();const ie=["alt","control","meta","shift"],De={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},_e={alt:o=>o.altKey,control:o=>o.ctrlKey,meta:o=>o.metaKey,shift:o=>o.shiftKey};class c extends F{constructor(e){super(e)}supports(e){return c.parseEventName(e)!=null}addEventListener(e,t,r){const s=c.parseEventName(t),i=c.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,a.\u0275getDOM)().onAndCancel(e,s.domEventName,i))}static parseEventName(e){const t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;const s=c._normalizeKey(t.pop());let i="",l=t.indexOf("code");if(l>-1&&(t.splice(l,1),i="code."),ie.forEach(S=>{const he=t.indexOf(S);he>-1&&(t.splice(he,1),i+=S+".")}),i+=s,t.length!=0||s.length===0)return null;const u={};return u.domEventName=r,u.fullKey=i,u}static matchEventFullKeyCode(e,t){let r=De[e.key]||e.key,s="";return t.indexOf("code.")>-1&&(r=e.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ie.forEach(i=>{if(i!==r){const l=_e[i];l(e)&&(s+=i+".")}}),s+=r,s===t)}static eventCallback(e,t,r){return s=>{c.matchEventFullKeyCode(s,e)&&r.runGuarded(()=>t(s))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}c.\u0275fac=function(e){return new(e||c)(n.\u0275\u0275inject(a.DOCUMENT))},c.\u0275prov=n.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(c,[{type:n.Injectable}],function(){return[{type:void 0,decorators:[{type:n.Inject,args:[a.DOCUMENT]}]}]},null)}();const G=typeof ngDevMode>"u"||!!ngDevMode;function Ie(o,e){return(0,n.\u0275internalCreateApplication)({rootComponent:o,...ae(e)})}function be(o){return(0,n.\u0275internalCreateApplication)(ae(o))}function ae(o){return{appProviders:[...Z,...o?.providers??[]],platformProviders:$}}function Re(){return[...Y]}function le(){j.makeCurrent()}function Oe(){return new n.ErrorHandler}function Ae(){return(0,n.\u0275setDocument)(document),document}const $=[{provide:n.PLATFORM_ID,useValue:a.\u0275PLATFORM_BROWSER_ID},{provide:n.PLATFORM_INITIALIZER,useValue:le,multi:!0},{provide:a.DOCUMENT,useFactory:Ae,deps:[]}],Ne=(0,n.createPlatformFactory)(n.platformCore,"browser",$),K=new n.InjectionToken(G?"BrowserModule Providers Marker":""),Y=[{provide:n.\u0275TESTABILITY_GETTER,useClass:q,deps:[]},{provide:n.\u0275TESTABILITY,useClass:n.Testability,deps:[n.NgZone,n.TestabilityRegistry,n.\u0275TESTABILITY_GETTER]},{provide:n.Testability,useClass:n.Testability,deps:[n.NgZone,n.TestabilityRegistry,n.\u0275TESTABILITY_GETTER]}],Z=[{provide:n.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:n.ErrorHandler,useFactory:Oe,deps:[]},{provide:M,useClass:T,multi:!0,deps:[a.DOCUMENT,n.NgZone,n.PLATFORM_ID]},{provide:M,useClass:c,multi:!0,deps:[a.DOCUMENT]},{provide:p,useClass:p,deps:[f,d,n.APP_ID,k]},{provide:n.RendererFactory2,useExisting:p},{provide:y,useExisting:d},{provide:d,useClass:d,deps:[a.DOCUMENT]},{provide:f,useClass:f,deps:[M,n.NgZone]},{provide:a.XhrFactory,useClass:C,deps:[]},G?{provide:K,useValue:!0}:[]];class g{constructor(e){if(G&&e)throw new Error("Providers from the `BrowserModule` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the `CommonModule` instead.")}static withServerTransition(e){return{ngModule:g,providers:[{provide:n.APP_ID,useValue:e.appId},{provide:U,useExisting:n.APP_ID},Se]}}}g.\u0275fac=function(e){return new(e||g)(n.\u0275\u0275inject(K,12))},g.\u0275mod=n.\u0275\u0275defineNgModule({type:g}),g.\u0275inj=n.\u0275\u0275defineInjector({providers:[...Z,...Y],imports:[a.CommonModule,n.ApplicationModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(g,[{type:n.NgModule,args:[{providers:[...Z,...Y],exports:[a.CommonModule,n.ApplicationModule]}]}],function(){return[{type:void 0,decorators:[{type:n.Optional},{type:n.SkipSelf},{type:n.Inject,args:[K]}]}]},null)}();function ue(){return new D((0,n.\u0275\u0275inject)(a.DOCUMENT))}class D{constructor(e){this._doc=e,this._dom=(0,a.\u0275getDOM)()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((r,s)=>(s&&r.push(this._getOrCreateElement(s,t)),r),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);const r=this.getTag(t);return r?this._setMetaElementAttributes(e,r):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){const i=this._parseSelector(e),l=this.getTags(i).filter(u=>this._containsAttributes(e,u))[0];if(l!==void 0)return l}const r=this._dom.createElement("meta");return this._setMetaElementAttributes(e,r),this._doc.getElementsByTagName("head")[0].appendChild(r),r}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(r=>t.setAttribute(this._getMetaKeyMap(r),e[r])),t}_parseSelector(e){const t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(r=>t.getAttribute(this._getMetaKeyMap(r))===e[r])}_getMetaKeyMap(e){return Pe[e]||e}}D.\u0275fac=function(e){return new(e||D)(n.\u0275\u0275inject(a.DOCUMENT))},D.\u0275prov=n.\u0275\u0275defineInjectable({token:D,factory:function(e){let t=null;return e?t=new e:t=ue(),t},providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(D,[{type:n.Injectable,args:[{providedIn:"root",useFactory:ue,deps:[]}]}],function(){return[{type:void 0,decorators:[{type:n.Inject,args:[a.DOCUMENT]}]}]},null)}();const Pe={httpEquiv:"http-equiv"};function ce(){return new _((0,n.\u0275\u0275inject)(a.DOCUMENT))}class _{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}_.\u0275fac=function(e){return new(e||_)(n.\u0275\u0275inject(a.DOCUMENT))},_.\u0275prov=n.\u0275\u0275defineInjectable({token:_,factory:function(e){let t=null;return e?t=new e:t=ce(),t},providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(_,[{type:n.Injectable,args:[{providedIn:"root",useFactory:ce,deps:[]}]}],function(){return[{type:void 0,decorators:[{type:n.Inject,args:[a.DOCUMENT]}]}]},null)}();function de(o,e){if(typeof COMPILED>"u"||!COMPILED){const t=n.\u0275global.ng=n.\u0275global.ng||{};t[o]=e}}const w=typeof window<"u"&&window||{};class je{constructor(e,t){this.msPerTick=e,this.numTicks=t}}class Le{constructor(e){this.appRef=e.injector.get(n.ApplicationRef)}timeChangeDetection(e){const t=e&&e.record,r="Change Detection",s=w.console.profile!=null;t&&s&&w.console.profile(r);const i=W();let l=0;for(;l<5||W()-i<500;)this.appRef.tick(),l++;const u=W();t&&s&&w.console.profileEnd(r);const S=(u-i)/l;return w.console.log(`ran ${l} change detection cycles`),w.console.log(`${S.toFixed(2)} ms per check`),new je(S,l)}}function W(){return w.performance&&w.performance.now?w.performance.now():new Date().getTime()}const fe="profiler";function He(o){return de(fe,new Le(o)),o}function ke(){de(fe,null)}function Ue(o){const e={"&":"&a;",'"':"&q;","'":"&s;","<":"&l;",">":"&g;"};return o.replace(/[&"'<>]/g,t=>e[t])}function Fe(o){const e={"&a;":"&","&q;":'"',"&s;":"'","&l;":"<","&g;":">"};return o.replace(/&[^;]+;/g,t=>e[t])}function xe(o){return o}class I{constructor(){this.store={},this.onSerializeCallbacks={},this.store=Be((0,n.inject)(a.DOCUMENT),(0,n.inject)(n.APP_ID))}get(e,t){return this.store[e]!==void 0?this.store[e]:t}set(e,t){this.store[e]=t}remove(e){delete this.store[e]}hasKey(e){return this.store.hasOwnProperty(e)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(e,t){this.onSerializeCallbacks[e]=t}toJson(){for(const e in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(e))try{this.store[e]=this.onSerializeCallbacks[e]()}catch(t){console.warn("Exception in onSerialize callback: ",t)}return JSON.stringify(this.store)}}I.\u0275fac=function(e){return new(e||I)},I.\u0275prov=n.\u0275\u0275defineInjectable({token:I,factory:I.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(I,[{type:n.Injectable,args:[{providedIn:"root"}]}],function(){return[]},null)}();function Be(o,e){const t=o.getElementById(e+"-state");let r={};if(t&&t.textContent)try{r=JSON.parse(Fe(t.textContent))}catch(s){console.warn("Exception while restoring TransferState for app "+e,s)}return r}class b{}b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=n.\u0275\u0275defineNgModule({type:b}),b.\u0275inj=n.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(b,[{type:n.NgModule,args:[{}]}],null,null)}();class ze{static all(){return()=>!0}static css(e){return t=>t.nativeElement!=null?Ve(t.nativeElement,e):!1}static directive(e){return t=>t.providerTokens.indexOf(e)!==-1}}function Ve(o,e){return(0,a.\u0275getDOM)().isElementNode(o)?o.matches&&o.matches(e)||o.msMatchesSelector&&o.msMatchesSelector(e)||o.webkitMatchesSelector&&o.webkitMatchesSelector(e):!1}const Ge={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},R=new n.InjectionToken("HammerGestureConfig"),N=new n.InjectionToken("HammerLoader");class h{constructor(){this.events=[],this.overrides={}}buildHammer(e){const t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(const r in this.overrides)t.get(r).set(this.overrides[r]);return t}}h.\u0275fac=function(e){return new(e||h)},h.\u0275prov=n.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(h,[{type:n.Injectable}],null,null)}();class m extends F{constructor(e,t,r,s){super(e),this._config=t,this.console=r,this.loader=s,this._loaderPromise=null}supports(e){return!Ge.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)?!1:!window.Hammer&&!this.loader?((typeof ngDevMode>"u"||ngDevMode)&&this.console.warn(`The "${e}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`),!1):!0}addEventListener(e,t,r){const s=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||s.runOutsideAngular(()=>this.loader());let i=!1,l=()=>{i=!0};return s.runOutsideAngular(()=>this._loaderPromise.then(()=>{if(!window.Hammer){(typeof ngDevMode>"u"||ngDevMode)&&this.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."),l=()=>{};return}i||(l=this.addEventListener(e,t,r))}).catch(()=>{(typeof ngDevMode>"u"||ngDevMode)&&this.console.warn(`The "${t}" event cannot be bound because the custom Hammer.JS loader failed.`),l=()=>{}})),()=>{l()}}return s.runOutsideAngular(()=>{const i=this._config.buildHammer(e),l=function(u){s.runGuarded(function(){r(u)})};return i.on(t,l),()=>{i.off(t,l),typeof i.destroy=="function"&&i.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}m.\u0275fac=function(e){return new(e||m)(n.\u0275\u0275inject(a.DOCUMENT),n.\u0275\u0275inject(R),n.\u0275\u0275inject(n.\u0275Console),n.\u0275\u0275inject(N,8))},m.\u0275prov=n.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(m,[{type:n.Injectable}],function(){return[{type:void 0,decorators:[{type:n.Inject,args:[a.DOCUMENT]}]},{type:h,decorators:[{type:n.Inject,args:[R]}]},{type:n.\u0275Console},{type:void 0,decorators:[{type:n.Optional},{type:n.Inject,args:[N]}]}]},null)}();class O{}O.\u0275fac=function(e){return new(e||O)},O.\u0275mod=n.\u0275\u0275defineNgModule({type:O}),O.\u0275inj=n.\u0275\u0275defineInjector({providers:[{provide:M,useClass:m,multi:!0,deps:[a.DOCUMENT,R,n.\u0275Console,[new n.Optional,N]]},{provide:R,useClass:h,deps:[]}]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(O,[{type:n.NgModule,args:[{providers:[{provide:M,useClass:m,multi:!0,deps:[a.DOCUMENT,R,n.\u0275Console,[new n.Optional,N]]},{provide:R,useClass:h,deps:[]}]}]}],null,null)}();class v{}v.\u0275fac=function(e){return new(e||v)},v.\u0275prov=n.\u0275\u0275defineInjectable({token:v,factory:function(e){let t=null;return e?t=new(e||v):t=n.\u0275\u0275inject(E),t},providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(v,[{type:n.Injectable,args:[{providedIn:"root",useExisting:(0,n.forwardRef)(()=>E)}]}],null,null)}();function pe(o){return new E(o.get(a.DOCUMENT))}class E extends v{constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case n.SecurityContext.NONE:return t;case n.SecurityContext.HTML:return(0,n.\u0275allowSanitizationBypassAndThrow)(t,"HTML")?(0,n.\u0275unwrapSafeValue)(t):(0,n.\u0275_sanitizeHtml)(this._doc,String(t)).toString();case n.SecurityContext.STYLE:return(0,n.\u0275allowSanitizationBypassAndThrow)(t,"Style")?(0,n.\u0275unwrapSafeValue)(t):t;case n.SecurityContext.SCRIPT:if((0,n.\u0275allowSanitizationBypassAndThrow)(t,"Script"))return(0,n.\u0275unwrapSafeValue)(t);throw new Error("unsafe value used in a script context");case n.SecurityContext.URL:return(0,n.\u0275allowSanitizationBypassAndThrow)(t,"URL")?(0,n.\u0275unwrapSafeValue)(t):(0,n.\u0275_sanitizeUrl)(String(t));case n.SecurityContext.RESOURCE_URL:if((0,n.\u0275allowSanitizationBypassAndThrow)(t,"ResourceURL"))return(0,n.\u0275unwrapSafeValue)(t);throw new Error(`unsafe value used in a resource URL context (see ${n.\u0275XSS_SECURITY_URL})`);default:throw new Error(`Unexpected SecurityContext ${e} (see ${n.\u0275XSS_SECURITY_URL})`)}}bypassSecurityTrustHtml(e){return(0,n.\u0275bypassSanitizationTrustHtml)(e)}bypassSecurityTrustStyle(e){return(0,n.\u0275bypassSanitizationTrustStyle)(e)}bypassSecurityTrustScript(e){return(0,n.\u0275bypassSanitizationTrustScript)(e)}bypassSecurityTrustUrl(e){return(0,n.\u0275bypassSanitizationTrustUrl)(e)}bypassSecurityTrustResourceUrl(e){return(0,n.\u0275bypassSanitizationTrustResourceUrl)(e)}}E.\u0275fac=function(e){return new(e||E)(n.\u0275\u0275inject(a.DOCUMENT))},E.\u0275prov=n.\u0275\u0275defineInjectable({token:E,factory:function(e){let t=null;return e?t=new e:t=pe(n.\u0275\u0275inject(n.Injector)),t},providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(E,[{type:n.Injectable,args:[{providedIn:"root",useFactory:pe,deps:[n.Injector]}]}],function(){return[{type:void 0,decorators:[{type:n.Inject,args:[a.DOCUMENT]}]}]},null)}();const $e=new n.Version("15.2.9")}}]);
