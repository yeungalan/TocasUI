webpackJsonp([13],{100:function(e,t,a){var s,n;a(103),a(104),s=a(93);var i=a(101);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-214e9252",e.exports=s},101:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tocas section header",class:e.size},["large"==e.size?a("h2",{staticClass:"ts dividing header"},[a("span",{domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.wip?a("span",{staticClass:"ts warning horizontal label"},[e._v("未完成")]):e._e()]):e._e(),e._v(" "),"normal"==e.size?a("h3",{staticClass:"ts dividing header"},[a("span",{domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.wip?a("span",{staticClass:"ts warning horizontal label"},[e._v("未完成")]):e._e()]):e._e(),e._v(" "),"small"==e.size?a("h4",{staticClass:"ts header"},[a("span",{domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.wip?a("span",{staticClass:"ts warning horizontal label"},[e._v("未完成")]):e._e()]):e._e(),e._v(" "),"tiny"==e.size?a("h5",{staticClass:"ts header"},[a("span",{domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.wip?a("span",{staticClass:"ts warning horizontal label"},[e._v("未完成")]):e._e()]):e._e(),e._v(" "),e.description?a("p",{staticClass:"description",domProps:{innerHTML:e._s(e.description)}}):e._e(),e._v(" "),e.expandableExample&&"large"!=e.size&&"normal"!=e.size?a("button",{staticClass:"ts expand tiny labeled icon button",on:{click:e.expand}},[a("i",{staticClass:"code icon"}),e._v(" "),a("span",[e._v("原始碼")])]):e._e()])},staticRenderFns:[]}},102:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("doc-nav"),e._v(" "),a("doc-jumbotron",{attrs:{title:e.items.header.title,subTitle:e.items.header.subTitle}}),e._v(" "),a("div",{staticClass:"ts narrow container"},[a("div",{staticClass:"ts relaxed stackable grid"},[e.sidebar?a("div",{staticClass:"four wide column"},[a("div",{staticClass:"ts flatted borderless secondary relaxed vertical menu"},[e._l(e.items.html,function(t){return[t.link===!1?a("span",{staticClass:"item",domProps:{textContent:e._s(t.title)}}):e._e(),e._v(" "),t.link?a("a",{staticClass:"item",attrs:{href:"#"+t.link}},[t.wip?a("span",[e._v(e._s(t.title)+" "),a("span",{staticClass:"ts warning horizontal label"},[e._v("未完成")])]):e._e(),e._v(" "),t.wip?e._e():a("span",[e._v(e._s(t.title))])]):e._e()]})],2)]):e._e(),e._v(" "),a("div",{class:{"twelve wide column":e.sidebar,"sixteen wide column":!e.sidebar}},[e._l(e.items.html,function(t){return[t.link?a("a",{staticClass:"anchor",attrs:{name:t.link}}):e._e(),e._v(" "),"large"==t.type?a("doc-header",{attrs:{title:t.title,description:t.description,expandableExample:t.expandableExample,wip:t.wip,size:"large"}}):e._e(),e._v(" "),"normal"==t.type?a("doc-header",{attrs:{title:t.title,description:t.description,expandableExample:t.expandableExample,wip:t.wip,size:"normal"}}):e._e(),e._v(" "),"tiny"==t.type?a("doc-header",{attrs:{title:t.title,description:t.description,expandableExample:t.expandableExample,wip:t.wip,size:"tiny"}}):e._e(),e._v(" "),"small"==t.type?a("doc-header",{attrs:{title:t.title,description:t.description,expandableExample:t.expandableExample,wip:t.wip,size:"small"}}):e._e(),e._v(" "),"example"==t.type?a("doc-example",{style:t.style,attrs:{executable:t.executable,inverted:t.inverted,code:t.code,mark:t.mark,tagMark:t.tagMark,remove:t.remove}}):e._e(),e._v(" "),"source"==t.type?a("doc-example",{style:t.style,attrs:{executable:t.executable,inverted:t.inverted,code:t.code,mark:t.mark,tagMark:t.tagMark,hasExample:!1}}):e._e()]})],2)]),e._v(" "),e._m(0),e._v(" "),a("div",{attrs:{id:"disqus_thread"}})]),e._v(" "),a("doc-footer")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"ts massive disqus header"},[e._v("\n            本頁留言\n            "),a("div",{staticClass:"sub header"},[e._v("你現在可以在這裡留言啦！如果有功能建議或是發現錯誤，可以"),a("a",{attrs:{href:"https://github.com/TeaMeow/TocasUI"}},[e._v("這裡提出 Issue")]),e._v("。")])])}]}},103:function(e,t,a){var s=a(94);"string"==typeof s&&(s=[[e.i,s,""]]);a(19)(s,{});s.locals&&(e.exports=s.locals)},104:function(e,t,a){var s=a(95);"string"==typeof s&&(s=[[e.i,s,""]]);a(19)(s,{});s.locals&&(e.exports=s.locals)},105:function(e,t,a){var s=a(97);"string"==typeof s&&(s=[[e.i,s,""]]);a(19)(s,{});s.locals&&(e.exports=s.locals)},111:function(e,t,a){e.exports=a.p+"img/af851d6.png"},144:function(e,t,a){"use strict";var s="normal",n="large",i="small",l=a(111);t.a={header:{title:"板岩",subTitle:"\n            雖然僅有一塊，但卻有著多種用途。\n        "},html:[{type:n,title:"說明",description:'\n                <p>板岩是<a href="/elements/jumbotron">聚焦看板</a>的後繼者，板岩除了擁有作為頁面標題區塊的功能外，現在還可以當作一個預置區塊（Placeholder），例如一個空的購物車就可以用上板岩。</p>\n                <p>此外，板岩現在也支援標題、註釋、動作按鈕。</p>\n            '},{type:s,title:"種類",description:"一個板岩具有多個不同的種類。",link:!1},{type:i,title:"板岩",description:"一個正常的板岩。",link:"slate"},{type:"example",code:'<div class="ts slate">\n    這是一塊普通的板岩，看起來十分無聊\n</div>',mark:"slate"},{type:i,title:"基本",description:"板岩可以僅有基本的結構。",link:"basic"},{type:"example",code:'<div class="ts basic slate">\n    這是僅有基本結構的板岩。\n</div>',mark:"basic"},{type:i,title:"標題板岩",description:"板岩可以用來當作頁面標題區塊，這將使得文字預設向左對齊。",link:"heading"},{type:"example",code:'<div class="ts heading slate">\n    <span class="header">使用者設定</span>\n    <span class="description">你可以在這裡變更帳號、密碼與個人資訊。</span>\n</div>',mark:"heading"},{type:s,title:"狀態",description:"你可以隨時透過樣式類別切換一個板岩的狀態。",link:!1},{type:i,title:"已停用",description:"顯示這個板岩已經被停用了。",link:"disabled"},{type:"example",code:'<div class="ts disabled slate">\n    別看這裡，我已經不重要了。\n</div>',mark:"disabled"},{type:s,title:"內容",description:"一個板岩可以有許多不同性質的內容。",link:!1},{type:i,title:"標題",description:"板岩內可以有標題。",link:"header"},{type:"example",code:'<div class="ts slate">\n    <span class="header">使用者設定</span>\n</div>',mark:"header"},{type:i,title:"註釋",description:"板岩內也可含有註釋用以詳細解說。",link:"description"},{type:"example",code:'<div class="ts slate">\n    <span class="header">Tryment 計畫</span>\n    <span class="description">模擬就學制度，協助在年者再次就職支援計劃。</span>\n</div>',mark:"description"},{type:i,title:"背景圖片",description:"板岩內能夠擺置圖片當作背景。",link:"image"},{type:"example",code:'<div class="ts slate">\n    <div class="image">\n        <img src="'+l+'">\n    </div>\n    <span class="header">Tryment 計畫</span>\n    <span class="description">模擬就學制度，協助在年者再次就職支援計劃。</span>\n</div>',mark:"image"},{type:i,title:"圖示",description:"圖示可以被放置於板岩內。",link:"icon"},{type:"example",code:'<div class="ts slate">\n    <i class="setting icon"></i>\n    <span class="header">偏好設定</span>\n    <span class="description">你可以在這裡改變你想改變的，但你還是沒女朋友。</span>\n</div>',mark:"icon"},{type:i,title:"代表性符號",description:"板岩內的圖示可以被設置為此板岩的代表性符號。",link:"symbol"},{type:"example",code:'<div class="ts basic padded dashed slate">\n    <i class="upload symbol icon"></i>\n    <span class="header">上傳圖片或影音</span>\n    <span class="description">將圖片拖拉至此處進行上傳。</span>\n</div>',mark:"symbol"},{type:i,title:"淡化圖示",description:"如果圖示不重要，也可以將其淡化。",link:"faded-icon"},{type:"example",code:'<div class="ts slate">\n    <i class="setting faded icon"></i>\n    <span class="header">偏好設定</span>\n    <span class="description">你可以在這裡改變你想改變的，但你還是沒女朋友。</span>\n</div>',mark:"faded"},{type:i,title:"圖示群組",description:"你也能夠將多個圖示一次放入板岩中。",link:"icons"},{type:"example",code:'<div class="ts slate">\n    <div class="icons">\n        <i class="file audio outline icon"></i>\n        <i class="file text outline icon"></i>\n        <i class="file word outline icon"></i>\n    </div>\n    <span class="header">行動辦公室</span>\n    <span class="description">MeowWork 讓你到處都能夠辦公。</span>\n</div>',mark:"icons"},{type:i,title:"動作",description:"板岩中可以有動作區塊，使人進行操作。",link:"action"},{type:"example",code:'<div class="ts padded slate">\n    <span class="header">尚無文件</span>\n    <span class="description">你目前沒有任何文件，按下下方按鈕建立新文件。</span>\n    <div class="action">\n        <button class="ts primary button">現在開始</button>\n    </div>\n</div>',mark:"action"},{type:s,title:"外觀",description:"你可以更改板岩的位置、大小、或者形狀。",link:!1},{type:i,title:"增加內距",description:"你可以增加板岩的內距。",link:"padded"},{type:"example",code:'<div class="ts heading padded slate">\n    <span class="header">增加內距</span>\n    <span class="description">這可以讓你的聚焦看板看起來不那麼壅擠。</span>\n</div>\n<br>\n<div class="ts heading very padded slate">\n    <span class="header">非常內距</span>\n    <span class="description">可以，這很內距。</span>\n</div>\n<br>\n<div class="ts heading extra padded slate">\n    <span class="header">超級內距</span>\n    <span class="description">如果你還不滿足的話還有這樣增加內距地方式。</span>\n</div>',mark:"extra padded, very padded, padded"},{type:i,title:"指定方向增加內距",description:"你還可以指定增加垂直或是水平的內距。",link:"specified-padded"},{type:"example",code:'<div class="ts heading vertically padded slate">\n    <span class="header">垂直內距</span>\n    <span class="description">僅增加垂直內距，水平內距維持預設。</span>\n</div>\n<br>\n<div class="ts heading horizontally very padded slate">\n    <span class="header">水平非常內距</span>\n    <span class="description">這會增加水平的內距，但是垂直內距保持預設。</span>\n</div>',mark:"horizontally very padded, vertically padded"},{type:i,title:"縮減",description:"你可以移除所有內距、或水平和垂直內距。",link:"fitted"},{type:"example",code:'<div class="ts heading fitted slate">\n    <span class="header">縮減全部</span>\n    <span class="description">這將使的你的板岩完全沒有內距。</span>\n</div>\n<br>\n<div class="ts heading horizontally fitted slate">\n    <span class="header">水平縮減</span>\n    <span class="description">板岩的左右內距將會消失。</span>\n</div>\n<br>\n<div class="ts heading vertically fitted slate">\n    <span class="header">垂直縮減</span>\n    <span class="description">這樣做的話上下內距將會消失。</span>\n</div>',mark:"horizontally fitted, vertically fitted, fitted"},{type:i,title:"無框線",description:"板岩可以不需要框線。",link:"borderless"},{type:"example",code:'<div class="ts basic borderless slate">\n    <span class="header">無框線板岩</span>\n    <span class="description">這個板岩沒有框線。</span>\n</div>',mark:"borderless"},{type:i,title:"文字對齊",description:"板岩內的文字可以靠左、右、甚至置中。",link:"aligned"},{type:"example",code:'<div class="ts right aligned slate">\n    <span class="header">靠右置齊</span>\n    <span class="description">這個看板的文字靠右。</span>\n</div>\n<br>\n<div class="ts left aligned slate">\n    <span class="header">靠左置齊</span>\n    <span class="description">這個看板的文字靠左。</span>\n</div>\n<br>\n<div class="ts center aligned slate">\n    <span class="header">置中對齊</span>\n    <span class="description">這個看板的文字置中。</span>\n</div>',mark:"right aligned, left aligned, center aligned"},{type:i,title:"流動",description:"這種板岩適合用在需要貼齊容器左右的時候，因為沒有圓角。",link:"fluid"},{type:"example",code:'<div class="ts fluid slate">\n    <span class="header">流動板岩</span>\n    <span class="description">這個板岩沒有圓角，適合貼齊左右邊。</span>\n</div>',mark:"fluid"},{type:i,title:"嵌入的",description:"板岩可以有內嵌陰影，看起來像是被嵌入一般。",link:"insetted"},{type:"example",code:'<div class="ts insetted slate">\n    <span class="header">嵌入板岩</span>\n    <span class="description">仔細看，這個板岩有內部陰影。</span>\n</div>',mark:"insetted"},{type:i,title:"虛線的",description:"板岩可以有虛線框線。",link:"dashed"},{type:"example",code:'<div class="ts basic dashed slate">\n    <i class="upload icon"></i>\n    <span class="header">上傳圖片或影音</span>\n    <span class="description">將圖片拖拉至此處進行上傳。</span>\n</div>',mark:"basic dashed"},{type:i,title:"可點擊的",description:"板岩可以對點擊動作進行回饋。",link:"clickable"},{type:"example",code:'<div class="ts clickable slate">\n    <i class="mouse pointer icon"></i>\n    <span class="header">點此看看</span>\n    <span class="description">點擊此處會有相關的回饋效果。</span>\n</div>\n<br>\n<div class="ts clickable basic dashed slate">\n    <i class="mouse pointer icon"></i>\n    <span class="header">點此看看</span>\n    <span class="description">點擊此處會有相關的回饋效果。</span>\n</div>',mark:"clickable"},{type:i,title:"輕巧版",description:"板岩可以是基於內容來當作寬度基準，而不是直接服貼附容器寬度。",link:"compact"},{type:"example",code:'<div class="ts compact slate">\n    <i class="text width icon"></i>\n    <span class="header">文字決定寬度</span>\n    <span class="description">板岩內的文字越長，板岩的寬度就越寬。</span>\n</div>',mark:"compact"},{type:i,title:"尺寸",description:"板岩有多種尺寸。",link:"sizes"},{type:"example",code:'<div class="ts mini heading slate">\n    <span class="header">迷你</span>\n    <span class="description">這是一個迷你板岩。</span>\n</div>\n<br>\n<div class="ts tiny heading slate">\n    <span class="header">微小</span>\n    <span class="description">這是一個微小板岩。</span>\n</div>\n<br>\n<div class="ts small heading slate">\n    <span class="header">小的</span>\n    <span class="description">這是一個小的板岩。</span>\n</div>\n<br>\n<div class="ts heading slate">\n    <span class="header">適中</span>\n    <span class="description">這是一個適中板岩。</span>\n</div>\n<br>\n<div class="ts large heading slate">\n    <span class="header">大的</span>\n    <span class="description">這是一個大的板岩。</span>\n</div>\n<br>\n<div class="ts big heading slate">\n    <span class="header">較大</span>\n    <span class="description">這是一個較大板岩。</span>\n</div>\n<br>\n<div class="ts huge heading slate">\n    <span class="header">巨大</span>\n    <span class="description">這是一個巨大板岩。</span>\n</div>\n<br>\n<div class="ts massive heading slate">\n    <span class="header">重量級</span>\n    <span class="description">這是一個重量級板岩。</span>\n</div>',mark:"mini, tiny, small, medium, large, big, huge, massive"}]}},195:function(e,t,a){"use strict";var s=a(99),n=a.n(s),i=a(144);Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{DocBasic:n.a},data:function(){return{items:i.a}},beforeCreate:function(){document.title="板岩 | Tocas UI"}}},245:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("doc-basic",{attrs:{items:e.items}})],1)},staticRenderFns:[]}},48:function(e,t,a){var s,n;s=a(195);var i=a(245);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,e.exports=s},72:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DocFooter",methods:{toTop:function(){window.scrollTo(0,0)}}}},73:function(e,t,a){"use strict";var s=a(0),n=a.n(s);Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DocNav",data:function(){return{language:"English"}},methods:{changeLang:function(){"English"===this.language?(this.language="正體中文",n.a.config.lang="en_US"):(this.language="English",n.a.config.lang="zh_TW")}}}},74:function(e,t,a){t=e.exports=a(18)(),t.push([e.i,".segment[data-v-001c2e60]{margin-top:3em!important}ul.ts.list li[data-v-001c2e60]:before{display:none}.ts.link.list[data-v-001c2e60]{margin:0;list-style-type:none!important}.ts.link.list li[data-v-001c2e60]{display:inline-block}.ts.link.list li a[data-v-001c2e60]{color:#666;margin-right:1.5em}.ts.link.list li a[data-v-001c2e60]:hover{color:#333}.ts.link.list .to.top[data-v-001c2e60]{opacity:.7}p[data-v-001c2e60]{margin-top:1.5em;font-size:13px;color:#a0a0a0}p a[data-v-001c2e60]{color:#598ab9}p a[data-v-001c2e60]:hover{color:#3b5d7d}.render.time[data-v-001c2e60]{margin-top:3em;opacity:.6}",""])},75:function(e,t,a){var s,n;a(79),s=a(72);var i=a(77);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-001c2e60",e.exports=s},76:function(e,t,a){var s,n;s=a(73);var i=a(78);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,e.exports=s},77:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"ts very padded horizontally fitted fluid secondary segment"},[a("div",{staticClass:"ts narrow container"},[a("ul",{staticClass:"ts relaxed link list"},[a("li",[a("a",{staticClass:"to top",attrs:{href:"#!"},on:{click:function(t){e.toTop()}}},[a("i",{staticClass:"arrow up icon"}),e._v(" "+e._s(e.$t("footer.to_top"))+"\n                ")])]),e._v(" "),e._m(0),e._v(" "),a("li",[a("router-link",{attrs:{to:"/examples/"}},[e._v(e._s(e.$t("footer.examples")))])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/about/"}},[e._v(e._s(e.$t("footer.about")))])],1)]),e._v(" "),a("p",{domProps:{innerHTML:e._s(e.$t("footer.copyright"))}}),e._v(" "),a("p",{staticClass:"render time"},[e._v("\n            "+e._s(e.$t("footer.render"))+e._s(this.$store.state.renderTime)+" ms\n        ")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"//github.com/TeaMeow/TocasUI/"}},[e._v("Github")])])}]}},78:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"ts horizontally scrollable large fluid borderless pure basic menu"},[a("div",{staticClass:"ts narrow container"},[a("router-link",{staticClass:"item",attrs:{to:"/"}},[e._v("Tocas UI")]),e._v(" "),a("router-link",{staticClass:"item",attrs:{to:"/getting-started/"}},[e._v(e._s(e.$t("nav.getting_started")))]),e._v(" "),a("router-link",{staticClass:"item",attrs:{to:"/elements/"}},[e._v(e._s(e.$t("nav.elements")))]),e._v(" "),a("router-link",{staticClass:"item",attrs:{to:"/collections/"}},[e._v(e._s(e.$t("nav.collections")))]),e._v(" "),a("router-link",{staticClass:"item",attrs:{to:"/modules/"}},[e._v(e._s(e.$t("nav.modules")))]),e._v(" "),a("router-link",{staticClass:"item",attrs:{to:"/views/"}},[e._v(e._s(e.$t("nav.views")))]),e._v(" "),a("router-link",{staticClass:"item",attrs:{to:"/rwd/"}},[e._v(e._s(e.$t("nav.rwd")))]),e._v(" "),a("div",{staticClass:"right menu"},[a("a",{staticClass:"item",attrs:{href:"//patreon.com/yamiodymel"}},[e._v(e._s(e.$t("nav.donate")))]),e._v(" "),a("a",{staticClass:"item",attrs:{href:"//github.com/TeaMeow/TocasUI/"}},[e._v("Github")])])],1)])},staticRenderFns:[]}},79:function(e,t,a){var s=a(74);"string"==typeof s&&(s=[[e.i,s,""]]);a(19)(s,{});s.locals&&(e.exports=s.locals)},80:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DocJumbotron",props:{title:{default:""},subTitle:{default:""}}}},81:function(e,t,a){t=e.exports=a(18)(),t.push([e.i,"h1[data-v-08340912]{font-size:3em!important}h1 .sub.header[data-v-08340912]{margin-top:.8em;font-size:.45em!important}.jumbotron[data-v-08340912]{margin-bottom:2em!important}",""])},82:function(e,t,a){var s=a(81);"string"==typeof s&&(s=[[e.i,s,""]]);a(19)(s,{});s.locals&&(e.exports=s.locals)},83:function(e,t,a){var s,n;a(82),s=a(80);var i=a(84);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-08340912",e.exports=s},84:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"ts fluid horizontally fitted extra padded jumbotron"},[a("div",{staticClass:"ts narrow container"},[a("h1",{staticClass:"ts left aligned header"},[e._v("\n            "+e._s(e.title)+"\n            "),a("br"),e._v(" "),a("small",{staticClass:"sub header",domProps:{innerHTML:e._s(e.subTitle)}})])])])},staticRenderFns:[]}},85:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"ExampleSegments",methods:{ev:function ev(code){var prev=jA(this.$el).prev().prev();prev.hasClass("example")&&prev.removeClass("expanded"),eval(code)}},props:{style:{default:null},code:{default:""},mark:{default:null},tagMark:{default:null},inverted:{default:!1},remove:{default:null},hasExample:{default:!0},showingCode:{default:!1},executable:{default:!1}}}},86:function(e,t,a){t=e.exports=a(18)(),t.push([e.i,".hljs{background:none!important;color:#8e8e8e!important;line-height:21px!important;font-size:14px;overflow-x:scroll;font-weight:400;font-family:Ubuntu Mono;word-spacing:2px;letter-spacing:.02em}.hljs .hljs-deletion,.hljs .hljs-name,.hljs .hljs-regexp,.hljs .hljs-selector-class,.hljs .hljs-selector-id,.hljs .hljs-tag,.hljs .hljs-template-variable,.hljs .hljs-variable{color:#8e8e8e}.hljs .hljs-addition,.hljs .hljs-bullet,.hljs .hljs-string,.hljs .hljs-symbol{color:#0683a3!important}.hljs .hljs-attribute{color:#b58e00!important;margin-right:.2em}.hljs .hljs-important-class{background-color:#52c6ca;padding:1px 3px;border-radius:4px;color:#fff!important}.hljs .hljs-important-class *{color:#fff!important}.hljs *{font-weight:400!important;font-family:Ubuntu Mono!important}code.hljs.javascript{color:#008076!important}code.hljs.javascript .hljs-string{margin:0 4px}.example.segments .preview.segment strong{opacity:.7}.ts.example.segments+.ts.example.segments{margin-top:50px}",""])},87:function(e,t,a){t=e.exports=a(18)(),t.push([e.i,"pre[data-v-50c168f5]{overflow-x:auto;margin:0}.example.preview.inverted .real.example[data-v-50c168f5],.example.preview.inverted .ts.example.segments .preview.segment[data-v-50c168f5],.example.preview.inverted[data-v-50c168f5]{border-radius:4px;background-color:#34495e}.example.preview .real.example[data-v-50c168f5]{display:block}.example.preview.expanded .real.example[data-v-50c168f5],.example.preview .ts.example.segments[data-v-50c168f5]{display:none}.example.preview.expanded .ts.example.segments[data-v-50c168f5]{display:block}",""])},88:function(e,t,a){var s=a(86);"string"==typeof s&&(s=[[e.i,s,""]]);a(19)(s,{});s.locals&&(e.exports=s.locals)},89:function(e,t,a){var s,n;a(88),a(91),s=a(85);var i=a(90);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-50c168f5",e.exports=s},90:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"example preview",class:{inverted:e.inverted}},[e.hasExample?a("div",{staticClass:"real example",style:e.style,domProps:{innerHTML:e._s(e.code)}}):e._e(),e._v(" "),!e.hasExample&&e.executable?a("button",{staticClass:"ts small secondary labeled icon button",on:{click:function(t){e.ev(e.code)}}},[a("i",{staticClass:"bug icon"}),e._v("\n        執行程式碼\n    ")]):e._e(),e._v(" "),e.hasExample?e._e():a("div",{staticClass:"ts padded secondary segment"},[a("pre",{staticClass:"code"},[a("code",{staticClass:"hljs",attrs:{"data-utaha-hightlight":e.mark,"data-utaha-tag-hightlight":e.tagMark,"data-utaha-remove":e.remove}},[e._v(e._s(e.code))])])]),e._v(" "),e.hasExample?a("div",{staticClass:"ts example segments"},[a("div",{staticClass:"ts clearing preview segment",style:e.style,domProps:{innerHTML:e._s(e.code)}}),e._v(" "),a("div",{staticClass:"ts padded secondary segment"},[a("pre",{staticClass:"code"},[a("code",{staticClass:"hljs",attrs:{"data-utaha-hightlight":e.mark,"data-utaha-tag-hightlight":e.tagMark,"data-utaha-remove":e.remove}},[e._v(e._s(e.code))])])])]):e._e()])},staticRenderFns:[]}},91:function(e,t,a){var s=a(87);"string"==typeof s&&(s=[[e.i,s,""]]);a(19)(s,{});s.locals&&(e.exports=s.locals)},92:function(e,t,a){"use strict";var s=a(100),n=a.n(s),i=a(83),l=a.n(i),r=a(76),o=a.n(r),d=a(89),p=a.n(d),c=a(75),m=a.n(c);Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DocBasic",components:{DocHeader:n.a,DocJumbotron:l.a,DocNav:o.a,DocExample:p.a,DocFooter:m.a},props:{items:{default:null},sidebar:{default:!0}},beforeCreate:function(){window.RENDER_STARTED_TIME=(new Date).getTime()},mounted:function(){window.scrollTo(0,0),function(){var e=document,t=e.createElement("script");t.src="//tocas-ui.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}();var e=document.querySelectorAll(".hljs");for(var t in e){var t=e[t];if("number"!=typeof t&&"function"!=typeof t){var a=t.getAttribute("data-utaha-remove");if(null!==a){var a=a.split(", ");for(var s in a){var n=a[s],i=new RegExp(n,"g");t.innerText.indexOf(n)!=-1&&(t.innerText=t.innerText.replace(i,""))}}}}hljs.initHighlighting.called=!1,hljs.initHighlighting();for(var t in e){var t=e[t];if("number"!=typeof t&&"function"!=typeof t){var l=t.getAttribute("data-utaha-hightlight");if(null!==l){var l=l.split(", ");for(var r in l)for(var n=l[r],o=t.querySelectorAll(".hljs-string"),d='<span class="hljs-important-class">'+n+"</span>",p=0;p<o.length;p++)o[p].innerHTML.indexOf(n)!=-1&&(o[p].innerHTML=o[p].innerHTML.replace(n,d))}}}for(var t in e){var t=e[t];if("number"!=typeof t&&"function"!=typeof t){var l=t.getAttribute("data-utaha-tag-hightlight");if(null!==l){var l=l.split(", ");for(var r in l)for(var n=l[r],o=t.querySelectorAll(".hljs-name"),d='<span class="hljs-important-class">'+n+"</span>",p=0;p<o.length;p++)o[p].innerHTML.indexOf(n)!=-1&&(o[p].innerHTML=o[p].innerHTML.replace(n,d))}}}this.$store.dispatch("CALCULATE_RENDER_TIME",{time:(new Date).getTime(),startedTime:window.RENDER_STARTED_TIME})}}},93:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DocHeader",props:{title:{},size:{default:!1},description:{default:!1},expandableExample:{default:!0},wip:{default:!1}},methods:{expand:function(){var e=jA(this.$el).next();e.toggleClass("expanded")}}}},94:function(e,t,a){t=e.exports=a(18)(),t.push([e.i,".tocas.section.header,.tocas.section.header p{clear:both;position:relative;font-size:16px;line-height:28px;letter-spacing:.08px;color:#6f6e6e}.tocas.section.header.small,.tocas.section.header.tiny,.tocas.section.header p.small,.tocas.section.header p.tiny{margin-bottom:1.5em}.tocas.section.header.tiny .tiny.button,.tocas.section.header p.tiny .tiny.button{top:-.5em!important}.tocas.section.header .description,.tocas.section.header p .description{margin-top:0!important}.tocas.section.header .description .ts.label,.tocas.section.header p .description .ts.label{color:#676767!important}.tocas.section.header.normal:first-child{font-size:28px;margin-top:-4em}",""])},95:function(e,t,a){t=e.exports=a(18)(),t.push([e.i,"h2[data-v-214e9252]{font-size:32px!important;line-height:1.8em!important;border-bottom:2px solid #d9d9d9!important;color:#636262!important}h3[data-v-214e9252]{font-size:28px!important;line-height:1.5em!important;border-bottom:2px solid #d9d9d9!important}h3[data-v-214e9252],h4[data-v-214e9252]{color:#606060!important;margin-top:4em!important}h4[data-v-214e9252]{font-size:24px!important;display:inline-block}h4+.description[data-v-214e9252],h4+.description p[data-v-214e9252]{font-size:15px!important}h5[data-v-214e9252]{margin-top:3em!important}h5+.description[data-v-214e9252],h5+.description p[data-v-214e9252]{font-size:15px!important}.button[data-v-214e9252]{position:absolute!important;right:-6px;top:6.7em;transform:scale(.9)}",""])},96:function(e,t,a){t=e.exports=a(18)(),t.push([e.i,"p>.ts.label{color:#333!important}",""])},97:function(e,t,a){t=e.exports=a(18)(),t.push([e.i,'.ts.disqus.header[data-v-bf9feb0e]{margin-top:3em;margin-bottom:.5em}.ts.narrow.container[data-v-bf9feb0e]{overflow-x:hidden;overflow-y:hidden}.ts.warning.horizontal.label[data-v-bf9feb0e]{margin-left:8px!important}.four.column[data-v-bf9feb0e]{padding-right:4rem!important}.four.column[data-v-bf9feb0e]:after{content:"";position:absolute;top:1em;right:2em;bottom:0;left:0;border-right:2px solid rgba(0,0,0,.1);pointer-events:none}.vertical.menu .item[data-v-bf9feb0e]{padding:1.2em}.vertical.menu span.item[data-v-bf9feb0e]{padding-left:0;display:block;margin:0 0 15px 6px!important;font-size:18px;font-weight:500;color:#005f5f;border-bottom:1px dashed #b3ffff;padding-bottom:.8em}@media (max-width:767px){.ts.disqus.header[data-v-bf9feb0e]{border-top:2px solid rgba(0,0,0,.1);padding-top:1em}.four.column[data-v-bf9feb0e]{margin-top:-1em;margin-bottom:2em;padding-right:1.2rem!important;padding-left:1.2rem!important}.four.column[data-v-bf9feb0e]:after{display:none!important}.four.column .vertical.menu span.item[data-v-bf9feb0e]{margin-right:0}.twelve.column[data-v-bf9feb0e]{padding-right:1.2rem!important;padding-left:1.2rem!important}}',""])},98:function(e,t,a){var s=a(96);"string"==typeof s&&(s=[[e.i,s,""]]);a(19)(s,{});s.locals&&(e.exports=s.locals)},99:function(e,t,a){var s,n;a(105),a(98),s=a(92);var i=a(102);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-bf9feb0e",e.exports=s}});