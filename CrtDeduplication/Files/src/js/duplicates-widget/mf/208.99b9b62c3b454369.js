(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[208,6387],{56387:(C,A,r)=>{r.r(A),r.d(A,{MAT_LEGACY_AUTOCOMPLETE_DEFAULT_OPTIONS:()=>l.MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,MAT_LEGACY_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY:()=>l.MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,MAT_LEGACY_AUTOCOMPLETE_SCROLL_STRATEGY:()=>l.MAT_AUTOCOMPLETE_SCROLL_STRATEGY,MAT_LEGACY_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY:()=>l.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY,MAT_LEGACY_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER:()=>l.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER,MAT_LEGACY_AUTOCOMPLETE_VALUE_ACCESSOR:()=>g,MatLegacyAutocomplete:()=>i,MatLegacyAutocompleteModule:()=>d,MatLegacyAutocompleteOrigin:()=>c,MatLegacyAutocompleteSelectedEvent:()=>l.MatAutocompleteSelectedEvent,MatLegacyAutocompleteTrigger:()=>p,getMatLegacyAutocompleteMissingPanelError:()=>l.getMatAutocompleteMissingPanelError});var e=r(94450),u=r(73539),l=r(56037),_=r(31134),M=r(31892),m=r(66385),O=r(17684),T=r(34560);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function E(o,a){if(o&1&&(e.\u0275\u0275elementStart(0,"div",0,1),e.\u0275\u0275projection(2),e.\u0275\u0275elementEnd()),o&2){const t=a.id,n=e.\u0275\u0275nextContext();e.\u0275\u0275property("id",n.id)("ngClass",n._classList),e.\u0275\u0275attribute("aria-label",n.ariaLabel||null)("aria-labelledby",n._getPanelAriaLabelledby(t))}}const L=["*"];class i extends l._MatAutocompleteBase{constructor(){super(...arguments),this._visibleClass="mat-autocomplete-visible",this._hiddenClass="mat-autocomplete-hidden"}}i.\u0275fac=function(){let o;return function(t){return(o||(o=e.\u0275\u0275getInheritedFactory(i)))(t||i)}}(),i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["mat-autocomplete"]],contentQueries:function(a,t,n){if(a&1&&(e.\u0275\u0275contentQuery(n,u.MAT_LEGACY_OPTGROUP,5),e.\u0275\u0275contentQuery(n,u.MatLegacyOption,5)),a&2){let s;e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(t.optionGroups=s),e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(t.options=s)}},hostAttrs:[1,"mat-autocomplete"],inputs:{disableRipple:"disableRipple"},exportAs:["matAutocomplete"],features:[e.\u0275\u0275ProvidersFeature([{provide:u.MAT_LEGACY_OPTION_PARENT_COMPONENT,useExisting:i}]),e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:L,decls:1,vars:0,consts:[["role","listbox",1,"mat-autocomplete-panel",3,"id","ngClass"],["panel",""]],template:function(a,t){a&1&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275template(0,E,3,4,"ng-template"))},dependencies:[_.NgClass],styles:[".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}"],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(i,[{type:e.Component,args:[{selector:"mat-autocomplete",encapsulation:e.ViewEncapsulation.None,changeDetection:e.ChangeDetectionStrategy.OnPush,exportAs:"matAutocomplete",inputs:["disableRipple"],host:{class:"mat-autocomplete"},providers:[{provide:u.MAT_LEGACY_OPTION_PARENT_COMPONENT,useExisting:i}],template:`<ng-template let-formFieldId="id">
  <div class="mat-autocomplete-panel"
       role="listbox"
       [id]="id"
       [attr.aria-label]="ariaLabel || null"
       [attr.aria-labelledby]="_getPanelAriaLabelledby(formFieldId)"
       [ngClass]="_classList"
       #panel>
    <ng-content></ng-content>
  </div>
</ng-template>
`,styles:[".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}"]}]}],null,{optionGroups:[{type:e.ContentChildren,args:[u.MAT_LEGACY_OPTGROUP,{descendants:!0}]}],options:[{type:e.ContentChildren,args:[u.MatLegacyOption,{descendants:!0}]}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const g={provide:T.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>p),multi:!0};class p extends l._MatAutocompleteTriggerBase{constructor(){super(...arguments),this._aboveClass="mat-autocomplete-panel-above"}}p.\u0275fac=function(){let o;return function(t){return(o||(o=e.\u0275\u0275getInheritedFactory(p)))(t||p)}}(),p.\u0275dir=e.\u0275\u0275defineDirective({type:p,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-autocomplete-trigger"],hostVars:7,hostBindings:function(a,t){a&1&&e.\u0275\u0275listener("focusin",function(){return t._handleFocus()})("blur",function(){return t._onTouched()})("input",function(s){return t._handleInput(s)})("keydown",function(s){return t._handleKeydown(s)})("click",function(){return t._handleClick()}),a&2&&e.\u0275\u0275attribute("autocomplete",t.autocompleteAttribute)("role",t.autocompleteDisabled?null:"combobox")("aria-autocomplete",t.autocompleteDisabled?null:"list")("aria-activedescendant",t.panelOpen&&t.activeOption?t.activeOption.id:null)("aria-expanded",t.autocompleteDisabled?null:t.panelOpen.toString())("aria-owns",t.autocompleteDisabled||!t.panelOpen||t.autocomplete==null?null:t.autocomplete.id)("aria-haspopup",t.autocompleteDisabled?null:"listbox")},exportAs:["matAutocompleteTrigger"],features:[e.\u0275\u0275ProvidersFeature([g]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(p,[{type:e.Directive,args:[{selector:"input[matAutocomplete], textarea[matAutocomplete]",host:{class:"mat-autocomplete-trigger","[attr.autocomplete]":"autocompleteAttribute","[attr.role]":'autocompleteDisabled ? null : "combobox"',"[attr.aria-autocomplete]":'autocompleteDisabled ? null : "list"',"[attr.aria-activedescendant]":"(panelOpen && activeOption) ? activeOption.id : null","[attr.aria-expanded]":"autocompleteDisabled ? null : panelOpen.toString()","[attr.aria-owns]":"(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id","[attr.aria-haspopup]":'autocompleteDisabled ? null : "listbox"',"(focusin)":"_handleFocus()","(blur)":"_onTouched()","(input)":"_handleInput($event)","(keydown)":"_handleKeydown($event)","(click)":"_handleClick()"},exportAs:"matAutocompleteTrigger",providers:[g]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class c extends l._MatAutocompleteOriginBase{}c.\u0275fac=function(){let o;return function(t){return(o||(o=e.\u0275\u0275getInheritedFactory(c)))(t||c)}}(),c.\u0275dir=e.\u0275\u0275defineDirective({type:c,selectors:[["","matAutocompleteOrigin",""]],exportAs:["matAutocompleteOrigin"],features:[e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(c,[{type:e.Directive,args:[{selector:"[matAutocompleteOrigin]",exportAs:"matAutocompleteOrigin"}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class d{}d.\u0275fac=function(a){return new(a||d)},d.\u0275mod=e.\u0275\u0275defineNgModule({type:d}),d.\u0275inj=e.\u0275\u0275defineInjector({providers:[l.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],imports:[M.OverlayModule,u.MatLegacyOptionModule,m.MatCommonModule,_.CommonModule,O.CdkScrollableModule,u.MatLegacyOptionModule,m.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(d,[{type:e.NgModule,args:[{imports:[M.OverlayModule,u.MatLegacyOptionModule,m.MatCommonModule,_.CommonModule],exports:[i,p,c,O.CdkScrollableModule,u.MatLegacyOptionModule,m.MatCommonModule],declarations:[i,p,c],providers:[l.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]}]}],null,null)}();/**
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
