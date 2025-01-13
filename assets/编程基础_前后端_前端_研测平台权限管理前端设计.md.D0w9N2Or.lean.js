import{_ as s,c as n,R as e,o as p}from"./chunks/framework.CuFLN7ac.js";const h=JSON.parse('{"title":"平台权限管理前端设计","description":"","frontmatter":{"Author":"路斐"},"headers":[],"relativePath":"编程基础/前后端/前端/研测平台权限管理前端设计.md","filePath":"编程基础/前后端/前端/研测平台权限管理前端设计.md","lastUpdated":1736789790000}'),t={name:"编程基础/前后端/前端/研测平台权限管理前端设计.md"};function o(l,a,i,r,c,u){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="平台权限管理前端设计" tabindex="-1">平台权限管理前端设计 <a class="header-anchor" href="#平台权限管理前端设计" aria-label="Permalink to &quot;平台权限管理前端设计&quot;">​</a></h1><h2 id="用户登录流程" tabindex="-1">用户登录流程 <a class="header-anchor" href="#用户登录流程" aria-label="Permalink to &quot;用户登录流程&quot;">​</a></h2><h3 id="用户认证" tabindex="-1">用户认证 <a class="header-anchor" href="#用户认证" aria-label="Permalink to &quot;用户认证&quot;">​</a></h3><p>平台使用 <a href="https://jwt.io/" target="_blank" rel="noreferrer">JWT</a>(JSON Web Token) 进行用户认证，客户端通过登录接口获取 JWT 并保存，在访问接口数据时，需要携带 JWT，将 JWT 放在请求的 <code>Authorization</code> 头部。例如：</p><p>登录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import axios from &#39;axios&#39;;</span></span>
<span class="line"><span>var url = &#39;http://10.7.55.191:8000/api/token/&#39;;</span></span>
<span class="line"><span>var formData = new FormData();</span></span>
<span class="line"><span>formData.append(&#39;username&#39;, &#39;admin&#39;);</span></span>
<span class="line"><span>formData.append(&#39;password&#39;, &#39;123456&#39;);</span></span>
<span class="line"><span>axios.post(url, formData).then(res=&gt;{</span></span>
<span class="line"><span>    setStorage(&quot;token&quot;, res.data.data.access);</span></span>
<span class="line"><span>    setStorage(&quot;refresh&quot;, res.data.data.refresh);</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>访问数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import axios from &quot;axios&quot;;</span></span>
<span class="line"><span>var url = &#39;http://10.7.55.191:8000/api/version/&#39;;</span></span>
<span class="line"><span>var token = getStorage(&quot;token&quot;);</span></span>
<span class="line"><span>var headers = {</span></span>
<span class="line"><span>        Authorization: &quot;JWT &quot; + token,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>axios.get(url, {headers: headers})</span></span></code></pre></div><blockquote><p>上面用到的两个函数 <code>setStorage</code> 和 <code>getStorage</code>， 分别是保存和读取存储中的数据，具体会根据前端环境去实现。例如当前我们将用户数据保存在浏览器的 <code>localStorage</code> 中:</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export function setStorage(key, value) { window.localStorage.setItem(key, JSON.stringify(value)) }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function getStorage(key) { return JSON.parse(window.localStorage.getItem(key)) }</span></span></code></pre></div><blockquote><p>JWT 的详细设计可以参考 <a href="https://jwt.io/introduction/" target="_blank" rel="noreferrer">官方文档</a>。</p></blockquote><blockquote><p>当 access token 过期时，客户端可以通过 refresh token 刷新 access token。</p></blockquote><blockquote><p><a href="http://10.7.55.191:8000/api/" target="_blank" rel="noreferrer">http://10.7.55.191:8000/api/</a> 使我们的开发 API 地址</p></blockquote><h3 id="用户资源" tabindex="-1">用户资源 <a class="header-anchor" href="#用户资源" aria-label="Permalink to &quot;用户资源&quot;">​</a></h3><p>登录后，客户端会开始获取用户资源，包括：</p><ol><li>菜单列表及菜单中的按钮权限</li><li>用户角色、用户部门</li></ol><p>研测平台的策略是仅显示用户有权限访问的菜单和对应的按钮。</p><h2 id="研测平台的权限设计" tabindex="-1">研测平台的权限设计 <a class="header-anchor" href="#研测平台的权限设计" aria-label="Permalink to &quot;研测平台的权限设计&quot;">​</a></h2><p>研测平台前端的权限主体是角色，例如【管理员】、【测试】，客体是菜单和按钮，例如【新建】、【删除】。</p><p>对应的后端权限的客体是 接口 + 方法，前端的每个<strong>按钮</strong>与之对应。这种对应关系由管理员用户维护，即【系统管理】-&gt;【菜单管理】中的【按钮配置】功能。</p><p>一般来说前端菜单对应后端不同的接口，按钮对应接口的不同操作（GET,PUT,POST,PATCH,DELETE），但研测平台的不同的菜单可能对应后端同一个接口，不同的按钮也可能对应不同的接口。例如：</p><ul><li>【版本测试】和【系统测试】其实是同一个后端接口实现的，但是有不同的前端菜单；</li><li>同一个任务页面【启动】按钮和【新建】按钮对应的不同的后端接口。</li></ul><p>因此前端的权限还需要按照<strong>菜单</strong>区分，例如菜单A和菜单B都使用接口A，但是角色A和角色B需要对菜单A和菜单B有不同的权限，可以看到【按钮配置】是在对不同的菜单进行配置的。</p><p>研测平台前端通过权限确认是否显示某个菜单或按钮。例如下面是控制按钮显示的函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function isShowBtn(url, moduleName, btnName) {</span></span>
<span class="line"><span>  /* </span></span>
<span class="line"><span>    url: 前端路由</span></span>
<span class="line"><span>    moduleName: 菜单名称</span></span>
<span class="line"><span>    btnName: 按钮，即 http://10.7.13.132:8081/#/buttonManage 下的按钮的 Key</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>  if (getStorage(&quot;is_superuser&quot;) == &quot;true&quot;) {</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  let btnArr = getStorage(&quot;menuList&quot;) ? JSON.parse(getStorage(&quot;menuList&quot;)) : [];</span></span>
<span class="line"><span>  let isshow = false;</span></span>
<span class="line"><span>  for (var i = 0; i &lt; btnArr.length; i++) {</span></span>
<span class="line"><span>    let item = btnArr[i];</span></span>
<span class="line"><span>    if (</span></span>
<span class="line"><span>      item.url == url &amp;&amp;</span></span>
<span class="line"><span>      item.moduleName == moduleName &amp;&amp;</span></span>
<span class="line"><span>      item.menuPermission &amp;&amp;</span></span>
<span class="line"><span>      item.menuPermission.includes(btnName)</span></span>
<span class="line"><span>    ) {</span></span>
<span class="line"><span>      isshow = true;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return isshow;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>权限主体和客体的关联即【权限配置】由管理员在【系统管理】-&gt; 【权限管理】中维护。</p><h2 id="研测平台的伪权限" tabindex="-1">研测平台的伪权限 <a class="header-anchor" href="#研测平台的伪权限" aria-label="Permalink to &quot;研测平台的伪权限&quot;">​</a></h2><p>伪权限是前端自己实现的权限，例如：用户作为权限主体（即每个用户有专属的权限）。</p><p>在机器的占用和释放中，需要对单个用户做权限控制。这里则由机器的用户名属性来控制，平台会判断当前用户是否该机器的占用用户来实现伪权限。下面是一个控制伪权限的函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export function hasPerm(pm) {</span></span>
<span class="line"><span>    return getStorage(&quot;userId&quot;) === pm.user || getStorage(&quot;is_superuser&quot;) == &#39;true&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p><code>getStorage</code> 是获取存储数据的函数。我们在登录的时候，通过 <code>setStorage</code> 将 <code>uiserId</code> 保存在浏览器中。</p></blockquote>`,31)]))}const g=s(t,[["render",o]]);export{h as __pageData,g as default};
