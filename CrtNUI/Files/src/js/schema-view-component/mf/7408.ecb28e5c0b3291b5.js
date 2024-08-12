(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[7408],{47408:(Y,R,i)=>{i.r(R),i.d(R,{EXPANSION_PANEL_ANIMATION_TIMING:()=>H,MAT_ACCORDION:()=>f,MAT_EXPANSION_PANEL:()=>P,MAT_EXPANSION_PANEL_DEFAULT_OPTIONS:()=>v,MatAccordion:()=>p,MatExpansionModule:()=>y,MatExpansionPanel:()=>d,MatExpansionPanelActionRow:()=>h,MatExpansionPanelContent:()=>l,MatExpansionPanelDescription:()=>x,MatExpansionPanelHeader:()=>c,MatExpansionPanelTitle:()=>u,matExpansionAnimations:()=>M});var A=i(2085),C=i(83676),b=i(31134),e=i(94450),w=i(66385),j=i(3127),O=i(71689),m=i(27049),N=i(33297),D=i(71006),E=i(21322),o=i(72310),k=i(60317);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const L=["body"];function F(a,t){}const B=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],U=["mat-expansion-panel-header","*","mat-action-row"];function K(a,t){if(a&1&&e.\u0275\u0275element(0,"span",2),a&2){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("@indicatorRotate",n._getExpandedState())}}const W=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],z=["mat-panel-title","mat-panel-description","*"],f=new e.InjectionToken("MAT_ACCORDION");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const H="225ms cubic-bezier(0.4,0.0,0.2,1)",M={indicatorRotate:(0,o.trigger)("indicatorRotate",[(0,o.state)("collapsed, void",(0,o.style)({transform:"rotate(0deg)"})),(0,o.state)("expanded",(0,o.style)({transform:"rotate(180deg)"})),(0,o.transition)("expanded <=> collapsed, void => collapsed",(0,o.animate)(H))]),bodyExpansion:(0,o.trigger)("bodyExpansion",[(0,o.state)("collapsed, void",(0,o.style)({height:"0px",visibility:"hidden"})),(0,o.state)("expanded",(0,o.style)({height:"*",visibility:"visible"})),(0,o.transition)("expanded <=> collapsed, void => collapsed",(0,o.animate)(H))])};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const P=new e.InjectionToken("MAT_EXPANSION_PANEL");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class l{constructor(t,n){this._template=t,this._expansionPanel=n}}l.\u0275fac=function(t){return new(t||l)(e.\u0275\u0275directiveInject(e.TemplateRef),e.\u0275\u0275directiveInject(P,8))},l.\u0275dir=e.\u0275\u0275defineDirective({type:l,selectors:[["ng-template","matExpansionPanelContent",""]]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(l,[{type:e.Directive,args:[{selector:"ng-template[matExpansionPanelContent]"}]}],function(){return[{type:e.TemplateRef},{type:void 0,decorators:[{type:e.Inject,args:[P]},{type:e.Optional}]}]},null)}();let Q=0;const v=new e.InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");class d extends A.CdkAccordionItem{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=(0,j.coerceBooleanProperty)(t)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,n,s,r,I,S,T){super(t,n,s),this._viewContainerRef=r,this._animationMode=S,this._hideToggle=!1,this.afterExpand=new e.EventEmitter,this.afterCollapse=new e.EventEmitter,this._inputChanges=new E.Subject,this._headerId=`mat-expansion-panel-header-${Q++}`,this._bodyAnimationDone=new E.Subject,this.accordion=t,this._document=I,this._bodyAnimationDone.pipe((0,m.distinctUntilChanged)((_,g)=>_.fromState===g.fromState&&_.toState===g.toState)).subscribe(_=>{_.fromState!=="void"&&(_.toState==="expanded"?this.afterExpand.emit():_.toState==="collapsed"&&this.afterCollapse.emit())}),T&&(this.hideToggle=T.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,m.startWith)(null),(0,m.filter)(()=>this.expanded&&!this._portal),(0,m.take)(1)).subscribe(()=>{this._portal=new C.TemplatePortal(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const t=this._document.activeElement,n=this._body.nativeElement;return t===n||n.contains(t)}return!1}}d.\u0275fac=function(t){return new(t||d)(e.\u0275\u0275directiveInject(f,12),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(k.UniqueSelectionDispatcher),e.\u0275\u0275directiveInject(e.ViewContainerRef),e.\u0275\u0275directiveInject(b.DOCUMENT),e.\u0275\u0275directiveInject(D.ANIMATION_MODULE_TYPE,8),e.\u0275\u0275directiveInject(v,8))},d.\u0275cmp=e.\u0275\u0275defineComponent({type:d,selectors:[["mat-expansion-panel"]],contentQueries:function(t,n,s){if(t&1&&e.\u0275\u0275contentQuery(s,l,5),t&2){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(n._lazyContent=r.first)}},viewQuery:function(t,n){if(t&1&&e.\u0275\u0275viewQuery(L,5),t&2){let s;e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(n._body=s.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(t,n){t&2&&e.\u0275\u0275classProp("mat-expanded",n.expanded)("_mat-animation-noopable",n._animationMode==="NoopAnimations")("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[e.\u0275\u0275ProvidersFeature([{provide:f,useValue:void 0},{provide:P,useExisting:d}]),e.\u0275\u0275InheritDefinitionFeature,e.\u0275\u0275NgOnChangesFeature],ngContentSelectors:U,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,n){t&1&&(e.\u0275\u0275projectionDef(B),e.\u0275\u0275projection(0),e.\u0275\u0275elementStart(1,"div",0,1),e.\u0275\u0275listener("@bodyExpansion.done",function(r){return n._bodyAnimationDone.next(r)}),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275projection(4,1),e.\u0275\u0275template(5,F,0,0,"ng-template",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275projection(6,2),e.\u0275\u0275elementEnd()),t&2&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("@bodyExpansion",n._getExpandedState())("id",n.id),e.\u0275\u0275attribute("aria-labelledby",n._headerId),e.\u0275\u0275advance(4),e.\u0275\u0275property("cdkPortalOutlet",n._portal))},dependencies:[C.CdkPortalOutlet],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[M.bodyExpansion]},changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(d,[{type:e.Component,args:[{selector:"mat-expansion-panel",exportAs:"matExpansionPanel",encapsulation:e.ViewEncapsulation.None,changeDetection:e.ChangeDetectionStrategy.OnPush,inputs:["disabled","expanded"],outputs:["opened","closed","expandedChange"],animations:[M.bodyExpansion],providers:[{provide:f,useValue:void 0},{provide:P,useExisting:d}],host:{class:"mat-expansion-panel","[class.mat-expanded]":"expanded","[class._mat-animation-noopable]":'_animationMode === "NoopAnimations"',"[class.mat-expansion-panel-spacing]":"_hasSpacing()"},template:`<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content"
     role="region"
     [@bodyExpansion]="_getExpandedState()"
     (@bodyExpansion.done)="_bodyAnimationDone.next($event)"
     [attr.aria-labelledby]="_headerId"
     [id]="id"
     #body>
  <div class="mat-expansion-panel-body">
    <ng-content></ng-content>
    <ng-template [cdkPortalOutlet]="_portal"></ng-template>
  </div>
  <ng-content select="mat-action-row"></ng-content>
</div>
`,styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}']}]}],function(){return[{type:void 0,decorators:[{type:e.Optional},{type:e.SkipSelf},{type:e.Inject,args:[f]}]},{type:e.ChangeDetectorRef},{type:k.UniqueSelectionDispatcher},{type:e.ViewContainerRef},{type:void 0,decorators:[{type:e.Inject,args:[b.DOCUMENT]}]},{type:void 0,decorators:[{type:e.Optional},{type:e.Inject,args:[D.ANIMATION_MODULE_TYPE]}]},{type:void 0,decorators:[{type:e.Inject,args:[v]},{type:e.Optional}]}]},{hideToggle:[{type:e.Input}],togglePosition:[{type:e.Input}],afterExpand:[{type:e.Output}],afterCollapse:[{type:e.Output}],_lazyContent:[{type:e.ContentChild,args:[l]}],_body:[{type:e.ViewChild,args:["body"]}]})}();class h{}h.\u0275fac=function(t){return new(t||h)},h.\u0275dir=e.\u0275\u0275defineDirective({type:h,selectors:[["mat-action-row"]],hostAttrs:[1,"mat-action-row"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(h,[{type:e.Directive,args:[{selector:"mat-action-row",host:{class:"mat-action-row"}}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class V{}const X=(0,w.mixinTabIndex)(V);class c extends X{constructor(t,n,s,r,I,S,T){super(),this.panel=t,this._element=n,this._focusMonitor=s,this._changeDetectorRef=r,this._animationMode=S,this._parentChangeSubscription=E.Subscription.EMPTY;const _=t.accordion?t.accordion._stateChanges.pipe((0,m.filter)(g=>!!(g.hideToggle||g.togglePosition))):E.EMPTY;this.tabIndex=parseInt(T||"")||0,this._parentChangeSubscription=(0,E.merge)(t.opened,t.closed,_,t._inputChanges.pipe((0,m.filter)(g=>!!(g.hideToggle||g.disabled||g.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe((0,m.filter)(()=>t._containsFocus())).subscribe(()=>s.focusVia(n,"program")),I&&(this.expandedHeight=I.expandedHeight,this.collapsedHeight=I.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case N.SPACE:case N.ENTER:(0,N.hasModifierKey)(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,n){t?this._focusMonitor.focusVia(this._element,t,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}c.\u0275fac=function(t){return new(t||c)(e.\u0275\u0275directiveInject(d,1),e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(O.FocusMonitor),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(v,8),e.\u0275\u0275directiveInject(D.ANIMATION_MODULE_TYPE,8),e.\u0275\u0275injectAttribute("tabindex"))},c.\u0275cmp=e.\u0275\u0275defineComponent({type:c,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(t,n){t&1&&e.\u0275\u0275listener("click",function(){return n._toggle()})("keydown",function(r){return n._keydown(r)}),t&2&&(e.\u0275\u0275attribute("id",n.panel._headerId)("tabindex",n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),e.\u0275\u0275styleProp("height",n._getHeaderHeight()),e.\u0275\u0275classProp("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before")("_mat-animation-noopable",n._animationMode==="NoopAnimations"))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:z,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(t,n){t&1&&(e.\u0275\u0275projectionDef(W),e.\u0275\u0275elementStart(0,"span",0),e.\u0275\u0275projection(1),e.\u0275\u0275projection(2,1),e.\u0275\u0275projection(3,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,K,1,1,"span",1)),t&2&&(e.\u0275\u0275classProp("mat-content-hide-toggle",!n._showToggle()),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",n._showToggle()))},dependencies:[b.NgIf],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[M.indicatorRotate]},changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(c,[{type:e.Component,args:[{selector:"mat-expansion-panel-header",encapsulation:e.ViewEncapsulation.None,changeDetection:e.ChangeDetectionStrategy.OnPush,inputs:["tabIndex"],animations:[M.indicatorRotate],host:{class:"mat-expansion-panel-header mat-focus-indicator",role:"button","[attr.id]":"panel._headerId","[attr.tabindex]":"tabIndex","[attr.aria-controls]":"_getPanelId()","[attr.aria-expanded]":"_isExpanded()","[attr.aria-disabled]":"panel.disabled","[class.mat-expanded]":"_isExpanded()","[class.mat-expansion-toggle-indicator-after]":"_getTogglePosition() === 'after'","[class.mat-expansion-toggle-indicator-before]":"_getTogglePosition() === 'before'","[class._mat-animation-noopable]":'_animationMode === "NoopAnimations"',"[style.height]":"_getHeaderHeight()","(click)":"_toggle()","(keydown)":"_keydown($event)"},template:`<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">
  <ng-content select="mat-panel-title"></ng-content>
  <ng-content select="mat-panel-description"></ng-content>
  <ng-content></ng-content>
</span>
<span [@indicatorRotate]="_getExpandedState()" *ngIf="_showToggle()"
      class="mat-expansion-indicator"></span>
`,styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}']}]}],function(){return[{type:d,decorators:[{type:e.Host}]},{type:e.ElementRef},{type:O.FocusMonitor},{type:e.ChangeDetectorRef},{type:void 0,decorators:[{type:e.Inject,args:[v]},{type:e.Optional}]},{type:void 0,decorators:[{type:e.Optional},{type:e.Inject,args:[D.ANIMATION_MODULE_TYPE]}]},{type:void 0,decorators:[{type:e.Attribute,args:["tabindex"]}]}]},{expandedHeight:[{type:e.Input}],collapsedHeight:[{type:e.Input}]})}();class x{}x.\u0275fac=function(t){return new(t||x)},x.\u0275dir=e.\u0275\u0275defineDirective({type:x,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(x,[{type:e.Directive,args:[{selector:"mat-panel-description",host:{class:"mat-expansion-panel-header-description"}}]}],null,null)}();class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275dir=e.\u0275\u0275defineDirective({type:u,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(u,[{type:e.Directive,args:[{selector:"mat-panel-title",host:{class:"mat-expansion-panel-header-title"}}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class p extends A.CdkAccordion{constructor(){super(...arguments),this._ownHeaders=new e.QueryList,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(t){this._hideToggle=(0,j.coerceBooleanProperty)(t)}ngAfterContentInit(){this._headers.changes.pipe((0,m.startWith)(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new O.FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}}p.\u0275fac=function(){let a;return function(n){return(a||(a=e.\u0275\u0275getInheritedFactory(p)))(n||p)}}(),p.\u0275dir=e.\u0275\u0275defineDirective({type:p,selectors:[["mat-accordion"]],contentQueries:function(t,n,s){if(t&1&&e.\u0275\u0275contentQuery(s,c,5),t&2){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(n._headers=r)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,n){t&2&&e.\u0275\u0275classProp("mat-accordion-multi",n.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[e.\u0275\u0275ProvidersFeature([{provide:f,useExisting:p}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(p,[{type:e.Directive,args:[{selector:"mat-accordion",exportAs:"matAccordion",inputs:["multi"],providers:[{provide:f,useExisting:p}],host:{class:"mat-accordion","[class.mat-accordion-multi]":"this.multi"}}]}],null,{_headers:[{type:e.ContentChildren,args:[c,{descendants:!0}]}],hideToggle:[{type:e.Input}],displayMode:[{type:e.Input}],togglePosition:[{type:e.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class y{}y.\u0275fac=function(t){return new(t||y)},y.\u0275mod=e.\u0275\u0275defineNgModule({type:y}),y.\u0275inj=e.\u0275\u0275defineInjector({imports:[b.CommonModule,w.MatCommonModule,A.CdkAccordionModule,C.PortalModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(y,[{type:e.NgModule,args:[{imports:[b.CommonModule,w.MatCommonModule,A.CdkAccordionModule,C.PortalModule],exports:[p,d,h,c,u,x,l],declarations:[p,d,h,c,u,x,l]}]}],null,null)}();/**
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
