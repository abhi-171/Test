self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~ImmersiveReaderContainer.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[608],{11175:function(e,t,r){"use strict";r.r(t);var o=r(32),a=r(12860),i=r(7),c=r(16),n=r(1),s=r(134),l=r(1853),d=r(40),m=r(25),b=r(5034),u=r(2182),g=r(1819),h=r(2672),f=r(12861),p="https://learningtools.edog.onenote.com/learningtoolsapp/reader",O="https://learningtools.onenote.com/learningtoolsapp/reader";function y(e){Object(u.a)("Keyboard")}var j=Object(o.a)((function(e){var t=n.useRef();Object(g.c)(t,Object(h.b)().closeMail,y),n.useEffect((function(){var e=Object(c.autorun)((function(){b.e.apiResponse&&2===b.e.immersiveReaderFrameState&&o.current&&(u.current&&u.current.addCheckmark("SendingPostMessageToFrame"),o.current.contentWindow.postMessage(JSON.stringify(b.e.apiResponse),"*"))}));return function(){e()}}),[]);Object(l.a)("message",(function(e){e&&0!==b.e.immersiveReaderFrameState&&0===r.current.toLowerCase().indexOf(e.origin.toLowerCase())&&("ImmersiveReader-ReadyForContent"===e.data?(u.current&&u.current.addCheckmark("ReceivedReadyForContent"),Object(b.c)(),o.current.focus()):"CloseImmersiveReader"===e.data&&(u.current&&u.current.addCheckmark("ReceivedCloseReader"),j.current=!0,Object(b.a)()))}));var r=n.useRef(function(){var e=O;Object(d.i)("rp-immersiveReaderDogfood")&&(e=p);var t=Object(m.a)().SessionSettings.UserCulture;return e+"?exitCallback=CloseImmersiveReader&appId=OWA&sessionId="+b.e.sessionId+"&ui="+t+"&appSubId=React"}()),o=n.useRef(),u=n.useRef(),j=n.useRef();return 0===b.e.immersiveReaderFrameState||u.current?0===b.e.immersiveReaderFrameState&&u.current&&(j.current?u.current.end():u.current.endWithError("ServerError",new Error("Did not receive close callback")),u.current=null):(u.current=new s.b("ImmersiveReaderContainer"),u.current.addCustomData({sessionId:b.e.sessionId}),j.current=!1),0!==b.e.immersiveReaderFrameState?n.createElement("div",{className:f.immersiveReaderContainer,ref:t},n.createElement("iframe",{"aria-modal":"true",id:"immersive-reader-iframe",className:f.immersiveReaderIframe,title:Object(i.b)(a.a),allowFullScreen:!0,src:r.current,ref:function(e){u.current&&u.current.addCheckmark("GotFrameRef"),o.current=e}})):null}));r.d(t,"ImmersiveReaderContainer",(function(){return j}))},12860:function(e){e.exports=JSON.parse('{"a":"mMc"}')},12861:function(e,t,r){var o=r(12862),a=r(107);"string"==typeof o&&(o=[[e.i,o]]);for(var i=0;i<o.length;i++)a.loadStyles(o[i][1],!1);o.locals&&(e.exports=o.locals)},12862:function(e,t,r){(t=e.exports=r(106)(!1)).push([e.i,"._1gop7q4bCchow_bCsGR2xp{top:0;bottom:0;position:absolute;z-index:3001}html[dir=ltr] ._1gop7q4bCchow_bCsGR2xp,html[dir=rtl] ._1gop7q4bCchow_bCsGR2xp{left:0;right:0}._3Aug-3iJYlDVJH1X_Xo95r{position:fixed;top:0;bottom:0;width:100%;height:100%}html[dir] ._3Aug-3iJYlDVJH1X_Xo95r{border:0;margin:0;padding:0}html[dir=ltr] ._3Aug-3iJYlDVJH1X_Xo95r,html[dir=rtl] ._3Aug-3iJYlDVJH1X_Xo95r{left:0;right:0}",""]),t.locals={immersiveReaderContainer:"_1gop7q4bCchow_bCsGR2xp",immersiveReaderIframe:"_3Aug-3iJYlDVJH1X_Xo95r"}},1853:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(1),a={};function i(e){var t;null===(t=a[e.type])||void 0===t||t.forEach((function(t){return t(e)}))}function c(e){var t;return a[e]=null!==(t=a[e])&&void 0!==t?t:new Map}function n(e,t,r){var a=o.useRef();o.useEffect((function(){return function(e,t,r){var o=c(e);0===o.size&&window.addEventListener(e,i),o.set(t,r)}(e,a,t),function(){return function(e,t){var r=c(e);r.delete(t),0===r.size&&window.removeEventListener(e,i)}(e,a)}}),r)}},1972:function(e,t,r){"use strict";var o=r(3),a=Object(o.action)("closeFlexPane",(function(e){return{flexPaneId:e}}));t.a=a},2220:function(e,t,r){"use strict";function o(){return window.O365Shell}var a=r(3),i=Object(a.action)("openFlexPane",(function(e){return{flexPaneId:e}})),c=(Object(a.orchestrator)(i,(function(e){var t=o();t&&t.FlexPane.OpenFlexPaneForProvider(e.flexPaneId)})),r(1972));Object(a.orchestrator)(c.a,(function(e){var t=o();t&&t.FlexPane.CloseFlexPaneForProvider(e.flexPaneId)}));function n(e){var t=o();t&&t.Theme.SetSearchActive(e)}function s(e,t){requestAnimationFrame((function(){return o().Extensibility.SetCustomHeaderButtonBadgeValue(e,t)}))}function l(e,t){o().Extensibility.UpdateButtonState(e,t)}r.d(t,"a",(function(){return c.a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return l}))},2297:function(e){e.exports=JSON.parse('{"b":"p3a","a":"q3a","c":"r3a","d":"s3a","e":"t3a"}')},2320:function(e,t,r){"use strict";var o=r(7),a=r(2297),i=r(1786),c="goTo",n="ctrl+shift+1",s="ctrl+shift+2",l="ctrl+shift+3",d="ctrl+shift+4";function m(){return{gotoMail:{category:c,description:Object(o.b)(a.b),hotmail:n,yahoo:n,gmail:n,owa:n},gotoCalendar:{category:c,description:Object(o.b)(a.a),hotmail:s,yahoo:s,gmail:s,owa:s},gotoPeople:{category:c,description:Object(o.b)(a.c),hotmail:l,yahoo:l,gmail:l,owa:l},gotoToDo:{category:c,description:Object(i.b)()?Object(o.b)(a.e):Object(o.b)(a.d),hotmail:d,yahoo:d,gmail:d,owa:d}}}r.d(t,"a",(function(){return m}))},2672:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return y}));var o=r(0),a=r(3018),i=r(3093),c=r(2733),n=r(2907),s=r(2908),l=r(7),d=r(40),m=r(76),b=r(2320),u="writeEmail",g="emailList",h="readEmail",f="goTo",p="emailActions";function O(){return[{category:u,displayName:Object(l.b)(i.Q)},{category:g,displayName:Object(l.b)(i.i)},{category:h,displayName:Object(l.b)(i.G)},{category:f,displayName:Object(l.b)(i.r)},{category:p,displayName:Object(l.b)(i.h)}]}function y(){var e={};return Object(d.i)("cmp-quickSwitcher")&&(e.goToQuickSwitcher={category:f,description:Object(l.b)(i.t),hotmail:"ctrl+shift+k",yahoo:"ctrl+shift+k",gmail:"ctrl+shift+k",owa:"ctrl+shift+k"}),Object(o.__assign)(Object(o.__assign)(Object(o.__assign)({},Object(b.a)()),{newMail:{category:u,description:Object(l.b)(i.A),hotmail:["n"],yahoo:"n",gmail:"c",owa:["n"]},sendMail:{category:u,description:Object(l.b)(i.L),hotmail:Object(m.l)()?["ctrl+enter"]:["ctrl+enter","alt+s"],yahoo:"alt+s",gmail:"ctrl+enter",owa:Object(m.l)()?["ctrl+enter"]:["ctrl+enter","alt+s"]},reply:{category:u,description:Object(l.b)(i.I),hotmail:"r",yahoo:"r",gmail:"r",owa:["r","ctrl+r"]},replyAll:{category:u,description:Object(l.b)(i.H),hotmail:["a","shift+r"],yahoo:"a",gmail:"a",owa:["shift+r","ctrl+shift+r"]},forward:{category:u,description:Object(l.b)(i.p),hotmail:"shift+f",yahoo:"f",gmail:"f",owa:["shift+f","ctrl+shift+f"]},saveDraft:{category:u,description:Object(l.b)(i.J),hotmail:"ctrl+s",yahoo:"ctrl+s",gmail:"ctrl+s",owa:"ctrl+s"},discardDraft:{category:u,description:Object(l.b)(i.g),hotmail:"esc",owa:"esc"},gotoInbox:{category:f,description:Object(l.b)(i.s),hotmail:"g i",yahoo:"m",gmail:"g i",owa:"g i"},gotoDrafts:{category:f,description:Object(l.b)(i.q),hotmail:"g d",gmail:"g d",owa:"g d"},gotoSent:{category:f,description:Object(l.b)(i.u),hotmail:"g s",gmail:"g t",owa:"g s"},gotoSearch:{category:f,description:Object(l.b)(i.K),hotmail:"/",yahoo:"s",gmail:"/",owa:"alt+q"},undoAction:{category:p,description:Object(l.b)(i.P),hotmail:"ctrl+z",yahoo:"ctrl+z",gmail:"ctrl+z",owa:"ctrl+z"},selectUnselectMessage:{category:g,description:Object(l.b)(i.O),hotmail:"ctrl+space",yahoo:"ctrl+space",gmail:["x","ctrl+x"],owa:"ctrl+space"},selectAll:{category:g,description:Object(l.b)(a.a),hotmail:"ctrl+a",yahoo:"ctrl+a",gmail:"ctrl+a",owa:"ctrl+a"},deselectAll:{category:g,description:Object(l.b)(i.c),hotmail:"esc",yahoo:"esc",gmail:"esc",owa:"esc"},home:{category:g,description:Object(l.b)(i.v),hotmail:["home","ctrl+home"],yahoo:["home","ctrl+home"],gmail:["home","ctrl+home"],owa:["home","ctrl+home"]},end:{category:g,description:Object(l.b)(i.j),hotmail:["end","ctrl+end"],yahoo:["end","ctrl+end"],gmail:["end","ctrl+end"],owa:["end","ctrl+end"]},deleteMail:{category:p,description:Object(l.b)(i.f),hotmail:"del",yahoo:"del",gmail:"#",owa:"del"},openMail:{category:h,description:Object(l.b)(i.C),hotmail:["o","enter"],gmail:["o","enter"],owa:["o","enter"]},openMailInPopout:{category:h,description:Object(l.b)(i.D),hotmail:"shift+enter",gmail:"shift+enter",owa:"shift+enter",yahoo:"shift+enter"},closeMail:{category:h,description:Object(l.b)(i.d),hotmail:"esc",yahoo:"esc",gmail:"u",owa:"esc"},openNextItem:{category:h,description:Object(l.b)(i.E),hotmail:"ctrl+.",yahoo:"ctrl+.",gmail:"j",owa:"ctrl+."},openPrevItem:{category:h,description:Object(l.b)(i.F),hotmail:"ctrl+,",yahoo:"ctrl+,",gmail:"k",owa:"ctrl+,"},focusNextItemPart:{category:h,description:Object(l.b)(i.n),hotmail:".",gmail:"n",owa:"."},focusPrevItemPart:{category:h,description:Object(l.b)(i.o),hotmail:",",gmail:"p",owa:","},expandCollapseAll:{category:h,description:Object(l.b)(i.k),hotmail:"x",owa:"x"},expandAll:{category:h,description:Object(l.b)(i.l),gmail:";"},collapseAll:{category:h,description:Object(l.b)(i.e),gmail:":"},softDeleteMail:{category:p,description:Object(l.b)(i.N),hotmail:"shift+del",yahoo:"shift+del",gmail:"shift+del",owa:"shift+del"},newFolder:{category:p,description:Object(l.b)(i.B),hotmail:"shift+e",yahoo:"ctrl+shift+e",owa:"shift+e"},markAsRead:{category:p,description:Object(l.b)(i.y),hotmail:"q",yahoo:"k",gmail:"shift+i",owa:Object(m.l)()?"q":["q","ctrl+q"]},markAsUnread:{category:p,description:Object(l.b)(i.z),hotmail:"u",yahoo:"shift+k",gmail:"shift+u",owa:["u","ctrl+u"]},toggleFlag:{category:p,description:Object(l.b)(i.m),hotmail:"ins",yahoo:"l",gmail:"s",owa:"ins"},archiveMail:{category:p,description:Object(l.b)(i.a),hotmail:"e",gmail:"e",owa:"e"},markAsJunk:{category:p,description:Object(l.b)(i.x),hotmail:"j",gmail:"shift+1",owa:"j"},moveToFolder:{category:p,description:Object(l.b)(c.a),hotmail:"v",gmail:"v",owa:"v"},categorize:{category:p,description:Object(l.b)(i.b),hotmail:"c",gmail:"l",owa:"c"},ignore:{category:p,description:Object(l.b)(n.a),hotmail:"ctrl+del",owa:"ctrl+del"},snooze:{category:p,description:Object(l.b)(s.a),hotmail:"b",gmail:"b",owa:"b"},insertHyperlink:{category:u,description:Object(l.b)(i.w),hotmail:"ctrl+k",gmail:"ctrl+k",owa:"ctrl+k"},keyboardShortcuts:{category:f,description:Object(l.b)(i.M),hotmail:"?",gmail:"?",owa:"?",yahoo:"?"}}),e)}},2733:function(e){e.exports=JSON.parse('{"a":"Sfa"}')},2907:function(e){e.exports=JSON.parse('{"a":"u2b"}')},2908:function(e){e.exports=JSON.parse('{"a":"t2b"}')},3018:function(e){e.exports=JSON.parse('{"a":"k3b"}')},3080:function(e,t,r){"use strict";var o=r(3);t.a=Object(o.action)("SHOW_IN_IMMERSIVE_READER",(function(e,t,r){return{itemId:e,actionSource:t,subActionSource:r}}))},3093:function(e){e.exports=JSON.parse('{"Q":"v2b","i":"w2b","G":"x2b","r":"y2b","h":"z2b","t":"A2b","A":"B2b","L":"C2b","I":"D2b","H":"E2b","p":"F2b","J":"G2b","g":"H2b","s":"I2b","q":"J2b","u":"K2b","K":"L2b","P":"M2b","c":"N2b","v":"O2b","j":"P2b","f":"Q2b","C":"R2b","D":"S2b","d":"T2b","E":"U2b","F":"V2b","n":"W2b","o":"X2b","k":"Y2b","l":"Z2b","e":"_2b","N":"$2b","B":"a3b","y":"b3b","z":"c3b","m":"d3b","a":"e3b","x":"f3b","b":"g3b","w":"h3b","M":"i3b","O":"j3b"}')},347:function(e,t,r){"use strict";var o=r(0);function a(e,t){return e?Object(o.__assign)({mailboxInfo:e},t):null!=t?t:void 0}r.d(t,"a",(function(){return a}))},5034:function(e,t,r){"use strict";var o=r(0),a=r(5112),i=r(7),c=r(3),n=r(3080),s=function(e){return new Promise((function(t){return setTimeout((function(){t()}),e)}))},l=r(28),d=r(374);function m(e,t,r,o){return i=o,void 0===(a={itemId:e,sessionId:t,version:r}).itemId||a.itemId.__type||(a.itemId=Object(d.a)(a.itemId)),Object(l.a)("ImmersiveReaderProcessText",a,i);var a,i}var b=r(134),u=r(877),g=r(2220),h=r(347),f=(Object(c.orchestrator)(n.a,(function(e){return Object(o.__awaiter)(void 0,void 0,void 0,(function(){var t,r,c,n,l,y,j,w,R,S,I,x,C;return Object(o.__generator)(this,(function(o){switch(o.label){case 0:if(t=e.itemId,r=v(),!t||r.isLoading||0!==r.immersiveReaderFrameState)return[2];Object(g.a)(null),(c=new b.b("ShowInImmersiveReader")).addCustomData({sessionId:r.sessionId,subAction:e.subActionSource}),c.addActionSource(e.actionSource),f(!0),p(!0),n=(new Date).getUTCMilliseconds(),l=!0,y=null,j=null,o.label=1;case 1:return o.trys.push([1,7,8,9]),[4,m(Object(d.a)({Id:t.Id}),r.sessionId,"2.0",Object(h.a)(t.mailboxInfo))];case 2:if(w=o.sent(),c.addCheckmark("ImmersiveReaderProcessText_Done"),w&&w.ReaderModelJson?y=JSON.parse(w.ReaderModelJson):(l=!1,j="Response from service call was null or did not contain a ReaderModelJson"),!l)return[3,6];R=(new Date).getUTCMilliseconds(),S=(R-n).toString(),null,y.launchToPostMessageSentDurationInMs=S,O({messageType:"LinguisticModel",messageValue:y}),I=120,x=0,o.label=3;case 3:return x<I&&1===v().immersiveReaderFrameState?[4,s(500)]:[3,5];case 4:return o.sent(),x++,[3,3];case 5:1===v().immersiveReaderFrameState&&(l=!1,j="Frame never got to Ready state"),o.label=6;case 6:return[3,9];case 7:return C=o.sent(),l=!1,c.addCheckmark("CaughtException"),j=C.toString(),[3,9];case 8:return f(!1),[7];case 9:return l?c.end():(p(!1),c.endWithError("ServerError",new Error(j)),Object(u.b)(Object(i.b)(a.b),Object(i.b)(a.a),!1,{hideCancelButton:!0})),[2]}}))}))})),Object(c.mutatorAction)("toggleImmersiveReaderLoadingState",(function(e){v().isLoading=e}))),p=Object(c.mutatorAction)("toggleImmersiveReaderShowingState",(function(e){v().immersiveReaderFrameState=e?1:0})),O=Object(c.mutatorAction)("setImmersiveReaderApiResponse",(function(e){v().apiResponse=e})),y=r(208),j={sessionId:Object(y.a)(),isLoading:!1,immersiveReaderFrameState:0,apiResponse:null},v=Object(c.createStore)("immersivereader",j),w=v(),R=Object(c.mutatorAction)("setImmersiveReaderFrameReady",(function(){v().immersiveReaderFrameState=2})),S=Object(c.mutatorAction)("closeImmersiveReader",(function(){var e=v();e.immersiveReaderFrameState=0,e.apiResponse=null}));r.d(t,"e",(function(){return w})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return R})),r.d(t,"a",(function(){return S})),r.d(t,"d",(function(){return n.a}))},5112:function(e){e.exports=JSON.parse('{"b":"rYb","a":"sYb"}')}}]);
//# sourceMappingURL=owa.MailBoot~ImmersiveReaderContainer.js.map
self.scriptsLoaded['owa.MailBoot~ImmersiveReaderContainer.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~ImmersiveReaderContainer.js'] = (new Date()).getTime();