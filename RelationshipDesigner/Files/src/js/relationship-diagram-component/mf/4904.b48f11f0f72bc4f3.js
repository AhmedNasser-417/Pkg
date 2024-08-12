(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[4904,1444],{21444:(L,f,r)=>{r.r(f),r.d(f,{BreakpointObserver:()=>d,Breakpoints:()=>g,LayoutModule:()=>s,MediaMatcher:()=>i});var t=r(94450),M=r(3127),m=r(21322),o=r(27049),x=r(67202);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=t.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(s,[{type:t.NgModule,args:[{}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const b=new Set;let h;class i{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):y}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&v(e),this._matchMedia(e)}}i.\u0275fac=function(e){return new(e||i)(t.\u0275\u0275inject(x.Platform))},i.\u0275prov=t.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(i,[{type:t.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:x.Platform}]},null)}();function v(a){if(!b.has(a))try{h||(h=document.createElement("style"),h.setAttribute("type","text/css"),document.head.appendChild(h)),h.sheet&&(h.sheet.insertRule(`@media ${a} {body{ }}`,0),b.add(a))}catch(e){console.error(e)}}function y(a){return{matches:a==="all"||a==="",media:a,addListener:()=>{},removeListener:()=>{}}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class d{constructor(e,n){this._mediaMatcher=e,this._zone=n,this._queries=new Map,this._destroySubject=new m.Subject}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return w((0,M.coerceArray)(e)).some(u=>this._registerQuery(u).mql.matches)}observe(e){const u=w((0,M.coerceArray)(e)).map(p=>this._registerQuery(p).observable);let c=(0,m.combineLatest)(u);return c=(0,m.concat)(c.pipe((0,o.take)(1)),c.pipe((0,o.skip)(1),(0,o.debounceTime)(0))),c.pipe((0,o.map)(p=>{const l={matches:!1,breakpoints:{}};return p.forEach(({matches:_,query:E})=>{l.matches=l.matches||_,l.breakpoints[E]=_}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const n=this._mediaMatcher.matchMedia(e),c={observable:new m.Observable(p=>{const l=_=>this._zone.run(()=>p.next(_));return n.addListener(l),()=>{n.removeListener(l)}}).pipe((0,o.startWith)(n),(0,o.map)(({matches:p})=>({query:e,matches:p})),(0,o.takeUntil)(this._destroySubject)),mql:n};return this._queries.set(e,c),c}}d.\u0275fac=function(e){return new(e||d)(t.\u0275\u0275inject(i),t.\u0275\u0275inject(t.NgZone))},d.\u0275prov=t.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(d,[{type:t.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:i},{type:t.NgZone}]},null)}();function w(a){return a.map(e=>e.split(",")).reduce((e,n)=>e.concat(n)).map(e=>e.trim())}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const g={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};/**
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
