self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~PostSharedBoot.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[696],{189:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(24);function a(){var e=Object(r.a)(),t=e.origin;return t||(t=e.protocol+"//"+e.hostname+(e.port?":"+e.port:"")),t}},2516:function(e,t,n){"use strict";var r=n(44),a=n(0),o=n(3),c=function(e,t,n){var r=null;return{init:function(c){var i;return null!==r?c:(r=Object(o.createStore)(e,t),n(r()),Object(a.__assign)(Object(a.__assign)({},c),((i={})[e]=r,i)))},getIfInitialized:function(){return r?r():null}}};n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return c}));var i=new r.c((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(8),n.e(11),n.e(14),n.e(20),n.e(37),n.e(50),n.e(53),n.e(60),n.e(108),n.e(123),n.e(541)]).then(n.bind(null,17155))})),s=Object(r.d)(i,(function(e){return e.DiagnosticsPanel})),u=new r.a(i,(function(e){return e.registerDiagnostics})),l=(new r.b(i,(function(e){return e.setSelectedPivot})),new r.b(i,(function(e){return e.getDiagnosticsLogState}))),d=new r.b(i,(function(e){return e.initializeDefaultDiagnostics})),f=Object(r.d)(i,(function(e){return e.DiagnosticsHost})),h=(Object(r.d)(i,(function(e){return e.DiagnosticsInspector})),Object(r.d)(i,(function(e){return e.TwoColumnInspector})))},407:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(65);function a(e){return Object(r.a)(e,[r.c])}},424:function(e,t,n){"use strict";var r=function(){function e(e,t,n){this.maxParallelTasks=e,this.taskCallback=t,this.taskDelay=n,this.taskList=[],this.numberOfTasksRunning=0}return e.prototype.add=function(e){this.taskList.unshift(e),this.scheduleTask()},e.prototype.clear=function(){this.taskList.splice(0,this.taskList.length)},e.prototype.canRunMoreTasks=function(){return this.numberOfTasksRunning<this.maxParallelTasks&&this.taskList.length>0},e.prototype.scheduleTask=function(){var e=this;this.canRunMoreTasks()&&setTimeout((function(){e.tryRunTask()}),this.taskDelay)},e.prototype.onTaskComplete=function(){this.numberOfTasksRunning--,this.scheduleTask()},e.prototype.tryRunTask=function(){var e=this;if(this.canRunMoreTasks()){var t=this.taskList.pop();this.numberOfTasksRunning++,this.taskCallback(t).then((function(){e.onTaskComplete()})).catch((function(){e.onTaskComplete()})),this.scheduleTask()}},e}();n.d(t,"a",(function(){return r}))},495:function(e,t,n){"use strict";var r=n(407),a=n(21),o=n(65);function c(e){return Object(o.a)(e,[o.b])}var i=n(17),s=n(50);function u(e){return Object(i.b)(Object(i.c)(Object(i.a)(Object(s.a)()||"",e)))}var l,d,f,h=n(503),b=n(615),p=n(141);function v(){return l||(l=Object(a.a)("/calendar")+"/"),l}function O(){return d||(d=Object(a.a)("/mail")+"/"),d}function g(){return f||(f=Object(a.a)("/files")+"/"),f}var m,j,C,w=n(710);function k(e){return m&&j===e||(j=e,m=e?Object(a.a)("/people/group/owner")+"/":Object(a.a)("/people/group/member")+"/"),m}function y(){return C||(C=Object(a.a)("/people/group/deleted")+"/"),C}function T(e){return window.location.origin+v()+"showPeek/item/"+encodeURIComponent(e)}var E=n(326),S=n(573),R=n(4),I=n(527),N=Object(S.a)().split("/").slice(1).join("/")+"deeplink/";function P(e,t,n,r){n&&((r=r||{}).minus="");var a="";if(r){var o=Object(R.b)();Object(I.a)(o),Object.keys(r).filter((function(e){return e})).forEach((function(e){return o[e]=r[e]})),a="?"+Object(R.i)(o)}var c={pathname:"/"+e+"/"+N+t,search:a};return E.format(c)}var _,M,U=n(144),D=n(0),x=n(25),W="https://to-do.microsoft.com";function A(e,t){var n,r,a,o=Object(x.a)(),c=o.UserOptions,i=null===(r=o.SessionSettings)||void 0===r?void 0:r.UserPrincipalName,s=W,u={};if(null===(a=null==c?void 0:c.ReactOptinSettings)||void 0===a?void 0:a.TasksRedirectUrl){var l;s=(n=Object(D.__read)(c.ReactOptinSettings.TasksRedirectUrl.split("?"),2))[0],l=n[1],u=Object(R.g)(l),i&&(u.auth_upn=i)}return e&&(u.utm_source=e),t&&delete u.fromOwa,Object.keys(u).length>0?Object(p.a)(s,u):s}function V(){return _||(_=Object(a.a)("/spaces")+"/"),_}function L(){return M||(M=Object(a.a)("/eventify")+"/"),M}var H=n(189);n.d(t,"i",(function(){return r.a})),n.d(t,"s",(function(){return a.a})),n.d(t,"e",(function(){return c})),n.d(t,"k",(function(){return u})),n.d(t,"r",(function(){return h.a})),n.d(t,"w",(function(){return i.a})),n.d(t,"a",(function(){return i.b})),n.d(t,"n",(function(){return b.a})),n.d(t,"u",(function(){return p.a})),n.d(t,"c",(function(){return v})),n.d(t,"j",(function(){return O})),n.d(t,"f",(function(){return g})),n.d(t,"o",(function(){return w.a})),n.d(t,"h",(function(){return k})),n.d(t,"g",(function(){return y})),n.d(t,"b",(function(){return T})),n.d(t,"p",(function(){return P})),n.d(t,"v",(function(){return U.a})),n.d(t,"t",(function(){return A})),n.d(t,"m",(function(){return V})),n.d(t,"d",(function(){return L})),n.d(t,"l",(function(){return H.a})),n.d(t,"q",(function(){return s.a}))},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4),a=n(527);function o(){var e=Object(r.b)();Object(a.a)(e);var t=Object(r.i)(e);return t.length>0?"?"+t:""}},527:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=["hostApp","isanonymous","cspoff","frameName","opxInstanceId"];function a(e){e&&Object.keys(e).forEach((function(t){r.includes(t)&&delete e[t]}))}},5526:function(e,t,n){"use strict";n.r(t);var r=n(40),a=n(0),o=n(2);function c(){return Object(a.__awaiter)(this,void 0,void 0,(function(){var e,t,n;return Object(a.__generator)(this,(function(r){switch(r.label){case 0:e=Object(o.z)()+"scripts/ThirdPartyNotices.txt",r.label=1;case 1:return r.trys.push([1,4,,5]),[4,fetch(e,{credentials:"same-origin"})];case 2:return[4,r.sent().text()];case 3:return t=r.sent(),n=document.createComment("\nTHIRD-PARTY SOFTWARE NOTICES\nThis file is based on or incorporates material from the projects listed below (Third Party Code). The original copyright notice and the license under which Microsoft received such Third Party Code, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party Code to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.\n\nYou may find a copy of the Corresponding Source code, if and as required under the Third Party Code License, either bundled with the Microsoft product or at http://3rdpartysource.microsoft.com. If not bundled with the product, you may also obtain a copy of the source code for a period of one year after our last shipment of this product.\n\n=============\n\n"+t),document.head.appendChild(n),[3,5];case 4:return r.sent(),[3,5];case 5:return[2]}}))}))}var i=n(44),s=new i.c((function(){return n.e(540).then(n.bind(null,17424))})),u=new i.a(s,(function(e){return e.setupDevTools})),l=n(316),d=n(4),f=n(495),h=["bO","bR","sessionId","anonRetry"];var b=n(2516),p=n(2762),v=n(134),O=n(424);var g=n(120),m=n(7992),j={concurrency:3,delay:1,pulse:1},C="ttiConcurrency",w="ttiDelay",k="ttiPulse",y="ttiMonkey",T=45e3,E=6e4,S=-1,R=null,I=null,N=null,P=0,_=!1,M=S,U=S;function D(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n,o,c,i;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:t=0,a.label=1;case 1:return t<e.length?(n=e[t],o="function"==typeof n?n:n.task,c="function"==typeof n||!("condition"in n)||n.condition,i="function"!=typeof n&&n.idle,c?Object(r.i)("fwk-tti-governor")?[3,2]:(o(),[3,4]):[3,4]):[3,5];case 2:return P++,[4,W(i)];case 3:a.sent().add(o),a.label=4;case 4:return++t,[3,1];case 5:return[2]}}))}))}function x(){_=!0,Object(r.i)("fwk-tti-governor-monkey")&&(U=V(y,Math.floor(Math.random()*P)))}function W(e){return e?(I||(I=A(Promise.race([m.a.importAndExecute(),Object(g.a)(T)]))),I):(R||(R=A()),R)}function A(e){var t=function(){N||(N={concurrency:V(C,j.concurrency),pulse:V(k,j.pulse),delay:V(w,j.delay)});return N}();return(e||Object(g.a)(t.delay)).then((function(){return e=t.concurrency,n=L,r=t.pulse,new O.a(e,n,r);var e,n,r}))}function V(e,t){var n=t;return Object(r.i)("fwk-devTools")&&(n=parseInt(Object(d.a)(e))||t),n}function L(e){return++M==U?setTimeout(e,E):e(),_&&M==P-1&&(Object(v.r)("ttiGovernEnd",Object(a.__assign)(Object(a.__assign)({},N),{monkey:U})),_=!1),Promise.resolve()}function H(e,t){return["branch","ring","version"].some((function(n){return!!Object(d.d)(n,e.location)&&(t.push(n+"="+Object(d.a)(n,e.location)),!0)})),t.join("&")}var F,q=n(34);!function(e){e[e.Normal=0]="Normal",e[e.CacheCorrupt=1]="CacheCorrupt",e[e.TooManyInstallError=2]="TooManyInstallError"}(F||(F={}));var z,B=F;!function(e){e[e.Install=0]="Install",e[e.UnInstall=1]="UnInstall"}(z||(z={}));var G,Q=z;!function(e){e[e.CacheProgress=0]="CacheProgress",e[e.Error=1]="Error"}(G||(G={}));var Y,$=G;!function(e){e[e.Checking=0]="Checking",e[e.Downloading=1]="Downloading",e[e.Progress=2]="Progress",e[e.Error=3]="Error",e[e.Cached=4]="Cached",e[e.NoUpdate=5]="NoUpdate",e[e.Obsolete=6]="Obsolete",e[e.UpdateReady=7]="UpdateReady",e[e.Idle=8]="Idle",e[e.UnCached=9]="UnCached",e[e.CleanupError=10]="CleanupError",e[e.CleanupSuceeded=11]="CleanupSuceeded",e[e.ManifestDate=12]="ManifestDate"}(Y||(Y={}));var X,J,K=Y,Z=((X={})[K.Error]="ER",X[K.Cached]="C",X[K.NoUpdate]="NU",X[K.Obsolete]="OB",X[K.UpdateReady]="UR",X);!function(e){e[e.CacheInstalled=0]="CacheInstalled",e[e.CacheFailed=1]="CacheFailed",e[e.CacheCleared=2]="CacheCleared"}(J||(J={}));var ee=J,te=n(10);function ne(e,t){return e+"_"+t}var re="SWCacheErrorCount";function ae(e,t,n){var r=ne(t.appName,re);0==n?Object(te.d)(e,r):Object(te.e)(e,r,""+n)}function oe(e,t){var n=parseInt(Object(te.a)(e,ne(t.appName,re)));return isNaN(n)?0:n}var ce="CacheVersion",ie="AttemptedCacheVersion";function se(e,t,n){if(n.cacheMessage&&(n.targetClient==t.appName||"global"==n.targetClient)){var r=n.cacheMessage;q.g.info("[SW Client] Cache Event: "+r.cacheEvent);var a=null;switch(r.cacheEvent){case K.Progress:t.resourcesCached++;break;case K.Error:a=ee.CacheFailed;break;case K.Cached:case K.NoUpdate:case K.UpdateReady:a=ee.CacheInstalled;break;case K.Obsolete:a=ee.CacheCleared;break;case K.CleanupError:t.cacheCleanupStatus=1;break;case K.CleanupSuceeded:t.cacheCleanupStatus=2,t.numberOfCachesCleaned=r.cachesCleaned?r.cachesCleaned.length:0;break;case K.ManifestDate:Object(te.e)(e,"OwaSWManifestDate",r.resource)}var o=r.cacheEvent==K.Obsolete;null!=a&&(function(e,t,n,r){switch(n){case ee.CacheInstalled:Object(te.e)(e,ne(t.appName,ce),r),ae(e,t,0);break;case ee.CacheFailed:Object(te.e)(e,ne(t.appName,ie),r),ae(e,t,oe(e,t)+1);break;case ee.CacheCleared:Object(te.e)(e,ne(t.appName,ce),null),Object(te.e)(e,ne(t.appName,ie),null),ae(e,t,0)}}(e,t,a,o?null:r.cacheVersion),function(e,t){Object(v.r)("SWCache",{ev:Z[t.cacheEvent],cv:t.cacheVersion,e:t.error,r:t.resource,st:t.status,stk:t.stack,rc:e.resourcesCached,ccs:e.cacheCleanupStatus,ncc:e.numberOfCachesCleaned,ch:e.cacheHealth,app:e.appName}),e.resourcesCached=0,e.cacheCleanupStatus=0,e.numberOfCachesCleaned=0}(t,r)),o&&t.cacheHealth>B.Normal&&(t.cacheHealth=B.Normal,Oe())}}var ue=n(6),le=n(50),de=n(407),fe=n(268),he=n(25),be=15,pe=null,ve=null;function Oe(){var e,t,n=Object(de.a)("/"+Object(le.a)())+"/",a=["manifestVersion=2"];Object(ue.e)()===ue.b.SriEnabled&&a.push("srienabled=true");var o=""+n+pe.appName+"cache.manifest?"+H(window,a),c=Q.Install;pe.cacheHealth>B.Normal&&(c=Q.UnInstall);var i={},s=null===(t=null===(e=Object(he.a)())||void 0===e?void 0:e.SessionSettings)||void 0===t?void 0:t.LogonEmailAddress;s&&(i["X-AnchorMailbox"]=s),Object(fe.a)("nativeHostHeader")&&(i["x-native-host"]="true");var u={source:pe.appName,action:c,language:pe.userLanguage,manifestUrl:o,proxyFetchAlways:Object(r.i)("fwk-sw-proxyFetchAlways"),rootUrl:n,dynamicRequestHeaders:i,dynamicQueryString:ge()};pe.serviceWorkerRegistration.active.postMessage(u)}function ge(){if(Object(fe.a)("hxVersionQueryStringParam")){var e=Object(d.a)("hxVersion");if(e)return"hxVersion="+e}}function me(e){if(e.data){var t=e.data;t.messageType==$.CacheProgress?se(ve,pe,t):t.messageType==$.Error&&function(e){null!=e.error&&q.d("[SW Client] ServiceWorker Unhandled Exception",e.error)}(t)}}var je=n(62),Ce="activated",we=null,ke=null,ye=null,Te=null;function Ee(e,t,n){ke=(ye=e).navigator.serviceWorker,Te=t;var a,o,c,i=Object(f.i)("mail")+"/sw.js",s=[];Object(r.i)("fwk-sw-proxyFetchAlways")&&(a=Object(je.a)(),o=a.browser,c=a.browserVersion,("Chrome"==o||"Edge Anaheim"==o)&&c&&c.length>0)&&s.push("fa=1"),(Object(r.i)("fwk-sw-v2")||Object(d.d)("swV2"))&&s.push("swVersion=2");var u=H(e,s);return u&&(i+="?"+u),n.addCustomData({url:i}),ke.register(i,{scope:"/"}).then((function(){return ke.ready.then(Se)}))}function Se(e){return q.g.info("[SW Client] ready fired, state: "+e.active.state),(we=e).active?Re():new Promise((function(e){ke.oncontrollerchange=function(){Re(),e()}}))}function Re(){return we.active.state==Ce?Ie():new Promise((function(e){we.active.onstatechange=function(){we.active.state==Ce&&(we.active.onstatechange=null,Ie(),e())}}))}function Ie(){var e,t,n,r,a=Object(he.a)();return n={serviceWorkerContainer:ke,serviceWorkerRegistration:we,appName:Te,userLanguage:null===(t=null===(e=null==a?void 0:a.SessionSettings)||void 0===e?void 0:e.UserLanguage)||void 0===t?void 0:t.toLowerCase()},r=ye,pe||((pe=n).serviceWorkerContainer.onmessage=me,oe(window,pe)>be&&(pe.cacheHealth=B.TooManyInstallError)),ve=r,Oe(),Promise.resolve()}function Ne(e,t){var n;return Object(a.__awaiter)(this,void 0,void 0,(function(){var o,c,i,s,u;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:if(o=new v.b("RegisterServiceWorker"),!(c=null===(n=e.navigator)||void 0===n?void 0:n.serviceWorker))return[3,7];if(i=function(){var e,t=Object(je.a)().browser;Object(r.i)("fwk-prefetch-code-off")?e="Error_PrefetchDisabled":"Chrome"==t||"Edge Anaheim"==t?Object(r.i)("fwk-prefetch-code-off-chromium")&&!Object(je.o)([77])&&(e="Error_ChromeMinVersion"):"Edge"==t?Object(je.o)([17,17134])||(e="EdgeMinVersion"):"Safari"==t?Object(je.o)([11,1])||(e="SafariMinVersion"):"Firefox"!=t&&(e="UnsupportedBrowser:"+t);return e}())return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Ee(e,t,o)];case 2:return a.sent(),[3,4];case 3:return u=a.sent(),s=u,[3,4];case 4:return[3,6];case 5:c.getRegistrations&&c.getRegistrations().then((function(e){for(var t=0;t<e.length;++t)e[t].unregister()})),a.label=6;case 6:return[3,8];case 7:i="SWNotAvailable",a.label=8;case 8:return o.addCustomData([i||"success"]),s?o.endWithError("ClientError",s):i?o.endWithError("ServerError"):o.end(),[2]}}))}))}function Pe(e,t,n){D({condition:!!((null===window||void 0===window?void 0:window.location)&&window.history),task:function(){return function(e,t){for(var n=Object(d.b)(e),r=!1,a=0;a<h.length;a++){var o=h[a];n[o]&&(delete n[o],r=!0)}if(r){var c=Object(l.stringify)(n);c&&(c="?"+c);var i=""+Object(f.l)()+e.pathname+c+e.hash;t.replaceState(null,null,i)}}(window.location,window.history)}},p.a,(function(){return v.k.importAndExecute(e)}),{condition:Object(r.i)("fwk-devTools"),task:function(){u.importAndExecute(),b.g.import().then((function(e){e()}))}},{task:function(){return Ne(window,t)},idle:!0,condition:t&&(!n||Object(r.i)(n))},{idle:!0,task:c})}n.d(t,"setupSharedPostBoot",(function(){return Pe})),n.d(t,"govern",(function(){return D})),n.d(t,"enableGovernReport",(function(){return x}))},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(24),a=n(21),o=n(189);function c(e){var t=Object(r.a)(),n=Object(o.a)()+Object(a.a)("/owa")+"/",c=t.search&&t.search.length>0;n+=c?t.search:"?";for(var i=Object.keys(e),s=c,u=0;u<i.length;u++)s?n+="&":s=!0,n+=i[u]+"="+e[i[u]];return n}},710:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r,a=n(21);function o(){return r||(r=Object(a.a)("/people")+"/"),r}},7992:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(44),a=new r.c((function(){return n.e(944).then(n.bind(null,10407))})),o=new r.a(a,(function(e){return e.tti}))}}]);
//# sourceMappingURL=owa.MailBoot~PostSharedBoot.js.map
self.scriptsLoaded['owa.MailBoot~PostSharedBoot.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~PostSharedBoot.js'] = (new Date()).getTime();