(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[4836],{34836:(ae,Z,f)=>{f.r(Z),f.d(Z,{CrtReusableSchemaComponent:()=>V,SCHEMA_COMPONENT_INJECTION_TOKEN:()=>te,SchemaCacheInitializerService:()=>w,SchemaComponent:()=>I,SchemaConvertersRegistryService:()=>y,SchemaInitializerService:()=>M,SchemaModule:()=>T,SchemaViewModelGenerator:()=>P});var $=f(31134),W=f(77207),v=f(34038),g=f(14537),C=f(52045),c=f(24709),m=f(49475),h=f(21322),s=f(94450);class E{constructor(e,t){this._macrosHandlerService=e,this._metadataModifierService=t}crtOnMetaDataInit(e){return(0,h.lastValueFrom)(this._macrosHandlerService.handleResourceMacros(e,e.resources,{setPropertyFn:t=>this._metadataModifierService.updateProperty(t)}),{defaultValue:null})}crtOnViewModelInit(e,t,r){return(0,h.lastValueFrom)(this._macrosHandlerService.handleResourceMacros(e,r.Resources,{setPropertyFn:a=>this._metadataModifierService.updateProperty(a)}),{defaultValue:null})}}E.\u0275fac=function(e){return new(e||E)(s.\u0275\u0275inject(m.MacrosHandlerService),s.\u0275\u0275inject(c.MetadataModifierService))},E.\u0275prov=s.\u0275\u0275defineInjectable({token:E,factory:E.\u0275fac});var _=f(8239);class b{_setPrimaryDataSource(e){e.modelConfig&&(e.modelConfig.primaryDataSourceName=(0,C.resolveSchemaPrimaryDataSource)(e))}_setScopes(e){(0,C.setDataSourcesScope)(e)}crtOnMetaDataInit(e){var t=this;return(0,_.Z)(function*(){const r=e;return t._setPrimaryDataSource(r),t._setScopes(r),e})()}}b.\u0275fac=function(e){return new(e||b)},b.\u0275prov=s.\u0275\u0275defineInjectable({token:b,factory:b.\u0275fac});class D{constructor(e,t){this._macrosHandlerService=e,this._metadataModifierService=t}_handleMacros(e,t){return(0,h.lastValueFrom)(this._macrosHandlerService.handleMacros(e,t,t,{setPropertyFn:r=>this._metadataModifierService.updateProperty(r)}),{defaultValue:null})}crtOnMetaDataInit(e){var t=this;return(0,_.Z)(function*(){let r=e;return r=yield t._handleMacros("PrimaryDataSourceName",r),r=yield t._handleMacros("DataSourceEntityName",r),r=yield t._handleMacros("DataSourceModuleCaption",r),r})()}}D.\u0275fac=function(e){return new(e||D)(s.\u0275\u0275inject(m.MacrosHandlerService),s.\u0275\u0275inject(c.MetadataModifierService))},D.\u0275prov=s.\u0275\u0275defineInjectable({token:D,factory:D.\u0275fac});class A{constructor(e,t){this._macrosHandlerService=e,this._metadataModifierService=t}crtOnViewModelInit(e,t,r){return(0,h.lastValueFrom)(this._macrosHandlerService.handleMacros("MacrosTemplateString,ResourceString",e,{...r,...r.Resources},{setPropertyFn:a=>this._metadataModifierService.updateProperty(a)}),{defaultValue:null})}}A.\u0275fac=function(e){return new(e||A)(s.\u0275\u0275inject(m.MacrosHandlerService),s.\u0275\u0275inject(c.MetadataModifierService))},A.\u0275prov=s.\u0275\u0275defineInjectable({token:A,factory:A.\u0275fac});class j{crtOnMetaDataInit(e){const t=e,r=t.modelConfig,a=r?.dataSources?.[m.PAGE_PARAMETERS_DATA_SOURCE_NAME];if(a){const i=a.config;i.parameters=t.parameters,i.schemaName=t.name,r.loadingConfig=Object.assign(r.loadingConfig??{},{[m.PAGE_PARAMETERS_DATA_SOURCE_NAME]:{type:m.DataSourceLoadingType.OnInit}})}return Promise.resolve(t)}}j.\u0275fac=function(e){return new(e||j)},j.\u0275prov=s.\u0275\u0275defineInjectable({token:j,factory:j.\u0275fac});var S=f(75378);class O{_getAttributesConfig(e){const t=e?.attributes??{};return Object.entries(t)}_getDataSourceBinding(e){const t=e.modelConfig?.path;let r="",a="";if(t){const i=t.split(".");r=i.shift(),a=i.join(".")}return{dataSourceName:r,attributePath:a}}_getSupportedDataValueTypes(e){return S.InterfaceDesignerItemRegistry.get(e)?.dataValueTypes??[]}_getBoundViewConfigs(e,t){const r=e.viewConfig;return m.MetadataSchemaUtils.getViewConfigInfoByFilter(a=>{const i=S.ViewElementRegistry.getFormControlRelatesAttribute(a.type),n=a[i]??"";return n.startsWith("$")?n.substring(1)===t:!1},r)}_getDataValueTypeByViewConfig(e,t){const r=this._getBoundViewConfigs(e,t);if(r.length===0)return null;const a=r.map(({viewConfig:i})=>this._getSupportedDataValueTypes(i.type)).flat();return a.length===1?a[0]:(0,c.getGeneralDataValueType)(a,S.DataValueType.Text)}_getBoundDataSourceAttribute(e,t){var r=this;return(0,_.Z)(function*(){const a=r._getDataSourceBinding(e),i=t.find(l=>l.name===a.dataSourceName);if(!i)return null;const n=yield(0,h.firstValueFrom)(i.getSchema());return n?n.findAttributeByName(a.attributePath):null})()}_updateAttributeDataValueType(e,t,r,a){var i=this;return(0,_.Z)(function*(){if("dataValueTypeName"in r)return;const n=yield i._getBoundDataSourceAttribute(r,a),l=n?n.dataValueType:i._getDataValueTypeByViewConfig(e,t);l!=null&&(r.dataValueTypeName=i._getDataValueTypeName(l))})()}_getDataValueTypeName(e){return S.DataValueType[e]}_getInlineViewModelConfig(e){return e.viewModelConfig}_setAttributesDataValueType(e,t,r){var a=this;return(0,_.Z)(function*(){const n=a._getAttributesConfig(t).map(([l,u])=>{const p=a._getInlineViewModelConfig(u);return p?a._setAttributesDataValueType(e,p,r):a._updateAttributeDataValueType(e,l,u,r)});yield Promise.all(n)})()}crtOnModelInit(e,t){var r=this;return(0,_.Z)(function*(){const a=e;return yield r._setAttributesDataValueType(a,a.viewModelConfig,t),e})()}}O.\u0275fac=function(e){return new(e||O)},O.\u0275prov=s.\u0275\u0275defineInjectable({token:O,factory:O.\u0275fac});class N{constructor(){this._exclusions=["crt.TabPanelHeader","crt.ToggleContainer"]}crtOnMetaDataInit(e){const t=e;return m.MetadataSchemaUtils.getViewConfigInfoByFilter(a=>!Object.prototype.hasOwnProperty.call(a,"name"),t.viewConfig).forEach(({viewConfig:a},i)=>{this._exclusions.includes(a.type)||(a.name="AutogeneratedName"+(i+1))}),Promise.resolve(e)}}N.\u0275fac=function(e){return new(e||N)},N.\u0275prov=s.\u0275\u0275defineInjectable({token:N,factory:N.\u0275fac});var J=f(41307);class F{get isProcessingDisabled(){return(0,h.lastValueFrom)(this._featureService.getFeatureState(this._autoBindToDisabled))}constructor(e){this._featureService=e,this._autoBindToDisabled="AutoBindToDisabled",this._readonlyPropertyName="readonly"}crtOnMetaDataInit(e){var t=this;return(0,_.Z)(function*(){if(yield t.isProcessingDisabled)return e;const r=e;return m.MetadataSchemaUtils.getViewConfigInfoByFilter(i=>(0,S.isComponentPropertyBindable)(i.type,t._readonlyPropertyName),r.viewConfig).forEach(({viewConfig:i})=>{Object.prototype.hasOwnProperty.call(i,"readonly")||(Object.prototype.hasOwnProperty.call(i,"disabled")?i.readonly=i.disabled:i.readonly=!1)}),e})()}}F.\u0275fac=function(e){return new(e||F)(s.\u0275\u0275inject(J.FeatureService))},F.\u0275prov=s.\u0275\u0275defineInjectable({token:F,factory:F.\u0275fac});class x{get isProcessingDisabled(){return(0,h.lastValueFrom)(this._featureService.getFeatureState(this._autoBindToDisabled))}constructor(e){this._featureService=e,this._autoBindToDisabled="AutoBindToDisabled"}_setAttributeViewItemName(e,t,r){const a=t.replace("$",""),i=e.viewModelConfig.attributes||{};i[a]={...i[a],viewItemName:r},e.viewModelConfig.attributes=i}_createPropertiesBindingAttribute(e,t){const r=e.viewModelConfig.attributes||{};r[t]={},e.viewModelConfig.attributes=r}_processViewConfigBinding(e,t){const r=S.ViewElementRegistry.getFormControlRelatesAttribute(t.type);if(r!==null&&t[r]){const a=t[r];this._setAttributeViewItemName(e,a,t.name),t.bindTo=a}else{const a=(0,m.generatePropertiesAttributeName)(t.name);this._createPropertiesBindingAttribute(e,a),t.bindTo=`$${a}`}}_updateAttributeProperties(e,t){const r=S.ViewElementRegistry.getViewElementPropertiesDefaultValues(t.type);g.ViewElementConfigUtils.updateAttributeProperties(t,e,r)}crtOnMetaDataInit(e){var t=this;return(0,_.Z)(function*(){if(yield t.isProcessingDisabled)return e;const r=e,a=r.viewConfig;return m.MetadataSchemaUtils.getViewConfigInfoByFilter(n=>!!n.name,a).forEach(({viewConfig:n})=>{n.bindTo||t._processViewConfigBinding(r,n),t._updateAttributeProperties(r,n)}),e})()}}x.\u0275fac=function(e){return new(e||x)(s.\u0275\u0275inject(J.FeatureService))},x.\u0275prov=s.\u0275\u0275defineInjectable({token:x,factory:x.\u0275fac});var L=f(46338),Y=f(85431),z=f(491),d=f(27049),H=f(33177),k=f(97600);function q(){return[c.SchemaParametersStore,{provide:c.AbstractModelLifecycleHookNotificationService,useExisting:c.ContextHandlerChainModelLifecycleHookNotificationService},c.ContextHandlerChainModelLifecycleHookNotificationService,z.Wn,{provide:c.ViewModelDataDelayer,useExisting:z.Wn}]}class y extends g.ConverterRegistryService{constructor(){super(...arguments),this._schemaConverters=new Map}get(e,t){return this._schemaConverters.has(e)?this._schemaConverters.get(e):super.get(e,t)}register(e,t){(0,S.checkTypeNameFormat)(e,"ConverterTypeName"),(0,S.checkCrtTypeNamePascalCase)(e),this._schemaConverters.set(e,new t)}clear(){this.clearSchemaConverters(),super.clear()}clearSchemaConverters(){this._schemaConverters.clear()}}y.\u0275fac=function(){let o;return function(t){return(o||(o=s.\u0275\u0275getInheritedFactory(y)))(t||y)}}(),y.\u0275prov=s.\u0275\u0275defineInjectable({token:y,factory:y.\u0275fac});class B{constructor(e,t){this._performanceService=e,this._featureValues=t,this._subscription=new h.Subscription,this._handlerTypesByRequestType=new Map;for(const[,r]of S.InternalRequestHandlerRegistry.requestHandlersMap)this._registerHandler(r);this._subscription.add(S.InternalRequestHandlerRegistry.onAddRequestHandler((r,a)=>{this._registerHandler(a)})),this._subscription.add(S.InternalRequestHandlerRegistry.onRemoveRequestHandler((r,a)=>{this._removeHandler(a)}))}_registerHandler(e){const{type:t,requestType:r}=e.instanceConfig;let a=this._handlerTypesByRequestType.get(r);a||(a=new Set,this._handlerTypesByRequestType.set(r,a)),a.add(t)}_removeHandler(e){const{type:t,requestType:r}=e.instanceConfig;this._handlerTypesByRequestType.get(r).delete(t)}_getHandlersMetadata(e,t){const r=new Set;e.forEach(n=>{this._handlerTypesByRequestType.get(n)?.forEach(u=>r.add(u))});const a=new Set,i=(0,C.getRequestScopes)(t);return r.forEach(n=>{const l=S.InternalRequestHandlerRegistry.requestHandlersMap.get(n);l&&l.instanceConfig.lazy&&(0,S.matchScopes)(l.instanceConfig.scopes,i)&&a.add(l)}),a}load(e){if(this._featureValues.DisableFreedomUiLazyLoading)return S.LazyModulesManager.instance.loadAll();const t=new Set;return this._performanceService.measure("SEARCHING_SCHEMA_LAZY_ITEMS",()=>{const{viewElements:r,requests:a,converters:i,validators:n}=(0,C.getUsedItems)(e);r.forEach(u=>{const p=S.ViewElementRegistry.viewElements.get(u);p?.lazy&&t.add(p.lazyModuleRef)}),i.forEach(u=>{if(S.ConverterRegistry.has(u)){const p=S.ConverterRegistry.get(u);p?.lazy&&t.add(p.lazyModuleRef)}}),n.forEach(u=>{const p=S.ValidatorRegistry.items.get(u);p?.lazy&&t.add(p.lazyModuleRef)}),this._getHandlersMetadata(a,e).forEach(u=>t.add(u.instanceConfig.lazyModuleRef))}),this._performanceService.measureCallback("LOADING_SCHEMA_LAZY_ITEMS",()=>Promise.all(Array.from(t).map(r=>r.loadAndBootstrap())))}ngOnDestroy(){this._subscription.unsubscribe()}}B.\u0275fac=function(e){return new(e||B)(s.\u0275\u0275inject(m.MeasurePerformanceService),s.\u0275\u0275inject(m.FEATURE_VALUES))},B.\u0275prov=s.\u0275\u0275defineInjectable({token:B,factory:B.\u0275fac,providedIn:"root"});class M{constructor(){this._viewModelDiffPatchService=(0,s.inject)(c.ViewModelDiffPatchService),this.injector=(0,s.inject)(s.Injector),this.injectionContextService=(0,s.inject)(m.CrtInjectionContextsService),this.modelGenerator=(0,s.inject)(c.ModelGenerator),this.viewModelGenerator=(0,s.inject)(c.BaseViewModelGenerator),this.schemaConverterRegistry=(0,s.inject)(y),this.schemaValidatorFactory=(0,s.inject)(c.SchemaValidatorFactory),this.schemaValidatorTypeResolver=(0,s.inject)(c.SchemaValidatorTypeResolver),this.schemaValidatorRegistryService=(0,s.inject)(c.SchemaValidatorRegistryService),this.schemaAccessService=(0,s.inject)(m.SchemaAccessService),this.entitySchemaRepository=(0,s.inject)(m.EntitySchemaRepository),this.featureValues=(0,s.inject)(m.FEATURE_VALUES),this.window=(0,s.inject)(H.WINDOW_TOKEN),this.crtModulesLoader=(0,s.inject)(B),this.preprocessorsRunnerFactory=(0,s.inject)(c.MetadataPreprocessorsRunnerFactory),this.measurePerformanceService=(0,s.inject)(m.MeasurePerformanceService),this._shouldSetupAdditionalProviders=this.featureValues.UseSchemaOutletReuseViewStrategy&&(0,k.get)(this.window,["Terrasoft","isAngularHost"])}_init(e,t){var r=this;return this.registerSchemaElements(e),t().pipe(this.measurePerformanceService.measure$("SchemaInitializer.init"),(0,d.switchMap)(function(){var a=(0,_.Z)(function*([i,n,l,u]){const p=!(yield r.preprocessorsRunner.getIsPreventCaching());return{schema:i,models:n,viewModel:l,isBundleCacheable:p,intermediatePreprocessedBundle:u}});return function(i){return a.apply(this,arguments)}}()))}_getViewModelPatch(e,t,r){return this._viewModelDiffPatchService.diff(e,t,r)}_preprocessOnMetadataInit(e){return(0,h.from)(this.preprocessorsRunner.onMetaDataInit(e))}_preprocessOnModelInit(e,t){return(0,h.from)(this.preprocessorsRunner.onModelInit(e,t))}_preprocessOnViewModelInit(e,t,r){return(0,h.from)(this.preprocessorsRunner.onViewModelInit(e,t,r))}_generateModel(e,t){return e.modelConfig?this.modelGenerator.generate(e.modelConfig,t):(0,h.of)([])}_generateViewModel(e,t,r,a,i,n){return this.viewModelGenerator.generate({viewModelConfig:e.viewModelConfig,modelConfig:e.modelConfig,resources:e.resources,models:t,scopes:e.tag?.split(".")||[],modelInitConfigs:r,handlers:e.handlers,schemaName:a,businessRulesActive:!0},n).pipe((0,d.tap)(l=>{l._injectionContext.inject(c.ContextHandlerChainModelLifecycleHookNotificationService).setContext(l)}))}registerSchemaElements(e){this.registerConverters(e.converters),this.registerValidators(e.validators)}getMetadataPreprocessedSchema(e,t){return this._preprocessOnMetadataInit(e).pipe(this.measurePerformanceService.measure$(`SchemaInitializer.PreprocessMetadataInit.${e.name}`))}getModels(e,t,r){return this._generateModel(e,r).pipe(this.measurePerformanceService.measure$(`SchemaInitializer.generateModels.${e.name}`))}getModelPreprocessedSchema(e,t,r){return this._preprocessOnModelInit(e,t).pipe(this.measurePerformanceService.measure$(`SchemaInitializer.PreprocessModelInit.${e.name}`))}getViewModel(e,t,r,a,i,n){return this._generateViewModel(e,t,r,a,i,n).pipe(this.measurePerformanceService.measure$(`SchemaInitializer.generateViewModel.${a}`))}getViewModelPreprocessedSchema(e,t,r,a){return this._preprocessOnViewModelInit(e,t,r).pipe(this.measurePerformanceService.measure$(`SchemaInitializer.PreprocessViewModelInit.${e.name}`))}_getModelPreprocessedSchemaData(e,t,r){return r().pipe((0,d.switchMap)(i=>{const n=this.getModelPreprocessedSchema(e,i,t);return(0,h.combineLatest)([n,(0,h.of)(i)])}))}_getViewModelPreprocessedSchemaData(e,t,r,a){const i=(0,k.cloneDeep)(e);return a().pipe((0,d.switchMap)(l=>{const u=this.getViewModelPreprocessedSchema(e,r,l,t);return(0,h.combineLatest)([u,(0,h.of)(r),(0,h.of)(l),(0,h.of)(i)])}))}_executeCheckEntitySchemaRights(e){var t=this;return(0,_.Z)(function*(){if(!e.modelConfig)return Promise.resolve();const r=t._getPrimaryDataSourceSchemaName(e);if(r){const a=yield(0,h.firstValueFrom)(t.entitySchemaRepository.getSchemaByName(r).pipe((0,d.take)(1),(0,d.catchError)(()=>(0,h.of)(void 0))));return a&&(yield t.schemaAccessService.checkAccess(a)),Promise.resolve()}})()}_getPrimaryDataSourceSchemaName(e){const t=e.modelConfig.primaryDataSourceName;return t?e.modelConfig.dataSources[t].config?.entitySchemaName:Object.values(e.modelConfig.dataSources).find(r=>r.scope===S.DataSourceScope.Page&&r.type==="crt.EntityDataSource")?.config?.entitySchemaName}_createInjectionContext(e,t){const r=[{provide:c.AbstractValidatorTypeResolver,useValue:this.schemaValidatorTypeResolver},{provide:c.SCOPE_NAME,useValue:e},{provide:c.INJECTION_CONTEXT,useFactory:()=>n},...this._shouldSetupAdditionalProviders?q():[]],a=s.Injector.create({providers:r,parent:this.injector}),i=`${e}_${(0,S.generateGuid)()}`,n=this.injectionContextService.createContext(i,a);return t.forEach(l=>n.addLazyModule(l)),(0,S.callOnContextCreateHooks)(n),n}_initPreprocessorsRunner(e){const t=e.get(c.CRT_METADATA_PREPROCESSOR,[]),r=(0,k.uniqBy)(t,a=>a.constructor??a);this.preprocessorsRunner=this.preprocessorsRunnerFactory.createRunner(r)}init(e,t,r=null){var a=this;return(0,h.from)(this.crtModulesLoader.load(e)).pipe((0,d.switchMap)(i=>{const n=this._createInjectionContext(t,i),l=n.inject(s.Injector);return this._initPreprocessorsRunner(l),this._init(e,()=>this.getMetadataPreprocessedSchema(e,t).pipe((0,d.switchMap)(function(){var u=(0,_.Z)(function*(p){return yield a._executeCheckEntitySchemaRights(p),(0,h.firstValueFrom)(a._getModelPreprocessedSchemaData(p,t,()=>a.getModels(p,t,l)))});return function(p){return u.apply(this,arguments)}}()),(0,d.switchMap)(([u,p])=>this._getViewModelPreprocessedSchemaData(u,t,p,()=>{const R=u?.modelConfig?.primaryDataSourceName,U=u?.modelConfig?.loadingConfig,re=(0,c.addDefaultActionForRootModels)(r,p,R,U);return this.getViewModel(u,p,re,t,n,l)})))).pipe((0,d.map)(u=>({...u,modules:i})))}))}refresh(e,t){const{models:r,viewModel:a,rawBundle:i,intermediatePreprocessedBundle:n}=t;return(0,h.from)(this.crtModulesLoader.load(i)).pipe(this.measurePerformanceService.measure$(`SchemaInitializer.Refresh.${e}`),(0,d.switchMap)(l=>{const u=a._injectionContext;l.forEach(R=>u.addLazyModule(R)),(0,S.callOnContextUpdateHooks)(u);const p=u.inject(s.Injector);return this._initPreprocessorsRunner(p),this._init(i,()=>this.getMetadataPreprocessedSchema(i,e).pipe((0,d.switchMap)(R=>this._getModelPreprocessedSchemaData(R,e,()=>(0,h.of)(r))),(0,d.switchMap)(([R])=>this._getViewModelPreprocessedSchemaData(R,e,r,()=>this._getViewModelPatch(n,R,p).pipe((0,d.switchMap)(U=>a._hotSwap(U)),(0,d.map)(()=>a))))))}))}registerConverters(e){this.schemaConverterRegistry.clearSchemaConverters(),Object.entries(e||{}).forEach(([t,r])=>{this.schemaConverterRegistry.register(t,class{constructor(){this.convert=r}})})}registerValidators(e){this.schemaValidatorRegistryService.clearSchemaValidators(),Object.values(e||{}).forEach(r=>{const a=(0,k.omit)(r,["validator"]);this.schemaValidatorRegistryService.register(a,this.schemaValidatorFactory.create(r))})}}M.\u0275fac=function(e){return new(e||M)},M.\u0275prov=s.\u0275\u0275defineInjectable({token:M,factory:M.\u0275fac});class w extends M{constructor(){super(),this._destroyed$=new h.Subject,this._schemaCacheService=(0,s.inject)(C.SchemaCacheService),this._schemaChangeListenerService=(0,s.inject)(m.SchemaChangeListenerService),this.zone=(0,s.inject)(s.NgZone),this._schemaChangeListenerService.schemaChanged$.pipe((0,d.takeUntil)(this._destroyed$)).subscribe(e=>{e.schemaType===m.SchemaTypes.ClientUnitSchema&&this._schemaCacheService.invalidateClientUnitSchema(e.name),e.schemaType===m.SchemaTypes.EntitySchema&&this._schemaCacheService.invalidateByDataSchemaName(e.name)})}_getSnapshot(e,t){var r=this;return(0,_.Z)(function*(){if(yield r.preprocessorsRunner.getIsPreventCaching())return null;const i=r._schemaCacheService.getSchemaSnapshots(e);return i?i[t]:null})()}_setSnapshot(e,t,r){var a=this;return(0,_.Z)(function*(){(yield a.preprocessorsRunner.getIsPreventCaching())||a._schemaCacheService.setCacheSnapshot({schemaName:t,hook:r,snapshot:e})})()}getMetadataPreprocessedSchema(e,t){const r=this._schemaCacheService.isCached(t);return(0,h.from)(this._getSnapshot(t,m.SchemaProcessingLifecycleHooks.METADATA_INIT)).pipe((0,d.switchMap)(a=>r&&a?(0,h.of)(a):super.getMetadataPreprocessedSchema(e).pipe((0,d.tap)(i=>this._setSnapshot(i,t,m.SchemaProcessingLifecycleHooks.METADATA_INIT)))))}getModels(e,t,r){return super.getModels(e,t,r).pipe((0,d.tap)(a=>{const i=a.map(n=>n.dataSchemaName);this._schemaCacheService.setDataSchemaDepsToCache(t,i)}))}getModelPreprocessedSchema(e,t,r){const a=this._schemaCacheService.isCached(r);return(0,h.from)(this._getSnapshot(r,m.SchemaProcessingLifecycleHooks.MODEL_INIT)).pipe((0,d.switchMap)(i=>a&&i?(0,h.of)(i):super.getModelPreprocessedSchema(e,t).pipe((0,d.tap)(n=>this._setSnapshot(n,r,m.SchemaProcessingLifecycleHooks.MODEL_INIT)))))}getViewModelPreprocessedSchema(e,t,r,a){const i=this._schemaCacheService.isCached(a);return(0,h.from)(this._getSnapshot(a,m.SchemaProcessingLifecycleHooks.VIEW_MODEL_INIT)).pipe((0,d.switchMap)(n=>i&&n?(0,h.of)(n):super.getViewModelPreprocessedSchema(e,t,r).pipe((0,d.tap)(l=>this._setSnapshot(l,a,m.SchemaProcessingLifecycleHooks.VIEW_MODEL_INIT)))))}ngOnDestroy(){this._destroyed$.next(),this._destroyed$.complete()}}w.\u0275fac=function(e){return new(e||w)},w.\u0275prov=s.\u0275\u0275defineInjectable({token:w,factory:w.\u0275fac});class G{constructor(){this._handlerChain=S.HandlerChainService.instance,this._registered=new Map}_register(e,t){const r=[];t.forEach(a=>{const i=class extends S.BaseRequestHandler{handle(n){return a.handler(n,this.next)}};r.push(this._handlerChain.register({requestType:a.request,createHandler:()=>new i,source:{type:S.HandlerSourceType.Schema,...a.source},scopes:[e]}))}),this._registered.set(e,{schemaInstancesCount:1,unregister:()=>r.forEach(a=>a())})}_unregister(e){this._registered.get(e).unregister(),this._registered.delete(e)}_unregisterAll(){for(const e of this._registered.keys())this._unregister(e)}onSchemaInstanceCreated(e,t){const r=this._registered.get(e);r?r.schemaInstancesCount++:this._register(e,t)}onSchemaInstanceDestroyed(e){const t=this._registered.get(e);t.schemaInstancesCount--,t.schemaInstancesCount===0&&this._unregister(e)}ngOnDestroy(){this._unregisterAll()}}G.\u0275fac=function(e){return new(e||G)},G.\u0275prov=s.\u0275\u0275defineInjectable({token:G,factory:G.\u0275fac,providedIn:"root"});class P extends c.ViewModelGenerator{_hookOnDestroy(e,t){e.destroy=new Proxy(e.destroy,{apply:(r,a)=>r.apply(a).pipe((0,d.tap)({next:t}))})}initDependencies(){super.initDependencies(),this._schemaHandlersManager=this.injector.get(G)}generateLifecycleHooks(e,t){const{handlers:r,schemaName:a}=t;this._schemaHandlersManager.onSchemaInstanceCreated(a,r??[]),super.generateLifecycleHooks(e,t),this._hookOnDestroy(e,()=>this._schemaHandlersManager.onSchemaInstanceDestroyed(a))}}P.\u0275fac=function(){let o;return function(t){return(o||(o=s.\u0275\u0275getInheritedFactory(P)))(t||P)}}(),P.\u0275prov=s.\u0275\u0275defineInjectable({token:P,factory:P.\u0275fac,providedIn:"root"});function K(){return[y,{provide:g.ConverterRegistryService,useExisting:y},c.SchemaValidatorRegistryService,c.SchemaValidatorTypeResolver,M,w,c.ViewModelDiffPatchService,C.SchemaPartsService,C.SchemaService,{provide:g.BINDING_CONTEXT,useValue:null},{provide:v.DATA_GRID_STATE_HANDLER,useClass:Y.ex},L.DATA_GRID_CELL_VIEW_CONFIG_CREATOR_FACTORY_PROVIDER,{provide:v.DataGridColumnSelectionService,useFactory:o=>new L.SchemaDataGridColumnSelectionService(o),deps:[L.StructureExplorerDataGridColumnSelectionService]},L.StructureExplorerDataGridColumnSelectionService,{provide:v.DATA_GRID_COLUMN_EDIT_HANDLER,useClass:L.SchemaDataGridColumnEditHandler},v.FolderTreeUserProfileService,{provide:c.BaseViewModelGenerator,useClass:P},c.ModelGenerator,{provide:c.DataSourceFactoryService,useClass:z.Q1},v.SummaryItemColumnProvider,v.SummaryItemEditingService,{provide:v.BaseSummaryItemColumnProvider,useClass:v.SummaryItemColumnProvider},v.SummaryItemSetupService]}var X=f(99852);function Q(o,e){if(o&1&&(s.\u0275\u0275elementContainerStart(0)(1,1),s.\u0275\u0275elementContainer(2,2),s.\u0275\u0275elementContainerEnd()()),o&2){const t=s.\u0275\u0275nextContext();s.\u0275\u0275advance(1),s.\u0275\u0275property("crtViewModel",t.schemaState.viewModel),s.\u0275\u0275advance(1),s.\u0275\u0275property("modules",t.schemaState==null?null:t.schemaState.modules)("viewConfig",t.schemaState==null?null:t.schemaState.viewConfig)("selector",t.schema)}}class I{set parameters(e){this.getSchemaParametersStore().setValues(e)}set schema(e){this._schema=e}get schema(){return this._schema}constructor(e,t){this._injector=e,this._document=t,this._destroyed$=new h.Subject,this._schemaName$=new h.Subject,this._partsChangedSubscription=new h.Subscription,this._init$=new h.ReplaySubject(1),this._addClsToHost=!0,this._dataItemMarker="crt-schema-component",this._addFlexFullHeightToHost=!0,this.modelInitConfigs=null,this.schemaStateGenerated=new s.EventEmitter,this.parametersChanged=new s.EventEmitter,this.schemaExceptionThrown=new s.EventEmitter,this.schemaPartsService=this._injector.get(C.SchemaPartsService),this._schemaCacheService=this._injector.get(C.SchemaCacheService),this.viewModelDiffPatchService=this._injector.get(c.ViewModelDiffPatchService),this._schemaService=this._injector.get(C.SchemaService),this._cdr=this._injector.get(s.ChangeDetectorRef),this.customEventService=this._injector.get(H.CustomEventService),this._isRtl=this._injector.get(X.Directionality)?.value==="rtl",this.zone=this._injector.get(s.NgZone),this._featureValues=this._injector.get(m.FEATURE_VALUES),this._enableCustomSchemaStylesFeature=this._featureValues.EnableCustomSchemaStyles,this._schemaInitializerService=this._injector.get(this._featureValues.DisableRuntimeSchemaCaching?M:w),this._measurePerformanceService=this._injector.get(m.MeasurePerformanceService),this._subscribeToSchemaNameChange(),this._subscribeToSchemaParts()}_subscribeToSchemaNameChange(){this._schemaName$.pipe(this._measurePerformanceService.measure$(`SchemaComponent.schemaNameChange.${this.schema}`),(0,d.tap)(()=>this._init$.next(!1)),(0,d.switchMap)(e=>this.schemaPartsService.init(e)),(0,d.tap)(e=>this._schemaService.init(e)),(0,H.runOutsideZone)(this.zone),(0,H.switchMapWith)(e=>this._schemaInitializerService.init(e,this.schema,this.modelInitConfigs)),(0,d.tap)(([e,{schema:t,models:r,viewModel:a,isBundleCacheable:i,intermediatePreprocessedBundle:n,modules:l}])=>{this.init(e,t,a,r,i,n,l),this._init$.next(!0)}),(0,H.runInZone)(this.zone),(0,d.tap)(()=>{this._cdr.reattach(),this._cdr.detectChanges()}),(0,d.takeUntil)(this._destroyed$)).subscribe({error:e=>{this.schemaExceptionThrown.emit(e),console.error(e)}})}_onSchemaPartsChanged(e,t){var r=this;return(0,_.Z)(function*(){if(r._schemaCacheService.invalidateClientUnitSchema(r.schema),r._schemaService.init(e),r.schemaState.rawBundle=e,Boolean(t)===!1){const a=r.schemaState.preprocessedBundle;yield r._updatePreprocessedBundles(),r._featureValues.DisablePreprocessRefreshSchema&&(yield r.updateViewModel(a,r.schemaState.preprocessedBundle)),r.updateView(r.schemaState.preprocessedBundle),r.emitSchemaStateGenerated()}})()}_subscribeToSchemaParts(){var e=this;this._partsChangedSubscription.add(this.schemaPartsService.subscribeOnPartsChanged(function(){var t=(0,_.Z)(function*({bundle:r,silent:a}){return(0,h.firstValueFrom)(e._init$.pipe((0,h.filter)(i=>i),(0,d.switchMap)(()=>e._onSchemaPartsChanged(r,a))))});return function(r){return t.apply(this,arguments)}}()))}_updatePreprocessedBundles(){const e=this._featureValues.DisablePreprocessRefreshSchema?this._schemaInitializerService.init(this.schemaState.rawBundle,this.schema).pipe((0,H.switchMapWithout)(t=>t.viewModel.destroy())):this._schemaInitializerService.refresh(this.schema,this.schemaState);return(0,h.firstValueFrom)(e.pipe((0,d.tap)(({schema:t,intermediatePreprocessedBundle:r})=>{this.schemaState.preprocessedBundle=t,this.schemaState.intermediatePreprocessedBundle=r}),(0,d.map)(()=>{})))}_onSchemaNameChanged(e){this.schema=e,this._schemaName$.next(this.schema)}onSchemaStateRestored(){this._init$.next(!1),this._cdr.reattach(),this.schema=this.schemaState.scope,this.schemaPartsService.restoreState(this.schemaState.schemaPartsState),this._schemaService.init(this.schemaState.rawBundle),this._schemaInitializerService.registerConverters(this.schemaState.converters),this._schemaInitializerService.registerValidators(this.schemaState.validators),this.applyCustomStyles(),this.emitSchemaStateGenerated(),this.subscribeParametersChanged(),this._init$.next(!0)}emitSchemaStateGenerated(){this._generatedSchemaState=this.schemaState,this.schemaStateGenerated.next(this.schemaState),this.customEventService.createOutboundChannel("8xSchemaStateGenerated").next(void 0)}applyCustomStyles(){if(!this._enableCustomSchemaStylesFeature)return;const e=this.schemaState.styles;if(!!e?.length){if(!this._stylesElement){const t=this._document.createElement("style");t.id=`${this.schema}_styles`,this._document.head.appendChild(t),this._stylesElement=t}this._stylesElement.innerHTML=e.join(`
`)}}removeCustomStyles(){this._stylesElement&&this._document.head.removeChild(this._stylesElement)}init(e,t,r,a,i,n,l){this._destroyView(),this.schemaState={models:a,viewModel:r,viewConfig:t.viewConfig,handlers:t.handlers,scope:this.schema,converters:t.converters,validators:t.validators,styles:t.styles,rawBundle:e,preprocessedBundle:t,schemaPartsState:this.schemaPartsService.getState(),intermediatePreprocessedBundle:n,modules:l},this.applyCustomStyles(),this.emitSchemaStateGenerated(),this.subscribeParametersChanged()}updateView(e){this.schemaState.viewConfig=e.viewConfig,this.schemaState.styles=e.styles,this.applyCustomStyles(),this._cdr.detectChanges()}updateViewModel(e,t){var r=this;return(0,_.Z)(function*(){const a=yield(0,h.firstValueFrom)(r.getViewModelPatch(e,t));return(0,h.firstValueFrom)(r.schemaState.viewModel._hotSwap(a))})()}getViewModelPatch(e,t){return this.viewModelDiffPatchService.diff(e,t)}getSchemaParametersStore(){return this._schemaParametersStore??(this._schemaParametersStore=this._injector.get(c.SchemaParametersStore))}subscribeParametersChanged(){const e=this.getSchemaParametersStore();this._parametersChangedSubscription?.unsubscribe(),this._parametersChangedSubscription=e.changedValues$.subscribe(t=>{this.parametersChanged.emit(t)})}_destroyView(){this.schemaState=null,this._cdr.detectChanges()}ngOnChanges(e){const t=e.schema?.currentValue,r=e.schemaState?.currentValue;if(e.schema&&!t&&e.schemaState&&!r){this._cdr.detach(),this._generatedSchemaState=null;return}if(r&&r!==this._generatedSchemaState){this._generatedSchemaState=null,this.onSchemaStateRestored();return}t&&this._onSchemaNameChanged(t)}ngOnDestroy(){this.removeCustomStyles(),this._partsChangedSubscription.unsubscribe(),this._destroyed$.next(),this._destroyed$.complete()}clearResources(e){}}I.\u0275fac=function(e){return new(e||I)(s.\u0275\u0275directiveInject(s.Injector),s.\u0275\u0275directiveInject($.DOCUMENT))},I.\u0275cmp=s.\u0275\u0275defineComponent({type:I,selectors:[["crt-schema"]],hostVars:7,hostBindings:function(e,t){e&2&&(s.\u0275\u0275attribute("data-item-marker",t._dataItemMarker),s.\u0275\u0275classProp("crt-schema",t._addClsToHost)("rtl",t._isRtl)("flex-full-height",t._addFlexFullHeightToHost))},inputs:{modelInitConfigs:"modelInitConfigs",parameters:"parameters",schema:"schema",schemaState:"schemaState"},outputs:{schemaStateGenerated:"schemaStateGenerated",parametersChanged:"parametersChanged",schemaExceptionThrown:"schemaExceptionThrown"},features:[s.\u0275\u0275ProvidersFeature([...K(),...q()]),s.\u0275\u0275NgOnChangesFeature],decls:1,vars:1,consts:[[4,"ngIf"],[3,"crtViewModel"],["crtViewGenerator","",3,"modules","viewConfig","selector"]],template:function(e,t){e&1&&s.\u0275\u0275template(0,Q,3,4,"ng-container",0),e&2&&s.\u0275\u0275property("ngIf",t.schemaState==null?null:t.schemaState.viewConfig)},dependencies:[$.NgIf,g.ViewModelDirective,g.ViewGeneratorDirective]});function ee(o,e){if(o&1&&(s.\u0275\u0275elementContainerStart(0),s.\u0275\u0275elementContainer(1,1),s.\u0275\u0275elementContainerEnd()),o&2){const t=s.\u0275\u0275nextContext();s.\u0275\u0275advance(1),s.\u0275\u0275property("viewConfigId",t.schemaState==null?null:t.schemaState.viewConfigId)("instanceId",t.schemaState==null?null:t.schemaState.instanceId)("viewModel",t.schemaState==null?null:t.schemaState.viewModel)("viewConfig",t.schemaState==null?null:t.schemaState.viewConfig)("selector",t.schema)("skipCache",!(t.schemaState!=null&&t.schemaState.isBundleCacheable))("modules",t.schemaState==null?null:t.schemaState.modules)}}class V extends I{constructor(){super(...arguments),this._viewConfigIdCounter=0,this._actualViewConfigId=0,this._cacheService=(0,s.inject)(g.ReusableViewGeneratorCacheService),this._bindingCache=(0,s.inject)(g.SCHEMA_BINDING_CACHE)}set parameters(e){this._parameters=e,this.schemaState&&this._injectFromContext(c.SchemaParametersStore).setValues(e)}_generateViewConfigId(){return++this._viewConfigIdCounter}_injectFromContext(e){return this.schemaState?.viewModel?._injectionContext.inject(e)}init(e,t,r,a,i,n,l){this.schemaState={models:a,viewModel:r,viewConfig:t.viewConfig,handlers:t.handlers,scope:this.schema,converters:t.converters,validators:t.validators,styles:t.styles,rawBundle:e,preprocessedBundle:t,schemaPartsState:this.schemaPartsService.getState(),instanceId:r._injectionContext.id,viewConfigId:this._actualViewConfigId,isBundleCacheable:i,intermediatePreprocessedBundle:n,modules:l},this.applyCustomStyles(),this.emitSchemaStateGenerated(),this._injectFromContext(c.SchemaParametersStore).setValues(this._parameters),this.subscribeParametersChanged()}updateView(e){this.schemaState.viewConfigId=this._generateViewConfigId(),this.schemaState.isBundleCacheable&&(this._actualViewConfigId=this.schemaState.viewConfigId),super.updateView(e)}getViewModelPatch(e,t){const r=this._injectFromContext(s.Injector);return this.viewModelDiffPatchService.diff(e,t,r)}getSchemaParametersStore(){return this._injectFromContext(c.SchemaParametersStore)}clearResources(e){const t=e._injectionContext.id;this._cacheService?.invalidateInstance(t),this._bindingCache.delete(e)}}V.\u0275fac=function(){let o;return function(t){return(o||(o=s.\u0275\u0275getInheritedFactory(V)))(t||V)}}(),V.\u0275cmp=s.\u0275\u0275defineComponent({type:V,selectors:[["crt-reusable-schema"]],features:[s.\u0275\u0275ProvidersFeature([...K(),{provide:g.SCHEMA_BINDING_CACHE,useFactory:()=>new WeakMap},g.ReusableViewGeneratorCacheService]),s.\u0275\u0275InheritDefinitionFeature],decls:1,vars:1,consts:[[4,"ngIf"],["crtReusableViewGenerator","",3,"viewConfigId","instanceId","viewModel","viewConfig","selector","skipCache","modules"]],template:function(e,t){e&1&&s.\u0275\u0275template(0,ee,2,7,"ng-container",0),e&2&&s.\u0275\u0275property("ngIf",t.schemaState==null?null:t.schemaState.viewConfig)},dependencies:[$.NgIf,g.ReusableViewGeneratorDirective]});class T{}T.\u0275fac=function(e){return new(e||T)},T.\u0275mod=s.\u0275\u0275defineNgModule({type:T}),T.\u0275inj=s.\u0275\u0275defineInjector({providers:[{provide:c.CRT_METADATA_PREPROCESSOR,useClass:N,multi:!0},{provide:c.CRT_METADATA_PREPROCESSOR,useClass:E,multi:!0},{provide:c.CRT_METADATA_PREPROCESSOR,useClass:b,multi:!0},{provide:c.CRT_METADATA_PREPROCESSOR,useClass:x,multi:!0},{provide:c.CRT_METADATA_PREPROCESSOR,useClass:F,multi:!0},{provide:c.CRT_METADATA_PREPROCESSOR,useClass:D,multi:!0},{provide:c.BaseViewModelGenerator,useClass:P},{provide:c.CRT_METADATA_PREPROCESSOR,useClass:A,multi:!0},{provide:c.CRT_METADATA_PREPROCESSOR,useClass:j,multi:!0},{provide:c.CRT_METADATA_PREPROCESSOR,useClass:O,multi:!0}],imports:[$.CommonModule,g.ViewModule,c.ModelModule,g.ViewGeneratorModule,C.LowCodeModule,v.CrtButtonModule,W.TranslateModule.forRoot({defaultLanguage:"en-US"}),g.ViewModule,c.ModelModule]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&s.\u0275\u0275setNgModuleScope(T,{declarations:[I,V],imports:[$.CommonModule,g.ViewModule,c.ModelModule,g.ViewGeneratorModule,C.LowCodeModule,v.CrtButtonModule,W.TranslateModule],exports:[I,V,g.ViewModule,c.ModelModule]})}();const te=new s.InjectionToken("SCHEMA_COMPONENT")}}]);
