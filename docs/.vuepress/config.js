const sidebar = require('./sidebar.js');

module.exports = {
    title: 'Liawn\'s blog',
    description: '用vuepress搭建的个人博客',
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
        lastUpdated: '上一次更新', // 文档更新时间：每个文件git最后提交的时间
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