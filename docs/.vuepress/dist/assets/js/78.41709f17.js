(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{682:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"学习react的准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习react的准备工作"}},[t._v("#")]),t._v(" 学习react的准备工作")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://react.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React"),a("OutboundLink")],1),t._v("由来：")]),t._v(" "),a("ol",[a("li",[t._v("起初由Facebook的软件工程师Jordan Walke创建。")]),t._v(" "),a("li",[t._v("于2011年部署于Facebook的newsfeed。")]),t._v(" "),a("li",[t._v("随后在2012年部署于Instagram。")]),t._v(" "),a("li",[t._v("2013年5月宣布开源")])]),t._v(" "),a("p",[t._v("React是一款将数据渲染成HTML页面的JavaScript开源库。它使用"),a("strong",[t._v("函数式编程")]),t._v("进行"),a("strong",[t._v("组件化")]),t._v("式的开发，组件间遵循"),a("strong",[t._v("单向数据流")]),t._v("。")]),t._v(" "),a("p",[t._v("组件化：将页面分割成许多独立的组件（可自由组合），这些组件有自己的功能逻辑，组件也可以复用在很多地方，以达到功能相同风格一致的目的。组件是独立的但彼此之间还是存在一定的关联，可以通过数据流来达到联动的目的。")]),t._v(" "),a("p",[t._v("单向数据流：两种理解，一是组件间的数据只能是上层流动到下层，如要传递回上层得"),a("strong",[t._v("另外")]),t._v("通过回调函数等方式；二是数据存储与UI之间只能是数据决定UI展示，如要让UI的变化影响数据的话得"),a("strong",[t._v("另外")]),t._v("使用"),a("code",[t._v("setState")]),t._v("等方式。")]),t._v(" "),a("p",[t._v("函数式编程：因为组件自由组合的缘故，基本用不到组件继承，组件间组合的代码书写还有复用这与函数式编程的方式没什么区别。")]),t._v(" "),a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("保证本地有"),a("RouterLink",{attrs:{to:"/book-web/常用工具/Npm的使用.html"}},[t._v("node.js")]),t._v("还有"),a("RouterLink",{attrs:{to:"/book-web/常用工具/Git的使用.html"}},[t._v("git")]),t._v("。")],1)]),t._v(" "),a("li",[a("p",[t._v("使用的编辑器是"),a("RouterLink",{attrs:{to:"/book-web/常用工具/VSCode的使用.html"}},[t._v("vscode")]),t._v("，打包工具是"),a("RouterLink",{attrs:{to:"/book-web/常用工具/webpack的使用.html"}},[t._v("webpack")]),t._v("。")],1)]),t._v(" "),a("li",[a("p",[t._v("使用的语言是js（还有jsx），当然也可以用"),a("RouterLink",{attrs:{to:"/book-web/html、css、js、ts/学习TypeScript/TypeScript简介.html"}},[t._v("typescript")]),t._v("。")],1)]),t._v(" "),a("li",[a("p",[t._v("脚手架工具是"),a("a",{attrs:{href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("create-react-app"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("可以先卸载老旧的create-react-app，"),a("code",[t._v("npm uninstall create-react-app -g")]),t._v("；")]),t._v(" "),a("li",[t._v("然后全局安装create-react-app，"),a("code",[t._v("npm install create-react-app -g")]),t._v("；")]),t._v(" "),a("li",[t._v("在一个空目录或者你的前端workspace下运行运行"),a("code",[t._v("npx create-react-app my-app")]),t._v("，其中"),a("code",[t._v("my-app")]),t._v("是项目名。如果是ts项目，就输入"),a("code",[t._v("npx create-react-app my-app --template typescript")])]),t._v(" "),a("li",[t._v("4.0.0版本的create-react-app脚手架有些问题，需要修改node_modules里的webpack配置，具体去"),a("RouterLink",{attrs:{to:"/book-web/web前端js框架/学习React/react相关问题.html"}},[t._v("react相关问题")]),t._v("里查看。")],1)])]),t._v(" "),a("li",[a("p",[t._v("删除暂时不需要的文件（按自己的需要留）：")]),t._v(" "),a("ul",[a("li",[t._v("删除入口文件index.tsx中的reportWebVitals（性能分析）和index.css的使用，对应删除reportWebVitals.ts文件和index.css文件；")]),t._v(" "),a("li",[t._v("清空App.tsx中的所有内容，删除logo.svg文件和App.css文件；")]),t._v(" "),a("li",[t._v("删除测试相关的文件setupTests.ts和App.test.tsx（自动化测试）。")])])]),t._v(" "),a("li",[a("p",[t._v("如果你不想用脚手架，可以用"),a("code",[t._v("<script>")]),t._v("方式引进来")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- react核心库。https://react.docschina.org/docs/add-react-to-a-website.html --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/react@16/umd/react.development.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- react操作dom的库 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/react-dom@16/umd/react-dom.development.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 编译jsx、es5以上的语法。https://www.babeljs.cn/setup#installation --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/@babel/standalone/babel.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 如果要使用jsx那就要将text/javascript换成text/babel --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你的jsx代码")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("安装"),a("strong",[t._v("React开发调试工具")]),t._v("，打开"),a("a",{attrs:{href:"https://chrome.google.com/webstore/category/extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome网上应用店"),a("OutboundLink")],1),t._v("，在搜索栏里搜索“React.js devtools”，确认一下提供方是Facebook，安装它之后，点开这个扩展程序，将“允许访问文件网址”打开。")])]),t._v(" "),a("li",[a("p",[t._v("推荐VSCode中的“ES7 React/Redux/React-Native/JS snippets”插件")])])]),t._v(" "),a("h2",{attrs:{id:"简单了解一下项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单了解一下项目结构"}},[t._v("#")]),t._v(" 简单了解一下项目结构")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("项目"),a("strong",[t._v("常见目录和文件")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("node_modules")]),t._v("存储的是项目需要的npm局部包，通过"),a("code",[t._v("npm install")]),t._v("下载的局部包都在这个文件夹下。")]),t._v(" "),a("li",[a("code",[t._v("public")]),t._v("存储的是项目的静态资源文件。")]),t._v(" "),a("li",[a("code",[t._v("src")]),t._v("存储的是项目的源代码。")]),t._v(" "),a("li",[t._v("如果经过"),a("code",[t._v("npm run bulid")]),t._v("命令打包项目后会生成一个"),a("code",[t._v("bulid")]),t._v("文件夹，存储着浏览器可执行的代码（es5等）。")]),t._v(" "),a("li",[t._v("如果经过"),a("code",[t._v("npm run eject")]),t._v("命令进行配置文件弹出的话会生成"),a("code",[t._v("config")]),t._v("文件夹。")]),t._v(" "),a("li",[a("code",[t._v("package.json")]),t._v("和"),a("code",[t._v("package-lock.json")]),t._v("是npm包的清单和配置信息。")]),t._v(" "),a("li",[a("code",[t._v("tsconfig.json")]),t._v("是ts编译配置文件。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("根节点")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("public/index.html")]),t._v("中的"),a("code",[t._v('<div id="root"></div>')]),t._v("就是根节点，react元素会被动态挂载到这个div根节点上。")]),t._v(" "),a("li",[t._v("js的入口就是"),a("strong",[t._v("src/index.tsx")]),t._v("，其中有个"),a("code",[t._v("ReactDOM.render(<App />, document.getElementById('root'))")]),t._v("，这就是连接html和js的根节点代码。")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("%PUBLIC_URL%/favicon.ico"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 用于开启理想视口，用于做移动端网页适配 --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 用于配置浏览器页签+地址栏的颜色（仅支持安卓手机浏览器） --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme-color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#000000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("learn-react"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 用于指定网页添加到手机主屏幕后的图标（苹果系统） --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("apple-touch-icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("%PUBLIC_URL%/logo192.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 应用加壳（web变手机应用）的配置文件 --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manifest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("%PUBLIC_URL%/manifest.json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("React App"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("noscript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("You need to enable JavaScript to run this app."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("noscript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 根容器 --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("package.json")]),t._v("文件：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("dependencies")]),t._v("依赖中有两个比较重要的源文件模块"),a("code",[t._v("react")]),t._v("和"),a("code",[t._v("react-dom")]),t._v("，这是react的核心所在。然后还有一个"),a("code",[t._v("react-scripts")]),t._v("，可以把它理解成一个傻瓜版的webpack，负责编译打包加载文件等功能。")]),t._v(" "),a("li",[a("strong",[t._v("scripts")]),t._v("下有四个命令：\n"),a("ul",[a("li",[a("code",[t._v("start")]),t._v("是启动一个本地服务器，将项目在这个本地服务器上进行托管，在浏览器上打开对应的地址就可以浏览react项目的网页了。")]),t._v(" "),a("li",[a("code",[t._v("build")]),t._v("用于编译打包项目的，因为项目目前都是使用es6或者ts语法的，需要经过编译生成es5代码让浏览器使用。")]),t._v(" "),a("li",[a("code",[t._v("test")]),t._v("用于做单元测试等测试程序的。")]),t._v(" "),a("li",[a("code",[t._v("eject")]),t._v("帮助我们弹出项目的配置文件（前提先提交到git），但是会对项目造成不可逆的结构性改变，不是特殊需求还是不要进行这一步。")])])])])]),t._v(" "),a("li",[a("p",[t._v("周边库："),a("code",[t._v("nanoid")]),t._v("生成唯一id，使用"),a("code",[t._v("npm i nanoid")]),t._v("进行局部安装；")])])]),t._v(" "),a("h2",{attrs:{id:"简单了解一下ts编译相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单了解一下ts编译相关"}},[t._v("#")]),t._v(" 简单了解一下ts编译相关")]),t._v(" "),a("ol",[a("li",[t._v("tsconfig.json中"),a("strong",[t._v("compilerOptions")]),t._v("的常见项：\n"),a("ul",[a("li",[a("strong",[t._v("noImplicitAny")]),t._v("：在表达式和声明上有隐含的any类型时报错。如果需要进行ts和js的混合编写的话，这个值可以设置为"),a("code",[t._v("false")]),t._v("，去掉报错信息。")]),t._v(" "),a("li",[a("strong",[t._v("target")]),t._v("：编译后的目标文件的es版本，一般是"),a("code",[t._v("es5")]),t._v("（主流浏览器），如果是react-native可以使用"),a("code",[t._v("es6")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("lib")]),t._v("：编译期间所需要的库文件，为了告诉编译器可以使用哪些功能。例如"),a("code",[t._v("document.getElementById('root')")]),t._v("就需要使用dom这个库。")]),t._v(" "),a("li",[a("strong",[t._v("allowJs")]),t._v("：允许混合编译js文件，一般设置为"),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("esModuleInterop")]),t._v("：允许我们使用CommonJS的方式来导入导出文件，一般设置为"),a("code",[t._v("true")]),t._v("。不开启的话得使用"),a("code",[t._v("import * as React from 'react'")]),t._v("这种比较麻烦的写法。")]),t._v(" "),a("li",[a("strong",[t._v("module")]),t._v("：配置我们的代码使用哪个模块系统。有node.js的"),a("code",[t._v("CommonJS")]),t._v("系统，es6标准的"),a("code",[t._v("esnext")]),t._v("或"),a("code",[t._v("es6")]),t._v("系统，requirejs的"),a("code",[t._v("AMD")]),t._v("系统。常使用"),a("code",[t._v("esnext")]),t._v("，使用"),a("code",[t._v("CommonJS")]),t._v("也是可以的。")]),t._v(" "),a("li",[a("strong",[t._v("moduleResolution")]),t._v("：决定我们编译器的工作方式，也决定各个文件调用、import的工作流程。一般是"),a("code",[t._v("node")]),t._v("，还有一个值"),a("code",[t._v("classic")]),t._v("在19年被废弃了。")]),t._v(" "),a("li",[a("strong",[t._v("isolatedModules")]),t._v("：编译器会将每个文件作为单独的模块来使用，一般设置为"),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("noEmit")]),t._v("：当发生编译错误时，编译器不会生成对应的js代码，一般设置为"),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("jsx")]),t._v("：允许编译器支持编译react代码，设置的值为"),a("code",[t._v("react")]),t._v("，表示生成js。另外还可以取值"),a("code",[t._v("preserve")]),t._v("是保留jsx形式，取值"),a("code",[t._v("react-native")]),t._v("内容还是jsx形式但拓展名是js了；还有两个"),a("code",[t._v("react-jsx")]),t._v("和"),a("code",[t._v("react-jsxdev")]),t._v("是新的转换，可以看"),a("a",{attrs:{href:"https://zh-hans.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("介绍全新的 JSX 转换"),a("OutboundLink")],1),t._v("。")])])]),t._v(" "),a("li",[t._v("tsconfig.json中的"),a("strong",[t._v("其他项")]),t._v("：\n"),a("ul",[a("li",[a("strong",[t._v("include")]),t._v("：需要编译的文件，使用文件的相对路径或绝对路径。"),a("code",[t._v("**")]),t._v("表示任意子目录，"),a("code",[t._v("*")]),t._v("表示任意文件名，"),a("code",[t._v("?")]),t._v("表示可忽略的。")]),t._v(" "),a("li",[a("strong",[t._v("exclude")]),t._v("：将会从编译中排除的文件，使用方法和include一样，经常用于排除include里不需要的文件，也还会排除"),a("code",[t._v("node_modules")]),t._v("、测试文件和编译输出目录。如果省略此选项，将会使用"),a("code",[t._v("outDir")]),t._v("作为指定目录")]),t._v(" "),a("li",[a("strong",[t._v("files")]),t._v("：始终会被编译的文件，不会受到exclude的影响。")])])]),t._v(" "),a("li",[t._v("ts编译器的读取tsconfig.json：\n"),a("ul",[a("li",[t._v("在"),a("code",[t._v("node_modules\\react-scripts\\config\\webpack.config.js")]),t._v("文件里有一行代码"),a("code",[t._v("const useTypeScript = fs.existsSync(paths.appTsConfig);")]),t._v("，其中这个"),a("code",[t._v("appTsConfig")]),t._v("指向了项目根目录下的"),a("code",[t._v("tsconfig.json")]),t._v("。")]),t._v(" "),a("li",[t._v("仍然是那个文件，在里面搜索"),a("code",[t._v("require.resolve('babel-loader')")]),t._v("，这个就是项目的编译器，会把"),a("code",[t._v("/\\.(js|mjs|jsx|ts|tsx)$/")]),t._v("这些文件编译成es5代码，编译时通过tsconfig.json再具体去做编译工作。")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);