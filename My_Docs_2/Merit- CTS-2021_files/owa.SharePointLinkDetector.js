self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.SharePointLinkDetector.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[916],{124:function(t,n,r){"use strict";var e,i,o=r(28);function u(t){return Object(o.a)("GetBposShellInfoNavBarData",{},t)}function c(t){return Object(o.a)("GetBposShellInfoNavBarDataForBookings",{},t)}function f(t,n){e||(e=("Bookings"===t?c:u)({authNeededOnUnAuthorized:!n}).then((function(t){return i=t})).catch((function(){return i=null})));return e}function a(){return e}function s(){return i}r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return f})),r.d(n,"c",(function(){return a}))},2984:function(t,n,r){"use strict";r.r(n);var e=r(134),i=r(326);function o(t,n){var r;try{r=Object(i.parse)(t).hostname}catch(t){return Object(e.r)("isLinkPrefixedWithBaseUrl"),!1}return r===Object(i.parse)(n).hostname&&t!==n}var u=r(124),c=r(40),f=r(34),a=["https://microsoft.sharepoint.com","https://microsoft-my.sharepoint.com","https://microsoft.sharepoint-df.com","https://microsoft-my.sharepoint-df.com"];function s(t){if(!t)return Object(e.r)("isSharePointLinkCalledWithoutUrl"),!1;var n=Object(u.a)();return n?!(!n.SPO_MySiteHostUrl||!o(t,n.SPO_MySiteHostUrl))||(!(!n.SPO_RootSiteUrl||!o(t,n.SPO_RootSiteUrl))||!!Object(c.i)("doc-SharePoint-dogfoodUser")&&a.some((function(n){return o(t,n)}))):(f.g.info("isSharePointLink:bposNavBarData is null"),!1)}function h(t){return!!t&&(t.indexOf("?at=")>0||t.indexOf("&at=")>0)}var d=r(80),l=r(316);function p(t){if(t){var n=t.indexOf("?"),r=-1!==n?t.slice(n+1):"";return Object(l.parse)(r)}return null}function w(t){var n=p(t);return Object(d.b)(null==n?void 0:n.file)?null:decodeURI(null==n?void 0:n.file)}var m=["https://www.office.com","https://www.officeppe.com","https://www.ohome.apps.mil","https://www.office365.us","https://www.office.de"];function O(t){return!!m.some((function(n){return o(t,n)}))&&s(w(t))}r.d(n,"isLinkPrefixedWithBaseUrl",(function(){return o})),r.d(n,"isSharePointLink",(function(){return s})),r.d(n,"isSharePointServiceGeneratedLink",(function(){return h})),r.d(n,"isOfficeSharePointLink",(function(){return O})),r.d(n,"getParsedQueryStringFromUrl",(function(){return p})),r.d(n,"extractFileUrlFromOfficeSharePointLink",(function(){return w}))}}]);
//# sourceMappingURL=owa.SharePointLinkDetector.js.map
self.scriptsLoaded['owa.SharePointLinkDetector.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.SharePointLinkDetector.js'] = (new Date()).getTime();