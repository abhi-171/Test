self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MarkConversationAsReadWeb.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[843],{16856:function(e,n,t){"use strict";t.r(n),t.d(n,"markConversationAsReadWeb",(function(){return v}));var r=t(0),o=t(2702),i=t(374),s=t(559),a=t(793),c=t(2701),u=t(1691),d=t(3149),v=function(e,n,t,v){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var e,t,v,f,l,_,p;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return e=n.options.actionOptions,t=e.folderId?Object(a.a)({BaseFolderId:Object(s.a)({Id:e.folderId})}):void 0,v=e.conversations.map((function(e){var r;return Object(o.a)({Action:"SetReadState",ConversationId:Object(i.a)({Id:e.id}),IsRead:n.options.isRead,ConversationLastSyncTime:null!==(r=e.messagesAsOf)&&void 0!==r?r:void 0,SuppressReadReceipts:!0,ContextFolderId:t})})),f=Object(c.a)({ConversationActions:v,ReturnMovedItemIds:!1}),[4,Object(d.a)(f,e.mailboxInfo,"markAsReadConversationWeb")];case 1:return l=r.sent(),[2,Object(u.a)(null===(p=null===(_=null==l?void 0:l.Body)||void 0===_?void 0:_.ResponseMessages)||void 0===p?void 0:p.Items).then((function(){return{__typename:"MarkConversationAsReadResult",success:!0}}))]}}))}))}},1691:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(0),o=t(1692),i=t(1693);function s(e){var n,t;if(!e)return Promise.reject(Object(o.a)("500","Server returned a null response!",null));var s=Array.isArray(e)?e:[e];try{for(var a=Object(r.__values)(s),c=a.next();!c.done;c=a.next()){var u=c.value;if(u&&!Object(i.a)(u))return Promise.reject(Object(o.a)(u.ResponseCode,u.StackTrace,u.MessageText))}}catch(e){n={error:e}}finally{try{c&&!c.done&&(t=a.return)&&t.call(a)}finally{if(n)throw n.error}}return Promise.resolve()}},1692:function(e,n,t){"use strict";function r(e,n,t){var r="ResponseCode="+e;n&&(r+=", Stacktrace="+n);var o=new Error(r);return o.responseCode=e,o.fetchErrorType="ServerFailure",t&&(o.diagnosticInfo="MessageText= "+t),o}t.d(n,"a",(function(){return r}))},1693:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r="Success";function o(e){return e&&e.ResponseClass==r}},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"ApplyConversationActionRequest:#Exchange"},e)}},2702:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"ConversationAction:#Exchange"},e)}},2830:function(e,n,t){"use strict";var r=t(28),o=t(0);function i(e,n){var t;return void 0===e||e.__type||(t=e,e=Object(o.__assign)({__type:"ApplyConversationActionJsonRequest:#Exchange"},t)),Object(r.a)("ApplyConversationAction",e,n)}t.d(n,"a",(function(){return i}))},3149:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(0),o=t(347),i=t(2830),s=t(197);function a(e,n,t,a,c){var u;if(void 0===a&&(a=Object(s.b)()),!e||!e.ConversationActions||0===e.ConversationActions.length)throw new Error(t+": ApplyConversationAction requestBody is invalid!");var d=(null===(u=null==(c=c||{})?void 0:c.headers)||void 0===u?void 0:u.set)?new Headers(c.headers):new Headers;d.set("X-OWA-ActionSource","ApplyConversationAction_"+e.ConversationActions[0].Action),c=Object(r.__assign)(Object(r.__assign)({},c),{headers:d});var v=Object(o.a)(n,c);return Object(i.a)({Header:a,Body:e},v)}},347:function(e,n,t){"use strict";var r=t(0);function o(e,n){return e?Object(r.__assign)({mailboxInfo:e},n):null!=n?n:void 0}t.d(n,"a",(function(){return o}))},374:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"ItemId:#Exchange"},e)}},559:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"FolderId:#Exchange"},e)}},793:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0);function o(e){return Object(r.__assign)({__type:"TargetFolderId:#Exchange"},e)}}}]);
//# sourceMappingURL=owa.MarkConversationAsReadWeb.js.map
self.scriptsLoaded['owa.MarkConversationAsReadWeb.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MarkConversationAsReadWeb.js'] = (new Date()).getTime();