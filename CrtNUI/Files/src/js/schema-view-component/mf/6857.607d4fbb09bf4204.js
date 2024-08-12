(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[6857],{80917:(k,N,c)=>{c.r(N),c.d(N,{AD_PLATFORM_REFRESH_SUBSCRIPTION_ATTRIBUTE_NAME:()=>Se,AdPlatformLoginRequest:()=>T,DigitalAdsAdAccountsService:()=>S,DigitalAdsModule:()=>A,DigitalAdsNotificationService:()=>b});var g=c(74742),M=c(31134),s=c(94450),U=c(1828),d=c(75378),i=c(77207),P=c(33177),y=c(49475),f=c(21322),p=c(8239),v=c(99293),o=c(41307);class a{constructor(e,t,n){this.application=e,this.platform=t,this.websocketSessionId=n}}var h=c(18877);class l{constructor(){this._storageKey="uniqueIdentifier",sessionStorage.removeItem(this._storageKey)}get identifier(){let e=sessionStorage.getItem(this._storageKey);return e||(e=(0,h.Z)(),sessionStorage.setItem(this._storageKey,e)),e}}l.\u0275fac=function(e){return new(e||l)},l.\u0275prov=s.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"});let _=class extends d.BaseRequestHandler{constructor(e,t,n,r,m,C){super(),this.httpClient=e,this.notifyService=t,this._restErrorHandler=n,this._translateService=r,this._sessionIdentifierService=m,this._window=C,this._snackbarDuration=3e3}_validateRequest(e){return e.platform===void 0?(this._showMessage(this._translateService.instant("DigitalAdsContent.PlatformUndefinedMessage")),!1):e.app===void 0?(this._showMessage(this._translateService.instant("DigitalAdsContent.ApplicationUndefinedMessage")),!1):!0}_getFlowUrl(e){const t=this._sessionIdentifierService.identifier,n=new a(e.app,e.platform,t);return this._restErrorHandler.handleRequest(this.httpClient.post("/rest/SocialOAuthProxyService/AuthenticateToPlatform",n,{responseType:"json"})).pipe((0,f.map)(r=>{if(r.body!=="")return new URL(r.body)}))}_showMessage(e){var t=this;return(0,p.Z)(function*(){yield t.notifyService.show({message:e,duration:t._snackbarDuration})})()}_showLoginWindow(e){const t="Login",m=window.screenLeft+(window.innerWidth-650)/2,C=window.screenTop+(window.innerHeight-650)/2,R=`width=${650},height=${650},left=${m},top=${C},
		  scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`;this._window.open(e.toString(),t,R)}handle(e){var t=this;return(0,p.Z)(function*(){t._context=e.$context;const n=t._context.attributes.Connect_account_button_enabled;if(n&&n===!0){t._context.attributes.Connect_account_button_enabled=!1;try{if(!t._validateRequest(e))return;t._getFlowUrl(e).subscribe(r=>{r&&t._showLoginWindow(r)})}finally{t._context.attributes.Connect_account_button_enabled=!0,yield t.next?.handle(e)}}})()}};_=(0,g.__decorate)([(0,d.CrtRequestHandler)({type:"crt.AdPlatformLoginHandler",requestType:"crt.AdPlatformLogin"}),(0,g.__param)(5,(0,d.CrtInject)(P.WINDOW_TOKEN)),(0,g.__metadata)("design:paramtypes",[o.HttpClientService,v.NotifyService,y.RestErrorHandler,i.TranslateService,l,Window])],_);var E=c(6523);class x{constructor(e){this.platform=e}}class w{constructor(e,t,n){this.virtualAdAccountsIdentifiers=e,this.platform=t,this.websocketSessionId=n}}class S{constructor(e,t,n,r,m){this._messageChannelService=e,this._restErrorHandler=t,this.httpClient=n,this._queryExecutor=r,this._sessionIdentifierService=m}_isCurrentSessionMessage(e){const t=this._sessionIdentifierService.identifier;return!e||!t||e===t}_handleWebSocketMessage(e){if(e&&this._isCurrentSessionMessage(e.websocketSessionId)){switch(e.command){case"select.adaccounts":this._openAdAccountSelection(e.platform);break}return}}_getLookupPageFeatures(){return{select:{multiple:!0,selectAll:!0}}}_getPreSelectedAdAccounts(e){const t=new x(e);return this._restErrorHandler.handleRequest(this.httpClient.post("/rest/AdAccountsService/GetAdAccountsIdentifiers",t,{responseType:"json"})).pipe((0,f.map)(n=>n))}_loadAdAccountsByFilter(e,t){var n=this;return(0,p.Z)(function*(){const r=new d.EntitySchemaQuery(e);return n._addFiltersToEsq(r,t),yield n._queryExecutor.executeSelectQuery(r).pipe((0,f.map)(C=>C.map(R=>({id:R.Id}))))})()}_addFiltersToEsq(e,t){Object.entries(t.items).forEach(([n,r])=>{e.filters.add(r,n)})}_getOpenLookupPageRequestConfig(e){var t=this;const n=this._context,r=this._context._scopes;return this._getPreSelectedAdAccounts(e).pipe((0,f.switchMap)(m=>{const C=m.body;return(0,f.of)({type:"crt.OpenSelectionWindowRequest",$context:n,scopes:r,entitySchemaName:"VirtualAdAccount",schemaName:"SelectAdAccountsLookupPage",features:this._getLookupPageFeatures(),selectionState:{type:"specific",selected:C},returnEmptyValue:!0,afterClosed:function(){var R=(0,p.Z)(function*(I){const L=I.filter;if(L?.isEmpty){t._saveSelectedAdAccounts(e,[]).subscribe();return}(yield t._loadAdAccountsByFilter("VirtualAdAccount",L)).pipe((0,f.switchMap)(be=>{const Pe=be.map(Ce=>Ce.id);return t._saveSelectedAdAccounts(e,Pe)})).subscribe()});return function(L){return R.apply(this,arguments)}}()})}))}_saveSelectedAdAccounts(e,t){const n=this._sessionIdentifierService.identifier,r=new w(t,e,n);return this._restErrorHandler.handleRequest(this.httpClient.post("/rest/AdAccountsService/SaveAdAccounts",r,{responseType:"json"})).pipe((0,f.map)(m=>m))}_openAdAccountSelection(e){this._getOpenLookupPageRequestConfig(e).subscribe(t=>{d.HandlerChainService.instance.process(t)})}subscribeMessageChannelEvents(e){this._context=e,this._subscription=this._messageChannelService.messageEvent$.pipe((0,f.filter)(t=>t.header.sender==="CrtDigitalAdsApp.SelectAdAccounts"),(0,f.map)(t=>{const n=t.body;return{messageId:t.id.toString(),isSuccess:n.isSuccess,command:n.command,description:n.description,errorCode:n.errorCode,platform:n.platform,websocketSessionId:n.websocketSessionId}})).subscribe(t=>{this._handleWebSocketMessage(t)})}unSubscribeMessageChannelEvents(){this._subscription?.unsubscribe()}}S.\u0275fac=function(e){return new(e||S)(s.\u0275\u0275inject(y.MessageChannelService),s.\u0275\u0275inject(y.RestErrorHandler),s.\u0275\u0275inject(o.HttpClientService),s.\u0275\u0275inject(E.QueryExecutor),s.\u0275\u0275inject(l))},S.\u0275prov=s.\u0275\u0275defineInjectable({token:S,factory:S.\u0275fac,providedIn:"root"});class b{constructor(e,t,n,r,m){this._translateService=e,this.notifyService=t,this._dialogService=n,this._messageChannelService=r,this._sessionIdentifierService=m,this._snackbarDuration=3e3,this._allowedSenders=["CrtDigitalAdsApp","CloudIntegration"]}_showMessage(e){var t=this;return(0,p.Z)(function*(){yield t.notifyService.show({message:e,duration:t._snackbarDuration})})()}subscribeMessageChannelEvents(e){this._context=e,this._subscription=this._messageChannelService.messageEvent$.pipe((0,f.filter)(t=>this._allowedSenders.indexOf(t.header.sender)>-1),(0,f.map)(t=>{const n=t.body;return{messageId:t.id.toString(),isSuccess:n.isSuccess,command:n.command,description:n.description,errorCode:n.errorCode,websocketSessionId:n.websocketSessionId}})).subscribe(t=>{this._handleWebSocketMessage(t)})}_updateConnectedAccountsList(e){var t=this;return(0,p.Z)(function*(){const n={type:"crt.LoadDataRequest",config:{loadType:d.DataSourceLoadType.Reload,useLastLoadParameters:!0},$context:t._context,dataSourceName:e};return yield d.HandlerChainService.instance.process(n),Promise.resolve()})()}_isCurrentSessionMessage(e){const t=this._sessionIdentifierService.identifier;return!e||!t||e===t}_handleWebSocketMessage(e){var t=this;return(0,p.Z)(function*(){if(e&&t._isCurrentSessionMessage(e.websocketSessionId)){switch(e.command){case"refresh.adAccount.facebook":yield t._updateConnectedAccountsList("DataGrid_AdAccountsTabContainerFacebookGridDS");break;case"refresh.adAccount.google":yield t._updateConnectedAccountsList("DataGrid_AdAccountsTabContainerGoogleGridDS");break;case"import.started":t._showMessage(t._translateService.instant("DigitalAdsContent.ImportFromAdPlatformStartedMessage"));break;case"adaccounts.notfound":t._dialogService.openInfoDialog(t._translateService.instant("DigitalAdsContent.NoActiveAdAccountsFoundMessage"));break;case"no.connected.adaccounts":t._showMessage(t._translateService.instant("DigitalAdsContent.NoConnectedAdAccountsFoundMessage"));break;case"show.ErrorScreen":t._dialogService.openInfoDialog(e.description);break}return}})()}unSubscribeMessageChannelEvents(){this._subscription?.unsubscribe()}}b.\u0275fac=function(e){return new(e||b)(s.\u0275\u0275inject(i.TranslateService),s.\u0275\u0275inject(v.NotifyService),s.\u0275\u0275inject(v.DialogService),s.\u0275\u0275inject(y.MessageChannelService),s.\u0275\u0275inject(l))},b.\u0275prov=s.\u0275\u0275defineInjectable({token:b,factory:b.\u0275fac,providedIn:"root"});let D=class extends d.BaseRequestHandler{constructor(e,t){super(),this.digitalAdsNotificationService=e,this.digitalAdsAdAccountsService=t}handle(e){var t=this;return(0,p.Z)(function*(){t.digitalAdsAdAccountsService.unSubscribeMessageChannelEvents(),t.digitalAdsNotificationService.unSubscribeMessageChannelEvents(),yield t.next?.handle(e)})()}};D=(0,g.__decorate)([(0,d.CrtRequestHandler)({type:"crt.AdPlatformViewModelPauseHandler",requestType:"crt.HandleViewModelPauseRequest",scopes:["AdCampaign_ListPage"]}),(0,g.__metadata)("design:paramtypes",[b,S])],D);let O=class extends d.BaseRequestHandler{constructor(e,t){super(),this.digitalAdsNotificationService=e,this.digitalAdsAdAccountsService=t}handle(e){var t=this;return(0,p.Z)(function*(){t.digitalAdsAdAccountsService.subscribeMessageChannelEvents(e.$context),t.digitalAdsNotificationService.subscribeMessageChannelEvents(e.$context),yield t.next?.handle(e)})()}};O=(0,g.__decorate)([(0,d.CrtRequestHandler)({type:"crt.AdPlatformViewModelResumeHandler",requestType:"crt.HandleViewModelResumeRequest",scopes:["AdCampaign_ListPage","WebAnalytics_SectionPage"]}),(0,g.__metadata)("design:paramtypes",[b,S])],O);const j=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),q=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),H=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),J=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button","ImportFromAdPlatformStartedMessage":"Data import from ad accounts has been started","NoConnectedAdAccountsFoundMessage":"There are no connected ad accounts for import","NoActiveAdAccountsFoundMessage":"Sorry, but we couldn\u2019t find any ad accounts available to you. Make sure that you have access to the required accounts on the platform. Only active accounts can be connected."}}'),F=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Conectar plataforma de anuncios","NotEnoughPermissionsMessage":"Lo sentimos, no se puede conectar con tu cuenta de anuncios. Por favor, concede los permisos m\xE1ximos a Creatio y vuelve a intentarlo.","PlatformUndefinedMessage":"Plataforma indefinida, aseg\xFArate de configurar el bot\xF3n foe de la plataforma","ApplicationUndefinedMessage":"Aplicaci\xF3n indefinida, aseg\xFArate de configurar el bot\xF3n foe de la plataforma"}}'),V=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform"}}'),B=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform"}}'),W=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connecter la plateforme ad","NotEnoughPermissionsMessage":"D\xE9sol\xE9, impossible de connecter votre compte ad. Veuillez accorder des autorisations maximales \xE0 Creatio et r\xE9essayez.","PlatformUndefinedMessage":"Plateforme non d\xE9finie, assurez-vous de configurer la plateforme pour le bouton","ApplicationUndefinedMessage":"Application non d\xE9finie, assurez-vous de configurer la plateforme pour le bouton"}}'),Z=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),z=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),$=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),K=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),G=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"\u5E83\u544A\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3068\u63A5\u7D9A","NotEnoughPermissionsMessage":"\u7533\u3057\u8A33\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u5E83\u544A\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u63A5\u7D9A\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002Creatio\u306B\u6700\u5927\u6A29\u9650\u3092\u4ED8\u4E0E\u3057\u3066\u3001\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002","PlatformUndefinedMessage":"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u304C\u672A\u5B9A\u7FA9\u3067\u3059\u3002\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u304C\u30DC\u30BF\u30F3\u3092\u76F8\u624B\u306B\u8A2D\u5B9A\u3059\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002","ApplicationUndefinedMessage":"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u672A\u5B9A\u7FA9\u3067\u3059\u3002\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u304C\u30DC\u30BF\u30F3\u3092\u76F8\u624B\u306B\u8A2D\u5B9A\u3059\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}}'),Q=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform"}}'),X=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),Y=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),ee=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),te=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform"}}'),ne=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform"}}'),oe=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),ae=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Conectar-se \xE0 plataforma de an\xFAncios","NotEnoughPermissionsMessage":"Desculpe-nos, n\xE3o foi poss\xEDvel conectar-se \xE0 sua conta de an\xFAncios. Favor, conceder as permiss\xF5es m\xE1ximas ao Creatio e tentar novamente.","PlatformUndefinedMessage":"Plataforma n\xE3o definida, certificar-se de configurar a plataforma para o bot\xE3o","ApplicationUndefinedMessage":"Aplica\xE7\xE3o indefinida, certificar-se de configurar a plataforma para o bot\xE3o"}}'),se=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),ie=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Conecta\u021Bi platforma de anun\u021Buri","NotEnoughPermissionsMessage":"Ne pare r\u0103u, nu se poate conecta la contul de reclame. Te rug\u0103m s\u0103 acorzi permisiunile solicitate in Creatio \u0219i s\u0103 \xEEncerci din nou.","PlatformUndefinedMessage":"Platform\u0103 nedefinit\u0103, asigura\u021Bi-v\u0103 c\u0103 a\u021Bi configurat platforma","ApplicationUndefinedMessage":"Aplica\u021Bie nedefinit\u0103, asigura\u021Bi-v\u0103 c\u0103 a\u021Bi configurat platforma"}}'),re=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0443\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443","NotEnoughPermissionsMessage":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0430\u0448 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 Creatio \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0430.","PlatformUndefinedMessage":"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043D\u0435 \u0437\u0430\u0434\u0430\u043D\u043D\u043E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 \u043A\u043D\u043E\u043F\u043A\u0438","ApplicationUndefinedMessage":"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0435 \u0437\u0430\u0434\u0430\u043D\u043D\u043E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 \u043A\u043D\u043E\u043F\u043A\u0438","ImportFromAdPlatformStartedMessage":"\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0438\u043C\u043F\u043E\u0440\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u0432","NoConnectedAdAccountsFoundMessage":"\u041D\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0445 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u0438\u043C\u043F\u043E\u0440\u0442\u0430","NoActiveAdAccountsFoundMessage":"\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043C\u044B \u043D\u0435 \u043D\u0430\u0448\u043B\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0432\u0430\u043C \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u043C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430\u043C \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B."}}'),ce=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),de=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),ue=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),le=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),fe=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0443 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443","NotEnoughPermissionsMessage":"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u0432\u0430\u0448 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0438\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043D\u0430\u0434\u0430\u0439\u0442\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0434\u043E\u0437\u0432\u043E\u043B\u0456\u0432 \u0434\u043B\u044F Creatio \u0456 \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.","PlatformUndefinedMessage":"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0430, \u043F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u0439\u0442\u0435\u0441\u044F, \u0449\u043E \u043D\u0430\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438","ApplicationUndefinedMessage":"\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043E\u043A \u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439, \u043F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u0439\u0442\u0435\u0441\u044F, \u0449\u043E \u043D\u0430\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438"}}'),me=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),pe=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),ge=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform"}}'),Ae=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform"}}'),he={"hu-HU":z,"zh-CN":pe,"uk-UA":fe,"sq-AL":ce,"zh-TW":ge,"no-NO":te,zh:Ae,"vi-VN":me,"tr-TR":le,"th-TH":ue,"sv-SE":de,"ro-RO":ie,"pt-PT":se,"pt-BR":ae,"pl-PL":oe,no:ne,"nl-NL":ee,"lv-LV":Y,"ko-KR":X,"kk-KZ":Q,"ja-JP":G,"it-IT":K,"id-ID":$,"he-IL":Z,"fr-FR":W,"fr-CA":B,"fa-IR":V,"es-ES":F,"de-DE":H,"cs-CZ":q,"ar-SA":j,"en-US":J,"ru-RU":re};function _e(u,e){return()=>(0,f.lastValueFrom)(u.loadCurrentUserInfo().pipe((0,f.tap)(t=>{e.use(t?.userInfo?.cultureInfo?.sysCultureName)})),{defaultValue:null})}let A=class{};A.\u0275fac=function(e){return new(e||A)},A.\u0275mod=s.\u0275\u0275defineNgModule({type:A}),A.\u0275inj=s.\u0275\u0275defineInjector({providers:[P.WINDOW_PROVIDER,{provide:s.APP_INITIALIZER,useFactory:_e,deps:[y.UserInfoService,i.TranslateService],multi:!0}],imports:[M.CommonModule,P.CrtLibTranslateModule.forRoot({i18n:he}),U.MatSnackBarModule]}),A=(0,g.__decorate)([(0,d.CrtModule)({requestHandlers:[_,D,O]})],A),function(){(typeof ngJitMode>"u"||ngJitMode)&&s.\u0275\u0275setNgModuleScope(A,{imports:[M.CommonModule,P.CrtLibTranslateModule,U.MatSnackBarModule]})}();const Se="AdPlatformRefreshSubscriptionAttribute";let T=class extends d.BaseRequest{constructor(){super(...arguments),this.type="crt.AdPlatformLogin"}};T=(0,g.__decorate)([(0,d.CrtRequest)({type:"crt.AdPlatformLogin",scopes:["AdCampaign_ListPage"],propertiesPanelComponentTypeName:"crt.AdPlatformLoginPropertiesPanel",position:950,title:"DigitalAdsContent.AdPlatformLoginRequestTitle"})],T)},18877:(k,N,c)=>{c.d(N,{Z:()=>v});const M={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let s;const U=new Uint8Array(16);function d(){if(!s&&(s=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(U)}const i=[];for(let o=0;o<256;++o)i.push((o+256).toString(16).slice(1));function P(o,a=0){return i[o[a+0]]+i[o[a+1]]+i[o[a+2]]+i[o[a+3]]+"-"+i[o[a+4]]+i[o[a+5]]+"-"+i[o[a+6]]+i[o[a+7]]+"-"+i[o[a+8]]+i[o[a+9]]+"-"+i[o[a+10]]+i[o[a+11]]+i[o[a+12]]+i[o[a+13]]+i[o[a+14]]+i[o[a+15]]}function y(o,a=0){const h=P(o,a);if(!validate(h))throw TypeError("Stringified UUID is invalid");return h}const f=null;function p(o,a,h){if(M.randomUUID&&!a&&!o)return M.randomUUID();o=o||{};const l=o.random||(o.rng||d)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,a){h=h||0;for(let _=0;_<16;++_)a[h+_]=l[_];return a}return P(l)}const v=p}}]);
