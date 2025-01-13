import{_ as a,c as i,R as n,o as l}from"./chunks/framework.CuFLN7ac.js";const o=JSON.parse('{"title":"单机服务部署","description":"","frontmatter":{"Author":"禄烨"},"headers":[],"relativePath":"分享有趣/经验总结/UDCP 自动化过程中记录.md","filePath":"分享有趣/经验总结/UDCP 自动化过程中记录.md","lastUpdated":1736789790000}'),h={name:"分享有趣/经验总结/UDCP 自动化过程中记录.md"};function e(t,s,p,k,r,d){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="单机服务部署" tabindex="-1">单机服务部署 <a class="header-anchor" href="#单机服务部署" aria-label="Permalink to &quot;单机服务部署&quot;">​</a></h1><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><p>1、后台部署组件机文档说明：<a href="https://filewh.uniontech.com/library/5c9b7174-752b-42f2-b132-5f37880f3543/%E6%8F%90%E6%B5%8B%E5%BA%93/2.1" target="_blank" rel="noreferrer">https://filewh.uniontech.com/library/5c9b7174-752b-42f2-b132-5f37880f3543/提测库/2.1</a></p><p>2、需要先准备一台部署机、一台服务机，研测平台创建服务器后，服务机，新增磁盘挂载为 <code>/data</code> 分区（如果空间足够，可不用新增）</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 新建/data目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 新磁盘进行新建分区并创建文件系统</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fdisk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/vdb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkfs.ext4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/vdb1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 挂载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/vdb1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取uuid</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blkid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/vdb1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加 fstab 挂载信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UUID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">your-uuid-here</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ext4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> defaults</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重新挂载，mount -a 是一个用于挂载所有在 /etc/fstab 文件中定义的文件系统的命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reboot</span></span></code></pre></div><p>3、服务机设置uos和root用户密码，以及将uos用户添加到sudo组</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 登录root用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">passwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">passwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uos</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> usermod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -G</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wheel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uos</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reboot</span></span></code></pre></div><p>4、部署命令（均为正常部署命令，步骤1文档中摘取，如果出现异常，需在文档中查看解决办法）</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./init_ansible_env.sh</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./init_ansible_env.sh doctor</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash plan k1s</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cp -f examples/env.k1s.example.yaml env.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sed -i &#39;s/host1:.*/host1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">server_ip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/&#39; env.yaml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sed -i &#39;/^server_username:/c server_username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\&quot;{server_user}\\&quot;&#39; env.yaml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sed -i &#39;/^server_password:/c server_password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\&quot;{server_password}\\&quot;&#39; env.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash install.bash prepare.yaml -e @env.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash init-environment.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sed -i &#39;s/min_disk_gb:.*/min_disk_gb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">100/&#39; sub_tasks/check-pre-install.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash init-environment.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash remove-softwares.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash init-docker.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash init-registry.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash install-k8s.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash init-k8s-master.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash join-k8s-master.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash join-k8s-node.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash init-third-party-services.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash init-licensekit.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash init-database.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash init-redis-cluster.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash init-clickhouse-cluster.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash gen-certs.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash init-udcp.yaml -e action=init</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sudo bash install.bash update-k8s-certs.yaml</span></span></code></pre></div><p>5、部署完成后，首次进入平台配置管理员并激活，激活需在明道云申请激活序列号</p><h1 id="平台设置" tabindex="-1">平台设置 <a class="header-anchor" href="#平台设置" aria-label="Permalink to &quot;平台设置&quot;">​</a></h1><h2 id="登录" tabindex="-1">登录 <a class="header-anchor" href="#登录" aria-label="Permalink to &quot;登录&quot;">​</a></h2><p>1、入域账号密码强度设置：平台 -》配置 -》人员设置 -》密码安全设置 -》密码长度范围</p><p>2、平台保持登录状态：平台 -》配置 -》系统设置 -》基础设置 -》登录安全 -》页面最长静止时间</p><h1 id="自动化开发" tabindex="-1">自动化开发 <a class="header-anchor" href="#自动化开发" aria-label="Permalink to &quot;自动化开发&quot;">​</a></h1><h2 id="web" tabindex="-1">WEB <a class="header-anchor" href="#web" aria-label="Permalink to &quot;WEB&quot;">​</a></h2><h2 id="client" tabindex="-1">CLIENT <a class="header-anchor" href="#client" aria-label="Permalink to &quot;CLIENT&quot;">​</a></h2>`,17)]))}const c=a(h,[["render",e]]);export{o as __pageData,c as default};
