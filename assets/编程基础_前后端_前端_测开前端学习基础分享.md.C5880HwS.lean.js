import{_ as a,c as n,R as p,o as e}from"./chunks/framework.CuFLN7ac.js";const u=JSON.parse('{"title":"测开前端学习基础分享","description":"","frontmatter":{"Author":"路斐"},"headers":[],"relativePath":"编程基础/前后端/前端/测开前端学习基础分享.md","filePath":"编程基础/前后端/前端/测开前端学习基础分享.md","lastUpdated":1736790004000}'),t={name:"编程基础/前后端/前端/测开前端学习基础分享.md"};function l(i,s,o,c,r,h){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="测开前端学习基础分享" tabindex="-1">测开前端学习基础分享 <a class="header-anchor" href="#测开前端学习基础分享" aria-label="Permalink to &quot;测开前端学习基础分享&quot;">​</a></h1><h2 id="基础部分" tabindex="-1">基础部分 <a class="header-anchor" href="#基础部分" aria-label="Permalink to &quot;基础部分&quot;">​</a></h2><p><a href="https://tdoc.uniontech.com/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E5%89%8D%E5%90%8E%E7%AB%AF/%E5%89%8D%E7%AB%AF/html%E5%9F%BA%E7%A1%80.html" target="_blank" rel="noreferrer">html</a>，<a href="https://tdoc.uniontech.com/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E5%89%8D%E5%90%8E%E7%AB%AF/%E5%89%8D%E7%AB%AF/CSS%20%E5%9F%BA%E7%A1%80.html" target="_blank" rel="noreferrer">css</a>，<a href="https://tdoc.uniontech.com/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E5%89%8D%E5%90%8E%E7%AB%AF/%E5%89%8D%E7%AB%AF/JS%E5%9F%BA%E7%A1%80.html" target="_blank" rel="noreferrer">javascript</a></p><h2 id="ts-与-js" tabindex="-1">TS 与 JS <a class="header-anchor" href="#ts-与-js" aria-label="Permalink to &quot;TS 与 JS&quot;">​</a></h2><p>TS是JS的一个超集，支持静态类型检查。</p><h2 id="调试工具-按f12打开浏览器的调试工具" tabindex="-1">调试工具（按F12打开浏览器的调试工具） <a class="header-anchor" href="#调试工具-按f12打开浏览器的调试工具" aria-label="Permalink to &quot;调试工具（按F12打开浏览器的调试工具）&quot;">​</a></h2><h3 id="元素" tabindex="-1">元素 <a class="header-anchor" href="#元素" aria-label="Permalink to &quot;元素&quot;">​</a></h3><p>展示页面元素（html） 页面样式（css）</p><h3 id="源代码" tabindex="-1">源代码 <a class="header-anchor" href="#源代码" aria-label="Permalink to &quot;源代码&quot;">​</a></h3><p>展示页面使用的动态脚本（js）</p><h3 id="控制台" tabindex="-1">控制台 <a class="header-anchor" href="#控制台" aria-label="Permalink to &quot;控制台&quot;">​</a></h3><p>展示脚本执行的日志 执行调试脚本</p><h3 id="网络" tabindex="-1">网络 <a class="header-anchor" href="#网络" aria-label="Permalink to &quot;网络&quot;">​</a></h3><p>展示页面需要的网络调用（接口信息、资源获取信息，包括响应信息和标头）</p><h3 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用&quot;">​</a></h3><h4 id="存储" tabindex="-1">存储 <a class="header-anchor" href="#存储" aria-label="Permalink to &quot;存储&quot;">​</a></h4><p>展示本地存储和会话存储、cookie、缓存等</p><h2 id="学习vue" tabindex="-1">学习VUE <a class="header-anchor" href="#学习vue" aria-label="Permalink to &quot;学习VUE&quot;">​</a></h2><p><a href="https://tdoc.uniontech.com/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E5%89%8D%E5%90%8E%E7%AB%AF/%E5%89%8D%E7%AB%AF/Vue%E5%9F%BA%E7%A1%80.html" target="_blank" rel="noreferrer">VUE基础</a></p><h3 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h3><h4 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h4><p>npm create vue@latest</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm create vue@latest</span></span>
<span class="line"><span>Need to install the following packages:</span></span>
<span class="line"><span>create-vue@3.12.1</span></span>
<span class="line"><span>Ok to proceed? (y) y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.js - The Progressive JavaScript Framework</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✔ 请输入项目名称： … test_frontend</span></span>
<span class="line"><span>✔ 是否使用 TypeScript 语法？ … 否 / 是</span></span>
<span class="line"><span>✔ 是否启用 JSX 支持？ … 否 / 是</span></span>
<span class="line"><span>✔ 是否引入 Vue Router 进行单页面应用开发？ … 否 / 是</span></span>
<span class="line"><span>✔ 是否引入 Pinia 用于状态管理？ … 否 / 是</span></span>
<span class="line"><span>✔ 是否引入 Vitest 用于单元测试？ … 否 / 是</span></span>
<span class="line"><span>✔ 是否要引入一款端到端（End to End）测试工具？ › 不需要</span></span>
<span class="line"><span>✔ 是否引入 ESLint 用于代码质量检测？ › 否</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正在初始化项目 /home/lufei/Develop/sample/test_frontend...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>项目初始化完成，可执行以下命令：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  cd test_frontend</span></span>
<span class="line"><span>  npm install</span></span>
<span class="line"><span>  npm run dev</span></span></code></pre></div><h4 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-label="Permalink to &quot;启动项目&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># ...  按新建项目时提示的命令启动即可</span></span>
<span class="line"><span></span></span>
<span class="line"><span>➜  Local:   http://localhost:5173/</span></span>
<span class="line"><span>➜  Network: use --host to expose</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ...</span></span></code></pre></div><h4 id="访问前端" tabindex="-1">访问前端 <a class="header-anchor" href="#访问前端" aria-label="Permalink to &quot;访问前端&quot;">​</a></h4><p>通过启动项目提示的访问链接，即可打开项目首页</p><h4 id="编译和部署" tabindex="-1">编译和部署 <a class="header-anchor" href="#编译和部署" aria-label="Permalink to &quot;编译和部署&quot;">​</a></h4><p>vue代码需要编译成 js，css，html 才能被浏览器解析或执行</p><p><code>npm run dev</code> 可以访问是因为 npm 对 vue 代码进行了动态实时转化，您也因此可以在开发中动态修改代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm run build</span></span>
<span class="line"><span>## 编译命令会生成一个\`dist\`目录，您可以通过web服务器，将dist目录服务给您的用户</span></span></code></pre></div><h4 id="项目目录说明" tabindex="-1">项目目录说明 <a class="header-anchor" href="#项目目录说明" aria-label="Permalink to &quot;项目目录说明&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── dist                                          # 编译生成的静态代码和js文件</span></span>
<span class="line"><span>│   ├── assets</span></span>
<span class="line"><span>│   ├── favicon.ico</span></span>
<span class="line"><span>│   └── index.html</span></span>
<span class="line"><span>├── index.html                            # 项目首页，用户的访问将从这里开始</span></span>
<span class="line"><span>├── jsconfig.json                        # 代码配置文件，保存js相关配置，例如导入路径</span></span>
<span class="line"><span>├── node_modules                   # npm install 安装的依赖组件或代码</span></span>
<span class="line"><span>│   ├── ...</span></span>
<span class="line"><span>│   ├── vite-plugin-vue-inspector</span></span>
<span class="line"><span>│   ├── @vue</span></span>
<span class="line"><span>│   ├── vue</span></span>
<span class="line"><span>│   └── ...                                        # 实际还会有 vue 和 vite 等其他一些依赖组件</span></span>
<span class="line"><span>├── package.json                        # 记录包的元信息</span></span>
<span class="line"><span>├── package-lock.json    # 记录包的详细信息，锁定包版本</span></span>
<span class="line"><span>├── public    # 公共资源目录，可以通过 /public URL 直接访问</span></span>
<span class="line"><span>│   └── favicon.ico</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── src     # vue 源代码目录</span></span>
<span class="line"><span>│   ├── App.vue</span></span>
<span class="line"><span>│   ├── assets</span></span>
<span class="line"><span>│   ├── components</span></span>
<span class="line"><span>│   └── main.js</span></span>
<span class="line"><span>└── vite.config.js     # vite 配置文件，您可以在这里配置开发服务等</span></span></code></pre></div><blockquote><p>vite 是一个 vue 的打包工具，它提供了 vue 的开发服务（npm run dev）和包的编译功能（npm run build）</p></blockquote><h3 id="开始-vue-代码" tabindex="-1">开始 VUE 代码 <a class="header-anchor" href="#开始-vue-代码" aria-label="Permalink to &quot;开始 VUE 代码&quot;">​</a></h3><h4 id="从main-js开始" tabindex="-1">从<code>main.js</code>开始 <a class="header-anchor" href="#从main-js开始" aria-label="Permalink to &quot;从\`main.js\`开始&quot;">​</a></h4><p>使用 <code>npm create vue@latest</code> 生成的项目，会从 <code>main.js</code> 开始执行 vue 代码。</p><p>新建、挂载应用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span>createApp(App).mount(&#39;#app&#39;)</span></span></code></pre></div><p>模块导入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>## 你需要全局处理的内容，可以放在这里</span></span>
<span class="line"><span>## 导入样式</span></span>
<span class="line"><span>import &#39;./assets/main.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 导入组件</span></span>
<span class="line"><span>import ElementPlus from &quot;element-plus&quot;;</span></span>
<span class="line"><span>import TestComponent from &quot;./components/TestComponent.vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 注册组件</span></span>
<span class="line"><span>app.use(ElementPlus)</span></span>
<span class="line"><span>app.component(&quot;testComponent&quot;, TestComponent)</span></span></code></pre></div><h4 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h4><p>组件，在用户端，可以理解为一个页面，一个页面可以由1个根组件和多个子组件组成。</p><h5 id="组件代码" tabindex="-1">组件代码 <a class="header-anchor" href="#组件代码" aria-label="Permalink to &quot;组件代码&quot;">​</a></h5><p>组件代码主要包括3个部分：模板（template）、脚本（script，和模板至少有1个）、样式（style，可选）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>// 脚本内容，使用 js/ts 语法，除了 js 逻辑，可以实现 vue 的绑定、响应、生命周期等功能</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>// 模板内容， 使用 html 语法，可以使用 vue 指令，实现条件、循环等渲染功能</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>// 样式，使用 css 语法，可以使用 vue 组件中的变量值</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h5 id="使用组件" tabindex="-1">使用组件 <a class="header-anchor" href="#使用组件" aria-label="Permalink to &quot;使用组件&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>// 导入组件</span></span>
<span class="line"><span>import TestComponent from &quot;./components/TestComponent.vue&quot;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>     &lt;!-- 使用组件 --&gt;</span></span>
<span class="line"><span>    &lt;TestComponent /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><h5 id="组件引用" tabindex="-1">组件引用 <a class="header-anchor" href="#组件引用" aria-label="Permalink to &quot;组件引用&quot;">​</a></h5><p>可以在父组件中，引用子组件，使用子组件暴露的对象(变量、方法)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import {ref} from &quot;vue&quot;</span></span>
<span class="line"><span>import TestComponent from &quot;./components/TestComponent.vue&quot;</span></span>
<span class="line"><span>const testRef = ref(null)</span></span>
<span class="line"><span>// 使用 testRef 即可引用组件</span></span>
<span class="line"><span>console.log(&quot;sayHi in TestComponent:&quot;, testRef.sayHi())</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;TestComponent ref=&quot;testRef&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><h5 id="组件-props" tabindex="-1">组件 Props <a class="header-anchor" href="#组件-props" aria-label="Permalink to &quot;组件 Props&quot;">​</a></h5><p>Props 可以理解为组件的属性，可以在使用组件的时候，传入 props</p><p>子组件 components/TestComponent.vue 内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const props = defineProps([&#39;name&#39;])</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>      &lt;div&gt;{{ name }}&lt;div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><p>在父组件 App.vue 中使用组件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>     &lt;TestComponent name=&quot;test1&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import TestComponent from &quot;./components/TestComponent.vue&quot;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><blockquote><p>属性透传：如果自组件未定义 props，但是父组件传递了属性，子组件会将属性传递给自身的子节点。</p></blockquote><h5 id="组件-slots" tabindex="-1">组件 Slots <a class="header-anchor" href="#组件-slots" aria-label="Permalink to &quot;组件 Slots&quot;">​</a></h5><p>slots 为组件插槽，用来为组件传递模板内容</p><p>子组件TestComponent</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>&lt;slot&gt;</span></span>
<span class="line"><span>&lt;!-- 这里可以定义插槽的默认内容 --&gt;</span></span>
<span class="line"><span>&lt;/slot&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><p>父组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;TestComponent&gt;</span></span>
<span class="line"><span>&lt;!-- 父组件传递的插槽内容 --&gt;</span></span>
<span class="line"><span>&lt;/TestComponent&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import TestComponent from &quot;./components/TestComponent.vue&quot;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><blockquote><p>具名插槽：当需要多个插槽时，可以使用<code>&lt;slot&gt;</code>的<code>name</code>属性指定插槽，而在父组件中，使用 <code>v-slot:&lt;name&gt;</code> 为指定的插槽传递内容</p></blockquote><h5 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h5><p>子组件可以注册事件，并被父组件捕获并响应。</p><p>子组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const emit = defineEmits([&#39;refresh&#39;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function buttonClick() {</span></span>
<span class="line"><span>   // 触发事件</span></span>
<span class="line"><span>  emit(&#39;refresh&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>父组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import TestComponent from &quot;./components/TestComponent.vue&quot;</span></span>
<span class="line"><span>// 父组件的事件处理函数</span></span>
<span class="line"><span>function onChileRefresh() {</span></span>
<span class="line"><span>     console.log(&quot;child refreshed&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;TestComponent @refresh=&quot;onChileRefresh&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div>`,71)]))}const m=a(t,[["render",l]]);export{u as __pageData,m as default};
