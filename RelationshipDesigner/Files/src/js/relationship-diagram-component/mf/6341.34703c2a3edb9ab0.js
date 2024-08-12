(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[6341,8698],{58698:(g,p,s)=>{s.r(p),s.d(p,{CdkAccordion:()=>i,CdkAccordionItem:()=>o,CdkAccordionModule:()=>n});var e=s(94450),u=s(60317),r=s(3127),a=s(21322);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let _=0;const d=new e.InjectionToken("CdkAccordion");class i{constructor(){this._stateChanges=new a.Subject,this._openCloseAllActions=new a.Subject,this.id=`cdk-accordion-${_++}`,this._multi=!1}get multi(){return this._multi}set multi(t){this._multi=(0,r.coerceBooleanProperty)(t)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=e.\u0275\u0275defineDirective({type:i,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[e.\u0275\u0275ProvidersFeature([{provide:d,useExisting:i}]),e.\u0275\u0275NgOnChangesFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(i,[{type:e.Directive,args:[{selector:"cdk-accordion, [cdkAccordion]",exportAs:"cdkAccordion",providers:[{provide:d,useExisting:i}]}]}],null,{multi:[{type:e.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let f=0;class o{get expanded(){return this._expanded}set expanded(t){if(t=(0,r.coerceBooleanProperty)(t),this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();const l=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,l)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,r.coerceBooleanProperty)(t)}constructor(t,l,h){this.accordion=t,this._changeDetectorRef=l,this._expansionDispatcher=h,this._openCloseAllSubscription=a.Subscription.EMPTY,this.closed=new e.EventEmitter,this.opened=new e.EventEmitter,this.destroyed=new e.EventEmitter,this.expandedChange=new e.EventEmitter,this.id=`cdk-accordion-child-${f++}`,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=h.listen((A,C)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===C&&this.id!==A&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}}o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(d,12),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(u.UniqueSelectionDispatcher))},o.\u0275dir=e.\u0275\u0275defineDirective({type:o,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[e.\u0275\u0275ProvidersFeature([{provide:d,useValue:void 0}])]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(o,[{type:e.Directive,args:[{selector:"cdk-accordion-item, [cdkAccordionItem]",exportAs:"cdkAccordionItem",providers:[{provide:d,useValue:void 0}]}]}],function(){return[{type:i,decorators:[{type:e.Optional},{type:e.Inject,args:[d]},{type:e.SkipSelf}]},{type:e.ChangeDetectorRef},{type:u.UniqueSelectionDispatcher}]},{closed:[{type:e.Output}],opened:[{type:e.Output}],destroyed:[{type:e.Output}],expandedChange:[{type:e.Output}],expanded:[{type:e.Input}],disabled:[{type:e.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class n{}n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(n,[{type:e.NgModule,args:[{exports:[i,o],declarations:[i,o]}]}],null,null)}();/**
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
