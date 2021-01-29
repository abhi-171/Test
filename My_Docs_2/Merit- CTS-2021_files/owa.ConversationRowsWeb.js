self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.ConversationRowsWeb.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[368],{1691:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0),o=t(1692),a=t(1693);function i(e){var n,t;if(!e)return Promise.reject(Object(o.a)("500","Server returned a null response!",null));var i=Array.isArray(e)?e:[e];try{for(var s=Object(r.__values)(i),u=s.next();!u.done;u=s.next()){var c=u.value;if(c&&!Object(a.a)(c))return Promise.reject(Object(o.a)(c.ResponseCode,c.StackTrace,c.MessageText))}}catch(e){n={error:e}}finally{try{u&&!u.done&&(t=s.return)&&t.call(s)}finally{if(n)throw n.error}}return Promise.resolve()}},1692:function(e,n,t){"use strict";function r(e,n,t){var r="ResponseCode="+e;n&&(r+=", Stacktrace="+n);var o=new Error(r);return o.responseCode=e,o.fetchErrorType="ServerFailure",t&&(o.diagnosticInfo="MessageText= "+t),o}t.d(n,"a",(function(){return r}))},1693:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r="Success";function o(e){return e&&e.ResponseClass==r}},17417:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(2787),a=t(2788),i=t(6106),s=t(785),u=t(2789);var c=t(1753),d=t(2870),l=t(8502);var v=t(9620),f=t(1691),I=t(4663);t.d(n,"conversationRowsWeb",(function(){return b}));var b=function(e,n,t,b){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var e,b,p,O,_;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:if((e=n.options).category&&"UserCategory"!=e.viewFilter)throw new Error("conversationRowsWeb: category should be set only for UserCategory view filter");return e.pausedInboxTime&&(b=function(e){var n=Object(i.a)({Item:Object(s.a)({FieldURI:"ConversationLastDeliveryTime"}),FieldURIOrConstant:Object(a.a)({Item:Object(o.a)({Value:e})})});return Object(u.a)({Item:n})}(e.pausedInboxTime)),p=function(e,n){if(n){var t=Object(d.a)({FieldURIOrConstant:Object(a.a)({Item:Object(o.a)({Value:n})}),Item:Object(s.a)({FieldURI:"ConversationInstanceKey"})}),r=Object(u.a)({Item:t});return Object(l.a)({BasePoint:"Beginning",Condition:r,MaxEntriesReturned:e})}return Object(c.a)({BasePoint:"Beginning",Offset:0,MaxEntriesReturned:e})}(n.first,n.after),[4,Object(v.a)(e.commonRowsOptions.folderId,p,e.viewFilter,e.commonRowsOptions.sortBy,e.focusedViewFilter,e.shape,e.commonRowsOptions.mailboxInfo,e.category,e.searchFolderId,b,b,t.requestOptions)];case 1:return O=r.sent(),_=O.Body,[2,Object(f.a)(_).then((function(){return Object(I.a)(_)}))]}}))}))}},1753:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"IndexedPageView:#Exchange"},e)}},2001:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"SortResults:#Exchange"},e)}},2787:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"Constant:#Exchange"},e)}},2788:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"FieldURIOrConstantType:#Exchange"},e)}},2789:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"RestrictionType:#Exchange"},e)}},2870:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"IsEqualTo:#Exchange"},e)}},347:function(e,n,t){"use strict";var r=t(0);function o(e,n){return e?Object(r.__assign)({mailboxInfo:e},n):null!=n?n:void 0}t.d(n,"a",(function(){return o}))},4663:function(e,n,t){"use strict";function r(e){var n,t,r,o;return{__typename:"ConversationType",ConversationId:{Id:e.ConversationId.Id},ConversationTopic:null!==(n=e.ConversationTopic)&&void 0!==n?n:"",UniqueRecipients:e.UniqueRecipients,UniqueSenders:e.UniqueSenders,LastDeliveryTime:null!==(t=e.LastDeliveryTime)&&void 0!==t?t:"",Categories:e.Categories,FlagStatus:e.FlagStatus,FlagStatusV2:e.FlagStatusV2,HasAttachments:e.HasAttachments,MessageCount:e.MessageCount,GlobalMessageCount:e.GlobalMessageCount,UnreadCount:null!==(r=e.UnreadCount)&&void 0!==r?r:0,GlobalUnreadCount:e.GlobalUnreadCount,Size:e.Size,ItemClasses:e.ItemClasses,Importance:e.Importance,ItemIds:e.ItemIds,GlobalItemIds:e.GlobalItemIds,LastModifiedTime:e.LastModifiedTime,InstanceKey:e.InstanceKey,Preview:e.Preview,IconIndex:e.IconIndex,DraftItemIds:e.DraftItemIds,HasIrm:e.HasIrm,GlobalLikeCount:e.GlobalLikeCount,LastDeliveryOrRenewTime:null!==(o=e.LastDeliveryOrRenewTime)&&void 0!==o?o:"",GlobalMentionedMe:e.GlobalMentionedMe,GlobalAtAllMention:e.GlobalAtAllMention,SortOrderSource:e.SortOrderSource,LastSender:e.LastSender,From:e.From,ParentFolderId:e.ParentFolderId?{__typename:"FolderId",Id:e.ParentFolderId.Id}:void 0,EntityNamesMap:e.EntityNamesMap,HasExternalEmails:e.HasExternalEmails,ReturnTime:e.ReturnTime,HasSharepointLink:e.HasSharepointLink,HasAttachmentPreviews:e.HasAttachmentPreviews,HasProcessedSharepointLink:e.HasProcessedSharepointLink,CouponRanks:e.CouponRanks,CouponExpiryDates:e.CouponExpiryDates,mentionedMe:e.GlobalMentionedMe||e.GlobalAtAllMention,id:e.ConversationId.Id}}function o(e){var n,t,r,o,d;return{__typename:"ConversationRowConnection",edges:c(e.Conversations),pageInfo:{__typename:"PageInfo",endCursor:u(e.Conversations),hasNextPage:i(e),hasPreviousPage:a(e),startCursor:s(e.Conversations)},searchFolderId:null!==(t=null===(n=e.SearchFolderId)||void 0===n?void 0:n.Id)&&void 0!==t?t:void 0,folderId:null!==(o=null===(r=e.FolderId)||void 0===r?void 0:r.Id)&&void 0!==o?o:void 0,totalConversationRowsInView:null!==(d=e.TotalConversationsInView)&&void 0!==d?d:0}}function a(e){return!(void 0===e.IndexedOffset||!e.Conversations)&&e.IndexedOffset>e.Conversations.length}function i(e){return void 0!==e.IndexedOffset&&null!=e.TotalConversationsInView&&e.IndexedOffset<e.TotalConversationsInView}function s(e){var n;return e&&e.length>0&&null!==(n=e[0].InstanceKey)&&void 0!==n?n:""}function u(e){var n;return e&&e.length>0&&null!==(n=e[e.length-1].InstanceKey)&&void 0!==n?n:""}function c(e){return e&&0!=e.length?e.map((function(e){var n;return{__typename:"ConversationRowEdge",cursor:null!==(n=e.InstanceKey)&&void 0!==n?n:"",node:r(e)}})):[]}t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r}))},5113:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"ConversationResponseShape:#Exchange"},e)}},559:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"FolderId:#Exchange"},e)}},6106:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"IsLessThanOrEqualTo:#Exchange"},e)}},6830:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(105);function o(e){switch(e){case"None":return-1;case"Focused":return 0;case"Other":return 1;default:return Object(r.a)(e)}}},6831:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(5113),o=t(785);function a(e){return e?Object(r.a)({BaseShape:"IdOnly",AdditionalProperties:[Object(o.a)({FieldURI:"ConversationReturnTime"})]}):Object(r.a)({BaseShape:"IdOnly"})}},6832:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(785),o=t(2001);function a(e){var n;switch(e.sortColumn){case"Date":e.canSortByRenewTime&&(n="ConversationLastDeliveryOrRenewTime");break;case"From":n="ConversationUniqueSenders";break;case"Size":n="ConversationSize";break;case"Subject":n="ConversationTopic";break;case"Importance":n="ConversationImportance";break;default:throw new Error("getConversationSortResultsFromSortBy: sort column is not supported "+e.sortColumn)}var t=[];n&&t.push(Object(o.a)({Order:e.sortDirection,Path:Object(r.a)({FieldURI:n})}));var a="Date"==e.sortColumn?e.sortDirection:"Descending";return t.push(Object(o.a)({Order:a,Path:Object(r.a)({FieldURI:"ConversationLastDeliveryTime"})})),t}},712:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"DistinguishedFolderId:#Exchange"},e)}},785:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"PropertyUri:#Exchange"},e)}},793:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"TargetFolderId:#Exchange"},e)}},8502:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"SeekToConditionPageView:#Exchange"},e)}},9620:function(e,n,t){"use strict";var r=t(712),o=t(559),a=t(793);function i(e){switch(e){case"UserCategory":return"Deep";default:return}}var s=t(6830),u=t(6831),c=t(6832),d=t(28),l=t(0);function v(e,n){var t;return void 0===e||e.__type||(t=e,e=Object(l.__assign)({__type:"FindConversationJsonRequest:#Exchange"},t)),Object(d.a)("FindConversation",e,n)}var f=t(197),I=t(347);function b(e,n,t,d,l,b,p,O,_,m,g,C){var y,h,j=Object(I.a)(p,C);h="GroupMailbox"==p.type?Object(r.a)({Id:"inbox",Mailbox:{MailboxType:p.type,EmailAddress:null!==(y=p.mailboxSmtpAddress)&&void 0!==y?y:void 0}}):Object(o.a)({Id:e});var w=Object(u.a)(b.IsScheduledFolder),S=Object(c.a)(d),F={ParentFolderId:Object(a.a)({BaseFolderId:h}),ConversationShape:w,ShapeName:b.ShapeName,Paging:n,ViewFilter:t,SortOrder:S,FocusedViewFilter:Object(s.a)(l),CategoryFilter:null!=O?O:void 0,Traversal:i(t)};return m&&(F.Restriction=m),g&&(F.RefinerRestriction=g),_&&(F.SearchFolderId=Object(o.a)({Id:_})),v({Header:Object(f.b)(),Body:F},j)}t.d(n,"a",(function(){return b}))}}]);
//# sourceMappingURL=owa.ConversationRowsWeb.js.map
self.scriptsLoaded['owa.ConversationRowsWeb.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.ConversationRowsWeb.js'] = (new Date()).getTime();