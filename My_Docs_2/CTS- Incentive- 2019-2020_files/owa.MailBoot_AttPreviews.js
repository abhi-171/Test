self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~AttPreviews.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[481],{1726:function(t,e,n){"use strict";n.d(e,"e",(function(){return s})),n.d(e,"m",(function(){return d})),n.d(e,"i",(function(){return f})),n.d(e,"g",(function(){return h})),n.d(e,"l",(function(){return m})),n.d(e,"k",(function(){return l})),n.d(e,"j",(function(){return v})),n.d(e,"h",(function(){return w})),n.d(e,"f",(function(){return I})),n.d(e,"n",(function(){return A}));var r=n(44),i=n(2063);n.d(e,"o",(function(){return i.a}));var a=n(1825);n.d(e,"b",(function(){return a.a}));var c=n(1913);n.d(e,"d",(function(){return c.a})),n.d(e,"c",(function(){return c.b}));var o=n(1922);n.d(e,"a",(function(){return o.a}));var u=new r.c((function(){return Promise.all([n.e(3),n.e(23),n.e(32),n.e(63),n.e(206),n.e(314)]).then(n.bind(null,3528))})),s=new r.a(u,(function(t){return t.addAndInitializeAttachments})),d=new r.a(u,(function(t){return t.setPreviewImageUrl})),f=new r.a(u,(function(t){return t.refreshDownloadUrl})),h=new r.a(u,(function(t){return t.createAttachmentInfo})),m=new r.a(u,(function(t){return t.setAttachmentInfo})),l=new r.a(u,(function(t){return t.refreshThumbnailImageUrl})),v=new r.a(u,(function(t){return t.refreshPreviewImageUrl})),w=new r.b(u,(function(t){return t.getAttachment})),I=new r.b(u,(function(t){return t.checkPendingAttachmentOperation})),A=new r.b(u,(function(t){return t.shouldShowImageView}))},17328:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(188),a=n(1766),c=Object(i.action)("removeAttachmentPreviewsForRow")((function(t){var e=a.a.rowAttachmentPreviewWellViews,n=e.get(t);if(n){var r=a.a.attachmentViewStates;n.imageViewStateIds.forEach((function(t){r.delete(t)})),n.documentViewStateIds.forEach((function(t){r.delete(t)})),e.delete(t)}}));var o=n(134),u=n(1726),s=n(1760),d=n(1640),f=n(208),h=n(16);var m=Object(i.action)("createAndStoreAttachmentViewState")((function(t,e,n,i,c){return Object(r.__awaiter)(this,void 0,void 0,(function(){var o,d,f,m=this;return Object(r.__generator)(this,(function(l){switch(l.label){case 0:return o=function(t,e){return t+"_"+e}(t,n.AttachmentId.Id),d=a.a.attachmentViewStates.get(o),f=h.observable.object(Object(r.__assign)(Object(r.__assign)({},n.AttachmentId),{mailboxInfo:c})),[4,s.d.import().then((function(t){return Object(r.__awaiter)(m,void 0,void 0,(function(){return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return d=d||t(f,n,!0,!0,!1,!1,e),[4,u.h.import()];case 1:return n=r.sent()(f).model,a.a.attachmentViewStates.set(o,d),[4,u.n.import()];case 2:return r.sent()(n)?i.imageViewStateIds.push(o):i.documentViewStateIds.push(o),[2]}}))}))}))];case 1:return l.sent(),[2]}}))}))}));var l=Object(i.select)({listView:function(){return a.a}})(Object(i.action)("processAttachmentsForConversation")((function(t,e,n){var r,i=n.listView.conversationItems.get(t.ConversationId.Id);if(i){var a=[];if((null===(r=t.AttachmentPreviews)||void 0===r?void 0:r.Previews)&&(a=I(t.AttachmentPreviews.Previews)),a.length>0){var u=function(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=t[n],a=i.Attachment,c=-1;if(a.IsInline)for(var o=0;o<e.length;o++){var u=e[o];if(u.Attachment.IsInline&&u.Attachment.Name==a.Name&&u.ParentItemId.Id!=i.ParentItemId.Id){c=o;break}}-1==c&&e.push(i)}return e}(t.AttachmentPreviews.Previews);w(t.ConversationId.Id,u,e);var s=t.AttachmentPreviews.Previews.length-u.length;s>0&&Object(o.s)("IP_II_DP",[s])}else i.shouldShowAttachmentPreviews=!1,c(t.ConversationId.Id),Object(o.s)("IP_FP")}}))),v=Object(i.action)("processAttachmentPreviewsForItems")((function(t,e,n){var i=t.filter((function(t){return t.AttachmentPreviews})),a=[];i.forEach((function(t){a.push.apply(a,Object(r.__spread)(t.AttachmentPreviews.Previews))}));var o=I(a),u={};o.forEach((function(t){var n=t.ParentItemId.Id;e.indexOf(n)>-1&&(u[n]||(u[n]=[]),u[n].push(t))})),e.forEach((function(t){var e=d.u.items.get(t);e?u[t]?w(t,u[t],n):(e.shouldShowAttachmentPreviews=!1,c(t)):delete u[t]}))})),w=Object(i.action)("processAttachmentsForRow")((function(t,e,n){return Object(r.__awaiter)(this,void 0,void 0,(function(){var i,c=this;return Object(r.__generator)(this,(function(o){switch(o.label){case 0:return i={documentViewStateIds:[],imageViewStateIds:[]},[4,Promise.all(e.map((function(e){return Object(r.__awaiter)(c,void 0,void 0,(function(){return Object(r.__generator)(this,(function(a){switch(a.label){case 0:return e.Attachment.AttachmentId.Id||(e.Attachment.AttachmentId.Id=Object(f.a)()),[4,m(t,Object(r.__assign)(Object(r.__assign)({},e.ParentItemId),{mailboxInfo:n}),e.Attachment,i,n)];case 1:return a.sent(),[2]}}))}))})))];case 1:return o.sent(),a.a.rowAttachmentPreviewWellViews.set(t,i),[2]}}))}))}));function I(t){var e=t.filter(A);if(e.length!==t.length){var n=t.filter((function(t){return!A(t)})).map((function(t){return t.Attachment.AttachmentId?t.Attachment.AttachmentId.Id:"UNDEFINED"})).join(",");Object(o.r)("InvalidAttachmentPreview",{AttachmentIdString:n})}return e}function A(t){return!!t.Attachment.Name}var b=n(8089),O=n(6378);function _(t,e,n){var i=Object(O.a)(Object(r.__assign)(Object(r.__assign)({},n),{ConversationIds:t}));return Object(b.a)(i,e).then((function(t){return t}))}var P=n(1633),g=n(296),j=n(347),p=new Map,E=Object(i.select)({rowIdsToGetPreviewsMap:function(){return p}})(Object(i.action)("AttachmentPreviewsOperations.add")((function(t,e,n,r){var i=r.rowIdsToGetPreviewsMap[null==t?void 0:t.mailboxSmtpAddress];i||(i={conversationsIdsArray:[],itemIdsArray:[]},r.rowIdsToGetPreviewsMap[null==t?void 0:t.mailboxSmtpAddress]=i),i.conversationsIdsArray.some((function(t){return t.Id==e.Id}))||i.conversationsIdsArray.push(e),-1==i.itemIdsArray.indexOf(n)&&i.itemIdsArray.push(n)}))),S=Object(i.select)({rowIdsToGetPreviewsMap:function(){return p}})(Object(i.action)("AttachmentPreviewsOperations.getPreviews")((function(t,e,n){return Object(r.__awaiter)(this,void 0,void 0,(function(){var i,a,c,o,u;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:if(!(i=n.rowIdsToGetPreviewsMap[null==t?void 0:t.mailboxSmtpAddress]))return[2];a=i.conversationsIdsArray,c=i.itemIdsArray,o=Object(g.a)(),delete n.rowIdsToGetPreviewsMap[null==t?void 0:t.mailboxSmtpAddress],r.label=1;case 1:return r.trys.push([1,3,,4]),[4,_(a,Object(j.a)(t),{IncludeInlineAttachments:o})];case 2:return void 0!==(u=r.sent()).Conversations?1==e?v(u.Conversations,c,t):function(t,e){t.forEach((function(t){l(t,e)}))}(u.Conversations,t):C(e,c,a),[3,4];case 3:return r.sent(),C(e,c,a),[3,4];case 4:return[2]}}))}))})));function C(t,e,n){1==t?e.forEach((function(t){var e=d.u.items.get(t);e&&(P.X.rowAttachmentPreviewWellViews.get(t)||(e.shouldShowAttachmentPreviews=!1))})):n.forEach((function(t){var e=t.Id,n=P.X.conversationItems.get(e);n&&(P.X.rowAttachmentPreviewWellViews.get(e)||(n.shouldShowAttachmentPreviews=!1))}))}var T=Object(i.action)("AttachmentPreviewsOperations.getAttachmentsForConversationWell")((function(t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e,n,i,a,c;return Object(r.__generator)(this,(function(o){switch(o.label){case 0:e=[t],n=[],i={},a={},o.label=1;case 1:return o.trys.push([1,3,,4]),[4,_(e,Object(j.a)(t.mailboxInfo),{FullPreviewsPerConversation:300,PreviewsPerConversation:300,MinimumAttachmentSize:0,IncludeInlineAttachments:!1})];case 2:return void 0!==(c=o.sent()).Conversations&&c.Conversations.forEach((function(e){e.ConversationId.Id==t.Id&&e.AttachmentPreviews&&e.AttachmentPreviews.Previews&&I(e.AttachmentPreviews.Previews).forEach((function(e){n.push(e.Attachment),i[e.Attachment.AttachmentId.Id]=Object(r.__assign)(Object(r.__assign)({},e.ParentItemId),{mailboxInfo:t.mailboxInfo}),a[e.Attachment.AttachmentId.Id]=e.ItemReceivedTime}))})),[3,4];case 3:return o.sent(),[3,4];case 4:return[2,[n,i,a]]}}))}))}));n.d(e,"getPreviews",(function(){return S})),n.d(e,"add",(function(){return E})),n.d(e,"getAttachmentsForConversationWell",(function(){return T})),n.d(e,"removeAttachmentPreviewsForRow",(function(){return c}))},1760:function(t,e,n){"use strict";n.d(e,"n",(function(){return o})),n.d(e,"q",(function(){return u})),n.d(e,"r",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"p",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"u",(function(){return m})),n.d(e,"g",(function(){return l})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return w})),n.d(e,"j",(function(){return I})),n.d(e,"i",(function(){return A})),n.d(e,"l",(function(){return b})),n.d(e,"k",(function(){return O})),n.d(e,"c",(function(){return _})),n.d(e,"o",(function(){return P})),n.d(e,"s",(function(){return g})),n.d(e,"b",(function(){return j})),n.d(e,"m",(function(){return p})),n.d(e,"h",(function(){return E})),n.d(e,"t",(function(){return S}));var r=n(44),i=n(1923);n.d(e,"v",(function(){return i.a}));var a=n(1924);n.d(e,"w",(function(){return a.a}));var c=new r.c((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20),n.e(23),n.e(27),n.e(30),n.e(32),n.e(36),n.e(41),n.e(44),n.e(55),n.e(63),n.e(64),n.e(68),n.e(92),n.e(104),n.e(147),n.e(148),n.e(210),n.e(209),n.e(208),n.e(211),n.e(315)]).then(n.bind(null,2981))})),o=new r.a(c,(function(t){return t.initializeAttachments})),u=new r.a(c,(function(t){return t.reinitializeAttachments})),s=new r.a(c,(function(t){return t.setInlineAttachmentStatus})),d=new r.a(c,(function(t){return t.addAttachmentIntoWellBeforeUpload})),f=new r.b(c,(function(t){return t.refreshSharingTipsAttachmentWell})),h=new r.b(c,(function(t){return t.createAttachmentsViaQueueManager})),m=new r.b(c,(function(t){return t.createAttachmentsFromRecentAttachments})),l=new r.a(c,(function(t){return t.deleteAttachmentViaQueueManager})),v=new r.b(c,(function(t){return t.createAttachmentFullViewStateAndStoreBackingModel})),w=new r.b(c,(function(t){return t.createAttachmentFullViewState})),I=new r.b(c,(function(t){return t.getAttachmentWellInitialValue})),A=new r.b(c,(function(t){return t.getAttachmentWellForCompose})),b=new r.b(c,(function(t){return t.getConversationAttachmentWellInitialValue})),O=(new r.b(c,(function(t){return t.getMaxClassicAttachmentsSize})),new r.b(c,(function(t){return t.getAvailableLocalAttachmentSize}))),_=new r.b(c,(function(t){return t.createAttachmentFileFromExistingMailboxAttachment})),P=new r.a(c,(function(t){return t.mergeToConversationAttachmentWell})),g=new r.a(c,(function(t){return t.sortConversationAttachmentWell})),j=new r.a(c,(function(t){return t.convertImageViewAttachmentToInlineAttachment})),p=new r.b(c,(function(t){return t.getLastCloudyAttachmentsSharingIssueForBlockOnSend})),E=new r.b(c,(function(t){return t.getAllValidAttachments})),S=new r.b(c,(function(t){return t.uploadLocalFile}))},1825:function(t,e,n){"use strict";var r=n(16),i=n(3),a={attachments:new r.ObservableMap({})},c=Object(i.createStore)("attachment",a);e.a=c},1913:function(t,e,n){"use strict";function r(t){return(null==t?void 0:t.AttachmentId)&&i(t.AttachmentId.Id)}function i(t){return t&&-1!==t.indexOf("smime-")}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))},1922:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return m})),n.d(e,"a",(function(){return l}));var r="Box",i="Dropbox",a="Facebook",c="GDrive",o="Mailbox",u="MailMessage",s="OneDriveConsumer",d="OneDrivePro",f="WopiBox",h="WopiDropbox",m="WopiEgnyte",l={providers:{BOX:r,DROPBOX:i,FACEBOOK:a,GDRIVE:c,MAILBOX:o,ONE_DRIVE_CONSUMER:s,ONE_DRIVE_PRO:d,RECENT_ATTACHMENTS:"RecentAttachments",WOPI:"Wopi",WOPI_BOX:f,WOPI_EGNYTE:m}}},1923:function(t,e,n){"use strict";var r=n(3);e.a=Object(r.action)("ON_ATTACHMENT_CREATED",(function(t,e,n){return{parentItemId:t,attachmentId:e,attachment:n}}))},1924:function(t,e,n){"use strict";var r=n(3);e.a=Object(r.action)("ON_ATTACHMENT_DELETED",(function(t,e,n){return{parentItemId:t,attachmentId:e,attachment:n}}))},2063:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(3),i=Object(r.action)("REFRESH_SHARING_TIPS_FOR_ATTACHMENT",(function(t){return{attachmentId:t}}))},347:function(t,e,n){"use strict";var r=n(0);function i(t,e){return t?Object(r.__assign)({mailboxInfo:t},e):null!=e?e:void 0}n.d(e,"a",(function(){return i}))},6378:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0);function i(t){return Object(r.__assign)({__type:"GetAttachmentPreviewsRequest:#Exchange"},t)}},8089:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(28),i=n(6378);function a(t,e){return void 0===t||t.__type||(t=Object(i.a)(t)),Object(r.a)("GetAttachmentPreviews",t,e)}}}]);
//# sourceMappingURL=owa.MailBoot~AttPreviews.js.map
self.scriptsLoaded['owa.MailBoot~AttPreviews.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~AttPreviews.js'] = (new Date()).getTime();