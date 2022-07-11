const sidebar = require('./sidebar.js');

module.exports = {
    title: 'Liawn\'s blog',
    description: '用vuepress搭建的个人博客',
    base: '/blog-vuepress/',
    port: 4002,
    head: [
        ['meta', {charset: 'UTF-8'}],
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff' }],
        ['meta', { name: 'msapplication-TileImage', content: '/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    markdown: {
        lineNumbers: true, // 代码块显示行号
        toc: { includeLevel: [2, 3, 4, 5, 6] },
         // this.$page.headers里的标题层级
        extractHeaders: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ],
        // markdown-it插件，解决相对路径中文图片问题
        extendMarkdown: md => {
            // yarn add markdown-it-disable-url-encode --dev。解决`[xxx](./img/xxx)`图片相对路径问题。
            md.use(require("markdown-it-disable-url-encode"), "./");
            // https://github.com/vuejs/vuepress/issues/2377。解决`::: v-pre`手动包裹太麻烦的问题。
            md.use(require("./render-inline-code.js"));
        }
    },
    plugins: [
        // yarn add @vuepress/plugin-medium-zoom -D。解决图片放大问题。
        '@vuepress/plugin-medium-zoom',
        // yarn add vuepress-plugin-fulltext-search -D。解决全文搜索问题。
        'fulltext-search',
        // 离线应用
        ['@vuepress/pwa', {
            serviceWorker: true, // 用于缓存页面的内容以供离线使用（仅会在生产环境中启用）
            updatePopup: true, // 站点有内容更新时显一个更新弹框，并提供了一个 refresh 按钮，允许用户立即刷新内容
        }]
    ],
    // yarn add vuepress-theme-liawn -D。引入自定义主题
    theme: 'vuepress-theme-liawn',
    themeConfig: {
        // 0表示让左侧侧边栏禁止提取文章里的标题。因为我们用了vuepress-theme-liawn，右侧会有文章所有标题，那么左侧就不应该再提取了
        sidebarDepth: 0,
        // 文档更新时间：每个文件git最后提交的时间。其实关闭它可以节约打包时间
        lastUpdated: true,
        // 默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接
        displayAllHeaders: false,
        // 滚动页面，侧边栏标题和 URL 中的 Hash 值会实时更新。vuepress-theme-liawn的左侧侧边栏要实现该功能，所以这里关闭自有的
        activeHeaderLinks: false,
        // vuepress-plugin-smooth-scroll有bug，这里关闭它然后在.vuepress/enhanceApp.js实现它
        smoothScroll: false,
         // 侧边栏，东西太多，单独放到了sidebar.js
        sidebar,
        // 导航栏
        nav: [
            { text: 'Web', link: '/book-web/' },
            { text: '生活', link: '/book-sketches/' },
        ],
        // vuepress-theme-liawn的配置项
        rightSidebar: {
            // h1的padding-top + margin-top + a的margin-top。
            // 当top小于等于targetTop时，当前header就更新到右侧侧边栏标题和 URL 中的 Hash 值
            targetTop: 73.6 - 24 + 32 + 3.74,
            // 用于解决vuepress-plugin-smooth-scroll问题，表示是否平滑滚动
            smoothScroll: true
        }
    },
}