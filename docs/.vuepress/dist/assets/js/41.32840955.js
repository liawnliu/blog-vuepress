(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{568:function(v,e,_){v.exports=_.p+"assets/img/node安装.fa933b34.png"},569:function(v,e,_){v.exports=_.p+"assets/img/npmoutdated.8e97e7f7.png"},701:function(v,e,_){"use strict";_.r(e);var t=_(13),a=Object(t.a)({},(function(){var v=this,e=v.$createElement,t=v._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"npm的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm的使用"}},[v._v("#")]),v._v(" Npm的使用")]),v._v(" "),t("h2",{attrs:{id:"node-js、npm是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js、npm是什么"}},[v._v("#")]),v._v(" Node.js、Npm是什么")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Node.js"),t("OutboundLink")],1),v._v("是JavaScript的一种运行环境，开源、跨平台、可用于众多流行工具里。")]),v._v(" "),t("li",[v._v("也就是说Node.js可以作为JavaScript在服务器上运行的一种形式，在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）。")]),v._v(" "),t("li",[v._v("Node.js 是一个底层的平台，社区在 Node.js 上构建了数千个库，例如：Express、NestJS、Koa、Socket.io等。")]),v._v(" "),t("li",[v._v("Npm是 Node.js 标准的软件包管理器，解决Node.js部署的很多问题；可以下载别人写好的程序（包、命令行等），也可以自己写程序发布到Npm上。")])]),v._v(" "),t("h2",{attrs:{id:"node-js、npm的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js、npm的安装"}},[v._v("#")]),v._v(" Node.js、Npm的安装")]),v._v(" "),t("ul",[t("li",[v._v("打开"),t("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Node.js官网"),t("OutboundLink")],1),v._v("，如果很慢就使用"),t("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Node.js中文网"),t("OutboundLink")],1),v._v("，选择“Recommended For Most Users（推荐给大多数用户）”，也就是稳定版本。\n"),t("img",{attrs:{src:_(568),alt:"node.js安装"}})]),v._v(" "),t("li",[v._v("npm包管理工具是同node.js一并安装的，意思是node.js安装好后npm也随之安装到电脑上了。")]),v._v(" "),t("li",[v._v("打开“Git Bash”，没有装Git的可以看一下"),t("RouterLink",{attrs:{to:"/book-web/常用工具/Git的使用.html"}},[v._v("Git的使用")]),v._v("；或者打开cmd，输入"),t("code",[v._v("node --version")]),v._v("可以查看安装的node是什么版本的，输入"),t("code",[v._v("npm --version")]),v._v("可以查看安装的npm是什么版本的。")],1)]),v._v(" "),t("h2",{attrs:{id:"npm的基础命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm的基础命令"}},[v._v("#")]),v._v(" Npm的基础命令")]),v._v(" "),t("h3",{attrs:{id:"创建package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建package-json"}},[v._v("#")]),v._v(" 创建package.json")]),v._v(" "),t("p",[t("code",[v._v("npm init")]),v._v("其实是给项目生成package.json，也就是依赖配置文件，里面包含一些项目中的软件包的信息（名称、版本、脚本等）。")]),v._v(" "),t("h3",{attrs:{id:"package-json的常用字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json的常用字段"}},[v._v("#")]),v._v(" package.json的常用字段")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("字段")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("name")]),v._v(" "),t("td",[v._v("设置了应用程序/软件包的名称。")])]),v._v(" "),t("tr",[t("td",[v._v("version")]),v._v(" "),t("td",[v._v("表明了当前的版本。")])]),v._v(" "),t("tr",[t("td",[v._v("description")]),v._v(" "),t("td",[v._v("是应用程序/软件包的简短描述。")])]),v._v(" "),t("tr",[t("td",[v._v("homepage")]),v._v(" "),t("td",[v._v("是应用程序/软件包的官方网站。")])]),v._v(" "),t("tr",[t("td",[v._v("author")]),v._v(" "),t("td",[v._v("是应用程序/软件包的作者。")])]),v._v(" "),t("tr",[t("td",[v._v("contributors")]),v._v(" "),t("td",[v._v("是应用程序/软件包的其他贡献者。")])]),v._v(" "),t("tr",[t("td",[v._v("main")]),v._v(" "),t("td",[v._v("设置了应用程序的入口点。")])]),v._v(" "),t("tr",[t("td",[v._v("repository")]),v._v(" "),t("td",[v._v("应用程序/软件包的存放地方。")])]),v._v(" "),t("tr",[t("td",[v._v("keywords")]),v._v(" "),t("td",[v._v("关键字。")])]),v._v(" "),t("tr",[t("td",[v._v("private")]),v._v(" "),t("td",[v._v("如果设置为 true，则可以防止应用程序/软件包被意外地发布到 npm。")])]),v._v(" "),t("tr",[t("td",[v._v("scripts")]),v._v(" "),t("td",[v._v("定义了一组可以运行的 node 脚本。")])]),v._v(" "),t("tr",[t("td",[v._v("dependencies")]),v._v(" "),t("td",[v._v("设置了作为依赖安装的 npm 软件包的列表。")])]),v._v(" "),t("tr",[t("td",[v._v("devDependencies")]),v._v(" "),t("td",[v._v("设置了作为开发依赖安装的 npm 软件包的列表。")])]),v._v(" "),t("tr",[t("td",[v._v("engines")]),v._v(" "),t("td",[v._v("设置了此软件包/应用程序在哪个版本的 Node.js 上运行。")])]),v._v(" "),t("tr",[t("td",[v._v("browserslist")]),v._v(" "),t("td",[v._v("用于告知要支持哪些浏览器（及其版本）。")])])])]),v._v(" "),t("h3",{attrs:{id:"统一安装所有包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#统一安装所有包"}},[v._v("#")]),v._v(" 统一安装所有包")]),v._v(" "),t("p",[v._v("如果你的package.json是已经全部配好的那种（你是新加入别人的项目），你就可以直接`npm install”，会将项目所有的依赖自动下载装到 node_modules 文件夹下。")]),v._v(" "),t("p",[v._v("如果遇到"),t("code",[v._v("npm resource busy or locked.....”报错，可以先清空NPM本地缓存，具体命令就是")]),v._v("npm cache clean`。")]),v._v(" "),t("h3",{attrs:{id:"局部安装单个包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局部安装单个包"}},[v._v("#")]),v._v(" 局部安装单个包")]),v._v(" "),t("ul",[t("li",[v._v("在项目中开发很久了，突然需要某个功能或插件，就可以使用"),t("code",[v._v("npm install --save-dev xxx")]),v._v("（可简写成“-D”）安装单个软件包（省略“--save-dev”也是局部安装），例如："),t("code",[v._v("npm install --save-dev typescript")]),v._v("。")]),v._v(" "),t("li",[v._v("如果你只是开发环境中使用其实上--save-dev就行，但是如果生产环境也需要某个包，那使用"),t("code",[v._v("npm install --save xxx")]),v._v("（可简写成"),t("code",[v._v("-S")]),v._v("），例如，"),t("code",[v._v("npm install --save core-js")]),v._v("。")]),v._v(" "),t("li",[v._v("在package.json中的体现就是devDependencies和dependencies，可以找个package.json看一下。")]),v._v(" "),t("li",[v._v("如果之前没有区分devDependencies和dependencies，后面加上了devDependencies和dependencies但又上了生产环境，并只想安装dependencies里的包，可以试着加上"),t("code",[v._v("--production")]),v._v("。")])]),v._v(" "),t("h3",{attrs:{id:"全局安装单个包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装单个包"}},[v._v("#")]),v._v(" 全局安装单个包")]),v._v(" "),t("p",[v._v("像typescript是所有项目都可以用的，可以全局安装，将"),t("code",[v._v("--save-dev")]),v._v("换成"),t("code",[v._v("--global")]),v._v("就行了（可简写成“-g”），例如："),t("code",[v._v("npm install -g typescript")]),v._v("。")]),v._v(" "),t("p",[v._v("全局包的位置大概在：C:\\Users\\YOU\\AppData\\Roaming\\npm\\node_modules")]),v._v(" "),t("h3",{attrs:{id:"包安装后的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包安装后的使用"}},[v._v("#")]),v._v(" 包安装后的使用")]),v._v(" "),t("p",[v._v("软件包安装完后可以通过"),t("code",[v._v("require")]),v._v("或"),t("code",[v._v("import")]),v._v("进行使用，如果软件包是可执行文件，可以使用"),t("code",[v._v("npx xxx")]),v._v("来运行。")]),v._v(" "),t("h3",{attrs:{id:"package-lock-json是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-lock-json是什么"}},[v._v("#")]),v._v(" package-lock.json是什么")]),v._v(" "),t("p",[v._v("package-lock.json是在npm 5版本时引入的，为了解决“同一项目不同机器上安装的软件包不一致”的问题。引入后用以保证安装的每个包都有确切版本，可以百分百一致复制到另一台机器上。")]),v._v(" "),t("p",[v._v("package-lock.json 会固化当前安装的每个软件包的版本，npm install时，npm 会使用这些确切的版本，"),t("code",[v._v("npm update")]),v._v("时，会更新package-lock.json文件中软件包的版本。")]),v._v(" "),t("h3",{attrs:{id:"查看包的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看包的版本"}},[v._v("#")]),v._v(" 查看包的版本")]),v._v(" "),t("p",[v._v("查看本地安装的包的版本：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("npm list")]),v._v("：查看局部安装的所有包（包括它们的软件包）的版本。")]),v._v(" "),t("li",[t("code",[v._v("npm list -g")]),v._v("：查看全局安装的所有包（包括它们的软件包）的版本。")]),v._v(" "),t("li",[t("code",[v._v("npm list --depth=0")]),v._v("：查看局部顶层的软件包，也就是 package.json 中列出的软件包的版本。")]),v._v(" "),t("li",[t("code",[v._v("npm list -g --depth 0")]),v._v("：查看全局安装的软件包。")]),v._v(" "),t("li",[t("code",[v._v("npm list xxx")]),v._v("：查看xxx软件包安装的版本。")])]),v._v(" "),t("p",[v._v("查看远程仓库上包的版本：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("npm view xxx version")]),v._v("：查看xxx软件包在Npm远程仓库上最新可用的版本。")]),v._v(" "),t("li",[t("code",[v._v("npm view xxx versions")]),v._v("：查看xxx软件包在Npm远程仓库上以前的旧版本")]),v._v(" "),t("li",[t("code",[v._v("npm outdated")]),v._v("：查看package.json中列出的软件包在本地和远程的版本信息，列出了一个表进行对比。"),t("br"),v._v(" "),t("img",{attrs:{src:_(569),alt:"npmoutdated"}})])]),v._v(" "),t("h3",{attrs:{id:"安装旧版本的包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装旧版本的包"}},[v._v("#")]),v._v(" 安装旧版本的包")]),v._v(" "),t("p",[v._v("在安装命令的包名后加@再加版本号，例如："),t("code",[v._v("npm install cowsay@1.2.0")])]),v._v(" "),t("p",[v._v("全局的软件包也可以："),t("code",[v._v("npm install -g webpack@4.16.4")])]),v._v(" "),t("h3",{attrs:{id:"更新包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新包"}},[v._v("#")]),v._v(" 更新包")]),v._v(" "),t("p",[v._v("semver表示法设置要升级到的版本，例如：")]),v._v(" "),t("ul",[t("li",[v._v("〜1.13.0：只更新补丁版本，可以更新到1.13.1，但1.14.0不行；主要用于修复BUG。")]),v._v(" "),t("li",[v._v("^1.13.0：更新补丁版本和次版本，可以更新到1.13.1、1.14.0等；修改的东西要向下兼容。")]),v._v(" "),t("li",[v._v("1.13.0：不更新，一直使用这个版本。")]),v._v(" "),t("li",[v._v(">1.13.0：大于这个版本的任何版本都可以；>=、<=、<、||同理。")]),v._v(" "),t("li",[v._v("1.13.0 - 1.15.0：这个范围内的任何版本都可以。")])]),v._v(" "),t("p",[v._v("说明：1.13.0，1是主版本（不兼容），13是次版本（向下兼容），0是补丁版本（修复BUG）。")]),v._v(" "),t("p",[v._v("使用"),t("code",[v._v("npm update")]),v._v("来更新所有软件包，使用"),t("code",[v._v("npm update xxx")]),v._v("来更新单个软件包。")]),v._v(" "),t("p",[v._v("有些软件包的主版本使用"),t("code",[v._v("npm update")]),v._v("更新不了，因为可能会引入较大的更改。要强制更新到最新可以使用"),t("code",[v._v("npm install -g npm-check-updates")]),v._v("和"),t("code",[v._v("ncu -u")]),v._v("，再去"),t("code",[v._v("npm update")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"卸载包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载包"}},[v._v("#")]),v._v(" 卸载包")]),v._v(" "),t("p",[v._v("这个很简单，在“安装包”的命令上将"),t("code",[v._v("install")]),v._v("改为"),t("code",[v._v("uninstall")]),v._v("即可。")]),v._v(" "),t("h3",{attrs:{id:"发布包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布包"}},[v._v("#")]),v._v(" 发布包")]),v._v(" "),t("p",[v._v("发布"),t("code",[v._v("npm publish")]),v._v("，撤销发布"),t("code",[v._v("npm unpublish <package>@<version>")])])])}),[],!1,null,null,null);e.default=a.exports}}]);