self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~GroupList.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[588],{1649:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={FavoriteNode:"favoritenode",InboxRule:"inboxrule",LocalFile:"Files",MailFolderNode:"mailfoldernode",MailListItemPart:"maillistitempart",MailListRow:"maillistrow",MultiMailListConversationRows:"multimaillistconversationrows",MultiMailListMessageRows:"multimaillistmessagerows",ReadWriteRecipient:"recipient",NoteFeedItem:"notefeeditem",Todo:"todo",Attachment:"attachment",CommandBarEditorButton:"commandbareditorbutton"}},1655:function(e,t,r){"use strict";function n(e,t){Object.keys(t).forEach((function(r){return e.set(r,t[r])}))}function o(e){var t=null!=e?e:{headers:new Headers};return t.datapoint=t.datapoint||{},t.datapoint.mailbox="Default",t}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},1656:function(e,t,r){"use strict";var n=r(0),o=r(1697),i=r(346),a=r(609),u=r(134),c=r(5),s="X-AnchorMailbox",p="Authorization",d="X-OwaWebSessionType",l="X-OWA-ExplicitLogonUser";function f(e,t){return Object(n.__awaiter)(this,void 0,void 0,(function(){var r,f,b,g,v;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:if(r={},f=Object(i.k)(e)){if(f.accountState==i.b.AccessRevoked)return[2,null];if(f.accountState==i.b.AccountDeprovisioned||f.accountState==i.b.AccountNotFound)return Object(i.c)(f.accountState,f.accountProviderType),[2,null]}return t?(r[s]=t,r[l]=t):f&&(r[s]=f.anchorMailbox),f?(b=f.token,!(g=Object(a.g)(f.tokenExpiry))&&b?[3,2]:(Object(u.r)("getAndUpdateAccessToken",{tokenExpiry:Object(c.y)(f.tokenExpiry,Object(c.Pb)()),isTokenExpired_1:g,isTokenInvalid_2:!b},{isCore:!0}),[4,o.a.importAndExecute(f.accountId,e,b)])):[3,3];case 1:(b=n.sent())||(b=""),n.label=2;case 2:v=void 0,"Outlook"==f.accountProviderType?(v='MSAuth1.0 usertoken="'+b+'", type="MSACT"',r[d]=1..toString()):"Google"!=f.accountProviderType&&"ICloud"!=f.accountProviderType||(v="Bearer "+b,r[d]=2..toString()),r[p]=v,n.label=3;case 3:return[2,r]}}))}))}var b=r(1655),g=r(34);function v(e,t){return Object(n.__awaiter)(this,void 0,void 0,(function(){var r,o;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return r=Object(b.a)(),o=r,[4,O(e,t)];case 1:return o.headers=n.sent(),r.authNeededOnUnAuthorized=!1,r.datapoint=r.datapoint||{},r.datapoint.mailbox="Connected",[2,r]}}))}))}function O(e,t){var r;return Object(n.__awaiter)(this,void 0,void 0,(function(){var o,i;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return o=t&&(null===(r=e.headers)||void 0===r?void 0:r.set)?new Headers(e.headers):new Headers,[4,f(e.mailboxInfo.userIdentity,h(e.mailboxInfo.type,e.mailboxInfo.mailboxSmtpAddress)?e.mailboxInfo.mailboxSmtpAddress:null)];case 1:return i=n.sent(),Object(b.b)(o,i),[2,o]}}))}))}function h(e,t){var r="GroupMailbox"==e||"TeamsMailbox"==e||"SharedMailbox"==e||"PublicMailbox"==e;return r&&null==t&&g.d("getHeadersForConnectedAccount: mailboxSmtpAddress should be passed for Group or Teams or Shared or Public Mbx request"),r}r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return h}))},1657:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(3),o=Object(n.action)("triggerReInitializeAccount",(function(e){return{userIdentity:e}}))},1677:function(e,t,r){"use strict";var n=r(1),o=r(1649);var i=r(188),a=Object(i.action)("setDropState")((function(e,t,r){e.isDragOver=t,e.draggableItemType=r})),u=r(1738),c=r(76);r.d(t,"a",(function(){return p}));var s=50,p=function(){function e(e){var t=this;this.props=e,this.onDragEnter=function(e){e.preventDefault(),t.props.preventBubblingDragEvents&&e.stopPropagation();var r=t.getDragData(e);(Object(c.e)()||Object(c.g)())&&t.setDropEffectInternal(e,t.getDesiredDropEffect(r)),t.props.onDragEnter&&t.props.onDragEnter(r)},this.onDragLeave=function(e){if(t.props.preventBubblingDragEvents&&e.stopPropagation(),!t.props.greedy||t.isReallyLeavingDroppable(e)){var r=t.props.dropViewState.draggableItemType;r||(r=t.getDragType(e));var n={itemType:r};if("none"!=t.getDesiredDropEffect(n)){var o=function(r){return function(){t.props.onDragLeave&&t.props.onDragLeave(r,e.currentTarget),a(t.props.dropViewState,!1,null),t.pendingDragLeaveHandler=null}};t.props.shouldIgnoreTransientOnDragLeave?t.pendingDragLeaveHandler||(e.persist(),t.pendingDragLeaveHandler=setTimeout(o(n),s)):o(n)(),(Object(c.e)()||Object(c.g)())&&t.setDropEffectInternal(e,"none")}}},this.onDragOver=function(e){t.props.preventBubblingDragEvents&&e.stopPropagation();var r=t.props.dropViewState.draggableItemType;r||(r=t.getDragType(e));var n={itemType:r},o=t.getDesiredDropEffect(n);"none"!=o?(t.props.bypassActOnDrop||(e.preventDefault(),t.setDropEffectInternal(e,o)),t.props.shouldUseCopyAsDropEffect&&t.setDropEffectInternal(e,"copy"),t.props.onDragOver&&t.props.onDragOver(n,e.pageX,e.pageY,e.currentTarget),t.cancelPendingDragLeaveHandler(),t.props.dropViewState.isDragOver&&t.props.dropViewState.draggableItemType==r||a(t.props.dropViewState,!0,r)):t.props.bypassActOnDrop||t.setDropEffectInternal(e,"none")},this.onDrop=function(e){t.props.preventBubblingDragEvents&&e.stopPropagation();var r=t.getDragData(e);e.preventDefault(),"none"!=t.getDesiredDropEffect(r)&&(t.props.onDrop(r,e.pageX,e.pageY,e.currentTarget),t.props.onDragLeave&&t.props.onDragLeave(r,e.currentTarget),t.cancelPendingDragLeaveHandler(),Object(u.c)(null),a(t.props.dropViewState,!1,null))},this.refCallback=function(e){t.div=e}}return e.prototype.getDiv=function(){return this.div},e.prototype.cancelPendingDragLeaveHandler=function(){this.pendingDragLeaveHandler&&(clearTimeout(this.pendingDragLeaveHandler),this.pendingDragLeaveHandler=null)},e.prototype.isReallyLeavingDroppable=function(e){var t=document.elementFromPoint(e.pageX,e.pageY);return!this.isDescendantOrSelf(t,e.currentTarget)},e.prototype.isDescendantOrSelf=function(e,t){if(!e||!t)return!1;if(e==t)return!0;for(var r=e;r=r.parentElement;)if(r==t)return!0;return!1},e.prototype.getDesiredDropEffect=function(e){return e?this.props.canDrop?"boolean"==typeof this.props.canDrop(e)?this.props.canDrop(e)?"move":"none":this.props.canDrop(e):"move":"none"},e.prototype.getDragData=function(e){var t,r=null;if(e.dataTransfer.files&&e.dataTransfer.files.length>0)t=e.dataTransfer.files,r={itemType:o.a.LocalFile,files:t};else{for(var n=e.dataTransfer.types,i=null,a=!1,u=0;u<n.length;u++){var c=n[u];if("text"!=c){i=e.dataTransfer.getData(c),a=!0;break}}a||(i=e.dataTransfer.getData("text"));try{r=JSON.parse(i)}catch(e){r={itemType:"nothing"}}}return r},e.prototype.getDragType=function(e){var t=Object(u.a)(),r=e.dataTransfer?e.dataTransfer:e.nativeEvent.dataTransfer;if(!t&&r&&r.types&&r.types.length>0){var n=Array.prototype.slice.apply(e.dataTransfer.types),i=Object.values(o.a),a=n.filter((function(e){return i.indexOf(e)>=0}));a.length>0&&(t=a[0])}return t},e.prototype.setDropEffectInternal=function(e,t){e.dataTransfer&&(e.dataTransfer.dropEffect=t),Object(u.d)(t)},e}();t.b=n.forwardRef((function(e,t){var r=n.useRef(new p(e));return n.useImperativeHandle(t,(function(){return{getDiv:function(){return r.current.getDiv()}}}),[]),n.createElement("div",{ref:r.current.refCallback,className:e.classNames,style:e.style,onDrop:r.current.onDrop,onDragOver:r.current.onDragOver,onDragEnter:r.current.onDragEnter,onDragLeave:r.current.onDragLeave},e.children)}))},1697:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(44),o=r(1657);r.d(t,"b",(function(){return o.a}));var i=new n.c((function(){return r.e(1261).then(r.bind(null,1903))})),a=new n.a(i,(function(e){return e.getAndUpdateAccessToken}))},1701:function(e,t,r){"use strict";var n=r(0),o=r(1655);function i(e){return{"X-OWA-ExplicitLogonUser":e,"X-AnchorMailbox":e}}function a(e,t){t&&e&&Object(o.b)(t,i(e))}function u(e,t){var r,o=null!=t?t:{},i=(null===(r=o.headers)||void 0===r?void 0:r.set)?new Headers(o.headers):new Headers;return o.datapoint=o.datapoint||{},o.datapoint.mailbox=o.datapoint.mailbox||"Explicit",a(e,i),Object(n.__assign)(Object(n.__assign)({},o),{headers:i})}var c=r(346),s=r(1656),p=r(77),d=r(321);function l(e){return Object(n.__awaiter)(this,void 0,void 0,(function(){var t=this;return Object(n.__generator)(this,(function(r){return[2,Object(p.b)().then((function(r){return Object(n.__awaiter)(t,void 0,void 0,(function(){var t,o;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return e?Object(c.r)(e.userIdentity)?[4,Object(s.a)(e.userIdentity,"GroupMailbox"==e.type||"TeamsMailbox"==e.type?e.mailboxSmtpAddress:null)]:[3,2]:[3,3];case 1:return t=n.sent(),d(r,t),[3,3];case 2:"GroupMailbox"!=e.type&&"TeamsMailbox"!=e.type||(o=i(e.mailboxSmtpAddress),d(r,o)),n.label=3;case 3:return[2,r]}}))}))}))]}))}))}function f(){return Object(p.b)().then((function(e){return e.prefer='exchange.Behavior="CalendarInternal"',e}))}function b(e){return void 0===e&&(e=null),Object(c.r)(e)?f().then((function(t){return Object(s.a)(e).then((function(e){return Object.keys(e).forEach((function(r){return t[r]=e[r]})),t}))})):Promise.resolve({})}var g=r(47);function v(e,t,r){var n=new Headers;return r&&n.set("X-OWA-CANARY",Object(g.a)()),t&&n.set("X-OWA-ActionName",t),e&&a(e,n),n}r.d(t,"a",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return f})),r.d(t,"f",(function(){return a})),r.d(t,"e",(function(){return v}))},1738:function(e,t,r){"use strict";var n,o;function i(e){n=e}function a(){return n}function u(e){o=e}function c(){return o}r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return a})),r.d(t,"d",(function(){return u})),r.d(t,"b",(function(){return c}))},1778:function(e,t,r){"use strict";r.d(t,"b",(function(){return i}));var n=r(3),o={myOrgGroups:[],withContextMenuGroup:null,shouldShowAllGroups:!1,hasLoadedFromServer:!1,loadGroupsError:!1,groupNodeViewStates:new(r(16).ObservableMap)({})},i=Object(n.createStore)("leftNavGroupsStore",o),a=i();t.a=a},1787:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(3),o=Object(n.createStore)("currentGroupInformationStore",{smtpAddress:"",groupId:"",tenantId:""})},1883:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);function o(e){return Object(n.__assign)({__type:"BodyContentType:#Exchange"},e)}},2353:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);function o(e){return Object(n.__assign)({__type:"UnifiedGroupIdentity:#Exchange"},e)}},2486:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(25),o=r(40);function i(){var e;return(null===(e=Object(n.a)().UserOptions)||void 0===e?void 0:e.SendFromAliasEnabled)&&Object(o.i)("cmp-proxy-address")}},2656:function(e,t,r){"use strict";function n(e,t,r){var n,o,i,a,u,c=e.groups.get(t.toLowerCase());if(c||(r.unreadMessageCount=null,r.groupDetailsError=r.groupDetailsError||!1),!r.groupDetailsError||c&&c.basicInformation||(r.basicInformation={SmtpAddress:t,DisplayName:t}),r.groupDetails){var s=r.groupDetails;c&&c.basicInformation&&!c.groupDetailsError||(r.basicInformation={SmtpAddress:s.SmtpAddress,DisplayName:s.DisplayName,AccessType:s.AccessType,LegacyDN:s.LegacyDN,MailboxGuid:s.MailboxGuid}),r.groupDetails.UserGroupRelationship={SubscriptionType:(null===(n=s.UserGroupRelationship)||void 0===n?void 0:n.SubscriptionType)||0,IsSubscribed:(null===(o=s.UserGroupRelationship)||void 0===o?void 0:o.IsSubscribed)||!1,ShouldIgnoreReply:(null===(i=s.UserGroupRelationship)||void 0===i?void 0:i.ShouldIgnoreReply)||!1,IsMember:(null===(a=s.UserGroupRelationship)||void 0===a?void 0:a.IsMember)||!1,IsOwner:(null===(u=s.UserGroupRelationship)||void 0===u?void 0:u.IsOwner)||!1}}return r}var o=r(188),i=r(1787),a=Object(o.action)("addOrUpdateGroup")((function(e,t,r,o,a){var u;t=t.toLowerCase();var c=void 0!==o&&""!==o;if(c&&(o=o.toLowerCase(),t=r.groupDetails.SmtpAddress),r=n(e,c?o:t,r),e.groups.has(t)||c&&e.groups.has(o)){var s=e.groups.has(t)?e.groups.get(t):e.groups.get(o);r.basicInformation&&(s.basicInformation=r.basicInformation),r.groupDetails&&((null===(u=s.groupDetails)||void 0===u?void 0:u.MailboxSettings)&&!r.groupDetails.MailboxSettings&&(r.groupDetails.MailboxSettings=s.groupDetails.MailboxSettings),s.groupDetails=r.groupDetails),r.members&&(s.members=r.members),null!=r.groupDetailsError&&(s.groupDetailsError=r.groupDetailsError),c&&t!==o&&(void 0!==a&&a(t,o),e.groups.set(t,s),e.groups.delete(o),Object(i.a)().smtpAddress=t)}else e.groups.set(t,r)}));t.a=a},3086:function(e,t,r){"use strict";var n=r(0),o=r(1778),i=r(16),a=r(692),u=r(306),c=r(1958),s=r(1),p=r(3188),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onClick=function(e){e.stopPropagation(),t.props.selectGroup(t.props.groupId,t.props.customData)},t.toggleFavorite=function(){Object(p.a)(t.props.groupId)},t.onKeyDown=function(e){switch(e.keyCode){case 13:case 32:e.stopPropagation(),t.props.selectGroup(t.props.groupId,t.props.customData)}},t.renderRightCharm=function(){return t.props.renderRightCharm(t.props.groupId,t.props.customData)},t.renderRightCharmHover=function(){return t.props.renderRightCharmHover(t.props.groupId,t.props.customData)},t}return Object(n.__extends)(t,e),Object.defineProperty(t.prototype,"isSelected",{get:function(){return this.props.isSelected(this.props.groupId,this.props.customData)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isWithContextMenuOpen",{get:function(){return o.a.withContextMenuGroup&&this.props.groupId==o.a.withContextMenuGroup.groupId},enumerable:!1,configurable:!0}),t.prototype.shouldComponentUpdate=function(e,t){return!Object(u.f)(this.props,e)},t.prototype.render=function(){return s.createElement(c.a,{chevronProps:this.props.chevronProps,customIcon:this.props.customIcon,depth:1,displayName:this.props.displayName,isBeingDragged:this.props.isBeingDragged,isDroppedOver:this.props.isDroppedOver,isRootNode:!1,isSelected:this.isSelected,isWithContextMenuOpen:this.isWithContextMenuOpen,key:this.props.groupId,onClick:this.onClick,onContextMenu:this.props.onContextMenu,onKeyDown:this.onKeyDown,renderCustomTreeNodeDisplay:this.props.renderCustomTreeNodeDisplay,renderRightCharm:this.renderRightCharm,renderRightCharmHover:this.renderRightCharmHover,showAsHoverOnDroppedOver:this.props.showHoverStateOnDroppedOver,isFavorited:this.props.isFavorited,toggleFavorite:this.toggleFavorite})},Object(n.__decorate)([i.computed],t.prototype,"isSelected",null),Object(n.__decorate)([i.computed],t.prototype,"isWithContextMenuOpen",null),t=Object(n.__decorate)([a.observer],t)}(s.Component);t.a=d},3188:function(e,t,r){"use strict";var n=r(3);t.a=Object(n.action)("TOGGLE_FAVORITE_GROUPNODE_FROM_LEFTNAV",(function(e){return{groupId:e}}))},347:function(e,t,r){"use strict";var n=r(0);function o(e,t){return e?Object(n.__assign)({mailboxInfo:e},t):null!=t?t:void 0}r.d(t,"a",(function(){return o}))},3534:function(e,t,r){"use strict";var n=r(188),o=r(1968),i=r(2031),a=r(1684),u=r(2656),c=r(1847),s=r(1754);var p=function(e,t){var r=Object(s.b)(t,"Site");r?!function(e){return-1==e.indexOf("_layouts/groupstatus.aspx")}(r)?Object(c.a)(e,1):Object(c.a)(e,2):Object(c.a)(e,0)},d=r(3),l=Object(d.action)("beforeGetGroupDetailsStartAction",(function(e){return{groupSmtpAddress:e}}));Object(d.orchestrator)(l,(function(e){3==Object(a.h)(e.groupSmtpAddress)&&Object(a.n)(e.groupSmtpAddress,1)}));var f=l,b=r(1787),g=Object(d.mutatorAction)("updateCurrentGroupIdAndTenantIdAction",(function(e,t){Object(b.a)().groupId=e,Object(b.a)().tenantId=t})),v=function(e,t){Object(u.a)(Object(a.j)(),e,{basicInformation:null,groupDetails:null,members:null,groupDetailsError:!0}),Object(a.n)(e,0),t&&t()},O=Object(n.action)("getGroupDetailsAction")((function(e,t,r,n){f(e),(o.g||i.f)(e,t).then((function(t){return function(e,t,r,n){if(e&&e.Body&&Object(i.i)(e.Body)){var o=e.Body.GroupDetails;o?(Object(u.a)(Object(a.j)(),o.SmtpAddress,{basicInformation:null,groupDetails:o,members:null,groupDetailsError:!1}),g(o.ExternalDirectoryObjectId,o.ExternalDirectoryOrganizationId),p(t,o),r&&r()):v(t,n)}else v(t,n)}(t,e,r,n)})).catch((function(t){v(e,n)}))}));t.a=O},5912:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(28);function i(e){return Object(n.__assign)({__type:"UpdateUserGroupsSetConfigurationRequest:#Exchange"},e)}function a(e){var t,r;void 0===(t={request:i({GroupsSet:e})}).request||t.request.__type||(t.request=i(t.request)),Object(o.a)("UpdateUserGroupsSetConfiguration",t,r)}var u=r(134),c=r(40),s=r(2572),p=r(7030),d=r(188),l=Object(d.action)("removeGroupFromLeftNav")((function(e,t){var r=t.myOrgGroups.indexOf(e);r>=0&&t.myOrgGroups.splice(r,1)})),f=r(3534),b=r(1669),g=r(1633),v=r(2428),O=r(1706),h=r(3163),m=r(6550),j=r(9684);function y(e){if(("RowModified"==e.EventType||"RowAdded"==e.EventType)&&null!=e.IsMember&&null!=e.Group){var t=e.Group.SmtpAddress.toLowerCase();m.d.importAndExecute(t,e.IsMember);var r=Object(s.b)();e.IsMember?r.myOrgGroups.includes(t)||(J(),function(e){var t=Object(g.G)(),r=t&&Object(O.b)(t.tableQuery);r&&r.toLowerCase()===e&&Object(h.a)(t.tableQuery)}(t)):r.myOrgGroups.includes(t)&&(l(t,r),Object(p.c)(t),Object(f.a)(t),function(e){var t,r=Object(g.G)(),n=r&&Object(O.b)(r.tableQuery);if((null==n?void 0:n.toLowerCase())!==e)return;var o=Object(b.a)().groups.get(e);3!==(null===(t=null==o?void 0:o.basicInformation)||void 0===t?void 0:t.AccessType)&&(v.a.clear(r,null),Object(h.b)(r,"ErrorAccessDenied"))}(t))}}var D=r(3678),S=r(2656),w=r(1037),I=r(1036),T=r(197),G=r(34),x=r(52),A=r(1684),_=r(5),E=r(1653),C=r(2879),L=r(3168),M=r(2535),R=r(1716),k=r(2099),N=r(3890),H=r(347),F=5,P=1e4,U=30,B="GroupModulePrefetch",V="X-OWA-ActionSource",W="GroupMailbox_WarmUp",q="X-OWA-ActionName",X=!1;function z(){var e=Object(A.j)();X||(X=!0,setTimeout((function(){if(function(e){var t,r;try{for(var o=Object(n.__values)(s.c.myOrgGroups),i=o.next();!i.done;i=o.next()){var a=i.value;if(Y(e,a,U))return!0}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return!1}(e)){Object(N.b)(Date.now());var t=function(e){var t=s.c.myOrgGroups.filter((function(t,r){return Object(E.isGroupInFavorites)(t)&&Y(e,t,U)})).slice(0,F);if(t.length<F){var r=s.c.myOrgGroups.filter((function(t,r){return r<C.a&&!Object(E.isGroupInFavorites)(t)&&Y(e,t,U)}));t=t.concat(r).slice(0,F)}return t}(e);t.forEach((function(e){(function(e){var t=Object(L.b)(),r=Object(L.a)(e,t);switch(t){case 0:return function(e){var t=new Headers;return t.set(V,B),t.set(q,W),Object(k.d)("inbox",1,e.viewFilter,e.sortBy,!1,e.focusedViewFilter,e.requestShapeName,Object(R.d)(e),void 0,e.categoryName,void 0,{headers:t})}(r);case 1:return function(e){return Object(k.c)(Object(g.i)(e),0,1,e.viewFilter,Object(M.a)(e),e.focusedViewFilter,e.requestShapeName,e.shouldTryToUseSessionDataResponse,function(e){var t=Object(H.a)(Object(R.d)(e))||{};return t.headers=new Headers,t.headers.set(V,B),t.headers.set(q,W),t}(e),e.categoryName)}(r)}return Promise.resolve()})(e).catch((function(e){}))})),Object(N.c)(t)}}),P))}function Y(e,t,r){var n=e.groups.get(t.toLowerCase());if(!n||!n.basicInformation)return!1;var o=n.basicInformation;if(!o.LastVisitedTimeUtc)return!1;var i=Object(_.lc)(o.LastVisitedTimeUtc),a=Object(_.Wb)(i),u=Object(_.kc)();return Object(_.Mb)(a,Object(_.e)(u,-r),u)}var Q=r(8097),Z=!1;var J=Object(d.action)("loadGroups")((function(e){return Object(n.__awaiter)(this,void 0,void 0,(function(){var t,r,o,i,p;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return Z?[2]:(t=new u.b("loadGroups"),Z=!0,d=new Array,Object(c.i)("tri-favorites-roaming")?d.push({FilterType:0,SortType:4,SortDirection:"Descending"}):(d.push({FilterType:1,SortType:4,SortDirection:"Descending"}),d.push({FilterType:2,SortType:4,SortDirection:"Descending"})),r=Object(w.a)({RequestedGroupsSets:d,AdditionalProperties:[4]}),[4,Object(I.a)({Header:Object(T.b)(),Body:r})]);case 1:return"Success"==(o=n.sent()).Body.ResponseClass?(t.end(),s.c.loadGroupsError=!1,s.c.hasLoadedFromServer=!0,$(i=o.Body.GroupsSets),a(i),e&&z()):(p="There was an error loading groups: "+Object(D.b)(o),t.addCustomData({error:p}),t.endWithError("ServerError",new Error(p)),s.c.loadGroupsError=!0),Z=!1,[2,Promise.resolve()]}var d}))}))})),K=Object(x.d)("loadGroupsFromSessionData",{name:"LoadGroupsInLeftNavFromSessionData",options:{}})((function(){if(!Z){Z=!0;var e=Object(Q.a)();if(!e)return G.g.info("GroupsSets data is not available in session data"),void(Z=!1);$(e.UnifiedGroupsSets),Z=!1}}));function $(e){if(e){s.c.myOrgGroups=[];var t=Object(A.j)();e.forEach((function(e){e.Groups.forEach((function(e){s.c.myOrgGroups.push(e.SmtpAddress.toLowerCase()),Object(S.a)(t,e.SmtpAddress,{basicInformation:e,groupDetails:null,members:null})}))}))}Object(p.b)(),Object(j.a)(y)}var ee=r(25),te=r(426);function re(){var e=!Object(ee.a)().UserOptions.IsGroupsTreeCollapsed;Object(te.a)((function(t){t.UserOptions.IsGroupsTreeCollapsed=e}),[{key:"IsGroupsTreeCollapsed",valuetype:"Boolean",value:[String(e)]}])}function ne(e){return Object(n.__assign)({__type:"SetUnifiedGroupLastVisitedTimeJsonRequest:#Exchange"},e)}var oe=r(2353);function ie(e){var t,r,i,a=Object(oe.a)({Type:0,Value:e});void 0===(t=ne({Header:Object(T.b)(),Body:(i={GroupIdentity:a,LastVisitedTimeUtc:(new Date).toISOString(),PreserveReadState:!0},Object(n.__assign)({__type:"SetUnifiedGroupLastVisitedTimeRequest:#Exchange"},i))}))||t.__type||(t=ne(t)),Object(o.a)("SetUnifiedGroupLastVisitedTime",t,r)}r.d(t,"loadGroups",(function(){return J})),r.d(t,"loadGroupsFromSessionData",(function(){return K})),r.d(t,"removeGroupFromLeftNav",(function(){return l})),r.d(t,"toggleGroupTreeExpansion",(function(){return re})),r.d(t,"unsubscribeFromUnreadNotifications",(function(){return p.c})),r.d(t,"setGroupLastVisitedTime",(function(){return ie}))},609:function(e,t,r){"use strict";var n=r(3),o=Object(n.action)("initializeOwaObservableDateTime"),i=Object(n.action)("observableNowChanged"),a=Object(n.action)("observableTodayChanged"),u=r(5),c=r(16),s=Object(n.createStore)("ObservableDateTime",{now:0,today:0}),p=Object(c.computed)((function(){return Object(u.lc)(s().now)})),d=function(){return p.get()},l=Object(c.computed)((function(){return Object(u.lc)(s().today)})),f=function(){return l.get()},b=function(e){return Object(u.Gb)(e,d())},g=function(e){return Object(u.Eb)(e,d())},v=function(e){return h(e,u.Gb)},O=function(e){return h(e,u.Hb)},h=function(e,t){return t(Object(u.Wb)(Object(u.lc)(e)),f())};function m(e){if(!e)return"";var t=Object(u.lc)(e);return function(e,t){var r=Object(u.Wb)(e);if(Object(u.Ib)(r,t))return u.Z;var n=function(e){return Object(u.Mb)(r,Object(u.e)(t,-e),t)};if(n(3))return u.hb;if(n(30))return u.gb;return u.X}(t,f())(t)}function j(e){if(!e)return"";var t=Object(u.lc)(e);return function(e,t){var r=Object(u.Wb)(e);if(Object(u.Ib)(r,t))return u.S;return u.T}(t,f())(t)}function y(e){return e?function(e,t){var r=Object(u.Wb)(e);return Object(u.Ib)(r,t)?Object(u.Z)(e):D(r,t,2)?Object(u.kb)(e):D(r,t,7)?Object(u.H)(Object(u.ab)(e),Object(u.Z)(e)):Object(u.H)(Object(u.J)(e),Object(u.Z)(e))}(Object(u.lc)(e),f()):""}function D(e,t,r){return Object(u.Mb)(e,Object(u.e)(t,-r),t)}var S=Object(n.action)("updateTimes"),w=Object(n.action)("setNow"),I=Object(n.action)("setToday",(function(e){return{today:e}}));Object(n.mutator)(w,(function(){s().now=Object(u.jc)()})),Object(n.mutator)(I,(function(e){var t=e.today;s().today=t}));var T=r(36),G=r(126);Object(n.orchestrator)(o,(function(){S();var e=Object(u.Pb)(),t=Object(u.Yb)(Object(u.h)(e,1)),r=Object(u.w)(t,e);setTimeout((function(){return setInterval(S,T.g)}),r)})),Object(n.orchestrator)(G.l,(function(){S()})),Object(n.orchestrator)(S,(function(){w();var e=Object(u.zb)(Object(u.kc)()),t=s().today!=e;t&&I(e),i(),t&&a()})),r.d(t,"d",(function(){return o})),r.d(t,"j",(function(){return i})),r.d(t,"l",(function(){return a})),r.d(t,"i",(function(){return d})),r.d(t,"k",(function(){return f})),r.d(t,"g",(function(){return b})),r.d(t,"e",(function(){return g})),r.d(t,"f",(function(){return v})),r.d(t,"h",(function(){return O})),r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return j})),r.d(t,"c",(function(){return y}))},6550:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return u})),r.d(t,"e",(function(){return c})),r.d(t,"d",(function(){return s}));var n=r(44),o=new n.c((function(){return Promise.all([r.e(46),r.e(129),r.e(591)]).then(r.bind(null,9651))})),i=new n.a(o,(function(e){return e.loadGroupAction})),a=new n.a(o,(function(e){return e.onAfterNewGroupSelectedAction})),u=new n.a(o,(function(e){return e.onAfterGroupDetailsSucceededAction})),c=new n.a(o,(function(e){return e.setGroupIsSubscribedAction})),s=new n.a(o,(function(e){return e.setGroupIsMemberAction}))},703:function(e,t,r){"use strict";var n=r(0),o=r(1),i=r(396),a=r(517),u=r(516),c=r(12),s=r(220),p=r(397),d=r(453),l=Object(s.c)((function(e,t){var r,n=Object(p.a)(e),o=Object(d.a)(e),i=e.palette,a={root:{padding:"0 4px",width:"32px",height:"32px",backgroundColor:"transparent",border:"none",color:e.semanticColors.link},rootHovered:{color:i.themeDarkAlt,backgroundColor:i.neutralLighter,selectors:(r={},r[c.HighContrastSelector]={borderColor:"Highlight",color:"Highlight"},r)},rootHasMenu:{width:"auto"},rootPressed:{color:i.themeDark,backgroundColor:i.neutralLight},rootExpanded:{color:i.themeDark,backgroundColor:i.neutralLight},rootChecked:{color:i.themeDark,backgroundColor:i.neutralLight},rootCheckedHovered:{color:i.themeDark,backgroundColor:i.neutralQuaternaryAlt},rootDisabled:{color:i.neutralTertiaryAlt}};return Object(c.concatStyleSets)(n,a,o,t)}));r.d(t,"a",(function(){return f}));var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(n.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,r=e.theme;return o.createElement(i.a,Object(n.__assign)({},this.props,{variantClassName:"ms-Button--icon",styles:l(r,t),onRenderText:a.b,onRenderDescription:a.b}))},t=Object(n.__decorate)([Object(u.a)("IconButton",["theme","styles"],!0)],t)}(o.Component)},8097:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(335);function o(){return Object(n.a)().groups}},9684:function(e,t,r){"use strict";var n=r(706),o=r(5230);function i(e){n.b.import().then((function(t){n.f.importAndExecute({subscriptionId:"GroupAssociationNotification",requiresExplicitSubscribe:!0,subscriptionParameters:Object(o.a)({NotificationType:"GroupAssociationNotification",ChannelId:t()})},e)}))}r.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=owa.MailBoot~GroupList.js.map
self.scriptsLoaded['owa.MailBoot~GroupList.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~GroupList.js'] = (new Date()).getTime();