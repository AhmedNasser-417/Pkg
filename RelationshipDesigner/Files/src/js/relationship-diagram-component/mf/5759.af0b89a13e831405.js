(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[5759],{75759:(C,v,e)=>{e.r(v);var a=e(54514),h=e(31134),s=e(2876),n=e(94450),p=e(71006),u=e(57186),l=e(77207),m=e(33177),f=e(41307),c=e(6523),i=e(57387),t=e(49475);const M={production:!0,workspaceBaseUrl:"",appPath:""};M.workspaceBaseUrl=(0,t.getWorkspaceBaseUrl)(),M.appPath=(0,t.getAppPath)();const g=[{provide:h.APP_BASE_HREF,useValue:"/"},{provide:s.HTTP_INTERCEPTORS,useClass:t.WebComponentHttpInterceptor,multi:!0},f.LinkGenerator,m.CustomEventService,{provide:t.GET_TRANSLATIONS_EVENT_NAME,useValue:"getRelationshipDesignerTranslation"}];class o{constructor(r){this._customElementsBootstrapService=r,this._customElements=[{componentName:"crt-relationship-designer",componentType:i.RelationshipDesignerComponent}]}ngDoBootstrap(){this._customElements.forEach(({componentName:r,componentType:E})=>{this._customElementsBootstrapService.defineComponent(r,E)})}}o.\u0275fac=function(r){return new(r||o)(n.\u0275\u0275inject(m.CustomElementsBootstrapService))},o.\u0275mod=n.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=n.\u0275\u0275defineInjector({providers:g,imports:[a.BrowserModule,p.BrowserAnimationsModule,s.HttpClientModule,s.HttpClientXsrfModule.withOptions({cookieName:"BPMCSRF",headerName:"BPMCSRF"}),u.RouterModule.forRoot([],{}),t.UserInfoInitializerModule,c.DataServiceQueryExecutorModule,i.RelationshipDesignerModule,l.TranslateModule.forRoot({loader:{provide:l.TranslateLoader,useClass:i.RelationshipDesignerTranslateLoader}})]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&n.\u0275\u0275setNgModuleScope(o,{imports:[a.BrowserModule,p.BrowserAnimationsModule,s.HttpClientModule,s.HttpClientXsrfModule,u.RouterModule,t.UserInfoInitializerModule,c.DataServiceQueryExecutorModule,i.RelationshipDesignerModule,l.TranslateModule]})}(),a.platformBrowser().bootstrapModule(o).catch(d=>console.error(d))}}]);
