self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~LinkPreview.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[627],{16833:function(e,t,n){"use strict";n.r(t);var r=n(8811);n.d(t,"createLinkPreview",(function(){return r.a}));var i=n(8816);n.d(t,"rehydrateLinkPreview",(function(){return i.a}))},17448:function(e,t,n){"use strict";n.r(t);var r=n(4086),i=n(5409);var o=n(4047),a=n(8811),u=n(8816),l=n(7445),c=n(1877),d=n(25),s=n(32),f=n(1),m=n(269),h=n(34),b=n(703),p=n(7447),v=Object(s.a)((function(e){var t=function(t){h.g.info("Dismiss Video Player"),t.stopPropagation(),e.onClose()};return f.createElement("div",{className:p.videoPlayerBackground,onClick:t},f.createElement("div",{className:p.videoContainer,onClick:y},f.createElement(b.a,{className:p.closeButtonIcon,iconProps:{iconName:"ChromeClose"},onClick:t}),f.createElement("div",{ref:function(t){if(t){t.innerHTML=e.videoPlayerHtml;var n=t.querySelectorAll("iframe");n&&1===n.length&&(n[0].setAttribute("width","800px"),n[0].setAttribute("height","530px"))}}})))})),g=null;function y(e){e.stopPropagation()}var w=n(5047),C=n(1678),E=n(2420),P=700,O="[id^="+o.g+"]",x="[id^="+o.p+"]",j=function(){function e(){var e=this;this.onResize=function(){var t=e.editor&&e.editor.getScrollContainer();t&&(t.clientWidth<P?e.setPreviewSize(l.a.Compact):e.setPreviewSize(l.a.Standard))},this.linkPreviewObjects=[],this.featureEnabled=Object(d.a)().UserOptions.LinkPreviewEnabled}return e.prototype.getName=function(){return"LinkPreview"},e.prototype.initialize=function(e){this.editor=e,c.a.importAndExecute(this.onResize),this.onResize()},e.prototype.dispose=function(){this.linkPreviewObjects=null,this.editor=null,c.c.importAndExecute(this.onResize)},e.prototype.onPluginEvent=function(e){var t,n,a,l,c=this;if(this.featureEnabled)if(15===e.eventType&&e.entity.type==o.k){var d=e.entity,s=d.wrapper,h=d.id,b=s.querySelector(O),p=s.querySelector(x),y=s.querySelector("[id^=LPBorder]");switch(e.operation){case 0:y&&Object(u.a)(y).then((function(e){c.editor&&e&&(c.linkPreviewObjects.push(e),function(e){Object(r.b)(e),e.hasOwnProperty("videoPlayer")&&Object(i.a)(e)}(e))}));break;case 1:var C=null===(t=e.rawEvent)||void 0===t?void 0:t.target;if(b==C||(null==b?void 0:b.contains(C)))null===(n=e.rawEvent)||void 0===n||n.stopPropagation(),(P=this.editor.queryElements("#"+this.getAnchorIdFromEntityId(h))[0])&&(P.id=o.s+h),this.onLinkPreviewRemoved(y);else if(p==C||(null==p?void 0:p.contains(C))){null===(a=e.rawEvent)||void 0===a||a.stopPropagation();var E=this.linkPreviewObjects.filter((function(e){return e.border==y}))[0];(null==E?void 0:E.videoPlayer)&&(l=E.videoPlayer,g||((g=document.createElement("div")).id="BingVideoPlayer",document.body.appendChild(g)),m.render(f.createElement(f.StrictMode,null,f.createElement(v,{videoPlayerHtml:l,onClose:function(){m.unmountComponentAtNode(g)}})),g))}break;case 4:case 5:this.editor.addUndoSnapshot((function(){c.editor.deleteNode(s),e.rawEvent&&(e.rawEvent.preventDefault(),e.rawEvent.stopPropagation())}));break;case 8:null==b||b.parentNode.removeChild(b),null==p||p.parentNode.removeChild(p)}}else if(7===e.eventType){if("AutoLink"===e.source&&e.data&&Object(w.a)(e.data)){var P=e.data;this.generateLinkPreviewBelowAnchor(P)}}else if(10===e.eventType){var j=e.fragment;if((null==j?void 0:j.childNodes)&&1==j.childNodes.length){var I=j.firstElementChild;if(Object(w.a)(I)){P=I;this.generateLinkPreviewBelowAnchor(P)}}}},e.prototype.onLinkPreviewRemoved=function(e){this.editor.contains(e)&&(this.moveCursorBelowElement(e),this.editor.deleteNode(e),this.linkPreviewObjects=this.linkPreviewObjects.filter((function(t){return t.border!=e})))},e.prototype.isImageLink=function(e){var t=e.href;return!!t&&!!t.match(".(bmp|gif|jpe?g|png)$")},e.prototype.onImageLoadedIntoEditor=function(e){var t=e.target;t&&(t.onload=null,t.onerror=null)},e.prototype.onImageError=function(e){var t=e.target;t&&(t.onload=null,t.onerror=null,null!=t.parentNode&&t.parentNode.removeChild(t))},e.prototype.generateLinkPreviewBelowAnchor=function(e){var t=this;this.isImageLink(e)?this.tryInsertImageIntoEditor(e):Object(a.a)(e,!0).then((function(n){n&&t.editor&&(Object(l.b)(n,t.previewSize),t.insertLinkPreviewElementIntoEditor(n.border,e,!0))}))},e.prototype.tryInsertImageIntoEditor=function(e){if(this.editor){var t=this.editor.getDocument().createElement("img");t.onload=this.onImageLoadedIntoEditor,t.onerror=this.onImageError,t.style.maxWidth="100%",t.src=e.href,this.insertLinkPreviewElementIntoEditor(t,e,!1)}},e.prototype.insertLinkPreviewElementIntoEditor=function(e,t,n){var r=this;this.editor.addUndoSnapshot((function(){var i=Object(E.insertEntity)(r.editor,o.k,e,!0,n,new C.Position(t,-1));t.id=r.getAnchorIdFromEntityId(i.id)}),"LinkPreview")},e.prototype.getAnchorIdFromEntityId=function(e){return o.c+e},e.prototype.setPreviewSize=function(e){var t=this;e!=this.previewSize&&(this.previewSize=e,this.linkPreviewObjects&&this.linkPreviewObjects.forEach((function(e){Object(l.b)(e,t.previewSize)})))},e.prototype.moveCursorBelowElement=function(e){this.editor.select(e,-3)},e}();t.default=j},17523:function(e,t,n){"use strict";n.r(t);var r=n(5409);function i(e){e.hasOwnProperty("videoPlayer")&&Object(r.a)(e)}n.d(t,"addInteractiveElementsForReadingPane",(function(){return i}))},198:function(e,t,n){"use strict";var r=n(357),i=n(40);function o(){return Object(i.i)("fwk-suiteThemes")}var a=n(320);function u(){var e,t;return o()?null!==(t=null===(e=Object(a.d)())||void 0===e?void 0:e.Id)&&void 0!==t?t:"base":Object(r.a)()}function l(e,t){var n,i;if(o())return null!==(i=t?null===(n=Object(a.d)())||void 0===n?void 0:n.DarkTheme:Object(a.d)())&&void 0!==i?i:{};var u=Object(r.e)(e,t);return{BackgroundImageUrl:u.primary,BackgroundImageRepeat:u.repeat}}var c=n(89);function d(){if(o()){var e=Object(a.c)();if(Object(c.e)()){var t={};return Object.keys(e).forEach((function(e){t[e]="var(--"+e+")"})),t}return e}return Object(r.f)()}function s(e,t){return o()?Object(a.c)():Object(r.g)(e,t)}var f=n(179),m=n(53);function h(){var e=u(),t=Object(f.e)();return!t&&(e===m.a.BASE_OFFICE_THEME_ID||e==m.a.BASE_THEME_ID&&!Object(c.i)(e,t))}function b(){var e=u(),t=Object(f.e)();return t&&(e===m.a.BASE_OFFICE_THEME_ID||e==m.a.BASE_THEME_ID&&!Object(c.i)(e,t))}n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return"#0078D4"})),n.d(t,"e",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return s})),n.d(t,"g",(function(){return h})),n.d(t,"f",(function(){return b})),n.d(t,"b",(function(){return c.c})),n.d(t,"j",(function(){return c.e})),n.d(t,"l",(function(){return c.g})),n.d(t,"k",(function(){return c.f})),n.d(t,"c",(function(){return c.d}))},2093:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(44),i=new r.c((function(){return n.e(916).then(n.bind(null,2984))})),o=new r.b(i,(function(e){return e.extractFileUrlFromOfficeSharePointLink})),a=new r.b(i,(function(e){return e.isLinkPrefixedWithBaseUrl})),u=new r.b(i,(function(e){return e.isSharePointLink})),l=new r.b(i,(function(e){return e.isSharePointServiceGeneratedLink})),c=new r.b(i,(function(e){return e.isOfficeSharePointLink})),d=new r.b(i,(function(e){return e.getParsedQueryStringFromUrl}))},299:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(4),i=n(37);function o(){var e,t=Object(i.a)("DefaultAnchorMailbox");return null==t||0==t.trim().length||(e=Object(r.b)(window.location),Object.keys(e).indexOf("anonRetry")>=0)}function a(){var e=Object(r.b)(window.location);return Object.keys(e).indexOf("anonymous")>=0}},4047:function(e,t,n){"use strict";n.d(t,"s",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"i",(function(){return l})),n.d(t,"m",(function(){return c})),n.d(t,"l",(function(){return d})),n.d(t,"n",(function(){return s})),n.d(t,"q",(function(){return f})),n.d(t,"r",(function(){return m})),n.d(t,"o",(function(){return h})),n.d(t,"j",(function(){return b})),n.d(t,"h",(function(){return p})),n.d(t,"g",(function(){return v})),n.d(t,"p",(function(){return g})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return w})),n.d(t,"k",(function(){return C})),n.d(t,"u",(function(){return E})),n.d(t,"t",(function(){return P}));var r="LPNoLP",i="LPlnk",o="LPBorder",a="GT",u="BVT",l="LPContainer",c="LPImageContainer",d="LPImageAnchor",s="LPThumbnailImageId",f="LPTitle",m="LPUrlAnchor",h="LPMetadata",b="LPDescription",p="LPCloseButton",v="LPCloseButtonContainer",g="LPPlayButton",y="BingRTPLinkPreview:#Exchange",w="BingVideoLinkPreview:#Exchange",C="OWALinkPreview";function E(){return Math.floor(1e5+9e5*Math.random()).toString()}function P(e,t){return t+((n=e)&&n.slice(-6));var n}},4086:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return s}));var r,i=n(8812),o=n(7),a=n(4047),u=n(12),l=n(8813),c=n(213);function d(e,t){var n,r=window.btoa(t.url);r=(r=(r=r.replace(new RegExp("\\+","g"),"-")).replace(new RegExp("/","g"),":")).replace(new RegExp("=","g"),"."),t.border=document.createElement("div"),t.border.id=a.d+"_"+e+r,t.border.className=a.d+a.u(),(n=t.border).style.width="100%",n.style.marginTop="16px",n.style.marginBottom="16px",n.style.position="relative",n.style.maxWidth="800px",n.style.minWidth="424px"}function s(e){e.closeButtonContainer=document.createElement("div"),e.closeButtonContainer.id=a.t(e.border.className,a.g),e.closeButtonContainer.className=l.closeButtonContainer,e.closeButtonContainer.tabIndex=0,e.closeButtonContainer.title=Object(o.b)(i.a),e.closeButtonContainer.setAttribute("role","button");var t=document.createElement("span");t.id=a.t(e.border.className,a.h),t.className=c(l.icon,Object(u.getIconClassName)("Cancel")),e.closeButtonContainer.appendChild(t),e.border.appendChild(e.closeButtonContainer)}!function(e){e[e.WebpagePreview=0]="WebpagePreview",e[e.VideoPreview=1]="VideoPreview"}(r||(r={}))},4690:function(e,t,n){"use strict";var r=n(28),i=n(0);function o(e,t){var n;return void 0===e.getLinkPreviewRequest||e.getLinkPreviewRequest.__type||(e.getLinkPreviewRequest=(n=e.getLinkPreviewRequest,Object(i.__assign)({__type:"GetLinkPreviewRequest:#Exchange"},n))),Object(r.a)("GetLinkPreview",e,t)}n.d(t,"a",(function(){return o}))},4981:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return v})),n.d(t,"a",(function(){return y}));var r=n(0),i=n(4086),o=n(4047),a=n(7445),u=n(198),l=n(34),c=160,d=240,s=d/c,f=160,m=106,h=160;function b(e,t,n){var r={type:i.a.WebpagePreview,description:e.Description,title:e.Title,url:e.Url,thumbnailImageUrl:e.ImageUrl,anchor:t};return Object(i.c)(o.f,r),y(r,n),r}function p(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t,n,a,u,l,c,d,s,f;return Object(r.__generator)(this,(function(r){return e.style.position="relative",t=g(e,o.i),n=g(e,o.m),a=g(e,o.l),u=g(e,o.n),l=g(e,o.q),c=g(e,o.r),d=g(e,o.o),s=g(e,o.j),(f={border:e,type:i.a.WebpagePreview,description:s?s.innerHTML:null,title:c?c.innerText:null,url:c?c.href:null,thumbnailImageUrl:u?u.src:null,table:t,thumbnailImageContainer:n,thumbnailImageAnchor:a,thumbnailImageElement:u,titleContainer:l,titleUrlAnchor:c,metadataContainer:d,descriptionContainer:s}).thumbnailImageContainer&&(f.thumbnailImageContainer.style.position="relative"),[2,Promise.resolve(f)]}))}))}function v(e,t){var n;(null===(n=e.thumbnailImageElement)||void 0===n?void 0:n.naturalWidth)&&w(e.thumbnailImageElement,e.thumbnailImageContainer,t)}function g(e,t){var n=e.querySelectorAll("[id^="+t+"]");return n&&n.length>0?n[0]:null}function y(e,t){!function(e){e.table=document.createElement("table"),e.table.id=o.t(e.border.className,o.i),e.table.setAttribute("role","presentation"),e.border.appendChild(e.table)}(e);var n=document.createElement("tr");if(n.vAlign="top",n.style.borderSpacing="0px",e.table.appendChild(n),function(e,t){e.style.padding="12px",e.style.width="100%",e.style.borderWidth="1px",e.style.borderStyle="solid",e.style.borderColor="#c8c8c8",e.style.borderRadius="2px",t&&(e.style.paddingRight="36px")}(e.table,t),e.thumbnailImageUrl){var r=document.createElement("td");n.appendChild(r),function(e,t,n){t.thumbnailImageContainer=document.createElement("div"),t.thumbnailImageContainer.id=o.t(t.border.className,o.m),r=t.thumbnailImageContainer,r.style.position="relative",r.style.marginRight="12px",r.style.height="160px",r.style.overflow="hidden",t.thumbnailImageAnchor=document.createElement("a"),C(t.thumbnailImageAnchor,n),t.thumbnailImageAnchor.id=o.t(t.border.className,o.l),t.thumbnailImageAnchor.href=t.url,t.thumbnailImageElement=document.createElement("img"),t.thumbnailImageElement.id=o.t(t.border.className,o.n),t.thumbnailImageElement.alt="",function(e,t,n,r){t.complete&&0!==t.naturalWidth?w(t,n,r):(t.style.display="none",t.src=e,w(t,n,a.a.Default),t.onload=function(e){w(e.target,n,r),t.style.display="block"},t.onerror=function(e){l.g.warn("Error loading image for link preview")})}(t.thumbnailImageUrl,t.thumbnailImageElement,t.thumbnailImageContainer,a.a.Standard),t.thumbnailImageAnchor.appendChild(t.thumbnailImageElement),t.thumbnailImageContainer.appendChild(t.thumbnailImageAnchor),e.appendChild(t.thumbnailImageContainer);var r}(r,e,t)}var i=document.createElement("td");i.style.width="100%",e.title&&function(e,t,n){t.titleContainer=document.createElement("div"),t.titleContainer.id=o.t(t.border.className,o.q),i=t.titleContainer,i.style.fontSize="21px",i.style.fontWeight="300",i.style.marginRight="40px",i.style.fontFamily='"wf_segoe-ui_light","Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif',i.style.marginBottom="12px",i.style.marginRight="8px",t.titleUrlAnchor=document.createElement("a"),C(t.titleUrlAnchor,n),t.titleUrlAnchor.id=o.t(t.border.className,o.r),t.titleUrlAnchor.href=t.url,t.titleUrlAnchor.text=t.title,r=t.titleUrlAnchor,r.style.textDecoration="none",r.style.color=Object(u.h)().themePrimary,t.titleContainer.appendChild(t.titleUrlAnchor),e.appendChild(t.titleContainer);var r;var i}(i,e,t),e.description&&function(e,t){t.descriptionContainer=document.createElement("div"),t.descriptionContainer.textContent=t.description,t.descriptionContainer.id=o.t(t.border.className,o.j),n=t.descriptionContainer,n.style.fontSize="14px",n.style.maxHeight="100px",n.style.color="#666666",n.style.fontFamily='"wf_segoe-ui_normal","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif',n.style.marginBottom="12px",n.style.marginRight="8px",n.style.overflow="hidden",e.appendChild(t.descriptionContainer);var n}(i,e),function(e,t){t.metadataContainer=document.createElement("div"),t.metadataContainer.textContent=t.titleUrlAnchor.hostname,t.metadataContainer.id=o.t(t.border.className,o.o),n=t.metadataContainer,n.style.fontSize="14px",n.style.fontWeight="400",n.style.color="#a6a6a6",n.style.fontFamily='"wf_segoe-ui_normal","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif',e.appendChild(t.metadataContainer);var n}(i,e),n.appendChild(i)}function w(e,t,n){if(n!==a.a.Default){var r,i,o,u;switch(n){case a.a.Standard:i=d,r=c;break;case a.a.Compact:i=h,r=m}var l=e.naturalWidth>0&&e.naturalHeight>0?e.naturalWidth/e.naturalHeight:s;e.naturalWidth==e.naturalHeight?(u=r,o=r):e.naturalWidth>e.naturalHeight?(u=i,o=i/l,t.style.width=i+"px",t.style.height=o+"px"):(u=r*l,o=r,t.style.width=i+"px",t.style.height=o+"px"),e.width=u,e.height=o}else e.height=f}function C(e,t){t&&(e.onmouseenter=function(){e.removeAttribute("title")}),e.target="_blank"}},5047:function(e,t,n){"use strict";var r=n(2210),i=n.n(r);function o(e){return i()(e,"HTMLAnchorElement")}function a(e){return i()(e,"HTMLElement")}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}))},5409:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return b}));var r=n(0),i=n(4086),o=n(4047),a=n(4981),u=n(7446),l=n(12),c=n(7447),d=n(213),s="rehydrate";function f(e,t,n){var r={type:i.a.VideoPreview,description:e.Description,title:e.Title,url:e.Url,thumbnailImageUrl:e.ImageUrl,anchor:t,videoUrl:e.Url,videoPlayer:e.EmbeddedHtml,motionThumbnail:e.MotionThumbnailUrl};return Object(i.c)(o.e,r),Object(a.a)(r,n),r}function m(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return[4,Object(a.c)(e)];case 1:return(t=n.sent()).type=i.a.VideoPreview,t.videoUrl=t.url,t.videoPlayer=null,t.motionThumbnail=null,t.playVideoButtonContainer=null,t.thumbnailImageContainer&&(t.thumbnailImageContainer.style.position="relative"),[2,Object(u.a)(t.videoUrl,s).then((function(e){var n;return(null===(n=e.LinkPreview)||void 0===n?void 0:n.__type)==o.b&&(t.videoPlayer=e.LinkPreview.EmbeddedHtml),t}))]}}))}))}function h(e){var t=document.createElement("span");t.className=d([c.playButtonIcon,Object(l.getIconClassName)("Play")]),e.playVideoButtonContainer=document.createElement("div"),e.playVideoButtonContainer.id=o.t(e.border.className,o.p),e.playVideoButtonContainer.className=c.playButtonContainer,e.playVideoButtonContainer.appendChild(t),e.thumbnailImageContainer.appendChild(e.playVideoButtonContainer)}function b(e,t){Object(a.d)(e,t)}},717:function(e,t,n){"use strict";var r,i=n(720),o=n(3),a=Object(o.createStore)("nonBootUserConfiguration",{nonBootUserConfiguration:null})(),u=n(299),l=Object(o.mutatorAction)("setNonBootUserConfiguration",(function(e){a.nonBootUserConfiguration=e}));function c(){return Object(u.b)()?Promise.resolve({}):a.nonBootUserConfiguration?Promise.resolve(a.nonBootUserConfiguration):(r||(r=Object(i.a)().then((function(e){return l(e),e})).catch((function(e){throw r=void 0,e}))),r)}var d=c;function s(){return a.nonBootUserConfiguration||c(),a.nonBootUserConfiguration}function f(){var e=(s()||{}).IsEdu;return void 0!==e&&e}function m(){var e=(s()||{}).ExternalInOutlookEnabled;return void 0!==e&&e}n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return m}))},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(28);function i(e){return Object(r.a)("GetOwaNonBootUserConfiguration",{},e)}},7445:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}));var r,i=n(4086),o=n(5409),a=n(4981);function u(e,t){if(e)switch(e.type){case i.a.WebpagePreview:return Object(a.d)(e,t);case i.a.VideoPreview:return Object(o.d)(e,t)}}!function(e){e[e.Standard=0]="Standard",e[e.Compact=1]="Compact",e[e.Default=2]="Default"}(r||(r={}))},7446:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),i=n(4690);function o(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n;return Object(r.__generator)(this,(function(r){return n=function(e,t){return{Url:e,Id:t}}(e,t),[2,Object(i.a)({getLinkPreviewRequest:n})]}))}))}},7447:function(e,t,n){var r=n(8815),i=n(107);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!1);r.locals&&(e.exports=r.locals)},8811:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),i=n(4047),o=n(4981),a=n(5409),u=n(7446),l=n(34),c=n(2093);function d(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n,d;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return n=null,0!==e.id.indexOf(i.c)&&0!==e.id.indexOf(i.s)?[3,1]:[3,4];case 1:return[4,c.e.import()];case 2:return r.sent()(e.href)?[2,n]:(e.id&&e.id.length>0?e.id=i.c+e.id:e.id=i.c+i.u(),[4,Object(u.a)(e.href,e.id)]);case 3:(d=r.sent())?n=function(e,t,n){if(e.Error)l.g.info("GetLinkPreview returned error response: "+e.Error);else if(!e.IsDisabled)return function(e,t,n){if(e)switch(e.__type){case i.a:return Object(o.b)(e,t,n);case i.b:return Object(a.b)(e,t,n)}return null}(e.LinkPreview,t,n);return null}(d,e,t):l.d("No response for getLinkPreview request with id: "+e.id),r.label=4;case 4:return[2,n]}}))}))}},8812:function(e){e.exports=JSON.parse('{"a":"m$a"}')},8813:function(e,t,n){var r=n(8814),i=n(107);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!1);r.locals&&(e.exports=r.locals)},8814:function(e,t,n){(t=e.exports=n(106)(!1)).push([e.i,'._2G1t7TsffMpTdsxcutbAaz{position:absolute;width:32px;height:32px;top:4px;cursor:pointer;pointer-events:all}html[dir] ._2G1t7TsffMpTdsxcutbAaz{text-align:center}html[dir=ltr] ._2G1t7TsffMpTdsxcutbAaz{right:4px}html[dir=rtl] ._2G1t7TsffMpTdsxcutbAaz{left:4px}._2G1t7TsffMpTdsxcutbAaz:hover ._17cZVF34hdKub7ce2cOnAW{color:"[theme:neutralPrimary, default:#323130]"}._17cZVF34hdKub7ce2cOnAW{font-size:17px;font-weight:300;color:"[theme:neutralSecondary, default:#605e5c]";position:relative;display:block;line-height:32px;pointer-events:none}html[dir] ._17cZVF34hdKub7ce2cOnAW{margin:auto}',""]),t.locals={closeButtonContainer:"_2G1t7TsffMpTdsxcutbAaz",icon:"_17cZVF34hdKub7ce2cOnAW"}},8815:function(e,t,n){(t=e.exports=n(106)(!1)).push([e.i,'.A2S5YFyxbb6bJVzndk8Nx{position:relative;display:block;color:"[theme:white, default:#ffffff]";line-height:30px;font-size:24px;pointer-events:none}html[dir] .A2S5YFyxbb6bJVzndk8Nx{margin:auto;text-align:center}.A2S5YFyxbb6bJVzndk8Nx:hover{color:"[theme:neutralSecondary, default:#605e5c]"}.jmB2bBZZdRmb2Uqcoc-VE{position:absolute;top:0;bottom:0;width:30px;height:30px;cursor:pointer}html[dir] .jmB2bBZZdRmb2Uqcoc-VE{margin:auto;border-radius:50%;border-color:"[theme:white, default:#ffffff]";border-width:2px;border-style:solid}html[dir=ltr] .jmB2bBZZdRmb2Uqcoc-VE,html[dir=rtl] .jmB2bBZZdRmb2Uqcoc-VE{right:0;left:0}.jmB2bBZZdRmb2Uqcoc-VE:hover{color:"[theme:neutralSecondary, default:#605e5c]"}html[dir] .jmB2bBZZdRmb2Uqcoc-VE:hover{background-color:"[theme:blackTranslucent40, default:rgba(0, 0, 0, .4)]"}._23lC86I4ZY7S0mZ0vxfEjR{position:absolute;top:0;width:100%;height:100%}html[dir] ._23lC86I4ZY7S0mZ0vxfEjR{background-color:"[theme:blackTranslucent40, default:rgba(0, 0, 0, .4)]"}html[dir=ltr] ._23lC86I4ZY7S0mZ0vxfEjR{left:0}html[dir=rtl] ._23lC86I4ZY7S0mZ0vxfEjR{right:0}._2WkuJE1WDGpXPnmMF6N5Om{position:absolute;top:0;bottom:0;width:800px;height:530px}html[dir] ._2WkuJE1WDGpXPnmMF6N5Om{margin:auto;background-color:"[theme:black, default:#000000]"}html[dir=ltr] ._2WkuJE1WDGpXPnmMF6N5Om,html[dir=rtl] ._2WkuJE1WDGpXPnmMF6N5Om{right:0;left:0}._10gfNYx87CSaS0i-Aas05b{position:absolute;top:10px;color:"[theme:neutralQuaternary, default:#d2d0ce]"}html[dir=ltr] ._10gfNYx87CSaS0i-Aas05b{right:10px}html[dir=rtl] ._10gfNYx87CSaS0i-Aas05b{left:10px}._10gfNYx87CSaS0i-Aas05b:hover{color:"[theme:neutralTertiary, default:#a19f9d]"}',""]),t.locals={playButtonIcon:"A2S5YFyxbb6bJVzndk8Nx",playButtonContainer:"jmB2bBZZdRmb2Uqcoc-VE",videoPlayerBackground:"_23lC86I4ZY7S0mZ0vxfEjR",videoContainer:"_2WkuJE1WDGpXPnmMF6N5Om",closeButtonIcon:"_10gfNYx87CSaS0i-Aas05b"}},8816:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),i=n(4047),o=n(4981),a=n(5409);function u(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){if(0===e.id.indexOf(i.d))switch(n=e.id,r=n.split("_"),r&&r.length>1&&0===r[1].indexOf(i.f)?i.f:0===r[1].indexOf(i.e)?i.e:null){case i.f:return[2,Object(o.c)(e)];case i.e:return[2,Object(a.c)(e)]}var n,r;return[2,Promise.reject("div did not match a known link preview type")]}))}))}}}]);
//# sourceMappingURL=owa.MailBoot~LinkPreview.js.map
self.scriptsLoaded['owa.MailBoot~LinkPreview.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~LinkPreview.js'] = (new Date()).getTime();