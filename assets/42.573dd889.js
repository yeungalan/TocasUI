webpackJsonp([42],{112:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DocCards",props:{cards:{}}}},113:function(t,e,s){"use strict";var a=s(83),n=s.n(a),o=s(116),i=s.n(o),r=s(76),l=s.n(r),c=s(89),d=(s.n(c),s(75)),p=s.n(d);Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DocList",components:{DocCards:i.a,DocNav:l.a,DocFooter:p.a,DocJumbotron:n.a},props:{title:{},subTitle:{},cards:{}},beforeCreate:function(){window.RENDER_STARTED_TIME=(new Date).getTime()},mounted:function(){this.$store.dispatch("CALCULATE_RENDER_TIME",{time:(new Date).getTime(),startedTime:window.RENDER_STARTED_TIME})}}},114:function(t,e,s){e=t.exports=s(18)(),e.push([t.i,".card .content .header[data-v-103109a4]{color:#5d5d5d}.card .content .meta[data-v-103109a4]{color:#a5a5a5}.card .content .description[data-v-103109a4]{color:#888}",""])},115:function(t,e,s){e=t.exports=s(18)(),e.push([t.i,"main[data-v-fc4411ba]{height:100%}.fill.height.wrapper[data-v-fc4411ba]{min-height:calc(100% - 225px)}",""])},116:function(t,e,s){var a,n;s(120),a=s(112);var o=s(118);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-103109a4",t.exports=a},117:function(t,e,s){var a,n;s(121),a=s(113);var o=s(119);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-fc4411ba",t.exports=a},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"ts doubling four link cards"},t._l(t.cards,function(e){return s("router-link",{staticClass:"ts card",attrs:{to:e.link}},[s("div",{staticClass:"content"},[s("div",{staticClass:"header",domProps:{textContent:t._s(e.title)}}),t._v(" "),s("div",{staticClass:"meta"},[s("div",{domProps:{textContent:t._s(e.class)}})]),t._v(" "),s("div",{staticClass:"description",domProps:{textContent:t._s(e.description)}})]),t._v(" "),s("div",{staticClass:"symbol"},[s("i",{staticClass:"icon",class:e.symbol})])])}))},staticRenderFns:[]}},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("div",{staticClass:"fill height wrapper"},[s("doc-nav"),t._v(" "),s("doc-jumbotron",{attrs:{title:t.title,subTitle:t.subTitle}}),t._v(" "),s("section",{staticClass:"ts narrow container"},[s("doc-cards",{attrs:{cards:t.cards}})],1)],1),t._v(" "),s("doc-footer")],1)},staticRenderFns:[]}},120:function(t,e,s){var a=s(114);"string"==typeof a&&(a=[[t.i,a,""]]);s(19)(a,{});a.locals&&(t.exports=a.locals)},121:function(t,e,s){var a=s(115);"string"==typeof a&&(a=[[t.i,a,""]]);s(19)(a,{});a.locals&&(t.exports=a.locals)},130:function(t,e,s){"use strict";e.a={header:{title:"一般元素",subTitle:"\n            沒有特別分類的元素。\n        "},cards:[{title:"按鈕",class:".ts.button",link:"/elements/button/",description:"供使用者點擊和做相關回饋的元件。",symbol:"hand pointer"},{title:"容器",class:".ts.container",link:"/elements/container/",description:"將文字內容、集中在網頁中部，避免螢幕過寬文字導致過寬。",symbol:"resize horizontal"},{title:"分隔線",class:".ts.divider",link:"/elements/divider/",description:"切分兩個話題或是元件用的分隔線。",symbol:"minus"},{title:"標題",class:".ts.header",link:"/elements/header/",description:"用以分隔文字內容、或帶有圖示的標題。",symbol:"header"},{title:"圖示",class:".ts.icon",link:"/elements/icon/",description:"用來豐富你的網頁，不會只有純文字而已。",symbol:"smile"},{title:"圖片",class:".ts.image",link:"/elements/image/",description:"顯示圖片、大頭貼、置入於文章的圖片元素。",symbol:"picture"},{title:"輸入欄位",class:".ts.input",link:"/elements/input/",description:"提供使用者輸入資料的欄位。",symbol:"text cursor"},{title:"聚焦看板（已廢棄）",class:".ts.jumbotron",link:"/elements/jumbotron/",description:"一個巨大的文字容器，用於吸引使用者注意，或是擺放於首頁。"},{title:"板岩",class:".ts.slate",link:"/elements/slate/",description:"多功能的區塊，可作為標題容器、預置方塊、上傳區域等。",symbol:"square"},{title:"標籤",class:".ts.label",link:"/elements/label/",description:"特別標註文字用的標籤，也可用做計數徽章，或是特別圖示。",symbol:"tag"},{title:"清單",class:".ts.list",link:"/elements/list/",description:"水平或是垂直的清單，可以是一個連結清單，例如擺放於頁腳等。",symbol:"list"},{title:"讀取指示器",class:".ts.loader",link:"/elements/loader/",description:"讀取、上傳時的讀取指示器。",symbol:"spinner"},{title:"引言",class:".ts.quote",link:"/elements/quote/",description:"引述他人的話語。",symbol:"quote right"},{title:"片段",class:".ts.segment",link:"/elements/segment/",description:"包含短篇文章的片段容器，適合用來包覆文字。",symbol:"content"},{title:"步驟",class:".ts.step",link:"/elements/step/",description:"展示目前的步驟和相關進度。",symbol:"arrow right"}]}},169:function(t,e,s){"use strict";var a=s(117),n=s.n(a),o=s(130);Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{DocList:n.a},data:function(){return{cards:o.a}},beforeCreate:function(){document.title="一般元素 | Tocas UI"}}},22:function(t,e,s){var a,n;a=s(169);var o=s(280);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},280:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("doc-list",{attrs:{cards:t.cards.cards,title:t.cards.header.title,subTitle:t.cards.header.subTitle}})},staticRenderFns:[]}},72:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DocFooter",methods:{toTop:function(){window.scrollTo(0,0)}}}},73:function(t,e,s){"use strict";var a=s(0),n=s.n(a);Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DocNav",data:function(){return{language:"English"}},methods:{changeLang:function(){"English"===this.language?(this.language="正體中文",n.a.config.lang="en_US"):(this.language="English",n.a.config.lang="zh_TW")}}}},74:function(t,e,s){e=t.exports=s(18)(),e.push([t.i,".segment[data-v-001c2e60]{margin-top:3em!important}ul.ts.list li[data-v-001c2e60]:before{display:none}.ts.link.list[data-v-001c2e60]{margin:0;list-style-type:none!important}.ts.link.list li[data-v-001c2e60]{display:inline-block}.ts.link.list li a[data-v-001c2e60]{color:#666;margin-right:1.5em}.ts.link.list li a[data-v-001c2e60]:hover{color:#333}.ts.link.list .to.top[data-v-001c2e60]{opacity:.7}p[data-v-001c2e60]{margin-top:1.5em;font-size:13px;color:#a0a0a0}p a[data-v-001c2e60]{color:#598ab9}p a[data-v-001c2e60]:hover{color:#3b5d7d}.render.time[data-v-001c2e60]{margin-top:3em;opacity:.6}",""])},75:function(t,e,s){var a,n;s(79),a=s(72);var o=s(77);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-001c2e60",t.exports=a},76:function(t,e,s){var a,n;a=s(73);var o=s(78);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},77:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"ts very padded horizontally fitted fluid secondary segment"},[s("div",{staticClass:"ts narrow container"},[s("ul",{staticClass:"ts relaxed link list"},[s("li",[s("a",{staticClass:"to top",attrs:{href:"#!"},on:{click:function(e){t.toTop()}}},[s("i",{staticClass:"arrow up icon"}),t._v(" "+t._s(t.$t("footer.to_top"))+"\n                ")])]),t._v(" "),t._m(0),t._v(" "),s("li",[s("router-link",{attrs:{to:"/examples/"}},[t._v(t._s(t.$t("footer.examples")))])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/about/"}},[t._v(t._s(t.$t("footer.about")))])],1)]),t._v(" "),s("p",{domProps:{innerHTML:t._s(t.$t("footer.copyright"))}}),t._v(" "),s("p",{staticClass:"render time"},[t._v("\n            "+t._s(t.$t("footer.render"))+t._s(this.$store.state.renderTime)+" ms\n        ")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"//github.com/TeaMeow/TocasUI/"}},[t._v("Github")])])}]}},78:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"ts horizontally scrollable large fluid borderless pure basic menu"},[s("div",{staticClass:"ts narrow container"},[s("router-link",{staticClass:"item",attrs:{to:"/"}},[t._v("Tocas UI")]),t._v(" "),s("router-link",{staticClass:"item",attrs:{to:"/getting-started/"}},[t._v(t._s(t.$t("nav.getting_started")))]),t._v(" "),s("router-link",{staticClass:"item",attrs:{to:"/elements/"}},[t._v(t._s(t.$t("nav.elements")))]),t._v(" "),s("router-link",{staticClass:"item",attrs:{to:"/collections/"}},[t._v(t._s(t.$t("nav.collections")))]),t._v(" "),s("router-link",{staticClass:"item",attrs:{to:"/modules/"}},[t._v(t._s(t.$t("nav.modules")))]),t._v(" "),s("router-link",{staticClass:"item",attrs:{to:"/views/"}},[t._v(t._s(t.$t("nav.views")))]),t._v(" "),s("router-link",{staticClass:"item",attrs:{to:"/rwd/"}},[t._v(t._s(t.$t("nav.rwd")))]),t._v(" "),s("div",{staticClass:"right menu"},[s("a",{staticClass:"item",attrs:{href:"//patreon.com/yamiodymel"}},[t._v(t._s(t.$t("nav.donate")))]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"//github.com/TeaMeow/TocasUI/"}},[t._v("Github")])])],1)])},staticRenderFns:[]}},79:function(t,e,s){var a=s(74);"string"==typeof a&&(a=[[t.i,a,""]]);s(19)(a,{});a.locals&&(t.exports=a.locals)},80:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DocJumbotron",props:{title:{default:""},subTitle:{default:""}}}},81:function(t,e,s){e=t.exports=s(18)(),e.push([t.i,"h1[data-v-08340912]{font-size:3em!important}h1 .sub.header[data-v-08340912]{margin-top:.8em;font-size:.45em!important}.jumbotron[data-v-08340912]{margin-bottom:2em!important}",""])},82:function(t,e,s){var a=s(81);"string"==typeof a&&(a=[[t.i,a,""]]);s(19)(a,{});a.locals&&(t.exports=a.locals)},83:function(t,e,s){var a,n;s(82),a=s(80);var o=s(84);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-08340912",t.exports=a},84:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"ts fluid horizontally fitted extra padded jumbotron"},[s("div",{staticClass:"ts narrow container"},[s("h1",{staticClass:"ts left aligned header"},[t._v("\n            "+t._s(t.title)+"\n            "),s("br"),t._v(" "),s("small",{staticClass:"sub header",domProps:{innerHTML:t._s(t.subTitle)}})])])])},staticRenderFns:[]}},85:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"ExampleSegments",methods:{ev:function ev(code){var prev=jA(this.$el).prev().prev();prev.hasClass("example")&&prev.removeClass("expanded"),eval(code)}},props:{style:{default:null},code:{default:""},mark:{default:null},tagMark:{default:null},inverted:{default:!1},remove:{default:null},hasExample:{default:!0},showingCode:{default:!1},executable:{default:!1}}}},86:function(t,e,s){e=t.exports=s(18)(),e.push([t.i,".hljs{background:none!important;color:#8e8e8e!important;line-height:21px!important;font-size:14px;overflow-x:scroll;font-weight:400;font-family:Ubuntu Mono;word-spacing:2px;letter-spacing:.02em}.hljs .hljs-deletion,.hljs .hljs-name,.hljs .hljs-regexp,.hljs .hljs-selector-class,.hljs .hljs-selector-id,.hljs .hljs-tag,.hljs .hljs-template-variable,.hljs .hljs-variable{color:#8e8e8e}.hljs .hljs-addition,.hljs .hljs-bullet,.hljs .hljs-string,.hljs .hljs-symbol{color:#0683a3!important}.hljs .hljs-attribute{color:#b58e00!important;margin-right:.2em}.hljs .hljs-important-class{background-color:#52c6ca;padding:1px 3px;border-radius:4px;color:#fff!important}.hljs .hljs-important-class *{color:#fff!important}.hljs *{font-weight:400!important;font-family:Ubuntu Mono!important}code.hljs.javascript{color:#008076!important}code.hljs.javascript .hljs-string{margin:0 4px}.example.segments .preview.segment strong{opacity:.7}.ts.example.segments+.ts.example.segments{margin-top:50px}",""])},87:function(t,e,s){e=t.exports=s(18)(),e.push([t.i,"pre[data-v-50c168f5]{overflow-x:auto;margin:0}.example.preview.inverted .real.example[data-v-50c168f5],.example.preview.inverted .ts.example.segments .preview.segment[data-v-50c168f5],.example.preview.inverted[data-v-50c168f5]{border-radius:4px;background-color:#34495e}.example.preview .real.example[data-v-50c168f5]{display:block}.example.preview.expanded .real.example[data-v-50c168f5],.example.preview .ts.example.segments[data-v-50c168f5]{display:none}.example.preview.expanded .ts.example.segments[data-v-50c168f5]{display:block}",""])},88:function(t,e,s){var a=s(86);"string"==typeof a&&(a=[[t.i,a,""]]);s(19)(a,{});a.locals&&(t.exports=a.locals)},89:function(t,e,s){var a,n;s(88),s(91),a=s(85);var o=s(90);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-50c168f5",t.exports=a},90:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"example preview",class:{inverted:t.inverted}},[t.hasExample?s("div",{staticClass:"real example",style:t.style,domProps:{innerHTML:t._s(t.code)}}):t._e(),t._v(" "),!t.hasExample&&t.executable?s("button",{staticClass:"ts small secondary labeled icon button",on:{click:function(e){t.ev(t.code)}}},[s("i",{staticClass:"bug icon"}),t._v("\n        執行程式碼\n    ")]):t._e(),t._v(" "),t.hasExample?t._e():s("div",{staticClass:"ts padded secondary segment"},[s("pre",{staticClass:"code"},[s("code",{staticClass:"hljs",attrs:{"data-utaha-hightlight":t.mark,"data-utaha-tag-hightlight":t.tagMark,"data-utaha-remove":t.remove}},[t._v(t._s(t.code))])])]),t._v(" "),t.hasExample?s("div",{staticClass:"ts example segments"},[s("div",{staticClass:"ts clearing preview segment",style:t.style,domProps:{innerHTML:t._s(t.code)}}),t._v(" "),s("div",{staticClass:"ts padded secondary segment"},[s("pre",{staticClass:"code"},[s("code",{staticClass:"hljs",attrs:{"data-utaha-hightlight":t.mark,"data-utaha-tag-hightlight":t.tagMark,"data-utaha-remove":t.remove}},[t._v(t._s(t.code))])])])]):t._e()])},staticRenderFns:[]}},91:function(t,e,s){var a=s(87);"string"==typeof a&&(a=[[t.i,a,""]]);s(19)(a,{});a.locals&&(t.exports=a.locals)}});