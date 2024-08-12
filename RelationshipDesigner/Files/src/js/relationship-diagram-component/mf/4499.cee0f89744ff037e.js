(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[4499,8239,5036,6118,7344,8160,1034,8056,1906,4055],{74499:(p,_,i)=>{i.r(_),i.d(_,{FakeMatIconRegistry:()=>n,MatIconHarness:()=>o,MatIconTestingModule:()=>a});var u=i(8239),d=i(21936),r=i(94450),l=i(72856),g=i(21322);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o extends d.ComponentHarness{static with(e={}){return new d.HarnessPredicate(o,e).addOption("type",e.type,function(){var t=(0,u.Z)(function*(s,h){return(yield s.getType())===h});return function(s,h){return t.apply(this,arguments)}}()).addOption("name",e.name,(t,s)=>d.HarnessPredicate.stringMatches(t.getName(),s)).addOption("namespace",e.namespace,(t,s)=>d.HarnessPredicate.stringMatches(t.getNamespace(),s))}getType(){var e=this;return(0,u.Z)(function*(){return(yield(yield e.host()).getAttribute("data-mat-icon-type"))==="svg"?0:1})()}getName(){var e=this;return(0,u.Z)(function*(){const t=yield e.host(),s=yield t.getAttribute("data-mat-icon-name");return s||((yield e.getType())===1?t.text():null)})()}getNamespace(){var e=this;return(0,u.Z)(function*(){return(yield e.host()).getAttribute("data-mat-icon-namespace")})()}isInline(){var e=this;return(0,u.Z)(function*(){return(yield e.host()).hasClass("mat-icon-inline")})()}}o.hostSelector=".mat-icon";/**
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
 */class n{addSvgIcon(){return this}addSvgIconLiteral(){return this}addSvgIconInNamespace(){return this}addSvgIconLiteralInNamespace(){return this}addSvgIconSet(){return this}addSvgIconSetLiteral(){return this}addSvgIconSetInNamespace(){return this}addSvgIconSetLiteralInNamespace(){return this}registerFontClassAlias(){return this}classNameForFontAlias(e){return e}getDefaultFontSetClass(){return["material-icons"]}getSvgIconFromUrl(){return(0,g.of)(this._generateEmptySvg())}getNamedSvgIcon(){return(0,g.of)(this._generateEmptySvg())}setDefaultFontSetClass(){return this}addSvgIconResolver(){return this}ngOnDestroy(){}_generateEmptySvg(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.classList.add("fake-testing-svg"),e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),e}}n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&r.\u0275setClassMetadata(n,[{type:r.Injectable}],null,null)}();class a{}a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=r.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=r.\u0275\u0275defineInjector({providers:[{provide:l.MatIconRegistry,useClass:n}]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&r.\u0275setClassMetadata(a,[{type:r.NgModule,args:[{providers:[{provide:l.MatIconRegistry,useClass:n}]}]}],null,null)}();/**
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
 */},8239:(p,_,i)=>{i.d(_,{Z:()=>d});function u(r,l,g,o,n,a,c){try{var e=r[a](c),t=e.value}catch(s){g(s);return}e.done?l(t):Promise.resolve(t).then(o,n)}function d(r){return function(){var l=this,g=arguments;return new Promise(function(o,n){var a=r.apply(l,g);function c(t){u(a,o,n,c,e,"next",t)}function e(t){u(a,o,n,c,e,"throw",t)}c(void 0)})}}}}]);
