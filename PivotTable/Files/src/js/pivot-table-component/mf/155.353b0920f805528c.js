(self.webpackChunkapp_studio_enterprise_pivot_table=self.webpackChunkapp_studio_enterprise_pivot_table||[]).push([[155,8239,5036,6118,7344,8160,1034,8056,494],{50155:(h,_,r)=>{r.r(_),r.d(_,{ExpressionEngine:()=>E.W,ExpressionEngineModule:()=>c.h,ExpressionMetadataAdapter:()=>E.h});var c=r(20255),E=r(8236),a=r(60944),o=r.n(a),l={};for(const u in a)["default","ExpressionEngineModule","ExpressionEngine","ExpressionMetadataAdapter"].indexOf(u)<0&&(l[u]=()=>a[u]);r.d(_,l)},20255:(h,_,r)=>{r.d(_,{h:()=>s});var c=r(74742),E=r(31134),a=r(75378),o=r(60944);let l=class{convert(i,p){const m={type:"crt.ExecuteExpressionRequest",$context:p,metadata:i};return a.HandlerChainService.instance.process(m).then(y=>y?.result).catch(y=>(console.warn(y),null))}};l=(0,c.__decorate)([(0,a.CrtConverter)({type:"crt.ExecuteExpression"})],l);let u=class{convert(i,p){const m={type:"crt.ExecuteExpressionRequest",$context:p,metadata:i};return a.HandlerChainService.instance.process(m).then(y=>y).catch(y=>({success:!1,result:null,errorInfo:y}))}};u=(0,c.__decorate)([(0,a.CrtConverter)({type:"crt.ToExpressionResult"})],u);var d=r(8236);let x=class extends a.BaseRequest{constructor(){super(...arguments),this.type="crt.ExecuteExpressionRequest"}};x=(0,c.__decorate)([(0,a.CrtRequest)({type:"crt.ExecuteExpressionRequest"})],x);let e=class extends a.BaseRequestHandler{constructor(i){super(),this._engine=i}handle(i){return this._engine.execute(i.metadata)}};e=(0,c.__decorate)([(0,a.CrtRequestHandler)({type:"crt.ExecuteExpressionHandler",requestType:"crt.ExecuteExpressionRequest"}),(0,c.__metadata)("design:paramtypes",[d.W])],e);var n=r(94450);let s=class{};s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=n.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=n.\u0275\u0275defineInjector({providers:[d.W,d.h],imports:[E.CommonModule,o.ExpressionSchemaModule,o.ExpressionSchemaModule]}),s=(0,c.__decorate)([(0,a.CrtModule)({converters:[l,u],requestHandlers:[e]})],s),function(){(typeof ngJitMode>"u"||ngJitMode)&&n.\u0275\u0275setNgModuleScope(s,{imports:[E.CommonModule,o.ExpressionSchemaModule],exports:[o.ExpressionSchemaModule]})}()},8236:(h,_,r)=>{r.d(_,{W:()=>d,h:()=>u});var c=r(8239),E=r(2876),a=r(75378),o=r(21322),l=r(94450);class u{_getDataValueTypeName(e){switch(e){case a.DataValueType.FLOAT1:return"Float1";case a.DataValueType.FLOAT2:return"Float2";case a.DataValueType.FLOAT3:return"Float3";case a.DataValueType.FLOAT4:return"Float4";case a.DataValueType.FLOAT8:return"Float8";case a.DataValueType.CUSTOM_OBJECT:return"Object";case a.DataValueType.COMPOSITE_OBJECT_LIST:return"CompositeObjectList";default:return a.DataValueType[e]}}_getRequestParameterValueDto(e){const n=e.value;if(Array.isArray(n)){const s=n[0];return Array.isArray(s)?n.map(t=>t.map(i=>({...i,value:this._encodeValue(i.value,i.dataValueType),dataValueType:this._getDataValueTypeName(i.dataValueType)}))):n.map(t=>({...t,value:this._encodeValue(t.value,t.dataValueType),dataValueType:this._getDataValueTypeName(t.dataValueType)}))}return this._encodeValue(n,e.dataValueType)}_encodeValue(e,n){return[a.DataValueType.Date,a.DataValueType.Time,a.DataValueType.DateTime].includes(n)?(0,a.toLocalISOString)(e):e}decodeValue(e,n){return[a.DataValueType.Date,a.DataValueType.Time,a.DataValueType.DateTime].includes(n)?new Date(e):e}getExecutionMetadata(e){const n=e.parameters.map(t=>({...t,dataValueType:this._getDataValueTypeName(t.dataValueType),value:this._getRequestParameterValueDto(t)})),s=e.expressionVariables.map(t=>({...t,dataValueType:this._getDataValueTypeName(t.dataValueType)}));return JSON.stringify({...e,parameters:n,expressionVariables:s,resultDataValueType:this._getDataValueTypeName(e.resultDataValueType)})}}u.\u0275fac=function(e){return new(e||u)},u.\u0275prov=l.\u0275\u0275defineInjectable({token:u,factory:u.\u0275fac,providedIn:"root"});class d{constructor(e,n,s,t){this._httpClient=e,this._featureService=n,this._sysSettingsService=s,this._expressionMetadataAdapter=t,this._expressionEngineEndpoint="ServiceModel/ExpressionService.svc/Execute",this._expressionsEngineEndpoint="ServiceModel/ExpressionService.svc/ExecuteMany",this._defaultDebounceTime=200,this._defaultBundleCount=20,this._debounceTimeSysSettingName="ExpressionEngineDebounceTime",this._bundleCountSysSettingName="ExpressionEngineBundleCount",this._requests=new o.Subject}_executeImmediate(e){const n={metadata:e};return(0,o.lastValueFrom)(this._httpClient.post(this._expressionEngineEndpoint,n,{headers:new E.HttpHeaders({"Content-Type":"application/json"})}))}_getBundleSettings(){var e=this;return(0,c.Z)(function*(){const n=yield e._sysSettingsService.getByCodes([e._debounceTimeSysSettingName,e._bundleCountSysSettingName]),s=n.values[e._debounceTimeSysSettingName]?.value||e._defaultDebounceTime,t=n.values[e._bundleCountSysSettingName]?.value||e._defaultBundleCount;return{executionDebounceTime:s,bundleCount:t}})()}_prepareDebouncedResponsesStream(){var e=this;return(0,c.Z)(function*(){const{executionDebounceTime:n,bundleCount:s}=yield e._getBundleSettings();if(e._responses)return;const t=new o.BehaviorSubject(0),i=(0,o.merge)(t.pipe((0,o.filter)(p=>p>=s)),e._requests.pipe((0,o.tap)(()=>{t.next(t.value+1)}),(0,o.debounceTime)(n)));e._responses=e._requests.pipe((0,o.buffer)(i),(0,o.filter)(p=>!!p.length),(0,o.mergeMap)(p=>(t.next(0),e._httpClient.post(e._expressionsEngineEndpoint,p,{headers:new E.HttpHeaders({"Content-Type":"application/json"})}))),(0,o.share)())})()}_executeThrottled(e){var n=this;return(0,c.Z)(function*(){yield n._prepareDebouncedResponsesStream();const s=(0,a.generateGuid)(),t=(0,o.firstValueFrom)(n._responses.pipe((0,o.filter)(i=>i.some(p=>p.executionId===s)),(0,o.map)(i=>i.find(p=>p.executionId===s).result)));return n._requests.next({executionId:s,metadata:e}),t})()}safeExecute(e,n={immediate:!1}){var s=this;return(0,c.Z)(function*(){try{return yield s.execute(e,n)}catch(t){return{success:!1,errorInfo:t,result:null}}})()}execute(e,n={immediate:!1}){var s=this;return(0,c.Z)(function*(){let t;const i=s._expressionMetadataAdapter.getExecutionMetadata(e),p=yield s._featureService.getFeatureState("ExpressionEngineDisableBundling");if(n.immediate||p?t=yield s._executeImmediate(i):t=yield s._executeThrottled(i),!t.success){const m=t.errorInfo;return Promise.reject(`${m.message}`)}return{...t,result:s._expressionMetadataAdapter.decodeValue(t.result,e.resultDataValueType)}})()}}d.\u0275fac=function(e){return new(e||d)(l.\u0275\u0275inject(E.HttpClient),l.\u0275\u0275inject(a.FeatureService),l.\u0275\u0275inject(a.SysSettingsService),l.\u0275\u0275inject(u))},d.\u0275prov=l.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac,providedIn:"root"})},8239:(h,_,r)=>{r.d(_,{Z:()=>E});function c(a,o,l,u,d,x,e){try{var n=a[x](e),s=n.value}catch(t){l(t);return}n.done?o(s):Promise.resolve(s).then(u,d)}function E(a){return function(){var o=this,l=arguments;return new Promise(function(u,d){var x=a.apply(o,l);function e(s){c(x,u,d,e,n,"next",s)}function n(s){c(x,u,d,e,n,"throw",s)}e(void 0)})}}}}]);
