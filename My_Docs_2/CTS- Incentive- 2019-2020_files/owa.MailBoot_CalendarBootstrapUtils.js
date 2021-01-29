self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~CalendarBootstrapUtils.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[501],{1013:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c}));var r=n(887);n.d(t,"e",(function(){return r.c})),n.d(t,"d",(function(){return r.b}));var a=n(44),i=new a.c((function(){return n.e(809).then(n.bind(null,1586))})),u=new a.a(i,(function(e){return e.initializeOwaAccountsStore})),o=new a.a(i,(function(e){return e.initializeOwaConnectedAccount})),c=new a.a(i,(function(e){return e.removeOWAConnectedAccount}))},1017:function(e,t,n){"use strict";var r=n(0),a=n(90),i=n(214),u=n(25),o=n(369),c=n(34);function d(e,t,n){var d,l={},s={},f={},b={},O={},v=n?[n]:[Object(u.a)().SessionSettings.LogonEmailAddress],p=Object(i.d)(n);return e.forEach((function(e){O[e.ItemId.Id]=e.ItemId.ChangeKey;var n=Object(r.__assign)(Object(r.__assign)({},e),{id:{id:e.GroupId,mailboxInfo:p}}),i=Object(a.s)(p.userIdentity,e.GroupId);b[i]=n,e.Calendars.forEach((function(e){if(function(e,t){if(7==e.CalendarFolderType)return!1;if(Object(o.e)(e)){var n=e;if(n.IsOwnerEmailAddressInvalid)return c.g.info("[getCalendarsService] Ommitting shared calendar with IsOwnerEmailAddressInvalid flag on, OwnerEmailAddress: {1}: "+n.OwnerEmailAddress),!1;var r=n.IsGeneralScheduleCalendar?n.OwnerEmailAddress:n.SharedFolderId?n.SharedFolderId.Id:null;if(!r)return c.g.info("[getCalendarsService] Ommitting linked calendar with null SharedFolderId, Id: {1}: "+e.ItemId.Id),!1;if(t.includes(r))return c.g.info("[getCalendarsService] Ommitting duplicate shared calendar from Calendar folder list. DuplicateKey: {1}: "+r),!1;if(t.push(r),n.OwnerEmailAddress=n.OwnerEmailAddress.toLowerCase(),n.IsGroupMailboxCalendar)return!1}return!0}(e,v)){var n=e.ItemId.Id,i=Object(a.h)(e).Id,u=Object(r.__assign)(Object(r.__assign)({},e),{id:{id:n,mailboxInfo:p}});if(1==e.CalendarFolderType){var s=t&&t.filter((function(e){return e.FolderId.Id===i}))[0];d={id:{id:n,mailboxInfo:p},calculatedFolderId:i,displayName:s?s.DisplayName:e.CalendarName,colorScheme:null},u.CalendarName=d.displayName}!l[n]&&(l[n]=u),!f[i]&&(f[i]={id:e.ItemId.Id,mailboxInfo:p}),!O[n]&&(O[n]=e.ItemId.ChangeKey)}}))})),t.forEach((function(e){var t=f[e.FolderId.Id];t&&(s[t.id]=e)})),{defaultCalendar:d,calendarEntryMapping:l,calendarFolderMapping:s,folderIdMapping:f,calendarGroupMapping:b,calendarIdToChangeKeyMapping:O}}var l=n(1051),s=n(197),f=n(1060),b=n(85),O=n(347),v=n(467);function p(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:if(t=null,n=null,e&&!Object(b.t)(e)||(t=Object(f.a)()),t)return[3,6];n=Object(O.a)(Object(i.d)(e)),r.label=1;case 1:return r.trys.push([1,3,,6]),[4,Object(l.a)({Header:Object(s.b)()},n)];case 2:return t=r.sent(),[3,6];case 3:return r.sent(),Object(v.a)()?[4,v.d.importAndExecute(e)]:[3,5];case 4:t=r.sent(),r.label=5;case 5:return[3,6];case 6:return t&&Object(v.a)()?(n||(n=Object(O.a)(Object(i.d)(e))),[4,v.b.importAndExecute({userIdentity:e,options:n},t)]):[3,8];case 7:r.sent(),r.label=8;case 8:return[2,t]}}))}))}var j=n(712),I=n(1052);function m(e,t,n){return Object(r.__awaiter)(this,void 0,void 0,(function(){var i,u,o;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return i=Object(O.a)({type:"GroupMailbox",userIdentity:n,mailboxSmtpAddress:t}),u=Object(a.o)(e.Id),o=u&&(u.IsGeneralScheduleCalendar||u.IsGroupMailboxCalendar)?Object(j.a)({Id:"calendar",Mailbox:{EmailAddress:t}}):5==u.CalendarFolderType?u.SharedFolderId:e,[4,Object(I.a)({request:{FolderId:o}},i)];case 1:return[2,r.sent()]}}))}))}var h=n(559),g=n(134),C=n(3),y=Object(C.action)("calendarFolderIdUpdated"),w=Object(C.action)("setCalendarLoadState",(function(e,t){return{calendarId:e,loadState:t}}));function _(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),w(e,"Loading"),[4,S(e)];case 1:return n.sent(),[3,3];case 2:return(t=n.sent()).message&&(t.message.indexOf("ErrorApiQuarantined")>=0||t.message.indexOf("ErrorTooManyObjectsOpened")>=0)?w(e,"Throttled"):w(e,"Failed"),[3,3];case 3:return[2]}}))}))}function S(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t,n,u,o,c,d,l,s,f,O,v;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:if(!(t=Object(a.m)(e)))throw new Error("Unable to get calendar entry for calendar "+e);n=Object(a.x)(e),u=Object(a.i)(e),o=Object(a.u)(n),c=o?o.mailboxInfo:Object(i.d)(),d=Object(a.L)(t),O=Object(a.t)().filter((function(e){return e.GroupId==t.ParentGroupId})),f=O?O[0].id.mailboxInfo.userIdentity:Object(i.d)().userIdentity,5==t.CalendarFolderType&&Object(b.h)().SessionSettings.DefaultPublicFolderMailbox?l=Object(b.h)().SessionSettings.DefaultPublicFolderMailbox:(v=function(e,t){return e||(t?t.userIdentity:null)}(t.OwnerEmailAddress,c),l=d?Object(a.f)(v):v),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,m(Object(h.a)({Id:u}),l,f)];case 2:return s=r.sent(),[3,4];case 3:return r.sent(),Object(g.r)("getCalendarFolderConfigurationServiceFailed"),Object(a.P)(t),[2];case 4:if(!s)throw new Error("Unable to get folder for calendar "+e);return(Object(a.P)(t),5==t.CalendarFolderType?function(e,t,n){var r=e.CalendarFolder;if(r){t.CalendarFolderId||(t.CalendarFolderId=e.CalendarFolder.FolderId);var u=r.ReplicaList[0];Object(a.b)(t,r,(o=u,{type:"PublicMailbox",userIdentity:Object(i.d)().userIdentity,mailboxSmtpAddress:o}))}var o}(s,t):function(e,t,n,r,i){var u,o,c=e.CalendarFolder;i&&(null===(u=null==c?void 0:c.FolderId)||void 0===u?void 0:u.Id)&&(c.FolderId.Id=Object(a.O)(c.FolderId.Id,r));(null===(o=null==c?void 0:c.EffectiveRights)||void 0===o?void 0:o.Read)&&(e.MasterList&&(t.RemoteCategories=e.MasterList),(r==t.OwnerEmailAddress||t.ItemId&&r==t.ItemId.Id)&&(Object(a.e)(r,{id:{id:t.ItemId.Id,mailboxInfo:n},calculatedFolderId:c.FolderId.Id}),Object(a.R)(r),Object(a.b)(t,c,n)))}(s,t,c,e,d),y(),[2])}}))}))}var E=n(346);function A(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t,n,i,u;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return[4,p(e)];case 1:if(null==(t=r.sent())||!t.WasSuccessful)throw u=new Error("[getCalendarFoldersFromServer] Failed to load calendars from server"),t?u.fetchErrorType="ServerFailure":u.networkError=!0,Object(c.d)(u),u;return n=d(t.CalendarGroups,t.CalendarFolders,e),o=t.CalendarGroups.length,i=o<1?{lowerBoundResultSize:null,upperBoundResultSize:0}:o<=3?{lowerBoundResultSize:1,upperBoundResultSize:3}:o<=6?{lowerBoundResultSize:4,upperBoundResultSize:6}:{lowerBoundResultSize:7,upperBoundResultSize:null},Object(g.r)("CalendarGroupsPerAccount",{connectedAccount_1:Object(E.r)(e),calendarGroupCount:t.CalendarGroups.length,calendarGroupCount_2:i.lowerBoundResultSize+" - "+i.upperBoundResultSize}),Object(a.E)(n.defaultCalendar,n.calendarEntryMapping,n.calendarFolderMapping,n.calendarGroupMapping,n.folderIdMapping,n.calendarIdToChangeKeyMapping),[2]}var o}))}))}var G=n(16),F=Object(C.createStore)("OwaCalendarsApiStore",{calendarIdsLoadState:new G.ObservableMap});function x(e){return F().calendarIdsLoadState.get(e)}Object(C.mutator)(w,(function(e){var t=e.calendarId,n=e.loadState;F().calendarIdsLoadState.set(t,n)})),Object(C.mutator)(a.Q,(function(e){var t=e.calendar;F().calendarIdsLoadState.delete(t.id.id)})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return _})),n.d(t,"f",(function(){return A})),n.d(t,"a",(function(){return y})),n.d(t,"d",(function(){return x}))},1036:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(28),a=n(1039);function i(e,t){return void 0===e||e.__type||(e=Object(a.a)(e)),Object(r.a)("GetUserUnifiedGroups",e,t)}},1037:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){return Object(r.__assign)({__type:"GetUserUnifiedGroupsRequest:#Exchange"},e)}},1039:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){return Object(r.__assign)({__type:"GetUserUnifiedGroupsJsonRequest:#Exchange"},e)}},1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(28);function a(e,t){return Object(r.a)("GetCalendarFolders",e,t)}},1052:function(e,t,n){"use strict";var r=n(28),a=n(0);function i(e,t){var n;return void 0===e.request||e.request.__type||(e.request=(n=e.request,Object(a.__assign)({__type:"GetCalendarFolderConfigurationRequest:#Exchange"},n))),Object(r.a)("GetCalendarFolderConfiguration",e,t)}n.d(t,"a",(function(){return i}))},1055:function(e){e.exports=JSON.parse('{"a":"BSa"}')},1056:function(e,t,n){"use strict";var r=n(0),a=n(188),i=n(1055),u=n(7),o=n(1036),c=n(1037),d=n(197),l="Groups",s=n(214),f=n(369),b=n(347),O=n(90);function v(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t,n,a;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return 4,(t=[]).push({FilterType:1,SortType:4,SortDirection:"Descending"}),t.push({FilterType:2,SortType:4,SortDirection:"Descending"}),(n=Object(d.b)()).RequestServerVersion="V2018_01_08",a=Object(b.a)(Object(s.d)(e)),[4,Object(o.a)({Header:n,Body:Object(c.a)({RequestedGroupsSets:t})},a)];case 1:return[2,r.sent()]}}))}))}var p=Object(a.action)("getGroupCalendarsService")((function(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return[4,v(e)];case 1:return null!=(t=n.sent())&&t.Body.GroupsSets&&t.Body.GroupsSets.length>0?[2,j(t.Body.GroupsSets,e)]:[2,null]}}))}))}));function j(e,t){var n=[],r=[],a=Object(O.s)(t,l);if(e.forEach((function(e){e.Groups.forEach((function(e){var i,u=e.SmtpAddress.toLowerCase(),o={type:"GroupMailbox",userIdentity:t,mailboxSmtpAddress:u},c={__type:f.a,CalendarColor:-1,CalendarName:e.DisplayName,OwnerEmailAddress:u,OwnerName:e.DisplayName,IsGroupMailboxCalendar:!0,IsGeneralScheduleCalendar:!0,ItemId:{Id:u},ParentGroupId:a},d={DistinguishedFolderId:u,DisplayName:e.DisplayName};n.push({entry:c,folder:d,mailboxInfo:o,groupMailboxGuid:null===(i=e.MailboxGuid)||void 0===i?void 0:i.toLowerCase()});var l={id:{id:u,mailboxInfo:o},calculatedFolderId:u,displayName:e.DisplayName,colorScheme:null};r.push(l)}))})),r.length>0){var o={id:{id:a,mailboxInfo:{type:"GroupMailbox",userIdentity:t,mailboxSmtpAddress:t}},GroupId:a,ItemId:{Id:a},GroupName:Object(u.b)(i.a),GroupType:3};return{groupCalendars:n,calendarGroup:o,calendars:r}}return null}var I=n(296),m=Object(a.action)("getGroupCalendars")((function(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return[4,p(e)];case 1:return t=r.sent(),null!=(n=Object(I.a)(e)?function(e){var t,n=Object(O.k)().filter((function(e){return e.__type===f.b}));if(0==n.length)return e;for(var r=[],a=[],i=function(t){var i=e.groupCalendars[t];n.some((function(e){var t,n,r=e;return(null===(t=r.OwnerEmailAddress)||void 0===t?void 0:t.toLowerCase())===i.mailboxInfo.mailboxSmtpAddress&&(null===(n=r.SharedOwnerMailboxGuid)||void 0===n?void 0:n.toLowerCase())===i.groupMailboxGuid}))||(r.push(i),a.push(e.calendars[t]))},u=0;u<(null===(t=null==e?void 0:e.groupCalendars)||void 0===t?void 0:t.length);u++)i(u);return(null==r?void 0:r.length)>0?{groupCalendars:r,calendarGroup:e.calendarGroup,calendars:a}:null}(t):t)&&null!=n.groupCalendars?(n.groupCalendars.forEach((function(e){Object(O.b)(e.entry,e.folder,e.mailboxInfo)})),Object(O.a)(n.calendarGroup),[2,{group:n.calendarGroup,calendars:n.calendars}]):[2,null]}}))}))})),h=n(134),g=n(85),C=Object(a.action)("initializeGroupCalendars")((function(e,t){var n;return Object(r.__awaiter)(this,void 0,void 0,(function(){var a,i,u,o,c,d;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:a=new h.b("initializeGroupCalendars"),e||(e=Object(s.d)().userIdentity),i=!!(null===(n=Object(g.i)(e))||void 0===n?void 0:n.GroupsEnabled),u=Object(O.s)(e,l),o=!Object(O.t)().some((function(t){return t.id.id===u&&t.id.mailboxInfo.userIdentity===e})),c=i&&(t||o),a.addCustomData({issueServiceCall:c,GroupsEnabled:i,featureEnabled:!0,refresh:t,initialLoad:o}),r.label=1;case 1:return r.trys.push([1,4,,5]),c?[4,m(e)]:[3,3];case 2:r.sent(),r.label=3;case 3:return a.end(),[3,5];case 4:throw d=r.sent(),a.endWithError("ServerError",Error(d)),d;case 5:return[2]}}))}))})),y=n(3),w=n(34),_=n(810),S=null;Object(y.orchestrator)(O.D,(function(e){var t=e.payload,n=t.id,r=t.EventType,a=t.Group;w.g.info(n+": "+r+", "+(null==a?void 0:a.SmtpAddress)),"Reload"!=r&&(S||(S=Object(_.a)(C.bind(null,Object(s.d)().userIdentity,!0),2e3)),S())})),n.d(t,"b",(function(){return C})),n.d(t,"a",(function(){return l}))},1059:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(44),a=new r.c((function(){return Promise.all([n.e(21),n.e(24),n.e(759)]).then(n.bind(null,1588))})),i=new r.a(a,(function(e){return e.initializeSelectedTeamsCalendars})),u=new r.a(a,(function(e){return e.getSelectedTeamsCalendars})),o=new r.a(a,(function(e){return e.createCalendarFromTeamsChannel})),c=new r.a(a,(function(e){return e.createCalendarCacheInfoFromTeamsChannel}))},1060:function(e,t,n){"use strict";var r;function a(e){return r=null==e?void 0:e.getCalendarFolders,e}function i(){var e=r;return r=void 0,e}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},1772:function(e,t,n){"use strict";function r(e,t){return!e.some((function(e){return e&&t&&e.calculatedFolderId===t.calculatedFolderId}))}function a(e,t){return e.indexOf(t)<0}function i(e,t){if(void 0===t&&(t=a),!e)return[];var n=[];return e&&e.forEach((function(e){t(n,e)&&n.push(e)})),n}var u=n(16);function o(e,t){if(void 0===t&&(t=a),!e)return e;var n=new u.ObservableMap;return e.forEach((function(e,r){n.set(r,i(e,t))})),n}function c(e,t){if(void 0===t&&(t=a),!e)return[];var n=[];return e.forEach((function(e){e&&e.forEach((function(e){t(n,e)&&n.push(e)}))})),n}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c}))},1967:function(e,t,n){"use strict";var r=n(3),a=Object(r.action)("UPDATE_SELECTED_CALENDARS_IN_STORE",(function(e,t){return{calendarIds:e,userIdentity:t}})),i=Object(r.action)("ADD_SELECTED_CALENDAR_IN_STORE",(function(e,t){return{calendarId:e,userIdentity:t}})),u={selectedCalendars:new(n(16).ObservableMap)},o=Object(r.createStore)("selectedCalendarsStore",u),c=n(1772);Object(r.mutator)(a,(function(e){var t=e.calendarIds,n=e.userIdentity;o().selectedCalendars.set(n,Object(c.b)(t))}));var d=n(0);function l(){return Object(c.c)(o().selectedCalendars)}function s(){return Object(c.d)(l())}function f(e){var t=l().get(e);return t||[]}Object(r.mutator)(i,(function(e){var t=e.calendarId,n=e.userIdentity;o().selectedCalendars.set(n,Object(c.b)(Object(d.__spread)(f(n),[t])))}));var b=Object(r.action)("UPDATE_SELECTED_CALENDARS",(function(e,t){return{calendarIds:e,userIdentity:t}})),O=Object(r.action)("ADD_SELECTED_CALENDAR",(function(e,t){return{calendarId:e,userIdentity:t}})),v=(Object(r.action)("INITIALIZE_SELECTED_CALENDARS",(function(e,t){return{calendarIds:e,userIdentity:t}})),Object(r.action)("SELECTED_CALENDARS_UPDATED",(function(e,t){return{calendarIds:e,userIdentity:t}}))),p=n(214),j=n(34),I=n(85),m=n(347),h="OWA.ViewStateConfiguration";function g(e,t){e&&I.v.importAndExecute([{key:"SelectedCalendarsDesktop",valuetype:"StringArray",value:Object(c.b)(e)}],h,Object(m.a)(Object(p.d)(t))).catch((function(e){j.g.warn("Could not save new selected calendars list to user configuration")}))}function C(e){return e?function(e){var t=l().get(e);return t?t.length:0}(e):(t=l(),n=0,t.forEach((function(e,t){e&&(n+=e.length)})),n);var t,n}Object(r.orchestrator)(b,(function(e){var t=e.calendarIds,n=e.userIdentity;a(t,n),v(t,n),g(t,n)})),Object(r.orchestrator)(O,(function(e){var t=e.calendarId,n=e.userIdentity;i(t,n);var r=f(n);v(r,n),g(r,n)})),Object(r.orchestrator)(I.A,(function(e){var t=e.userConfiguration,n=e.userIdentity,r=t.ViewStateConfiguration.SelectedCalendarsDesktop,i=n||Object(p.d)().userIdentity;a(r,i),v(r,i)})),n.d(t,"g",(function(){return b})),n.d(t,"a",(function(){return O})),n.d(t,"f",(function(){return v})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return C})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return s}))},325:function(e,t,n){"use strict";var r=n(612),a="object"==typeof self&&self&&self.Object===Object&&self,i=r.a||a||Function("return this")();t.a=i},347:function(e,t,n){"use strict";var r=n(0);function a(e,t){return e?Object(r.__assign)({mailboxInfo:e},t):null!=t?t:void 0}n.d(t,"a",(function(){return a}))},350:function(e,t,n){"use strict";t.a=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},367:function(e,t,n){"use strict";var r=n(325).a.Symbol;t.a=r},403:function(e,t,n){"use strict";t.a=function(e){return null!=e&&"object"==typeof e}},419:function(e,t,n){"use strict";var r=n(367),a=Object.prototype,i=a.hasOwnProperty,u=a.toString,o=r.a?r.a.toStringTag:void 0;var c=function(e){var t=i.call(e,o),n=e[o];try{e[o]=void 0;var r=!0}catch(e){}var a=u.call(e);return r&&(t?e[o]=n:delete e[o]),a},d=Object.prototype.toString;var l=function(e){return d.call(e)},s="[object Null]",f="[object Undefined]",b=r.a?r.a.toStringTag:void 0;t.a=function(e){return null==e?void 0===e?f:s:b&&b in Object(e)?c(e):l(e)}},4395:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(44),a=new r.c((function(){return Promise.all([n.e(131),n.e(277),n.e(791)]).then(n.bind(null,7005))})),i=new r.a(a,(function(e){return e.loadWorkloadScenarioSettings}))},467:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s}));var r=n(9),a=n(4),i=n(40),u=new r.b((function(){return Promise.all([n.e(124),n.e(861)]).then(n.bind(null,1264))})),o=new r.a(u,(function(e){return e.tryGetCalendarViewOffline})),c=new r.a(u,(function(e){return e.onGetCalendarViewResponse})),d=new r.a(u,(function(e){return e.tryGetCalendarFoldersOffline})),l=new r.a(u,(function(e){return e.onGetCalendarFoldersResponse}));function s(){return Object(i.i)("fwk-offline-services")&&Object(a.d)("offlineboot",window.location)}},559:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){return Object(r.__assign)({__type:"FolderId:#Exchange"},e)}},6078:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n(85),i=n(899),u=n(1013),o=n(40),c=n(268);function d(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e;return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(i.d)()];case 1:return t.sent(),e=Object(a.h)(),Object(o.g)("cal-multiAccounts",(function(){var t,n;Object(c.a)("multiAccounts")&&!Object(a.s)()&&!(null===(t=null==e?void 0:e.SessionSettings)||void 0===t?void 0:t.IsExplicitLogon)&&(null===(n=null==e?void 0:e.PolicySettings)||void 0===n?void 0:n.PersonalAccountCalendarsEnabled)&&u.a.importAndExecute()})),[2]}}))}))}},611:function(e,t,n){"use strict";var r=n(419),a=n(403),i="[object Symbol]";t.a=function(e){return"symbol"==typeof e||Object(a.a)(e)&&Object(r.a)(e)==i}},612:function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(this,n(122))},616:function(e,t,n){"use strict";function r(e){void 0===e&&(e={}),function(e){e.timeBetweenRetryInMS=e.timeBetweenRetryInMS||function(){return 6e4}}(e);var t=e.maximumAttempts,n=e.timeBetweenRetryInMS;return function(e){var r=0,a=!1,i=function(u,o){a?o(new Error("The function retry was cancelled")):(r++,e().then((function(e){return u(e)})).catch((function(e){t&&r>=t?o(e):setTimeout((function(){return i(u,o)}),n(r))})))};return{retriableFunc:function(){return new Promise((function(e,t){return i(e,t)}))},cancel:function(){return a=!0}}}}function a(e){return function(t){return Math.pow(2,t)*e}}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},657:function(e,t,n){"use strict";var r=n(350),a=n(611),i=NaN,u=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,l=parseInt;t.a=function(e){if("number"==typeof e)return e;if(Object(a.a)(e))return i;if(Object(r.a)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Object(r.a)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=c.test(e);return n||d.test(e)?l(e.slice(2),n?2:8):o.test(e)?i:+e}},7026:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(899),i=n(3),u=n(1967),o=n(214),c=n(90),d=n(1017);Object(i.orchestrator)(a.c,(function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var t,n;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return t=e.userId,n=Object(u.e)(t||Object(o.d)().userIdentity),[4,Promise.all(n.filter((function(e){return Object(c.d)(e)&&Object(c.c)(e)})).map(d.c))];case 1:return r.sent(),[2]}}))}))}));var l=n(6078),s=n(7748);n.d(t,"initializeAccountAndCalendars",(function(){return l.a})),n.d(t,"initializeCalendarsDataForModule",(function(){return s.a}))},712:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){return Object(r.__assign)({__type:"DistinguishedFolderId:#Exchange"},e)}},7121:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(44),a=new r.c((function(){return n.e(331).then(n.bind(null,11117)).then((function(e){return e.initialize(),e}))})),i=new r.a(a,(function(e){return e.tryAutoSelect}))},7748:function(e,t,n){"use strict";var r=n(0),a=n(7121),i=n(6078),u=n(44),o=new u.c((function(){return n.e(346).then(n.bind(null,17370))})),c=new u.a(o,(function(e){return e.autoUpgradeOldModelCalendars})),d=n(40),l=n(4395),s=n(85);n.d(t,"a",(function(){return b}));var f=!1;function b(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return f?[2]:(f=!0,e=[Object(i.a)(),l.a.importAndExecute()],a.a.import(),[4,Promise.all(e)]);case 1:return n.sent(),t=Object(s.h)(),Object(d.g)("cal-sharing-autoUpgrade",(function(){var e,n;!Object(s.s)()&&1==(null===(e=null==t?void 0:t.ViewStateConfiguration)||void 0===e?void 0:e.CalendarViewTypeDesktop)&&(null===(n=null==t?void 0:t.ViewStateConfiguration)||void 0===n?void 0:n.CalendarViewInSplitMode)&&c.importAndExecute()})),[2]}}))}))}},810:function(e,t,n){"use strict";var r=n(350),a=n(325),i=function(){return a.a.Date.now()},u=n(657),o="Expected a function",c=Math.max,d=Math.min;t.a=function(e,t,n){var a,l,s,f,b,O,v=0,p=!1,j=!1,I=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=a,r=l;return a=l=void 0,v=t,f=e.apply(r,n)}function h(e){var n=e-O;return void 0===O||n>=t||n<0||j&&e-v>=s}function g(){var e=i();if(h(e))return C(e);b=setTimeout(g,function(e){var n=t-(e-O);return j?d(n,s-(e-v)):n}(e))}function C(e){return b=void 0,I&&a?m(e):(a=l=void 0,f)}function y(){var e=i(),n=h(e);if(a=arguments,l=this,O=e,n){if(void 0===b)return function(e){return v=e,b=setTimeout(g,t),p?m(e):f}(O);if(j)return clearTimeout(b),b=setTimeout(g,t),m(O)}return void 0===b&&(b=setTimeout(g,t)),f}return t=Object(u.a)(t)||0,Object(r.a)(n)&&(p=!!n.leading,s=(j="maxWait"in n)?c(Object(u.a)(n.maxWait)||0,t):s,I="trailing"in n?!!n.trailing:I),y.cancel=function(){void 0!==b&&clearTimeout(b),v=0,a=O=l=b=void 0},y.flush=function(){return void 0===b?f:C(i())},y}},887:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return o}));var r=n(3),a=Object(r.action)("initializeOwaAccountsStore"),i=Object(r.action)("owaConnectedAccountAdded",(function(e,t){return{userIdentity:e,accountProviderType:t}})),u=Object(r.action)("removeAccount",(function(e){return{userIdentity:e}})),o=Object(r.action)("owaAccountStoreInitializationFailed",(function(e,t,n,r){return{userIdentity:e,isRetry:t,accountProvider:n,error:r}}))},899:function(e,t,n){"use strict";var r,a=n(3),i=Object(a.createStore)("cacheLoaderStore",{loadedCalendarAccounts:[]});!function(e){e[e.Outlook=0]="Outlook",e[e.OutlookGroup=1]="OutlookGroup",e[e.TeamsCalendars=2]="TeamsCalendars"}(r||(r={}));var u=n(105),o=n(214);function c(e,t){switch(e){case r.Outlook:case r.OutlookGroup:return(t||Object(o.d)().userIdentity)+e.toString();case r.TeamsCalendars:return e.toString();default:return Object(u.a)(e)}}var d=n(85),l=n(40);function s(e,t){var n=c(e,t);return i().loadedCalendarAccounts.some((function(e){return e===n}))}function f(e){return function(e){if(e&&e!==Object(d.b)()){var t=[r.Outlook];return Object(l.i)("cal-multiAccounts-groups")&&t.push(r.OutlookGroup),t}return[r.Outlook,r.OutlookGroup,r.TeamsCalendars]}(e).every((function(t){return s(t,e)}))}var b=Object(a.action)("addToLoadedCalendarAccounts",(function(e){return{calendarAccountData:e}}));Object(a.mutator)(b,(function(e){i().loadedCalendarAccounts.push(e.calendarAccountData)}));var O=n(1013),v=n(34),p=Object(a.action)("calendarCacheInitializedForAccount",(function(e,t){return{calendarEndpointType:e,userId:t}})),j=n(0),I=n(1017),m=n(1056),h=n(1059);var g=n(616),C=Object(g.b)({maximumAttempts:3,timeBetweenRetryInMS:Object(g.a)(1e3)}),y={};function w(e,t){if(t=t||Object(o.d)().userIdentity,s(e,t))return Promise.resolve();var n=c(e,t),a=y[n];if(a)return a.requestPromise;var i=C((function(){return function(e,t){return Object(j.__awaiter)(this,void 0,void 0,(function(){return Object(j.__generator)(this,(function(n){switch(n.label){case 0:switch(e){case r.Outlook:return[3,1];case r.OutlookGroup:return[3,3];case r.TeamsCalendars:return[3,5]}return[3,8];case 1:return[4,Object(I.f)(t)];case 2:return n.sent(),[3,9];case 3:return[4,Object(m.b)(t)];case 4:return n.sent(),[3,9];case 5:return Object(l.i)("cal-showAddTeamsCalendars")?[4,h.d.importAndExecute()]:[3,7];case 6:n.sent(),n.label=7;case 7:return[3,9];case 8:Object(u.a)(e),n.label=9;case 9:return[2]}}))}))}(e,t)})).retriableFunc();return y[n]={requestPromise:i},i.then((function(){b(n),p(e,t)})).catch((function(e){v.d("initializeCalendarsCacheForAccount: failed to initialize calendar cache",e)}))}Object(a.orchestrator)(O.e,(function(e){w(r.Outlook,e.userIdentity),Object(l.i)("cal-multiAccounts-groups")&&w(r.OutlookGroup,e.userIdentity)}));var _=n(346);function S(){return Object(j.__awaiter)(this,void 0,void 0,(function(){var e,t,n,a,i,u;return Object(j.__generator)(this,(function(o){switch(o.label){case 0:return e=w(r.Outlook),t=Object(_.n)().map((function(e){Object(d.i)(e.userIdentity)&&w(r.Outlook,e.userIdentity)})),n=w(r.OutlookGroup),a=w(r.TeamsCalendars),i=Object(j.__spread)([e,n],t,[a]),Object(l.i)("cal-multiAccounts-groups")&&(u=Object(_.n)().map((function(e){Object(d.i)(e.userIdentity)&&w(r.OutlookGroup,e.userIdentity)})),i=i.concat(u)),[4,Promise.all(i)];case 1:return o.sent(),[2]}}))}))}n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return w})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return S}))}}]);
//# sourceMappingURL=owa.MailBoot~CalendarBootstrapUtils.js.map
self.scriptsLoaded['owa.MailBoot~CalendarBootstrapUtils.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~CalendarBootstrapUtils.js'] = (new Date()).getTime();