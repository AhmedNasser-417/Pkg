(self.webpackChunkapp_studio_enterprise_analytics_dashboard=self.webpackChunkapp_studio_enterprise_analytics_dashboard||[]).push([[6321,9975],{36321:(R,f,d)=>{d.r(f),d.d(f,{Platform:()=>n,PlatformModule:()=>r,_getEventTarget:()=>P,_getFocusedElementPierceShadowDom:()=>T,_getShadowRoot:()=>S,_isTestEnvironment:()=>D,_supportsShadowDom:()=>m,getRtlScrollAxisType:()=>I,getSupportedInputTypes:()=>w,normalizePassiveListenerOptions:()=>E,supportsPassiveEventListeners:()=>h,supportsScrollBehavior:()=>_});var o=d(94450),v=d(31134);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let u;try{u=typeof Intl<"u"&&Intl.v8BreakIterator}catch{u=!1}class n{constructor(t){this._platformId=t,this.isBrowser=this._platformId?(0,v.isPlatformBrowser)(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||u)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}n.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(o.PLATFORM_ID))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&o.\u0275setClassMetadata(n,[{type:o.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:Object,decorators:[{type:o.Inject,args:[o.PLATFORM_ID]}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class r{}r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=o.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&o.\u0275setClassMetadata(r,[{type:o.NgModule,args:[{}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let i;const p=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function w(){if(i)return i;if(typeof document!="object"||!document)return i=new Set(p),i;let e=document.createElement("input");return i=new Set(p.filter(t=>(e.setAttribute("type",t),e.type===t))),i}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let a;function h(){if(a==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>a=!0}))}finally{a=a||!1}return a}function E(e){return h()?e:!!e.capture}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let l,s;function _(){if(s==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return s=!1,s;if("scrollBehavior"in document.documentElement.style)s=!0;else{const e=Element.prototype.scrollTo;e?s=!/\{\s*\[native code\]\s*\}/.test(e.toString()):s=!1}}return s}function I(){if(typeof document!="object"||!document)return 0;if(l==null){const e=document.createElement("div"),t=e.style;e.dir="rtl",t.width="1px",t.overflow="auto",t.visibility="hidden",t.pointerEvents="none",t.position="absolute";const y=document.createElement("div"),g=y.style;g.width="2px",g.height="1px",e.appendChild(y),document.body.appendChild(e),l=0,e.scrollLeft===0&&(e.scrollLeft=1,l=e.scrollLeft===0?1:2),e.remove()}return l}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let c;function m(){if(c==null){const e=typeof document<"u"?document.head:null;c=!!(e&&(e.createShadowRoot||e.attachShadow))}return c}function S(e){if(m()){const t=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function T(){let e=typeof document<"u"&&document?document.activeElement:null;for(;e&&e.shadowRoot;){const t=e.shadowRoot.activeElement;if(t===e)break;e=t}return e}function P(e){return e.composedPath?e.composedPath()[0]:e.target}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function D(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}]);
