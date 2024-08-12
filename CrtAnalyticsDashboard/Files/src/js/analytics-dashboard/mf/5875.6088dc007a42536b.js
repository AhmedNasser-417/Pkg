(self.webpackChunkapp_studio_enterprise_analytics_dashboard=self.webpackChunkapp_studio_enterprise_analytics_dashboard||[]).push([[5875,1232],{65875:(p,l,s)=>{s.r(l),s.d(l,{BidiModule:()=>o,DIR_DOCUMENT:()=>d,Dir:()=>i,Directionality:()=>n});var t=s(94450),c=s(31134);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const d=new t.InjectionToken("cdk-dir-doc",{providedIn:"root",factory:g});function g(){return(0,t.inject)(c.DOCUMENT)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const f=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function u(r){const e=r?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?f.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}class n{constructor(e){if(this.value="ltr",this.change=new t.EventEmitter,e){const a=e.body?e.body.dir:null,h=e.documentElement?e.documentElement.dir:null;this.value=u(a||h||"ltr")}}ngOnDestroy(){this.change.complete()}}n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275inject(d,8))},n.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(n,[{type:t.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[d]}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class i{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new t.EventEmitter}get dir(){return this._dir}set dir(e){const a=this._dir;this._dir=u(e),this._rawDir=e,a!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}}i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=t.\u0275\u0275defineDirective({type:i,selectors:[["","dir",""]],hostVars:1,hostBindings:function(e,a){e&2&&t.\u0275\u0275attribute("dir",a._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[t.\u0275\u0275ProvidersFeature([{provide:n,useExisting:i}])]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(i,[{type:t.Directive,args:[{selector:"[dir]",providers:[{provide:n,useExisting:i}],host:{"[attr.dir]":"_rawDir"},exportAs:"dir"}]}],null,{change:[{type:t.Output,args:["dirChange"]}],dir:[{type:t.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o{}o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=t.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(o,[{type:t.NgModule,args:[{exports:[i],declarations:[i]}]}],null,null)}();/**
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
