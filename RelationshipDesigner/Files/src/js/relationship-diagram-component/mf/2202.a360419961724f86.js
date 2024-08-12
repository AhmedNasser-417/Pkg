(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[2202,5193],{85193:(S,M,r)=>{r.r(M),r.d(M,{LegacySimpleSnackBar:()=>l,MAT_LEGACY_SNACK_BAR_DATA:()=>e.MAT_SNACK_BAR_DATA,MAT_LEGACY_SNACK_BAR_DEFAULT_OPTIONS:()=>e.MAT_SNACK_BAR_DEFAULT_OPTIONS,MAT_LEGACY_SNACK_BAR_DEFAULT_OPTIONS_FACTORY:()=>e.MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY,MatLegacySnackBar:()=>s,MatLegacySnackBarConfig:()=>e.MatSnackBarConfig,MatLegacySnackBarContainer:()=>o,MatLegacySnackBarModule:()=>c,MatLegacySnackBarRef:()=>e.MatSnackBarRef,_MatLegacySnackBarBase:()=>e._MatSnackBarBase,_MatLegacySnackBarContainerBase:()=>e._MatSnackBarContainerBase,matLegacySnackBarAnimations:()=>e.matSnackBarAnimations});var m=r(31892),_=r(83676),g=r(31134),a=r(94450),p=r(66385),u=r(14535),e=r(1828),h=r(71689),f=r(43267);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function y(i,t){if(i&1){const n=a.\u0275\u0275getCurrentView();a.\u0275\u0275elementStart(0,"div",2)(1,"button",3),a.\u0275\u0275listener("click",function(){a.\u0275\u0275restoreView(n);const d=a.\u0275\u0275nextContext();return a.\u0275\u0275resetView(d.action())}),a.\u0275\u0275text(2),a.\u0275\u0275elementEnd()()}if(i&2){const n=a.\u0275\u0275nextContext();a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate(n.data.action)}}function B(i,t){}class l{constructor(t,n){this.snackBarRef=t,this.data=n}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}l.\u0275fac=function(t){return new(t||l)(a.\u0275\u0275directiveInject(e.MatSnackBarRef),a.\u0275\u0275directiveInject(e.MAT_SNACK_BAR_DATA))},l.\u0275cmp=a.\u0275\u0275defineComponent({type:l,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-simple-snackbar"],decls:3,vars:2,consts:[[1,"mat-simple-snack-bar-content"],["class","mat-simple-snackbar-action",4,"ngIf"],[1,"mat-simple-snackbar-action"],["mat-button","",3,"click"]],template:function(t,n){t&1&&(a.\u0275\u0275elementStart(0,"span",0),a.\u0275\u0275text(1),a.\u0275\u0275elementEnd(),a.\u0275\u0275template(2,y,3,1,"div",1)),t&2&&(a.\u0275\u0275advance(1),a.\u0275\u0275textInterpolate(n.data.message),a.\u0275\u0275advance(1),a.\u0275\u0275property("ngIf",n.hasAction))},dependencies:[g.NgIf,u.MatLegacyButton],styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}.mat-simple-snack-bar-content{overflow:hidden;text-overflow:ellipsis}"],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&a.\u0275setClassMetadata(l,[{type:a.Component,args:[{selector:"simple-snack-bar",encapsulation:a.ViewEncapsulation.None,changeDetection:a.ChangeDetectionStrategy.OnPush,host:{class:"mat-simple-snackbar"},template:`<span class="mat-simple-snack-bar-content">{{data.message}}</span>
<div class="mat-simple-snackbar-action"  *ngIf="hasAction">
  <button mat-button (click)="action()">{{data.action}}</button>
</div>
`,styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}.mat-simple-snack-bar-content{overflow:hidden;text-overflow:ellipsis}"]}]}],function(){return[{type:e.MatSnackBarRef},{type:void 0,decorators:[{type:a.Inject,args:[e.MAT_SNACK_BAR_DATA]}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o extends e._MatSnackBarContainerBase{_afterPortalAttached(){super._afterPortalAttached(),this.snackBarConfig.horizontalPosition==="center"&&this._elementRef.nativeElement.classList.add("mat-snack-bar-center"),this.snackBarConfig.verticalPosition==="top"&&this._elementRef.nativeElement.classList.add("mat-snack-bar-top")}}o.\u0275fac=function(){let i;return function(n){return(i||(i=a.\u0275\u0275getInheritedFactory(o)))(n||o)}}(),o.\u0275cmp=a.\u0275\u0275defineComponent({type:o,selectors:[["snack-bar-container"]],hostAttrs:[1,"mat-snack-bar-container"],hostVars:1,hostBindings:function(t,n){t&1&&a.\u0275\u0275syntheticHostListener("@state.done",function(d){return n.onAnimationEnd(d)}),t&2&&a.\u0275\u0275syntheticHostProperty("@state",n._animationState)},features:[a.\u0275\u0275InheritDefinitionFeature],decls:3,vars:3,consts:[["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(a.\u0275\u0275elementStart(0,"div",0),a.\u0275\u0275template(1,B,0,0,"ng-template",1),a.\u0275\u0275elementEnd(),a.\u0275\u0275element(2,"div")),t&2&&(a.\u0275\u0275advance(2),a.\u0275\u0275attribute("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[_.CdkPortalOutlet],styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"],encapsulation:2,data:{animation:[e.matSnackBarAnimations.snackBarState]}}),function(){(typeof ngDevMode>"u"||ngDevMode)&&a.\u0275setClassMetadata(o,[{type:a.Component,args:[{selector:"snack-bar-container",changeDetection:a.ChangeDetectionStrategy.Default,encapsulation:a.ViewEncapsulation.None,animations:[e.matSnackBarAnimations.snackBarState],host:{class:"mat-snack-bar-container","[@state]":"_animationState","(@state.done)":"onAnimationEnd($event)"},template:`<!-- Initially holds the snack bar content, will be empty after announcing to screen readers. -->
<div aria-hidden="true">
  <ng-template cdkPortalOutlet></ng-template>
</div>

<!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->
<div [attr.aria-live]="_live" [attr.role]="_role" [attr.id]="_liveElementId"></div>
`,styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=a.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=a.\u0275\u0275defineInjector({imports:[m.OverlayModule,_.PortalModule,g.CommonModule,u.MatLegacyButtonModule,p.MatCommonModule,p.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&a.\u0275setClassMetadata(c,[{type:a.NgModule,args:[{imports:[m.OverlayModule,_.PortalModule,g.CommonModule,u.MatLegacyButtonModule,p.MatCommonModule],exports:[o,p.MatCommonModule],declarations:[o,l]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class s extends e._MatSnackBarBase{constructor(t,n,k,d,A,v){super(t,n,k,d,A,v),this.simpleSnackBarComponent=l,this.snackBarContainerComponent=o,this.handsetCssClass="mat-snack-bar-handset"}}s.\u0275fac=function(t){return new(t||s)(a.\u0275\u0275inject(m.Overlay),a.\u0275\u0275inject(h.LiveAnnouncer),a.\u0275\u0275inject(a.Injector),a.\u0275\u0275inject(f.BreakpointObserver),a.\u0275\u0275inject(s,12),a.\u0275\u0275inject(e.MAT_SNACK_BAR_DEFAULT_OPTIONS))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:c}),function(){(typeof ngDevMode>"u"||ngDevMode)&&a.\u0275setClassMetadata(s,[{type:a.Injectable,args:[{providedIn:c}]}],function(){return[{type:m.Overlay},{type:h.LiveAnnouncer},{type:a.Injector},{type:f.BreakpointObserver},{type:s,decorators:[{type:a.Optional},{type:a.SkipSelf}]},{type:e.MatSnackBarConfig,decorators:[{type:a.Inject,args:[e.MAT_SNACK_BAR_DEFAULT_OPTIONS]}]}]},null)}();/**
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
