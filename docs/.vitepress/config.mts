import {defineConfig} from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import {withMermaid} from "vitepress-plugin-mermaid";
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default withMermaid(
    defineConfig({
        base: '/Blog/',
        lang: 'zh-CN',
        title: "Blog | 技术博客",
        description: "专注于测试方向的技术分享交流平台",
        head: [
            ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
            ['link', {rel: 'icon', href: "/favicon.ico"}],
        ],
        vite: {
            plugins: [
                // add plugin
                AutoSidebar({
                    // You can also set options to adjust sidebar data
                    // see option document below
                    prefix: '.', collapsed: true
                })
            ]
        },
        markdown: {
            config: (md) => {
                md.use(timeline)
            }
        },
        themeConfig: {
            // https://vitepress.dev/reference/default-theme-config
            siteTitle: "mikigo blog",
            nav: [
                {text: '🏠首页', link: '/index'},
                {
                    text: '自动化技术', items: [
                        {text: 'UI自动化', link: '/自动化技术/UI自动化/Playwright—8小时入门版'},
                        {text: '性能自动化', link: '/自动化技术/性能自动化/Locust—2小时入门版'},
                        {text: '接口自动化', link: '/自动化技术/接口自动化/HttpRunner-2小时入门版'},
                        {text: '自动化思想理念', link: '/自动化技术/自动化思想理念/PageObjects'},
                        {text: '自动化测试框架', link: '/自动化技术/自动化测试框架/Pytest从入门到起飞'},
                    ]
                },
                {
                    text: '编程基础', items: [
                        {text: 'Python', link: '/编程基础/Python/Linux上如何选择用pip3还是sudopip3'},
                        {text: 'Shell', link: '/编程基础/Shell/Shell编码规范错误参考手册'},
                        {text: 'Linux', link: '/编程基础/Linux/工具使用/KVM安装配置及使用说明'},
                        {text: '人工智能', link: '/编程基础/人工智能/图像/MMDetection入门基础'},
                        {text: '前后端', link: '/编程基础/前后端/前端/Linux上安装Nodejs'},
                        {text: '网络爬虫', link: '/编程基础/网络爬虫/接口请求工具/Httpx'},
                        {text: 'Jenkins', link: '/编程基础/Jenkins/Jenkins环境搭建以及任务创建'},
                    ]
                },
                {
                    text: '技术文档', items: [
                        {text: '专利交底书', link: '/技术文档/专利交底书/一种定位目标图片坐标的图像识别技术交底书'},
                        {text: '技术调研', link: '/技术文档/技术调研/《可用于UOS桌面应用性能自动化工具》调研报告'},
                        {
                            text: '根因分析',
                            link: '/技术文档/根因分析/Python调用动态库运行时报静态TLS块不能分配内存根因分析报告'
                        },
                    ]
                },
                {
                    text: '分享有趣', items: [
                        {text: '常见问题', link: '/分享有趣/常见问题/Wayland下sniff报错'},
                        {text: "经验总结", link: '/分享有趣/经验总结/中文文案排版指北'},
                        {text: "读书笔记", link: '/分享有趣/读书笔记/OpenStack系统架构设计实战'},
                    ]
                },
                {text: '关于', link: '/about'},
            ],
            search: {
                provider: 'local'
            },
            ignoreDeadLinks: true,
            // =========================================================
            logo: {src: '/vitepress-logo-mini.svg', width: 24, height: 24},
            socialLinks: [
                {icon: 'github', link: 'https://github.com/mikigo/Blog', ariaLabel: 'cool link'}
            ],
            footer: {
                copyright: `版权所有 © 2020-${new Date().getFullYear()} mikigo`
            },
            //大纲显示2-5级标题
            outline: [2, 5],
            //大纲顶部标题
            outlineTitle: '当前页大纲',

            docFooter: {
                prev: '上一页',
                next: '下一页'
            },

            lastUpdated: {
                text: '最后更新于',
                formatOptions: {
                    dateStyle: 'short',
                    timeStyle: 'medium'
                }
            },

            langMenuLabel: '多语言',
            returnToTopLabel: '回到顶部',
            sidebarMenuLabel: '菜单',
            darkModeSwitchLabel: '主题',
            lightModeSwitchTitle: '切换到浅色模式',
            darkModeSwitchTitle: '切换到深色模式'
        },
    })
);
