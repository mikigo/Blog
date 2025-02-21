import {defineConfig} from 'vitepress'
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({
        base: process.env.VITE_BASE,
        lang: 'zh-CN',
        title: "Blog | 技术博客",
        description: "专注于测试方向的技术分享交流平台",
        head: [
            ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
            ['link', {rel: 'icon', href: `${process.env.VITE_BASE || '/'}favicon.ico`}],
        ],
        markdown: {
            config: (md) => {
                md.use(timeline)
            }
        },
        themeConfig: {
            // https://vitepress.dev/reference/default-theme-config
            siteTitle: "mikigo",
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
                        {text: 'Jenkins', link: '/编程基础/Jenkins/Jenkins环境搭建以及任务创建'},
                        {text: 'Linux', link: '/编程基础/Linux/工具使用/KVM安装配置及使用说明'},
                        {text: 'Python', link: '/编程基础/Python/Linux上如何选择用pip3还是sudopip3'},
                        {text: 'Shell', link: '/编程基础/Shell/Shell编码规范错误参考手册'},
                        {text: '人工智能', link: '/编程基础/人工智能/图像/MMDetection入门基础'},
                        {text: '前后端', link: '/编程基础/前后端/前端/Linux上安装Nodejs'},
                        {text: '网络爬虫', link: '/编程基础/网络爬虫/Httpx'},
                    ]
                },
                {
                    text: '技术文档', items: [
                        {
                            text: '根因分析',
                            link: '/技术文档/根因分析/Python调用动态库运行时报静态TLS块不能分配内存根因分析报告'
                        },
                        {text: '技术调研', link: '/技术文档/技术调研/《可用于UOS桌面应用性能自动化工具》调研报告'},
                        {text: '专利交底书', link: '/技术文档/专利交底书/一种定位目标图片坐标的图像识别技术交底书'},
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
            sidebar: {
                "/自动化技术/": [
                    {
                        text: "UI自动化",
                        collapsed: true,
                        items: [
                            {text: "Appium—6小时入门版", link: "/自动化技术/UI自动化/Appium—6小时入门版"},
                            {text: "Playwright—8小时入门版", link: "/自动化技术/UI自动化/Playwright—8小时入门版"},
                            {text: "Selenium—8小时入门版", link: "/自动化技术/UI自动化/Selenium—8小时入门版"},
                        ]
                    },
                    {
                        text: "性能自动化",
                        collapsed: true,
                        items: [
                            {text: "JMeter—10小时入门版", link: "/自动化技术/性能自动化/JMeter—10小时入门版"},
                            {text: "Locust—2小时入门版", link: "/自动化技术/性能自动化/Locust—2小时入门版"},
                        ]
                    },
                    {
                        text: "接口自动化",
                        collapsed: true,
                        items: [
                            {text: "HttpRunner-2小时入门版", link: "/自动化技术/接口自动化/HttpRunner-2小时入门版"},
                        ]
                    },
                    {
                        text: "自动化思想理念",
                        collapsed: true,
                        items: [
                            {text: "PageObjects", link: "/自动化技术/自动化思想理念/PageObjects"},
                            {text: "RPA测试技术", link: "/自动化技术/自动化思想理念/RPA测试技术"},
                        ]
                    },
                    {
                        text: "自动化测试框架",
                        collapsed: true,
                        items: [
                            {
                                text: "",
                                items: [
                                    
                                ]
                            },
                            {text: "Pytest从入门到起飞", link: "/自动化技术/自动化测试框架/Pytest从入门到起飞"},
                            {text: "unittest—3小时入门版", link: "/自动化技术/自动化测试框架/unittest—3小时入门版"},
                        ]
                    },
                ],
                "/编程基础/": [
                    {
                        text: "Jenkins",
                        collapsed: true,
                        items: [
                            {text: "Jenkins环境搭建以及任务创建", link: "/编程基础/Jenkins/Jenkins环境搭建以及任务创建"},
                            {text: "Pipeline语法介绍", link: "/编程基础/Jenkins/Pipeline语法介绍"},
                        ]
                    },
                    {
                        text: "Linux",
                        collapsed: true,
                        items: [
                            {
                                text: "工具使用",
                                collapsed: true,
                                items: [
                                    {text: "dde-dconfig使用", link: "/编程基础/Linux/工具使用/dde-dconfig使用"},
                                    {text: "Docker入门", link: "/编程基础/Linux/工具使用/Docker入门"},
                                    {
                                        text: "FFmpeg常用命令与参数解释",
                                        link: "/编程基础/Linux/工具使用/FFmpeg常用命令与参数解释"
                                    },
                                    {text: "FTP服务搭建", link: "/编程基础/Linux/工具使用/FTP服务搭建"},
                                    {text: "KVM安装配置及使用说明", link: "/编程基础/Linux/工具使用/KVM安装配置及使用说明"},
                                    {text: "Nginx入门使用", link: "/编程基础/Linux/工具使用/Nginx入门使用"},
                                    {text: "vim配置和插件选择", link: "/编程基础/Linux/工具使用/vim配置和插件选择"},
                                ]
                            },
                            {
                                text: "方案教程",
                                collapsed: true,
                                items: [
                                    {text: "deb安装包制作", link: "/编程基础/Linux/方案教程/deb安装包制作"},
                                    {text: "Linux上sudo免密", link: "/编程基础/Linux/方案教程/Linux上sudo免密"},
                                    {
                                        text: "Linux上远程桌面VNC配置",
                                        link: "/编程基础/Linux/方案教程/Linux上远程桌面VNC配置"
                                    },
                                    {text: "Linux基础", link: "/编程基础/Linux/方案教程/Linux基础"},
                                    {text: "U盘新建分区和文件系统", link: "/编程基础/Linux/方案教程/U盘新建分区和文件系统"},
                                    {text: "配置开机自启服务", link: "/编程基础/Linux/方案教程/配置开机自启服务"},
                                ]
                            },
                        ]
                    },
                    {
                        text: "Python",
                        collapsed: true,
                        items: [
                            {
                                text: "Linux上如何选择用pip3还是sudopip3",
                                link: "/编程基础/Python/Linux上如何选择用pip3还是sudopip3"
                            },
                            {text: "Linux上安装Python3.9.9", link: "/编程基础/Python/Linux上安装Python3.9.9"},
                            {text: "Python从进阶到高级—通俗易懂版", link: "/编程基础/Python/Python从进阶到高级—通俗易懂版"},
                            {text: "Python包构建和发布", link: "/编程基础/Python/Python包构建和发布"},
                            {text: "Python基础语法—8小时入门版", link: "/编程基础/Python/Python基础语法—8小时入门版"},
                            {
                                text: "Python最强静态代码检查&格式化工具Ruff",
                                link: "/编程基础/Python/Python最强静态代码检查&格式化工具Ruff"
                            },
                            {text: "Python环境与依赖管理", link: "/编程基础/Python/Python环境与依赖管理"},
                            {text: "Python风格指南", link: "/编程基础/Python/Python风格指南"},
                            {text: "常用的获取随机字符串的方法", link: "/编程基础/Python/常用的获取随机字符串的方法"},
                            {text: "配置Python源的几种方法", link: "/编程基础/Python/配置Python源的几种方法"},
                        ]
                    },
                    {
                        text: "Shell",
                        collapsed: true,
                        items: [
                            {text: "Shell参数传递", link: "/编程基础/Shell/Shell参数传递"},
                            {text: "Shell变量使用", link: "/编程基础/Shell/Shell变量使用"},
                            {text: "Shell字符串处理", link: "/编程基础/Shell/Shell字符串处理"},
                            {text: "Shell数学运算", link: "/编程基础/Shell/Shell数学运算"},
                            {text: "Shell编码规范错误参考手册", link: "/编程基础/Shell/Shell编码规范错误参考手册"},
                            {text: "Shell进程控制", link: "/编程基础/Shell/Shell进程控制"},
                            {text: "Shell风格指南", link: "/编程基础/Shell/Shell风格指南"},
                        ]
                    },
                    {
                        text: "人工智能",
                        collapsed: true,
                        items: [
                            {
                                text: "图像",
                                collapsed: true,
                                items: [
                                    {text: "MMDetection入门基础", link: "/编程基础/人工智能/图像/MMDetection入门基础"},
                                    {text: "NVIDIA驱动&CUDA&cuDNN安装", link: "/编程基础/人工智能/图像/NVIDIA驱动&CUDA&cuDNN安装"},
                                    {text: "OpenCV(Python)基础—9小时入门版", link: "/编程基础/人工智能/图像/OpenCV(Python)基础—9小时入门版"},
                                ]
                            },
                            {text: "智能化功能测试", link: "/编程基础/人工智能/智能化功能测试"},
                            {text: "智能化性能测试", link: "/编程基础/人工智能/智能化性能测试"},
                        ]
                    },
                    {
                        text: "前后端",
                        collapsed: true,
                        items: [
                            {
                                text: "前端",
                                collapsed: true,
                                items: [
                                    {text: "CSS基础", link: "/编程基础/前后端/前端/CSS基础"},
                                    {text: "html基础", link: "/编程基础/前后端/前端/html基础"},
                                    {text: "JS基础", link: "/编程基础/前后端/前端/JS基础"},
                                    {text: "Linux上安装Nodejs", link: "/编程基础/前后端/前端/Linux上安装Nodejs"},
                                    {text: "Vue基础", link: "/编程基础/前后端/前端/Vue基础"},
                                    {text: "Web基础", link: "/编程基础/前后端/前端/Web基础"},
                                    {text: "测开前端学习基础分享", link: "/编程基础/前后端/前端/测开前端学习基础分享"},
                                    {text: "研测平台权限管理前端设计", link: "/编程基础/前后端/前端/研测平台权限管理前端设计"},
                                ]
                            },
                            {
                                text: "后端",
                                collapsed: true,
                                items: [
                                    {text: "Django基础知识", link: "/编程基础/前后端/后端/Django基础知识"},
                                    {text: "Django进阶技巧", link: "/编程基础/前后端/后端/Django进阶技巧"},
                                    {text: "FastAPI—8小时入门版", link: "/编程基础/前后端/后端/FastAPI—8小时入门版"},
                                    {text: "MySQL基础", link: "/编程基础/前后端/后端/MySQL基础"},
                                ]
                            }
                        ]
                    },
                    {
                        text: "网络爬虫",
                        collapsed: true,
                        items: [
                            {text: "Httpx", link: "/编程基础/网络爬虫/Httpx"},
                            {text: "Requests", link: "/编程基础/网络爬虫/Requests"},
                            {text: "Scrapy", link: "/编程基础/网络爬虫/Scrapy"},
                        ]
                    }
                ],
                "/技术文档/": [
                    {
                        text: "根因分析",
                        collapsed: true,
                        items: [
                            {
                                text: "Python调用动态库运行时报静态TLS块不能分配内存根因分析报告",
                                link: "/技术文档/根因分析/Python调用动态库运行时报静态TLS块不能分配内存根因分析报告"
                            },
                            {
                                text: "rootfs进入MATE桌面后打开终端不能执行reboot指令根因分析",
                                link: "/技术文档/根因分析/rootfs进入MATE桌面后打开终端不能执行reboot指令根因分析"
                            },
                        ]
                    },
                    {
                        text: "技术调研",
                        collapsed: true,
                        items: [
                            {text: "wayland键鼠模拟工具技术调研", link: "/技术文档/技术调研/wayland键鼠模拟工具技术调研"},
                            {
                                text: "youqu3中断任务续跑功技术能调研",
                                link: "/技术文档/技术调研/youqu3中断任务续跑功技术能调研"
                            },
                            {text: "《Avocado和YouQu对比》调研报告", link: "/技术文档/技术调研/《Avocado和YouQu对比》调研报告"},
                            {
                                text: "《可用于UOS桌面应用性能自动化工具》调研报告",
                                link: "/技术文档/技术调研/《可用于UOS桌面应用性能自动化工具》调研报告"
                            },
                            {
                                text: "《命令行用例转换自动化测试》调研报告",
                                link: "/技术文档/技术调研/《命令行用例转换自动化测试》调研报告"
                            },
                            {
                                text: "《应用于桌面应用压力测试的模拟输入工具》调研报告",
                                link: "/技术文档/技术调研/《应用于桌面应用压力测试的模拟输入工具》调研报告"
                            },
                            {
                                text: "《获取影院播放视频FPS方法》调研报告",
                                link: "/技术文档/技术调研/《获取影院播放视频FPS方法》调研报告"
                            },
                            {
                                text: "《针对PMS用例数据检查与自动化工程CSV文件数据同步的方法》调研报告",
                                link: "/技术文档/技术调研/《针对PMS用例数据检查与自动化工程CSV文件数据同步的方法》调研报告"
                            },
                            {text: "域管自动化测试技术调研", link: "/技术文档/技术调研/域管自动化测试技术调研"},
                        ]
                    },
                    {
                        text: "专利交底书",
                        collapsed: true,
                        items: [
                            {
                                text: "一种dock栏展示和交互方法技术交底书",
                                link: "/技术文档/专利交底书/一种dock栏展示和交互方法技术交底书"
                            },
                            {
                                text: "一种基于Linux系统执行自动化测试用例实现负载均衡的技术交底书",
                                link: "/技术文档/专利交底书/一种基于Linux系统执行自动化测试用例实现负载均衡的技术交底书"
                            },
                            {
                                text: "一种基于图像识别的桌面应用控件智能标注的交底书",
                                link: "/技术文档/专利交底书/一种基于图像识别的桌面应用控件智能标注的交底书"
                            },
                            {
                                text: "一种基于机器学习智能识别元素控件的UI自动化测试方法",
                                link: "/技术文档/专利交底书/一种基于机器学习智能识别元素控件的UI自动化测试方法"
                            },
                            {
                                text: "一种定位目标图片坐标的图像识别技术交底书",
                                link: "/技术文档/专利交底书/一种定位目标图片坐标的图像识别技术交底书"
                            },
                            {
                                text: "一种对使用Linux包管理器安装的Python包进行虚拟化的技术交底书",
                                link: "/技术文档/专利交底书/一种对使用Linux包管理器安装的Python包进行虚拟化的技术交底书"
                            },
                            {
                                text: "一种机器分离的应用响应性能自动化测试方案技术交底书",
                                link: "/技术文档/专利交底书/一种机器分离的应用响应性能自动化测试方案技术交底书"
                            },
                            {
                                text: "一种系统文件基于事物属性对其进行多维度多空间管理方法的交底书",
                                link: "/技术文档/专利交底书/一种系统文件基于事物属性对其进行多维度多空间管理方法的交底书"
                            },
                            {
                                text: "一种自动化测试用例步骤中断后恢复执行的技术交底书",
                                link: "/技术文档/专利交底书/一种自动化测试用例步骤中断后恢复执行的技术交底书"
                            },
                            {
                                text: "一种自动安装镜像的技术交底书",
                                link: "/技术文档/专利交底书/一种自动安装镜像的技术交底书"
                            },
                            {
                                text: "一种针对Linux系统异常命令的测试方法技术交底书",
                                link: "/技术文档/专利交底书/一种针对Linux系统异常命令的测试方法技术交底书"
                            },
                            {
                                text: "基于shell的测试框架技术交底书",
                                link: "/技术文档/专利交底书/基于shell的测试框架技术交底书"
                            },
                            {
                                text: "基于视频播放器外部获取播放中视频FPS的测试技术交底书",
                                link: "/技术文档/专利交底书/基于视频播放器外部获取播放中视频FPS的测试技术交底书"
                            },
                        ]
                    }
                ],
                "/分享有趣/": [
                    {
                        text: "常见问题",
                        collapsed: true,
                        items: [
                            {text: "emoji不显示", link: "/分享有趣/常见问题/emoji不显示"},
                            {text: "ftp服务器无法连接问题", link: "/分享有趣/常见问题/ftp服务器无法连接问题"},
                            {text: "Git报错", link: "/分享有趣/常见问题/Git报错"},
                            {text: "Pycharm问题", link: "/分享有趣/常见问题/Pycharm问题"},
                            {text: "Shell问题随记", link: "/分享有趣/常见问题/Shell问题随记"},
                            {text: "VSCode远程环境开发指南", link: "/分享有趣/常见问题/VSCode远程环境开发指南"},
                            {text: "Wayland下sniff报错", link: "/分享有趣/常见问题/Wayland下sniff报错"},
                            {text: "前端问题", link: "/分享有趣/常见问题/前端问题"},
                            {text: "域管客户端自动化执行失败问题", link: "/分享有趣/常见问题/域管客户端自动化执行失败问题"},
                            {text: "报错Python字符串不相等", link: "/分享有趣/常见问题/报错Python字符串不相等"},
                            {text: "自动化过程", link: "/分享有趣/常见问题/自动化过程"},
                            {text: "锁屏界面被长时间锁住问题", link: "/分享有趣/常见问题/锁屏界面被长时间锁住问题"},
                        ]
                    },
                    {
                        text: "经验总结",
                        collapsed: true,
                        items: [
                            {text: "AT代码提交流程与常见场景", link: "/分享有趣/经验总结/AT代码提交流程与常见场景"},
                            {text: "AT开发规范", link: "/分享有趣/经验总结/AT开发规范"},
                            {text: "AT用例筛选指北", link: "/分享有趣/经验总结/AT用例筛选指北"},
                            {text: "AT经验总结", link: "/分享有趣/经验总结/AT经验总结"},
                            {text: "UDCP自动化过程中记录", link: "/分享有趣/经验总结/UDCP自动化过程中记录"},
                            {text: "YouQu-远程交互式控制", link: "/分享有趣/经验总结/YouQu-远程交互式控制"},
                            {text: "中文文案排版指北", link: "/分享有趣/经验总结/中文文案排版指北"},
                        ]
                    },
                    {
                        text: "读书笔记",
                        collapsed: true,
                        items: [
                            {text: "OpenStack系统架构设计实战", link: "/分享有趣/读书笔记/OpenStack系统架构设计实战"},
                            {text: "大型网站技术架构", link: "/分享有趣/读书笔记/大型网站技术架构"},
                            {text: "活法", link: "/分享有趣/读书笔记/活法"},
                            {text: "生成式AI：人工智能的未来", link: "/分享有趣/读书笔记/生成式AI：人工智能的未来"},
                        ]
                    }
                ],

            },
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
    }
);
