self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~FileProviderStore.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[562],{14164:function(e){e.exports=JSON.parse('{"a":"dea"}')},14165:function(e){e.exports=JSON.parse('{"a":"Fna"}')},14166:function(e){e.exports=JSON.parse('{"b":"Gna","a":"Hna"}')},14167:function(e){e.exports=JSON.parse('{"a":"Ina"}')},14168:function(e){e.exports=JSON.parse('{"a":"Mna"}')},1830:function(e,t){e.exports=function(e){return e instanceof Date}},1869:function(e,t,r){var n=r(1830),i=36e5,o=6e4,a=2,c=/[T ]/,u=/:/,s=/^(\d{2})$/,d=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],f=/^(\d{4})/,l=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],v=/^-(\d{2})$/,p=/^-?(\d{3})$/,b=/^-?(\d{2})-?(\d{2})$/,h=/^-?W(\d{2})$/,O=/^-?W(\d{2})-?(\d{1})$/,m=/^(\d{2}([.,]\d*)?)$/,j=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,w=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,T=/([Z+-].*)$/,_=/^(Z)$/,g=/^([+-])(\d{2})$/,y=/^([+-])(\d{2}):?(\d{2})$/;function D(e,t,r){t=t||0,r=r||0;var n=new Date(0);n.setUTCFullYear(e,0,4);var i=7*t+r+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+i),n}e.exports=function(e,t){if(n(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var r=(t||{}).additionalDigits;r=null==r?a:Number(r);var P=function(e){var t,r={},n=e.split(c);u.test(n[0])?(r.date=null,t=n[0]):(r.date=n[0],t=n[1]);if(t){var i=T.exec(t);i?(r.time=t.replace(i[1],""),r.timezone=i[1]):r.time=t}return r}(e),k=function(e,t){var r,n=d[t],i=l[t];if(r=f.exec(e)||i.exec(e)){var o=r[1];return{year:parseInt(o,10),restDateString:e.slice(o.length)}}if(r=s.exec(e)||n.exec(e)){var a=r[1];return{year:100*parseInt(a,10),restDateString:e.slice(a.length)}}return{year:null}}(P.date,r),A=k.year,x=function(e,t){if(null===t)return null;var r,n,i,o;if(0===e.length)return(n=new Date(0)).setUTCFullYear(t),n;if(r=v.exec(e))return n=new Date(0),i=parseInt(r[1],10)-1,n.setUTCFullYear(t,i),n;if(r=p.exec(e)){n=new Date(0);var a=parseInt(r[1],10);return n.setUTCFullYear(t,0,a),n}if(r=b.exec(e)){n=new Date(0),i=parseInt(r[1],10)-1;var c=parseInt(r[2],10);return n.setUTCFullYear(t,i,c),n}if(r=h.exec(e))return o=parseInt(r[1],10)-1,D(t,o);if(r=O.exec(e)){o=parseInt(r[1],10)-1;var u=parseInt(r[2],10)-1;return D(t,o,u)}return null}(k.restDateString,A);if(x){var S,R=x.getTime(),I=0;return P.time&&(I=function(e){var t,r,n;if(t=m.exec(e))return(r=parseFloat(t[1].replace(",",".")))%24*i;if(t=j.exec(e))return r=parseInt(t[1],10),n=parseFloat(t[2].replace(",",".")),r%24*i+n*o;if(t=w.exec(e)){r=parseInt(t[1],10),n=parseInt(t[2],10);var a=parseFloat(t[3].replace(",","."));return r%24*i+n*o+1e3*a}return null}(P.time)),P.timezone?S=function(e){var t,r;if(t=_.exec(e))return 0;if(t=g.exec(e))return r=60*parseInt(t[2],10),"+"===t[1]?-r:r;if(t=y.exec(e))return r=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-r:r;return 0}(P.timezone):(S=new Date(R+I).getTimezoneOffset(),S=new Date(R+I+S*o).getTimezoneOffset()),new Date(R+I+S*o)}return new Date(e)}},195:function(e,t,r){"use strict";function n(){var e=Object.create(null),t=0,r=0,n=0,i=!1;function o(t){n--,delete e[t]}this.put=function(t,r,i,a){if(void 0!==i&&("number"!=typeof i||isNaN(i)||i<=0))throw new Error("Cache timeout must be a positive number");if(void 0!==a&&"function"!=typeof a)throw new Error("Cache timeout callback must be a function");var c=e[t];c?clearTimeout(c.timeout):n++;var u={value:r,expire:i+Date.now()};return isNaN(u.expire)||(u.timeout=setTimeout(function(){o(t),a&&a(t,r)}.bind(this),i)),e[t]=u,r},this.del=function(t){var r=!0,n=e[t];return n?(clearTimeout(n.timeout),!isNaN(n.expire)&&n.expire<Date.now()&&(r=!1)):r=!1,r&&o(t),r},this.clear=function(){for(var o in e)clearTimeout(e[o].timeout);n=0,e=Object.create(null),i&&(t=0,r=0)},this.get=function(o){var a=e[o];if(void 0!==a){if(isNaN(a.expire)||a.expire>=Date.now())return i&&t++,a.value;i&&r++,n--,delete e[o]}else i&&r++;return null},this.size=function(){return n},this.memsize=function(){var t,r=0;for(t in e)r++;return r},this.debug=function(e){i=e},this.hits=function(){return t},this.misses=function(){return r},this.keys=function(){return Object.keys(e)},this.exportJson=function(){var t={};for(var r in e){var n=e[r];t[r]={value:n.value,expire:n.expire||"NaN"}}return JSON.stringify(t)},this.importJson=function(t,r){var n=JSON.parse(t),i=Date.now(),o=r&&r.skipDuplicates;for(var a in n)if(n.hasOwnProperty(a)){if(o)if(e[a])continue;var c=n[a],u=c.expire-i;if(u<=0){this.del(a);continue}u=u>0?u:void 0,this.put(a,c.value,u)}return this.size()}}e.exports=new n,e.exports.Cache=n},3242:function(e,t,r){"use strict";r.r(t);var n=r(1769),i=r(3),o=Object(i.action)("ADD",(function(e){return{providerViewState:e}})),a=Object(i.action)("LOAD",(function(e){return{providers:e}})),c=Object(i.action)("REMOVE",(function(e){return{providerType:e}})),u=Object(i.action)("ADD_TO_REMOVING",(function(e){return{providerType:e}})),s=Object(i.action)("SET_LOAD_STATE",(function(e){return{loadState:e}})),d=Object(i.action)("REMOVE_FROM_REMOVING",(function(e){return{providerType:e}}));function f(e){Object(n.a)().providers.set(e.viewType.toString(),e)}Object(i.mutator)(o,(function(e){return f(e.providerViewState)})),Object(i.mutator)(u,(function(e){Object(n.a)().removalPending.set(e.providerType.toString(),"")})),Object(i.mutator)(c,(function(e){Object(n.a)().providers.delete(e.providerType.toString()),Object(n.a)().removalPending.delete(e.providerType.toString())})),Object(i.mutator)(a,(function(e){return e.providers.forEach(f)})),Object(i.mutator)(s,(function(e){Object(n.a)().loadState=e.loadState})),Object(i.mutator)(d,(function(e){Object(n.a)().removalPending.delete(e.providerType.toString())}));var l=r(0),v=r(14164),p=r(2232),b=r(7),h=r(1941),O=r(1942),m="file provider is not addable";function j(e){return O.a.indexOf(e)>-1}var w=Object(i.action)("ADD_FILE_PROVIDER",(function(e,t,r){return{providerType:e,getAddableFileProviderInfoCustom:t,updateProvider:r}})),T=Object(i.action)("LOAD_PROVIDERS",(function(e,t){return{onLoaded:e,onError:t}})),_=Object(i.action)("REMOVE_AND_ADD_FILE_PROVIDER",(function(e){return{providerType:e}})),g=Object(i.action)("REMOVE_FILE_PROVIDER",(function(e){return{providerType:e}})),y=r(877);function D(e){if(O.c.indexOf(e.Type)<-1)return null;var t=e.Type;try{var r=5===t?e.Scopes.filter((function(e){return"Photos"!==e.DisplayName})):e.Scopes;return{name:e.DisplayName,providerAccountIdentifier:e.AssociatedDataProviderAccountId||"",isPrimaryProvider:!e.IsThirdPartyProvider,type:t,allowFolderSharing:e.AllowFolderSharing,model:e,scopes:r||[],viewType:t,associatedWithPrimaryProvider:!1,usesGroupsViewAtTopLevel:!1}}catch(e){return null}}var P=r(1770),k=r(134),A=r(34),x=r(5829);function S(e,t,r){return Object(l.__awaiter)(this,void 0,void 0,(function(){var n,i;return Object(l.__generator)(this,(function(a){switch(a.label){case 0:if(!j(e))throw new Error(m);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,R(e,t,r)];case 2:return n=a.sent(),[3,4];case 3:return function(e,t){throw A.g.warn("Error in adding file provider "+e.toString()),function(e){Object(y.b)(Object(b.b)(p.a),Object(b.c)(Object(b.b)(v.a),e),!1,{hideCancelButton:!0})}(Object(h.a)(t)),e}(a.sent(),e),[2];case 4:return i=D(n),o(i),Object(P.a)(i),[2]}}))}))}function R(e,t,r){return Object(k.r)("FPAddDataProviderAuthWindowOpened",[e]),new Promise((function(n,i){var o,a,c,u,s,d,f=(t=t||x.b)(e).getAuthUrlInfo(),l=f.authUrl,v={info:{redirectUrl:f.redirectUrl,csrfToken:f.csrfToken,updateProvider:r},onProviderAdded:function(e){return n(e)},onErrorAddingProvider:function(e){return i(e)},getAddableFileProviderInfo:t};Object(x.a)(e),Object(x.d)(e,v),o=l,a=600,c=600,u=(window.screen.width-a)/2,s=(window.screen.height-c)/2,d="width="+a+", height="+c+", top="+s+", left="+u+", menubar=no, toolbar=no",window.open(o,"_blank",d)}))}Object(i.orchestrator)(w,(function(e){S(e.providerType,e.getAddableFileProviderInfoCustom,e.updateProvider)}));var I=r(14165),E=r(14166),F=r(3248),C=r(1833);function N(e){return Object(l.__assign)({__type:"RemoveAttachmentDataProviderRequest:#Exchange"},e)}var L=r(28);function M(e){var t,r,n=N({DataProviderId:e});return void 0===(t=n)||t.__type||(t=N(t)),Object(L.a)("RemoveAttachmentDataProvider",t,r)}function $(e){return Object(l.__awaiter)(this,void 0,void 0,(function(){var t;return Object(l.__generator)(this,(function(r){switch(r.label){case 0:if(!(t=Object(C.a)(e.toString()))||!j(e))return U("Unable to remove the provider as the provider does not exist in the store or is not addable.",e),Object(k.r)("FPRemoveFileProvider",{message:"Provider does not exist in the store or is not addable.",fileProviderType:e.toString()}),[2];u(e),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,M(t.model.Id)];case 2:return r.sent().RemovedSuccessfuly?(c(e),Object(P.b)(e),Object(F.b)(t.type),Object(k.r)("FPRemoveFileProvider",{message:"Successfully removed file provider",fileProviderType:e.toString()})):(d(e),U("Unable to remove the provider",t.type),Object(k.r)("FPRemoveFileProvider",{message:"Unable to remove the provider",fileProviderType:e.toString()})),[3,4];case 3:return r.sent(),d(e),[3,4];case 4:return[2]}}))}))}function U(e,t){var r;A.g.warn("Error in removing file provider "+e),r=Object(h.a)(t),Object(y.b)(Object(b.b)(E.b),Object(b.c)(Object(b.b)(E.a),r),!1,{hideCancelButton:!0})}function V(e){return Object(y.b)(Object(b.b)(p.a),Object(b.c)(Object(b.b)(I.a),e),!1)}Object(i.orchestrator)(g,(function(e){$(e.providerType)})),Object(i.orchestrator)(_,(function(e){!function(e){Object(l.__awaiter)(this,void 0,void 0,(function(){var t;return Object(l.__generator)(this,(function(r){switch(r.label){case 0:t=Object(h.a)(e),r.label=1;case 1:return r.trys.push([1,6,,7]),[4,$(e)];case 2:return r.sent(),[4,V(t)];case 3:return r.sent()!==y.a.ok?[3,5]:[4,S(e)];case 4:r.sent(),r.label=5;case 5:return[3,7];case 6:return r.sent(),[3,7];case 7:return[2]}}))}))}(e.providerType)}));var G=r(14167),z=r(1935);function J(e){return Object(l.__assign)({__type:"GetAttachmentDataProvidersRequest:#Exchange"},e)}function W(e){void 0===e&&(e=0);var t,r,n=J({ClientVersion:2,RequestOrigin:e});return void 0===(t=n)||t.__type||(t=J(t)),Object(L.a)("GetAllAttachmentDataProviders",t,r)}var q=r(1854),Y=r(14168),B=r(40);var H=r(8883),Z=r(296);Object(i.orchestrator)(T,(function(e){!function(e,t){Object(l.__awaiter)(this,void 0,void 0,(function(){var r,n,i,o,c,u,d;return Object(l.__generator)(this,(function(f){switch(f.label){case 0:if(Object(z.a)()!==q.a.NotLoaded)return[3,5];s(q.a.Loading),r=new k.b("LoadAttachmentDataProviders"),n=void 0,f.label=1;case 1:return f.trys.push([1,3,,4]),[4,W()];case 2:return n=f.sent(),i=null==n?void 0:n.some((function(e){return e.IsThirdPartyProvider})),r.addCustomData({hasThirdPartyProviders:i}),r.end(),[3,4];case 3:return o=f.sent(),++K<X?s(q.a.NotLoaded):s(q.a.Throttled),null==t||t(o),r.endWithError("ServerError",o),[2];case 4:h={__type:"MailMessage",DisplayName:Object(b.b)(Y.a),AriaLabel:Object(b.b)(Y.a)},c={__type:"MailMessageAttachmentDataProvider",Id:"MailMessage",Type:10,DisplayName:Object(b.b)(p.b),AssociatedDataProviderAccountId:null,Scopes:[h],DefaultScopeIndex:0,AllowFolderSharing:!1,DefaultPermissionType:6,IsSearchSupported:Object(B.i)("doc-filePicker-mailMessageSearch"),IsThirdPartyProvider:!1},n.push(c),u=n.filter((function(e){return O.c.indexOf(e.Type)>-1&&Object(H.a)(e.Type)})),(d=function(e){return e.map(D).filter((function(e){return null!==e}))}(u))&&!Object(Z.a)()&&d.splice(0,0,(v=d[0],Object(l.__assign)(Object(l.__assign)({},v),{scopes:[{__type:"OneDriveProScope:#Exchange",Type:3,DisplayName:""}],isPrimaryProvider:!1,viewType:O.b.Groups,name:Object(b.b)(G.a),associatedWithPrimaryProvider:!0,usesGroupsViewAtTopLevel:!0}))),a(d),s(q.a.Loaded),null==e||e(d),Object(P.c)(d),f.label=5;case 5:return[2]}var v,h}))}))}(e.onLoaded,e.onError)}));var X=3,K=0;r.d(t,"removeFileProvider",(function(){return g})),r.d(t,"removeAndAddFileProvider",(function(){return _})),r.d(t,"loadProviders",(function(){return T})),r.d(t,"addFileProvider",(function(){return w}))},3248:function(e,t,r){"use strict";var n=r(0),i=r(5209),o=r.n(i),a=r(7),c=r(296),u=r(375),s=r(326),d=r(28);function f(e){return Object(n.__assign)({__type:"GetAccessTokenForDataProviderRequest:#Exchange"},e)}function l(e,t){return void 0===e||e.__type||(e=f(e)),Object(d.a)("GetAccessTokenforDataProvider",e,t)}function v(e,t,r){return Object(n.__awaiter)(this,void 0,void 0,(function(){var i,o,a,c;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return i=f({DataProviderType:e,ResourceUrl:t,IsGroupRequest:!1}),o=r?"getAccessTokenForDataProvider_"+r:"getAccessTokenForDataProvider",(a=new Headers).append("X-OWA-ActionName",o),[4,l(i,{headers:a,datapoint:{customData:{actionSource:r},headersCustomData:function(e){return{tokenResultDetails:e.get("x-tokenresult")}},jsonCustomData:function(e){return{tokenStatus:e.TokenResultCode.toString()}}},returnFullResponseOnSuccess:!0})];case 1:return[4,(c=n.sent()).json()];case 2:return[2,{token:n.sent(),response:c}]}}))}))}var p="onedrive_implicit.access",b="Bearer ",h=r(40),O=function(e,t,r){return Object(n.__assign)({resultCode:t,isAdalException:r,_typeSpec:"TokenRetrievalError"},e)},m=function(e){return"TokenRetrievalError"===e._typeSpec},j=[],w={},T=1,_=30,g="",y="Microsoft.IdentityModel.Clients.ActiveDirectory.AdalServiceException";function D(e){w[e]=null}function P(e,t,r){return Object(n.__awaiter)(this,void 0,void 0,(function(){var i;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return[4,v(e,t,r)];case 1:return i=n.sent(),function(e,t,r){j=j.filter((function(e){return e!==t}));var n=r.token;if(0!==n.TokenResultCode||!n.AccessToken||""===n.AccessToken){var i="Access token request failed for token key "+e+" with response code "+n.TokenResultCode,o=r.response.headers.get("x-tokenresult"),a=null!=o&&o.indexOf(y)>0;throw O(new Error(i),n.TokenResultCode,a)}var c=w[e]||{};c[t]=n,w[e]=c}(e,t,i),[2,i.token]}}))}))}function k(e,t,r){return Object(n.__awaiter)(this,void 0,void 0,(function(){var i,o;return Object(n.__generator)(this,(function(n){return i=g,0===e&&r&&(o=Object(s.parse)(r),i=Object(a.c)("{0}//{1}/",o.protocol,o.hostname)),Object(h.i)("doc-attachment-testAuthFallback")?[2,""]:[2,x(e,i,t,null)]}))}))}function A(e,t,r){return Object(n.__awaiter)(this,void 0,void 0,(function(){return Object(n.__generator)(this,(function(n){return[2,x(0,e,t,r)]}))}))}function x(e,t,r,i){return Object(n.__awaiter)(this,void 0,void 0,(function(){var a,c;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return r||!function(e,t){var r=w[e];if(!r)return!1;var n=r[t];if(!n||!n.AccessTokenExpiry)return!1;var i=new Date(n.AccessTokenExpiry),a=o()(new Date(Date.now()),T);return null!=i&&a<i}(e,t)?[3,1]:(a=w[e],c=a[t],o()(new Date(Date.now()),_)>new Date(c.AccessTokenExpiry)&&-1===j.indexOf(t)&&(j.push(t),P(e,t,i)),[2,c.AccessToken]);case 1:return[4,P(e,t,i)];case 2:return[2,(c=n.sent()).AccessToken]}}))}))}function S(e,t,r){return Object(n.__awaiter)(this,void 0,void 0,(function(){var i;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return Object(c.a)()&&1===e?[4,Object(u.getDelegationTokenForOwa)(p)]:[3,2];case 1:return i=n.sent(),[3,4];case 2:return[4,k(e,t,r)];case 3:i=n.sent(),n.label=4;case 4:return[2,b+i]}}))}))}r.d(t,"d",(function(){return S})),r.d(t,"c",(function(){return k})),r.d(t,"e",(function(){return A})),r.d(t,"b",(function(){return D})),r.d(t,"f",(function(){return m})),r.d(t,"a",(function(){return b}))},342:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n,i=r(0);function o(e){n=e}function a(){var e,t;return Object(i.__awaiter)(this,void 0,void 0,(function(){var r,o;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return(o=n)?[4,n()]:[3,2];case 1:o=i.sent(),i.label=2;case 2:if((r=o)&&r.length>0){if("bearer"===(null===(e=null==r?void 0:r.split(" ")[0])||void 0===e?void 0:e.toLowerCase()))return[2,r.split(" ")[1]];if("msauth1.0"===(null===(t=null==r?void 0:r.split(" ")[0])||void 0===t?void 0:t.toLowerCase()))return[2,r]}return[2,void 0]}}))}))}},424:function(e,t,r){"use strict";var n=function(){function e(e,t,r){this.maxParallelTasks=e,this.taskCallback=t,this.taskDelay=r,this.taskList=[],this.numberOfTasksRunning=0}return e.prototype.add=function(e){this.taskList.unshift(e),this.scheduleTask()},e.prototype.clear=function(){this.taskList.splice(0,this.taskList.length)},e.prototype.canRunMoreTasks=function(){return this.numberOfTasksRunning<this.maxParallelTasks&&this.taskList.length>0},e.prototype.scheduleTask=function(){var e=this;this.canRunMoreTasks()&&setTimeout((function(){e.tryRunTask()}),this.taskDelay)},e.prototype.onTaskComplete=function(){this.numberOfTasksRunning--,this.scheduleTask()},e.prototype.tryRunTask=function(){var e=this;if(this.canRunMoreTasks()){var t=this.taskList.pop();this.numberOfTasksRunning++,this.taskCallback(t).then((function(){e.onTaskComplete()})).catch((function(){e.onTaskComplete()})),this.scheduleTask()}},e}();r.d(t,"a",(function(){return n}))},4442:function(e,t,r){var n=r(1869);e.exports=function(e,t){var r=n(e).getTime(),i=Number(t);return new Date(r+i)}},4623:function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n={};function i(e,t){n[e]=t}function o(e){return e in n?n[e]:null}function a(e){n[e]=null}},5209:function(e,t,r){var n=r(4442),i=6e4;e.exports=function(e,t){var r=Number(t);return n(e,r*i)}},5829:function(e,t,r){"use strict";var n=r(44),i=r(4623);r.d(t,"a",(function(){return i.a})),r.d(t,"d",(function(){return i.c}));var o=r(1928);r.d(t,"b",(function(){return o.b}));var a=r(2212);r.d(t,"c",(function(){return a.a}));var c=new n.c((function(){return r.e(405).then(r.bind(null,11100))})),u=new n.a(c,(function(e){return e.addFileProviderAfterAuthFinished}));"undefined"!=typeof window&&void 0!==window.Owa&&(window.Owa.lazyAddFileProviderAfterAuthFinished=u);new n.b(c,(function(e){return e.getAddableFileProviderInfo})),new n.b(c,(function(e){return e.addFileProvider})),new n.b(c,(function(e){return e.createAddableFileProviderInfo})),new n.b(c,(function(e){return e.getAuthRedirectPageUrl}))},877:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var n=r(44),i=r(968);r.d(t,"a",(function(){return i.a}));var o=new n.c((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(4),r.e(184),r.e(527)]).then(r.bind(null,1572))})),a=new n.b(o,(function(e){return e.confirmAction}));function c(e,t,r,n){return a.import().then((function(i){return i(e,t,r,n)}))}},8883:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(5829);function i(e){return Object(n.c)(e)}},968:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e[e.ok=0]="ok",e[e.cancel=1]="cancel",e[e.dismiss=2]="dismiss",e[e.continue=3]="continue"}(n||(n={}))}}]);
//# sourceMappingURL=owa.MailBoot~FileProviderStore.js.map
self.scriptsLoaded['owa.MailBoot~FileProviderStore.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~FileProviderStore.js'] = (new Date()).getTime();