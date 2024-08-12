(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[8149,5834],{95834:(A,g,u)=>{u.r(g),u.d(g,{ArrayDataSource:()=>C,DataSource:()=>p,SelectionModel:()=>V,UniqueSelectionDispatcher:()=>a,_DisposeViewRepeaterStrategy:()=>w,_RecycleViewRepeaterStrategy:()=>y,_VIEW_REPEATER_STRATEGY:()=>T,getMultipleValuesInSingleSelectionError:()=>E,isDataSource:()=>S});var m=u(21322),f=u(94450);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class p{}function S(c){return c&&typeof c.connect=="function"&&!(c instanceof m.ConnectableObservable)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class C extends p{constructor(e){super(),this._data=e}connect(){return(0,m.isObservable)(this._data)?this._data:(0,m.of)(this._data)}disconnect(){}}/**
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
 */class w{applyChanges(e,t,s,h,i){e.forEachOperation((n,_,r)=>{let l,o;if(n.previousIndex==null){const d=s(n,_,r);l=t.createEmbeddedView(d.templateRef,d.context,d.index),o=1}else r==null?(t.remove(_),o=3):(l=t.get(_),t.move(l,r),o=2);i&&i({context:l?.context,operation:o,record:n})})}detach(){}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class y{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(e,t,s,h,i){e.forEachOperation((n,_,r)=>{let l,o;if(n.previousIndex==null){const d=()=>s(n,_,r);l=this._insertView(d,r,t,h(n)),o=l?1:0}else r==null?(this._detachAndCacheView(_,t),o=3):(l=this._moveView(_,r,t,h(n)),o=2);i&&i({context:l?.context,operation:o,record:n})})}detach(){for(const e of this._viewCache)e.destroy();this._viewCache=[]}_insertView(e,t,s,h){const i=this._insertViewFromCache(t,s);if(i){i.context.$implicit=h;return}const n=e();return s.createEmbeddedView(n.templateRef,n.context,n.index)}_detachAndCacheView(e,t){const s=t.detach(e);this._maybeCacheView(s,t)}_moveView(e,t,s,h){const i=s.get(e);return s.move(i,t),i.context.$implicit=h,i}_maybeCacheView(e,t){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{const s=t.indexOf(e);s===-1?e.destroy():t.remove(s)}}_insertViewFromCache(e,t){const s=this._viewCache.pop();return s&&t.insert(s,e),s||null}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class V{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(e=!1,t,s=!0,h){this._multiple=e,this._emitChanges=s,this.compareWith=h,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new m.Subject,t&&t.length&&(e?t.forEach(i=>this._markSelected(i)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...e){this._verifyValueAssignment(e),e.forEach(s=>this._markSelected(s));const t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...e){this._verifyValueAssignment(e),e.forEach(s=>this._unmarkSelected(s));const t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...e){this._verifyValueAssignment(e);const t=this.selected,s=new Set(e);e.forEach(i=>this._markSelected(i)),t.filter(i=>!s.has(i)).forEach(i=>this._unmarkSelected(i));const h=this._hasQueuedChanges();return this._emitChangeEvent(),h}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();const t=this._hasQueuedChanges();return e&&this._emitChangeEvent(),t}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){if(e.length>1&&!this._multiple&&(typeof ngDevMode>"u"||ngDevMode))throw E()}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(e){if(this.compareWith){for(let t of this._selection)if(this.compareWith(e,t))return t;return e}else return e}}function E(){return Error("Cannot pass multiple values into SelectionModel with single-value mode.")}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class a{constructor(){this._listeners=[]}notify(e,t){for(let s of this._listeners)s(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}}a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=f.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&f.\u0275setClassMetadata(a,[{type:f.Injectable,args:[{providedIn:"root"}]}],null,null)}();/**
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
 */const T=new f.InjectionToken("_ViewRepeater");/**
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
