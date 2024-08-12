(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[4439,8239,5036,6118,7344,8160,1034,8056,1906,4501,1216,9256,9795,1006,7571,6025,9424,885,5007],{34439:(T,C,c)=>{c.r(C),c.d(C,{BaseEntityService:()=>_,DataServiceQueryExecutor:()=>m,DataServiceQueryExecutorModule:()=>E,EsqServerCacheLevels:()=>D,InvalidQueryResponseException:()=>R,InvalidResponseException:()=>Q,LegacyDataServiceQueryExecutor:()=>x,LegacyDataServiceQueryExecutorModule:()=>g,QueryExecutor:()=>u,QueryKind:()=>h,QuerySource:()=>S,ServerESQCacheParameters:()=>w});var a=c(75378),p=c(21322),i=c(27049);class _{constructor(e,t,r){this.queryExecutor=e,this._translateService=t,this.entityConverter=r,this.absentDataErrorKey="BaseSection.AbsentDataErrorMessage",this.primaryColumnName="Id"}_convertToErrorInfo(e){return{errorCode:null,message:e.message,stackTrace:e.stack}}_addColumnsToEsq(e){this.entityConverter.getEntityColumns({}).forEach(r=>{e.addSchemaColumn(r.path)})}_createDeleteQuery(){return new a.DeleteQuery(this.entitySchemaName)}getBaseErrorResponse(e){return(0,p.of)({success:!1,errorInfo:this._convertToErrorInfo(e),result:null})}handleResponse(e){return e.pipe((0,i.map)(()=>({success:!0,errorInfo:null,result:[]})),(0,i.catchError)(t=>(0,p.of)({success:!1,errorInfo:this._convertToErrorInfo(t),result:[]})))}getItemByIdEsq(e){const t=new a.EntitySchemaQuery(this.entitySchemaName);return this._addColumnsToEsq(t),t.filters.addSchemaColumnFilterWithParameter(a.ComparisonType.Equal,this.primaryColumnName,e),t}createGetAllItemsEsq(){const e=new a.EntitySchemaQuery(this.entitySchemaName);return this._addColumnsToEsq(e),e}getUpdateQuery(e){const t=new a.UpdateQuery(this.entitySchemaName);return this.entityConverter.getEntityColumns(e).forEach(s=>{this.primaryColumnName===s.path?t.filters.addSchemaColumnFilterWithParameter(a.ComparisonType.Equal,this.primaryColumnName,s.value):t.addColumn(s.path,s.value,s.type)}),t}getInsertQuery(e){const t=new a.InsertQuery(this.entitySchemaName);return this.entityConverter.getEntityColumns(e).forEach(s=>{this.primaryColumnName===s.path&&!s.value||t.addColumn(s.path,s.value,s.type)}),t}getDeleteQuery(e){return this.getDeleteQueryWithPrimaryColumnFilter(e.id)}getDeleteQueryWithPrimaryColumnFilter(e){const t=this._createDeleteQuery();return t.filters.addSchemaColumnFilterWithParameter(a.ComparisonType.Equal,this.primaryColumnName,e),t}loadAdditionalInfo(e){return(0,p.of)(e)}getItems(){const e=this.createGetAllItemsEsq();return this.queryExecutor.executeSelectQuery(e).pipe((0,i.mergeMap)(t=>this.loadAdditionalInfo(t)),(0,i.map)(t=>({success:!0,errorInfo:null,result:t.map(r=>this.entityConverter.getEntity(r))})),(0,i.catchError)(t=>this.getBaseErrorResponse(t)))}getItem(e){const t=this.getItemByIdEsq(e);return this.queryExecutor.executeSelectQuery(t).pipe((0,i.tap)(r=>{if(!(r&&r[0])){const s=this._translateService.instant(this.absentDataErrorKey);throw new Error(s)}}),(0,i.mergeMap)(r=>this.loadAdditionalInfo(r)),(0,i.map)(r=>({success:!0,errorInfo:null,result:[this.entityConverter.getEntity(r[0])]})),(0,i.catchError)(r=>this.getBaseErrorResponse(r)))}insertItem(e){const t=this.getInsertQuery(e),r=this.queryExecutor.executeInsertQuery(t);return this.handleResponse(r)}updateItem(e){const t=this.getUpdateQuery(e),r=this.queryExecutor.executeUpdateQuery(t);return this.handleResponse(r)}deleteItem(e){const t=this.getDeleteQuery(e),r=this.queryExecutor.executeDeleteQuery(t);return this.handleResponse(r)}deleteById(e){const t=this.getDeleteQueryWithPrimaryColumnFilter(e),r=this.queryExecutor.executeDeleteQuery(t);return this.handleResponse(r)}}var v=c(8239),y=c(74742),d=c(2876),o=c(94450),l=c(49475);class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275prov=o.\u0275\u0275defineInjectable({token:u,factory:u.\u0275fac});var h;(function(n){n[n.General=0]="General",n[n.Limited=1]="Limited"})(h||(h={}));var S;(function(n){n[n.Undefined=0]="Undefined",n[n.Filter=1]="Filter",n[n.FilterSummary=2]="FilterSummary"})(S||(S={}));var D;(function(n){n[n.Session=0]="Session",n[n.Workspace=1]="Workspace",n[n.Application=2]="Application"})(D||(D={}));class w{constructor(e=D.Session,t="",r=""){this._cacheLevel=e,this._cacheGroup=t,this._cacheItemName=r}getMetadata(){return{cacheLevel:this._cacheLevel,cacheGroup:this._cacheGroup,cacheItemName:this._cacheItemName}}}class R extends Error{constructor(e){super(`Query with config
${JSON.stringify(e.getMetadata())}
finished with error.`)}}class Q extends Error{constructor(e){const t=e?.error?.responseStatus?.Message||e?.responseStatus?.Message||e?.message;super(t),this.errorCode=e?.error?.responseStatus?.ErrorCode}}let x=class extends u{constructor(e,t,r){super(),this._sysSettingsService=e,this._httpClient=t,this._dataServiceUri=r,this._defaultDebounceTime=200,this._debounceTimeSysSettingName="QueryExecutorDebounceTime",this._requests=new p.Subject,a.ValidationUtilities.checkArgumentEmpty("_httpClient",t),a.ValidationUtilities.checkArgumentEmpty("_dataServiceUri",r)}_executeWritableQuery(e,t){const s={...e.getMetadata(),queryKind:h.General};return this._httpClient.post(t,s).pipe((0,i.catchError)(f=>{throw new Q(f)}),(0,i.tap)(f=>{if(!(f&&f.success))throw new R(e)}))}_getQueryUri(e){if(e instanceof a.SelectLocalizationQuery)return`${this._dataServiceUri}/SelectLocalizationQuery`;if(e instanceof a.EntitySchemaQuery)return`${this._dataServiceUri}/SelectQuery`;if(e instanceof a.InsertQuery)return`${this._dataServiceUri}/InsertQuery`;if(e instanceof a.UpdateQuery)return`${this._dataServiceUri}/UpdateQuery`;if(e instanceof a.DeleteQuery)return`${this._dataServiceUri}/DeleteQuery`;throw new Error("Unsupported query type")}_getBundleSettings(){var e=this;return(0,v.Z)(function*(){return e._sysSettingsService?{executionDebounceTime:(yield e._sysSettingsService.getByCodes([e._debounceTimeSysSettingName])).values[e._debounceTimeSysSettingName]?.value||e._defaultDebounceTime}:Promise.resolve({executionDebounceTime:e._defaultDebounceTime})})()}_prepareDebouncedResponsesStream(){if(this._responses)return;let e=0;const t=(0,i.buffer)(this._requests.pipe((0,i.switchMap)(()=>(0,p.from)(this._getBundleSettings())),(0,i.tap)(r=>e=r.executionDebounceTime),(0,i.debounceTime)(e)));this._responses=this._requests.pipe(t,(0,i.filter)(r=>!!r.length),(0,i.mergeMap)(r=>{const s=r.map(I=>I.id),f=r.map(I=>I.query);return this.executeBatchSelectQuery(f).pipe((0,i.map)(I=>s.reduce((q,M,A)=>q.set(M,I[A]),new Map)))}),(0,i.share)())}_executeThrottled(e){this._prepareDebouncedResponsesStream();const t={id:(0,a.generateGuid)(),query:e},r=this._responses.pipe((0,i.filter)(s=>s.has(t.id)),(0,i.map)(s=>s.get(t.id)),(0,i.take)(1));return r.subscribe(),this._requests.next(t),r}_executeImmediate(e){a.ValidationUtilities.checkArgumentEmpty("query",e);const t=this._getQueryUri(e),r=this._getQueryRequest(e);return this._httpClient.post(t,r).pipe((0,i.catchError)(s=>{throw new Q(s)}),(0,i.tap)(s=>{if(!s?.rows)throw new R(e)}),(0,i.map)(s=>this._toSelectQueryResponse(s)))}_toSelectQueryResponse(e){const t=this.getRowsFromResponse(e);return t.rowsAffected=e.rowsAffected,e.errorInfo&&(t.errorInfo=e.errorInfo),t}_getQueryRequest(e){const t=e.getMetadata();return e instanceof a.EntitySchemaQuery?{...t,queryKind:h.General,serverESQCacheParameters:new w().getMetadata(),queryOptimize:!1,useMetrics:!1,querySource:S.Undefined}:{...t,queryKind:h.General}}getRowsFromResponse(e){return e.rows}executeSelectQuery(e,t={throttled:!1}){return t.throttled?this._executeThrottled(e):this._executeImmediate(e)}executeInsertQuery(e){return this.execute(e)}executeUpdateQuery(e){return this.execute(e)}executeDeleteQuery(e){return this.execute(e)}execute(e){a.ValidationUtilities.checkArgumentEmpty("query",e);const t=this._getQueryUri(e);return this._executeWritableQuery(e,t)}executeBatchSelectQuery(e){if(a.ValidationUtilities.checkArgumentEmpty("queries",e),e.length===0)return(0,p.of)([]);const t=`${this._dataServiceUri}/BatchQuery`,r={items:[]};return r.items=e.map(s=>({...this._getQueryRequest(s),__type:"Terrasoft.Nui.ServiceModel.DataContract.SelectQuery"})),this._httpClient.post(t,r).pipe((0,i.catchError)(s=>{throw new Q(s)}),(0,i.tap)(s=>{if(!s||s.hasErrors)throw new Q(s)}),(0,i.map)(s=>s.queryResults.map(f=>this._toSelectQueryResponse(f))))}};x=(0,y.__decorate)([(0,y.__param)(0,(0,o.Optional)()),(0,y.__param)(2,(0,o.Inject)(l.DATA_SERVICE_URI)),(0,y.__metadata)("design:paramtypes",[a.SysSettingsService,d.HttpClient,String])],x);var U=c(33177);let m=class extends x{constructor(e,t,r,s){super(e,t,s),this._entityDeserializer=r}getRowsFromResponse(e){return this._entityDeserializer.deserializeEntities(e.rowConfig,e.rows)}};m.\u0275fac=function(e){return new(e||m)(o.\u0275\u0275inject(a.SysSettingsService,8),o.\u0275\u0275inject(d.HttpClient),o.\u0275\u0275inject(l.EntityDeserializer),o.\u0275\u0275inject(l.DATA_SERVICE_URI))},m.\u0275prov=o.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac}),m=(0,y.__decorate)([(0,U.CrtHandlerChainAdapter)({requestType:"crt.DataServiceQueryExecutor"}),(0,y.__metadata)("design:paramtypes",[a.SysSettingsService,d.HttpClient,l.EntityDeserializer,String])],m);class E{}E.\u0275fac=function(e){return new(e||E)},E.\u0275mod=o.\u0275\u0275defineNgModule({type:E}),E.\u0275inj=o.\u0275\u0275defineInjector({providers:[l.DATA_SERVICE_URI_PROVIDER,{provide:u,useClass:m}]});class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=o.\u0275\u0275defineNgModule({type:g}),g.\u0275inj=o.\u0275\u0275defineInjector({providers:[l.DATA_SERVICE_URI_PROVIDER,{provide:u,useFactory:(n,e,t)=>new x(n,e,t),deps:[[new o.Optional,a.SysSettingsService],d.HttpClient,l.DATA_SERVICE_URI]}]})},8239:(T,C,c)=>{c.d(C,{Z:()=>p});function a(i,_,v,y,d,o,l){try{var u=i[o](l),h=u.value}catch(S){v(S);return}u.done?_(h):Promise.resolve(h).then(y,d)}function p(i){return function(){var _=this,v=arguments;return new Promise(function(y,d){var o=i.apply(_,v);function l(h){a(o,y,d,l,u,"next",h)}function u(h){a(o,y,d,l,u,"throw",h)}l(void 0)})}}}}]);
