self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~EmbeddedNotes~GroupAddMemberV2~GroupAddMembersV2Opx~GroupList~MailFolderTreesParent~MailFol~e26049c2.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[77],{1659:function(e,r,t){"use strict";var a={alert:"alert",alertdialog:"alertdialog",application:"application",article:"article",banner:"banner",button:"button",cell:"cell",checkbox:"checkbox",columnheader:"columnheader",combobox:"combobox",complementary:"complementary",contentinfo:"contentinfo",definition:"definition",dialog:"dialog",directory:"directory",document:"document",feed:"feed",figure:"figure",form:"form",grid:"grid",gridcell:"gridcell",group:"group",heading:"heading",img:"img",link:"link",list:"list",listbox:"listbox",listitem:"listitem",log:"log",main:"main",marquee:"marquee",math:"math",menu:"menu",menubar:"menubar",menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio",navigation:"navigation",note:"note",option:"option",presentation:"presentation",progressbar:"progressbar",radio:"radio",radiogroup:"radiogroup",region:"region",row:"row",rowgroup:"rowgroup",rowheader:"rowheader",scrollbar:"scrollbar",search:"search",searchbox:"searchbox",separator:"separator",slider:"slider",spinbutton:"spinbutton",status:"status",switch:"switch",tab:"tab",table:"table",tablist:"tablist",tabpanel:"tabpanel",term:"term",textbox:"textbox",timer:"timer",toolbar:"toolbar",tooltip:"tooltip",tree:"tree",treegrid:"treegrid",treeitem:"treeitem"},o=0;function i(e){return void 0===e&&(e="id"),""+e+o++}function n(e){return Array.isArray(e)?e.join(" "):e}function l(e){if(!e)return null;for(var r={},t=Object.keys(e),a=0;a<t.length;a++){switch(t[a]){case"role":r.role=e.role;break;case"id":r.id=e.id;break;case"activeDescendant":r["aria-activedescendant"]=e.activeDescendant;break;case"atomic":r["aria-atomic"]=e.atomic;break;case"autocomplete":r["aria-autocomplete"]=e.autocomplete;break;case"busy":r["aria-busy"]=e.busy;break;case"checked":r["aria-checked"]=e.checked;break;case"controls":r["aria-controls"]=n(e.controls);break;case"describedBy":r["aria-describedby"]=n(e.describedBy);break;case"disabled":r["aria-disabled"]=e.disabled;break;case"dropEffect":r["aria-dropeffect"]=n(e.dropEffect);break;case"expanded":r["aria-expanded"]=e.expanded;break;case"flowTo":r["aria-flowto"]=n(e.flowTo);break;case"grabbed":r["aria-grabbed"]=e.grabbed;break;case"hasPopup":r["aria-haspopup"]=e.hasPopup;break;case"hidden":r["aria-hidden"]=e.hidden;break;case"invalid":r["aria-invalid"]=e.invalid;break;case"label":r["aria-label"]=e.label;break;case"labelledBy":r["aria-labelledby"]=n(e.labelledBy);break;case"level":r["aria-level"]=e.level;break;case"live":r["aria-live"]=e.live;break;case"multiline":r["aria-multiline"]=e.multiline;break;case"multiselectable":r["aria-multiselectable"]=e.multiselectable;break;case"orientation":r["aria-orientation"]=e.orientation;break;case"owns":r["aria-owns"]=n(e.owns);break;case"positionInSet":r["aria-posinset"]=e.positionInSet;break;case"pressed":r["aria-pressed"]=e.pressed;break;case"readonly":r["aria-readonly"]=e.readonly;break;case"relevant":r["aria-relevant"]=n(e.relevant);break;case"required":r["aria-required"]=e.required;break;case"selected":r["aria-selected"]=e.selected;break;case"setSize":r["aria-setsize"]=e.setSize;break;case"sort":r["aria-sort"]=e.sort;break;case"valueMax":r["aria-valuemax"]=e.valueMax;break;case"valueMin":r["aria-valuemin"]=e.valueMin;break;case"valueNow":r["aria-valuenow"]=e.valueNow;break;case"valueText":r["aria-valuetext"]=e.valueText}}return r}t.d(r,"a",(function(){return a})),t.d(r,"c",(function(){return i})),t.d(r,"b",(function(){return l}))},1958:function(e,r,t){"use strict";var a=t(0),o=t(32),i=t(1),n=t(1819),l=t(1659),d=t(348),s=t(703),c=t(2045),h=t(4370),_=t(203),m=t(85),p=t(40),g=t(2397),x=t(271),u=t(5116),b=t(402).bind(u);r.a=Object(o.a)((function(e){var r=i.useRef(),t=Object(p.i)("mon-tri-leftNavChanges"),o=Object(p.i)("mon-tri-leftNavFolderIcons"),I=Object(p.i)("mon-densities")&&Object(p.i)("mon-tri-folderDensityChange")&&o,f=Object(m.d)(),S=Object(c.a)(x.a.Mail)&&!Object(p.i)("tri-officeRail"),v=e.onRenderCustomIcon||function(r){return i.createElement(d.a,{className:r,iconName:e.customIcon||"FabricFolder"})};Object(n.c)(r,"right",(function(r){var t=e.chevronProps;(null==t?void 0:t.onClick)&&!t.isExpanded&&t.onClick(r)})),Object(n.c)(r,"left",(function(r){var t=e.chevronProps;(null==t?void 0:t.onClick)&&t.isExpanded&&t.onClick(r)}));var w,N=function(r){if(e.chevronProps&&!r)return q();var t=b(u.icon,e.customIconClassName,!S&&u.leftNavIconExtraPadding,r&&u.favoriteStar);return e.onRenderCustomIcon||e.customIcon?v(t):k()},k=function(){return i.createElement(d.a,{className:b(u.icon,"visibilityHidden",t&&o&&R&&u.monarchRootFolderAlignment,!S&&u.leftNavIconExtraPadding)})},q=function(){var r=e.chevronProps.isExpanded?"ChevronDownMed":"ChevronRightMed",n=b(u.icon,!I&&u.oldDensityFontSize,I&&u.overridenIconFontSize,o&&u.leftNavPadding,f,!e.isRootNode&&u.regularNodeChevronIcon,!S&&u.leftNavIconExtraPadding,e.chevronProps.iconClassName,"flipForRtl");return i.createElement(s.a,Object(a.__assign)({"data-is-focusable":!1,tabIndex:-1,className:!(t&&e.isRootNode)&&b(I&&f,o&&u.chevronWithFolderIcon,o&&t&&u.monarchChevronPadding,u.chevronIcon,!S&&!o&&u.leftNavChevronExtraPadding,e.chevronProps.iconButtonClassName),iconProps:{iconName:r,styles:{root:n}},onClick:e.chevronProps.onClick?function(r){return e.chevronProps.onClick(r)}:null},Object(l.b)({role:"button",hidden:!0})))},G=e.isCustomActionNode,C=e.isDroppedOver,P=e.isSelected,O=e.showAsHoverOnDroppedOver,y=e.isBeingDragged,X=e.isWithContextMenuOpen,Y=e.isCursorDisabled,R=e.isRootNode,Z=e.chevronProps,T=e.depth,L=e.onClick,K=e.onKeyDown,M=e.onContextMenu,H=e.onMouseEnter,F=e.onTouchStart,D=e.onTouchEnd,z=e.displayName,j=e.renderCustomTreeNodeDisplay,Q=e.renderRightCharm,B=e.renderRightCharmHover,W=e.isinSharedFolderTree,E=b(R?u.rootNode:u.regularNode,f,(I||t)&&u.densityNodeHeights,{showAsHoverOnDroppedOver:C&&O,showBorderOnDroppedOver:C&&!O,isBeingDragged:y,customActionNode:u.overridenFont&&G,selected:P,withContextMenuOpen:X,disabledCursor:Y}),V=b(u.displayName,(I||t)&&u.densityFontSizes,f,{selected:P},!S&&!o&&u.leftNavDisplayNameExtraPadding,o&&R&&u.allFolderIconsRootText),A={role:l.a.treeitem,expanded:Z?Z.isExpanded:void 0,selected:R?void 0:P,level:null==T?R?1:2:T+1,setSize:e.setSize,positionInSet:e.positionInSet,label:e.ariaLabel},U=T?Object(h.b)(T):0,J=S?U+6+"px":U+"px",$=Object(h.a)(),ee=Object(_.a)()?{paddingRight:t&&o&&R?"10px":J,paddingLeft:t&&R?"20px":$}:{paddingLeft:t&&o&&R?"10px":J,paddingRight:t&&R?"20px":$},re=Object(p.i)("mon-tri-unreadCountBadgeWithBackground"),te=b(re&&o&&u.alternativeBadgeHeight,u.rightCharm,t&&!W&&u.hoverTreatmentPresent,t&&u.monarchHoverPadding,B&&!re&&u.hoverTreatmentPresent);return i.createElement("div",Object(a.__assign)({ref:r,style:ee,onClick:L,onKeyDown:K,onContextMenu:M,onMouseEnter:H,onTouchStart:F,onTouchEnd:D,className:E,"data-is-focusable":!0,title:z},Object(l.b)(A)),!R&&o?function(){var r=[];e.chevronProps&&r.push(q());var a=r.length,o=b(a>0&&u.folderWithChevron,u.icon,f,t&&u.densityFontSizes,!I&&u.customIcon,G&&"visibilityHidden",e.customIconClassName,!S&&u.leftNavAllFoldersPadding,0==a&&t&&u.monarchFolderPadding);return r.push(v(o)),i.createElement("div",{className:u.folderIcons},r)}():R&&t?N(!0):N(),j?j(V):(w=V,i.createElement("span",{className:w},e.displayName)),t&&R&&N(),Q&&i.createElement("span",{className:te},Q()),t?e.toggleFavorite&&!W&&i.createElement(g.a,{isStarred:e.isFavorited,onClick:e.toggleFavorite,tooltipStyles:u.rightCharmHover,buttonStyles:u.starCharm,iconStyles:u.starCharm,isInFolderPane:!0}):!re&&B&&i.createElement("span",{className:u.rightCharmHover},B()))}))},4370:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"a",(function(){return i}));var a=t(40);function o(e){var r=Object(a.i)("mon-tri-leftNavFolderIcons")?21:8;return Math.max(0,e-1)*r}function i(){return"28px"}},5116:function(e,r,t){var a=t(5117),o=t(107);"string"==typeof a&&(a=[[e.i,a]]);for(var i=0;i<a.length;i++)o.loadStyles(a[i][1],!1);a.locals&&(e.exports=a.locals)},5117:function(e,r,t){(r=e.exports=t(106)(!1)).push([e.i,'._1XmKWz3L5NcheRkx38wxTL.qDw7SZ9r6S7r0_qZS1aIG,.LHVU-jfsAlddLjF0-GxcE._1XmKWz3L5NcheRkx38wxTL{height:40px}._2AZjn9RFetXcCNSCt0BqEI.qDw7SZ9r6S7r0_qZS1aIG,.LHVU-jfsAlddLjF0-GxcE._2AZjn9RFetXcCNSCt0BqEI{height:36px}._21GIf9eXgdq_YZiQrKnLYC.qDw7SZ9r6S7r0_qZS1aIG,.LHVU-jfsAlddLjF0-GxcE._21GIf9eXgdq_YZiQrKnLYC{height:28px}html[dir] .PtXct_-3bGufYWyRczlyP{padding-bottom:8px}._1IolX_6rKX93IRLO1O_oCP{width:36px;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;color:"[theme:neutralSecondary, default:#605e5c]"}html[dir=ltr] ._1IolX_6rKX93IRLO1O_oCP.FBeXwG38P_G9gNYkGobn0{padding-left:8px}html[dir=rtl] ._1IolX_6rKX93IRLO1O_oCP.FBeXwG38P_G9gNYkGobn0{padding-right:8px}._1IolX_6rKX93IRLO1O_oCP.SiBv31IfzVFl2WodUyTbP,._1IolX_6rKX93IRLO1O_oCP._13lKBm0UHfNFtIHakRqB7e._1XmKWz3L5NcheRkx38wxTL{font-size:10px}html[dir=ltr] ._1IolX_6rKX93IRLO1O_oCP._13lKBm0UHfNFtIHakRqB7e._1XmKWz3L5NcheRkx38wxTL{padding-left:8px}html[dir=rtl] ._1IolX_6rKX93IRLO1O_oCP._13lKBm0UHfNFtIHakRqB7e._1XmKWz3L5NcheRkx38wxTL{padding-right:8px}._1IolX_6rKX93IRLO1O_oCP._13lKBm0UHfNFtIHakRqB7e._21GIf9eXgdq_YZiQrKnLYC,._1IolX_6rKX93IRLO1O_oCP._13lKBm0UHfNFtIHakRqB7e._2AZjn9RFetXcCNSCt0BqEI{font-size:8px}html[dir] ._1IolX_6rKX93IRLO1O_oCP._13lKBm0UHfNFtIHakRqB7e._21GIf9eXgdq_YZiQrKnLYC{margin-top:3px}html[dir=ltr] ._1IolX_6rKX93IRLO1O_oCP._13lKBm0UHfNFtIHakRqB7e._21GIf9eXgdq_YZiQrKnLYC{padding-left:14px}html[dir=rtl] ._1IolX_6rKX93IRLO1O_oCP._13lKBm0UHfNFtIHakRqB7e._21GIf9eXgdq_YZiQrKnLYC{padding-right:14px}._1IolX_6rKX93IRLO1O_oCP._1OPSsVxfk_GWTnwo-KIMYX{width:48px}._1IolX_6rKX93IRLO1O_oCP._2zlt3SLuvIQDoQ1h0EtDLG{width:5px}._3ro6VpUsGKbJLq-qGxzhp0{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}html[dir] ._3ro6VpUsGKbJLq-qGxzhp0{margin:0 2px;background-color:transparent}._3ro6VpUsGKbJLq-qGxzhp0 ._1IolX_6rKX93IRLO1O_oCP{width:auto}._3ro6VpUsGKbJLq-qGxzhp0._3LRqJ7WzGdVvVSMUXfxeK-{width:48px}html[dir] ._3ro6VpUsGKbJLq-qGxzhp0._3LRqJ7WzGdVvVSMUXfxeK-{margin:0}._3ro6VpUsGKbJLq-qGxzhp0._21GIf9eXgdq_YZiQrKnLYC{bottom:3px}html[dir] ._3ro6VpUsGKbJLq-qGxzhp0._21GIf9eXgdq_YZiQrKnLYC{margin:0}._3o738zmfzs1fXK1kxpiX5:hover{color:"[theme:black, default:#000000]"}._3o738zmfzs1fXK1kxpiX5:hover+._16aPYHYIOVxzNYTA4BGnwS{color:"[theme:neutralPrimary, default:#323130]"}.qI0miNbM8RNNeR4_SQSa7{font-size:16px}.qDw7SZ9r6S7r0_qZS1aIG,.yM6ioiXgtQ4G9DIFvnHHU{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.qDw7SZ9r6S7r0_qZS1aIG:hover .qI0miNbM8RNNeR4_SQSa7,.qDw7SZ9r6S7r0_qZS1aIG:hover ._16aPYHYIOVxzNYTA4BGnwS,.yM6ioiXgtQ4G9DIFvnHHU:hover .qI0miNbM8RNNeR4_SQSa7,.yM6ioiXgtQ4G9DIFvnHHU:hover ._16aPYHYIOVxzNYTA4BGnwS{color:"[theme:black, default:#000000]"}.qDw7SZ9r6S7r0_qZS1aIG{height:36px}html[dir] .qDw7SZ9r6S7r0_qZS1aIG._1TkCaDzSOF6GZzXOjQwqO7{background-color:"[theme:neutralLight, default:#edebe9]"!important}html[dir] .qDw7SZ9r6S7r0_qZS1aIG._3XfhC8PmkWdMpywWhiXB-J{-webkit-box-shadow:0 -1px 1px -1px "[theme:neutralDark, default:#201f1e]";box-shadow:0 -1px 1px -1px "[theme:neutralDark, default:#201f1e]"}.qDw7SZ9r6S7r0_qZS1aIG._1fkwrraGe01CgsB8LTccWy .qDw7SZ9r6S7r0_qZS1aIG:active:not(._3qB2DW0fiZ0DMmhMLjG1Lg),.qDw7SZ9r6S7r0_qZS1aIG:hover:not(._1pmm4dIxwC-S_TNlNCQ5Ys){color:"[theme:neutralDark, default:#201f1e]"}html[dir] .qDw7SZ9r6S7r0_qZS1aIG._1fkwrraGe01CgsB8LTccWy .qDw7SZ9r6S7r0_qZS1aIG:active:not(._3qB2DW0fiZ0DMmhMLjG1Lg),html[dir] .qDw7SZ9r6S7r0_qZS1aIG:hover:not(._1pmm4dIxwC-S_TNlNCQ5Ys){background-color:"[theme:neutralLight, default:#edebe9]"}html[dir] .qDw7SZ9r6S7r0_qZS1aIG:active:not(._1pmm4dIxwC-S_TNlNCQ5Ys){background-color:"[theme:neutralQuaternaryAlt, default:#e1dfdd]"}.qDw7SZ9r6S7r0_qZS1aIG:hover ._3Jn_7Iv4SwMTMOPJiydZLa._2c72q1kv-OOl7ERSzHFmKl{display:none}.qDw7SZ9r6S7r0_qZS1aIG:hover ._2jHPPTsq-QokR0fW2y0KI-{display:block}html[dir] .qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G{background-color:"[theme:themeLight, default:#C7E0F4]"!important}@media screen and (-ms-high-contrast:active){.qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G{forced-color-adjust:none;color:highlighttext!important}html[dir] .qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G{background-color:highlight!important}}.qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G ._16aPYHYIOVxzNYTA4BGnwS,.qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G ._1IolX_6rKX93IRLO1O_oCP,.qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G ._3Jn_7Iv4SwMTMOPJiydZLa,.qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G ._2jHPPTsq-QokR0fW2y0KI-{color:"[theme:themeDark, default:#0D62AA]"}@media screen and (-ms-high-contrast:active){.qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G ._16aPYHYIOVxzNYTA4BGnwS,.qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G ._1IolX_6rKX93IRLO1O_oCP,.qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G ._3Jn_7Iv4SwMTMOPJiydZLa,.qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G ._2jHPPTsq-QokR0fW2y0KI-{color:inherit}}.qDw7SZ9r6S7r0_qZS1aIG.NJVykX0WljoRws2qTYI5G ._16aPYHYIOVxzNYTA4BGnwS{font-weight:600}.qDw7SZ9r6S7r0_qZS1aIG.mUj4R7XxpCtxlU9Fu8cYa{cursor:default}.yM6ioiXgtQ4G9DIFvnHHU{height:48px}html[dir] .yM6ioiXgtQ4G9DIFvnHHU{padding-bottom:3px}.yM6ioiXgtQ4G9DIFvnHHU ._1IolX_6rKX93IRLO1O_oCP{font-size:14px}.yM6ioiXgtQ4G9DIFvnHHU ._16aPYHYIOVxzNYTA4BGnwS{font-weight:600}html[dir] .yM6ioiXgtQ4G9DIFvnHHU:focus{background-color:transparent}.yM6ioiXgtQ4G9DIFvnHHU:hover ._1IolX_6rKX93IRLO1O_oCP{color:"[theme:black, default:#000000]"}.yM6ioiXgtQ4G9DIFvnHHU._21GIf9eXgdq_YZiQrKnLYC{height:44px}._3E0hrMIkaeNLduj5vPk3fh._21GIf9eXgdq_YZiQrKnLYC{height:20px}._3E0hrMIkaeNLduj5vPk3fh._21GIf9eXgdq_YZiQrKnLYC.yM6ioiXgtQ4G9DIFvnHHU,._3E0hrMIkaeNLduj5vPk3fh._2AZjn9RFetXcCNSCt0BqEI{height:24px}._3E0hrMIkaeNLduj5vPk3fh._2AZjn9RFetXcCNSCt0BqEI.yM6ioiXgtQ4G9DIFvnHHU{height:36px}._3E0hrMIkaeNLduj5vPk3fh._1XmKWz3L5NcheRkx38wxTL{height:40px}._16aPYHYIOVxzNYTA4BGnwS{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400;color:"[theme:neutralPrimary, default:#323130]"}html[dir=ltr] ._16aPYHYIOVxzNYTA4BGnwS._3FwRpWCSns-2PgbiDhEErG{padding-left:10px}html[dir=rtl] ._16aPYHYIOVxzNYTA4BGnwS._3FwRpWCSns-2PgbiDhEErG{padding-right:10px}html[dir] ._3Jn_7Iv4SwMTMOPJiydZLa,html[dir] ._2jHPPTsq-QokR0fW2y0KI-{background-color:transparent}html[dir=ltr] ._3Jn_7Iv4SwMTMOPJiydZLa,html[dir=ltr] ._2jHPPTsq-QokR0fW2y0KI-{padding-left:5px}html[dir=rtl] ._3Jn_7Iv4SwMTMOPJiydZLa,html[dir=rtl] ._2jHPPTsq-QokR0fW2y0KI-{padding-right:5px}html[dir=ltr] ._3Jn_7Iv4SwMTMOPJiydZLa._1Z-edta3MRhQimG-bshgdi,html[dir=ltr] ._2jHPPTsq-QokR0fW2y0KI-._1Z-edta3MRhQimG-bshgdi{padding-left:0}html[dir=rtl] ._3Jn_7Iv4SwMTMOPJiydZLa._1Z-edta3MRhQimG-bshgdi,html[dir=rtl] ._2jHPPTsq-QokR0fW2y0KI-._1Z-edta3MRhQimG-bshgdi{padding-right:0}._3Jn_7Iv4SwMTMOPJiydZLa{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}._2jHPPTsq-QokR0fW2y0KI-{display:none}._1pmm4dIxwC-S_TNlNCQ5Ys ._16aPYHYIOVxzNYTA4BGnwS,._1pmm4dIxwC-S_TNlNCQ5Ys:hover ._16aPYHYIOVxzNYTA4BGnwS{color:"[theme:themeDark, default:#0D62AA]"}._1pmm4dIxwC-S_TNlNCQ5Ys ._16aPYHYIOVxzNYTA4BGnwS ._17SWBrtKpk9U_SPOrW-Adi,._1pmm4dIxwC-S_TNlNCQ5Ys:hover ._16aPYHYIOVxzNYTA4BGnwS ._17SWBrtKpk9U_SPOrW-Adi{font-size:14px;font-weight:400}html[dir] ._1pmm4dIxwC-S_TNlNCQ5Ys:hover{background-color:"[theme:neutralLight, default:#edebe9]"}._1pmm4dIxwC-S_TNlNCQ5Ys._2Ebhzlo1Zl_B36exp1jPX3 ._16aPYHYIOVxzNYTA4BGnwS{color:"[theme:themeDarker, default:#004578]"}._1pmm4dIxwC-S_TNlNCQ5Ys._2Ebhzlo1Zl_B36exp1jPX3 ._16aPYHYIOVxzNYTA4BGnwS ._17SWBrtKpk9U_SPOrW-Adi{font-size:14px;font-weight:400}html[dir] ._1pmm4dIxwC-S_TNlNCQ5Ys:active{background-color:"[theme:neutralQuaternaryAlt, default:#e1dfdd]"}.Jry0n2MrmWzIDqGC7Q3rM{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex}._2EHwusCFnNOqsvtyZek9lp{width:auto}html[dir=ltr] ._2EHwusCFnNOqsvtyZek9lp{padding-left:38px;padding-right:8px}html[dir=rtl] ._2EHwusCFnNOqsvtyZek9lp{padding-right:38px;padding-left:8px}html[dir=ltr] ._2EHwusCFnNOqsvtyZek9lp._2xwzvABSEgMaj92V232qce{padding-left:36px}html[dir=rtl] ._2EHwusCFnNOqsvtyZek9lp._2xwzvABSEgMaj92V232qce{padding-right:36px}.sNErMKsbRKVTNM7Kcnhsm{width:auto;height:100%}html[dir=ltr] .sNErMKsbRKVTNM7Kcnhsm._1pAm90FaUMsTMCd1bggJCR{padding-left:12px}html[dir=rtl] .sNErMKsbRKVTNM7Kcnhsm._1pAm90FaUMsTMCd1bggJCR{padding-right:12px}html[dir=ltr] .sNErMKsbRKVTNM7Kcnhsm._2oim00IYQmFApIciF3HSh{padding-left:10px}html[dir=rtl] .sNErMKsbRKVTNM7Kcnhsm._2oim00IYQmFApIciF3HSh{padding-right:10px}html[dir=ltr] ._3TbX4cY3US_jmka5ZLQAgx{padding-left:0}html[dir=rtl] ._3TbX4cY3US_jmka5ZLQAgx{padding-right:0}html[dir=ltr] .zV-_Y54s6zihRtOp2_4BR{padding-left:2px}html[dir=rtl] .zV-_Y54s6zihRtOp2_4BR{padding-right:2px}._2U-iT25wrcvSXY3h6G3U5S{height:22px}._2-iQpN_YFZne0UlBkiQtKO{width:0}._2-iQpN_YFZne0UlBkiQtKO:hover{width:auto}html[dir] ._3s0UeDqNGEDF7UhxX-y1Sc{padding:0;margin:0}._2zlt3SLuvIQDoQ1h0EtDLG{width:5px}html[dir=ltr] ._3OijA3e5YsxWwFPp9ZNVWd{padding-left:10px}html[dir=rtl] ._3OijA3e5YsxWwFPp9ZNVWd{padding-right:10px}._2OQDdQ83TooJh36cqMPy4P{font-size:12px}._2OQDdQ83TooJh36cqMPy4P._1XmKWz3L5NcheRkx38wxTL{font-size:14px}',""]),r.locals={full:"_1XmKWz3L5NcheRkx38wxTL",regularNode:"qDw7SZ9r6S7r0_qZS1aIG",nodeHeight:"LHVU-jfsAlddLjF0-GxcE",medium:"_2AZjn9RFetXcCNSCt0BqEI",compact:"_21GIf9eXgdq_YZiQrKnLYC",monarchFavoriteList:"PtXct_-3bGufYWyRczlyP",icon:"_1IolX_6rKX93IRLO1O_oCP",leftNavPadding:"FBeXwG38P_G9gNYkGobn0",oldDensityFontSize:"SiBv31IfzVFl2WodUyTbP",overridenIconFontSize:"_13lKBm0UHfNFtIHakRqB7e",leftNavIconExtraPadding:"_1OPSsVxfk_GWTnwo-KIMYX",monarchRootFolderAlignment:"_2zlt3SLuvIQDoQ1h0EtDLG",chevronIcon:"_3ro6VpUsGKbJLq-qGxzhp0",leftNavChevronExtraPadding:"_3LRqJ7WzGdVvVSMUXfxeK-",regularNodeChevronIcon:"_3o738zmfzs1fXK1kxpiX5",displayName:"_16aPYHYIOVxzNYTA4BGnwS",customIcon:"qI0miNbM8RNNeR4_SQSa7",rootNode:"yM6ioiXgtQ4G9DIFvnHHU",showAsHoverOnDroppedOver:"_1TkCaDzSOF6GZzXOjQwqO7",showBorderOnDroppedOver:"_3XfhC8PmkWdMpywWhiXB-J",withContextMenuOpen:"_1fkwrraGe01CgsB8LTccWy",isBeingDragged:"_3qB2DW0fiZ0DMmhMLjG1Lg",customActionNode:"_1pmm4dIxwC-S_TNlNCQ5Ys",rightCharm:"_3Jn_7Iv4SwMTMOPJiydZLa",hoverTreatmentPresent:"_2c72q1kv-OOl7ERSzHFmKl",rightCharmHover:"_2jHPPTsq-QokR0fW2y0KI-",selected:"NJVykX0WljoRws2qTYI5G",disabledCursor:"mUj4R7XxpCtxlU9Fu8cYa",densityNodeHeights:"_3E0hrMIkaeNLduj5vPk3fh",leftNavDisplayNameExtraPadding:"_3FwRpWCSns-2PgbiDhEErG",monarchHoverPadding:"_1Z-edta3MRhQimG-bshgdi",overridenFont:"_17SWBrtKpk9U_SPOrW-Adi",active:"_2Ebhzlo1Zl_B36exp1jPX3",folderIcons:"Jry0n2MrmWzIDqGC7Q3rM",leftNavAllFoldersPadding:"_2EHwusCFnNOqsvtyZek9lp",monarchFolderPadding:"_2xwzvABSEgMaj92V232qce",chevronWithFolderIcon:"sNErMKsbRKVTNM7Kcnhsm",overridenChevronWithFolderLeftPadding:"_1pAm90FaUMsTMCd1bggJCR",monarchChevronPadding:"_2oim00IYQmFApIciF3HSh",folderWithChevron:"_3TbX4cY3US_jmka5ZLQAgx",allFolderIconsRootText:"zV-_Y54s6zihRtOp2_4BR",alternativeBadgeHeight:"_2U-iT25wrcvSXY3h6G3U5S",starTooltipStyle:"_2-iQpN_YFZne0UlBkiQtKO",starCharm:"_3s0UeDqNGEDF7UhxX-y1Sc",monarchRootNodePadding:"_3OijA3e5YsxWwFPp9ZNVWd",densityFontSizes:"_2OQDdQ83TooJh36cqMPy4P"}}}]);
//# sourceMappingURL=owa.MailBoot~EmbeddedNotes~GroupAddMemberV2~GroupAddMembersV2Opx~GroupList~MailFolderTreesParent~MailFol~e26049c2.js.map
self.scriptsLoaded['owa.MailBoot~EmbeddedNotes~GroupAddMemberV2~GroupAddMembersV2Opx~GroupList~MailFolderTreesParent~MailFol~e26049c2.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~EmbeddedNotes~GroupAddMemberV2~GroupAddMembersV2Opx~GroupList~MailFolderTreesParent~MailFol~e26049c2.js'] = (new Date()).getTime();