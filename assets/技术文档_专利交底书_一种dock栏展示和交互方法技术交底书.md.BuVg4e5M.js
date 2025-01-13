import{_ as d,c as a,R as o,o as r}from"./chunks/framework.DzXLMhZy.js";const e="/Blog/%E4%B8%80%E7%A7%8Ddock%E6%A0%8F%E5%B1%95%E7%A4%BA%E5%92%8C%E4%BA%A4%E4%BA%92%E6%96%B9%E6%B3%95%E6%8A%80%E6%9C%AF%E4%BA%A4%E5%BA%95%E4%B9%A6_assets/1.png",c="/Blog/%E4%B8%80%E7%A7%8Ddock%E6%A0%8F%E5%B1%95%E7%A4%BA%E5%92%8C%E4%BA%A4%E4%BA%92%E6%96%B9%E6%B3%95%E6%8A%80%E6%9C%AF%E4%BA%A4%E5%BA%95%E4%B9%A6_assets/2.png",l="/Blog/%E4%B8%80%E7%A7%8Ddock%E6%A0%8F%E5%B1%95%E7%A4%BA%E5%92%8C%E4%BA%A4%E4%BA%92%E6%96%B9%E6%B3%95%E6%8A%80%E6%9C%AF%E4%BA%A4%E5%BA%95%E4%B9%A6_assets/3.png",E=JSON.parse('{"title":"一种dock栏展示和交互方法技术交底书","description":"","frontmatter":{"Author":"禄烨"},"headers":[],"relativePath":"技术文档/专利交底书/一种dock栏展示和交互方法技术交底书.md","filePath":"技术文档/专利交底书/一种dock栏展示和交互方法技术交底书.md","lastUpdated":1736789675000}'),n={name:"技术文档/专利交底书/一种dock栏展示和交互方法技术交底书.md"};function i(s,t,h,k,p,_){return r(),a("div",null,t[0]||(t[0]=[o('<h1 id="一种dock栏展示和交互方法技术交底书" tabindex="-1">一种dock栏展示和交互方法技术交底书 <a class="header-anchor" href="#一种dock栏展示和交互方法技术交底书" aria-label="Permalink to &quot;一种dock栏展示和交互方法技术交底书&quot;">​</a></h1><h2 id="_0、缩略语和关键术语定义" tabindex="-1">0、缩略语和关键术语定义 <a class="header-anchor" href="#_0、缩略语和关键术语定义" aria-label="Permalink to &quot;0、缩略语和关键术语定义&quot;">​</a></h2><table><thead><tr><th style="text-align:center;"><strong>术语</strong></th><th style="text-align:left;"><strong>定义</strong></th></tr></thead><tbody><tr><td style="text-align:center;">dock栏</td><td style="text-align:left;">在计算机操作系统上，dock栏也被叫做任务栏。任务栏是桌面上一个用于启动和管理程序的工具，也用于快捷切换程序界面。</td></tr><tr><td style="text-align:center;">dbus</td><td style="text-align:left;">D-Bus是针对桌面环境优化的IPC（interprocess communication ）机制，用于进程间的通信或进程与内核的通信。最基本的D-Bus协议是一对一的通信协议。但在很多情况下，通信的一方是消息总线。消息总线是一个特殊的应用，它同时与多个应用通信，并在应用之间传递消息。</td></tr></tbody></table><h2 id="_1、相关技术背景-背景技术-与本发明最相近似的现有实现方案-现有技术" tabindex="-1">1、相关技术背景（背景技术），与本发明最相近似的现有实现方案（现有技术） <a class="header-anchor" href="#_1、相关技术背景-背景技术-与本发明最相近似的现有实现方案-现有技术" aria-label="Permalink to &quot;1、相关技术背景（背景技术），与本发明最相近似的现有实现方案（现有技术）&quot;">​</a></h2><p>​ 目前市场上的桌面操作系统，dock 栏为默认常驻屏幕底部，展示方式通常为“一直显示”、“一直隐藏”、“智能隐藏”。在 dock 栏一直显示的情况下，应用界面底部不能铺满屏幕，在一些小屏幕的显示器或笔记本上，应用可操作区域减少。即使将 dock 栏展示在操作系统界面的左侧、操作系统界面的右侧或者操作系统界面的顶部，在操作系统使用过程中，应用界面底部不能铺满屏幕，在一些小屏幕的显示器或笔记本上，应用可操作区域减少的问题也存在。</p><p>​ 而智能隐藏或者一直隐藏时，用户体验感受较差，每次操作应用底部区域时容易误唤醒 dock 栏，造成误操作。这对正常且高效使用操作系统界面，存在使用不便的影响。</p><p>​ 如果将 dock 栏进行收缩后半透明悬浮展示，既 不会影响当前使用区域，也不会被误唤醒。只有当使用者需要唤醒时，可以手动进行点击唤醒 dock 栏。</p><h3 id="_1-1、与本发明相关的现有技术一" tabindex="-1">1.1、与本发明相关的现有技术一 <a class="header-anchor" href="#_1-1、与本发明相关的现有技术一" aria-label="Permalink to &quot;1.1、与本发明相关的现有技术一&quot;">​</a></h3><h4 id="_1-1-1、现有技术一的技术方案" tabindex="-1">1.1.1、现有技术一的技术方案 <a class="header-anchor" href="#_1-1-1、现有技术一的技术方案" aria-label="Permalink to &quot;1.1.1、现有技术一的技术方案&quot;">​</a></h4><p>在 dock 栏右键菜单中可以进行状态设置，可以设置为“智能隐藏”或者“一直隐藏”。</p><h4 id="_1-1-2、现有技术一的缺点" tabindex="-1">1.1.2、现有技术一的缺点 <a class="header-anchor" href="#_1-1-2、现有技术一的缺点" aria-label="Permalink to &quot;1.1.2、现有技术一的缺点&quot;">​</a></h4><p>（1）在“智能隐藏”状态时，打开应用软件，如：浏览器，鼠标滑动到网页底部区域时会唤醒 dock 栏，从而不能直接响应点击到想要点击的位置；</p><p>（2）在“一直隐藏”状态时，会出现“智能隐藏”状态时面临的同样的问题，给使用者带来不便。</p><h3 id="_1-2、与本发明相关的现有技术二" tabindex="-1">1.2、与本发明相关的现有技术二 <a class="header-anchor" href="#_1-2、与本发明相关的现有技术二" aria-label="Permalink to &quot;1.2、与本发明相关的现有技术二&quot;">​</a></h3><h4 id="_1-2-1、现有技术二的技术方案" tabindex="-1">1.2.1、现有技术二的技术方案 <a class="header-anchor" href="#_1-2-1、现有技术二的技术方案" aria-label="Permalink to &quot;1.2.1、现有技术二的技术方案&quot;">​</a></h4><p>在 dock 栏右键菜单中可以进行显示位置设置，可以设置为“上”、“下”、“左”、“右”。</p><h4 id="_1-2-2、现有技术二的缺点" tabindex="-1">1.2.2、现有技术二的缺点 <a class="header-anchor" href="#_1-2-2、现有技术二的缺点" aria-label="Permalink to &quot;1.2.2、现有技术二的缺点&quot;">​</a></h4><p>改变 dock 栏展示位置，本质上与 dock 栏常驻在底部无明显差别，打开后的应用软件界面，如：浏览器、工作文档（wps）。界面显示都会被 dock 栏占用一部分，在小屏幕设备上对使用者是一种资源的浪费和不好的体验感受。</p><h2 id="_2、本发明技术方案的详细阐述" tabindex="-1">2、本发明技术方案的详细阐述 <a class="header-anchor" href="#_2、本发明技术方案的详细阐述" aria-label="Permalink to &quot;2、本发明技术方案的详细阐述&quot;">​</a></h2><h3 id="_2-1、本发明所要解决的技术问题" tabindex="-1">2.1、本发明所要解决的技术问题 <a class="header-anchor" href="#_2-1、本发明所要解决的技术问题" aria-label="Permalink to &quot;2.1、本发明所要解决的技术问题&quot;">​</a></h3><p>本发明实现dock栏收起悬浮展示的方式。为用户提供更大的界面使用感受，并能对小屏幕物理属性设备，达到更好的资源利用需求，而提供的解决方案。</p><h3 id="_2-2、本发明提供的完整技术方案" tabindex="-1">2.2、本发明提供的完整技术方案 <a class="header-anchor" href="#_2-2、本发明提供的完整技术方案" aria-label="Permalink to &quot;2.2、本发明提供的完整技术方案&quot;">​</a></h3><p><img src="'+e+'" alt=""></p><p>图1 专利流程图</p><p>dock 栏向右侧收起悬浮方案发明详细如下：</p><p>（1）在 dock 栏状态设置中增加显示方式“缩略展示”；</p><p>（2）设置为缩略展示后，dock 栏出现缩略展示的开关 icon；</p><p>（3）用户点击缩略展示开关后，dock 栏向右侧收起，在屏幕右下角显示半透明 dock 栏 icon 图片，悬浮在最顶层；</p><p>（4）当用户点击 dock 栏 icon 时，任务向左展开，展示为正常 dock 栏。</p><p><img src="'+c+'" alt=""></p><p>图2 实际效果展示</p><p>（5）收起后的悬浮 dock 栏依旧能保持正常形态的常用功能：</p><ul><li><p>当 dock 栏展示为缩略悬浮图标后，在任意程序界面，都处于最顶层页面。可以随时手动点击唤出正常展示形态。在处于 dock 悬浮形态时，默认进行系统时间展示。</p></li><li><p>当 dock 后端 dbus 服务监听到应用通知信息，将该应用以 dock 插件的方式加载到 dock，并通知 dock Mainwindow 进行数据刷新，悬浮 dock 将应用提醒信息图标居中展示在悬浮 dock 中间，并进行闪烁提示。用户通过鼠标点击闪烁图标时，dock dbus 将信号发送到窗管。窗管接收到请求后，进行应用程序界面绘制和打开。dock 栏保持悬浮状态，dock 服务卸载该应用的插件，恢复为展示系统时间。如果点击闪烁图标以外的悬浮 dock 位置时，唤出 dock 栏正常展示形态。</p></li></ul><p><img src="'+l+'" alt=""></p><p>图3 应用消息提醒</p><ul><li>当dock后端dbus服务监听到多个应用通知信息，将各个应用以dock插件的方式加载到dock，并通知dock Mainwindow进行数据刷新，悬浮dock图标交替闪烁应用提醒图标。用户点击悬浮dock任意位置时，恢复正常形态下dock栏显示以及功能。再次点击dock栏以外的位置，dock栏重新向右侧收起展示为悬浮dock栏状态。</li></ul><h2 id="_2-3、本发明技术方案带来的有益效果" tabindex="-1">2.3、本发明技术方案带来的有益效果 <a class="header-anchor" href="#_2-3、本发明技术方案带来的有益效果" aria-label="Permalink to &quot;2.3、本发明技术方案带来的有益效果&quot;">​</a></h2><p>本发明旨在为特殊场景和小屏幕属性设备提供系统显示界面，为用户提高资源利用率。并在长久不便的 dock 栏展示形态中做出创新，为用户提供不一样的使用体验。</p><h2 id="_2-4、针对上述技术方案-是否还有替代方案同样能完成发明目的" tabindex="-1">2.4、针对上述技术方案，是否还有替代方案同样能完成发明目的 <a class="header-anchor" href="#_2-4、针对上述技术方案-是否还有替代方案同样能完成发明目的" aria-label="Permalink to &quot;2.4、针对上述技术方案，是否还有替代方案同样能完成发明目的&quot;">​</a></h2><p>暂无</p><h1 id="_3、本发明的技术关键点和欲保护点是什么" tabindex="-1">3、本发明的技术关键点和欲保护点是什么 <a class="header-anchor" href="#_3、本发明的技术关键点和欲保护点是什么" aria-label="Permalink to &quot;3、本发明的技术关键点和欲保护点是什么&quot;">​</a></h1><p>本发明的技术点在于 dock 栏半透明悬浮在操作系统界面的展示形态，以及 dock 栏新的展示形态如何进行人机交互的方法，且不影响固有 dock 栏的功能特性。</p><p>本发明的欲保护点在于 dock 栏半透明悬浮展示形态、在悬浮 dock 栏上进行操作系统固有功能或应用消息的提醒展示，以及悬浮 dock 栏的交互方法。</p><h1 id="_4、附件" tabindex="-1">4、附件： <a class="header-anchor" href="#_4、附件" aria-label="Permalink to &quot;4、附件：&quot;">​</a></h1><p><em><strong>*附件一*</strong></em></p><p><em><strong>*操作系统技术*</strong></em><em><strong>*领域划分简介*</strong></em></p><table><thead><tr><th><strong>一级标签</strong></th><th><strong>二级标签</strong></th><th><strong>解释、涉及技术</strong></th></tr></thead><tbody><tr><td>内核</td><td>进程管理</td><td>进程线程管理，进程控制、进程同步、进程通信、死锁处理、处理机调度等</td></tr><tr><td>内核</td><td>存储管理</td><td>内存分配、地址映射、内存保护与共享、虚拟内存等</td></tr><tr><td>内核</td><td>文件管理</td><td>文件存储空间的管理、目录管理、文件读写管理和保护等</td></tr><tr><td>内核</td><td>设备管理</td><td>I/O 请求、缓冲管理、设备分配、设备处理、虛拟设备、驱动等</td></tr><tr><td>内核</td><td>虚拟化</td><td>容器、namesapce、cgroup、kvm</td></tr><tr><td>内核</td><td>安全</td><td>LSM、审计、静态度量、模块签名、密钥环、bpf、加密算法</td></tr><tr><td>系统</td><td>驱动开发</td><td>USB驱动，用户态驱动、硬件抽象层</td></tr><tr><td>系统</td><td>设备管理</td><td>蓝牙、磁盘、显示、输入设备、触摸屏幕、扫描、打印</td></tr><tr><td>系统</td><td>包管理</td><td>升级、补丁、安装、卸载</td></tr><tr><td>系统</td><td>安全</td><td>TPM、国密、防火墙、日志审计、身份认证、应用签名</td></tr><tr><td>系统</td><td>可靠性</td><td>系统修复、异常处理、维护、备份</td></tr><tr><td>系统</td><td>开发工具</td><td>编译、调试、IDE</td></tr><tr><td>系统</td><td>测试</td><td>测试（压力测试等）、自动化测试、UI测试</td></tr><tr><td>系统</td><td>通信</td><td>IPC、DBus、网络、信号、代理</td></tr><tr><td>系统</td><td>OEM</td><td>授权、系统构建、量产、许可证、安装</td></tr><tr><td>桌面</td><td>UI</td><td>窗口、控件绘制、输入框架、国际化、辅助功能、字体、高分辨率</td></tr><tr><td>桌面</td><td>图形栈</td><td>图片、音频、视频、Xorg、Wayland、窗口管理器、OpenGL、Vulkan</td></tr><tr><td>桌面</td><td>桌面环境</td><td>桌面、启动器、dock栏、菜单栏、托盘、标准目录、XDG</td></tr><tr><td>桌面</td><td>网络服务</td><td>远程桌面、文件共享、屏幕共享、RDP、VNC</td></tr><tr><td>桌面</td><td>应用软件</td><td>应用管理、兼容性、自启动</td></tr></tbody></table>',47)]))}const b=d(n,[["render",i]]);export{E as __pageData,b as default};
