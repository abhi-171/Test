self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~InlineImages.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[615],{1011:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),a=n(1),r=n(378),o=n(220),s=n(203),l=n(714);function c(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=e;return o.isSlot?0===(n=a.Children.toArray(n)).length?o(t):o(Object(i.__assign)(Object(i.__assign)({},t),{children:n})):a.createElement.apply(a,Object(i.__spreadArrays)([e,t],n))}function u(e,t){void 0===t&&(t={});var n=t.defaultProp,o=void 0===n?"children":n;return function(t,n,c,u,d){if(a.isValidElement(n))return n;var m=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];for(var a={},o=[],c=0,u=n;c<u.length;c++){var d=u[c];o.push(d&&d.className),Object(l.a)(a,d)}return a.className=Object(r.a)([e,o],{rtl:Object(s.a)(t)}),a}(u,d,t,function(e,t){var n,i;"string"==typeof t||"number"==typeof t||"boolean"==typeof t?((n={})[e]=t,i=n):i=t;return i}(o,n));if(c){if(c.component){var h=c.component;return a.createElement(h,Object(i.__assign)({},m))}if(c.render)return c.render(m,e)}return a.createElement(e,Object(i.__assign)({},m))}}var d=Object(o.c)((function(e){return u(e)}));function m(e,t){var n={},i=e,a=function(e){if(t.hasOwnProperty(e)){var a=function(n){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];if(a.length>0)throw new Error("Any module using getSlots must use withSlots. Please see withSlots javadoc for more info.");return h(t[e],n,i[e],i.slots&&i.slots[e],i._defaultStyles&&i._defaultStyles[e],i.theme)};a.isSlot=!0,n[e]=a}};for(var r in t)a(r);return n}function h(e,t,n,i,a,r){return void 0!==e.create?e.create(t,n,i,a):d(e)(t,n,i,a,r)}},1015:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(52),a=n(707);function r(e,t){Object.keys(a.a).some((function(n){return a.a[n]==t&&(Object(i.h)(e,{key:n,id:t},{isCore:!0}),!0)}))}},1031:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(0),a=n(1),r=n(209),o=n(310),s=n(1032),l=n(749),c=n(86),u=Object(r.a)(),d=function(e){function t(t){var n=e.call(this,t)||this;return n.rootElement=a.createRef(),Object(o.a)(n),n.state={},n._defaultCalloutProps={beakWidth:16,gapSpace:0,setInitialFocus:!0,doNotLayer:!1,directionalHint:c.DirectionalHint.rightCenter},n}return Object(i.__extends)(t,e),t.prototype.focus=function(){this.rootElement.current&&this.rootElement.current.focus()},t.prototype.render=function(){var e=this.props,t=e.calloutProps,n=e.targetElement,r=e.onDismiss,o=e.hasCloseButton,c=void 0===o?this.props.hasCloseIcon:o,d=e.isWide,m=e.styles,h=e.theme,f=e.target,g=Object(i.__assign)(Object(i.__assign)({},this._defaultCalloutProps),t),b={theme:h,isWide:d,calloutProps:Object(i.__assign)(Object(i.__assign)({},g),{theme:g.theme}),hasCloseButton:c},p=u(m,b),v=p.subComponentStyles?p.subComponentStyles.callout:void 0;return a.createElement(l.a,Object(i.__assign)({target:f||n,onDismiss:r},g,{className:p.root,styles:v,hideOverflow:!0}),a.createElement("div",{ref:this.rootElement},a.createElement(s.a,Object(i.__assign)({},this.props))))},t.defaultProps={calloutProps:{beakWidth:16,gapSpace:0,setInitialFocus:!0,doNotLayer:!1,directionalHint:c.DirectionalHint.rightCenter}},t}(a.Component)},1032:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(469),a=n(1033),r=n(828),o=Object(i.a)(a.a,r.a,void 0,{scope:"TeachingBubbleContent"})},1033:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var i=n(0),a=n(1),r=n(209),o=n(63),s=n(310),l=n(521),c=n(883),u=n(703),d=n(406),m=n(903),h=n(886),f=Object(r.a)(),g=function(e){function t(t){var n=e.call(this,t)||this;return n.rootElement=a.createRef(),n._onKeyDown=function(e){n.props.onDismiss&&e.which===o.a.escape&&n.props.onDismiss()},Object(s.a)(n),n.state={},n}return Object(i.__extends)(t,e),t.prototype.componentDidMount=function(){this.props.onDismiss&&document.addEventListener("keydown",this._onKeyDown,!1)},t.prototype.componentWillUnmount=function(){this.props.onDismiss&&document.removeEventListener("keydown",this._onKeyDown)},t.prototype.focus=function(){this.rootElement.current&&this.rootElement.current.focus()},t.prototype.render=function(){var e,t,n,r,o,s=this.props,g=s.children,b=s.illustrationImage,p=s.primaryButtonProps,v=s.secondaryButtonProps,y=s.headline,O=s.hasCondensedHeadline,j=s.hasCloseButton,w=void 0===j?this.props.hasCloseIcon:j,_=s.onDismiss,x=s.closeButtonAriaLabel,C=s.hasSmallHeadline,S=s.isWide,k=s.styles,N=s.theme,B=s.ariaDescribedBy,I=s.ariaLabelledBy,T=s.footerContent,E=s.focusTrapZoneProps,P=f(k,{theme:N,hasCondensedHeadline:O,hasSmallHeadline:C,hasCloseButton:w,hasHeadline:!!y,isWide:S,primaryButtonClassName:p?p.className:void 0,secondaryButtonClassName:v?v.className:void 0});if(b&&b.src&&(e=a.createElement("div",{className:P.imageContent},a.createElement(d.a,Object(i.__assign)({},b)))),y){var F="string"==typeof y?"p":"div";t=a.createElement("div",{className:P.header},a.createElement(F,{role:"heading",className:P.headline,id:I},y))}if(g){var A="string"==typeof g?"p":"div";n=a.createElement("div",{className:P.body},a.createElement(A,{className:P.subText,id:B},g))}return(p||v||T)&&(r=a.createElement(m.a,{className:P.footer,horizontal:!0,horizontalAlign:T?"space-between":"end"},a.createElement(m.a.Item,{align:"center"},a.createElement("span",null,T)),a.createElement(m.a.Item,null,v&&a.createElement(l.a,Object(i.__assign)({},v,{className:P.secondaryButton})),p&&a.createElement(c.a,Object(i.__assign)({},p,{className:P.primaryButton}))))),w&&(o=a.createElement(u.a,{className:P.closeButton,iconProps:{iconName:"Cancel"},title:x,ariaLabel:x,onClick:_})),a.createElement("div",{className:P.content,ref:this.rootElement,role:"dialog",tabIndex:-1,"aria-labelledby":I,"aria-describedby":B,"data-is-focusable":!0},e,a.createElement(h.a,Object(i.__assign)({isClickableOutsideFocusTrap:!0},E),a.createElement("div",{className:P.bodyContent},t,n,r,o)))},t}(a.Component)},15261:function(e){e.exports=JSON.parse('{"d":"IDa","g":"JDa","e":"KDa","f":"LDa","b":"MDa","c":"NDa","a":"ODa"}')},1575:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(0),a=n(1),r=n(12),o=n(338),s=n(192),l=n(1011),c=n(714);function u(e,t){void 0===t&&(t={});var n=t.factoryOptions,u=(void 0===n?{}:n).defaultProp,d=function(n){var l,u,d,m=(l=t.displayName,u=a.useContext(o.a),d=t.fields,s.a.getSettings(d||["theme","styles","tokens"],l,u.customizations)),h=t.state;h&&(n=Object(i.__assign)(Object(i.__assign)({},n),h(n)));var f=n.theme||m.theme,g=function e(t,n){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];for(var o={},s=0,l=a;s<l.length;s++){var u=l[s];u&&(u="function"==typeof u?u(t,n):u,Array.isArray(u)&&(u=e.apply(void 0,Object(i.__spreadArrays)([t,n],u))),Object(c.a)(o,u))}return o}(n,f,t.tokens,m.tokens,n.tokens),b=function(e,t,n){for(var i=[],a=3;a<arguments.length;a++)i[a-3]=arguments[a];return r.concatStyleSets.apply(void 0,i.map((function(i){return"function"==typeof i?i(e,t,n):i})))}(n,f,g,t.styles,m.styles,n.styles),p=Object(i.__assign)(Object(i.__assign)({},n),{styles:b,tokens:g,_defaultStyles:b,theme:f});return e(p)};return d.displayName=t.displayName||e.name,u&&(d.create=Object(l.a)(d,{defaultProp:u})),Object(c.a)(d,t.statics),d}},1579:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(469),a=n(1031),r=n(828),o=Object(i.a)(a.a,r.a,void 0,{scope:"TeachingBubble"})},17518:function(e,t,n){"use strict";n.r(t);var i=n(1678),a=n(15261),r=n(3384),o=n(7),s="data-imgsize",l="small",c="medium",u="bestfit",d="original",m=function(){function e(){var e=this;this.onRemoveImage=function(){e.image&&e.editor&&(e.editor.addUndoSnapshot((function(){e.editor.deleteNode(e.image)})),e.image=null)},this.setImageSize=function(t,n){var i=n.key,a="",r="";if(e.image&&e.editor){switch(i){case l:a=e.image.naturalWidth/4+"px";break;case c:a=e.image.naturalWidth/2+"px";break;case u:r="100%";break;case d:a=e.image.naturalWidth+"px"}e.editor.addUndoSnapshot((function(){e.image.removeAttribute("width"),e.image.removeAttribute("height"),e.image.style.width=a,e.image.style.maxWidth=r,e.image.style.height="",e.image.setAttribute(s,i)})),e.image=null}},this.onAltText=function(){r.h.import().then((function(t){e.image&&e.editor&&t(e.image,e.editor.getDocument().defaultView,(function(t){e.image&&(e.image.alt=t,e.image=null)}))}))}}return e.prototype.getName=function(){return"InlineImageResize"},e.prototype.initialize=function(e){this.editor=e},e.prototype.dispose=function(){this.editor=null,this.image=null},e.prototype.onPluginEvent=function(e){7==e.eventType&&"ImageResize"==e.source&&Object(i.safeInstanceOf)(e.data,"HTMLImageElement")&&e.data.removeAttribute(s)},e.prototype.getContextMenuItems=function(e){var t,n=this;if(Object(i.safeInstanceOf)(e,"HTMLImageElement")){this.image=e;var r=e.getAttribute(s),m=((t={})[u]=Object(o.b)(a.d),t[l]=Object(o.b)(a.g),t[c]=Object(o.b)(a.e),t[d]=Object(o.b)(a.f),t);return[{name:Object(o.b)(a.b),key:"resize",subMenuProps:{items:Object.keys(m).map((function(e){return{name:m[e],key:e,onClick:n.setImageSize,isChecked:r==e,canCheck:!0}}))}},{name:Object(o.b)(a.c),key:"remove",onClick:this.onRemoveImage},{name:Object(o.b)(a.a),key:"addAltText",onClick:this.onAltText}]}return null},e}();n.d(t,"InlineImageResizePlugin",(function(){return m}))},3344:function(e){e.exports=JSON.parse('{"a":"nga","b":"oga"}')},3384:function(e,t,n){"use strict";var i=n(44),a=n(1),r=n(32),o=n(882),s=n(1579),l=n(7),c=n(86),u=n(5412),d=n(3344),m=n(5413),h={src:n(5415)},f=Object(o.d)(Object(r.a)((function(e){var t=e.target;return a.createElement(s.a,{calloutProps:{beakWidth:15,directionalHint:c.DirectionalHint.topLeftEdge,className:m.teachingBubble},illustrationImage:h,target:t,hasCloseIcon:!0,isWide:!0,onDismiss:function(){Object(o.e)(e.lid)},hasSmallHeadline:!0,headline:Object(l.b)(u.c)},a.createElement("span",null,Object(l.b)(u.a),a.createElement("span",{id:"insertButtonText"},Object(l.b)(d.b)),Object(l.b)(u.b)))})));n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return y})),n.d(t,"e",(function(){return O})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return w})),n.d(t,"d",(function(){return f}));var g=new i.c((function(){return Promise.all([n.e(4),n.e(22),n.e(24),n.e(30),n.e(41),n.e(290),n.e(600)]).then(n.bind(null,17222))})),b=Object(i.d)(g,(function(e){return e.TextColorPicker})),p=Object(i.d)(g,(function(e){return e.BackColorPicker})),v=Object(i.d)(g,(function(e){return e.FontNamePicker})),y=Object(i.d)(g,(function(e){return e.FontSizePicker})),O=Object(i.d)(g,(function(e){return e.InsertTableCallout})),j=new i.b(g,(function(e){return e.displayInsertLinkDialog})),w=new i.b(g,(function(e){return e.showImageAltTextDialog}))},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i=n(3),a=n(16),r=Object(i.createStore)("lightningState",{unseenItems:new a.ObservableMap,lightedCount:0,lastShownId:null}),o=r()},526:function(e,t,n){"use strict";var i=n(44),a=n(358),r=n(34),o=n(0),s=n(4),l=n(16),c=n(3),u=Object(c.mutatorAction)("initializeLightning",(function(e){var t,n;if(r.g.info("initialize lightning store"),Object(a.a)().lastShownId=null,Object(a.a)().lightedCount=0,Object(a.a)().unseenItems=new l.ObservableMap,e)try{for(var i=Object(o.__values)(e),s=i.next();!s.done;s=i.next()){var c=s.value;Object(a.a)().unseenItems.set(c.identity,c)}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}));var d=n(178),m="ows/v1.0/lightning/items/unseen";function h(){return r.g.info("initialize lightning from server"),Object(d.b)(m).then((function(e){var t=e.map(f);u(t)}))}function f(e){return e.category?{identity:e.id,visible:!1,category:e.category}:{identity:e,visible:!1}}var g,b=n(25),p=n(40),v="lightning",y="UnseenLightening";function O(){var e,t,n;if(!g){var i=Object(s.a)(v);if(i)g=function(e){r.g.info("initialize lightning from override query parameter");var t=e.split(",").map((function(e){return{identity:e,visible:!1}}));return u(t),Promise.resolve()}(i);else{var a=Object(b.a)().PrimeSettings;if(Object(p.i)("lightning-initFromSD")&&a&&a.Items)try{for(var l=Object(o.__values)(a.Items),c=l.next();!c.done;c=l.next()){var d=c.value;if(d.Id===y&&d.Value){n=d.Value,r.g.info("initialize lightning from session data"),u(n.map((function(e){return{identity:e.id,visible:!1,category:e.category}}))),g=Promise.resolve();break}}}catch(t){e={error:t}}finally{try{c&&!c.done&&(t=l.return)&&t.call(l)}finally{if(e)throw e.error}}g||(g=h())}}return g}var j=n(1015),w=Object(c.action)("lightup",(function(e){return{id:e}})),_=w;Object(c.mutator)(w,(function(e){r.g.info("lightup - id:"+e.id),Object(a.a)().lastShownId=e.id,Object(a.a)().lightedCount++;var t=Object(a.a)().unseenItems.get(e.id);t&&(t.visible=!0)})),Object(c.orchestrator)(w,(function(e){Object(j.a)("LIGHTUP",e.id)}));var x,C=n(495);function S(e,t){(r.g.info("lightupOrReject - id:"+e+", recurrenceCount:"+t+", lightedCount:"+Object(a.a)().lightedCount+", lastShown:"+Object(a.a)().lastShownId),Object(C.v)())?r.g.info("lightning is disabled for deeplink"):Object(a.a)().unseenItems.has(e)&&(!Object(a.a)().lastShownId||function(e,t){var n=!1,i=Object(a.a)().lastShownId;if(i&&t&&!function(){var e=Object(a.a)(),t=e.lastShownId,n=e.unseenItems;return t&&n.has(t)&&n.get(t).visible}()){var r=t.indexOf(i),o=t.indexOf(e);r>=0&&r+1==o&&(n=!0)}return n}(e,t)||function(e){var t=Object(a.a)().unseenItems.get(e);return!!t&&t.category==x.UIFeatureDiscovery}(e)||function(e){var t=Object(a.a)().unseenItems.get(e);return!!t&&t.category==x.Compliance}(e))&&_(e)}function k(e,t,n){r.g.info("beginLightning - id:"+e),t((function(){O().then((function(){return S(e,n)})).catch((function(t){r.g.warn("something is wrong, lightning id:"+e+", reason:"+t)}))}))}!function(e){e.None="0",e.UpSell="1",e.FeatureDiscovery="2",e.TeachingMoment="3",e.UITeachingMoment="4",e.UIFeatureDiscovery="5",e.UIUpSell="6",e.JITNewUser="7",e.Compliance="8",e.SatCoreMetric="9",e.UpSellExperiment="10"}(x||(x={}));var N=n(707);n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return a.b})),n.d(t,"b",(function(){return k})),n.d(t,"a",(function(){return N.a}));var B=new i.c((function(){return n.e(456).then(n.bind(null,17421))})),I=new i.a(B,(function(e){return e.endLightningImp}))},5412:function(e){e.exports=JSON.parse('{"c":"Sga","a":"Tga","b":"Uga"}')},5413:function(e,t,n){var i=n(5414),a=n(107);"string"==typeof i&&(i=[[e.i,i]]);for(var r=0;r<i.length;r++)a.loadStyles(i[r][1],!1);i.locals&&(e.exports=i.locals)},5414:function(e,t,n){(t=e.exports=n(106)(!1)).push([e.i,'._1izYgkNS5_0Tu0jywGNt3B .ms-TeachingBubble-headline{color:"[theme:black, default:#000000]";font-size:15px;font-weight:600}._1izYgkNS5_0Tu0jywGNt3B .ms-TeachingBubble-subText{color:"[theme:black, default:#000000]";line-height:200%;font-size:14px;font-weight:400}._1izYgkNS5_0Tu0jywGNt3B .ms-TeachingBubble-subText #insertButtonText{font-weight:600}._1izYgkNS5_0Tu0jywGNt3B .ms-TeachingBubble-closebutton{color:"[theme:neutralPrimary, default:#323130]"}html[dir] ._1izYgkNS5_0Tu0jywGNt3B .ms-TeachingBubble-closebutton{padding-top:20}html[dir] ._1izYgkNS5_0Tu0jywGNt3B .ms-TeachingBubble-closebutton:focus,html[dir] ._1izYgkNS5_0Tu0jywGNt3B .ms-TeachingBubble-closebutton:hover{background-color:"[theme:neutralLight, default:#edebe9]"}._1izYgkNS5_0Tu0jywGNt3B .ms-TeachingBubble-content{width:500px}html[dir] ._1izYgkNS5_0Tu0jywGNt3B .ms-TeachingBubble-image{padding:10px 0;margin-bottom:10px}html[dir=ltr] ._1izYgkNS5_0Tu0jywGNt3B .ms-TeachingBubble-image{margin-left:20px}html[dir=rtl] ._1izYgkNS5_0Tu0jywGNt3B .ms-TeachingBubble-image{margin-right:20px}html[dir] ._1izYgkNS5_0Tu0jywGNt3B .ms-Callout-beak{background:"[theme:white, default:#ffffff]"}._1izYgkNS5_0Tu0jywGNt3B .ms-Callout-main{color:"[theme:black, default:#000000]";height:150px}html[dir] ._1izYgkNS5_0Tu0jywGNt3B .ms-Callout-main{background:"[theme:white, default:#ffffff]"}',""]),t.locals={teachingBubble:"_1izYgkNS5_0Tu0jywGNt3B"}},5415:function(e,t,n){e.exports=n.p+"../resources/images/no_attachments-f684aef4fb56aa7fa0773f9a19c9afca.svg"},707:function(e,t,n){"use strict";var i;n.d(t,"a",(function(){return i})),function(e){e.UserVoiceSatisfactionFirstRun="0",e.UserVoiceSatisfactionSecondRun="1",e.ConsumerRefreshFRE="2",e.AnimatedConsumerRefreshFRE="3",e.AnimatedConsumerRefreshFRE2="4",e.SettingPanelFirstRunCallout="5",e.SettingIconFirstRunCallout="6",e.AddStorageAccountCallout="7",e.PremiumDomainConnectModal="8",e.WhatsNewFlexPane="10",e.FocusOtherOff="12",e.TargetedAdsGdprPrompt="13",e.WebPushPromotion="14",e.MailGraduatedNewFeatureCarousel="15",e.EdgePromotion="20",e.ActionableMessageTeachingUiTeachingBubblePolicy="21",e.GetStartedFlexPane="22",e.CalendarSurvey="23",e.MiniUserSurveyV1="25",e.TodoCalendarFRE="26",e.TodoMailFRE="27",e.GroupFilesHubFRE="28",e.AddCloudCacheAccountCallout="29",e.NewConsumerRecruitmentCampaign="30",e.InboxPlusFRE="31",e.BusinessCutoverCarousel="32",e.SuiteNps="33",e.InboxPlusEasyOn="34",e.InboxRulesFromDL="35",e.GdprAdsV2="36",e.TimePanelCombinedDndFRE="47",e.UaeEduPrivacyNotification="48",e.OutlookSpacesFRE="49",e.TodoFlaggedEmailList="50",e.DynamicLayoutFolderPaneCollapse="51",e.EdgeUpsell="56",e.OutlookSpacesCapturedPaneFRE="57",e.ProofingTeachingFreeUserFRE="58",e.ProofingTeachingPremiumUserFRE="59",e.OutlookSpacesNotePaneFRE="60",e.OutlookSpacesTasksPaneFRE="61",e.OutlookSpacesGoalsPaneFRE="62",e.DefaultOnlineMeetingSetting="63",e.QuickUseFRE="64",e.GdprAdsV3="65",e.SpeedyMeetingsEndEarlySetting="66",e.InboxPlusEasyOff="67",e.InsertLinkTeachingMomentOpenCompose="68",e.InsertLinkTeachingMomentAfterAttach="69",e.ShortenEventsDurationSetting="70",e.HoneybeeClipboard="71",e.AttachmentSaveToCloudOpenAndEdit="72",e.GdprAdsEPrivacy="73",e.AdminInstalledNewAddinsFRE="75",e.InsertLinkFREOpenCompose="76",e.InsertLinkFREAfterAttach="77",e.SpotlightFre="78",e.OverlayFolderPaneFre="79",e.SpotlightPropertyIcon="80",e.GdprAdsV3ClearNull="81"}(i||(i={}))},714:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=n(0).__assign},828:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(0),a=n(12),r=n(220),o={root:"ms-TeachingBubble",body:"ms-TeachingBubble-body",bodyContent:"ms-TeachingBubble-bodycontent",closeButton:"ms-TeachingBubble-closebutton",content:"ms-TeachingBubble-content",footer:"ms-TeachingBubble-footer",header:"ms-TeachingBubble-header",headerIsCondensed:"ms-TeachingBubble-header--condensed",headerIsSmall:"ms-TeachingBubble-header--small",headerIsLarge:"ms-TeachingBubble-header--large",headline:"ms-TeachingBubble-headline",image:"ms-TeachingBubble-image",primaryButton:"ms-TeachingBubble-primaryButton",secondaryButton:"ms-TeachingBubble-secondaryButton",subText:"ms-TeachingBubble-subText",button:"ms-Button",buttonLabel:"ms-Button-label"},s=Object(r.c)((function(){return Object(a.keyframes)({"0%":{opacity:0,animationTimingFunction:a.AnimationVariables.easeFunction1,transform:"scale3d(.90,.90,.90)"},"100%":{opacity:1,transform:"scale3d(1,1,1)"}})})),l=function(e,t){var n=t||{},i=n.calloutWidth,a=n.calloutMaxWidth;return[{display:"block",maxWidth:364,border:0,outline:"transparent",width:i||"calc(100% + 1px)",animationName:""+s(),animationDuration:"300ms",animationTimingFunction:"linear",animationFillMode:"both"},e&&{maxWidth:a||456}]},c=function(e,t,n){return t?[e.headerIsCondensed,{marginBottom:14}]:[n&&e.headerIsSmall,!n&&e.headerIsLarge,{selectors:{":not(:last-child)":{marginBottom:14}}}]},u=function(e){var t,n,r,s=e.hasCondensedHeadline,u=e.hasSmallHeadline,d=e.hasCloseButton,m=e.hasHeadline,h=e.isWide,f=e.primaryButtonClassName,g=e.secondaryButtonClassName,b=e.theme,p=e.calloutProps,v=void 0===p?{className:void 0,theme:b}:p,y=!s&&!u,O=b.palette,j=b.semanticColors,w=b.fonts,_=Object(a.getGlobalClassNames)(o,b);return{root:[_.root,w.medium,v.className],body:[_.body,d&&!m&&{marginRight:24},{selectors:{":not(:last-child)":{marginBottom:20}}}],bodyContent:[_.bodyContent,{padding:"20px 24px 20px 24px"}],closeButton:[_.closeButton,{position:"absolute",right:0,top:0,margin:"15px 15px 0 0",borderRadius:0,color:O.white,fontSize:w.small.fontSize,selectors:{":hover":{background:O.themeDarkAlt,color:O.white},":active":{background:O.themeDark,color:O.white},":focus":{border:"1px solid "+j.variantBorder}}}],content:Object(i.__spreadArrays)([_.content],l(h),[h&&{display:"flex"}]),footer:[_.footer,{display:"flex",flex:"auto",alignItems:"center",color:O.white,selectors:(t={},t["."+_.button+":not(:first-child)"]={marginLeft:10},t)}],header:Object(i.__spreadArrays)([_.header],c(_,s,u),[d&&{marginRight:24},(s||u)&&[w.medium,{fontWeight:a.FontWeights.semibold}]]),headline:[_.headline,{margin:0,color:O.white,fontWeight:a.FontWeights.semibold},y&&[{fontSize:w.xLarge.fontSize}]],imageContent:[_.header,_.image,h&&{display:"flex",alignItems:"center",maxWidth:154}],primaryButton:[_.primaryButton,f,{backgroundColor:O.white,borderColor:O.white,color:O.themePrimary,whiteSpace:"nowrap",selectors:(n={},n["."+_.buttonLabel]=w.medium,n[":hover"]={backgroundColor:O.themeLighter,borderColor:O.themeLighter,color:O.themePrimary},n[":focus"]={backgroundColor:O.themeLighter,borderColor:O.white},n[":active"]={backgroundColor:O.white,borderColor:O.white,color:O.themePrimary},n)}],secondaryButton:[_.secondaryButton,g,{backgroundColor:O.themePrimary,borderColor:O.white,whiteSpace:"nowrap",selectors:(r={},r["."+_.buttonLabel]=[w.medium,{color:O.white}],r["&:hover, &:focus"]={backgroundColor:O.themeDarkAlt,borderColor:O.white},r[":active"]={backgroundColor:O.themePrimary,borderColor:O.white},r)}],subText:[_.subText,{margin:0,fontSize:w.medium.fontSize,color:O.white,fontWeight:a.FontWeights.regular}],subComponentStyles:{callout:{root:Object(i.__spreadArrays)(l(h,v),[w.medium]),beak:[{background:O.themePrimary}],calloutMain:[{background:O.themePrimary}]}}}}},882:function(e,t,n){"use strict";var i=n(0),a=n(32),r=n(526),o=n(1),s=n.n(o);function l(e,t){var n=function(t,n){return s.a.createElement(c,Object(i.__assign)({},t),s.a.createElement(e,Object(i.__assign)({},t)))};return n.displayName=e.displayName,t?s.a.forwardRef(n):n}var c=Object(a.a)((function(e){var t=e.lid,n=e.when,i=e.series,a=e.children,o=e.disposeOnUnmount,l=void 0===o||o;return s.a.useEffect((function(){return Object(r.b)(t,n,i),function(){l&&r.c.importAndExecute(t)}}),[]),a&&d(t)?s.a.createElement(s.a.Fragment,null,a):null}));function u(e,t){r.c.importAndExecute(e,t)}function d(e){if(r.d.unseenItems){var t=r.d.unseenItems.get(e);if(null==t?void 0:t.visible)return!0}return!1}function m(e){var t;return null===(t=r.d.unseenItems)||void 0===t?void 0:t.has(e)}n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return r.a}))},883:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(0),a=n(1),r=n(517),o=n(516),s=n(521),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i.__extends)(t,e),t.prototype.render=function(){return a.createElement(s.a,Object(i.__assign)({},this.props,{primary:!0,onRenderDescription:r.b}))},t=Object(i.__decorate)([Object(o.a)("PrimaryButton",["theme","styles"],!0)],t)}(a.Component)},896:function(e,t,n){"use strict";var i=n(1),a=n(1011),r=n(1575),o=n(12),s={root:"ms-StackItem"},l={start:"flex-start",end:"flex-end"};n.d(t,"a",(function(){return c}));var c=Object(r.a)((function(e){var t=e.children;if(i.Children.count(t)<1)return null;var n=Object(a.b)(e,{root:"div"});return Object(a.c)(n.root,null,t)}),{displayName:"StackItem",styles:function(e,t,n){var i=e.grow,a=e.shrink,r=e.disableShrink,c=e.align,u=e.verticalFill,d=e.order,m=e.className,h=Object(o.getGlobalClassNames)(s,t);return{root:[t.fonts.medium,h.root,{margin:n.margin,padding:n.padding,height:u?"100%":"auto",width:"auto"},i&&{flexGrow:!0===i?1:i},(r||!i&&!a)&&{flexShrink:0},a&&!r&&{flexShrink:1},c&&{alignSelf:l[c]||c},d&&{order:d},m]}}})},903:function(e,t,n){"use strict";var i=n(0),a=n(1),r=n(1011),o=n(1575),s=n(445),l=n(55),c=function(e,t){return t.spacing.hasOwnProperty(e)?t.spacing[e]:e},u=function(e){var t=parseFloat(e),n=isNaN(t)?0:t,i=isNaN(t)?"":t.toString();return{value:n,unit:e.substring(i.toString().length)||"px"}},d=function(e,t){if(void 0===e||"number"==typeof e||""===e)return e;var n=e.split(" ");return n.length<2?c(e,t):n.reduce((function(e,n){return c(e,t)+" "+c(n,t)}))},m=n(12),h={start:"flex-start",end:"flex-end"},f={root:"ms-Stack",inner:"ms-Stack-inner"},g=n(896);n.d(t,"a",(function(){return p}));var b={Item:g.a},p=Object(o.a)((function(e){var t=e.as,n=void 0===t?"div":t,o=e.disableShrink,c=e.wrap,u=Object(i.__rest)(e,["as","disableShrink","wrap"]);Object(s.a)("Stack",e,{gap:"tokens.childrenGap",maxHeight:"tokens.maxHeight",maxWidth:"tokens.maxWidth",padding:"tokens.padding"});var d=a.Children.map(e.children,(function(e,t){if(!e)return null;if((r=e)&&"object"==typeof r&&r.type&&r.type.displayName===g.a.displayName){var n={shrink:!o};return a.cloneElement(e,Object(i.__assign)(Object(i.__assign)({},n),e.props))}var r;return e})),m=Object(l.j)(u,l.k),h=Object(r.b)(e,{root:n,inner:"div"});return c?Object(r.c)(h.root,Object(i.__assign)({},m),Object(r.c)(h.inner,null,d)):Object(r.c)(h.root,Object(i.__assign)({},m),d)}),{displayName:"Stack",styles:function(e,t,n){var a,r,o,s,l,g,b,p=e.verticalFill,v=e.horizontal,y=e.reversed,O=e.grow,j=e.wrap,w=e.horizontalAlign,_=e.verticalAlign,x=e.disableShrink,C=e.className,S=Object(m.getGlobalClassNames)(f,t),k=n&&n.childrenGap?n.childrenGap:e.gap,N=n&&n.maxHeight?n.maxHeight:e.maxHeight,B=n&&n.maxWidth?n.maxWidth:e.maxWidth,I=n&&n.padding?n.padding:e.padding,T=function(e,t){if(void 0===e||""===e)return{rowGap:{value:0,unit:"px"},columnGap:{value:0,unit:"px"}};if("number"==typeof e)return{rowGap:{value:e,unit:"px"},columnGap:{value:e,unit:"px"}};var n=e.split(" ");if(n.length>2)return{rowGap:{value:0,unit:"px"},columnGap:{value:0,unit:"px"}};if(2===n.length)return{rowGap:u(c(n[0],t)),columnGap:u(c(n[1],t))};var i=u(c(e,t));return{rowGap:i,columnGap:i}}(k,t),E=T.rowGap,P=T.columnGap,F=""+-.5*P.value+P.unit,A=""+-.5*E.value+E.unit,G={textOverflow:"ellipsis"},z={"> *:not(.ms-StackItem)":{flexShrink:x?0:1}};return j?{root:[S.root,{flexWrap:"wrap",maxWidth:B,maxHeight:N,width:"auto",overflow:"visible",height:"100%"},w&&(a={},a[v?"justifyContent":"alignItems"]=h[w]||w,a),_&&(r={},r[v?"alignItems":"justifyContent"]=h[_]||_,r),C,{display:"flex"},v&&{height:p?"100%":"auto"}],inner:[S.inner,{display:"flex",flexWrap:"wrap",marginLeft:F,marginRight:F,marginTop:A,marginBottom:A,overflow:"visible",boxSizing:"border-box",padding:d(I,t),width:0===P.value?"100%":"calc(100% + "+P.value+P.unit+")",maxWidth:"100vw",selectors:Object(i.__assign)({"> *":Object(i.__assign)({margin:""+.5*E.value+E.unit+" "+.5*P.value+P.unit},G)},z)},w&&(o={},o[v?"justifyContent":"alignItems"]=h[w]||w,o),_&&(s={},s[v?"alignItems":"justifyContent"]=h[_]||_,s),v&&{flexDirection:y?"row-reverse":"row",height:0===E.value?"100%":"calc(100% + "+E.value+E.unit+")",selectors:{"> *":{maxWidth:0===P.value?"100%":"calc(100% - "+P.value+P.unit+")"}}},!v&&{flexDirection:y?"column-reverse":"column",height:"calc(100% + "+E.value+E.unit+")",selectors:{"> *":{maxHeight:0===E.value?"100%":"calc(100% - "+E.value+E.unit+")"}}}]}:{root:[S.root,{display:"flex",flexDirection:v?y?"row-reverse":"row":y?"column-reverse":"column",flexWrap:"nowrap",width:"auto",height:p?"100%":"auto",maxWidth:B,maxHeight:N,padding:d(I,t),boxSizing:"border-box",selectors:Object(i.__assign)((l={"> *":G},l[y?"> *:not(:last-child)":"> *:not(:first-child)"]=[v&&{marginLeft:""+P.value+P.unit},!v&&{marginTop:""+E.value+E.unit}],l),z)},O&&{flexGrow:!0===O?1:O},w&&(g={},g[v?"justifyContent":"alignItems"]=h[w]||w,g),_&&(b={},b[v?"alignItems":"justifyContent"]=h[_]||_,b),C]}},statics:b})}}]);
//# sourceMappingURL=owa.MailBoot~InlineImages.js.map
self.scriptsLoaded['owa.MailBoot~InlineImages.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~InlineImages.js'] = (new Date()).getTime();