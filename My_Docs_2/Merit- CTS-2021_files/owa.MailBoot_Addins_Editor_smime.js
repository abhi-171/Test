self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~Addins~Editor~smime.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[144],{1003:function(e,n,t){"use strict";var r=t(0),i=t(62),o=600,a=800,c=8,u=25,s={location:!1,menubar:!1,resizable:!0,scrollbars:!1,status:!1,toolbar:!1},l=-1;function d(e,n,t){try{n=function(e){var n=u*(1+(l=(l+1)%c)),t={left:window.screenX+n,top:window.screenY+n,height:Math.max(25*Math.pow(window.innerHeight,.5),o),width:Math.max(8*Math.pow(window.innerWidth,2/3),a)};return Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({},s),t),e)}(n);var d=(t||window).open(e,"_blank",function(e){return Object.getOwnPropertyNames(e).map((function(n){return n+"="+("boolean"==typeof(t=e[n])?t?"1":"0":t?String(t):void 0);var t})).join(",")}(n));return(Object(i.e)()||Object(i.f)())&&d.moveTo(n.left,n.top),d}catch(e){return null}}var f=t(998);var p=t(2),m=t(495),b=t(670),g="version";var v=t(52),A=t(791),S=t(134);n.a=Object(v.d)("addPopoutV2",{name:"PopoutAddPopout",customData:function(e,n,t,r,i,o){return[(n||"").split("/")[0],o]}})((function(e,n,t,r,i,o,a){var c=function(e){var n=null,t=void 0,r=null,i=null;return e&&(!function(e){return void 0!==e.deeplinkData||!!e.projectionTabId}(e)?t=e:(t=e.deeplinkData,Object(f.b)().isAvailable&&(n=e.projectionTabId||null),r=e.projectionTargetWindow,i=e.projectionParentWindow)),{deeplinkCallback:void 0===t?function(){return Promise.resolve(null)}:"function"==typeof t?t:function(){return Promise.resolve(t)},projectionTabId:n,projectionTargetWindow:r,projectionParentWindow:i}}(t),u=c.deeplinkCallback,s=c.projectionTabId,l=c.projectionTargetWindow,v=c.projectionParentWindow,w=new S.b(s?"PopoutProjectionPerf":"PopoutDeeplinkPerf"),h=s?"about:blank":function(e,n,t,r){var i;void 0===r&&(r={});var o=((i={})[g]=Object(p.p)(),i[b.a]=b.b,i);return Object.keys(r).map((function(e){o[e]=r[e]})),Object(m.p)(e,n,t,o)}(e,n,i,a),O=l||d(h,r,v);O&&A.h.import().then((function(n){return n(e,O,s,u,w)}))}))},1252:function(e,n,t){"use strict";var r=t(469),i=t(709),o=t(0),a=t(352),c=t(12),u=t(220),s={root:"ms-Spinner",circle:"ms-Spinner-circle",label:"ms-Spinner-label"},l=Object(u.c)((function(){return Object(c.keyframes)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}})}));t.d(n,"a",(function(){return d}));var d=Object(r.a)(i.a,(function(e){var n,t=e.theme,r=e.size,i=e.className,u=e.labelPosition,d=t.palette,f=Object(c.getGlobalClassNames)(s,t);return{root:[f.root,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},"top"===u&&{flexDirection:"column-reverse"},"right"===u&&{flexDirection:"row"},"left"===u&&{flexDirection:"row-reverse"},i],circle:[f.circle,{boxSizing:"border-box",borderRadius:"50%",border:"1.5px solid "+d.themeLight,borderTopColor:d.themePrimary,animationName:l(),animationDuration:"1.3s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.53,.21,.29,.67)",selectors:Object(o.__assign)((n={},n[c.HighContrastSelector]={borderTopColor:"Highlight"},n),Object(c.getEdgeChromiumNoHighContrastAdjustSelector)())},r===a.a.xSmall&&["ms-Spinner--xSmall",{width:12,height:12}],r===a.a.small&&["ms-Spinner--small",{width:16,height:16}],r===a.a.medium&&["ms-Spinner--medium",{width:20,height:20}],r===a.a.large&&["ms-Spinner--large",{width:28,height:28}]],label:[f.label,t.fonts.small,{color:d.themePrimary,margin:"8px 0 0",textAlign:"center"},"top"===u&&{margin:"0 0 8px"},"right"===u&&{margin:"0 0 0 8px"},"left"===u&&{margin:"0 8px 0 0"}],screenReaderText:c.hiddenContentStyle}}),void 0,{scope:"Spinner"})},1256:function(e,n,t){var r=t(1257),i=t(107);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!1);r.locals&&(e.exports=r.locals)},1257:function(e,n,t){(n=e.exports=t(106)(!1)).push([e.i,"._3k2DZQclSrOtYR-5XBK9RP{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""]),n.locals={view:"_3k2DZQclSrOtYR-5XBK9RP"}},1641:function(e,n,t){"use strict";function r(e){if(!e)return null;var n=e.lastIndexOf(".");return n>0?e.substr(n).toLowerCase():null}function i(e){var n=r(e);return n?n.replace(".",""):null}function o(e){var n;return(null===(n=i(e))||void 0===n?void 0:n.substring(0,4))||""}t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o}))},1674:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(331);function i(e){var n;return null===(n=Object(r.a)(e))||void 0===n?void 0:n.AttachmentPolicy}},1675:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(1825);function i(e){return Object(r.a)().attachments.get(e.Id)}},1682:function(e,n,t){"use strict";var r,i,o;t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o})),function(e){e[e.Compose=0]="Compose",e[e.Extensibility=1]="Extensibility",e[e.ReadingPane=2]="ReadingPane",e[e.Fileshub=3]="Fileshub",e[e.Txp=4]="Txp",e[e.Peek=5]="Peek",e[e.CalendarCard=6]="CalendarCard"}(r||(r={})),function(e){e[e.SmimeSignature=0]="SmimeSignature",e[e.Safety=1]="Safety",e[e.Error=2]="Error",e[e.Info=3]="Info",e[e.Encryption=4]="Encryption",e[e.Translation=5]="Translation",e[e.Sensitivity=6]="Sensitivity",e[e.InsightMessage=7]="InsightMessage",e[e.External=8]="External",e[e.Spotlight=9]="Spotlight"}(i||(i={})),function(e){e[e.Grey=0]="Grey",e[e.Red=1]="Red",e[e.Green=2]="Green",e[e.Yellow=3]="Yellow",e[e.Orange=4]="Orange",e[e.Green20=5]="Green20"}(o||(o={}))},1760:function(e,n,t){"use strict";t.d(n,"n",(function(){return c})),t.d(n,"q",(function(){return u})),t.d(n,"r",(function(){return s})),t.d(n,"a",(function(){return l})),t.d(n,"p",(function(){return d})),t.d(n,"f",(function(){return f})),t.d(n,"u",(function(){return p})),t.d(n,"g",(function(){return m})),t.d(n,"d",(function(){return b})),t.d(n,"e",(function(){return g})),t.d(n,"j",(function(){return v})),t.d(n,"i",(function(){return A})),t.d(n,"l",(function(){return S})),t.d(n,"k",(function(){return w})),t.d(n,"c",(function(){return h})),t.d(n,"o",(function(){return O})),t.d(n,"s",(function(){return P})),t.d(n,"b",(function(){return y})),t.d(n,"m",(function(){return C})),t.d(n,"h",(function(){return j})),t.d(n,"t",(function(){return E}));var r=t(44),i=t(1923);t.d(n,"v",(function(){return i.a}));var o=t(1924);t.d(n,"w",(function(){return o.a}));var a=new r.c((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(20),t.e(23),t.e(27),t.e(30),t.e(32),t.e(36),t.e(41),t.e(44),t.e(55),t.e(63),t.e(64),t.e(68),t.e(92),t.e(104),t.e(147),t.e(148),t.e(210),t.e(209),t.e(208),t.e(211),t.e(315)]).then(t.bind(null,2981))})),c=new r.a(a,(function(e){return e.initializeAttachments})),u=new r.a(a,(function(e){return e.reinitializeAttachments})),s=new r.a(a,(function(e){return e.setInlineAttachmentStatus})),l=new r.a(a,(function(e){return e.addAttachmentIntoWellBeforeUpload})),d=new r.b(a,(function(e){return e.refreshSharingTipsAttachmentWell})),f=new r.b(a,(function(e){return e.createAttachmentsViaQueueManager})),p=new r.b(a,(function(e){return e.createAttachmentsFromRecentAttachments})),m=new r.a(a,(function(e){return e.deleteAttachmentViaQueueManager})),b=new r.b(a,(function(e){return e.createAttachmentFullViewStateAndStoreBackingModel})),g=new r.b(a,(function(e){return e.createAttachmentFullViewState})),v=new r.b(a,(function(e){return e.getAttachmentWellInitialValue})),A=new r.b(a,(function(e){return e.getAttachmentWellForCompose})),S=new r.b(a,(function(e){return e.getConversationAttachmentWellInitialValue})),w=(new r.b(a,(function(e){return e.getMaxClassicAttachmentsSize})),new r.b(a,(function(e){return e.getAvailableLocalAttachmentSize}))),h=new r.b(a,(function(e){return e.createAttachmentFileFromExistingMailboxAttachment})),O=new r.a(a,(function(e){return e.mergeToConversationAttachmentWell})),P=new r.a(a,(function(e){return e.sortConversationAttachmentWell})),y=new r.a(a,(function(e){return e.convertImageViewAttachmentToInlineAttachment})),C=new r.b(a,(function(e){return e.getLastCloudyAttachmentsSharingIssueForBlockOnSend})),j=new r.b(a,(function(e){return e.getAllValidAttachments})),E=new r.b(a,(function(e){return e.uploadLocalFile}))},1775:function(e,n,t){"use strict";var r=t(105),i=t(40),o=t(296),a=t(876),c=t(62),u=t(1674);function s(e){var n=Object(a.e)(a.b.Bohemia);if(!Object(o.a)()&&Object(u.a)().AttachmentDataProviderAvailable&&function(){switch(Object(c.a)().browser){case"Chrome":case"Firefox":case"Edge Anaheim":case"Opera":return!0;case"Safari":return"Windows"!==Object(c.c)().os&&Object(c.o)([13,1]);default:return!1}}()&&n.bohemiaEnabled&&n.fluidEnabledForTenant)switch(e){case 0:case 1:return Object(i.i)("cmp-prague");case 5:return Object(i.i)("cal-cmp-fluid");case 2:case 3:case 6:return Object(i.i)("cal-cmp-fluid")&&Object(i.i)("cal-cmp-fluidCollaborativeSpace");case 4:return Object(i.i)("outlookSpaces-fluid-asset");case 7:return Object(i.i)("cmp-prague")||Object(i.i)("cal-cmp-fluid")||Object(i.i)("cal-cmp-fluidCollaborativeSpace")||Object(i.i)("outlookSpaces-fluid-asset");default:return Object(r.a)(e)}return!1}var l="FluidCollaborativeSpace";function d(e){var n=document.getElementById(l);return null==n?void 0:n.contains(e)}t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return d}))},1797:function(e,n,t){"use strict";t.d(n,"j",(function(){return r})),t.d(n,"l",(function(){return i})),t.d(n,"v",(function(){return o})),t.d(n,"t",(function(){return a})),t.d(n,"a",(function(){return c})),t.d(n,"p",(function(){return u})),t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return l})),t.d(n,"f",(function(){return d})),t.d(n,"g",(function(){return f})),t.d(n,"h",(function(){return p})),t.d(n,"i",(function(){return m})),t.d(n,"e",(function(){return b})),t.d(n,"m",(function(){return g})),t.d(n,"d",(function(){return v})),t.d(n,"k",(function(){return A})),t.d(n,"s",(function(){return S})),t.d(n,"o",(function(){return w})),t.d(n,"u",(function(){return h})),t.d(n,"r",(function(){return O})),t.d(n,"q",(function(){return P})),t.d(n,"n",(function(){return y}));var r="multipart/signed",i="application/pkcs7-mime",o="application/x-pkcs7-mime",a=".p7m",c="CLSID:56023A83-B4FC-413B-9285-6BB1DAD977A2",u="CLASSID",s="4",l="0800",d=57,f=78,p=16,m=11,b="IPM.Note.SMIME.MultipartSigned",g="smime-",v="image",A="OwaToSmime",S="SmimeToOwa",w="en-US",h=["Culture","CodePage","AttachmentSizeLimit","UseKeyIdentifier","AllowUserChoiceOfSigningCertificate","IncludeCertificateChainWithoutRootCertificate","IncludeCertificateChainAndRootCertificate","EncryptTemporaryBuffers","SignedEmailCertificateInclusion","IncludeSmimeCapabilitiesInMessage","CopyRecipientHeaders","OnlyUseSmartCard","EncryptionAlgorithms","SigningAlgorithms","AlwaysEncrypt","AlwaysSign","TripleWrapSignedEncryptedMail","BccEncryptedEmailForking"],O="OwaSmimeEdgeExtension.appxbundle",P="https://microsoftedge.microsoft.com/addons/detail/gamjhjfeblghkihfjdpmbpajhlpmobbp",y="chrome-extension://maafgiompdekodanheihhgilkjchcakm/Options.html"},1860:function(e,n,t){"use strict";var r=t(0),i=t(2302),o=t(3);var a=Object(o.mutatorAction)("removeInfoBarMessages",(function(e,n){e&&(Array.isArray(n)?n:n?[n]:e.infoBarIds?Object(r.__spread)(e.infoBarIds):[]).forEach((function(n){return function(e,n){var t=e.infoBarIds&&e.infoBarIds.indexOf(n);t>=0&&e.infoBarIds.splice(t,1);var r=e.infoBarHostKey;i.b[r]&&(delete i.b[r][n],0===Object.keys(i.b[r]).length&&delete i.b[r])}(e,n)}))}));n.a=a},1864:function(e,n,t){"use strict";var r=t(0),i=t(2302),o=t(188),a=Object(o.action)("addInfoBarMessage")((function(e,n,t){if(e){-1==e.infoBarIds.indexOf(n)?e.infoBarIds.push(n):e.infoBarIds=Object(r.__spread)(e.infoBarIds);var o=e.infoBarHostKey;t&&(i.b[o]||(i.b[o]={}),i.b[o][n]=t)}}));n.a=a},1895:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r="IPM.Note.SMIME"},1923:function(e,n,t){"use strict";var r=t(3);n.a=Object(r.action)("ON_ATTACHMENT_CREATED",(function(e,n,t){return{parentItemId:e,attachmentId:n,attachment:t}}))},1924:function(e,n,t){"use strict";var r=t(3);n.a=Object(r.action)("ON_ATTACHMENT_DELETED",(function(e,n,t){return{parentItemId:e,attachmentId:n,attachment:t}}))},2025:function(e,n,t){"use strict";t.d(n,"d",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return u}));var r=t(1797),i=t(1895);function o(e){return e&&0===e.indexOf(r.e)}function a(e){return e&&0===e.indexOf(i.a)&&!o(e)}function c(e){return e&&0===e.indexOf(i.a)}function u(e){return e.match(/^ipm\.(appointment|schedule\.meeting(?!\.notification))/i)}},219:function(e,n,t){"use strict";var r,i,o,a=t(3),c=Object(a.action)("setOptionValue",(function(e,n){return{feature:e,value:n}})),u=Object(a.action)("assignOptionValue",(function(e,n){return{feature:e,value:n}})),s=Object(a.action)("verifyAndSetOptionValues",(function(e){return{potentialOptionValues:e}})),l=Object(a.action)("setOptionValue",(function(e,n){return{feature:e,value:n}})),d=t(0);!function(e){e[e.TestFeature=1]="TestFeature",e[e.SmartSuggestions=2]="SmartSuggestions",e[e.DiverseEmojis=4]="DiverseEmojis",e[e.SurfaceActions=5]="SurfaceActions",e[e.SkypeNotifications=6]="SkypeNotifications",e[e.WebPushNotifications=7]="WebPushNotifications",e[e.Confetti=8]="Confetti",e[e.GdprAdsPrefs=9]="GdprAdsPrefs",e[e.CalendarSurfaceAddins=10]="CalendarSurfaceAddins",e[e.ExternalImages=11]="ExternalImages",e[e.EventCapture=12]="EventCapture",e[e.Translation=14]="Translation",e[e.CalendarSurfaceOptions=15]="CalendarSurfaceOptions",e[e.TxpEventNotifications=16]="TxpEventNotifications",e[e.MentionEventNotifications=17]="MentionEventNotifications",e[e.ComposeAssistance=18]="ComposeAssistance",e[e.ActivityFeed=19]="ActivityFeed",e[e.AmpDeveloper=20]="AmpDeveloper",e[e.CalendarHelp=21]="CalendarHelp",e[e.LinkedInViewProfile=22]="LinkedInViewProfile",e[e.Bohemia=23]="Bohemia",e[e.GdprAdsV2=24]="GdprAdsV2",e[e.Proofing=25]="Proofing",e[e.ActiveProxyAddress=26]="ActiveProxyAddress",e[e.OutlookSpaces=27]="OutlookSpaces",e[e.GdprAdsV3=28]="GdprAdsV3",e[e.SxS=29]="SxS"}(r||(r={})),function(e){e[e.EditInBrowser=0]="EditInBrowser",e[e.EditInDesktop=1]="EditInDesktop",e[e.EditAndReply=2]="EditAndReply"}(i||(i={}));var f=Object(a.createStore)("owsOptionsStore",{options:(o={},o[r.SmartSuggestions]={feature:r.SmartSuggestions,smartSuggestionsEnabled:!1,browserLocationEnabled:!1},o[r.DiverseEmojis]={feature:r.DiverseEmojis,diverseEmojisSelectedSkinTone:""},o[r.SurfaceActions]={feature:r.SurfaceActions,readSurfaceActions:[],readSurfaceAddins:[],composeSurfaceActions:[],composeSurfaceAddins:[]},o[r.SkypeNotifications]={feature:r.SkypeNotifications,skypeMessageNotification:1,skypeCallingNotification:1},o[r.WebPushNotifications]={feature:r.WebPushNotifications,enabled:!1,applicationServerKey:null},o[r.Confetti]={feature:r.Confetti,confettiEnabled:!1},o[r.GdprAdsPrefs]={feature:r.GdprAdsPrefs,consentString:null,allowStorageAndAccess:!1,allowPersonalization:!1,allowAdSelectionDeliveryReporting:!1,allowContentSelectionDeliveryReporting:!1,allowMeasurement:!1},o[r.GdprAdsV2]={feature:r.GdprAdsV2,consentString:null,allowStorageAndAccess:!0,allowPersonalization:!0,allowAdSelectionDeliveryReporting:!0,allowContentSelectionDeliveryReporting:!0,allowMeasurement:!0,disselectedVendorId:[],selectedVendorId:[]},o[r.GdprAdsV3]={feature:r.GdprAdsV3,encodedTCString:null,allStoreAndAccessDevice:!1,allowDevelopAndImproveProduct:!1,allowPersonalisedAds:!1,allowPersonalisedAdsSelectBasicAd:!1,allowPersonalisedAdsApplyMarketResearch:!1,allowPersonalisedAdsMeasureContentPerformance:!1,allowPersonalisedAdsSelectPersonalisedAds:!1,allowPersonalisedAdsMeasureAdPerf:!1,allowPersonalisedAdsSelectPersonalisedContent:!1,allowPersonalisedAdsCreatePersonalisedContentProfile:!1,allowPersonalisedAdsCreatePersonalisedAdsProfile:!1,allowPreciseGeoDataAndIdentifyDevice:!1,allowPreciseGeoDataAndIdentifyDeviceScanDevice:!1,allowPreciseGeoDataAndIdentifyDeviceGeoData:!1,disselectedVendorId:[],selectedVendorId:[]},o[r.CalendarSurfaceAddins]={feature:r.CalendarSurfaceAddins,calendarSurfaceAddins:[]},o[r.ExternalImages]={feature:r.ExternalImages,externalImagesSelectedOption:null},o[r.EventCapture]={autoCollectionEnabled:!1},o[r.Translation]={feature:r.Translation,translationMode:0,targetLanguage:"",excludedLanguages:[]},o[r.CalendarSurfaceOptions]={feature:r.CalendarSurfaceOptions,agendaPaneIsClosed:!0,lastKnownRoamingTimeZone:void 0,roamingTimeZoneNotificationsIsDisabled:void 0,allDayWellHeight:0,numDaysInDayRange:1,workLifeView:3},o[r.MentionEventNotifications]={feature:r.MentionEventNotifications,enabled:!1},o[r.TxpEventNotifications]={feature:r.TxpEventNotifications,enabled:!1},o[r.ComposeAssistance]={feature:r.ComposeAssistance,composeAssistanceEnabled:!1},o[r.AmpDeveloper]={feature:r.AmpDeveloper,enabled:!0,allowedSender:[]},o[r.ActivityFeed]={feature:r.ActivityFeed,OWASurfaceOptions:{SupportedTypes:[],DisabledInFeedPanel:[]}},o[r.LinkedInViewProfile]={dismissed:!1},o[r.CalendarHelp]={feature:r.CalendarHelp,calendarHelpEnabled:!1},o[r.Bohemia]={feature:r.Bohemia,bohemiaEnabled:!1,fluidEnabledForTenant:!1},o[r.Proofing]={feature:r.Proofing,spellCheckEnabled:!0,grammarEnabled:!0,writingRefinementsEnabled:!1,proofingLocale:void 0,overriddenOptions:void 0},o[r.ActiveProxyAddress]={feature:r.ActiveProxyAddress,activeProxyAddresses:[]},o[r.OutlookSpaces]={feature:r.OutlookSpaces,backgroundColor:"",gestureScheme:"pointer",toolboxCollapsed:!0},o[r.SxS]={feature:r.SxS,hideReadingPane:!1,defaultEditCommand:i.EditInBrowser},o)}),p=t(16);function m(e){return(null==e?void 0:e.feature)in r}var b,g=t(321);function v(e,n){f().options[e]=n}function A(e){return f().options[e]}Object(a.mutator)(u,(function(e){var n=e.feature,t=e.value;g(f().options[n],t)})),Object(a.mutator)(c,(function(e){v(e.feature,e.value)})),Object(a.mutator)(l,(function(e){var n=e.feature,t=e.value;Object(p.extendObservable)(f().options[n],t)})),Object(a.mutator)(s,(function(e){var n,t,r=e.potentialOptionValues;try{for(var i=Object(d.__values)(r),o=i.next();!o.done;o=i.next()){var a=o.value;a&&m(a)&&v(a.feature,a)}}catch(e){n={error:e}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(n)throw n.error}}})),function(e){e[e.Work=1]="Work",e[e.Life=2]="Life"}(b||(b={})),t.d(n,"h",(function(){return c})),t.d(n,"d",(function(){return u})),t.d(n,"i",(function(){return s})),t.d(n,"g",(function(){return l})),t.d(n,"f",(function(){return f})),t.d(n,"e",(function(){return A})),t.d(n,"c",(function(){return b})),t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}))},2302:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}));var r={};function i(e,n){var t,i=e.infoBarHostKey;return null===(t=r[i])||void 0===t?void 0:t[n]}},2807:function(e,n,t){"use strict";n.a=function(e){if(e){var n=e.shouldEncryptMessageAsSmime,t=e.shouldSignMessageAsSmime;return n||t}return!1}},2876:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return i})),t.d(n,"e",(function(){return o})),t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return c}));var r="X-OWA-SmimeInstalled",i="1",o="SmimeWithoutActiveX",a="message/rfc822",c="ErrorSmimeSendCancelled"},2935:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0);function i(e){return Object(r.__assign)({__type:"SingleRecipientType:#Exchange"},e)}},352:function(e,n,t){"use strict";var r,i;t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i})),function(e){e[e.xSmall=0]="xSmall",e[e.small=1]="small",e[e.medium=2]="medium",e[e.large=3]="large"}(r||(r={})),function(e){e[e.normal=0]="normal",e[e.large=1]="large"}(i||(i={}))},4506:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}));var r=function(e,n,t){return void 0===e&&(e=!1),void 0===n&&(n=!1),void 0===t&&(t=0),{shouldEncryptMessageAsSmime:e,shouldSignMessageAsSmime:n,signingCertRawData:null,errorCode:t,errorContext:0,smimeBccForkingMode:0,currentBccRecipientIndex:-1}};function i(e){switch(e){case 6:return r(!0,!1);case 10:case 11:return r(!1,!0);case 12:case 13:case 14:return r(!0,!0);case-1:case 0:default:return r()}}},496:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e[e.NotStarted=0]="NotStarted",e[e.Loading=1]="Loading",e[e.Ready=2]="Ready"}(r||(r={}))},566:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(496),i=t(3),o=t(670),a=t(4),c={state:r.a.NotStarted,isPopoutV2:Object(a.a)(o.a)==o.b},u=Object(i.createStore)("popoutChild",c);u()},5695:function(e,n,t){"use strict";function r(e){if(e.smimeBccForkingMode){var n=e.smimeBccForkingMode;return 2===n||3===n}return!1}t.d(n,"a",(function(){return r}))},574:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return c}));var r,i=2,o=[window.location.origin];function a(e,n,t){var r={version:i,type:n,serializedData:JSON.stringify(t)};e.postMessage(JSON.stringify(r),"*")}function c(e){if(o.indexOf(e.origin)>=0){var n=void 0;try{n=JSON.parse(e.data)}catch(e){return null}if(n&&i==n.version)return n}return null}!function(e){e[e.Unknown=0]="Unknown",e[e.PopoutReady=1]="PopoutReady",e[e.SetData=2]="SetData",e[e.CloseWindow=3]="CloseWindow",e[e.DeeplinkReady=4]="DeeplinkReady"}(r||(r={}))},660:function(e,n,t){"use strict";n.a=function(e,n){return e===n||e!=e&&n!=n}},670:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o}));var r="popoutv2",i="1",o="_owa_projection_root"},709:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),i=t(1),o=t(352),a=t(209),c=t(55),u=t(732),s=Object(a.a)(),l=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(n,e),n.prototype.render=function(){var e=this.props,n=e.type,t=e.size,a=e.ariaLabel,l=e.ariaLive,d=e.styles,f=e.label,p=e.theme,m=e.className,b=e.labelPosition,g=a,v=Object(c.j)(this.props,c.h,["size"]),A=t;void 0===A&&void 0!==n&&(A=n===o.b.large?o.a.large:o.a.medium);var S=s(d,{theme:p,size:A,className:m,labelPosition:b});return i.createElement("div",Object(r.__assign)({},v,{className:S.root}),i.createElement("div",{className:S.circle}),f&&i.createElement("div",{className:S.label},f),g&&i.createElement("div",{role:"status","aria-live":l},i.createElement(u.a,null,i.createElement("div",{className:S.screenReaderText},g))))},n.defaultProps={size:o.a.medium,ariaLive:"polite",labelPosition:"bottom"},n}(i.Component)},788:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(296),i=t(219),o=t(40);function a(){var e;return(e={})[i.b.SmartSuggestions]={smartSuggestionsEnabled:!0,browserLocationEnabled:!1},e[i.b.DiverseEmojis]={diverseEmojisSelectedSkinTone:""},e[i.b.SurfaceActions]={readSurfaceActions:["Reply","ReplyAll","Forward"].concat(Object(r.a)()?[]:["LikeUnlike"]),readSurfaceAddins:[],composeSurfaceActions:["AddAttachment","AddClassicAttachment","InsertLink","AddInlineImage","AddEmoji","ToggleDictation","ProofingOptions","QuickUse","ToggleRibbon","FluidHeroButton"],composeSurfaceAddins:[]},e[i.b.SkypeNotifications]={skypeMessageNotification:1,skypeCallingNotification:1},e[i.b.Confetti]={confettiEnabled:!0},e[i.b.ComposeAssistance]={composeAssistanceEnabled:!0},e[i.b.GdprAdsPrefs]={feature:i.b.GdprAdsPrefs,consentString:null,allowStorageAndAccess:!1,allowPersonalization:!1,allowAdSelectionDeliveryReporting:!1,allowContentSelectionDeliveryReporting:!1,allowMeasurement:!1},e[i.b.CalendarSurfaceAddins]={calendarSurfaceAddins:[]},e[i.b.ExternalImages]={externalImagesSelectedOption:0},e[i.b.EventCapture]={autoCollectionEnabled:!1},e[i.b.Translation]={translationMode:0,targetLanguage:"",excludedLanguages:[]},e[i.b.CalendarSurfaceOptions]={agendaPaneIsClosed:!1,lastKnownRoamingTimeZone:null,roamingTimeZoneNotificationsIsDisabled:!1,allDayWellHeight:0,numDaysInDayRange:1,workLifeView:3},e[i.b.AmpDeveloper]={enabled:Object(o.i)("rp-ampDefault"),allowedSender:[]},e[i.b.CalendarHelp]={calendarHelpEnabled:!1},e[i.b.LinkedInViewProfile]={dismissed:!1},e[i.b.Bohemia]={bohemiaEnabled:Object(o.i)("cmp-prague")},e[i.b.GdprAdsV2]={feature:i.b.GdprAdsV2,consentString:null,allowStorageAndAccess:!0,allowPersonalization:!0,allowAdSelectionDeliveryReporting:!0,allowContentSelectionDeliveryReporting:!0,allowMeasurement:!0,disselectedVendorId:[],selectedVendorId:[]},e[i.b.GdprAdsV3]={feature:i.b.GdprAdsV3,encodedTCString:null,allStoreAndAccessDevice:!1,allowDevelopAndImproveProduct:!1,allowPersonalisedAds:!1,allowPersonalisedAdsSelectBasicAd:!1,allowPersonalisedAdsApplyMarketResearch:!1,allowPersonalisedAdsMeasureContentPerformance:!1,allowPersonalisedAdsSelectPersonalisedAds:!1,allowPersonalisedAdsMeasureAdPerf:!1,allowPersonalisedAdsSelectPersonalisedContent:!1,allowPersonalisedAdsCreatePersonalisedContentProfile:!1,allowPersonalisedAdsCreatePersonalisedAdsProfile:!1,allowPreciseGeoDataAndIdentifyDevice:!1,allowPreciseGeoDataAndIdentifyDeviceScanDevice:!1,allowPreciseGeoDataAndIdentifyDeviceGeoData:!1,disselectedVendorId:[],selectedVendorId:[]},e[i.b.Proofing]={feature:i.b.Proofing,spellCheckEnabled:!0,grammarEnabled:!0,writingRefinementsEnabled:!0,proofingLocale:void 0,overriddenOptions:void 0},e[i.b.ActiveProxyAddress]={feature:i.b.ActiveProxyAddress,activeProxyAddresses:[]},e[i.b.OutlookSpaces]={feature:i.b.OutlookSpaces,backgroundColor:"",gestureScheme:"pointer",toolboxCollapsed:!0},e[i.b.SxS]={feature:i.b.SxS,hideReadingPane:!1,defaultEditCommand:i.a.EditInBrowser},e}},791:function(e,n,t){"use strict";var r=t(44),i=t(1003),o=t(808),a=t(32),c=t(1),u=t(807),s=t(566),l=t(40),d=t(496),f=t(1252),p=t(1256),m=Object(a.a)((function(e){c.useEffect((function(){Object(l.i)("rp-popoutsDebug")||b()}),[]);return c.createElement("div",{className:p.view},Object(s.a)().state==d.a.Loading?c.createElement("span",null,c.createElement(f.a,null),e.loadingString):c.createElement("button",{onClick:b},"Get Data"))}));function b(){Object(u.a)()}function g(e,n,t,r){var i="";if(r)i="readimid/",i+=encodeURIComponent(btoa(r));else{if(i=t?"readconv/":"read/",e&&"GroupMailbox"==e.type){i+="group/";var o=e.mailboxSmtpAddress.split("@");i+=o[1]+"/"+o[0]+"/"}i+=encodeURIComponent(t||n)}return i}var v=t(495);function A(e){var n=e&&e!==window;return Object(v.v)()||n}t.d(n,"h",(function(){return w})),t.d(n,"c",(function(){return i.a})),t.d(n,"i",(function(){return o.a})),t.d(n,"b",(function(){return m})),t.d(n,"a",(function(){return d.a})),t.d(n,"f",(function(){return s.a})),t.d(n,"d",(function(){return u.b})),t.d(n,"e",(function(){return g})),t.d(n,"g",(function(){return A}));var S=new r.c((function(){return t.e(883).then(t.bind(null,17189))})),w=new r.b(S,(function(e){return e.bootPopout}))},807:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r,i=t(0),o=t(808),a=t(574),c=t(496),u=t(566),s=!1;function l(){Object(o.a)(c.a.Loading),r?r():s=!0}function d(e){return Object(i.__awaiter)(this,void 0,void 0,(function(){return Object(i.__generator)(this,(function(n){switch(n.label){case 0:return s?[3,2]:[4,new Promise((function(e){r=function(){e()}}))];case 1:n.sent(),n.label=2;case 2:return[2,Object(u.a)().isPopoutV2?new Promise((function(n,t){var r=function(t){var i=Object(a.b)(t);if(i&&i.type==a.a.SetData){window.removeEventListener("message",r);var o=void 0;try{o=e?e(i.serializedData):JSON.parse(i.serializedData)}catch(e){}n(o)}};window.addEventListener("message",r);try{var i=window.opener;Object(a.c)(i,a.a.PopoutReady,null)}catch(e){n(null)}})):Promise.resolve(null)]}}))}))}},808:function(e,n,t){"use strict";var r=t(566),i=t(3),o=t(496),a=t(574);n.a=Object(i.mutatorAction)("setPopoutChildState",(function(e){var n=Object(r.a)();n.state=e,e==o.a.Ready&&n.isPopoutV2&&window.opener&&Object(a.c)(window.opener,a.a.DeeplinkReady,null)}))},876:function(e,n,t){"use strict";var r=t(44),i=t(985),o=t(219),a=t(3),c=[o.b.SurfaceActions];Object(a.orchestrator)(i.a,(function(e){var n=e.defaultOptions;c.forEach((function(e){n[e]&&Object(o.g)(Number(e),n[e])}))}));var u=t(788);t.d(n,"f",(function(){return l})),t.d(n,"i",(function(){return d})),t.d(n,"g",(function(){return f})),t.d(n,"h",(function(){return p})),t.d(n,"d",(function(){return u.a})),t.d(n,"e",(function(){return o.e})),t.d(n,"c",(function(){return o.c})),t.d(n,"b",(function(){return o.b})),t.d(n,"a",(function(){return o.a}));var s=new r.c((function(){return t.e(866).then(t.bind(null,17245))})),l=new r.a(s,(function(e){return e.createOrUpdateOptionsForFeature})),d=new r.a(s,(function(e){return e.updateAddinPinStatus})),f=(new r.a(s,(function(e){return e.updateAddInArray})),new r.b(s,(function(e){return e.getServerOptionsForFeature}))),p=new r.a(s,(function(e){return e.loadOptions}))},877:function(e,n,t){"use strict";t.d(n,"b",(function(){return c}));var r=t(44),i=t(968);t.d(n,"a",(function(){return i.a}));var o=new r.c((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(184),t.e(527)]).then(t.bind(null,1572))})),a=new r.b(o,(function(e){return e.confirmAction}));function c(e,n,t,r){return a.import().then((function(i){return i(e,n,t,r)}))}},968:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e[e.ok=0]="ok",e[e.cancel=1]="cancel",e[e.dismiss=2]="dismiss",e[e.continue=3]="continue"}(r||(r={}))},985:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(3),i=t(788),o=Object(r.action)("APPLY_DEFAULT_OPTIONS_ON_LOAD_FAIL",(function(e){return void 0===e&&(e=Object(i.a)()),{defaultOptions:e}}))}}]);
//# sourceMappingURL=owa.MailBoot~Addins~Editor~smime.js.map
self.scriptsLoaded['owa.MailBoot~Addins~Editor~smime.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~Addins~Editor~smime.js'] = (new Date()).getTime();