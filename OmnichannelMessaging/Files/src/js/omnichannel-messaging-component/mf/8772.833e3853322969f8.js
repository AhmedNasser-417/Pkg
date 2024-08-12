(self.webpackChunkapp_studio_enterprise_omnichannel_messaging=self.webpackChunkapp_studio_enterprise_omnichannel_messaging||[]).push([[8772,9503],{38772:(m,u,c)=>{var h;c.r(u),c.d(u,{MAT_MOMENT_DATE_ADAPTER_OPTIONS:()=>M,MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY:()=>A,MAT_MOMENT_DATE_FORMATS:()=>_,MatMomentDateModule:()=>d,MomentDateAdapter:()=>r,MomentDateModule:()=>s});var n=c(94450),o=c(66385),f=c(42378);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const l=f||h||(h=c.t(f,2)),M=new n.InjectionToken("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:A});function A(){return{useUtc:!1}}function p(i,e){const t=Array(i);for(let a=0;a<i;a++)t[a]=e(a);return t}class r extends o.DateAdapter{constructor(e,t){super(),this._options=t,this.setLocale(e||l.locale())}setLocale(e){super.setLocale(e);let t=l.localeData(e);this._localeData={firstDayOfWeek:t.firstDayOfWeek(),longMonths:t.months(),shortMonths:t.monthsShort(),dates:p(31,a=>this.createDate(2017,0,a+1).format("D")),longDaysOfWeek:t.weekdays(),shortDaysOfWeek:t.weekdaysShort(),narrowDaysOfWeek:t.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return e=="long"?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return e=="long"?this._localeData.longDaysOfWeek:e=="short"?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,t,a){if(typeof ngDevMode>"u"||ngDevMode){if(t<0||t>11)throw Error(`Invalid month index "${t}". Month index has to be between 0 and 11.`);if(a<1)throw Error(`Invalid date "${a}". Date has to be greater than 0.`)}const D=this._createMoment({year:e,month:t,date:a}).locale(this.locale);if(!D.isValid()&&(typeof ngDevMode>"u"||ngDevMode))throw Error(`Invalid date "${a}" for month with index "${t}".`);return D}today(){return this._createMoment().locale(this.locale)}parse(e,t){return e&&typeof e=="string"?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,t){if(e=this.clone(e),!this.isValid(e)&&(typeof ngDevMode>"u"||ngDevMode))throw Error("MomentDateAdapter: Cannot format invalid date.");return e.format(t)}addCalendarYears(e,t){return this.clone(e).add({years:t})}addCalendarMonths(e,t){return this.clone(e).add({months:t})}addCalendarDays(e,t){return this.clone(e).add({days:t})}toIso8601(e){return this.clone(e).format()}deserialize(e){let t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if(typeof e=="string"){if(!e)return null;t=this._createMoment(e,l.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):super.deserialize(e)}isDateInstance(e){return l.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return l.invalid()}_createMoment(e,t,a){const{strict:D,useUtc:T}=this._options||{};return T?l.utc(e,t,a,D):l(e,t,a,D)}}r.\u0275fac=function(e){return new(e||r)(n.\u0275\u0275inject(o.MAT_DATE_LOCALE,8),n.\u0275\u0275inject(M,8))},r.\u0275prov=n.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(r,[{type:n.Injectable}],function(){return[{type:void 0,decorators:[{type:n.Optional},{type:n.Inject,args:[o.MAT_DATE_LOCALE]}]},{type:void 0,decorators:[{type:n.Optional},{type:n.Inject,args:[M]}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const _={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=n.\u0275\u0275defineInjector({providers:[{provide:o.DateAdapter,useClass:r,deps:[o.MAT_DATE_LOCALE,M]}]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(s,[{type:n.NgModule,args:[{providers:[{provide:o.DateAdapter,useClass:r,deps:[o.MAT_DATE_LOCALE,M]}]}]}],null,null)}();class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=n.\u0275\u0275defineNgModule({type:d}),d.\u0275inj=n.\u0275\u0275defineInjector({providers:[{provide:o.MAT_DATE_FORMATS,useValue:_}],imports:[s]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(d,[{type:n.NgModule,args:[{imports:[s],providers:[{provide:o.MAT_DATE_FORMATS,useValue:_}]}]}],null,null)}();/**
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
