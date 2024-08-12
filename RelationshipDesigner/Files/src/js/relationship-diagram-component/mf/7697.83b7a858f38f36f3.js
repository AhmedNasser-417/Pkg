(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[7697],{37697:(F,I,l)=>{l.r(I),l.d(I,{MAT_LEGACY_DIALOG_DATA:()=>P,MAT_LEGACY_DIALOG_DEFAULT_OPTIONS:()=>L,MAT_LEGACY_DIALOG_SCROLL_STRATEGY:()=>C,MAT_LEGACY_DIALOG_SCROLL_STRATEGY_FACTORY:()=>o.MAT_DIALOG_SCROLL_STRATEGY_FACTORY,MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER:()=>b,MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY:()=>B,MatLegacyDialog:()=>n,MatLegacyDialogActions:()=>u,MatLegacyDialogClose:()=>d,MatLegacyDialogConfig:()=>f,MatLegacyDialogContainer:()=>g,MatLegacyDialogContent:()=>_,MatLegacyDialogModule:()=>p,MatLegacyDialogRef:()=>y,MatLegacyDialogTitle:()=>m,_MatLegacyDialogBase:()=>o._MatDialogBase,_MatLegacyDialogContainerBase:()=>o._MatDialogContainerBase,_closeLegacyDialogVia:()=>o._closeDialogVia,matLegacyDialogAnimations:()=>o.matDialogAnimations});var T=l(94499),r=l(31892),A=l(83676),t=l(94450),M=l(66385),h=l(31134),D=l(71689),o=l(84858),x=l(71006);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function k(i,a){}const j={params:{enterAnimationDuration:"150ms",exitAnimationDuration:"75ms"}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class f extends o.MatDialogConfig{constructor(){super(...arguments),this.enterAnimationDuration=o._defaultParams.params.enterAnimationDuration,this.exitAnimationDuration=o._defaultParams.params.exitAnimationDuration}}class g extends o._MatDialogContainerBase{_onAnimationDone({toState:a,totalTime:e}){a==="enter"?this._openAnimationDone(e):a==="exit"&&this._animationStateChanged.next({state:"closed",totalTime:e})}_onAnimationStart({toState:a,totalTime:e}){a==="enter"?this._animationStateChanged.next({state:"opening",totalTime:e}):(a==="exit"||a==="void")&&this._animationStateChanged.next({state:"closing",totalTime:e})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}constructor(a,e,s,c,v,O,R,E,Y){super(a,e,s,c,v,O,R,Y),this._changeDetectorRef=E,this._state="enter"}_getAnimationState(){return{value:this._state,params:{enterAnimationDuration:this._config.enterAnimationDuration||j.params.enterAnimationDuration,exitAnimationDuration:this._config.exitAnimationDuration||j.params.exitAnimationDuration}}}}g.\u0275fac=function(a){return new(a||g)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(D.FocusTrapFactory),t.\u0275\u0275directiveInject(h.DOCUMENT,8),t.\u0275\u0275directiveInject(f),t.\u0275\u0275directiveInject(D.InteractivityChecker),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(r.OverlayRef),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(D.FocusMonitor))},g.\u0275cmp=t.\u0275\u0275defineComponent({type:g,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-dialog-container"],hostVars:7,hostBindings:function(a,e){a&1&&t.\u0275\u0275syntheticHostListener("@dialogContainer.start",function(c){return e._onAnimationStart(c)})("@dialogContainer.done",function(c){return e._onAnimationDone(c)}),a&2&&(t.\u0275\u0275hostProperty("id",e._config.id),t.\u0275\u0275attribute("aria-modal",e._config.ariaModal)("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),t.\u0275\u0275syntheticHostProperty("@dialogContainer",e._getAnimationState()))},features:[t.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(a,e){a&1&&t.\u0275\u0275template(0,k,0,0,"ng-template",0)},dependencies:[A.CdkPortalOutlet],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions.mat-dialog-actions-align-center,.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions.mat-dialog-actions-align-end,.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],encapsulation:2,data:{animation:[o.matDialogAnimations.dialogContainer]}}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(g,[{type:t.Component,args:[{selector:"mat-dialog-container",encapsulation:t.ViewEncapsulation.None,changeDetection:t.ChangeDetectionStrategy.Default,animations:[o.matDialogAnimations.dialogContainer],host:{class:"mat-dialog-container",tabindex:"-1","[attr.aria-modal]":"_config.ariaModal","[id]":"_config.id","[attr.role]":"_config.role","[attr.aria-labelledby]":"_config.ariaLabel ? null : _ariaLabelledBy","[attr.aria-label]":"_config.ariaLabel","[attr.aria-describedby]":"_config.ariaDescribedBy || null","[@dialogContainer]":"_getAnimationState()","(@dialogContainer.start)":"_onAnimationStart($event)","(@dialogContainer.done)":"_onAnimationDone($event)"},template:`<ng-template cdkPortalOutlet></ng-template>
`,styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions.mat-dialog-actions-align-center,.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions.mat-dialog-actions-align-end,.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"]}]}],function(){return[{type:t.ElementRef},{type:D.FocusTrapFactory},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[h.DOCUMENT]}]},{type:f},{type:D.InteractivityChecker},{type:t.NgZone},{type:r.OverlayRef},{type:t.ChangeDetectorRef},{type:D.FocusMonitor}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class y extends o.MatDialogRef{}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const P=new t.InjectionToken("MatDialogData"),L=new t.InjectionToken("mat-dialog-default-options"),C=new t.InjectionToken("mat-dialog-scroll-strategy");function B(i){return()=>i.scrollStrategies.block()}const b={provide:C,deps:[r.Overlay],useFactory:B};class n extends o._MatDialogBase{constructor(a,e,s,c,v,O,R,E){super(a,e,c,O,R,v,y,g,P,E),this.dialogConfigClass=f}}n.\u0275fac=function(a){return new(a||n)(t.\u0275\u0275inject(r.Overlay),t.\u0275\u0275inject(t.Injector),t.\u0275\u0275inject(h.Location,8),t.\u0275\u0275inject(L,8),t.\u0275\u0275inject(C),t.\u0275\u0275inject(n,12),t.\u0275\u0275inject(r.OverlayContainer),t.\u0275\u0275inject(x.ANIMATION_MODULE_TYPE,8))},n.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(n,[{type:t.Injectable}],function(){return[{type:r.Overlay},{type:t.Injector},{type:h.Location,decorators:[{type:t.Optional}]},{type:f,decorators:[{type:t.Optional},{type:t.Inject,args:[L]}]},{type:void 0,decorators:[{type:t.Inject,args:[C]}]},{type:n,decorators:[{type:t.Optional},{type:t.SkipSelf}]},{type:r.OverlayContainer},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[x.ANIMATION_MODULE_TYPE]}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let S=0;class d{constructor(a,e,s){this.dialogRef=a,this._elementRef=e,this._dialog=s,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=G(this._elementRef,this._dialog.openDialogs))}ngOnChanges(a){const e=a._matDialogClose||a._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(a){(0,o._closeDialogVia)(this.dialogRef,a.screenX===0&&a.screenY===0?"keyboard":"mouse",this.dialogResult)}}d.\u0275fac=function(a){return new(a||d)(t.\u0275\u0275directiveInject(y,8),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(n))},d.\u0275dir=t.\u0275\u0275defineDirective({type:d,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(a,e){a&1&&t.\u0275\u0275listener("click",function(c){return e._onButtonClick(c)}),a&2&&t.\u0275\u0275attribute("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[t.\u0275\u0275NgOnChangesFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(d,[{type:t.Directive,args:[{selector:"[mat-dialog-close], [matDialogClose]",exportAs:"matDialogClose",host:{"(click)":"_onButtonClick($event)","[attr.aria-label]":"ariaLabel || null","[attr.type]":"type"}}]}],function(){return[{type:y,decorators:[{type:t.Optional}]},{type:t.ElementRef},{type:n}]},{ariaLabel:[{type:t.Input,args:["aria-label"]}],type:[{type:t.Input}],dialogResult:[{type:t.Input,args:["mat-dialog-close"]}],_matDialogClose:[{type:t.Input,args:["matDialogClose"]}]})}();class m{constructor(a,e,s){this._dialogRef=a,this._elementRef=e,this._dialog=s,this.id=`mat-dialog-title-${S++}`}ngOnInit(){this._dialogRef||(this._dialogRef=G(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const a=this._dialogRef._containerInstance;a&&!a._ariaLabelledBy&&(a._ariaLabelledBy=this.id)})}}m.\u0275fac=function(a){return new(a||m)(t.\u0275\u0275directiveInject(y,8),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(n))},m.\u0275dir=t.\u0275\u0275defineDirective({type:m,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(a,e){a&2&&t.\u0275\u0275hostProperty("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(m,[{type:t.Directive,args:[{selector:"[mat-dialog-title], [matDialogTitle]",exportAs:"matDialogTitle",host:{class:"mat-dialog-title","[id]":"id"}}]}],function(){return[{type:y,decorators:[{type:t.Optional}]},{type:t.ElementRef},{type:n}]},{id:[{type:t.Input}]})}();class _{}_.\u0275fac=function(a){return new(a||_)},_.\u0275dir=t.\u0275\u0275defineDirective({type:_,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(_,[{type:t.Directive,args:[{selector:"[mat-dialog-content], mat-dialog-content, [matDialogContent]",host:{class:"mat-dialog-content"}}]}],null,null)}();class u{constructor(){this.align="start"}}u.\u0275fac=function(a){return new(a||u)},u.\u0275dir=t.\u0275\u0275defineDirective({type:u,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"],hostVars:4,hostBindings:function(a,e){a&2&&t.\u0275\u0275classProp("mat-dialog-actions-align-center",e.align==="center")("mat-dialog-actions-align-end",e.align==="end")},inputs:{align:"align"}}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(u,[{type:t.Directive,args:[{selector:"[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",host:{class:"mat-dialog-actions","[class.mat-dialog-actions-align-center]":'align === "center"',"[class.mat-dialog-actions-align-end]":'align === "end"'}}]}],null,{align:[{type:t.Input}]})}();function G(i,a){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-dialog-container");)e=e.parentElement;return e?a.find(s=>s.id===e.id):null}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class p{}p.\u0275fac=function(a){return new(a||p)},p.\u0275mod=t.\u0275\u0275defineNgModule({type:p}),p.\u0275inj=t.\u0275\u0275defineInjector({providers:[n,b],imports:[T.DialogModule,r.OverlayModule,A.PortalModule,M.MatCommonModule,M.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(p,[{type:t.NgModule,args:[{imports:[T.DialogModule,r.OverlayModule,A.PortalModule,M.MatCommonModule],exports:[g,d,m,_,u,M.MatCommonModule],declarations:[g,d,m,u,_],providers:[n,b]}]}],null,null)}();/**
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
