(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[8124,8239,5036,6118,7344,8160,1034,8056,1906,4501,1216,9256,9795,1006,7571,6025,9424,885,8739],{38124:(p,c,a)=>{a.r(c),a.d(c,{MatTooltipHarness:()=>s,_MatTooltipHarnessBase:()=>o});var n=a(8239),d=a(21936);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o extends d.ComponentHarness{show(){var t=this;return(0,n.Z)(function*(){const e=yield t.host();yield e.dispatchEvent("touchstart",{changedTouches:[]}),yield e.hover(),yield(yield t._optionalPanel())?.dispatchEvent("animationend",{animationName:t._showAnimationName})})()}hide(){var t=this;return(0,n.Z)(function*(){const e=yield t.host();yield e.dispatchEvent("touchend"),yield e.mouseAway(),yield(yield t._optionalPanel())?.dispatchEvent("animationend",{animationName:t._hideAnimationName})})()}isOpen(){var t=this;return(0,n.Z)(function*(){const e=yield t._optionalPanel();return!!e&&!(yield e.hasClass(t._hiddenClass))})()}getTooltipText(){var t=this;return(0,n.Z)(function*(){const e=yield t._optionalPanel();return e?e.text():""})()}}class s extends o{constructor(){super(...arguments),this._optionalPanel=this.documentRootLocatorFactory().locatorForOptional(".mat-mdc-tooltip"),this._hiddenClass="mat-mdc-tooltip-hide",this._showAnimationName="mat-mdc-tooltip-show",this._hideAnimationName="mat-mdc-tooltip-hide"}static with(t={}){return new d.HarnessPredicate(this,t)}}s.hostSelector=".mat-mdc-tooltip-trigger";/**
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
 */},8239:(p,c,a)=>{a.d(c,{Z:()=>d});function n(o,s,_,t,e,i,l){try{var h=o[i](l),r=h.value}catch(u){_(u);return}h.done?s(r):Promise.resolve(r).then(t,e)}function d(o){return function(){var s=this,_=arguments;return new Promise(function(t,e){var i=o.apply(s,_);function l(r){n(i,t,e,l,h,"next",r)}function h(r){n(i,t,e,l,h,"throw",r)}l(void 0)})}}}}]);
