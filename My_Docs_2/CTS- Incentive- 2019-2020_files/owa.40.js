self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.40.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[40],{10220:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678);t.default=function(e,t){if((null==t?void 0:t.length)>0){var n=e.getSelectionRange(),o=n&&r.Position.getStart(n),a=n&&r.Position.getEnd(n);t.forEach((function(e){return e.commit()})),e.select(o,a)}}},10221:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6502);t.default=function(e,t){if("string"==typeof t){var n=t.trim();r.default(e,(function(e,t){e.style.backgroundColor=t?"":n}))}else{var o=e.isDarkMode(),a=o?t.darkModeColor:t.lightModeColor;r.default(e,(function(e,n){e.style.backgroundColor=n?"":a,o&&(e.dataset.ogsb=t.lightModeColor)}))}}},10222:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6502);t.default=function(e,t){t=t.trim(),r.default(e,(function(e,n){e.style.fontFamily=n?"":t}))}},10223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6502),o=n(1678);t.default=function(e,t){t=t.trim(),r.default(e,(function(e,n){e.style.fontSize=n?"":t,"normal"!=o.getComputedStyle(e,"line-height")&&(e.style.lineHeight="normal")}))}},10224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6502);t.default=function(e,t){if("string"==typeof t){var n=t.trim();r.default(e,(function(e,t){e.style.color=t?"":n}))}else{var o=e.isDarkMode(),a=o?t.darkModeColor:t.lightModeColor;r.default(e,(function(e,n){e.style.color=n?"":a,o&&(e.dataset.ogsc=t.lightModeColor)}))}}},10225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4888);t.default=function(e){r.default(e,"bold")}},10226:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4888);t.default=function(e){r.default(e,"italic")}},10227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4888);t.default=function(e){r.default(e,"underline")}},10228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7285),o=n(1678);t.default=function(e,t,n){r.default(e,(function(e){var n=o.getSelectedBlockElementsInRegion(e,!0),r=o.collapseNodesInRegion(e,n);if(r.length>0){if(1==r.length){var a=o.getTagOfNode(r[0]);"BR"==a?r=[o.wrap(r[0])]:"LI"!=a&&"TD"!=a||(r=o.toArray(r[0].childNodes))}for(;r[0]&&o.isNodeInRegion(e,r[0].parentNode)&&r.some((function(e){return"LI"==o.getTagOfNode(e)}));)r=[o.splitBalancedNodeRange(r)];t(r)}}),n)}},12267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6502),o=n(1678);t.FONT_SIZES=[8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72];var a=1,l=1e3;function i(e,t,n){e=1==t?Math.floor(e):Math.ceil(e);var r=n[n.length-1];if(e<=n[0])e=Math.max(e+t,a);else if(e>r||e==r&&1==t)e/=10,e=1==t?Math.floor(e):Math.ceil(e),e=Math.min(Math.max(10*(e+t),r),l);else if(1==t){for(var o=0;o<n.length;o++)if(e<n[o]){e=n[o];break}}else for(o=n.length-1;o>=0;o--)if(e>n[o]){e=n[o];break}return e}t.default=function(e,n,a){void 0===a&&(a=t.FONT_SIZES);var l=0==n?1:-1;r.default(e,(function(e){var t=parseFloat(o.getComputedStyle(e,"font-size"));e.style.fontSize=i(t,l,a)+"pt","normal"!=o.getComputedStyle(e,"line-height")&&(e.style.lineHeight="normal")}))},t.getNewFontSize=i},12268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7285),o=n(1678),a="B,I,U,STRONG,EM,SUB,SUP,STRIKE,FONT,CENTER,H1,H2,H3,H4,H5,H6,UL,OL,LI,SPAN,P,BLOCKQUOTE,CODE,S,PRE".split(","),l=["href","src"],i=["TD","TH","TR","TABLE","TBODY","THEAD"];function u(e){var t=o.toArray(e.childNodes).map(u).every((function(e){return e})),n=o.isBlockElement(e),r=o.getTagOfNode(e);return r&&(a.indexOf(r)>=0||t&&!o.isVoidHtmlElement(e)&&i.indexOf(r)<0?(n&&!t&&o.wrap(e),o.unwrap(e)):function(e){for(var t=o.safeInstanceOf(e,"HTMLTableCellElement"),n=0,r=o.toArray(e.attributes);n<r.length;n++){var a=r[n];t&&"style"==a.name?d(e):l.indexOf(a.name.toLowerCase())<0&&0!=a.name.indexOf("data-")&&e.removeAttribute(a.name)}}(e)),n}function d(e){var t=o.getStyles(e),n={};return Object.keys(t).forEach((function(e){e.indexOf("border")<0&&(n[e]=t[e],delete t[e])})),o.setStyles(e,t),n}t.default=function(e){r.default(e,(function(t){var n=o.getSelectedBlockElementsInRegion(t),r=o.collapseNodesInRegion(t,n);if(e.contains(t.rootNode)){var a=d(t.rootNode);if(Object.keys(a).length>0){var l=o.wrap(o.toArray(t.rootNode.childNodes));o.setStyles(l,a)}}for(;r.length>0&&o.isNodeInRegion(t,r[0].parentNode);)r=[o.splitBalancedNodeRange(r)];r.forEach(u)}))}},12269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4888),o=n(10221),a=n(10222),l=n(10223),i=n(10224),u=n(10225),d=n(10226),c=n(10227),f=["font","text-decoration","color","background"];t.default=function(e){e.focus(),e.addUndoSnapshot((function(){r.default(e,"removeFormat"),e.queryElements("[class]",1,(function(e){return e.removeAttribute("class")}));var t=e.getDefaultFormat(),n=0===Object.keys(t).length;e.queryElements("[style]",2,(function(e){f.forEach((function(t){return e.style.removeProperty(t)})),n&&""===e.getAttribute("style")&&e.removeAttribute("style")})),n||(t.fontFamily&&a.default(e,t.fontFamily),t.fontSize&&l.default(e,t.fontSize),t.textColor&&(t.textColors?i.default(e,t.textColors):i.default(e,t.textColor)),t.backgroundColor&&(t.backgroundColors?o.default(e,t.backgroundColors):o.default(e,t.backgroundColor)),t.bold&&u.default(e),t.italic&&d.default(e),t.underline&&c.default(e))}),"Format")}},12270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678),o=/^[a-zA-Z]+:/i,a=/^[\w.%+-]+@/i,l=/^ftp\./i,i="istemptitle";function u(e){return e.queryElements("a[href]",1)[0]}function d(e,t){t&&e.textContent!=t&&(e.textContent=t)}t.default=function(e,t,n,c){e.focus();var f=(function(e){var t=new r.HtmlSanitizer,n=(new DOMParser).parseFromString("<a></a>","text/html"),o=n.body.firstChild;return o.href=e||"",t.sanitize(n.body),o.getAttribute("href")}(t)||"").trim();if(f){var s=r.matchLink(f),g=s?s.normalizedUrl:function(e){if(!e)return e;var t="";return e.search(o)<0&&(t=0==e.search(a)?"mailto:":0==e.search(l)?"ftp://":"http://"),t+e}(f),m=s?s.originalUrl:f;e.addUndoSnapshot((function(){var t=e.getSelectionRange(),r=null;return t&&t.collapsed?(r=u(e))?(r.href=g,d(r,c)):((r=e.getDocument().createElement("A")).textContent=c||m,r.href=g,e.insertNode(r)):(e.getDocument().execCommand("createLink",!1,g),d(r=u(e),c)),n&&r&&(r.removeAttribute(i),r.title=n),r}),"CreateLink")}}},12271:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1678);function a(e,t){var n=o.getTagOfNode(e.getElementAtCursor("OL,UL",null,t)),r=o.getTagOfNode(e.getElementAtCursor("H1,H2,H3,H4,H5,H6",null,t));return{isBullet:"UL"==n,isNumbering:"OL"==n,headerLevel:r&&parseInt(r[1])||0,canUnlink:!!e.queryElements("a[href]",1)[0],canAddImageAltText:!!e.queryElements("img",1)[0],isBlockQuote:!!e.queryElements("blockquote",1)[0]}}t.getElementBasedFormatState=a,t.default=function(e,t){return r(r(r(r({},o.getPendableFormatState(e.getDocument())),a(e,t)),e.getStyleBasedFormatState()),e.getUndoState())}},12272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678);t.default=function(e,t,n,o,a,l){var i=r.wrap(n,o?"DIV":"SPAN");if(!o&&a&&(i.style.display="inline-block"),r.commitEntity(i,t,a),!e.contains(i)){var u=void 0,d=void 0;if("number"==typeof l)d=l;else if(l){u=e.getSelectionRange();var c=l.normalize().node,f=c&&e.getElementAtCursor(r.getEntitySelector(),c);f&&(l=new r.Position(f,-3)),e.select(l),d=3}else e.focus(),d=3;e.insertNode(i,{updateCursor:!1,insertOnNewLine:o,replaceSelection:!0,position:d}),3==d&&(u?e.select(u):o||e.select(i,-3))}if(o){var s=e.getDocument().createElement("BR");i.parentNode.insertBefore(s,i.nextSibling)}var g=r.getEntityFromElement(i);return e.triggerContentChangedEvent("InsertEntity",g),g}},12273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678);function o(e,t){e.addUndoSnapshot((function(){var n=e.getDocument().createElement("img");n.src=t,n.style.maxWidth="100%",e.insertNode(n)}),"Format")}t.default=function(e,t){"string"==typeof t?o(e,t):r.readFile(t,(function(t){t&&!e.isDisposed()&&o(e,t)}))}},12274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678);function o(e){return e<=4?"120px":e<=6?"100px":"70px"}t.default=function(e,t,n,a){var l=e.getDocument(),i=l.createDocumentFragment(),u=l.createElement("table");i.appendChild(u),u.cellSpacing="0",u.cellPadding="1";for(var d=0;d<n;d++){var c=l.createElement("tr");u.appendChild(c);for(var f=0;f<t;f++){var s=l.createElement("td");c.appendChild(s),s.appendChild(l.createElement("br")),s.style.width=o(t)}}e.focus(),e.addUndoSnapshot((function(){var t=new r.VTable(u);t.applyFormat(a||{bgColorEven:"#FFF",bgColorOdd:"#FFF",topBorderColor:"#ABABAB",bottomBorderColor:"#ABABAB",verticalBorderColor:"#ABABAB"}),t.writeBack(),e.insertNode(i),e.runAsync((function(e){return e.select(new r.Position(u,0).normalize())}))}),"Format")}},12275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678);t.default=function(e,t){var n=e.getElementAtCursor("TD,TH");n&&e.addUndoSnapshot((function(o,a){var l=new r.VTable(n);l.edit(t),l.writeBack(),e.focus();var i=function(e,t,n){var r=t,o=n;switch(e){case 0:o=0;break;case 1:r+=1,o=0;break;case 2:r=0;break;case 3:r=0,o+=1}return{newRow:r,newCol:o}}(t,l.row,l.col);e.select(l.getCell(i.newRow,i.newCol).td,0)}),"Format")}},12276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678);t.default=function(e,t,n){(n=n||e.getElementAtCursor("TABLE"))&&e.addUndoSnapshot((function(o,a){var l=new r.VTable(n);l.applyFormat(t),l.writeBack(),e.focus(),e.select(o,a)}),"Format")}},12277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678);t.default=function(e){e.focus(),e.addUndoSnapshot((function(t,n){e.queryElements("a[href]",1,r.unwrap),e.select(t,n)}),"Format")}},12278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r,o){if(!t||!n)return!1;var a;if(a="string"==typeof t?(o=o||e.getContentSearcherOfCursor())&&o.getRangeFromText(t,r):t){var l=e.getSelectionRange();return l.collapsed&&a.endContainer==l.startContainer&&a.endOffset==l.startOffset&&(r=!0),e.insertNode(n,{position:5,updateCursor:r,replaceSelection:!0,insertOnNewLine:!1,range:a}),!0}return!1}},12279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){t&&e.addUndoSnapshot((function(){t.style.transform="rotate("+n+"deg)"}),"Format")}},12280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4888);t.default=function(e,t){var n="justifyLeft",o="left";1==t?(n="justifyCenter",o="center"):2==t&&(n="justifyRight",o="right"),e.addUndoSnapshot((function(){r.default(e,n),e.queryElements("[align]",1,(function(e){return e.style.textAlign=o}))}),"Format")}},12281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12282);t.default=function(e,t){e.focus(),e.addUndoSnapshot((function(n,o){r.default(e,(function(e){e.setAttribute("dir",0==t?"ltr":"rtl"),e.style.textAlign=0==t?"left":"right"})),e.select(n,o)}),"Format")}},12282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678);function o(e){var t=e.getStartNode();return t==e.getEndNode()&&3==t.nodeType&&["TR","TABLE"].indexOf(r.getTagOfNode(t.parentNode))>=0}t.default=function(e,t){for(var n=e.getSelectionTraverser(),r=n&&n.currentBlockElement,a=[];r;)o(r)||a.push(r),r=n.getNextBlockElement();a.forEach((function(e){var n=e.collapseToSingleElement();t(n)}))}},12283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.focus(),e.addUndoSnapshot((function(){e.queryElements("img",1,(function(e){return e.setAttribute("alt",t)}))}),"Format")}},12284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12285),o=n(8386);t.default=function(e,t){if(e.isFeatureEnabled("NewIndentation"))r.default(e,t);else{var n=0==t?"indent":"outdent";e.addUndoSnapshot((function(){var t;return e.focus(),e.getElementAtCursor("OL,UL")?t=o.default(e,n):(e.getDocument().execCommand(n,!1,null),e.queryElements("BLOCKQUOTE",1,(function(e){t=t||e,e.style.marginTop="0px",e.style.marginBottom="0px"}))),t}),"Format")}}},12285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7285),o=n(1678),a='<blockquote style="margin-top:0;margin-bottom:0"></blockquote>';function l(e,t){var n=o.collapseNodesInRegion(e,t);o.wrap(n,a)}function i(e,t){t.forEach((function(t){var n=t.collapseToSingleElement(),r=o.findClosestElementAncestor(n,e.rootNode,"blockquote");if(r){for(n==r&&(n=o.wrap(o.toArray(n.childNodes)));o.isNodeInRegion(e,n)&&"BLOCKQUOTE"!=o.getTagOfNode(n);)n=o.splitBalancedNodeRange(n);o.isNodeInRegion(e,n)&&o.unwrap(n)}}))}t.default=function(e,t){var n=0==t?l:i;r.default(e,(function(e,r,a){for(var l=o.getSelectedBlockElementsInRegion(e,!0),i=[[]],u=0;u<l.length;u++){var d=l[u].getStartNode(),c=o.createVListFromRegion(e,!0,d);if(c){for(i.push([]);l[u+1]&&c.contains(l[u+1].getStartNode());)u++;c.setIndentation(r,a,t),c.writeBack()}else i[i.length-1].push(l[u])}i.forEach((function(t){return n(e,t)}))}))}},12286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8387),o=n(8386);t.default=function(e){e.isFeatureEnabled("NewBullet")?r.default(e,2):(e.focus(),e.addUndoSnapshot((function(){return o.default(e,"insertUnorderedList")}),"Format"))}},12287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8387),o=n(8386);t.default=function(e){e.isFeatureEnabled("NewNumbering")?r.default(e,1):(e.focus(),e.addUndoSnapshot((function(){return o.default(e,"insertOrderedList")}),"Format"))}},12288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10228),o=n(1678),a="blockquote",l=function(e){e.style.borderLeft="3px solid",e.style.borderColor="#C8C8C8",e.style.paddingLeft="10px",e.style.color="#666666"};t.default=function(e,t){r.default(e,(function(e){var n=o.wrap(e,a);(t||l)(n)}),(function(){return 0==e.queryElements("blockquote",1,o.unwrap).length}))}},12289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10228),o=n(1678),a="pre",l="code",i=a+">"+l;t.default=function(e,t){r.default(e,(function(e){var n=o.wrap(e,l),r=o.wrap(n,a);null==t||t(r)}),(function(){return 0==e.queryElements(i,1,(function(e){if(!e.previousSibling&&!e.nextSibling){var t=e.parentNode;o.unwrap(e),o.unwrap(t)}})).length}))}},12290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4888);t.default=function(e){r.default(e,"strikeThrough")}},12291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4888);t.default=function(e){r.default(e,"subscript")}},12292:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4888);t.default=function(e){r.default(e,"superscript")}},12293:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678);t.default=function(e,t){t=Math.min(Math.max(Math.round(t),0),6),e.addUndoSnapshot((function(){e.focus();var n=!1;if(e.queryElements("H1,H2,H3,H4,H5,H6",1,(function(t){n||(e.getDocument().execCommand("formatBlock",!1,"<DIV>"),n=!0);for(var r=e.getDocument().createElement("div");t.firstChild;)r.appendChild(t.firstChild);e.replaceNode(t,r)})),t>0){for(var o=e.getSelectionTraverser(),a=o?o.currentBlockElement:null,l=new r.HtmlSanitizer({cssStyleCallbacks:{"font-size":function(){return!1}}});a;){var i=a.collapseToSingleElement();l.sanitize(i),a=o.getNextBlockElement()}e.getDocument().execCommand("formatBlock",!1,"<H"+t+">")}}),"Format")}},2420:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12267);t.changeFontSize=r.default,t.FONT_SIZES=r.FONT_SIZES;var o=n(12268);t.clearBlockFormat=o.default;var a=n(12269);t.clearFormat=a.default;var l=n(12270);t.createLink=l.default;var i=n(12271);t.getFormatState=i.default,t.getElementBasedFormatState=i.getElementBasedFormatState;var u=n(12272);t.insertEntity=u.default;var d=n(12273);t.insertImage=d.default;var c=n(12274);t.insertTable=c.default;var f=n(12275);t.editTable=f.default;var s=n(12276);t.formatTable=s.default;var g=n(12277);t.removeLink=g.default;var m=n(12278);t.replaceWithNode=m.default;var v=n(12279);t.rotateElement=v.default;var p=n(12280);t.setAlignment=p.default;var y=n(10221);t.setBackgroundColor=y.default;var h=n(10224);t.setTextColor=h.default;var b=n(12281);t.setDirection=b.default;var S=n(10222);t.setFontName=S.default;var C=n(10223);t.setFontSize=C.default;var E=n(12283);t.setImageAltText=E.default;var O=n(12284);t.setIndentation=O.default;var _=n(10225);t.toggleBold=_.default;var N=n(12286);t.toggleBullet=N.default;var M=n(10226);t.toggleItalic=M.default;var P=n(12287);t.toggleNumbering=P.default;var B=n(12288);t.toggleBlockQuote=B.default;var F=n(12289);t.toggleCodeBlock=F.default;var T=n(12290);t.toggleStrikethrough=T.default;var k=n(12291);t.toggleSubscript=k.default;var A=n(12292);t.toggleSuperscript=A.default;var j=n(10227);t.toggleUnderline=j.default;var w=n(12293);t.toggleHeader=w.default;var x=n(10220);t.experimentCommitListChains=x.default},4888:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678),o=null;t.default=function(e,t){e.focus();var n=function(){return e.getDocument().execCommand(t,!1,null)},a=e.getSelectionRange();a&&a.collapsed?(e.addUndoSnapshot(),n(),function(e){o||(o=Object.keys(r.PendableFormatCommandMap).map((function(e){return r.PendableFormatCommandMap[e]})));return o.indexOf(e)>=0}(t)&&e.triggerPluginEvent(13,{formatState:r.getPendableFormatState(e.getDocument())})):e.addUndoSnapshot(n,"Format")}},6502:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678),o="​";t.default=function(e,t){e.focus();var n=e.getSelectionRange();if(n&&n.collapsed){var a=n.startContainer;if("SPAN"==r.getTagOfNode(a)&&(!a.firstChild||"BR"==r.getTagOfNode(a.firstChild)&&!a.firstChild.nextSibling))e.addUndoSnapshot(),t(a);else a&&3==a.nodeType&&a.nodeValue==o&&"SPAN"==r.getTagOfNode(a.parentNode)||(e.addUndoSnapshot(),a=e.getDocument().createTextNode(o),n.insertNode(a)),r.applyTextStyle(a,t),e.select(a,-1)}else e.addUndoSnapshot((function(){for(var n,r,o=e.getSelectionTraverser(),a=o&&o.currentInlineElement;a;){var l=o.getNextInlineElement();a.applyStyle((function(e,o){t(e,o),n=n||e,r=e})),a=l}n&&r&&e.select(n,-2,r,-3)}),"Format")}},7285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10220),o=n(1678);t.default=function(e,t,n){e.focus(),e.addUndoSnapshot((function(a,l){if(!n||n()){var i=e.getSelectedRegions(),u=e.isFeatureEnabled("ListChain")?o.VListChain.createListChains(i,null==a?void 0:a.node):[];i.forEach((function(e){return t(e,a,l,u)})),r.default(e,u)}e.select(a,l)}),"Format")}},8386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1678);t.default=function(e,t){var n=e.getElementAtCursor("OL,UL");if(r.Browser.isChrome&&"indent"!==t){var o=e.getElementAtCursor("LI");if(o){var a=e.getSelectionRange(),l=r.getSelectionPath(o,a);if(a&&(a.collapsed||e.getElementAtCursor("LI",a.startContainer)==o&&e.getElementAtCursor("LI",a.endContainer)==o))if("OL"===n.tagName&&"insertUnorderedList"===t||"UL"===n.tagName&&"insertOrderedList"===t)e.getDocument().execCommand(t,!1,null);else{var i=n.parentElement;if("OL"==i.tagName||"UL"==i.tagName)o.nextElementSibling&&r.splitBalancedNodeRange(o),n.insertAdjacentElement("afterend",o),e.select(r.createRange(o,l.start,l.end));else{o.nextElementSibling&&r.splitBalancedNodeRange(o);var u=r.wrap(r.toArray(o.childNodes)),d=r.createRange(u,l.start,l.end),c=r.getSelectionPath(u,d);n.insertAdjacentElement("afterend",u),e.deleteNode(o);var f=r.createRange(u,c.start,c.end);e.select(f)}0==n.childElementCount&&e.deleteNode(n)}else e.getDocument().execCommand(t,!1,null)}else e.getDocument().execCommand(t,!1,null)}else e.getDocument().execCommand(t,!1,null);var s=e.getElementAtCursor("OL,UL");return s==n&&(s=null),s}},8387:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7285),o=n(1678);t.default=function(e,t,n){r.default(e,(function(e,r,a,l){var i,u=n>0&&l.filter((function(e){return e.canAppendAtCursor(n)}))[0],d=u&&r.equalTo(a)?u.createVListAtBlock(null===(i=o.getBlockElementAtNode(e.rootNode,r.node))||void 0===i?void 0:i.collapseToSingleElement(),n):o.createVListFromRegion(e,!0);d&&(d.changeListType(r,a,t),d.writeBack())}))}}}]);
//# sourceMappingURL=owa.40.js.map
self.scriptsLoaded['owa.40.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.40.js'] = (new Date()).getTime();