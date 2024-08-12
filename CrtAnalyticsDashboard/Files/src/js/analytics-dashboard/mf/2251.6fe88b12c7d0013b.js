(self.webpackChunkapp_studio_enterprise_analytics_dashboard=self.webpackChunkapp_studio_enterprise_analytics_dashboard||[]).push([[2251,2990],{72990:(T,_,u)=>{u.r(_),u.d(_,{MAT_LEGACY_MENU_CONTENT:()=>n.MAT_MENU_CONTENT,MAT_LEGACY_MENU_DEFAULT_OPTIONS:()=>n.MAT_MENU_DEFAULT_OPTIONS,MAT_LEGACY_MENU_PANEL:()=>n.MAT_MENU_PANEL,MAT_LEGACY_MENU_SCROLL_STRATEGY:()=>n.MAT_MENU_SCROLL_STRATEGY,MatLegacyMenu:()=>l,MatLegacyMenuContent:()=>r,MatLegacyMenuItem:()=>o,MatLegacyMenuModule:()=>c,MatLegacyMenuTrigger:()=>m,fadeInLegacyItems:()=>n.fadeInItems,matLegacyMenuAnimations:()=>n.matMenuAnimations,transformLegacyMenu:()=>n.transformMenu});var e=u(94450),n=u(75247),M=u(31134),d=u(66385),f=u(31892),h=u(17684);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function v(a,i){if(a&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275listener("keydown",function(s){e.\u0275\u0275restoreView(t);const p=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(p._handleKeydown(s))})("click",function(){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.closed.emit("click"))})("@transformMenu.start",function(s){e.\u0275\u0275restoreView(t);const p=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(p._onAnimationStart(s))})("@transformMenu.done",function(s){e.\u0275\u0275restoreView(t);const p=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(p._onAnimationDone(s))}),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275projection(2),e.\u0275\u0275elementEnd()()}if(a&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("id",t.panelId)("ngClass",t._classList)("@transformMenu",t._panelAnimationState),e.\u0275\u0275attribute("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}const b=["*"],y=["mat-menu-item",""];function x(a,i){a&1&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",2),e.\u0275\u0275element(1,"polygon",3),e.\u0275\u0275elementEnd())}class l extends n._MatMenuBase{constructor(i,t,g,s){super(i,t,g,s),this._elevationPrefix="mat-elevation-z",this._baseElevation=4}}l.\u0275fac=function(i){return new(i||l)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.NgZone),e.\u0275\u0275directiveInject(n.MAT_MENU_DEFAULT_OPTIONS),e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},l.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["mat-menu"]],hostVars:3,hostBindings:function(i,t){i&2&&e.\u0275\u0275attribute("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},exportAs:["matMenu"],features:[e.\u0275\u0275ProvidersFeature([{provide:n.MAT_MENU_PANEL,useExisting:l}]),e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:b,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-menu-panel",3,"id","ngClass","keydown","click"],[1,"mat-menu-content"]],template:function(i,t){i&1&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275template(0,v,3,6,"ng-template"))},dependencies:[M.NgClass],styles:['mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px;position:relative}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[n.matMenuAnimations.transformMenu,n.matMenuAnimations.fadeInItems]},changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(l,[{type:e.Component,args:[{selector:"mat-menu",changeDetection:e.ChangeDetectionStrategy.OnPush,encapsulation:e.ViewEncapsulation.None,exportAs:"matMenu",host:{"[attr.aria-label]":"null","[attr.aria-labelledby]":"null","[attr.aria-describedby]":"null"},animations:[n.matMenuAnimations.transformMenu,n.matMenuAnimations.fadeInItems],providers:[{provide:n.MAT_MENU_PANEL,useExisting:l}],template:`<ng-template>
  <div
    class="mat-menu-panel"
    [id]="panelId"
    [ngClass]="_classList"
    (keydown)="_handleKeydown($event)"
    (click)="closed.emit('click')"
    [@transformMenu]="_panelAnimationState"
    (@transformMenu.start)="_onAnimationStart($event)"
    (@transformMenu.done)="_onAnimationDone($event)"
    tabindex="-1"
    role="menu"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,styles:['mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px;position:relative}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}']}]}],function(){return[{type:e.ElementRef},{type:e.NgZone},{type:void 0,decorators:[{type:e.Inject,args:[n.MAT_MENU_DEFAULT_OPTIONS]}]},{type:e.ChangeDetectorRef}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o extends n.MatMenuItem{}o.\u0275fac=function(){let a;return function(t){return(a||(a=e.\u0275\u0275getInheritedFactory(o)))(t||o)}}(),o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-focus-indicator"],hostVars:20,hostBindings:function(i,t){i&2&&(e.\u0275\u0275attribute("role",t.role)("tabindex",t._getTabIndex())("aria-disabled",t.disabled.toString())("disabled",t.disabled||null),e.\u0275\u0275classProp("mat-menu-item",!0)("mat-menu-item-highlighted",t._highlighted)("mat-menu-item-submenu-trigger",t._triggersSubmenu)("mat-mdc-menu-item",!1)("mat-mdc-focus-indicator",!1)("mdc-list-item",!1)("mat-mdc-menu-item-highlighted",!1)("mat-mdc-menu-item-submenu-trigger",!1))},inputs:{disabled:"disabled",disableRipple:"disableRipple"},exportAs:["matMenuItem"],features:[e.\u0275\u0275ProvidersFeature([{provide:n.MatMenuItem,useExisting:o}]),e.\u0275\u0275InheritDefinitionFeature],attrs:y,ngContentSelectors:b,decls:3,vars:3,consts:[["matRipple","",1,"mat-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-menu-submenu-icon","viewBox","0 0 5 10","focusable","false",4,"ngIf"],["viewBox","0 0 5 10","focusable","false",1,"mat-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,t){i&1&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275projection(0),e.\u0275\u0275element(1,"div",0),e.\u0275\u0275template(2,x,2,0,"svg",1)),i&2&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("matRippleDisabled",t.disableRipple||t.disabled)("matRippleTrigger",t._getHostElement()),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t._triggersSubmenu))},dependencies:[M.NgIf,d.MatRipple],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(o,[{type:e.Component,args:[{selector:"[mat-menu-item]",exportAs:"matMenuItem",inputs:["disabled","disableRipple"],host:{"[attr.role]":"role","[class.mat-menu-item]":"true","[class.mat-menu-item-highlighted]":"_highlighted","[class.mat-menu-item-submenu-trigger]":"_triggersSubmenu","[attr.tabindex]":"_getTabIndex()","[attr.aria-disabled]":"disabled.toString()","[attr.disabled]":"disabled || null",class:"mat-focus-indicator","[class.mat-mdc-menu-item]":"false","[class.mat-mdc-focus-indicator]":"false","[class.mdc-list-item]":"false","[class.mat-mdc-menu-item-highlighted]":"false","[class.mat-mdc-menu-item-submenu-trigger]":"false"},changeDetection:e.ChangeDetectionStrategy.OnPush,encapsulation:e.ViewEncapsulation.None,providers:[{provide:n.MatMenuItem,useExisting:o}],template:`<ng-content></ng-content>
<div class="mat-menu-ripple" matRipple
     [matRippleDisabled]="disableRipple || disabled"
     [matRippleTrigger]="_getHostElement()">
</div>

<svg
  *ngIf="_triggersSubmenu"
  class="mat-menu-submenu-icon"
  viewBox="0 0 5 10"
  focusable="false"><polygon points="0,0 5,5 0,10"/></svg>
`}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class m extends n._MatMenuTriggerBase{}m.\u0275fac=function(){let a;return function(t){return(a||(a=e.\u0275\u0275getInheritedFactory(m)))(t||m)}}(),m.\u0275dir=e.\u0275\u0275defineDirective({type:m,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-menu-trigger"],exportAs:["matMenuTrigger"],features:[e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(m,[{type:e.Directive,args:[{selector:"[mat-menu-trigger-for], [matMenuTriggerFor]",host:{class:"mat-menu-trigger"},exportAs:"matMenuTrigger"}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class r extends n._MatMenuContentBase{}r.\u0275fac=function(){let a;return function(t){return(a||(a=e.\u0275\u0275getInheritedFactory(r)))(t||r)}}(),r.\u0275dir=e.\u0275\u0275defineDirective({type:r,selectors:[["ng-template","matMenuContent",""]],features:[e.\u0275\u0275ProvidersFeature([{provide:n.MAT_MENU_CONTENT,useExisting:r}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(r,[{type:e.Directive,args:[{selector:"ng-template[matMenuContent]",providers:[{provide:n.MAT_MENU_CONTENT,useExisting:r}]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class c{}c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=e.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=e.\u0275\u0275defineInjector({providers:[n.MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],imports:[M.CommonModule,d.MatCommonModule,d.MatRippleModule,f.OverlayModule,h.CdkScrollableModule,d.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(c,[{type:e.NgModule,args:[{imports:[M.CommonModule,d.MatCommonModule,d.MatRippleModule,f.OverlayModule],exports:[h.CdkScrollableModule,d.MatCommonModule,l,o,m,r],declarations:[l,o,m,r],providers:[n.MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]}]}],null,null)}();/**
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
