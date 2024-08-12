(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[8124,8239,5036,6118,7344,8160,1034,8056,1906,8739],{38124:(p,h,a)=>{a.r(h),a.d(h,{MatTooltipHarness:()=>i,_MatTooltipHarnessBase:()=>o});var n=a(8239),c=a(21936);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o extends c.ComponentHarness{show(){var t=this;return(0,n.Z)(function*(){const e=yield t.host();yield e.dispatchEvent("touchstart",{changedTouches:[]}),yield e.hover(),yield(yield t._optionalPanel())?.dispatchEvent("animationend",{animationName:t._showAnimationName})})()}hide(){var t=this;return(0,n.Z)(function*(){const e=yield t.host();yield e.dispatchEvent("touchend"),yield e.mouseAway(),yield(yield t._optionalPanel())?.dispatchEvent("animationend",{animationName:t._hideAnimationName})})()}isOpen(){var t=this;return(0,n.Z)(function*(){const e=yield t._optionalPanel();return!!e&&!(yield e.hasClass(t._hiddenClass))})()}getTooltipText(){var t=this;return(0,n.Z)(function*(){const e=yield t._optionalPanel();return e?e.text():""})()}}class i extends o{constructor(){super(...arguments),this._optionalPanel=this.documentRootLocatorFactory().locatorForOptional(".mat-mdc-tooltip"),this._hiddenClass="mat-mdc-tooltip-hide",this._showAnimationName="mat-mdc-tooltip-show",this._hideAnimationName="mat-mdc-tooltip-hide"}static with(t={}){return new c.HarnessPredicate(this,t)}}i.hostSelector=".mat-mdc-tooltip-trigger";/**
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
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */},8239:(p,h,a)=>{a.d(h,{Z:()=>c});function n(o,i,_,t,e,s,l){try{var d=o[s](l),r=d.value}catch(u){_(u);return}d.done?i(r):Promise.resolve(r).then(t,e)}function c(o){return function(){var i=this,_=arguments;return new Promise(function(t,e){var s=o.apply(i,_);function l(r){n(s,t,e,l,d,"next",r)}function d(r){n(s,t,e,l,d,"throw",r)}l(void 0)})}}}}]);
