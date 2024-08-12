(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[8972],{38972:(O,h,a)=>{a.r(h),a.d(h,{MAT_LEGACY_PROGRESS_SPINNER_DEFAULT_OPTIONS:()=>g.MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,MAT_LEGACY_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY:()=>g.MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY,MatLegacyProgressSpinner:()=>s,MatLegacyProgressSpinnerModule:()=>m,MatLegacySpinner:()=>R});var p=a(3127),l=a(67202),_=a(17684),f=a(31134),e=a(94450),c=a(66385),u=a(71006),g=a(59233),v=a(21322);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function M(n,r){if(n&1&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275element(0,"circle",4)),n&2){const t=e.\u0275\u0275nextContext(),i=e.\u0275\u0275reference(1);e.\u0275\u0275styleProp("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(i)),e.\u0275\u0275attribute("r",t._getCircleRadius())}}function T(n,r){if(n&1&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275element(0,"circle",4)),n&2){const t=e.\u0275\u0275nextContext(),i=e.\u0275\u0275reference(1);e.\u0275\u0275styleProp("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(i)),e.\u0275\u0275attribute("r",t._getCircleRadius())}}const k=100,x=10,C=(0,c.mixinColor)(class{constructor(n){this._elementRef=n}},"primary"),P=`
 @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {
    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }
    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }
    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }
    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }

    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }
    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }
    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }
    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }

    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }
    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }
    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }
    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }

    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }
    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }
    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }
    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }
  }
`;class s extends C{get diameter(){return this._diameter}set diameter(r){this._diameter=(0,p.coerceNumberProperty)(r),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(r){this._strokeWidth=(0,p.coerceNumberProperty)(r)}get value(){return this.mode==="determinate"?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,(0,p.coerceNumberProperty)(r)))}constructor(r,t,i,d,o,E,S,y){super(r),this._document=i,this._diameter=k,this._value=0,this._resizeSubscription=v.Subscription.EMPTY,this.mode="determinate";const A=s._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),A.has(i.head)||A.set(i.head,new Set([k])),this._noopAnimations=d==="NoopAnimations"&&!!o&&!o._forceAnimations,r.nativeElement.nodeName.toLowerCase()==="mat-spinner"&&(this.mode="indeterminate"),o&&(o.color&&(this.color=this.defaultColor=o.color),o.diameter&&(this.diameter=o.diameter),o.strokeWidth&&(this.strokeWidth=o.strokeWidth)),t.isBrowser&&t.SAFARI&&S&&E&&y&&(this._resizeSubscription=S.change(150).subscribe(()=>{this.mode==="indeterminate"&&y.run(()=>E.markForCheck())}))}ngOnInit(){const r=this._elementRef.nativeElement;this._styleRoot=(0,l._getShadowRoot)(r)||this._document.head,this._attachStyleNode(),r.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-x)/2}_getViewBox(){const r=this._getCircleRadius()*2+this.strokeWidth;return`0 0 ${r} ${r}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return this.mode==="determinate"?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(r){const t=(r.currentScale??1)*50;return`${t}% ${t}%`}_attachStyleNode(){const r=this._styleRoot,t=this._diameter,i=s._diameters;let d=i.get(r);if(!d||!d.has(t)){const o=this._document.createElement("style");o.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),o.textContent=this._getAnimationText(),r.appendChild(o),d||(d=new Set,i.set(r,d)),d.add(t)}}_getAnimationText(){const r=this._getStrokeCircumference();return P.replace(/START_VALUE/g,`${.95*r}`).replace(/END_VALUE/g,`${.2*r}`).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}s._diameters=new WeakMap,s.\u0275fac=function(r){return new(r||s)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(l.Platform),e.\u0275\u0275directiveInject(f.DOCUMENT,8),e.\u0275\u0275directiveInject(u.ANIMATION_MODULE_TYPE,8),e.\u0275\u0275directiveInject(g.MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(_.ViewportRuler),e.\u0275\u0275directiveInject(e.NgZone))},s.\u0275cmp=e.\u0275\u0275defineComponent({type:s,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(r,t){r&2&&(e.\u0275\u0275attribute("aria-valuemin",t.mode==="determinate"?0:null)("aria-valuemax",t.mode==="determinate"?100:null)("aria-valuenow",t.mode==="determinate"?t.value:null)("mode",t.mode),e.\u0275\u0275styleProp("width",t.diameter,"px")("height",t.diameter,"px"),e.\u0275\u0275classProp("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(r,t){r&1&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",0,1),e.\u0275\u0275template(2,M,1,11,"circle",2),e.\u0275\u0275template(3,T,1,9,"circle",3),e.\u0275\u0275elementEnd()),r&2&&(e.\u0275\u0275styleProp("width",t.diameter,"px")("height",t.diameter,"px"),e.\u0275\u0275property("ngSwitch",t.mode==="indeterminate"),e.\u0275\u0275attribute("viewBox",t._getViewBox()),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngSwitchCase",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngSwitchCase",!1))},dependencies:[f.NgSwitch,f.NgSwitchCase],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(s,[{type:e.Component,args:[{selector:"mat-progress-spinner, mat-spinner",exportAs:"matProgressSpinner",host:{role:"progressbar",class:"mat-progress-spinner mat-spinner",tabindex:"-1","[class._mat-animation-noopable]":"_noopAnimations","[style.width.px]":"diameter","[style.height.px]":"diameter","[attr.aria-valuemin]":'mode === "determinate" ? 0 : null',"[attr.aria-valuemax]":'mode === "determinate" ? 100 : null',"[attr.aria-valuenow]":'mode === "determinate" ? value : null',"[attr.mode]":"mode"},inputs:["color"],changeDetection:e.ChangeDetectionStrategy.OnPush,encapsulation:e.ViewEncapsulation.None,template:`<!--
  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's
  center. The center of the circle will remain at the center of the mat-progress-spinner
  element containing the SVG.
-->
<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<svg
  [style.width.px]="diameter"
  [style.height.px]="diameter"
  [attr.viewBox]="_getViewBox()"
  preserveAspectRatio="xMidYMid meet"
  focusable="false"
  [ngSwitch]="mode === 'indeterminate'"
  aria-hidden="true"
  #svg>

  <!--
    Technically we can reuse the same \`circle\` element, however Safari has an issue that breaks
    the SVG rendering in determinate mode, after switching between indeterminate and determinate.
    Using a different element avoids the issue. An alternative to this is adding \`display: none\`
    for a split second and then removing it when switching between modes, but it's hard to know
    for how long to hide the element and it can cause the UI to blink.
  -->
  <circle
    *ngSwitchCase="true"
    cx="50%"
    cy="50%"
    [attr.r]="_getCircleRadius()"
    [style.animation-name]="'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel"
    [style.stroke-dashoffset.px]="_getStrokeDashOffset()"
    [style.stroke-dasharray.px]="_getStrokeCircumference()"
    [style.stroke-width.%]="_getCircleStrokeWidth()"
    [style.transform-origin]="_getCircleTransformOrigin(svg)"></circle>

  <circle
    *ngSwitchCase="false"
    cx="50%"
    cy="50%"
    [attr.r]="_getCircleRadius()"
    [style.stroke-dashoffset.px]="_getStrokeDashOffset()"
    [style.stroke-dasharray.px]="_getStrokeCircumference()"
    [style.stroke-width.%]="_getCircleStrokeWidth()"
    [style.transform-origin]="_getCircleTransformOrigin(svg)"></circle>
</svg>
`,styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"]}]}],function(){return[{type:e.ElementRef},{type:l.Platform},{type:void 0,decorators:[{type:e.Optional},{type:e.Inject,args:[f.DOCUMENT]}]},{type:void 0,decorators:[{type:e.Optional},{type:e.Inject,args:[u.ANIMATION_MODULE_TYPE]}]},{type:void 0,decorators:[{type:e.Inject,args:[g.MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]}]},{type:e.ChangeDetectorRef},{type:_.ViewportRuler},{type:e.NgZone}]},{diameter:[{type:e.Input}],strokeWidth:[{type:e.Input}],mode:[{type:e.Input}],value:[{type:e.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class m{}m.\u0275fac=function(r){return new(r||m)},m.\u0275mod=e.\u0275\u0275defineNgModule({type:m}),m.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.MatCommonModule,f.CommonModule,c.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(m,[{type:e.NgModule,args:[{imports:[c.MatCommonModule,f.CommonModule],exports:[s,c.MatCommonModule],declarations:[s]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const R=s;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}]);
