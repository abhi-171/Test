self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~FileSearchBox.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[563],{16062:function(e){e.exports=JSON.parse('{"a":"$ha","b":"aia"}')},16063:function(e,t,n){var r=n(16064),i=n(107);"string"==typeof r&&(r=[[e.i,r]]);for(var a=0;a<r.length;a++)i.loadStyles(r[a][1],!1);r.locals&&(e.exports=r.locals)},16064:function(e,t,n){(t=e.exports=n(106)(!1)).push([e.i,'._1aXoToftSNDvkdBXUxt0sa{height:48px;width:520px;overflow:hidden;display:table}html[dir] ._1aXoToftSNDvkdBXUxt0sa{border-top:1px solid "[theme:neutralLight, default:#edebe9]"}._3dExMc5vzve9C8GW2MP0As{width:520px}.Bk_rv9fpXnTV9G2rrdDrs{font-size:12px;font-weight:400;width:calc(100% - 46px);display:table-cell;vertical-align:middle}html[dir=ltr] .Bk_rv9fpXnTV9G2rrdDrs{text-align:left;padding-left:12px}html[dir=rtl] .Bk_rv9fpXnTV9G2rrdDrs{text-align:right;padding-right:12px}.Bk_rv9fpXnTV9G2rrdDrs._3LblC2GUn6QRNDQgnlvj56{width:100%}html[dir] .Bk_rv9fpXnTV9G2rrdDrs._3LblC2GUn6QRNDQgnlvj56{text-align:center;padding:0}',""]),t.locals={container:"_1aXoToftSNDvkdBXUxt0sa",callout:"_3dExMc5vzve9C8GW2MP0As",textContainer:"Bk_rv9fpXnTV9G2rrdDrs",centered:"_3LblC2GUn6QRNDQgnlvj56"}},1641:function(e,t,n){"use strict";function r(e){if(!e)return null;var t=e.lastIndexOf(".");return t>0?e.substr(t).toLowerCase():null}function i(e){var t=r(e);return t?t.replace(".",""):null}function a(e){var t;return(null===(t=i(e))||void 0===t?void 0:t.substring(0,4))||""}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a}))},1644:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"j",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"l",(function(){return d})),n.d(t,"k",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return v}));var r=["journal","outbox","syncissues"],i="archivemsgfolderroot",a="msgfolderroot",o="archivedeleteditems",c="deleteditems",u="archiverecoverableitemsdeletions",s="recoverableitemsdeletions",d="msgfolderroot",l="sharedFolderTree",f="primaryFolderTree",b="archiveFolderTree",v="favorites"},1647:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e[e.Base64InlineImage=0]="Base64InlineImage",e[e.Cloud=1]="Cloud",e[e.Local=2]="Local",e[e.MailItem=3]="MailItem",e[e.Uri=4]="Uri",e[e.AttachmentItem=5]="AttachmentItem",e[e.CloudSuggestion=6]="CloudSuggestion",e[e.AttachmentItemSuggestion=7]="AttachmentItemSuggestion",e[e.Inline=8]="Inline",e[e.Smime=9]="Smime",e[e.FilesHub=10]="FilesHub",e[e.GroupFilesHub=11]="GroupFilesHub",e[e.MailSearchFileSuggestion=12]="MailSearchFileSuggestion",e[e.Unknown=13]="Unknown",e[e.ContextualSuggestion=14]="ContextualSuggestion",e[e.ConsumerGroupFilesHub=15]="ConsumerGroupFilesHub",e[e.SmartDoc=16]="SmartDoc",e[e.ExpirableBase64InlineImage=17]="ExpirableBase64InlineImage"}(r||(r={}))},1659:function(e,t,n){"use strict";var r={alert:"alert",alertdialog:"alertdialog",application:"application",article:"article",banner:"banner",button:"button",cell:"cell",checkbox:"checkbox",columnheader:"columnheader",combobox:"combobox",complementary:"complementary",contentinfo:"contentinfo",definition:"definition",dialog:"dialog",directory:"directory",document:"document",feed:"feed",figure:"figure",form:"form",grid:"grid",gridcell:"gridcell",group:"group",heading:"heading",img:"img",link:"link",list:"list",listbox:"listbox",listitem:"listitem",log:"log",main:"main",marquee:"marquee",math:"math",menu:"menu",menubar:"menubar",menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio",navigation:"navigation",note:"note",option:"option",presentation:"presentation",progressbar:"progressbar",radio:"radio",radiogroup:"radiogroup",region:"region",row:"row",rowgroup:"rowgroup",rowheader:"rowheader",scrollbar:"scrollbar",search:"search",searchbox:"searchbox",separator:"separator",slider:"slider",spinbutton:"spinbutton",status:"status",switch:"switch",tab:"tab",table:"table",tablist:"tablist",tabpanel:"tabpanel",term:"term",textbox:"textbox",timer:"timer",toolbar:"toolbar",tooltip:"tooltip",tree:"tree",treegrid:"treegrid",treeitem:"treeitem"},i=0;function a(e){return void 0===e&&(e="id"),""+e+i++}function o(e){return Array.isArray(e)?e.join(" "):e}function c(e){if(!e)return null;for(var t={},n=Object.keys(e),r=0;r<n.length;r++){switch(n[r]){case"role":t.role=e.role;break;case"id":t.id=e.id;break;case"activeDescendant":t["aria-activedescendant"]=e.activeDescendant;break;case"atomic":t["aria-atomic"]=e.atomic;break;case"autocomplete":t["aria-autocomplete"]=e.autocomplete;break;case"busy":t["aria-busy"]=e.busy;break;case"checked":t["aria-checked"]=e.checked;break;case"controls":t["aria-controls"]=o(e.controls);break;case"describedBy":t["aria-describedby"]=o(e.describedBy);break;case"disabled":t["aria-disabled"]=e.disabled;break;case"dropEffect":t["aria-dropeffect"]=o(e.dropEffect);break;case"expanded":t["aria-expanded"]=e.expanded;break;case"flowTo":t["aria-flowto"]=o(e.flowTo);break;case"grabbed":t["aria-grabbed"]=e.grabbed;break;case"hasPopup":t["aria-haspopup"]=e.hasPopup;break;case"hidden":t["aria-hidden"]=e.hidden;break;case"invalid":t["aria-invalid"]=e.invalid;break;case"label":t["aria-label"]=e.label;break;case"labelledBy":t["aria-labelledby"]=o(e.labelledBy);break;case"level":t["aria-level"]=e.level;break;case"live":t["aria-live"]=e.live;break;case"multiline":t["aria-multiline"]=e.multiline;break;case"multiselectable":t["aria-multiselectable"]=e.multiselectable;break;case"orientation":t["aria-orientation"]=e.orientation;break;case"owns":t["aria-owns"]=o(e.owns);break;case"positionInSet":t["aria-posinset"]=e.positionInSet;break;case"pressed":t["aria-pressed"]=e.pressed;break;case"readonly":t["aria-readonly"]=e.readonly;break;case"relevant":t["aria-relevant"]=o(e.relevant);break;case"required":t["aria-required"]=e.required;break;case"selected":t["aria-selected"]=e.selected;break;case"setSize":t["aria-setsize"]=e.setSize;break;case"sort":t["aria-sort"]=e.sort;break;case"valueMax":t["aria-valuemax"]=e.valueMax;break;case"valueMin":t["aria-valuemin"]=e.valueMin;break;case"valueNow":t["aria-valuenow"]=e.valueNow;break;case"valueText":t["aria-valuetext"]=e.valueText}}return t}n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c}))},1662:function(e,t,n){"use strict";var r=n(1641),i=n(1839),a=n(7);function o(e){var t;return e>=1073741824?(e/=1073741824,t=Object(a.b)(i.b)):e>=1048576?(e/=1048576,t=Object(a.b)(i.d)):e>=1024?(e/=1024,t=Object(a.b)(i.c)):t=Object(a.b)(i.a),Object(a.c)(t,Math.round(e))}var c,u=n(1709),s=n(40),d=[".pdf",".doc",".docx",".odt",".rtf",".ppt",".pptx",".pptm",".potx",".potm",".pot",".ppxx",".pps",".odp"];function l(e){if(!Object(s.i)("doc-attachment-documentThumbnail"))return!1;var t=Object(r.a)(e);return!!t&&d.indexOf(t.toLowerCase())>=0}function f(e){switch(e){case".doc":case".docm":case".docx":case".dot":case".dotm":case".dotx":case".odt":case".rtf":return c.Word;case".csv":case".ods":case".xls":case".xlsb":case".xlsm":case".xlsx":return c.Excel;case".odp":case".pot":case".potm":case".potx":case".pps":case".ppsm":case".ppsx":case".ppt":case".pptm":case".pptx":return c.PowerPoint;default:return null}}!function(e){e[e.Word=0]="Word",e[e.Excel=1]="Excel",e[e.PowerPoint=2]="PowerPoint"}(c||(c={}));var b=n(1676);n.d(t,"b",(function(){return r.a})),n.d(t,"c",(function(){return r.b})),n.d(t,"d",(function(){return r.c})),n.d(t,"i",(function(){return o})),n.d(t,"g",(function(){return u.a})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return b.b})),n.d(t,"a",(function(){return c}))},1673:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(48);function i(e){if(!e)throw new Error("Input parameter to folderIdToName must not be null.");return r.a.defaultFolderIdToNameMap.get(e)||"none"}},1674:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(331);function i(e){var t;return null===(t=Object(r.a)(e))||void 0===t?void 0:t.AttachmentPolicy}},1676:function(e,t,n){"use strict";function r(e){return t=e||"",(n=a.exec(t))&&n.length>1&&i[n[1].toLowerCase()];var t,n}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i={"image/bmp":".bmp","image/x-ms-bmp":".bmp","image/gif":".gif","image/jpeg":".jpeg","image/png":".png","image/vnd.adobe.photoshop":".psd","image/tiff":".tiff"},a=/^\s*([^;\s]*)(?:;|\s|$)/;function o(e){var t="";return Object.entries(i).forEach((function(n){n[1]===e&&(t=n[0])})),t}},1709:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(1641),i=n(1676),a=n(76),o=[".bmp",".gif",".jpe",".jpeg",".jpg",".jfif",".dib",".png",".psd"],c=[".tiff",".tif"];function u(e,t,n){return void 0===n&&(n=!0),s(Object(r.a)(e)||Object(i.a)(t),n)}function s(e,t){return void 0===t&&(t=!0),!!e&&(o.indexOf(e.toLowerCase())>=0||t&&c.indexOf(e.toLowerCase())>=0&&(Object(a.e)()||Object(a.d)()||Object(a.h)()||Object(a.g)()&&!Object(a.l)()))}},1715:function(e,t,n){"use strict";var r=n(1647),i=n(1662);function a(e){return e.map((function(e){return{fileType:r.a.Uri,name:e.name,type:Object(i.b)(e.url)||"",size:0,uri:e.url}}))}var o=n(34);function c(e,t,n){if(e.length!=t.length)return o.d("The sizes of subjects and latestItemIds are different"),null;for(var i=[],a=0;a<e.length;a++){var c={fileType:r.a.MailItem,name:e[a],size:(null==n?void 0:n[a])||0,itemId:t[a]};i.push(c)}return i}function u(e,t,n){var i=[],a={fileType:r.a.MailItem,name:e,size:n||0,mimeContent:t};return i.push(a),i}function s(e){if(!e)return null;for(var t=[],n=0;n<e.length;n++){var i=e[n],a={fileType:r.a.Local,name:i.name,size:i.size,type:i.type,fileObject:i};t.push(a)}return t}function d(e){if(!e)return null;for(var t=[],n=0;n<e.length;n++){var r=e[n],i={fileType:r.fileType,name:r.name,size:r.size,type:r.type,dataUri:r.dataUri};t.push(i)}return t}function l(e){var t,n;return null===e?null:{fileType:r.a.Cloud,name:e.Name,size:e.Size,providerId:e.AttachmentProviderId,providerType:e.ProviderType,location:e.Location,providerEndpointUrl:e.ProviderEndpointUrl,isFolder:1===e.Type,fileId:e.Id,fileParentId:e.ParentId,thumbnailUrl:(null===(t=e.Thumbnail)||void 0===t?void 0:t.Url)||"",previewUrl:(null===(n=e.Preview)||void 0===n?void 0:n.Url)||"",type:e.MimeType}}function f(e){return null===e?null:{attachmentItemId:e.Id,name:e.Name,size:e.Size,fileType:r.a.AttachmentItem,type:"ItemIdAttachment:#Exchange"}}var b={BOX:"Box",DROPBOX:"Dropbox",FACEBOOK:"Facebook",GDRIVE:"GDrive",MAILBOX:"Mailbox",ONE_DRIVE_CONSUMER:"OneDriveConsumer",ONE_DRIVE_PRO:"OneDrivePro",RECENT_ATTACHMENTS:"RecentAttachments",WOPI:"Wopi",WOPI_BOX:"WopiBox",WOPI_EGNYTE:"WopiEgnyte"};function v(e){switch(e?e.toLowerCase():null){case b.ONE_DRIVE_PRO.toLowerCase():return 0;case b.GDRIVE.toLowerCase():return 5;case b.ONE_DRIVE_CONSUMER.toLowerCase():return 1;case b.DROPBOX.toLowerCase():return 2;case b.BOX.toLowerCase():return 3;case b.WOPI_BOX.toLowerCase():return 7;case b.WOPI_EGNYTE.toLowerCase():return 8;case b.MAILBOX.toLowerCase():return 4;case b.FACEBOOK.toLowerCase():return 6;default:return null}}n.d(t,"i",(function(){return a})),n.d(t,"h",(function(){return c})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return r.a}))},17166:function(e,t,n){"use strict";n.r(t);var r=n(1652),i=n(3),a=n(5424);function o(e){return e===r.e.FileSuggestions}Object(i.mutator)(r.W,(function(e){if(o(e.scenarioId)){var t=e.suggestion;Object(a.a)().suggestion=t}})),Object(i.mutator)(r.M,(function(e){o(e.scenarioId)&&(Object(a.a)().suggestion=null)}));var c=n(0),u=(Object(i.orchestrator)(r.W,(function(e){return Object(c.__awaiter)(void 0,void 0,void 0,(function(){var t;return Object(c.__generator)(this,(function(n){switch(n.label){case 0:return o(t=e.scenarioId)?(Object(r.h)(t),[4,r.B.import()]):[2];case 1:return n.sent()(!1,t),[2]}}))}))})),n(134)),s=n(208);function d(e){return Object(r.o)(e).searchTextForSuggestion}var l=n(2061),f=n(1750),b=n(6526),v=n(1726),p=n(1743);function h(e){return{kind:f.b.File,AttachmentType:m(e),DateTimeCreated:e.DateCreated+".000Z",DateTimeLastAccessed:e.DateAccessed,FileName:e.FileName,FileExtension:e.FileExtension,FileUrl:e.AccessUrl,ReferenceId:e.ReferenceId,FileAuthor:e.Author,FileType:e.FileType,HighlightedDisplayText:e.Text}}function m(e){return Object(b.a)({__type:p.e,Name:e.FileName,AttachmentIsFolder:!1,IsInline:!1,ProviderType:v.a.providers.ONE_DRIVE_PRO,AttachLongPathName:e.AccessUrl})}var g=n(178),O=n(34),j=n(5425);function I(e,t,n,r,i){return Object(c.__awaiter)(this,void 0,void 0,(function(){var o,u;return Object(c.__generator)(this,(function(c){return o=function(e){return{Query:{QueryString:e},EntityType:j.b,Size:Object(a.a)().maxEntries,From:"0"}}(e),u=function(e,t,n,r){return{EntityRequests:[e],LogicalId:n,Cvid:t||Object(s.a)(),Scenario:{Name:r}}}(o,t,i,r),[2,Object(g.d)(j.e+(d=r,l={scenario:d},Object.keys(l).map((function(e){return e+"="+l[e]})).join("&")),u,void 0,!1,n,!0,!0,!1).then((function(e){return e})).catch((function(e){return O.g.info(e),null}))];var d,l}))}))}function w(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t,n,i,a,o,u,s,b;return Object(c.__generator)(this,(function(v){switch(v.label){case 0:return t=Object(r.o)(e),n=new Date,i={"client-session-id":t.searchSessionGuid,"x-client-localtime":Object(f.p)(),"client-request-id":t.latestQFRequestId,"X-Client-Flights":Object(r.t)(e)},a=f.a.FileSuggestions,[4,I(d(e),t.nextSearchQueryId,i,a,t.latestQFRequestId)];case 1:if(o=v.sent(),u={Suggestions:[],TraceId:t.latestQFRequestId,IsComplete:!0,RequestStart:n},!o||Array.isArray(o))return[2,u];try{return Object(r.R)(o.Instrumentation.TraceId,e,!0),s=o.Groups?function(e){var t,n;if(!e||!e.Groups)throw new Error('Substrate suggestions response "Groups" should not be null.');var r=[];try{for(var i=Object(c.__values)(e.Groups),a=i.next();!a.done;a=i.next()){var o=a.value;switch(o.Type){case"File":var u=o.Suggestions.map(h);r.push.apply(r,Object(c.__spread)(u))}}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{Suggestions:r,IsComplete:!0,TraceId:e.Instrumentation.TraceId}}(o):{Suggestions:[],TraceId:o.Instrumentation.TraceId,IsComplete:!0,RequestStart:n},!(b=t.displayedQFRequestTime)||n.getTime()>b.getTime()?(s.RequestStart=n,[2,s]):(l.i.importAndExecute(s.TraceId,a),[2,t.currentSuggestions||u])}catch(e){return[2,u]}return[2]}}))}))}function S(e,t){return Object(c.__awaiter)(this,void 0,void 0,(function(){var n;return Object(c.__generator)(this,(function(r){switch(r.label){case 0:return[4,w(e)];case 1:return n=r.sent(),t!==d(e)?[2,n]:[2,{Suggestions:n.Suggestions,TraceId:n.TraceId,IsComplete:!0,RequestStart:n.RequestStart}]}}))}))}Object(i.orchestrator)(r.s,(function(e){return Object(c.__awaiter)(void 0,void 0,void 0,(function(){var t,n,i,a,l;return Object(c.__generator)(this,(function(f){switch(f.label){case 0:return o(t=e.scenarioId)?(n=d(t),i=""===n,Object(u.r)("InsertLinkFromSearchSuggestionSelected",{MRU:i}),a=void 0,Object(r.u)()?(a=Object(s.a)(),[4,r.C.import()]):[3,2]):[2];case 1:f.sent()(a,t),f.label=2;case 2:return l={currentQfRequestId:a,queryString:n,scenarioId:t},[2,new Promise((function(e){setTimeout((function(){return Object(c.__awaiter)(void 0,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){switch(t.label){case 0:return[4,x(l)];case 1:return t.sent(),e(),[2]}}))}))}),j.a)}))]}}))}))}));function x(e){var t=e.currentQfRequestId,n=e.queryString,i=e.scenarioId;return Object(c.__awaiter)(this,void 0,void 0,(function(){var e,a,o;return Object(c.__generator)(this,(function(c){switch(c.label){case 0:return[4,_({queryString:n,scenarioId:i,currentQfRequestId:t})];case 1:return c.sent()?[4,S(i,n)]:[2];case 2:return e=c.sent(),a=e.Suggestions,(o=Object(r.o)(i)).currentSuggestions&&o.currentSuggestions.TraceId===e.TraceId||(a.length>0&&e.TraceId&&Object(r.Q)(e.TraceId,i),Object(r.O)({Suggestions:a,IsComplete:!0,TraceId:e.TraceId,RequestStart:e.RequestStart},i,t)),Object(r.u)()?[4,r.F.import()]:[3,4];case 3:c.sent()(!0,i),c.label=4;case 4:return[2]}}))}))}function _(e){var t=e.queryString,n=e.currentQfRequestId,i=e.scenarioId;return Object(c.__awaiter)(this,void 0,void 0,(function(){var e;return Object(c.__generator)(this,(function(a){switch(a.label){case 0:return[4,r.z.import()];case 1:return e=a.sent(),[2,t===d(i)&&(e(n,i)||null===n)]}}))}))}Object(i.orchestrator)(r.l,(function(e){return Object(c.__awaiter)(void 0,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){switch(t.label){case 0:return o(e.scenarioId)?[4,r.w.import()]:[2];case 1:return t.sent()(r.e.FileSuggestions),[2]}}))}))}));var T=Object(i.mutatorAction)("SET_MAX_ENTRIES",(function(e){Object(a.a)().maxEntries=e})),y=(Object(i.orchestrator)(r.U,(function(e){return Object(c.__awaiter)(void 0,void 0,void 0,(function(){var t;return Object(c.__generator)(this,(function(n){switch(n.label){case 0:return o(t=e.scenarioId)?(Object(u.r)("InsertLinkFromSearchStartSearch"),[4,r.B.import()]):[2];case 1:return n.sent()(!0,t),T(j.c),Object(r.s)(t),[2]}}))}))})),n(44)),E=Object(y.e)(r.N,"CLONE_SEARCH_SESSION_STARTED2",(function(e){return Object(c.__awaiter)(void 0,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){return o(e.scenarioId)?(T(j.d),Object(r.s)(r.e.FileSuggestions),[2]):[2]}))}))})),F=n(32),P=n(749),A=n(7),k=n(1),C=n(16062),R=n(16063),D=n(402).bind(R),N=Object(F.a)((function(){var e=Object(r.u)(),t=Object(r.o)(r.e.FileSuggestions).isSuggestionsDropdownVisible,n=Object(r.o)(r.e.FileSuggestions).currentSuggestions;return k.createElement(k.Fragment,null,k.createElement(r.c,{isUsing3S:e,scenarioId:r.e.FileSuggestions,searchPlaceHolderText:Object(A.b)(C.a),customCollapsedMaxWidth:Object(a.a)().searchBoxWidth}),t&&0===(null==n?void 0:n.Suggestions.length)&&k.createElement(P.a,{className:R.callout,gapSpace:1,isBeakVisible:!1,target:"#"+Object(r.p)(r.e.FileSuggestions)},k.createElement("div",{className:R.container},k.createElement("div",{className:D(R.textContainer,R.centered)},Object(A.b)(C.b)))))})),M=n(1715),B=n(1782);function L(e){var t=e.FileUrl,n=e.FileName,r=function(e){for(var t=0;t<e.length;t++)if(0==e[t].type)return e[t].model.Id;return O.g.warn("createCloudFileFromAttachmentData: Could not get OneDrive Pro provider ID. Attachment will not upload."),""}(Object(B.h)());return{fileType:M.a.Cloud,name:n,size:0,providerId:r,providerType:0,location:t,providerEndpointUrl:"",isFolder:!1,fileId:"",fileParentId:"",thumbnailUrl:"",previewUrl:"",type:""}}n.d(t,"searchSessionStartedOrchestrator",(function(){return E})),n.d(t,"FileSearchBox",(function(){return N})),n.d(t,"createCloudFileFromFileSuggestion",(function(){return L}))},1718:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(2013),i=n(1911);function a(e){return Object(i.b)().scenarioStores.get(Object(r.a)(e))||Object(i.a)()}},1726:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"m",(function(){return d})),n.d(t,"i",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"l",(function(){return b})),n.d(t,"k",(function(){return v})),n.d(t,"j",(function(){return p})),n.d(t,"h",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"n",(function(){return g}));var r=n(44),i=n(2063);n.d(t,"o",(function(){return i.a}));var a=n(1825);n.d(t,"b",(function(){return a.a}));var o=n(1913);n.d(t,"d",(function(){return o.a})),n.d(t,"c",(function(){return o.b}));var c=n(1922);n.d(t,"a",(function(){return c.a}));var u=new r.c((function(){return Promise.all([n.e(3),n.e(23),n.e(32),n.e(63),n.e(206),n.e(314)]).then(n.bind(null,3528))})),s=new r.a(u,(function(e){return e.addAndInitializeAttachments})),d=new r.a(u,(function(e){return e.setPreviewImageUrl})),l=new r.a(u,(function(e){return e.refreshDownloadUrl})),f=new r.a(u,(function(e){return e.createAttachmentInfo})),b=new r.a(u,(function(e){return e.setAttachmentInfo})),v=new r.a(u,(function(e){return e.refreshThumbnailImageUrl})),p=new r.a(u,(function(e){return e.refreshPreviewImageUrl})),h=new r.b(u,(function(e){return e.getAttachment})),m=new r.b(u,(function(e){return e.checkPendingAttachmentOperation})),g=new r.b(u,(function(e){return e.shouldShowImageView}))},1737:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(25),i=n(85);function a(e){return!!(e&Object(r.a)().ViewStateConfiguration.ListViewBitFlags)}function o(e,t){a(t)!==e&&Object(i.y)((function(n){e?n.ViewStateConfiguration.ListViewBitFlags|=t:n.ViewStateConfiguration.ListViewBitFlags&=~t}))}},1743:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return c}));var r="FileAttachment:#Exchange",i="ItemAttachment:#Exchange",a="ItemIdAttachment:#Exchange",o="ReferenceAttachment:#Exchange",c="LinkAttachment:#Exchange"},1769:function(e,t,n){"use strict";var r=n(3),i=n(16),a=n(1854),o={providers:new i.ObservableMap,loadState:a.a.NotLoaded,removalPending:new i.ObservableMap},c=Object(r.createStore)("fileProviderStore",o);t.a=c},1770:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(3),i=Object(r.action)("FILE_PROVIDER_ADDED",(function(e){return{providerViewState:e}})),a=Object(r.action)("FILE_PROVIDER_REMOVED",(function(e){return{providerType:e}})),o=Object(r.action)("PROVIDERS_LOADED",(function(e){return{providers:e}}))},1782:function(e,t,n){"use strict";n.d(t,"l",(function(){return b})),n.d(t,"n",(function(){return v})),n.d(t,"k",(function(){return p})),n.d(t,"m",(function(){return h}));var r=n(44),i=n(1988);n.d(t,"b",(function(){return i.a}));var a=n(1941);n.d(t,"i",(function(){return a.a}));n(1769);var o=n(1770);n.d(t,"d",(function(){return o.a})),n.d(t,"e",(function(){return o.b})),n.d(t,"o",(function(){return o.c}));var c=n(1942);n.d(t,"a",(function(){return c.b}));var u=n(1833);n.d(t,"g",(function(){return u.a})),n.d(t,"h",(function(){return u.b}));var s=n(1935);n.d(t,"j",(function(){return s.a}));var d=n(1854);n.d(t,"c",(function(){return d.a}));var l=n(1928);n.d(t,"f",(function(){return l.b}));var f=new r.c((function(){return Promise.all([n.e(3),n.e(562)]).then(n.bind(null,3242))})),b=new r.b(f,(function(e){return e.loadProviders})),v=new r.b(f,(function(e){return e.removeFileProvider})),p=new r.b(f,(function(e){return e.addFileProvider})),h=new r.b(f,(function(e){return e.removeAndAddFileProvider}))},1825:function(e,t,n){"use strict";var r=n(16),i=n(3),a={attachments:new r.ObservableMap({})},o=Object(i.createStore)("attachment",a);t.a=o},1833:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(0),i=n(1769),a=function(){return Object(r.__spread)(Object(i.a)().providers.values())},o=function(e){return Object(i.a)().providers.get(e)||null}},1839:function(e){e.exports=JSON.parse('{"b":"Hca","d":"Ica","c":"Jca","a":"Kca"}')},1854:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e[e.Loaded=0]="Loaded",e[e.Loading=1]="Loading",e[e.NotLoaded=2]="NotLoaded",e[e.Throttled=3]="Throttled"}(r||(r={}))},1863:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e[e.Mail=1]="Mail",e[e.Calendar=2]="Calendar",e[e.FilesHub=3]="FilesHub",e[e.FilesPicker=4]="FilesPicker",e[e.Spaces=5]="Spaces",e[e.FileSuggestions=6]="FileSuggestions"}(r||(r={})),t.b=r},1910:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(3),i=n(16),a=Object(r.createStore)("folderStore",{folderTable:new i.ObservableMap,mailboxFolderTreeData:new i.ObservableMap}),o=a();t.a=a},1911:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(16),i=n(3),a=function(){return{alteredQuery:"",alterationProviderId:null,answerPlaceholderId:null,currentSearchQueryId:null,currentSuggestions:null,displayedQFRequestTime:null,flaggedTokens:[],isAnswerRendered:!1,isLastKeyPressedDeletion:!1,isSuggestionsCalloutClickable:!1,isSuggestionsDropdownVisible:!1,isUsing3S:null,latestQFRequestId:null,latestRenderedQFTraceId:null,latestQFTraceId:null,latestTraceId:null,nextSearchQueryId:null,recourseQuery:"",searchBoxHasFocus:!1,searchBoxWidth:null,searchSessionGuid:null,searchText:"",searchTextForSuggestion:"",selectedPillIndex:-1,selectedSuggestionIndex:-1,showRefiners:!1,showSearchBoxInCompactMode:!1,suggestedSearchTerm:"",suggestedSearchTermReferenceId:"",suggestionPillIds:[],suggestionPills:new r.ObservableMap,queryAlterationType:null,queryActionSource:null,queryAlterationLogicalId:null,traceIdToLogicalIdMap:new r.ObservableMap,tableViewId:null,isScopePickerVisible:!1}},o={scenarioStores:new r.ObservableMap},c=Object(i.createStore)("commonSearchStore",o);t.b=c},1913:function(e,t,n){"use strict";function r(e){return(null==e?void 0:e.AttachmentId)&&i(e.AttachmentId.Id)}function i(e){return e&&-1!==e.indexOf("smime-")}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}))},1922:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return b})),n.d(t,"a",(function(){return v}));var r="Box",i="Dropbox",a="Facebook",o="GDrive",c="Mailbox",u="MailMessage",s="OneDriveConsumer",d="OneDrivePro",l="WopiBox",f="WopiDropbox",b="WopiEgnyte",v={providers:{BOX:r,DROPBOX:i,FACEBOOK:a,GDRIVE:o,MAILBOX:c,ONE_DRIVE_CONSUMER:s,ONE_DRIVE_PRO:d,RECENT_ATTACHMENTS:"RecentAttachments",WOPI:"Wopi",WOPI_BOX:l,WOPI_EGNYTE:b}}},1928:function(e,t,n){"use strict";var r=n(0),i=n(28);function a(e){return Object(r.__assign)({__type:"GetNewAttachmentDataProviderCreationInfoRequest:#Exchange"},e)}function o(e){var t,n,r=a({ProviderType:e});return void 0===(t=r)||t.__type||(t=a(t)),Object(i.a)("GetNewAttachmentDataProviderCreationInfo",t,n)}function c(e){return Object(r.__assign)({__type:"GetAttachmentDataProviderCreatorRequest:#Exchange"},e)}function u(e){var t,n,r=c({ProviderType:e});return void 0===(t=r)||t.__type||(t=c(t)),Object(i.a)("GetAttachmentDataProviderCreator",t,n)}var s=n(2265),d=n(2212);n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return I}));var l="code",f="token",b=3e3,v=3;function p(e){return{state:e}}function h(e){return e.state}function m(e){return e.code}function g(e,t,n,i,a){var c={providerType:e,getAuthUrlInfo:null,getCSRFToken:h,getOAuthCode:m};return function e(t,n,i,a,c,d,l){return Object(r.__awaiter)(this,void 0,void 0,(function(){var f,v;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,5,,6]),f=void 0,7!==t&&9!==t&&8!==t?[3,2]:[4,u(t)];case 1:return v=r.sent(),f=v.AttachmentDataProviderCreator.ProviderAppKey,i=v.AttachmentDataProviderCreator.AuthorizationUri,[3,4];case 2:return[4,o(t)];case 3:v=r.sent(),f=v.ProviderAppKey,r.label=4;case 4:return n.getAuthUrlInfo=Object(s.d)(t,i,a,f,c,d),[3,6];case 5:return r.sent(),l>0&&setTimeout((function(){return e(t,n,i,a,c,d,--l)}),b),[3,6];case 6:return[2]}}))}))}(e,c,t,n,i,a,v),c}var O=null;function j(){if(!O){if(O={},Object(d.a)(3)&&(O[3]=g(3,"https://app.box.com/api/oauth2/authorize",Object(s.c)(3),l,p)),Object(d.a)(2)&&(O[2]=g(2,"https://www.dropbox.com/oauth2/authorize",Object(s.b)(2),l,p)),Object(d.a)(6)){var e=g(6,"https://www.facebook.com/dialog/oauth",Object(s.b)(6),f,(function(e){return{state:e,scope:"user_photos,email"}}));e.getCSRFToken=h,e.getOAuthCode=function(e){return e.access_token},O[6]=e}if(Object(d.a)(5)){var t=g(5,"https://accounts.google.com/o/oauth2/auth",s.a+"/ADPRedirect.aspx",l,(function(e){var t={state:e,provider:5..toString(),url:Object(s.b)()};return{state:JSON.stringify(t),scope:"https://www.googleapis.com/auth/drive",access_type:"offline",prompt:"consent",include_granted_scopes:"true"}}));t.getCSRFToken=function(e){return JSON.parse(e.state).state},O[5]=t}Object(d.a)(1)&&(O[1]=g(1,"https://login.live.com/oauth20_authorize.srf",Object(s.c)(1),l,(function(e){return{state:e,scope:"wl.basic onedrive.readwrite wl.offline_access"}}))),Object(d.a)(7)&&(O[7]=g(7,"",Object(s.c)(7),l,p)),Object(d.a)(8)&&(O[8]=g(8,"",Object(s.c)(8),l,p)),Object(d.a)(9)&&(O[9]=g(9,"",Object(s.c)(9),l,p))}return O}function I(e){var t=j();return e in t?t[e]:null}},1935:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1769);function i(){return Object(r.a)().loadState}},1941:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(2307),i=n(2232),a=n(2275),o=n(7),c=n(105);function u(e,t){if(void 0===t&&(t=!1),t)return"";switch(e){case 0:return Object(o.b)(a.b);case 1:return Object(o.b)(a.a);case 2:case 9:return Object(o.b)(r.b);case 3:case 7:return Object(o.b)(r.a);case 5:return Object(o.b)(r.e);case 6:return Object(o.b)(r.d);case 4:return Object(o.b)(r.f);case 10:return Object(o.b)(i.b);case 8:return Object(o.b)(r.c);default:return Object(c.a)(e)}}},1942:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o}));var r,i=n(0);!function(e){e[e.Groups=1e4]="Groups"}(r||(r={}));var a=Object.freeze([1,3,2,6,5,7,8,9]),o=Object.freeze(Object(i.__spread)(a,[0,4,10]))},1988:function(e,t,n){"use strict";var r;!function(e){e[e.None=0]="None",e[e.Images=1]="Images"}(r||(r={})),t.a=r},1998:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(2246);function i(e,t){var n=Object(r.a)(t),i=n&&n.get(e);return null==i?void 0:i.rootFolder}},2012:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"m",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"n",(function(){return s})),n.d(t,"o",(function(){return d})),n.d(t,"p",(function(){return l})),n.d(t,"r",(function(){return f})),n.d(t,"q",(function(){return b})),n.d(t,"u",(function(){return v})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return O})),n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return I})),n.d(t,"h",(function(){return w})),n.d(t,"i",(function(){return S})),n.d(t,"j",(function(){return x})),n.d(t,"k",(function(){return _}));var r=n(44),i=new r.c((function(){return Promise.all([n.e(3),n.e(5),n.e(6),n.e(8),n.e(15),n.e(17),n.e(21),n.e(23),n.e(30),n.e(51),n.e(266),n.e(273),n.e(725)]).then(n.bind(null,2754))})),a=new r.b(i,(function(e){return e.clearSearchBox})),o=new r.b(i,(function(e){return e.endSearchSession})),c=new r.b(i,(function(e){return e.onDownArrowPressedSearchInput})),u=new r.b(i,(function(e){return e.onBackspacePressedSearchInput})),s=new r.b(i,(function(e){return e.onLeftArrowPressedSearchInput})),d=(new r.b(i,(function(e){return e.onRightArrowPressedSearchInput})),new r.b(i,(function(e){return e.onUpArrowPressedSearchInput}))),l=new r.b(i,(function(e){return e.removeSuggestionPillFromSearchBox})),f=new r.b(i,(function(e){return e.setLatestQFRequestId})),b=new r.b(i,(function(e){return e.setIsSuggestionsDropdownVisible})),v=new r.b(i,(function(e){return e.updateIsSuggestionSetComplete})),p=new r.b(i,(function(e){return e.setShowSearchBoxInCompactMode})),h=new r.a(i,(function(e){return e.setSpellerData})),m=(Object(r.d)(i,(function(e){return e.PersonaPill})),Object(r.d)(i,(function(e){return e.PrivateDistributionListPill})),Object(r.d)(i,(function(e){return e.SearchBoxDropdown}))),g=Object(r.d)(i,(function(e){return e.SearchBoxPillWell})),O=Object(r.d)(i,(function(e){return e.SuggestionsCallout})),j=Object(r.d)(i,(function(e){return e.CompactSearchBox})),I=Object(r.d)(i,(function(e){return e.SearchScopePicker})),w=new r.b(i,(function(e){return e.getSuggestionAtIndex})),S=new r.b(i,(function(e){return e.isInSearchMode})),x=new r.b(i,(function(e){return e.isQFRequestIdEqualToLatest})),_=new r.b(i,(function(e){return e.isSearchBoxEmpty}))},2013:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1863);function i(e){switch(e){case r.b.Mail:return"Mail";case r.b.Calendar:return"Calendar";case r.b.FilesHub:return"FilesHub";case r.b.FilesPicker:return"FilesPicker";case r.b.Spaces:return"Spaces";case r.b.FileSuggestions:return"FileSuggestions";default:throw Error("Unknown SearchScenarioId value!")}}},2056:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),i=n(52),a=Object(r.action)("GET_SUGGESTIONS",(function(e){return Object(i.c)({name:"Search_SuggestionsE2E"},{scenarioId:e})}))},2057:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(3),i=Object(r.action)("START_SEARCH",(function(e,t,n,r,i,a){return void 0===n&&(n=!1),void 0===r&&(r=[]),void 0===a&&(a="All"),{actionSource:e,scenarioId:t,explicitSearch:n,connectedAccountInfo:r,searchProvider:i,filter:a}}))},2063:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(3),i=Object(r.action)("REFRESH_SHARING_TIPS_FOR_ATTACHMENT",(function(e){return{attachmentId:e}}))},2147:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1910);function i(){return Object(r.a)().folderTable}},2183:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(296),i=n(40);function a(){var e=Object(r.a)()?["inbox","junkemail","drafts","sentitems","scheduled","deleteditems","archive"]:["inbox","drafts","sentitems","scheduled","deleteditems","junkemail","archive"];return Object(i.i)("notes-folder-view")&&e.push("notes"),e}},2212:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1674),i=n(296),a=n(105),o=n(40);function c(e){var t=Object(r.a)();switch(e){case 5:return(null==t?void 0:t.GoogleDriveAttachmentsEnabled)&&(null==t?void 0:t.ThirdPartyAttachmentsEnabled)&&Object(o.i)("doc-fileProvider-gdrive");case 4:case 0:return!0;case 3:return(null==t?void 0:t.BoxAttachmentsEnabled)&&(null==t?void 0:t.ThirdPartyAttachmentsEnabled)&&Object(o.i)("doc-fileProvider-box");case 2:return(null==t?void 0:t.DropboxAttachmentsEnabled)&&(null==t?void 0:t.ThirdPartyAttachmentsEnabled)&&Object(o.i)("doc-fileProvider-dropbox");case 6:return(null==t?void 0:t.ThirdPartyAttachmentsEnabled)&&Object(o.i)("doc-fileProvider-facebook");case 1:return!!Object(i.a)()||(null==t?void 0:t.OnedriveAttachmentsEnabled)&&(null==t?void 0:t.ThirdPartyAttachmentsEnabled);case 10:return Object(o.i)("doc-filePicker-mailMessageAttachment");case 7:case 8:case 9:return(null==t?void 0:t.ThirdPartyAttachmentsEnabled)&&Object(o.i)("doc-fileProvider-wopiClient");default:return Object(a.a)(e)}}},2232:function(e){e.exports=JSON.parse('{"a":"Yca","b":"Zca"}')},2246:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(1910),i=n(85);function a(e){return o(e).folderTreeTable}function o(e){return e||(e=Object(i.b)()),Object(r.a)().mailboxFolderTreeData.get(e)}},2265:function(e,t,n){"use strict";var r=n(495),i=n(2);function a(e,t,n){if(!e||!t||!n)throw new Error("Key and Value parameters should not be null");return e.indexOf("?")>0?e+"&"+t+"="+n:e+"?"+t+"="+n}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s}));var o=Object(i.H)()?"https://exchangelabs.live-int.com/owa":"https://outlook.office.com/owa";function c(e){var t=e?encodeURIComponent("?provider="+e):"",n=e&&6===e?"AddFacebookFileProvider.html":"AddFileProvider.html";return Object(r.l)()+"/mail/"+n+t}function u(e){var t=Object(r.l)()+"/mail/AddFileProvider.html",n=encodeURIComponent("provider="+e+"&url="+t);return o+"/ADPRedirect.aspx?"+n}function s(e,t,n,r,i,o){return function(){var e=function(){for(var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),t=e.length-1,n=[],r=0;r<16;r++)n.push(e[Math.round(Math.random()*t)]);return"owa_csrf_token_"+n.join("")}(),c=a(t,"client_id",r);if(c=a(c,"redirect_uri",n),c=a(c,"response_type",i),o){var u=o(e);c=Object.keys(u).reduce((function(e,t){return a(e,t,u[t])}),c)}return{authUrl:c,redirectUrl:n,csrfToken:e}}}},2275:function(e){e.exports=JSON.parse('{"b":"Wca","a":"Xca"}')},2307:function(e){e.exports=JSON.parse('{"b":"Qca","a":"Rca","e":"Sca","d":"Tca","f":"Uca","c":"Vca"}')},2435:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(9),i=n(2183);n.d(t,"a",(function(){return i.a}));var a=new r.b((function(){return Promise.all([n.e(9),n.e(12),n.e(16),n.e(18),n.e(19),n.e(677)]).then(n.bind(null,3889))})),o=new r.a(a,(function(e){return e.bootstrapFolderHierarchyCache}))},2529:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1998),i=n(1644);function a(e){return Object(r.a)(i.j,e)}},2530:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1998),i=n(1644);function a(e){return Object(r.a)(i.d,e)}},2531:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1998);function i(e){return Object(r.a)(e)}},2723:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return v}));var r=n(957),i=n(1673),a=n(1910),o=n(2529),c=n(2147),u=n(2530),s=n(2531),d=n(2435);function l(e){var t=Object(c.a)(),n=Object(r.a)(e);return n?t.get(n):void 0}function f(e,t){if("SharedMailbox"===e&&!t)throw new Error("To get all the shared folders you must pass principalSMTPAddress");var n,r=[];switch(e){case"ArchiveMailbox":n=Object(u.a)();break;case"SharedMailbox":n=Object(s.a)(t);break;default:n=Object(o.a)()}var c=Object(d.a)();"UserMailbox"==e&&n.DistinguishedFolderId==Object(o.a)().DistinguishedFolderId&&n.FolderId&&c.forEach((function(e){var t=l(e);(null==t?void 0:t.ParentFolderId.Id)===n.FolderId.Id&&r.push(t.FolderId.Id)}));for(var f=function(e){var t=[];(null==e?void 0:e.childFolderIds)&&e.childFolderIds.map((function(e){var n=a.b.folderTable.get(e);t.push(n.FolderId.Id)}));return t}(n),b=0;b<f.length;b++)-1==c.indexOf(Object(i.a)(f[b]))&&r.push(f[b]);return r}function b(e,t){var n=Object(c.a)().get(e);return(null==n?void 0:n.mailboxInfo.type)===t}function v(e,t){var n=t.folderTable.get(e);return n?n.mailboxInfo.type:null}},6526:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);function i(e){return Object(r.__assign)({__type:"ReferenceAttachment:#Exchange"},e)}},785:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);function i(e){return Object(r.__assign)({__type:"PropertyUri:#Exchange"},e)}},957:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(48);function i(e){if(!e)throw new Error("Input parameter to folderNameToId must not be null.");return r.a.defaultFolderNameToIdMap.get(e)}},974:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(16),i=n(1);function a(e){return{get:e}}function o(e,t){return Object(i.useMemo)((function(){return Object(r.computed)(e)}),t).get()}}}]);
//# sourceMappingURL=owa.MailBoot~FileSearchBox.js.map
self.scriptsLoaded['owa.MailBoot~FileSearchBox.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~FileSearchBox.js'] = (new Date()).getTime();