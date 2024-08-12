(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[1232,5875],{65875:(p,l,s)=>{s.r(l),s.d(l,{BidiModule:()=>o,DIR_DOCUMENT:()=>d,Dir:()=>i,Directionality:()=>n});var e=s(94450),c=s(31134);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const d=new e.InjectionToken("cdk-dir-doc",{providedIn:"root",factory:g});function g(){return(0,e.inject)(c.DOCUMENT)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const f=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function u(r){const t=r?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?f.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}class n{constructor(t){if(this.value="ltr",this.change=new e.EventEmitter,t){const a=t.body?t.body.dir:null,h=t.documentElement?t.documentElement.dir:null;this.value=u(a||h||"ltr")}}ngOnDestroy(){this.change.complete()}}n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275inject(d,8))},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(n,[{type:e.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:void 0,decorators:[{type:e.Optional},{type:e.Inject,args:[d]}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class i{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new e.EventEmitter}get dir(){return this._dir}set dir(t){const a=this._dir;this._dir=u(t),this._rawDir=t,a!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}}i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=e.\u0275\u0275defineDirective({type:i,selectors:[["","dir",""]],hostVars:1,hostBindings:function(t,a){t&2&&e.\u0275\u0275attribute("dir",a._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[e.\u0275\u0275ProvidersFeature([{provide:n,useExisting:i}])]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(i,[{type:e.Directive,args:[{selector:"[dir]",providers:[{provide:n,useExisting:i}],host:{"[attr.dir]":"_rawDir"},exportAs:"dir"}]}],null,{change:[{type:e.Output,args:["dirChange"]}],dir:[{type:e.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o{}o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(o,[{type:e.NgModule,args:[{exports:[i],declarations:[i]}]}],null,null)}();/**
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
