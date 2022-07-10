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
                '/book-web/html、css、js、ts/学习JavaScript/2.变量、作用域和内存问题',
                '/book-web/html、css、js、ts/学习JavaScript/3.引用类型',
                '/book-web/html、css、js、ts/学习JavaScript/4.面向对象程序设计',
                '/book-web/html、css、js、ts/学习JavaScript/5.函数表达式',
                '/book-web/html、css、js、ts/学习JavaScript/6.Http、Ajax和跨域',
                '/book-web/html、css、js、ts/学习JavaScript/7.异步编程',
                '/book-web/html、css、js、ts/学习JavaScript/js零碎知识和案例'
            ],
        }, {
            title: '学习CSS',
            collapsable: true,
            path: '/book-web/html、css、js、ts/学习CSS/',
            children: [
                '/book-web/html、css、js、ts/学习CSS/1.选择器',
                '/book-web/html、css、js、ts/学习CSS/2.盒模型',
                '/book-web/html、css、js、ts/学习CSS/3.字体与文本属性',
                '/book-web/html、css、js、ts/学习CSS/4.变换、过渡、动画',
                '/book-web/html、css、js、ts/学习CSS/5.定位与浮动',
                '/book-web/html、css、js、ts/学习CSS/6.表格与居中布局',
                '/book-web/html、css、js、ts/学习CSS/7.多列布局',
                '/book-web/html、css、js、ts/学习CSS/8.弹性盒布局',
                '/book-web/html、css、js、ts/学习CSS/9.网格布局',
                '/book-web/html、css、js、ts/学习CSS/10.媒体查询',
                '/book-web/html、css、js、ts/学习CSS/11.还原UI设计'
            ],
        },
        {
            title: '学习TypeScript',
            collapsable: true,
            path: '/book-web/html、css、js、ts/学习TypeScript/',
            children: [
                '/book-web/html、css、js、ts/学习TypeScript/1.typescript基础',
                '/book-web/html、css、js、ts/学习TypeScript/2.typescript进阶'
            ],
        },
        {
            title: '学习Vue',
            collapsable: true,
            path: '/book-web/web前端js框架/学习Vue/',
            children: [
                '/book-web/web前端js框架/学习Vue/1.vue基础',
                '/book-web/web前端js框架/学习Vue/2.vue进阶',
                '/book-web/web前端js框架/学习Vue/3.vue周边',
                '/book-web/web前端js框架/学习Vue/4.vue3学习',
                '/book-web/web前端js框架/学习Vue/5.vue散记'
            ],
        },
        {
            title: '学习React',
            collapsable: true,
            path: '/book-web/web前端js框架/学习React/',
            children: [
                '/book-web/web前端js框架/学习React/1.react基础',
                '/book-web/web前端js框架/学习React/2.react进阶',
                '/book-web/web前端js框架/学习React/react相关问题'
            ],
        },
        '/book-web/web前端js框架/学习jQuery',
        {
            title: 'H5游戏引擎Laya',
            collapsable: true,
            path: '/book-web/LayaBox游戏引擎/',
            children: [
                '/book-web/LayaBox游戏引擎/1.环境搭建',
                '/book-web/LayaBox游戏引擎/2.IDE的使用',
                '/book-web/LayaBox游戏引擎/3.组件库的介绍',
                '/book-web/LayaBox游戏引擎/4.常用组件详解',
                '/book-web/LayaBox游戏引擎/5.组件化开发',
                '/book-web/LayaBox游戏引擎/6.屏幕适配与抗锯齿',
                '/book-web/LayaBox游戏引擎/7.性能优化'
            ],
        }]
    }, 
    {
        title: '数据结构与算法',
        collapsable: false,
        initialOpenGroupIndex: -1, // 默认是0表示展开第一项，现设置为-1表示初始化时全部折叠
        children: [{
            title: '数据结构与算法ts版',
            collapsable: true,
            path: '/book-web/数据结构与算法/',
            children: [
                '/book-web/数据结构与算法/1.环境搭建',
                '/book-web/数据结构与算法/2.栈',
                '/book-web/数据结构与算法/3.队列',
                '/book-web/数据结构与算法/4.链表',
                '/book-web/数据结构与算法/5.集合',
                '/book-web/数据结构与算法/6.字典和散列表',
                '/book-web/数据结构与算法/7.递归',
                '/book-web/数据结构与算法/8.树',
                '/book-web/数据结构与算法/9.二叉堆和堆排序',
                '/book-web/数据结构与算法/10.图',
                '/book-web/数据结构与算法/11.排序和搜索算法',
                '/book-web/数据结构与算法/12.算法设计与技巧',
                '/book-web/数据结构与算法/13.算法复杂度'
            ],
        }]
    },
    {
        title: '常用工具',
        collapsable: false,
        children: [
            '/book-web/常用工具/Npm的使用',
            '/book-web/常用工具/Git的使用',
            '/book-web/常用工具/webpack的使用',
            '/book-web/常用工具/VSCode的使用',
            '/book-web/常用工具/Chrome的使用',
            '/book-web/常用工具/使用vuepress写blog',
            '/book-web/常用工具/使用docsify写blog',
            '/book-web/常用工具/使用gitbook写blog',
            '/book-web/web前端测试与调试/基于mocha+chai的单元测试',
        ]
    },
    {
        title: '简单项目实践',
        collapsable: false,
        initialOpenGroupIndex: -1, // 默认是0表示展开第一项，现设置为-1表示初始化时全部折叠
        children: [{
            title: 'react+express+ts写爬虫',
            collapsable: true,
            path: '/book-web/项目/react+express+ts写爬虫/',
            children: [
                '/book-web/项目/react+express+ts写爬虫/1.用ts编写小爬虫',
                '/book-web/项目/react+express+ts写爬虫/2.用express实现爬虫接口',
                '/book-web/项目/react+express+ts写爬虫/3.用react展示爬虫数据'
            ]
        }]
    },
    {
        title: '面试准备',
        collapsable: false,
        children: [
        ]
    }],
    // 第二个侧边栏，对应导航栏的第二项
    '/book-sketches/': [{
        title: '电脑工具',
        collapsable: false,
        children: [
            '/book-sketches/电脑工具/win10下载与安装',
            '/book-sketches/电脑工具/谷歌浏览器使用',
            '/book-sketches/电脑工具/Frp实现内网穿透',
            '/book-sketches/电脑工具/SoftEther实现虚拟局域网' 
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