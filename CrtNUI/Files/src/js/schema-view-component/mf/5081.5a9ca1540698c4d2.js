(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[5081,8239,5036,6118,7344,8160,1034,8056,1906,4501,1216,9256,9795,1006,7571,6025,9424,885],{55081:(G,P,e)=>{e.r(P);var E=e(54514),F=e(63653),s=e(75378),h=e(16464),g=e(8239),r=e(74742),u=e(31134),d=e(2876),o=e(94450),p=e(71006),l=e(77207),N=e(99965),R=e(33177),W=e(31234),C=e(41307),w=e(65181),Z=e(34020),x=e(98746),y=e(3327),V=e(51273),H=e(97778),O=e(21793),f=e(66093),v=e(2792),z=e(93001),j=e(96923),K=e(34038),T=e(78094),c=e(49475),_=e(24709),M=e(34617),A=e(21322),U=e(27049);let D=class extends s.BaseRequestHandler{constructor(t){super(),this._maskService=t,this._tasks=new Set}_addTask(t){this._tasks.add(t),this._tasks.size===1&&this._maskService.showBodyMask()}_removeTask(t){this._tasks.delete(t),this._tasks.size===0&&this._maskService.hideBodyMask()}handle(t){var a=this;return(0,g.Z)(function*(){t.action===s.SchemaViewMaskRequestAction.AddTask?a._addTask(t.taskName):a._removeTask(t.taskName)})()}};D=(0,r.__decorate)([(0,s.CrtRequestHandler)({requestType:"crt.SchemaViewMaskRequest",type:"crt.SchemaViewMaskRequestHandler"}),(0,r.__param)(0,(0,s.CrtInject)(c.DEVKIT_MASK_SERVICE)),(0,r.__metadata)("design:paramtypes",[s.MaskService])],D);let B=class extends s.BaseRequestHandler{constructor(t){super(),this._schemaModalService=t}handle(t){return this?._schemaModalService.closeModals(),this.next?.handle(t)}};B=(0,r.__decorate)([(0,s.CrtRequestHandler)({requestType:"crt.HandleViewModelDestroyRequest",type:"crt.SchemaModalNavigationRequestHandler"}),(0,r.__metadata)("design:paramtypes",[v.SchemaModalService])],B);class S{constructor(t){this._window=t}wait(t){const a=this._window.Terrasoft?.Router;return a?.enableBuffering?a.enableBuffering(t):t()}}S.\u0275fac=function(t){return new(t||S)(o.\u0275\u0275inject(R.WINDOW_TOKEN))},S.\u0275prov=o.\u0275\u0275defineInjectable({token:S,factory:S.\u0275fac});class I extends M.CrtNavigationService{constructor(t){super(),this.injector=t}subscribeForNavigationEndEvent(){return A.Subscription.EMPTY}subscribeForNavigationPopStateEvent(){return A.Subscription.EMPTY}navigate(){throw new Error("Navigation with this service is not implemented in schema-view")}}I.\u0275fac=function(t){return new(t||I)(o.\u0275\u0275inject(o.Injector))},I.\u0275prov=o.\u0275\u0275defineInjectable({token:I,factory:I.\u0275fac});var L;function Y(n,t){return(0,g.Z)(function*(){yield(0,A.lastValueFrom)(n.loadCurrentUserInfo().pipe((0,U.switchMap)(a=>t.use(a?.userInfo?.cultureInfo?.sysCultureName).pipe((0,U.catchError)(()=>(0,A.of)(null))))),{defaultValue:null})})}let m=L=class{constructor(t,a,i){this._customElementsBootstrapService=t,this._injector=a,this._crtInjectionContextService=i,this._obsoleteProcessExecutionDataCollectorService=this._injector.get(f.ObsoleteProcessExecutionDataCollectorService)}_defineBaseViewModuleElement(t,a){this._customElementsBootstrapService.defineComponent(t,a);const i=o.Injector.create({parent:this._injector,providers:[...v.NAVIGATION_PREPROCESSOR_PROVIDERS,{provide:c.CRT_NAVIGATION_LOCK_TOKEN,useClass:S}]});this._customElementsBootstrapService.defineComponent(`${t}-navigation`,a,i)}ngDoBootstrap(){(0,s.bootstrapCrtModule)(L,{moduleType:"host",resolveDependency:(i,k)=>k?.id?this._crtInjectionContextService.injectFromContext(k.id,i):this._injector.get(i),onContextCreate:i=>i.connectHostLazyModules(),onContextUpdate:i=>i.connectHostLazyModules(),onContextDestroy:i=>i.destroy()}),this._obsoleteProcessExecutionDataCollectorService.init();const t=K.CrtTabPanelContainerComponent,a=(0,s.getViewElementMetadata)(t);(0,s.registerAngularViewElement)(a,t),this._defineBaseViewModuleElement("crt-home-page-component",v.HomePageComponent),this._defineBaseViewModuleElement("crt-card-component",v.CardComponent),this._defineBaseViewModuleElement("crt-section-component",v.SectionComponent),this._defineBaseViewModuleElement("crt-page-component",v.PageComponent),this._customElementsBootstrapService.defineComponent("crt-chart-widget-component",T.CrtChartWidgetComponent),this._customElementsBootstrapService.defineComponent("crt-indicator-widget-component",T.CrtIndicatorWidgetComponent),this._customElementsBootstrapService.defineComponent("crt-gauge-widget-component",T.GaugeWidgetComponent),this._customElementsBootstrapService.defineComponent("crt-funnel-widget-component",T.CrtFunnelWidgetComponent),this._customElementsBootstrapService.defineComponent("crt-full-pipeline-widget-component",T.FullPipelineWidgetComponent)}};m.\u0275fac=function(t){return new(t||m)(o.\u0275\u0275inject(R.CustomElementsBootstrapService),o.\u0275\u0275inject(o.Injector),o.\u0275\u0275inject(c.CrtInjectionContextsService))},m.\u0275mod=o.\u0275\u0275defineNgModule({type:m}),m.\u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:u.APP_BASE_HREF,useValue:"/"},{provide:d.HTTP_INTERCEPTORS,useClass:c.WebComponentHttpInterceptor,multi:!0},{provide:o.APP_INITIALIZER,useFactory:Y,deps:[c.UserInfoService,l.TranslateService],multi:!0},C.REMOTE_ENTRY_PROVIDER,{provide:c.DEFAULT_THEME,useValue:c.THEMES.DEFAULT},{provide:c.AbstractThemeProvider,useClass:C.ThemeProvider},(0,c.PROVIDE_THEMING_ICONS_RESOLVER_APP_INITIALIZER)("ClientApp/assets/themes"),C.FEATURE_VALUES_APP_INITIALIZER_PROVIDER,C.FEATURE_VALUES_PROVIDER,{provide:M.CrtNavigationService,useClass:I},{provide:M.SHELL_MODULE_ALIASES_FACTORY,useValue:()=>Promise.resolve(!1)},{provide:M.DONT_USE_CHILD_ROUTING,useFactory:n=>(0,A.lastValueFrom)(n.getFeatureState("DontUseChildRouting")),deps:[C.FeatureService]},s.SysSettingsService,f.EXECUTION_DATA_INTERCEPTOR_PROVIDER,f.ObsoleteProcessExecutionDataCollectorService,{provide:_.CRT_METADATA_NAVIGATION_PREPROCESSOR,useClass:f.ExecutionDataPreprocessor,multi:!0},{provide:_.AbstractModelLifecycleHookNotificationService,useClass:_.HandlerChainModelLifecycleHookNotificationService},C.LICENSE_RESTRICTION_OPERATION_VALUES_APP_INITIALIZER_PROVIDER,C.LICENSE_RESTRICTION_OPERATION_VALUES_PROVIDER,R.CURRENT_TAB_ID_PROVIDER,R.TAB_ID_APP_INITIALIZER],imports:[p.BrowserAnimationsModule,E.BrowserModule,u.CommonModule,j.CdkModule,w.ComponentsPreprocessorsModule,v.SchemaViewModule,d.HttpClientModule,x.FolderTreeModule,d.HttpClientXsrfModule.withOptions({cookieName:"BPMCSRF",headerName:"BPMCSRF"}),l.TranslateModule.forRoot({defaultLanguage:"en-US",loader:{provide:l.TranslateLoader,useFactory:(n,t)=>new N.TranslateHttpLoader(n,t+"ClientApp/assets/i18n/"),deps:[d.HttpClient,u.APP_BASE_HREF]}}),M.CrtNavigationModule,y.MarketingCampaignModule,V.MarketingEmailModule,H.MarketingEngagementToolsModule,O.MarketingEventModule]}),m=L=(0,r.__decorate)([(0,s.CrtModule)({includes:[W.AcademyHelpApiModule,v.SchemaViewModule,j.CdkModule,x.FolderTreeModule,z.SsoSettingsModule,M.CrtNavigationModule,{load:()=>e.e(7387).then(e.t.bind(e,57387,23)).then(n=>n.RelationshipDesignerModule),...window.creatio._lazyModulesMetadata.host.RelationshipDesignerModule},{load:()=>e.e(2634).then(e.t.bind(e,72634,23)).then(n=>n.DigitalAdsModule),...window.creatio._lazyModulesMetadata.host.DigitalAdsModule},y.MarketingCampaignModule,V.MarketingEmailModule,H.MarketingEngagementToolsModule,O.MarketingEventModule,Z.CopilotModule],requestHandlers:[D,_.ClearContextedHandlersCacheHandler,B,C.GetApiKeyRequestHandler,c.CopyClipboardRequestHandler,f.CompleteProcessElementHandler]}),(0,r.__metadata)("design:paramtypes",[R.CustomElementsBootstrapService,o.Injector,c.CrtInjectionContextsService])],m),function(){(typeof ngJitMode>"u"||ngJitMode)&&o.\u0275\u0275setNgModuleScope(m,{imports:[p.BrowserAnimationsModule,E.BrowserModule,u.CommonModule,j.CdkModule,w.ComponentsPreprocessorsModule,v.SchemaViewModule,d.HttpClientModule,x.FolderTreeModule,d.HttpClientXsrfModule,l.TranslateModule,M.CrtNavigationModule,y.MarketingCampaignModule,V.MarketingEmailModule,H.MarketingEngagementToolsModule,O.MarketingEventModule]})}(),(0,h.getGlobalRemoteEntryLoader)()||(0,h.createGlobalRemoteEntryLoader)({initSharing:e.I,shareScopes:e.S}),(0,s.bootstrapCrtModuleHandlerChainServices)(m),E.platformBrowser().bootstrapModule(m).catch(n=>console.error(n))},8239:(G,P,e)=>{e.d(P,{Z:()=>F});function E(s,h,g,r,u,d,o){try{var p=s[d](o),l=p.value}catch(N){g(N);return}p.done?h(l):Promise.resolve(l).then(r,u)}function F(s){return function(){var h=this,g=arguments;return new Promise(function(r,u){var d=s.apply(h,g);function o(l){E(d,r,u,o,p,"next",l)}function p(l){E(d,r,u,o,p,"throw",l)}o(void 0)})}}}}]);
