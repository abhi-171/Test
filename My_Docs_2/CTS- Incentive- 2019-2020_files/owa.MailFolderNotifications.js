self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailFolderNotifications.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[832],{17230:function(e,n,i){"use strict";i.r(n);var t=i(0),d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"subscription",name:{kind:"Name",value:"subscribeToHierarchyNotifications"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subscribeToHierarchyNotifications"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"EventType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folderId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"parentFolderId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"itemCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"unreadCount"},arguments:[],directives:[]}]}}]}}]},a=i(380),r=i(1920),o=i(2915),l=i(3273),s=i(3636),c=i(559),u=i(2736),m=i(785),v=i(3729),F=i(197),k=i(957);function g(){var e=Object(s.a)({FolderShape:Object(u.a)({BaseShape:"IdOnly",AdditionalProperties:[Object(m.a)({FieldURI:"TotalCount"}),Object(m.a)({FieldURI:"UnreadCount"})]}),Paging:null,ParentFolderIds:[Object(c.a)({Id:Object(k.a)("msgfolderroot")})],ReturnParentFolder:!0,ShapeName:null,Traversal:"Deep"});return Object(v.a)({Header:Object(F.b)(),Body:e}).then((function(e){var n,i,t;return null===(t=null===(i=null===(n=null==e?void 0:e.Body)||void 0===n?void 0:n.ResponseMessages)||void 0===i?void 0:i.Items)||void 0===t?void 0:t[0]}))}var f=i(34);function N(e){switch(e.EventType){case"Reload":case"QueryResultChanged":g().then((function(e){"Success"==(null==e?void 0:e.ResponseClass)?e.RootFolder.Folders.forEach((function(e){Object(l.a)(e.UnreadCount,e.TotalCount,e.FolderId.Id,!1)})):f.g.warn(b+"ResponseNotSuccess")})).catch((function(e){f.g.warn(b+":"+e.message)}));break;case"RowModified":Object(o.b)(e.unreadCount,e.itemCount,e.folderId,e.displayName,e.parentFolderId),r.h.import().then((function(n){n(e)}));break;case"RowAdded":Object(o.a)(e.folderId,e.parentFolderId,e.displayName,e.unreadCount,e.itemCount),r.h.import().then((function(n){n(e)}));break;default:return}}function h(){return Object(t.__awaiter)(this,void 0,void 0,(function(){var e;return Object(t.__generator)(this,(function(n){switch(n.label){case 0:return[4,Object(a.a)()];case 1:return e=n.sent(),e.subscribe({query:d}).subscribe({next:function(e){return N(e.data.subscribeToHierarchyNotifications)},error:function(e){f.g.warn("Hierarchy notification error "+e)}}),[2]}}))}))}var b="UpdateFolderCountsAction:";var p={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FolderUpdateNotification"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MailFolder"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"UnreadCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"TotalCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"DisplayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ParentFolderId"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ChangeKey"},arguments:[],directives:[]}]}}]}}]},I={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FolderChildFolderIds"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MailFolder"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"childFolderIds"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasChildren"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"FolderId"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ChangeKey"},arguments:[],directives:[]}]}}]}}]},_={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FolderParentFolder"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MailFolder"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ParentFolderId"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Id"},arguments:[],directives:[]}]}}]}}]},C={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewFolder"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MailFolder"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"FolderId"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ChangeKey"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"ParentFolderId"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ChangeKey"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"DisplayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"DistinguishedFolderId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"FolderClass"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"UnreadCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"TotalCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasChildren"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"childFolderIds"},arguments:[],directives:[]}]}}]},y=i(44);function O(e,n){var i={__typename:"MailFolder",id:e};return n.cache.identify(i)}function j(e,n){return Object(t.__awaiter)(this,void 0,void 0,(function(){var i,d,r;return Object(t.__generator)(this,(function(o){switch(o.label){case 0:return[4,Object(a.a)()];case 1:return i=o.sent(),[4,S(n,e)];case 2:return o.sent(),(d=i.readFragment({id:O(e,i),fragment:I}))?((r=d.childFolderIds).includes(n)||i.writeFragment({id:O(e,i),fragment:I,data:{childFolderIds:Object(t.__spread)(r,[n]),hasChildren:!0,FolderId:d.FolderId}}),[2,d.FolderId]):[2,null]}}))}))}function S(e,n){return Object(t.__awaiter)(this,void 0,void 0,(function(){var i,d,r,o,l;return Object(t.__generator)(this,(function(s){switch(s.label){case 0:return[4,Object(a.a)()];case 1:return i=s.sent(),(d=i.readFragment({id:O(e,i),fragment:_}))?(r=d.ParentFolderId.Id)==n?[2]:(o=i.readFragment({id:O(r,i),fragment:I}))?((l=Object(t.__spread)(o.childFolderIds)).splice(l.indexOf(e),1),i.writeFragment({id:O(r,i),fragment:I,data:{childFolderIds:Object(t.__spread)(l),hasChildren:l.length>0,FolderId:o.FolderId}}),[2]):[2,null]:[2]}}))}))}var w=i(6),D=Object(y.e)(o.a,"onNewFolderNotificationClone",(function(e){return Object(t.__awaiter)(void 0,void 0,void 0,(function(){var n,i,d,r,o,l,s;return Object(t.__generator)(this,(function(c){switch(c.label){case 0:return Object(w.h)("gqlfolders")?(n=e.displayName,i=e.parentFolderId,d=e.folderId,r=e.unreadCount,o=e.totalCount,[4,j(i,d)]):[2];case 1:return(l=c.sent())?[4,Object(a.a)()]:[2];case 2:return(s=c.sent()).writeFragment({id:O(d,s),fragment:C,data:{id:d,UnreadCount:r,TotalCount:o,DisplayName:n,FolderId:{Id:d,ChangeKey:null},ParentFolderId:Object(t.__assign)({},l),DistinguishedFolderId:null,childFolderIds:[],hasChildren:!1,type:"Folder:#Exchange",FolderClass:"IPF.Note",__typename:"MailFolder"}}),[2]}}))}))})),T=Object(y.e)(o.b,"onUpdateFolderNotificationClone",(function(e){return Object(t.__awaiter)(void 0,void 0,void 0,(function(){var n,i,d,r,o,l,s,c;return Object(t.__generator)(this,(function(t){switch(t.label){case 0:return Object(w.h)("gqlfolders")?(n=e.folderId,i=e.unreadCount,d=e.totalCount,r=e.displayName,o=e.parentFolderId,[4,Object(a.a)()]):[2];case 1:return l=t.sent(),(s=l.readFragment({id:O(n,l),fragment:p}))?[4,j(o,n)]:[2];case 2:return(c=t.sent())?(s&&l.writeFragment({id:O(n,l),fragment:p,data:{UnreadCount:i,TotalCount:d,DisplayName:r,ParentFolderId:c}}),[2]):[2]}}))}))}));i.d(n,"subscribeToHierarchyNotification",(function(){return h})),i.d(n,"onNewFolderNotificationOrchestrator",(function(){return D})),i.d(n,"onUpdateFolderNotificationOrchestrator",(function(){return T}))},2736:function(e,n,i){"use strict";i.d(n,"a",(function(){return d}));var t=i(0);function d(e){return Object(t.__assign)({__type:"FolderResponseShape:#Exchange"},e)}},3636:function(e,n,i){"use strict";i.d(n,"a",(function(){return d}));var t=i(0);function d(e){return Object(t.__assign)({__type:"FindFolderRequest:#Exchange"},e)}},3729:function(e,n,i){"use strict";var t=i(28),d=i(0);function a(e,n){var i;return void 0===e||e.__type||(i=e,e=Object(d.__assign)({__type:"FindFolderJsonRequest:#Exchange"},i)),Object(t.a)("FindFolder",e,n)}i.d(n,"a",(function(){return a}))}}]);
//# sourceMappingURL=owa.MailFolderNotifications.js.map
self.scriptsLoaded['owa.MailFolderNotifications.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailFolderNotifications.js'] = (new Date()).getTime();