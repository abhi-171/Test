self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.184.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[184],{1027:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(824),r=n(671),i=n(667),a=function(e,t){for(var n=0,o=t;n<o.length;n++){var r=o[n];if(!(e=e.get(r)))return}return e},s=function(e,t,n){for(var o=0;o<t.length-1;o++){var r=t[o],i=e.get(r);i||(i=new Map,e.set(r,i)),e=i}e.set(t[t.length-1],n)};function l(e){var t=new Map;return function(n,l){var c=Object(r.d)(),d=Object(o.a)(),u=Object(i.b)();n=n||d||{};var m=(l=l||u).getId(),p="function"==typeof e,f=p?[m,c,n]:[m,c],b=a(t,f);if(!b){var g=p?e(n):e;b=l.renderStyles(g,{targetWindow:c,rtl:!!n.rtl}),s(t,f,b)}return b}}},1028:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(e,t,n){void 0===n&&(n={});var r=!1;if(e)for(var i=0,a=Object.keys(e);i<a.length;i++){var s=a[i];if(!r){if(0===s.indexOf("--"))return e;r=!0}var l=t?t+("default"===s?"":"-"+s):"--"+s,c=e[s];c&&"object"==typeof c?o(c,l,n):n[l]=c}return n}},11833:function(e){e.exports=JSON.parse('{"a":"Rea"}')},11834:function(e,t,n){var o=n(11835),r=n(107);"string"==typeof o&&(o=[[e.i,o]]);for(var i=0;i<o.length;i++)r.loadStyles(o[i][1],!1);o.locals&&(e.exports=o.locals)},11835:function(e,t,n){(t=e.exports=n(106)(!1)).push([e.i,'._3Z9lfoi3k32Mmv3egmTjfA{max-height:80%;overflow:auto}._2XvqW8FQyuMG0IEPDexpXJ{display:none}._2G5yebBO7ppcfaiOMZtiOE:focus{outline:none!important}body.addFocusOutline ._2G5yebBO7ppcfaiOMZtiOE:focus:after{outline:2px solid "[theme:neutralSecondary, default:#605e5c]"!important}._3OHm0-6edIOLrH1IfNyv5P .ms-Dialog-main{min-height:160px}',""]),t.locals={content:"_3Z9lfoi3k32Mmv3egmTjfA",hideSubmitButton:"_2XvqW8FQyuMG0IEPDexpXJ",button:"_2G5yebBO7ppcfaiOMZtiOE",dialogBox:"_3OHm0-6edIOLrH1IfNyv5P"}},1262:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),r=n(1);function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.useCallback((function(t){n.current=t;for(var o=0,r=e;o<r.length;o++){var i=r[o];"function"==typeof i?i(t):i&&(i.current=t)}}),Object(o.__spreadArrays)(e));return n}},1567:function(e,t,n){"use strict";var o=n(469),r=n(963),i=n(12),a={root:"ms-Dialog"};n.d(t,"a",(function(){return s}));var s=Object(o.a)(r.a,(function(e){var t,n=e.className,o=e.containerClassName,r=e.dialogDefaultMinWidth,s=void 0===r?"288px":r,l=e.dialogDefaultMaxWidth,c=void 0===l?"340px":l,d=e.hidden,u=e.theme;return{root:[Object(i.getGlobalClassNames)(a,u).root,u.fonts.medium,n],main:[{width:s,outline:"3px solid transparent",selectors:(t={},t["@media (min-width: "+i.ScreenWidthMinMedium+"px)"]={width:"auto",maxWidth:c,minWidth:s},t)},!d&&{display:"flex"},o]}}),void 0,{scope:"Dialog"});s.displayName="Dialog"},1573:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(55),r={label:o.p,audio:o.b,video:o.z,ol:o.r,li:o.q,a:o.a,button:o.e,input:o.o,textarea:o.w,select:o.t,option:o.s,table:o.u,tr:o.y,th:o.x,td:o.v,colGroup:o.f,col:o.g,form:o.i,iframe:o.l,img:o.n};function i(e,t,n){var i=e&&r[e]||o.k;return Object(o.j)(t,i,n)}},1580:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0),r=n(1),i=n(311),a=function(e){void 0===e&&(e={});var t=Object(o.__spreadArrays)(e.deepMerge||[],["style"]),n=function(e){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];for(var s=0,l=o;s<l.length;s++){var c=l[s];if(c)for(var d=0,u=Object.keys(c);d<u.length;d++){var m=u[d],p=c[m],f=typeof p;void 0!==p&&(p&&"object"===f?Array.isArray(p)?e[m]=p:(e[m]=e[m]||{},"object"!=typeof e[m]||r.isValidElement(p)||p&&"object"==typeof p&&p.hasOwnProperty("current")||-1===t.indexOf(m)?e[m]=p:n(e[m],p)):"className"===m?p&&(e[m]=Object(i.css)(e[m],p)):e[m]=p)}}return e};return n}},1581:function(e,t,n){"use strict";var o=n(1),r=n(1573),i=n(306),a=function(){return null};n.d(t,"a",(function(){return s}));var s=function(e,t){var n={root:e.as||"div"},s={root:"string"==typeof e.as?Object(r.a)(e.as,e):Object(i.e)(e,["as"])};if(t)for(var l=0,c=t;l<c.length;l++){var d=c[l],u=e[d]||{},m=u.as,p=void 0===m?"span":m,f=u.children,b="string"==typeof p,g=b&&void 0===u.children;n[d]=g?a:p,"function"==typeof f?(s[d]={children:f(n[d],Object(i.e)(u,["as","children"]))},n[d]=o.Fragment):n[d]!==a&&(s[d]=b?Object(r.a)(p,u):Object(i.e)(u,["as"]))}return{slots:n,slotProps:s}}},1584:function(e,t,n){"use strict";var o=n(1),r=n(311),i=n(671),a=n(1027),s=n(1028),l=Object(a.a)((function(e){var t,n,o,r,i,a,l,c,d,u,m,p,f,b,g,v,h=e.tokens;return{root:Object(s.a)(h),body:[{color:null===(o=null===(n=null===(t=h)||void 0===t?void 0:t.color)||void 0===n?void 0:n.body)||void 0===o?void 0:o.contentColor,background:null===(a=null===(i=null===(r=h)||void 0===r?void 0:r.color)||void 0===i?void 0:i.body)||void 0===a?void 0:a.background,fontFamily:null===(c=null===(l=h)||void 0===l?void 0:l.body)||void 0===c?void 0:c.fontFamily,fontWeight:null===(u=null===(d=h)||void 0===d?void 0:d.body)||void 0===u?void 0:u.fontWeight,fontSize:null===(p=null===(m=h)||void 0===m?void 0:m.body)||void 0===p?void 0:p.fontSize,MozOsxFontSmoothing:null===(b=null===(f=h)||void 0===f?void 0:f.body)||void 0===b?void 0:b.mozOsxFontSmoothing,WebkitFontSmoothing:null===(v=null===(g=h)||void 0===g?void 0:g.body)||void 0===v?void 0:v.webkitFontSmoothing}]}}));function c(e){var t=l(e.theme,e.renderer),n=e.className,a=e.applyTo;!function(e,t){var n,r="body"===e.applyTo,a=null===(n=Object(i.c)())||void 0===n?void 0:n.body;o.useEffect((function(){if(r&&a){for(var e=0,n=t;e<n.length;e++){var o=n[e];o&&a.classList.add(o)}return function(){if(r&&a)for(var e=0,n=t;e<n.length;e++){var o=n[e];o&&a.classList.remove(o)}}}}),[r,a,t])}(e,[t.root,t.body]),e.className=Object(r.css)(n,t.root,"element"===a&&t.body)}var d=n(0),u=n(1581),m=n(338),p=n(825),f=n(667),b=function(e){var t=Object(u.a)(e),n=t.slots,r=t.slotProps,i=e.theme,a=e.customizerContext;return o.createElement(p.a.Provider,{value:i},o.createElement(f.a.Provider,{value:e.renderer},o.createElement(m.a.Provider,{value:a},o.createElement(n.root,Object(d.__assign)({},r.root)))))},g=n(1580),v=n(598),h=n(824),x=n(262),y=n(599);var O=new Map,C=function(e){var t=e.theme,n=Object(h.a)(),r=e.theme=o.useMemo((function(){var e,o=Object(v.a)(n,t);return o.tokens=function(e,t){var n=e.fonts,o=e.palette,r=e.semanticColors;return Object(y.a)({color:{body:{background:r.bodyBackground,contentColor:r.bodyText},brand:{background:r.primaryButtonBackground,borderColor:r.primaryButtonBorder,contentColor:r.primaryButtonText,iconColor:o.white,dividerColor:o.white,secondaryContentColor:o.white,hovered:{background:r.primaryButtonBackgroundHovered,contentColor:r.primaryButtonTextHovered,secondaryContentColor:o.white,borderColor:"var(--color-brand-borderColor)"},pressed:{background:r.primaryButtonBackgroundPressed,contentColor:r.primaryButtonTextPressed,secondaryContentColor:r.primaryButtonTextPressed,borderColor:"var(--color-brand-borderColor)",iconColor:"var(--color-brand-iconColor)"},focused:{background:"var(--color-brand-background)",borderColor:"var(--color-brand-borderColor)",contentColor:"var(--color-brand-contentColor)",iconColor:"var(--color-brand-iconColor)",secondaryContentColor:"var(--color-brand-focused-contentColor)"},disabled:{background:r.primaryButtonBackgroundDisabled,contentColor:r.buttonTextDisabled,dividerColor:o.neutralTertiaryAlt,secondaryContentColor:"var(--color-brand-disabled-contentColor)",borderColor:"var(--color-brand-disabled-background)",iconColor:"var(--color-brand-disabled-contentColor)"},checked:{background:r.primaryButtonBackgroundPressed,contentColor:r.primaryButtonTextPressed,iconColor:r.primaryButtonTextPressed},checkedHovered:{background:r.primaryButtonBackgroundPressed,contentColor:r.primaryButtonTextPressed,iconColor:r.primaryButtonTextPressed}}},body:{fontFamily:n.medium.fontFamily,fontWeight:n.medium.fontWeight,fontSize:n.medium.fontSize,mozOsxFontSmoothing:n.medium.MozOsxFontSmoothing,webkitFontSmoothing:n.medium.WebkitFontSmoothing},text:{variant:{caption:{fontSize:"12px",fontWeight:"400",lineHeight:"14px"},body:{fontSize:"14px",fontWeight:"400",lineHeight:"20px"},subHeadline:{fontSize:"16px",fontWeight:"600",lineHeight:"22px"},headline:{fontSize:"20px",fontWeight:"600",lineHeight:"28px"},title3:{fontSize:"24px",fontWeight:"600",lineHeight:"32px"},title2:{fontSize:"28px",fontWeight:"600",lineHeight:"36px"},title1:{fontSize:"32px",fontWeight:"600",lineHeight:"40px"},largeTitle:{fontSize:"40px",fontWeight:"600",lineHeight:"52px"},display:{fontSize:"68px",fontWeight:"600",lineHeight:"92px"}}}},t)}(o,null===(e=t)||void 0===e?void 0:e.tokens),o.id=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=[],o=0,r=e;o<r.length;o++){var i=r[o];if(i){var a=i.id||O.get(i);a||(a=Object(x.a)(""),O.set(i,a)),n.push(a)}}return n.join("-")}(n,t),o}),[n,t]);e.customizerContext=o.useMemo((function(){return{customizations:{inCustomizerContext:!0,settings:{theme:r},scopedSettings:r.components||{}}}}),[r]),e.theme.rtl!==n.rtl&&(e.dir=e.theme.rtl?"rtl":"ltr")},j=n(1262),_=Object(g.a)(),T=n(167),k=n(580),D=n(475),S=n(205),N=0,B={reset:function(){T.b.getInstance().onReset((function(){return N++}))},getId:function(){return N},renderStyles:function(e,t){return Object(k.a)(Array.isArray(e)?e:[e],t)},renderFontFace:function(e,t){return Object(D.a)(e)},renderKeyframes:function(e){return Object(S.a)(e)}},P={document:"document"},w=o.createContext({registerStyles:function(e,t){var n=t.styleCache,o=t.target;if(e&&!(e.length<1)){Array.isArray(e)||(e=[e]);var r=[],i=o||P,a=n.get(i);a||(a=new Map,n.set(i,a));for(var s=0,l=e;s<l.length;s++){var c=l[s];a.has(c)||(r.push(c),a.set(c,!0))}r.length&&t.renderStyles(r,t)}},renderStyles:function(e,t){var n=t.target;if(e.length&&n){var o=n.createElement("style");o.textContent=e.join(""),n.head.appendChild(o)}},target:"object"==typeof window?window.document:void 0,styleCache:new WeakMap}),M=n(507);n.d(t,"a",(function(){return E}));var E=o.forwardRef((function(e,t){var n,r,i=function(e,t,n){var r=Object(j.a)(t,o.useRef(null)),i=_({ref:r,as:"div"},n,e);return C(i),{state:i,render:b}}(e,t,{renderer:B,applyTo:"element"}),a=i.render,s=i.state;return n=s.theme.stylesheets,(r=o.useContext(w)).registerStyles(n,r),c(s),Object(M.b)(s.ref),a(s)}));E.displayName="ThemeProvider"},2171:function(e){e.exports=JSON.parse('{"a":"Qea"}')},5959:function(e,t,n){"use strict";var o=n(0),r=n(32),i=n(11833),a=n(620),s=n(2171),l=n(7),c=n(883),d=n(521),u=n(613),m=n(967),p=n(8098),f=n(1),b=n(269),g=n(11834),v=0,h=Object(r.a)((function(e){var t=f.useRef(),n=f.useRef("cancel-"+v++),r=f.useRef("ok-"+v++),b=f.useRef("continue-"+v++),h=Object(o.__read)(f.useState(!1),2),x=h[0],y=h[1],O=function(){var t=e.customizationOptions,o=t.hideCancelButton,i=t.focusOnCancel,a=t.focusSelector;return"ms-Dialog-inner "+(!o&&i?"#"+n.current:a||"#"+r.current)},C=function(){var t,n,o,r,i=e.customizationOptions,a=e.subText,s=e.title;if(s&&(r="string"==typeof s?s:s()),a&&(o="string"==typeof a?a:a()),i){var l=i.okText,c=i.cancelText;l&&(t="string"==typeof l?l:l()),c&&(n="string"==typeof c?c:c())}return{okButtonText:t,subTitle:o,titleText:r,cancelButtonText:n}},j=function(){return _(e.onOkCallback)},_=function(n){var o;n&&((null===(o=e.customizationOptions)||void 0===o?void 0:o.delayCallbackAfterAnimation)?t.current=n:n()),y(!0)},T=e.customizationOptions,k=C(),D=k.subTitle,S=k.okButtonText,N=k.titleText,B=k.cancelButtonText;return f.createElement(p.a,{hidden:x,type:u.a.normal,onDismiss:function(){e.onDismissCallback&&e.onDismissCallback(),e.customizationOptions.preventSoftDismiss||y(!0)},subText:D,title:N,contentClassName:g.content,dialogContentProps:T.dialogContentProps,modalProps:{firstFocusableSelector:O(),onDismissed:function(){t.current&&(t.current(),t.current=null),e.onClose()},containerClassName:T.containerClassName,className:g.dialogBox}},f.createElement("form",{onSubmit:function(e){e.preventDefault(),j()}},T.bodyElement,f.createElement("input",{className:g.hideSubmitButton,type:"submit"})),f.createElement(m.a,null,f.createElement(c.a,{id:r.current,onClick:j,title:T.okToolTip,disabled:"function"==typeof T.shouldDisableOkButton?T.shouldDisableOkButton():T.shouldDisableOkButton,className:g.button},S||Object(l.b)(s.a)),T.showContinueButton?f.createElement(d.a,{id:b.current,onClick:function(){return _(e.onContinueCallback)},title:T.continueToolTip,className:g.button},T.continueText||Object(l.b)(i.a)):null,T.hideCancelButton?null:f.createElement(d.a,{id:n.current,onClick:function(){return _(e.onCancelCallback)},title:T.cancelToolTip,className:g.button},B||Object(l.b)(a.a))))})),x=0;var y=function(e,t,n,o,r,i,a){var s=((null==n?void 0:n.targetWindow)||window).document,l=s.createElement("div");l.id="confirmDialog"+x++,s.body.appendChild(l),b.render(f.createElement(f.StrictMode,null,f.createElement(h,{title:e,subText:t,customizationOptions:n||{},onOkCallback:o,onCancelCallback:r,onDismissCallback:i,onContinueCallback:a,onClose:function(){b.unmountComponentAtNode(l),s.body.removeChild(l)}})),l)},O=n(968);function C(e,t,n,o){return n?Promise.resolve(O.a.ok):new Promise((function(n,r){y(e,t,o,(function(){n(O.a.ok)}),(function(){n(O.a.cancel)}),(function(){n(O.a.dismiss)}),(function(){n(O.a.continue)}))}))}n.d(t,"a",(function(){return C}))},613:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o,r=n(340);n.d(t,"b",(function(){return r.ResponsiveMode})),function(e){e[e.normal=0]="normal",e[e.largeHeader=1]="largeHeader",e[e.close=2]="close"}(o||(o={}))},620:function(e){e.exports=JSON.parse('{"a":"kaa"}')},667:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var o=n(1),r=o.createContext({reset:function(){},getId:function(){return-1},renderStyles:function(e){return{}},renderFontFace:function(){},renderKeyframes:function(){return""}}),i=function(){return o.useContext(r)}},8098:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(0),r=n(1567),i=n(190),a=n(1),s=n(268),l=n(1584),c=n(179);function d(e){var t=function(e){var t,n,r=e.modalProps;if(!Object(s.a)("updateModalProps"))return r;var a=Object(i.a)();if(!a.modalOpened)return r;var l=(null==r?void 0:r.onDismissed)||e.onDismissed,c=(null===(t=null==r?void 0:r.layerProps)||void 0===t?void 0:t.onLayerDidMount)||e.onLayerDidMount||(null===(n=null==r?void 0:r.layerProps)||void 0===n?void 0:n.onLayerMounted)||e.onLayerMounted;return Object(o.__assign)(Object(o.__assign)({},r),{onDismissed:function(){var e;l&&l(),null===(e=a.modalOpened)||void 0===e||e.call(a,!1)},layerProps:Object(o.__assign)(Object(o.__assign)({},null==r?void 0:r.layerProps),{onLayerDidMount:function(){var e;c&&c(),null===(e=a.modalOpened)||void 0===e||e.call(a,!0)}})})}(e);return a.createElement(l.a,{theme:Object(c.c)()},a.createElement(r.a,Object(o.__assign)({},e,{modalProps:t}),e.children))}},824:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(1),r=n(542),i=n(339),a=n(825);var s=function(){var e=Object(o.useContext)(a.a),t=Object(r.a)(["theme"]).theme;return e||t||Object(i.a)({})}},825:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(1),r=o.createContext(void 0)},963:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n(0),r=n(1),i=n(209),a=n(262),s=n(613),l=n(1304),c=n(340),d=n(966),u=Object(i.a)(),m={isDarkOverlay:!1,isBlocking:!1,className:"",containerClassName:"",topOffsetFixed:!1},p={type:s.a.normal,className:"",topButtonsProps:[]},f=function(e){function t(t){var n=e.call(this,t)||this;return n._getSubTextId=function(){var e=n.props,t=e.ariaDescribedById,o=e.modalProps,r=e.dialogContentProps,i=e.subText,a=o&&o.subtitleAriaId||t;return a||(a=(r&&r.subText||i)&&n._defaultSubTextId),a},n._getTitleTextId=function(){var e=n.props,t=e.ariaLabelledById,o=e.modalProps,r=e.dialogContentProps,i=e.title,a=o&&o.titleAriaId||t;return a||(a=(r&&r.title||i)&&n._defaultTitleTextId),a},n._id=Object(a.a)("Dialog"),n._defaultTitleTextId=n._id+"-title",n._defaultSubTextId=n._id+"-subText",n}return Object(o.__extends)(t,e),t.prototype.render=function(){var e,t,n,i,a=this.props,s=a.className,c=a.containerClassName,f=a.contentClassName,b=a.elementToFocusOnDismiss,g=a.firstFocusableSelector,v=a.forceFocusInsideTrap,h=a.styles,x=a.hidden,y=a.ignoreExternalFocusing,O=a.isBlocking,C=a.isClickableOutsideFocusTrap,j=a.isDarkOverlay,_=a.isOpen,T=a.onDismiss,k=a.onDismissed,D=a.onLayerDidMount,S=a.responsiveMode,N=a.subText,B=a.theme,P=a.title,w=a.topButtonsProps,M=a.type,E=a.minWidth,H=a.maxWidth,W=a.modalProps,I=Object(o.__assign)({},W?W.layerProps:{onLayerDidMount:D});D&&!I.onLayerDidMount&&(I.onLayerDidMount=D),W&&W.dragOptions&&!W.dragOptions.dragHandleSelector?(n="ms-Dialog-draggable-header",i=Object(o.__assign)(Object(o.__assign)({},W.dragOptions),{dragHandleSelector:"."+n})):i=W&&W.dragOptions;var z=Object(o.__assign)(Object(o.__assign)(Object(o.__assign)(Object(o.__assign)({},m),{className:s,containerClassName:c,isBlocking:O,isDarkOverlay:j,onDismissed:k}),W),{layerProps:I,dragOptions:i}),F=Object(o.__assign)(Object(o.__assign)(Object(o.__assign)({className:f,subText:N,title:P,topButtonsProps:w,type:M},p),this.props.dialogContentProps),{draggableHeaderClassName:n,titleProps:Object(o.__assign)({id:(null===(e=this.props.dialogContentProps)||void 0===e?void 0:e.titleId)||this._defaultTitleTextId},null===(t=this.props.dialogContentProps)||void 0===t?void 0:t.titleProps)}),A=u(h,{theme:B,className:z.className,containerClassName:z.containerClassName,hidden:x,dialogDefaultMinWidth:E,dialogDefaultMaxWidth:H});return r.createElement(l.a,Object(o.__assign)({elementToFocusOnDismiss:b,firstFocusableSelector:g,forceFocusInsideTrap:v,ignoreExternalFocusing:y,isClickableOutsideFocusTrap:C,onDismissed:z.onDismissed,responsiveMode:S},z,{isDarkOverlay:z.isDarkOverlay,isBlocking:z.isBlocking,isOpen:void 0!==_?_:!x,className:A.root,containerClassName:A.main,onDismiss:T||z.onDismiss,subtitleAriaId:this._getSubTextId(),titleAriaId:this._getTitleTextId()}),r.createElement(d.a,Object(o.__assign)({subTextId:this._defaultSubTextId,title:F.title,subText:F.subText,showCloseButton:z.isBlocking,topButtonsProps:F.topButtonsProps,type:F.type,onDismiss:T||F.onDismiss,className:F.className},F),this.props.children))},t.defaultProps={hidden:!0},t=Object(o.__decorate)([c.withResponsiveMode],t)}(r.Component)},964:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var o=n(0),r=n(1),i=n(209),a=n(310),s=n(445),l=n(311),c=n(613),d=n(703),u=n(967),m=n(340),p=Object(i.a)(),f=r.createElement(u.a,null).type,b="DialogContent",g=function(e){function t(t){var n=e.call(this,t)||this;return Object(a.a)(n),Object(s.a)(b,t,{titleId:"titleProps.id"}),n}return Object(o.__extends)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.showCloseButton,i=t.className,a=t.closeButtonAriaLabel,s=t.onDismiss,u=t.subTextId,m=t.subText,f=t.titleProps,b=void 0===f?{}:f,g=t.titleId,v=t.title,h=t.type,x=t.styles,y=t.theme,O=t.draggableHeaderClassName,C=p(x,{theme:y,className:i,isLargeHeader:h===c.a.largeHeader,isClose:h===c.a.close,draggableHeaderClassName:O}),j=this._groupChildren();return m&&(e=r.createElement("p",{className:C.subText,id:u},m)),r.createElement("div",{className:C.content},r.createElement("div",{className:C.header},r.createElement("div",Object(o.__assign)({id:g,role:"heading","aria-level":1},b,{className:Object(l.css)(C.title,b.className)}),v),r.createElement("div",{className:C.topButton},this.props.topButtonsProps.map((function(e,t){return r.createElement(d.a,Object(o.__assign)({key:e.uniqueId||t},e))})),(h===c.a.close||n&&h!==c.a.largeHeader)&&r.createElement(d.a,{className:C.button,iconProps:{iconName:"Cancel"},ariaLabel:a,onClick:s,title:a}))),r.createElement("div",{className:C.inner},r.createElement("div",{className:C.innerContent},e,j.contents),j.footers))},t.prototype._groupChildren=function(){var e={footers:[],contents:[]};return r.Children.map(this.props.children,(function(t){"object"==typeof t&&null!==t&&t.type===f?e.footers.push(t):e.contents.push(t)})),e},t.defaultProps={showCloseButton:!1,className:"",topButtonsProps:[],closeButtonAriaLabel:"Close"},t=Object(o.__decorate)([m.withResponsiveMode],t)}(r.Component)},965:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(0),r=n(1),i=n(209),a=n(310),s=Object(i.a)(),l=function(e){function t(t){var n=e.call(this,t)||this;return Object(a.a)(n),n}return Object(o.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.styles,o=e.theme;return this._classNames=s(n,{theme:o,className:t}),r.createElement("div",{className:this._classNames.actions},r.createElement("div",{className:this._classNames.actionsRight},this._renderChildrenAsActions()))},t.prototype._renderChildrenAsActions=function(){var e=this;return r.Children.map(this.props.children,(function(t){return t?r.createElement("span",{className:e._classNames.action},t):null}))},t}(r.Component)},966:function(e,t,n){"use strict";var o=n(469),r=n(964),i=n(12),a={contentLgHeader:"ms-Dialog-lgHeader",close:"ms-Dialog--close",subText:"ms-Dialog-subText",header:"ms-Dialog-header",headerLg:"ms-Dialog--lgHeader",button:"ms-Dialog-button ms-Dialog-button--close",inner:"ms-Dialog-inner",content:"ms-Dialog-content",title:"ms-Dialog-title"};n.d(t,"a",(function(){return s}));var s=Object(o.a)(r.a,(function(e){var t,n,o,r=e.className,s=e.theme,l=e.isLargeHeader,c=e.isClose,d=e.hidden,u=e.isMultiline,m=e.draggableHeaderClassName,p=s.palette,f=s.fonts,b=s.effects,g=s.semanticColors,v=Object(i.getGlobalClassNames)(a,s);return{content:[l&&[v.contentLgHeader,{borderTop:"4px solid "+p.themePrimary}],c&&v.close,{flexGrow:1,overflowY:"hidden"},r],subText:[v.subText,f.medium,{margin:"0 0 24px 0",color:g.bodySubtext,lineHeight:"1.5",wordWrap:"break-word",fontWeight:i.FontWeights.regular}],header:[v.header,{position:"relative",width:"100%",boxSizing:"border-box"},c&&v.close,m&&[m,{cursor:"move"}]],button:[v.button,d&&{selectors:{".ms-Icon.ms-Icon--Cancel":{color:g.buttonText,fontSize:i.IconFontSizes.medium}}}],inner:[v.inner,{padding:"0 24px 24px",selectors:(t={},t["@media (min-width: "+i.ScreenWidthMinSmall+"px) and (max-width: "+i.ScreenWidthMaxSmall+"px)"]={padding:"0 16px 16px"},t)}],innerContent:[v.content,{position:"relative",width:"100%"}],title:[v.title,f.xLarge,{color:g.bodyText,margin:"0",minHeight:f.xLarge.fontSize,padding:"16px 46px 20px 24px",lineHeight:"normal",selectors:(n={},n["@media (min-width: "+i.ScreenWidthMinSmall+"px) and (max-width: "+i.ScreenWidthMaxSmall+"px)"]={padding:"16px 46px 16px 16px"},n)},l&&{color:g.menuHeader},u&&{fontSize:f.xxLarge.fontSize}],topButton:[{display:"flex",flexDirection:"row",flexWrap:"nowrap",position:"absolute",top:"0",right:"0",padding:"15px 15px 0 0",selectors:(o={"> *":{flex:"0 0 auto"},".ms-Dialog-button":{color:g.buttonText},".ms-Dialog-button:hover":{color:g.buttonTextHovered,borderRadius:b.roundedCorner2}},o["@media (min-width: "+i.ScreenWidthMinSmall+"px) and (max-width: "+i.ScreenWidthMaxSmall+"px)"]={padding:"15px 8px 0 0"},o)}]}}),void 0,{scope:"DialogContent"})},967:function(e,t,n){"use strict";var o=n(469),r=n(965),i=n(12),a={actions:"ms-Dialog-actions",action:"ms-Dialog-action",actionsRight:"ms-Dialog-actionsRight"};n.d(t,"a",(function(){return s}));var s=Object(o.a)(r.a,(function(e){var t=e.className,n=e.theme,o=Object(i.getGlobalClassNames)(a,n);return{actions:[o.actions,{position:"relative",width:"100%",minHeight:"24px",lineHeight:"24px",margin:"16px 0 0",fontSize:"0",selectors:{".ms-Button":{lineHeight:"normal"}}},t],action:[o.action,{margin:"0 4px"}],actionsRight:[o.actionsRight,{textAlign:"right",marginRight:"-4px",fontSize:"0"}]}}),void 0,{scope:"DialogFooter"})}}]);
//# sourceMappingURL=owa.184.js.map
self.scriptsLoaded['owa.184.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.184.js'] = (new Date()).getTime();