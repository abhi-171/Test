self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.290.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[290],{1004:function(e,a,i){"use strict";var n=function(e){return function(){return e}},r=i(663),t=i(797),o=r.a?function(e,a){return Object(r.a)(e,"toString",{configurable:!0,enumerable:!1,value:n(a),writable:!0})}:t.a,c=800,l=16,s=Date.now;var f=function(e){var a=0,i=0;return function(){var n=s(),r=l-(n-i);if(i=n,r>0){if(++a>=c)return arguments[0]}else a=0;return e.apply(void 0,arguments)}}(o);a.a=f},1005:function(e,a,i){"use strict";var n=function(e,a,i){switch(i.length){case 0:return e.call(a);case 1:return e.call(a,i[0]);case 2:return e.call(a,i[0],i[1]);case 3:return e.call(a,i[0],i[1],i[2])}return e.apply(a,i)},r=Math.max;a.a=function(e,a,i){return a=r(void 0===a?e.length-1:a,0),function(){for(var t=arguments,o=-1,c=r(t.length-a,0),l=Array(c);++o<c;)l[o]=t[a+o];o=-1;for(var s=Array(a+1);++o<a;)s[o]=t[o];return s[a]=i(l),n(e,this,s)}}},11141:function(e,a,i){"use strict";var n=i(0),r=i(1),t=i(1659),o=i(770),c=i(86),l=i(521),s=i(199),f=i(431),u=i.n(f),m=i(198),b=i(14870),d=function(e,a){return null!==e&&u()(a.code).rgb().string()===u()(e).rgb().string()},h=r.memo((function(e){var a=r.useContext(m.b),i=e.data,o={backgroundColor:i.colorCode.lightModeColor};i.borderColor&&(o.borderColor=a?i.borderColor.darkModeColor:i.borderColor.lightModeColor);var c={role:t.a.menuitemcheckbox,label:i.name,checked:e.isSelected},s=r.useCallback((function(){e.onSelectColor(i)}),[e.onSelectColor,i]);return r.createElement(l.a,Object(n.__assign)({"data-is-focusable":!0,title:i.name,onClick:s,key:e.key},Object(t.b)(c)),r.createElement("div",{className:b.colorSquare,style:o}))})),y=function(e){var a=e.selectedColor,i=e.onDismissMenu,t=e.onSelectColor,l=e.menuTargetElement,f=e.shouldFocusOnMount,u=r.useCallback((function(e){i(),t(e)}),[i,t]),m=r.useMemo((function(){return e.colors.map((function(e){return function(i){return r.createElement(h,Object(n.__assign)({isSelected:d(a,e),onSelectColor:u},i))}}))}),[u,e.colors]),y=r.useMemo((function(){return e.colors.map((function(e,a){return{key:e.name,name:e.name,onRender:m[a],data:e,className:b.colorMenuItem}}))}),[e.colors,u]);return r.createElement(o.a,{className:b.colorPickerContainer,shouldFocusOnMount:f,target:l,directionalHint:c.DirectionalHint.bottomLeftEdge,onDismiss:i,focusZoneProps:{direction:s.a.bidirectional},items:y})},g=i(16),p=i(5568),v=i(4537),k=i(14872),j=i(7),N=[Object(j.b)(k.t),Object(j.b)(k.w),Object(j.b)(k.B),Object(j.b)(k.y),Object(j.b)(k.A),Object(j.b)(k.z),Object(j.b)(k.b),Object(j.b)(k.s),Object(j.b)(k.H),Object(j.b)(k.D),Object(j.b)(k.F),Object(j.b)(k.E),Object(j.b)(k.d),Object(j.b)(k.f),Object(j.b)(k.j),Object(j.b)(k.g),Object(j.b)(k.i),Object(j.b)(k.h),Object(j.b)(k.k),Object(j.b)(k.m),Object(j.b)(k.q),Object(j.b)(k.n),Object(j.b)(k.p),Object(j.b)(k.o),Object(j.b)(k.G),Object(j.b)(k.v),Object(j.b)(k.r),Object(j.b)(k.e),Object(j.b)(k.l),Object(j.b)(k.a)],O=[Object(j.b)(k.c),Object(j.b)(k.s),Object(j.b)(k.H),Object(j.b)(k.D),Object(j.b)(k.F),Object(j.b)(k.C),Object(j.b)(k.u),Object(j.b)(k.w),Object(j.b)(k.B),Object(j.b)(k.y),Object(j.b)(k.A),Object(j.b)(k.x),Object(j.b)(k.G),Object(j.b)(k.v),Object(j.b)(k.r),Object(j.b)(k.e),Object(j.b)(k.l),Object(j.b)(k.a)];function C(e,a,i){return{name:e,colorCode:{lightModeColor:a,darkModeColor:i},borderColor:"#ffffff"===a?{lightModeColor:"#bebebe",darkModeColor:"#212121"}:void 0}}var S=Object(g.computed)((function(){return Object(p.a)(N,v.d,v.b).map((function(e){return C(e[0],e[1],e[2])}))})),M=Object(g.computed)((function(){return Object(p.a)(O,v.c,v.a).map((function(e){return C(e[0],e[1],e[2])}))}));i.d(a,"a",(function(){return y})),i.d(a,"c",(function(){return S})),i.d(a,"b",(function(){return M}))},1250:function(e,a,i){"use strict";e.exports=function(e,a){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||a?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},14870:function(e,a,i){var n=i(14871),r=i(107);"string"==typeof n&&(n=[[e.i,n]]);for(var t=0;t<n.length;t++)r.loadStyles(n[t][1],!1);n.locals&&(e.exports=n.locals)},14871:function(e,a,i){(a=e.exports=i(106)(!1)).push([e.i,'._239sTwpLLPtKmna5c-rYFN{width:192px;overflow:hidden}html[dir] ._239sTwpLLPtKmna5c-rYFN{padding:8px;background:"[theme:white, default:#ffffff]"}._239sTwpLLPtKmna5c-rYFN ul{width:192px;overflow:hidden}._1lLHUWhoyaugbxET0T3NB8{display:inline-block;width:32px;height:32px}html[dir] ._1lLHUWhoyaugbxET0T3NB8{background:"[theme:white, default:#ffffff]"}._1lLHUWhoyaugbxET0T3NB8 button{min-width:0}html[dir] ._1lLHUWhoyaugbxET0T3NB8 button{padding:0;background:transparent;border:none}._1Fb8t4N1_mPDsbZYR5ryfC{width:20px;height:20px}html[dir] ._1Fb8t4N1_mPDsbZYR5ryfC{margin:4px;border-style:solid;border-width:2px;border-color:transparent}html[dir] ._1Fb8t4N1_mPDsbZYR5ryfC:hover,html[dir] body.addFocusOutline ._1Fb8t4N1_mPDsbZYR5ryfC:focus{border-color:#e81123}',""]),a.locals={colorPickerContainer:"_239sTwpLLPtKmna5c-rYFN",colorMenuItem:"_1lLHUWhoyaugbxET0T3NB8",colorSquare:"_1Fb8t4N1_mPDsbZYR5ryfC"}},14872:function(e){e.exports=JSON.parse('{"t":"nha","w":"oha","B":"pha","y":"qha","A":"rha","z":"sha","b":"tha","s":"uha","H":"vha","D":"wha","F":"xha","E":"yha","d":"zha","f":"Aha","j":"Bha","g":"Cha","i":"Dha","h":"Eha","k":"Fha","m":"Gha","q":"Hha","n":"Iha","p":"Jha","o":"Kha","G":"Lha","v":"Mha","r":"Nha","e":"Oha","l":"Pha","a":"Qha","c":"Rha","C":"Sha","u":"Tha","x":"Uha"}')},1659:function(e,a,i){"use strict";var n={alert:"alert",alertdialog:"alertdialog",application:"application",article:"article",banner:"banner",button:"button",cell:"cell",checkbox:"checkbox",columnheader:"columnheader",combobox:"combobox",complementary:"complementary",contentinfo:"contentinfo",definition:"definition",dialog:"dialog",directory:"directory",document:"document",feed:"feed",figure:"figure",form:"form",grid:"grid",gridcell:"gridcell",group:"group",heading:"heading",img:"img",link:"link",list:"list",listbox:"listbox",listitem:"listitem",log:"log",main:"main",marquee:"marquee",math:"math",menu:"menu",menubar:"menubar",menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio",navigation:"navigation",note:"note",option:"option",presentation:"presentation",progressbar:"progressbar",radio:"radio",radiogroup:"radiogroup",region:"region",row:"row",rowgroup:"rowgroup",rowheader:"rowheader",scrollbar:"scrollbar",search:"search",searchbox:"searchbox",separator:"separator",slider:"slider",spinbutton:"spinbutton",status:"status",switch:"switch",tab:"tab",table:"table",tablist:"tablist",tabpanel:"tabpanel",term:"term",textbox:"textbox",timer:"timer",toolbar:"toolbar",tooltip:"tooltip",tree:"tree",treegrid:"treegrid",treeitem:"treeitem"},r=0;function t(e){return void 0===e&&(e="id"),""+e+r++}function o(e){return Array.isArray(e)?e.join(" "):e}function c(e){if(!e)return null;for(var a={},i=Object.keys(e),n=0;n<i.length;n++){switch(i[n]){case"role":a.role=e.role;break;case"id":a.id=e.id;break;case"activeDescendant":a["aria-activedescendant"]=e.activeDescendant;break;case"atomic":a["aria-atomic"]=e.atomic;break;case"autocomplete":a["aria-autocomplete"]=e.autocomplete;break;case"busy":a["aria-busy"]=e.busy;break;case"checked":a["aria-checked"]=e.checked;break;case"controls":a["aria-controls"]=o(e.controls);break;case"describedBy":a["aria-describedby"]=o(e.describedBy);break;case"disabled":a["aria-disabled"]=e.disabled;break;case"dropEffect":a["aria-dropeffect"]=o(e.dropEffect);break;case"expanded":a["aria-expanded"]=e.expanded;break;case"flowTo":a["aria-flowto"]=o(e.flowTo);break;case"grabbed":a["aria-grabbed"]=e.grabbed;break;case"hasPopup":a["aria-haspopup"]=e.hasPopup;break;case"hidden":a["aria-hidden"]=e.hidden;break;case"invalid":a["aria-invalid"]=e.invalid;break;case"label":a["aria-label"]=e.label;break;case"labelledBy":a["aria-labelledby"]=o(e.labelledBy);break;case"level":a["aria-level"]=e.level;break;case"live":a["aria-live"]=e.live;break;case"multiline":a["aria-multiline"]=e.multiline;break;case"multiselectable":a["aria-multiselectable"]=e.multiselectable;break;case"orientation":a["aria-orientation"]=e.orientation;break;case"owns":a["aria-owns"]=o(e.owns);break;case"positionInSet":a["aria-posinset"]=e.positionInSet;break;case"pressed":a["aria-pressed"]=e.pressed;break;case"readonly":a["aria-readonly"]=e.readonly;break;case"relevant":a["aria-relevant"]=o(e.relevant);break;case"required":a["aria-required"]=e.required;break;case"selected":a["aria-selected"]=e.selected;break;case"setSize":a["aria-setsize"]=e.setSize;break;case"sort":a["aria-sort"]=e.sort;break;case"valueMax":a["aria-valuemax"]=e.valueMax;break;case"valueMin":a["aria-valuemin"]=e.valueMin;break;case"valueNow":a["aria-valuenow"]=e.valueNow;break;case"valueText":a["aria-valuetext"]=e.valueText}}return a}i.d(a,"a",(function(){return n})),i.d(a,"c",(function(){return t})),i.d(a,"b",(function(){return c}))},2850:function(e,a,i){"use strict";a.a=function(e){return function(a){return null==a?void 0:a[e]}}},3024:function(e,a,i){"use strict";var n=i(658),r=i(403);a.a=function(e){return Object(r.a)(e)&&Object(n.a)(e)}},420:function(e,a,i){"use strict";var n,r=i(792),t=i(325).a["__core-js_shared__"],o=(n=/[^.]+$/.exec(t&&t.keys&&t.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";var c=function(e){return!!o&&o in e},l=i(350),s=i(523),f=/^\[object .+?Constructor\]$/,u=Function.prototype,m=Object.prototype,b=u.toString,d=m.hasOwnProperty,h=RegExp("^"+b.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var y=function(e){return!(!Object(l.a)(e)||c(e))&&(Object(r.a)(e)?h:f).test(Object(s.a)(e))};var g=function(e,a){return null==e?void 0:e[a]};a.a=function(e,a){var i=g(e,a);return y(i)?i:void 0}},4300:function(e,a,i){"use strict";function n(e){return e.localizedName?e.localizedName:e.name}var r=[{name:"Arial",family:"Arial,Helvetica,sans-serif"},{name:"Arial Black",family:"'Arial Black',Arial,sans-serif"},{name:"Calibri",family:"Calibri,Helvetica,sans-serif"},{name:"Calibri Light",family:"'Calibri Light','Helvetica Light',sans-serif"},{name:"Cambria",family:"Cambria,Georgia,serif"},{name:"Candara",family:"Candara,Optima,sans-serif"},{name:"Century Gothic",family:"'Century Gothic',sans-serif"},{name:"Comic Sans MS",family:"'Comic Sans MS',Chalkboard,cursive"},{name:"Consolas",family:"Consolas,Courier,monospace"},{name:"Constantia",family:"Constantia,'Hoefler Text',serif"},{name:"Corbel",family:"Corbel,Skia,sans-serif"},{name:"Courier New",family:"'Courier New',monospace"},{name:"Franklin Gothic Book",family:"'Franklin Gothic Book','Avenir Next Condensed',sans-serif"},{name:"Franklin Gothic Demi",family:"'Franklin Gothic Demi','Avenir Next Condensed Demi Bold',sans-serif"},{name:"Franklin Gothic Medium",family:"'Franklin Gothic Medium','Avenir Next Condensed Medium',sans-serif"},{name:"Garamond",family:"Garamond,Georgia,serif"},{name:"Georgia",family:"Georgia,serif"},{name:"Impact",family:"Impact,Charcoal,sans-serif"},{name:"Lucida Console",family:"'Lucida Console',Monaco,monospace"},{name:"Lucida Handwriting",family:"'Lucida Handwriting','Apple Chancery',cursive"},{name:"Lucida Sans Unicode",family:"'Lucida Sans Unicode','Lucida Grande',sans-serif"},{name:"Palatino Linotype",family:"'Palatino Linotype','Book Antiqua',Palatino,serif"},{name:"Segoe UI",family:"'Segoe UI','Helvetica Neue',sans-serif"},{name:"Sitka Heading",family:"'Sitka Heading',Cochin,serif"},{name:"Sitka Text",family:"'Sitka Text',Cochin,serif"},{name:"Tahoma",family:"Tahoma,Geneva,sans-serif"},{name:"Times",family:"Times,'Times New Roman',serif"},{name:"Times New Roman",family:"'Times New Roman',Times,serif"},{name:"Trebuchet MS",family:"'Trebuchet MS',Trebuchet,sans-serif"},{name:"TW Cen MT",family:"'TW Cen MT','Century Gothic',sans-serif"},{name:"Verdana",family:"Verdana,Geneva,sans-serif"},{name:"-",family:"-"},{name:"Microsoft YaHei",family:"'Microsoft YaHei','微软雅黑',STHeiti,sans-serif",localizedName:"微软雅黑"},{name:"SimHei",family:"SimHei,'黑体',STHeiti,sans-serif",localizedName:"黑体"},{name:"NSimSun",family:"NSimSun,'新宋体',SimSun,'宋体',SimSun-ExtB,'宋体-ExtB',STSong,serif",localizedName:"新宋体"},{name:"FangSong",family:"FangSong,'仿宋',STFangsong,serif",localizedName:"仿宋"},{name:"SimLi",family:"SimLi,'隶书','Baoli SC',serif",localizedName:"隶书"},{name:"KaiTi",family:"KaiTi,'楷体',STKaiti,serif",localizedName:"楷体"},{name:"-",family:"-"},{name:"Microsoft JhengHei",family:"'Microsoft JhengHei','微軟正黑體','Apple LiGothic',sans-serif",localizedName:"微軟正黑體"},{name:"PMingLiU",family:"PMingLiU,'新細明體',PMingLiU-ExtB,'新細明體-ExtB','Apple LiSung',serif",localizedName:"新細明體"},{name:"DFKai-SB",family:"DFKai-SB,'標楷體','BiauKai',serif",localizedName:"標楷體"},{name:"-",family:"-"},{name:"Meiryo",family:"Meiryo,'メイリオ','Hiragino Sans',sans-serif",localizedName:"メイリオ"},{name:"MS PGothic",family:"'MS PGothic','ＭＳ Ｐゴシック','MS Gothic','ＭＳ ゴシック','Hiragino Kaku Gothic ProN',sans-serif",localizedName:"ＭＳ Ｐゴシック"},{name:"MS PMincho",family:"'MS PMincho','ＭＳ Ｐ明朝','MS Mincho','ＭＳ 明朝','Hiragino Mincho ProN',serif",localizedName:"ＭＳ Ｐ明朝"},{name:"Yu Gothic",family:"'Yu Gothic','游ゴシック','YuGothic',sans-serif",localizedName:"游ゴシック"},{name:"Yu Mincho",family:"'Yu Mincho','游明朝','YuMincho',serif",localizedName:"游明朝"},{name:"-",family:"-"},{name:"Malgun Gothic",family:"'Malgun Gothic','맑은 고딕',AppleGothic,sans-serif",localizedName:"맑은 고딕"},{name:"Gulim",family:"Gulim,'굴림','Nanum Gothic',sans-serif",localizedName:"굴림"},{name:"Dotum",family:"Dotum,'돋움',AppleGothic,sans-serif",localizedName:"돋움"},{name:"Batang",family:"Batang,'바탕',AppleMyungjo,serif",localizedName:"바탕"},{name:"BatangChe",family:"BatangChe,'바탕체',AppleMyungjo,serif",localizedName:"바탕체"},{name:"Gungsuh",family:"Gungsuh,'궁서',GungSeo,serif",localizedName:"궁서"},{name:"-",family:"-"},{name:"Leelawadee UI",family:"'Leelawadee UI',Thonburi,sans-serif"},{name:"Angsana New",family:"'Angsana New','Leelawadee UI',Sathu,serif"},{name:"Cordia New",family:"'Cordia New','Leelawadee UI',Silom,sans-serif"},{name:"DaunPenh",family:"DaunPenh,'Leelawadee UI','Khmer MN',sans-serif"},{name:"-",family:"-"},{name:"Nirmala UI",family:"'Nirmala UI',sans-serif"},{name:"Gautami",family:"Gautami,'Nirmala UI','Telugu MN',sans-serif"},{name:"Iskoola Pota",family:"'Iskoola Pota','Nirmala UI','Sinhala MN',sans-serif"},{name:"Kalinga",family:"Kalinga,'Nirmala UI','Oriya MN',sans-serif"},{name:"Kartika",family:"Kartika,'Nirmala UI','Malayalam MN',sans-serif"},{name:"Latha",family:"Latha,'Nirmala UI','Tamil MN',sans-serif"},{name:"Mangal",family:"Mangal,'Nirmala UI','Devanagari Sangam MN',sans-serif"},{name:"Raavi",family:"Raavi,'Nirmala UI','Gurmukhi MN',sans-serif"},{name:"Shruti",family:"Shruti,'Nirmala UI','Gujarati Sangam MN',sans-serif"},{name:"Tunga",family:"Tunga,'Nirmala UI','Kannada MN',sans-serif"},{name:"Vrinda",family:"Vrinda,'Nirmala UI','Bangla MN',sans-serif"},{name:"-",family:"-"},{name:"Nyala",family:"Nyala,Kefa,sans-serif"},{name:"Sylfaen",family:"Sylfaen,Mshtakan,Menlo,serif"}];function t(e){for(var a=e.toUpperCase(),i=0;i<r.length;i++){var n=r[i];if(n.name.toUpperCase()==a||n.localizedName&&n.localizedName.toUpperCase()==a)return n.family}return null}var o="pt",c=[8,10,12,14,18,24,36],l=[8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72],s=l.map((function(e){return e.toString()}));function f(e){return"number"==typeof e&&e<=7?c[e-1]:e}function u(e){var a=f(e).toString();return a?a+o:a}i.d(a,"g",(function(){return n})),i.d(a,"a",(function(){return r})),i.d(a,"d",(function(){return t})),i.d(a,"b",(function(){return l})),i.d(a,"c",(function(){return s})),i.d(a,"e",(function(){return f})),i.d(a,"f",(function(){return u}))},4537:function(e,a,i){"use strict";i.d(a,"d",(function(){return n})),i.d(a,"b",(function(){return r})),i.d(a,"c",(function(){return t})),i.d(a,"a",(function(){return o}));var n=["#51a7f9","#6fc040","#f5d427","#f3901d","#ed5c57","#b36ae2","#0c64c0","#0c882a","#dcbe22","#de6a19","#c82613","#763e9b","#174e86","#0f5c1a","#c3971d","#be5b17","#861106","#5e327c","#002451","#06400c","#a37519","#934511","#570606","#3b204d","#ffffff","#cccccc","#999999","#666666","#333333","#000000"],r=["#0075c2","#207a00","#5d4d00","#ab5500","#df504d","#ab63da","#6da0ff","#3da848","#6d5c00","#d3610c","#ff6847","#d394f9","#93b8f9","#7fc57b","#946f00","#de7633","#ff9b7c","#dea9fd","#cedbff","#a3da9b","#b5852a","#ef935c","#ffc0b1","#eecaff","#333333","#535353","#777777","#a0a0a0","#cfcfcf","#ffffff"],t=["#00ffff","#00ff00","#ffff00","#ff8000","#ff0000","#ff00ff","#80ffff","#80ff80","#ffff80","#ffc080","#ff8080","#ff80ff","#ffffff","#cccccc","#999999","#666666","#333333","#000000"],o=["#005357","#005e00","#383e00","#bf4c00","#ff2711","#e700e8","#004c4f","#005400","#343c00","#77480b","#bc454a","#aa2bad","#333333","#535353","#777777","#a0a0a0","#cfcfcf","#ffffff"]},523:function(e,a,i){"use strict";var n=Function.prototype.toString;a.a=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},5568:function(e,a,i){"use strict";var n=i(995),r=i(996),t=i(960),o=i(2850),c=i(988),l=i(3024),s=Math.max;var f=function(e){if(!e||!e.length)return[];var a=0;return e=Object(r.a)(e,(function(e){if(Object(l.a)(e))return a=s(e.length,a),!0})),Object(c.a)(a,(function(a){return Object(t.a)(e,Object(o.a)(a))}))},u=Object(n.a)(f);a.a=u},658:function(e,a,i){"use strict";var n=i(792),r=i(794);a.a=function(e){return null!=e&&Object(r.a)(e.length)&&!Object(n.a)(e)}},663:function(e,a,i){"use strict";var n=i(420),r=function(){try{var e=Object(n.a)(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();a.a=r},792:function(e,a,i){"use strict";var n=i(419),r=i(350),t="[object AsyncFunction]",o="[object Function]",c="[object GeneratorFunction]",l="[object Proxy]";a.a=function(e){if(!Object(r.a)(e))return!1;var a=Object(n.a)(e);return a==o||a==c||a==t||a==l}},794:function(e,a,i){"use strict";var n=9007199254740991;a.a=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},797:function(e,a,i){"use strict";a.a=function(e){return e}},988:function(e,a,i){"use strict";a.a=function(e,a){for(var i=-1,n=Array(e);++i<e;)n[i]=a(i);return n}},995:function(e,a,i){"use strict";var n=i(797),r=i(1005),t=i(1004);a.a=function(e,a){return Object(t.a)(Object(r.a)(e,a,n.a),e+"")}},996:function(e,a,i){"use strict";a.a=function(e,a){for(var i=-1,n=null==e?0:e.length,r=0,t=[];++i<n;){var o=e[i];a(o,i,e)&&(t[r++]=o)}return t}}}]);
//# sourceMappingURL=owa.290.js.map
self.scriptsLoaded['owa.290.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.290.js'] = (new Date()).getTime();