# 使用vuepress写blog

## 为什么使用vuepress

[VuePress](https://v2.vuepress.vuejs.org/zh/)是Vue前端框架团队推出的一款静态网站生成器，它的优势就在于它是Vue官方背书。即使是[Docsify](https://docsify.js.org)它也是使用的Vue技术，所以我们何不直接使用VuePress呢。还有Docsify是运行时驱动，而VuePress提前生成静态内容，在SEO上会好一些。

## vuepress的安装

- **npm的使用**：首先得会使用npm，查看之前写的[“Npm的使用”](Npm的使用.md)。
- **vuepress官网**：可以跟着[VuePress](https://v2.vuepress.vuejs.org/zh/)官网来学习使用。
- **初始化项目**：准备一个新项目的空文件夹（也可以对现有项目的docs进行改造，记得先**备份**docs里的内容），在空文件夹下使用`npm init`（`yarn init`）来初始化blog项目（需要上传代码可以使用`git init`）。
- **安装vuepress**：在新项目下（或者现有项目docs的根目录下），运行`npm install -D vuepress`（`yarn add -D vuepress`）局部安装**vuepress**，再编辑`package.json`的`scripts`如下。

    ```json
    {
        // 添加npm运行脚本
        "scripts": {
            "dev": "vuepress dev docs",
            "build": "vuepress build docs"
        },
    }
    ```

- **预览项目**：运行`npm run dev`，打开[http://localhost:8080/](http://localhost:8080/)，如果发现404问题，可以在项目的`docs`下新建一个`README.md`，`docs`就是存放博客的地方，它的`README.md`会成为根路由的渲染页面。
- **新增.gitignore**：在这个`.gitignore`文件里添加`node_modules`、`.git`、`.vscode`、`.temp`、`.cache`等。
- **迁移博客**：在初始化时提过如果是迁移就新建分支，并清空所有内容。原因是`docs`文件夹里如果存有之前的博客内容，那么vuepress可能会**编译报错**，就需要先将这些博客内容**暂时剪切到外面**，等下一小节**配置**的时候再移进来慢慢修改。

## 大致目录结构

```txt
ProjectName（例如blog，也可以是xxx-react，只要保证docs是真正的文档入口目录即可）
  ├── docs
  │   ├── .vuepress (可选的，用于存放全局的配置、组件、静态资源等)
  │   │   ├── components (可选的，该目录中的 Vue 组件将会被自动注册为全局组件)
  │   │   ├── theme (可选的，用于存放本地主题)
  │   │   │   └── Layout.vue
  │   │   ├── public (可选的，静态资源目录)
  │   │   ├── styles (可选的，用于存放样式相关的文件)
  │   │   │   ├── index.styl (将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级)
  │   │   │   └── palette.styl (用于重写默认颜色常量，或者设置新的 stylus 颜色常量)
  │   │   ├── templates (可选的，谨慎配置，存储 HTML 模板文件)
  │   │   │   ├── dev.html (用于开发环境的 HTML 模板文件)
  │   │   │   └── ssr.html (构建时基于 Vue SSR 的 HTML 模板文件)
  │   │   ├── config.js (可选的，配置文件的入口文件，也可以是 YML 或 toml)
  │   │   └── enhanceApp.js (可选的，客户端应用的增强)
  │   ├── book-sketches （自定义博客内容，例如生活部分）
  │   │       └──_sidebar.md （book-sketches里所有md文件组成的目录）
  │   ├── book-web （自定义博客内容，例如web部分）
  │   │       └──_sidebar.md （book-web里所有md文件组成的目录）
  │   │ 
  │   ├── README.md
  │   ├── guide
  │   │   └── README.md
  │   └── config.md
  │ 
  └── package.json
```

## 设置首页

在`docs/README.md`里加入如下文字，就可以让vuepress将它们渲染成首页（指定`home: true`）。`heroImage`的资源需要放到`docs/.vuepress/public`里。

```txt
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

## vuepress的基本配置

页面样式和内容都非常简陋，我们需要稍微对它进行一些配置。在`docs/.vuepress`下新建一个`config.js`文件，它就是用来配置我们blog项目的。

可以看官网的常见配置——[vuepress默认主题配置](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html)。

本人的配置如下：

```js
const sidebar = require('./sidebar.js');

module.exports = {
    title: 'Liawn\'s blog',
    description: '用vuepress搭建的个人博客',
    base: '/blog-vuepress/',
    port: 4002,
    head: [
        ['meta', {charset: 'UTF-8'}],
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: true, // 代码块显示行号
        toc: { includeLevel: [2, 3, 4, 5] },
        // markdown-it插件，解决相对路径中文图片问题
        extendMarkdown: md => {
            // yarn add markdown-it-disable-url-encode --dev
            md.use(require("markdown-it-disable-url-encode"), "./");
        }
    },
    plugins: [
        // yarn add @vuepress/plugin-medium-zoom -D
        '@vuepress/plugin-medium-zoom',
        // yarn add vuepress-plugin-fulltext-search -D
        'fulltext-search'
    ],
    theme: 'vuepress-theme-liawn',
    themeConfig: {
        sidebarDepth: 0, // 0表示让左侧侧边栏禁止提取文章里的标题
        lastUpdated: true, // 文档更新时间：每个文件git最后提交的时间。关闭的话可以节约打包时间
        displayAllHeaders: false, // 默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接
        activeHeaderLinks: false, // 当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新
        smoothScroll: true, // 启用滚动效果
        sidebar, // 侧边栏
        expandAllGroup: false,
        // 导航栏
        nav: [
            { text: 'Web', link: '/book-web/' },
            { text: '生活', link: '/book-sketches/' },
        ],
        rightSidebar: {
            mode: 'dom',
            dept: 6,
            scope: '.page .content__default',
            navbarHeight: 57.6
        }
    },
}
```

## 侧边栏

vuepress的侧边栏要比docsify要麻烦很多，但可以自己配置一些参数。大致的sidebar配置如下

```js
module.exports = {
    '/book-web/': [{
        title: 'web前端',
        collapsable: false, // 一直展开，不带有折叠功能
        initialOpenGroupIndex: -1, // 默认是0表示展开第一项，现设置为-1表示初始化时全部折叠
        children: [{
            title: '学习JavaScript',
            path: '/book-web/html、css、js、ts/学习JavaScript/',
            collapsable: true, // 具有折叠功能
            children: [
                '/book-web/html、css、js、ts/学习JavaScript/1.基础语法',
                '/book-web/html、css、js、ts/学习JavaScript/2.变量、作用域和内存问题'
            ],
        }, {
            title: '学习CSS',
            collapsable: true,
            path: '/book-web/html、css、js、ts/学习CSS/',
            children: [
                '/book-web/html、css、js、ts/学习CSS/1.选择器'
            ],
        },
        {
            title: '学习TypeScript',
            collapsable: true,
            path: '/book-web/html、css、js、ts/学习TypeScript/',
            children: [
                '/book-web/html、css、js、ts/学习TypeScript/1.typescript基础'
            ],
        },
        {
            title: '学习Vue',
            collapsable: true,
            path: '/book-web/web前端js框架/学习Vue/',
            children: [
                '/book-web/web前端js框架/学习Vue/1.vue基础'
            ],
        }]
    },
    {
        title: '常用工具',
        collapsable: false,
        children: [
            '/book-web/常用工具/Npm的使用',
            '/book-web/常用工具/Git的使用'
        ]
    },
    {
        title: '面试准备',
        collapsable: false,
        children: [
            '/book-web/面试准备/WEB前端面试'
        ]
    }],
    // 第二个侧边栏，对应导航栏的第二项
    '/book-sketches/': [{
        title: '电脑工具',
        collapsable: false,
        children: [
            '/book-sketches/电脑工具/win10下载与安装'
        ]
    }, 
    {
        title: '日常生活',
        collapsable: false,
        children: [
            '/book-sketches/日常生活/土味情话' 
        ]
    }]
}
```

如果侧边栏里的每项要加上`1.`、`2.`这样的序号（但文章里的标题又不需要`1.`、`2.`），可以在文章md最上方加上如下代码（yml形式的title，缺点就是要修改md），当然如果文章里的标题本身就带了`1.`、`2.`就可以不用加下面的代码。

```yml
---
title: 1.环境搭建
---
```

如果不想使用yml来实现的话，可以使用下面另外两种方式（稍微麻烦一点，但是无需修改md）

```js
// 第一种方式就是title+path；第二种方式就是一个数组，第一项就是path，第二项就是title
module.exports = [
    {
        title: '1.自定义标题1', // 方式一：title+path，title就是自定义标题
        path: '/xxx/'
    },
    ['/xxx/', '2.自定义标题2'], // 方式二：数组，第一项就是path，第二项就是title
    'xxx' // 方式三：要么标题本身就带有`1.`、`2.`，或者在md最上方加了yml形式的title（缺点就是要修改md）
];
```

## 编译部署

vuepress打包非常慢，可以看[feat($core): 改进 VuePress 制作时间](https://github.com/vuejs/vuepress/pull/2163)、[feat($core): 使用 Node 的工作线程提高构建性能](https://github.com/vuejs/vuepress/pull/2189)、[Vuepress 构建太慢了？！](https://github.com/vuejs/vuepress/issues/1560)

我用的是[itsxallwater](https://github.com/itsxallwater)提供的解决方案
  - 在package.json里添加一个新的打包命令：`"new-build": "docs/.vuepress/scripts/build.sh"`
  - [具体脚本](https://github.com/zumasys/docs/tree/master/site/.vuepress/scripts)
  - 将上一步的`scripts`文件夹复制到`docs/.vuepress`下
  - build.sh稍做修改（updateBuildScript.js和addWorkerScript.js不变）
  
  ```bash
  #!/bin/sh
  cp docs/.vuepress/scripts/updateBuildScript.js node_modules/@vuepress/core/lib/node/build/index.js
  cp docs/.vuepress/scripts/addWorkerScript.js node_modules/@vuepress/core/lib/node/build/worker.js
  vuepress build docs
  ```

运行`yarn new-build`，打包需要6分钟左右（如果不使用以上解决方案，我试过至少需要12h）。打包好的内容在`docs/.vuepress/dist`，在它部署到GiteePages或者GithubPages上。

![GiteePages](./img/GiteePages.png)  

## 常见问题

1. 中文图片路径问题
   - 要使用`markdown-it-disable-url-encode`插件。
   - 先`yarn add markdown-it-disable-url-encode --dev`，然后在`docs/.vuepress/config.js`加入如下代码：

        ```js
        module.exports = {
            markdown: {
                // markdown-it插件，解决相对路径中文图片问题
                extendMarkdown: md => {
                    md.use(require("markdown-it-disable-url-encode"), "./");
                }
            },
        }
        ```

   - 具体参考[Vuepress 图片资源中文路径问题](https://segmentfault.com/a/1190000022275001/)

2. markdown中的花括号和Vue的插值冲突问题

    ```js
    ::: v-pre
    `{{ xxx }}`
    :::
    ```

3. `window`、`document`不能使用的问题。
  - [浏览器的 API 访问限制](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6)
  - `document`有其他解决访问，如`this.$root.$el`或`this.$parent.$el`