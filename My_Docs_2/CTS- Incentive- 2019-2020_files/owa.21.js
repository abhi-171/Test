self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.21.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[21],{1151:function(e,r,o){"use strict";var t=o(32),n=o(348),a=o(651),i=o(471),l=o(1),c=o(514),u=o(1339),C=o(402).bind(u),s=Object(t.a)((function(e){var r={color:(e.categoryName?Object(a.a)(e.categoryName,e.categoryList?e.categoryList:Object(c.a)()):e.categoryColorId?i.a.colorCodeColorValueMap[e.categoryColorId]:Object(a.b)()).iconColor},o=C(u.categoryIcon,e.iconClassName);return l.createElement(n.a,{className:o,iconName:"TagSolid",style:r})}));r.a=s},1186:function(e,r,o){"use strict";o.d(r,"a",(function(){return n}));var t=o(0);function n(e,r){var o,n,a=[],i=!1,l=e.trim().toLocaleLowerCase();try{for(var c=Object(t.__values)(r),u=c.next();!u.done;u=c.next()){var C=u.value,s=C.Name.trim().toLocaleLowerCase();""!=s&&s.indexOf(l)>=0&&(a.push(C),s==l&&(i=!0))}}catch(e){o={error:e}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(o)throw o.error}}var d=e.toLocaleLowerCase().trim();return a.sort((function(e,r){var o=e.Name.toLocaleLowerCase().trim(),t=r.Name.toLocaleLowerCase().trim(),n=o.indexOf(d),a=t.indexOf(d);return n==a?o.localeCompare(t):n-a})),{suggestions:a,hasExactMatch:i}}},1335:function(e,r,o){var t=o(1336),n=o(107);"string"==typeof t&&(t=[[e.i,t]]);for(var a=0;a<t.length;a++)n.loadStyles(t[a][1],!1);t.locals&&(e.exports=t.locals)},1336:function(e,r,o){(r=e.exports=o(106)(!1)).push([e.i,"._2xN9TZyXtoJZK5Lfq0Po_e,._3Syrcsld5EhJ0NsexwVKCW{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:18px;max-width:120px;white-space:nowrap;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}html[dir] ._2xN9TZyXtoJZK5Lfq0Po_e,html[dir] ._3Syrcsld5EhJ0NsexwVKCW{border-radius:2px;border-style:solid;border-width:1px}html[dir=ltr] ._2xN9TZyXtoJZK5Lfq0Po_e{margin-right:4px}html[dir=rtl] ._2xN9TZyXtoJZK5Lfq0Po_e{margin-left:4px}html[dir=ltr] ._3Syrcsld5EhJ0NsexwVKCW{margin-right:0}html[dir=rtl] ._3Syrcsld5EhJ0NsexwVKCW{margin-left:0}.GW-PnOYWKlba0TwtiRFoK{font-size:12px;font-weight:400;max-width:120px;overflow:hidden;line-height:17px;display:inline-block;text-overflow:ellipsis}html[dir] .GW-PnOYWKlba0TwtiRFoK{text-align:center;padding-bottom:1px}html[dir=ltr] .GW-PnOYWKlba0TwtiRFoK,html[dir=rtl] .GW-PnOYWKlba0TwtiRFoK{padding-right:4px;padding-left:4px}",""]),r.locals={categoryContainer:"_2xN9TZyXtoJZK5Lfq0Po_e",lastCategoryContainer:"_3Syrcsld5EhJ0NsexwVKCW",categoryName:"GW-PnOYWKlba0TwtiRFoK"}},1337:function(e,r,o){var t=o(1338),n=o(107);"string"==typeof t&&(t=[[e.i,t]]);for(var a=0;a<t.length;a++)n.loadStyles(t[a][1],!1);t.locals&&(e.exports=t.locals)},1338:function(e,r,o){(r=e.exports=o(106)(!1)).push([e.i,"._2vy8bJGTwEqZL1fhtL8s3m{max-height:436px}",""]),r.locals={categoryMenu:"_2vy8bJGTwEqZL1fhtL8s3m"}},1339:function(e,r,o){var t=o(1340),n=o(107);"string"==typeof t&&(t=[[e.i,t]]);for(var a=0;a<t.length;a++)n.loadStyles(t[a][1],!1);t.locals&&(e.exports=t.locals)},1340:function(e,r,o){(e.exports=o(106)(!1)).push([e.i,"",""])},305:function(e,r,o){"use strict";var t;!function(e){e[e.None=-1]="None",e[e.Red=0]="Red",e[e.Orange=1]="Orange",e[e.Peach=2]="Peach",e[e.YellowLight=3]="YellowLight",e[e.GreenLight=4]="GreenLight",e[e.TealLight=5]="TealLight",e[e.Olive=6]="Olive",e[e.BlueSky=7]="BlueSky",e[e.PurpleLight=8]="PurpleLight",e[e.Pink=9]="Pink",e[e.SteelLight=10]="SteelLight",e[e.SteelGrey=11]="SteelGrey",e[e.GreyLight=12]="GreyLight",e[e.GreyDark=13]="GreyDark",e[e.Black=14]="Black",e[e.RedDark=15]="RedDark",e[e.OrangeDark=16]="OrangeDark",e[e.BrownMedium=17]="BrownMedium",e[e.YellowDark=18]="YellowDark",e[e.GreenDark=19]="GreenDark",e[e.TealDark=20]="TealDark",e[e.OliveDark=21]="OliveDark",e[e.BlueDark=22]="BlueDark",e[e.PurpleDark=23]="PurpleDark",e[e.MagentaDark=24]="MagentaDark"}(t||(t={})),r.a=t},471:function(e,r,o){"use strict";var t=o(305);var n=o(3),a=o(16);o.d(r,"b",(function(){return c}));var i,l={categoryIdToNameMap:{},categoryMenuViewState:{findText:"",isFocusInSearchBox:!1,shouldShowAllCategories:!1},categoryColorPickerViewState:{colorPickerTarget:null,shouldShowColorPicker:!1},colorCodeColorValueMap:((i={})[t.a.None]={primaryColor:"#CCCCCC",secondaryColor:"#A6A6A6",iconColor:"#000000",textColor:"#000000"},i[t.a.Red]={primaryColor:"#fce9ea",secondaryColor:"#F1919A",iconColor:"#E74856",textColor:"#D01B2A"},i[t.a.Orange]={primaryColor:"#fff1e0",secondaryColor:"#ffba66",iconColor:"#FF8C00",textColor:"#A35A00"},i[t.a.Peach]={primaryColor:"#fff5e8",secondaryColor:"#ffcd8f",iconColor:"#FFAB45",textColor:"#A35A00"},i[t.a.YellowLight]={primaryColor:"#fffde0",secondaryColor:"#fff766",iconColor:"#FFF100",textColor:"#7A7400"},i[t.a.GreenLight]={primaryColor:"#e9f9e8",secondaryColor:"#91e38d",iconColor:"#47D041",textColor:"#257E20"},i[t.a.TealLight]={primaryColor:"#e6f8f9",secondaryColor:"#83dde0",iconColor:"#30C6CC",textColor:"#1D797C"},i[t.a.Olive]={primaryColor:"#EEF5E4",secondaryColor:"#abcc7c",iconColor:"#73AA24",textColor:"#527A1A"},i[t.a.BlueSky]={primaryColor:"#e0f7fd",secondaryColor:"#66d7f7",iconColor:"#00BCF2",textColor:"#007899"},i[t.a.PurpleLight]={primaryColor:"#f0ecf6",secondaryColor:"#b7a2d4",iconColor:"#8764B8",textColor:"#7D57B2"},i[t.a.Pink]={primaryColor:"#fef2f7",secondaryColor:"#f8bfd9",iconColor:"#F495BF",textColor:"#D8186E"},i[t.a.SteelLight]={primaryColor:"#f3f5f6",secondaryColor:"#c6ced1",iconColor:"#A0AEB2",textColor:"#5E7373"},i[t.a.SteelGrey]={primaryColor:"#D0E0E2",secondaryColor:"#6693a0",iconColor:"#004B60",textColor:"#004B60"},i[t.a.GreyLight]={primaryColor:"#f6f5f5",secondaryColor:"#d0cecd",iconColor:"#B1ADAB",textColor:"#776E6E"},i[t.a.GreyDark]={primaryColor:"#D4D4D4",secondaryColor:"#9e9c9b",iconColor:"#5D5A58",textColor:"#5D5A58"},i[t.a.Black]={primaryColor:"#969696",secondaryColor:"#666666",iconColor:"#000000",textColor:"#000000"},i[t.a.RedDark]={primaryColor:"#C09BA4",secondaryColor:"#ac6d77",iconColor:"#750B1C",textColor:"#750B1C"},i[t.a.OrangeDark]={primaryColor:"#f9eae2",secondaryColor:"#df9670",iconColor:"#CA5010",textColor:"#B3480F"},i[t.a.BrownMedium]={primaryColor:"#f5ece2",secondaryColor:"#cda16e",iconColor:"#AB620D",textColor:"#9D590B"},i[t.a.YellowDark]={primaryColor:"#f7f3e0",secondaryColor:"#dac466",iconColor:"#C19C00",textColor:"#856A00"},i[t.a.GreenDark]={primaryColor:"#C8DACC",secondaryColor:"#669377",iconColor:"#004B1C",textColor:"#004B1C"},i[t.a.TealDark]={primaryColor:"#CEDCDE",secondaryColor:"#669396",iconColor:"#004B50",textColor:"#004B50"},i[t.a.OliveDark]={primaryColor:"#C3DAC3",secondaryColor:"#6da66d",iconColor:"#0B6A0B",textColor:"#0b6a0b"},i[t.a.BlueDark]={primaryColor:"#A6ACC4",secondaryColor:"#667996",iconColor:"#002050",textColor:"#002050"},i[t.a.PurpleDark]={primaryColor:"#B5ACC8",secondaryColor:"#84729c",iconColor:"#32145A",textColor:"#32145A"},i[t.a.MagentaDark]={primaryColor:"#D1B8D1",secondaryColor:"#9d669d",iconColor:"#5C005C",textColor:"#5C005C"},i),pendingCategoryNamesMap:{},categoryDetails:new a.ObservableMap({}),isSearchFolderReady:!1,categoryDialogViewState:null,isApplyingCategoryOperation:!1},c=Object(n.createStore)("category",l);r.a=c()},514:function(e,r,o){"use strict";o.d(r,"a",(function(){return i}));var t=o(25),n=o(346),a=o(85);function i(e){var r,o=null==(r=e&&Object(n.r)(e.userIdentity)?Object(a.i)(e.userIdentity):Object(t.a)())?void 0:r.MasterCategoryList;return(null==o?void 0:o.MasterList)||[]}},651:function(e,r,o){"use strict";o.d(r,"a",(function(){return i})),o.d(r,"b",(function(){return l}));var t=o(933),n=o(471),a=o(514);function i(e,r){r||(r=Object(a.a)());for(var o=0;o<r.length;o++){var t=r[o];if(t.Name.toLowerCase()===e.toLowerCase())return n.a.colorCodeColorValueMap[t.Color.toString()]}return l()}function l(){return n.a.colorCodeColorValueMap[t.a]}},884:function(e,r,o){"use strict";var t=o(44),n=o(471),a=o(1),i=o(134),l=o(32);var c=Object(l.a)((function(e){var r=e.categoryContainerClass,o=e.categories,t=e.categoryWellContainerClass,n=e.onCategoryClicked,l=e.categoryList;!function(e){a.useEffect((function(){Object(i.r)("Category_Well_TotalCategories",[e.length],{sessionSampleRate:10})}),[e])}(o);var c=a.useCallback((function(e){var o=e.categoryName,t=e.isLastInWell;return a.createElement(y,{actionSource:"CategoryWell",category:o,containerClassName:r,isLastInWell:t,onCategoryClicked:n,categoryList:l})}),[r,n,l]);return a.createElement("div",{className:t},o.map((function(e,r){return a.createElement(c,{key:e,categoryName:e,isLastInWell:r===o.length-1})})))})),u=o(974),C=o(651),s=o(514),d=o(1335),f=o(402).bind(d),y=Object(l.a)((function(e){var r=a.useRef(),o=Object(u.a)((function(){return Object(C.a)(e.category,e.categoryList?e.categoryList:Object(s.a)())})),t={backgroundColor:o.get().primaryColor,borderColor:o.get().secondaryColor,color:o.get().textColor,cursor:e.onCategoryClicked?"pointer":"initial"},n=e.category,l=f(e.containerClassName,e.isLastInWell?d.lastCategoryContainer:d.categoryContainer),c=a.createElement("span",{className:d.categoryName},n);return a.createElement("div",{ref:function(e){return r.current=e},key:n,className:l,style:t,title:n,onMouseEnter:function(){e.onCategoryClicked&&(r.current.style.borderColor=o.get().textColor)},onMouseLeave:function(){e.onCategoryClicked&&(r.current.style.borderColor=o.get().secondaryColor)},onClick:function(r){e.onCategoryClicked&&(Object(i.r)("Category_Well_Click",[e.actionSource]),e.onCategoryClicked(r,e.category,e.actionSource))}},c)})),g=o(305),h=o(86),m=o(1337);function p(e){var r=[];return r.push({key:"CategoryMenuItemDiv",onRender:function(){return a.createElement(j,{mailboxInfo:e.mailboxInfo,onAfterCreateNewCategory:e.onAfterCreateNewCategory,addFavoriteCategory:e.addFavoriteCategory,onCheckedCategoryClicked:e.onCheckedCategoryClicked,onUncheckedCategoryClicked:e.onUncheckedCategoryClicked,actionSource:e.actionSource,categoryList:e.categoryList,categoriesToCheck:e.getCategoriesToCheck(),dismissMenu:e.dismissMenu,shouldShowSearchBox:e.shouldShowSearchBox,shouldShowManageCategories:e.shouldShowManageCategories,shouldShowClearCategories:e.getShouldShowClearCategories(),manageCategoriesDisabled:e.manageCategoriesDisabled,createNewCategoryDisabled:e.createNewCategoryDisabled,onManageCategoryClicked:e.onManageCategoryClicked,onClearCategoriesClicked:e.onClearCategoriesClicked})}}),{className:m.categoryMenu,styles:{title:{},container:{},root:{width:e.width?e.width+"px":null},header:{},list:{}},directionalHintFixed:!1,items:r,onMenuDismissed:function(){return P.importAndExecute()},shouldFocusOnMount:!e.shouldShowSearchBox,useTargetWidth:e.useTargetWidth,coverTarget:e.coverTarget,directionalHint:e.directionalHint?e.directionalHint:h.DirectionalHint.bottomLeftEdge,focusZoneProps:{shouldInputLoseFocusOnArrowKey:function(e){return!0}},calloutProps:{className:"customScrollBar"}}}var x=o(1186),w=o(918);function b(e){return 1===Object(s.a)().filter((function(r){return r.Id===e})).length}var k=o(919),v=o(1151);o.d(r,"r",(function(){return L})),o.d(r,"w",(function(){return O})),o.d(r,"A",(function(){return S})),o.d(r,"u",(function(){return B})),o.d(r,"x",(function(){return N})),o.d(r,"t",(function(){return A})),o.d(r,"z",(function(){return M})),o.d(r,"s",(function(){return E})),o.d(r,"y",(function(){return T})),o.d(r,"v",(function(){return P})),o.d(r,"f",(function(){return j})),o.d(r,"d",(function(){return F})),o.d(r,"c",(function(){return W})),o.d(r,"p",(function(){return n.b})),o.d(r,"g",(function(){return c})),o.d(r,"a",(function(){return y})),o.d(r,"h",(function(){return C.a})),o.d(r,"b",(function(){return g.a})),o.d(r,"j",(function(){return p})),o.d(r,"l",(function(){return x.a})),o.d(r,"o",(function(){return s.a})),o.d(r,"n",(function(){return w.b})),o.d(r,"m",(function(){return w.a})),o.d(r,"q",(function(){return b})),o.d(r,"i",(function(){return k.a})),o.d(r,"k",(function(){return k.b})),o.d(r,"e",(function(){return v.a}));var D=new t.c((function(){return Promise.all([o.e(0),o.e(1),o.e(2),o.e(4),o.e(7),o.e(74),o.e(520)]).then(o.bind(null,17115))})),L=new t.b(D,(function(e){return e.addMasterCategories})),O=new t.a(D,(function(e){return e.removeMasterCategories})),S=(new t.a(D,(function(e){return e.changeMasterCategories})),new t.a(D,(function(e){return e.updateLastTimeUsedMasterCategories}))),B=new t.a(D,(function(e){return e.getMasterCategoryList})),N=new t.a(D,(function(e){return e.setInitialCategoryDialogViewState})),A=(new t.a(D,(function(e){return e.addCategory})),new t.a(D,(function(e){return e.fetchCategoryDetails}))),M=new t.a(D,(function(e){return e.subscribeToCategoryNotifications})),E=new t.a(D,(function(e){return e.applyCategoryOperationHelper})),T=new t.a(D,(function(e){return e.setIsApplyingCategoryOperation})),P=new t.a(D,(function(e){return e.onMenuDismissed})),j=Object(t.d)(D,(function(e){return e.CategoryMenu})),F=Object(t.d)(D,(function(e){return e.CategoryDialog})),W=Object(t.d)(D,(function(e){return e.CategoryColorPickerHost}))},918:function(e,r,o){"use strict";o.d(r,"b",(function(){return n})),o.d(r,"a",(function(){return a}));var t=o(471);function n(e){var r,o=null===(r=Object(t.b)().categoryDetails.get(e))||void 0===r?void 0:r.unreadCount;return o||0}function a(e){var r,o=null===(r=Object(t.b)().categoryDetails.get(e))||void 0===r?void 0:r.totalCount;return o||0}},919:function(e,r,o){"use strict";function t(e,r){var o=r.filter((function(r){return r.Name===e}));return o.length>0?o[0].Id:null}function n(e,r){var o=r.filter((function(r){return r.Id===e}));return o.length>0?o[0].Name:null}o.d(r,"a",(function(){return t})),o.d(r,"b",(function(){return n}))},933:function(e,r,o){"use strict";o.d(r,"a",(function(){return n})),o.d(r,"b",(function(){return a}));var t=o(305),n=t.a.GreyDark,a=t.a.Red}}]);
//# sourceMappingURL=owa.21.js.map
self.scriptsLoaded['owa.21.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.21.js'] = (new Date()).getTime();