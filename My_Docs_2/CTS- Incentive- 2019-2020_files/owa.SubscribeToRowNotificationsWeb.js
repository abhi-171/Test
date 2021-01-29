self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.SubscribeToRowNotificationsWeb.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[925],{17486:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(6830),i=t(6831),a=t(6832),u=t(454),s=t(785),c=t(2001),d="Descending";var l=t(5547),v=t(4663),f=t(706);t.d(n,"subscribeToRowNotificationsWeb",(function(){return p}));var p=Object(l.a)((function(e,n,t,l){return function(e){var n,t,l,v,p;return Object(r.__awaiter)(this,void 0,void 0,(function(){var m,I,h;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return(m={subscriptionId:"RowNotification",requiresExplicitSubscribe:!0,subscriptionParameters:{}}).subscriptionId=e.input.subscriptionId,[4,f.b.import()];case 1:return I=r.sent()(),!0===(h={NotificationType:"RowNotification",FolderId:(C=e.input.type,w=e.input.commonRowsOptions.folderId,"Folder"==C?w:void 0),FocusedViewFilter:Object(o.a)(e.input.focusedViewFilter),IsConversation:"Conversation"==e.input.listViewType,CategoryFilter:null!==(n=e.input.categoryName)&&void 0!==n?n:void 0,Filter:e.input.viewFilter,ChannelId:I,MailboxId:b(e.input.type,e.input.commonRowsOptions.folderId)}).IsConversation?(h.ConversationShapeName=null!==(l=null===(t=e.input.shape)||void 0===t?void 0:t.ShapeName)&&void 0!==l?l:void 0,h.ConversationResponseShape=Object(i.a)(null!==(p=null===(v=e.input.shape)||void 0===v?void 0:v.IsScheduledFolder)&&void 0!==p&&p),h.SortBy=Object(a.a)(e.input.commonRowsOptions.sortBy)):h.SortBy=function(e){var n,t;switch(e.sortColumn){case"Date":e.canSortByRenewTime?n="ReceivedOrRenewTime":e.isDraftsFolder&&(n="ItemLastModifiedTime");break;case"From":t=!0,n=Object(u.a)({PropertyTag:"0x0042",PropertyType:"String"});break;case"Size":n="Size";break;case"Importance":n="Importance";break;case"Subject":n="Subject";break;default:throw new Error("getMailItemSortByProperty: sort column not supported"+e.sortColumn)}var r=[];if(n){var o=n;t||(o=Object(s.a)({FieldURI:n})),r.push(Object(c.a)({Order:e.sortDirection,Path:o}))}var i="Date"==e.sortColumn?e.sortDirection:d;return r.push(Object(c.a)({Order:i,Path:Object(s.a)({FieldURI:"DateTimeReceived"})})),r}(e.input.commonRowsOptions.sortBy),m.subscriptionParameters=h,[2,Promise.resolve(m)]}var C,w}))}))}(n).then((function(e){return{subscribe:function(n){return function(e,n){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return t=function(e){return function(n){e(function(e){var n;return"RowDeleted"==e.EventType?{__typename:"RowNotificationDeletePayload",id:e.id,EventType:e.EventType,Conversation:{InstanceKey:null===(n=e.Conversation)||void 0===n?void 0:n.InstanceKey}}:{__typename:"RowNotificationChangePayload",id:e.id,EventType:e.EventType,Conversation:null!=e.Conversation?Object(v.b)(e.Conversation):void 0}}(n))}}(n),[4,f.f.importAndExecute(e,t)];case 1:return r.sent(),[2,t]}}))}))}(e,n)},unSubscribe:function(n){return function(e,n){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,f.g.importAndExecute(e,n)];case 1:return t.sent(),[2]}}))}))}(e,n)}}}))}));function b(e,n){return"Group"==e?n:void 0}},1929:function(e,n,t){"use strict";var r;!function(e){e[e.NotSupportedByHx=0]="NotSupportedByHx"}(r||(r={}));var o=function(e,n){return void 0!==n?(null==e?void 0:e.hxFallbackReason)===n:void 0!==(null==e?void 0:e.hxFallbackReason)},i=function(e){return{hxFallbackReason:r.NotSupportedByHx,message:null!=e?e:""}};t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}))},2001:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"SortResults:#Exchange"},e)}},4663:function(e,n,t){"use strict";function r(e){var n,t,r,o;return{__typename:"ConversationType",ConversationId:{Id:e.ConversationId.Id},ConversationTopic:null!==(n=e.ConversationTopic)&&void 0!==n?n:"",UniqueRecipients:e.UniqueRecipients,UniqueSenders:e.UniqueSenders,LastDeliveryTime:null!==(t=e.LastDeliveryTime)&&void 0!==t?t:"",Categories:e.Categories,FlagStatus:e.FlagStatus,FlagStatusV2:e.FlagStatusV2,HasAttachments:e.HasAttachments,MessageCount:e.MessageCount,GlobalMessageCount:e.GlobalMessageCount,UnreadCount:null!==(r=e.UnreadCount)&&void 0!==r?r:0,GlobalUnreadCount:e.GlobalUnreadCount,Size:e.Size,ItemClasses:e.ItemClasses,Importance:e.Importance,ItemIds:e.ItemIds,GlobalItemIds:e.GlobalItemIds,LastModifiedTime:e.LastModifiedTime,InstanceKey:e.InstanceKey,Preview:e.Preview,IconIndex:e.IconIndex,DraftItemIds:e.DraftItemIds,HasIrm:e.HasIrm,GlobalLikeCount:e.GlobalLikeCount,LastDeliveryOrRenewTime:null!==(o=e.LastDeliveryOrRenewTime)&&void 0!==o?o:"",GlobalMentionedMe:e.GlobalMentionedMe,GlobalAtAllMention:e.GlobalAtAllMention,SortOrderSource:e.SortOrderSource,LastSender:e.LastSender,From:e.From,ParentFolderId:e.ParentFolderId?{__typename:"FolderId",Id:e.ParentFolderId.Id}:void 0,EntityNamesMap:e.EntityNamesMap,HasExternalEmails:e.HasExternalEmails,ReturnTime:e.ReturnTime,HasSharepointLink:e.HasSharepointLink,HasAttachmentPreviews:e.HasAttachmentPreviews,HasProcessedSharepointLink:e.HasProcessedSharepointLink,CouponRanks:e.CouponRanks,CouponExpiryDates:e.CouponExpiryDates,mentionedMe:e.GlobalMentionedMe||e.GlobalAtAllMention,id:e.ConversationId.Id}}function o(e){var n,t,r,o,d;return{__typename:"ConversationRowConnection",edges:c(e.Conversations),pageInfo:{__typename:"PageInfo",endCursor:s(e.Conversations),hasNextPage:a(e),hasPreviousPage:i(e),startCursor:u(e.Conversations)},searchFolderId:null!==(t=null===(n=e.SearchFolderId)||void 0===n?void 0:n.Id)&&void 0!==t?t:void 0,folderId:null!==(o=null===(r=e.FolderId)||void 0===r?void 0:r.Id)&&void 0!==o?o:void 0,totalConversationRowsInView:null!==(d=e.TotalConversationsInView)&&void 0!==d?d:0}}function i(e){return!(void 0===e.IndexedOffset||!e.Conversations)&&e.IndexedOffset>e.Conversations.length}function a(e){return void 0!==e.IndexedOffset&&null!=e.TotalConversationsInView&&e.IndexedOffset<e.TotalConversationsInView}function u(e){var n;return e&&e.length>0&&null!==(n=e[0].InstanceKey)&&void 0!==n?n:""}function s(e){var n;return e&&e.length>0&&null!==(n=e[e.length-1].InstanceKey)&&void 0!==n?n:""}function c(e){return e&&0!=e.length?e.map((function(e){var n;return{__typename:"ConversationRowEdge",cursor:null!==(n=e.InstanceKey)&&void 0!==n?n:"",node:r(e)}})):[]}t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r}))},5113:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"ConversationResponseShape:#Exchange"},e)}},5547:function(e,n,t){"use strict";var r=t(0),o=function(e){throw new Error(e.toString())};
/*!
    callback-to-async-iterator v1.1.1 - MIT license (https://github.com/withspectrum/callback-to-async-iterator.git)
*/var i=function(e,n){var t,r;void 0===n&&(n={});var i=n.onError,a=void 0===i?o:i,u=n.onClose;try{var s,c=[],d=[],l=!0,v=function(){l&&(l=!1,c.forEach((function(e){return e({value:void 0,done:!0})})),c=[],d=[],null==u||u(s))};return e((function(e){return function(e){0!==c.length?c.shift()({value:e,done:!1}):d.push(e)}(e)})).then((function(e){s=e})).catch((function(e){a(e)})),(t={next:function(){return l?new Promise((function(e){0!==d.length?e({value:d.shift(),done:!1}):c.push(e)})):this.return()},return:function(){return v(),Promise.resolve({value:void 0,done:!0})},throw:function(e){return v(),a(e),Promise.reject(e)}})[Symbol.asyncIterator]=function(){return this},t}catch(e){return a(e),(r={next:function(){return Promise.reject(e)},return:function(){return Promise.reject(e)},throw:function(e){return Promise.reject(e)}})[Symbol.asyncIterator]=function(){return this},r}},a=t(1929),u=t(34);function s(e){var n=this;return{subscribe:function(t,o,u,s){return Object(r.__awaiter)(n,void 0,void 0,(function(){var n,d;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return[4,e(t,o,u,s)];case 1:return n=r.sent(),Object(a.b)(n)?[2,n]:[2,i((d=n).subscribe,{onClose:d.unSubscribe,onError:c})]}}))}))},resolve:function(e){return e}}}function c(e){u.g.warn("Subscription error: "+e.message)}t.d(n,"a",(function(){return s}))},6830:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(105);function o(e){switch(e){case"None":return-1;case"Focused":return 0;case"Other":return 1;default:return Object(r.a)(e)}}},6831:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(5113),o=t(785);function i(e){return e?Object(r.a)({BaseShape:"IdOnly",AdditionalProperties:[Object(o.a)({FieldURI:"ConversationReturnTime"})]}):Object(r.a)({BaseShape:"IdOnly"})}},6832:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(785),o=t(2001);function i(e){var n;switch(e.sortColumn){case"Date":e.canSortByRenewTime&&(n="ConversationLastDeliveryOrRenewTime");break;case"From":n="ConversationUniqueSenders";break;case"Size":n="ConversationSize";break;case"Subject":n="ConversationTopic";break;case"Importance":n="ConversationImportance";break;default:throw new Error("getConversationSortResultsFromSortBy: sort column is not supported "+e.sortColumn)}var t=[];n&&t.push(Object(o.a)({Order:e.sortDirection,Path:Object(r.a)({FieldURI:n})}));var i="Date"==e.sortColumn?e.sortDirection:"Descending";return t.push(Object(o.a)({Order:i,Path:Object(r.a)({FieldURI:"ConversationLastDeliveryTime"})})),t}},706:function(e,n,t){"use strict";var r=t(44),o={ChannelData:"ChannelData",SubscriptionAdded:"SubscriptionAdded",SubscriptionRemoved:"SubscriptionRemoved",SubscriptionUpdated:"SubscriptionUpdated",NotificationData:"NotificationData",TraceWarn:"TraceWarn",TraceError:"TraceError"};t.d(n,"f",(function(){return a})),t.d(n,"g",(function(){return u})),t.d(n,"b",(function(){return s})),t.d(n,"e",(function(){return c})),t.d(n,"d",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"a",(function(){return o}));var i=new r.c((function(){return Promise.all([t.e(3),t.e(23),t.e(664)]).then(t.bind(null,17142))})),a=new r.a(i,(function(e){return e.subscribe})),u=new r.a(i,(function(e){return e.unsubscribe})),s=new r.b(i,(function(e){return e.getChannelId})),c=(new r.b(i,(function(e){return e.getChannelReady})),new r.a(i,(function(e){return e.setup}))),d=new r.a(i,(function(e){return e.initializeNotificationManager})),l=new r.b(i,(function(e){return e.getNotificationEmitter}))},785:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"PropertyUri:#Exchange"},e)}}}]);
//# sourceMappingURL=owa.SubscribeToRowNotificationsWeb.js.map
self.scriptsLoaded['owa.SubscribeToRowNotificationsWeb.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.SubscribeToRowNotificationsWeb.js'] = (new Date()).getTime();