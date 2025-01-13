import{_ as p,c as t,R as a,o as l}from"./chunks/framework.DzXLMhZy.js";const i="/Blog/jmeter/1.png",r="/Blog/jmeter/2.png",s="/Blog/jmeter/3.png",c="/Blog/jmeter/4.png",n="/Blog/jmeter/5.png",d="/Blog/jmeter/6.png",m="/Blog/jmeter/7.png",h="/Blog/jmeter/8.png",g="/Blog/jmeter/9.png",_="/Blog/jmeter/10.png",u="/Blog/jmeter/11.png",b="/Blog/jmeter/12.png",k="/Blog/jmeter/13.png",B="/Blog/jmeter/14.png",j="/Blog/jmeter/15.png",q="/Blog/jmeter/16.png",f="/Blog/jmeter/17.png",P="/Blog/jmeter/18.png",x="/Blog/jmeter/19.png",v="/Blog/jmeter/20.png",C="/Blog/jmeter/21.png",F="/Blog/jmeter/22.png",y="/Blog/jmeter/23.png",J="/Blog/jmeter/24.png",o="/Blog/jmeter/25.png",E="/Blog/jmeter/27.png",D="/Blog/jmeter/28.png",S="/Blog/jmeter/29.png",w="/Blog/jmeter/30.png",I="/Blog/jmeter/31.png",T="/Blog/jmeter/32.png",$="/Blog/jmeter/33.png",M="/Blog/jmeter/34.png",R="/Blog/jmeter/35.png",U="/Blog/jmeter/36.png",L="/Blog/jmeter/37.png",N="/Blog/jmeter/38.png",V="/Blog/jmeter/39.png",A="/Blog/jmeter/40.png",G="/Blog/jmeter/41.png",H="/Blog/jmeter/42.png",Q="/Blog/jmeter/43.png",z="/Blog/jmeter/44.png",O="/Blog/jmeter/45.png",Y="/Blog/jmeter/46.png",K="/Blog/jmeter/47.png",W="/Blog/jmeter/48.png",X="/Blog/jmeter/49.png",Z="/Blog/jmeter/50.png",ee="/Blog/jmeter/51.png",oe="/Blog/jmeter/52.png",ne=JSON.parse('{"title":"JMeter—10小时入门版","description":"","frontmatter":{"Author":"mikigo"},"headers":[],"relativePath":"自动化技术/性能自动化/JMeter—10小时入门版.md","filePath":"自动化技术/性能自动化/JMeter—10小时入门版.md","lastUpdated":1736789675000}'),pe={name:"自动化技术/性能自动化/JMeter—10小时入门版.md"};function te(ae,e,le,ie,re,se){return l(),t("div",null,e[0]||(e[0]=[a('<h1 id="jmeter—10小时入门版" tabindex="-1">JMeter—10小时入门版 <a class="header-anchor" href="#jmeter—10小时入门版" aria-label="Permalink to &quot;JMeter—10小时入门版&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>全称 <code>Apache JMeter</code> ，一个基于 <code>Java</code> 的开源性能测试工具，有些同学也用来做一些简单的接口测试，但它主要的功能是用来做性能的。</p><p>其工作原理是，建立一个线程池，多线程运行取样器产生大量负载，在运行中通过断言来验证结果的正确性，通过监听器来记录测试结果；</p><p>Github地址：<a href="https://github.com/apache/jmeter" target="_blank" rel="noreferrer">https://github.com/apache/jmeter</a></p><h2 id="jmeter-组件" tabindex="-1">Jmeter 组件 <a class="header-anchor" href="#jmeter-组件" aria-label="Permalink to &quot;Jmeter 组件&quot;">​</a></h2><h3 id="线程组" tabindex="-1">线程组 <a class="header-anchor" href="#线程组" aria-label="Permalink to &quot;线程组&quot;">​</a></h3><p>可以看做一个虚拟用户组，线程组中的每个线程都可以理解为一个虚拟用户；</p><p>线程数就表示虚拟用户数；</p><p><code>Ramp-up Period</code> 爬坡启动时间，单位是秒，默认时间是1，它制定了启动所有线程所花费的时间。</p><p>（举例：线程数10个，运行时间5，就是1秒启动2个）</p><p>​ <img src="'+i+'" alt="0"></p><p>​ <img src="'+r+'" alt="0"></p><h3 id="取样器-sampler" tabindex="-1">取样器（sampler） <a class="header-anchor" href="#取样器-sampler" aria-label="Permalink to &quot;取样器（sampler）&quot;">​</a></h3><p>性能测试中向服务器发送请求，记录响应信息，记录响应时间的最小单元。</p><p>​ <img src="'+s+'" alt="0"></p><h3 id="逻辑控制器-logic-controller" tabindex="-1">逻辑控制器（logic controller） <a class="header-anchor" href="#逻辑控制器-logic-controller" aria-label="Permalink to &quot;逻辑控制器（logic controller）&quot;">​</a></h3><p>两类：</p><p>① 控制测试计划中取样器节点发送请求的逻辑顺序的控制器（if/switch/Controller）</p><p>② 用来组织可控制取样器节点的，失误控制器、吞吐量控制器。</p><h4 id="_1-循环控制器" tabindex="-1">（1）循环控制器 <a class="header-anchor" href="#_1-循环控制器" aria-label="Permalink to &quot;（1）循环控制器&quot;">​</a></h4><p>​ <img src="'+c+'" alt="0"></p><p>线程组循环次数与循环控制器循环次数叠加（相乘）</p><p><code>badboy</code> 录制的循环控制器和 <code>jmeter</code> 带的循环控制器不兼容</p><h4 id="_2-foreach控制器" tabindex="-1">（2）ForEach控制器 <a class="header-anchor" href="#_2-foreach控制器" aria-label="Permalink to &quot;（2）ForEach控制器&quot;">​</a></h4><p>​ <img src="'+n+'" alt="0"></p><p>后面的请求是加在 <code>ForEach</code> 控制器下面</p><p>​ <img src="'+d+'" alt="0"></p><h4 id="_3-if-控制器" tabindex="-1">（3）If 控制器 <a class="header-anchor" href="#_3-if-控制器" aria-label="Permalink to &quot;（3）If 控制器&quot;">​</a></h4><p>​ <img src="'+m+'" alt="0"></p><p>注意：条件里面，变量要用 &quot;${}&quot; ,<code>if</code> 下面加 <code>http</code> 请求</p><h4 id="_4-switch-控制器-开关" tabindex="-1">（4）switch 控制器（开关） <a class="header-anchor" href="#_4-switch-控制器-开关" aria-label="Permalink to &quot;（4）switch 控制器（开关）&quot;">​</a></h4><ol><li>在逻辑控制器里面选择 <code>switch controller</code>（switch控制器）</li><li>在控制器内添加多个请求</li><li>可通过请求名称来控制，或通过请求序号来控制（序号从0开始）</li></ol><p>​ <img src="'+h+'" alt="0"></p><p>​ <img src="'+g+'" alt="0"></p><h4 id="_5-吞吐量控制器" tabindex="-1">（5）吞吐量控制器 <a class="header-anchor" href="#_5-吞吐量控制器" aria-label="Permalink to &quot;（5）吞吐量控制器&quot;">​</a></h4><ol><li><p>在逻辑控制器里面选择吞吐量控制器（用于控制发送的请求数）</p></li><li><p><code>Total Executions</code>（吞吐量）输入数据，输入数据要小于等于线程组数（每个线程发送4次，线程组数和循环次数无效）</p></li><li><p><code>Percent Executions</code> 吞吐量百分比（线程组数10个，吞吐量百分比25，每个线程发送2次，百分比25.5，每个线程发送3次）</p></li></ol><p>​ <img src="'+_+'" alt="0"></p><p>​ <img src="'+u+'" alt="0"></p><h3 id="定时器" tabindex="-1">定时器 <a class="header-anchor" href="#定时器" aria-label="Permalink to &quot;定时器&quot;">​</a></h3><p>①固定定时器（思考时间）</p><p>每个线程在请求之前按相同的制定时间停顿。</p><p>②同步定时器（集合点）</p><p>集合点，等到特定的用户数后再一起执行某个操作。</p><p>​ <img src="'+b+'" alt="0"></p><p>​ <img src="'+k+'" alt="0"></p><p>​ <img src="'+B+'" alt="0"></p><p><code>Number of Simulated Users to Group by</code>:集合多少人后再执行请求；</p><p><code>Timeout in milliseconds</code> :指定人数多少秒没有集合到算超时（延迟时间，单位毫秒）;如果为0，表示无超时时间，会一直等下去。如果线程数小于集合人数，到时间就会发出去。</p><h3 id="配置元件" tabindex="-1">配置元件 <a class="header-anchor" href="#配置元件" aria-label="Permalink to &quot;配置元件&quot;">​</a></h3><p>用于提供对静态数据配置的支持</p><p>参数化有三种：</p><ol><li>CSV Data Set config</li><li>函数助手</li><li>用户自定义变量</li></ol><p><strong>① CSV Data Set config</strong></p><p>可以将本地数据文件形成数据池。</p><p>​ <img src="'+j+'" alt="0"></p><p>​ <img src="'+q+'" alt="0"></p><p><strong>② 函数助手</strong></p><p>选项-函数助手</p><p>​ <img src="'+f+'" alt="0"></p><p>​ <img src="'+P+'" alt="0"></p><p>​ <img src="'+x+'" alt="0"></p><p>​ <img src="'+v+'" alt="0"></p><p>​ <img src="'+C+'" alt="0"></p><p><strong>③ 用户自定义变量</strong></p><p>​ <img src="'+F+'" alt="0"></p><p>​ <img src="'+y+'" alt="0"></p><p>​ <img src="'+J+'" alt="0"></p><p>​ <img src="'+o+'" alt="0"></p><p><strong>④计数器</strong></p><p>​ <img src="'+o+'" alt="0"></p><p>​ <img src="'+E+'" alt="0"></p><p>​ <img src="'+D+'" alt="0"></p><p>​ <img src="'+S+'" alt="0"></p><p><code>${__v(name_${N})}</code> 两层变量用v函数，固定用法。</p><h2 id="元件的作用域" tabindex="-1">元件的作用域 <a class="header-anchor" href="#元件的作用域" aria-label="Permalink to &quot;元件的作用域&quot;">​</a></h2><ol><li>配置元件</li></ol><p>会影响其作用范围内的所有元件。</p><ol start="2"><li>前置处理程序</li></ol><p>在其作用范围内的每个sampler元件之前执行。</p><ol start="3"><li>定时器</li></ol><p>对在其所用范围内的每个sampler有效。</p><ol start="4"><li>后置处理程序</li></ol><p>在其作用范围内的每个sampler元件之后执行。</p><ol start="5"><li>断言</li></ol><p>在其作用范围内的每个sampler元件执行后结果进行校验。</p><ol start="6"><li>监听器</li></ol><p>收集其作用范围内的每个什么sampler元件的信息并呈现。</p><ol start="7"><li>取样器</li></ol><p>不予其他元件相互作用。</p><ol start="8"><li>逻辑控制器</li></ol><p>对其子节点中的去延期或逻辑控制器作用。</p><h2 id="脚本开发" tabindex="-1">脚本开发 <a class="header-anchor" href="#脚本开发" aria-label="Permalink to &quot;脚本开发&quot;">​</a></h2><h3 id="脚本录制" tabindex="-1">脚本录制 <a class="header-anchor" href="#脚本录制" aria-label="Permalink to &quot;脚本录制&quot;">​</a></h3><p><code>badboy</code></p><h3 id="脚本生成" tabindex="-1">脚本生成 <a class="header-anchor" href="#脚本生成" aria-label="Permalink to &quot;脚本生成&quot;">​</a></h3><p>1.关联</p><p>关联：用于获取一个响应数据中的结果；</p><p>在后置处理器中-正则表达式提取器；</p><p>​ <img src="'+w+`" alt="0"></p><p>正则表达式</p><ol><li>引用名称：下一个请求要引用的参数名称，</li></ol><p>2.（）：括起来的部分就是要提取</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ：匹配任何字符串</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ：一次或多次</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：任意多次（可以取到空格）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">？：不要太贪婪，在找到第一个匹配项后停止。</span></span></code></pre></div><p>3.模块：用$$引用起来，如果有多个（）内容，可以用$1$,$2$等，标识解析到第几个值</p><p>4.匹配数字：0代表随机，-1代表全部，其余整整数代表提取第几个匹配的内容。</p><p>5.添加Debug进行调试</p><p>任意字符串的取法：（.+?）或（.*?）</p><p>​ <img src="`+I+'" alt="0"></p><p>数字的取法：</p><p>（[0-9]*）,[0-9]表示取0-9的任意数字，*表示任意多次 ##表达式前面的字符不要太多</p><p>​ <img src="'+T+'" alt="0"></p><p>2.http请求默认值</p><p>有相同的服务器名称或IP地址时，将其填入请求默认值中，减小工作量。</p><p>​ <img src="'+$+'" alt="0"></p><p>​ <img src="'+M+'" alt="0"></p><p>​ <img src="'+R+'" alt="0"></p><h3 id="webservice接口测试" tabindex="-1">webservice接口测试 <a class="header-anchor" href="#webservice接口测试" aria-label="Permalink to &quot;webservice接口测试&quot;">​</a></h3><p>soap请求底层是调用的http请求</p><p>请求的报文是xml，返回的报文也是xml</p><p>​ <img src="'+U+'" alt="0"></p><h3 id="jdbc请求" tabindex="-1">JDBC请求 <a class="header-anchor" href="#jdbc请求" aria-label="Permalink to &quot;JDBC请求&quot;">​</a></h3><ol><li>添加控制元件，<code>JDBC Connection Configuration</code></li><li>添加sampler ，<code>JDBC Request</code></li><li>配置如下：</li></ol><p>（1）<code>Variable Name</code>：变量名可自定义</p><p>（2）<code>JDBC URL</code>：<code>jdbc:mysql://127.0.0.1:3306/ecshop</code></p><p>（3）<code>JDBC Driver Class</code>：<code>com.mysql.jdbc.Driver</code></p><p>（4）<code>username</code>: 数据库名</p><p>（5）<code>password</code>：数据库密码</p><p>​ <img src="'+L+'" alt="0"></p><ol start="4"><li>时区设置问题</li></ol><p>在 <code>URL</code> 末尾加 <code>?serverTimezone=UTC</code></p><ol start="5"><li>要添加多条 <code>SQL</code> 语句</li></ol><p>在 <code>URL</code> 末尾加 <code>?allowMultiQueries=true</code> （前面有？的用&amp;连接），<code>JDBC Request</code> 中</p><ol start="6"><li>设置字符集类型</li></ol><p>在URL末尾加 <code>?characterEncoding=UTF-8</code></p><p>​ <img src="'+N+'" alt="0"></p><p>​ <img src="'+V+'" alt="0"></p><ol start="7"><li>插入删除更新操作，<code>Query Type</code> 都选<code> update Statement</code></li></ol><p>​ <img src="'+A+'" alt="0"></p><h3 id="ftp请求" tabindex="-1">FTP请求 <a class="header-anchor" href="#ftp请求" aria-label="Permalink to &quot;FTP请求&quot;">​</a></h3><ol><li><code>sampler</code> 中添加 <code>FTP</code> 请求</li><li>配置如下</li></ol><p>端口号：21</p><p>服务器名称和 <code>IP</code>：上传或用来下载的服务器地址</p><p><code>Remote File</code>：远程 <code>FTP</code> 服务器文件路径（要加文件名）</p><p><code>Local File</code>：本地文件路径（要加文件名）</p><p><code>Local File Contents</code>：本地文件内容</p><p>用户名：如果是匿名用户登录，也要填入“anonymous”</p><p>密码：</p><p>​ <img src="'+G+'" alt="0"></p><p>​ <img src="'+H+'" alt="0"></p><p>​ <img src="'+Q+'" alt="0"></p><p>​ <img src="'+z+`" alt="0"></p><h3 id="场景设置" tabindex="-1">场景设置 <a class="header-anchor" href="#场景设置" aria-label="Permalink to &quot;场景设置&quot;">​</a></h3><h4 id="分布式运行" tabindex="-1">分布式运行 <a class="header-anchor" href="#分布式运行" aria-label="Permalink to &quot;分布式运行&quot;">​</a></h4><p>控制机：又称调度机，参与脚本的运行，主要是管理远程负载机，指挥远程负载机运行的任务，收集测试结果；</p><p>负载机：又称执行机，运行脚本的机子；</p><p>（1）分布式执行原理</p><p>①选择一台机器作为调度机，其他机器作为执行机</p><p>②执行时，<code>master</code> 会把脚本发送给每台 <code>slave</code>，<code>slave</code> 拿到脚本后执行，<code>slave</code> 执行时启动 <code>jmeter-server.bat</code> 即可（无需启动 <code>Jmeter</code> 软件）</p><p>③执行完后 <code>slave</code> 会把结果回传给 <code>master</code></p><p>（2）分布式配置方式</p><p>①调度机（master）配置</p><p>仅需将自己的 IP 添加到配置文件里面就行</p><ul><li><p>找到J <code>meter.properties</code></p></li><li><p>在 <code>remote_hosts</code> 后面加上负载机的 IP 地址</p></li></ul><p>②执行机（slave）配置</p><ul><li><p>找到 <code>Jmeter.properties</code></p></li><li><p>修改配置项（默认端口：1099）</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server_port</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1099</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server.rmi.localport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=1099</span></span></code></pre></div></li><li><p>启动 <code>Jmeter-server.bat</code></p></li></ul><p>​ <img src="`+O+'" alt="0"></p><p>③注意事项</p><ul><li><p>软件版本要一致</p></li><li><p>三方配置文件要配置在负载机上，路径要一致</p></li><li><p>注册等特殊情况，分发给负载机的参数化文件，参数不能相同。</p></li></ul><p>d.脚本不要放在桌面上</p><p>④如果连接失败需检查：</p><ul><li><p>是否关闭了防火墙</p></li><li><p>是否禁用了所有的虚拟网卡</p></li><li><p>参数化的 <code>CSV</code> 文件要复制到负载机上</p></li><li><p>三方的jar包要复制到负载机上</p></li></ul><h4 id="浪涌测试" tabindex="-1">浪涌测试 <a class="header-anchor" href="#浪涌测试" aria-label="Permalink to &quot;浪涌测试&quot;">​</a></h4><p>（1）概述</p><p>定义：浪涌测试是持续进行高强度和普通强度的交叉压力测试。</p><p>目的：主要是查看资源的释放情况。</p><p>（2）操作步骤</p><p>①在测试计划，右键添加 <code>threads→Ultimate Thread Group</code></p><p>②添加以下测试策略数据：</p><ul><li><code>Start Thread Count</code>：开始线程数量</li><li><code>Initial Ddlay</code>，sec：线程加载多长时间开始运行</li><li><code>Startup Time</code>，sec：线程加载多长时间</li><li><code>Hold Load For</code>，sec：线程持续运行多长时间</li><li><code>Shutdown Time</code>：线程停止时长，在多长时间内停止下来。</li></ul><h3 id="ip欺骗" tabindex="-1">IP欺骗 <a class="header-anchor" href="#ip欺骗" aria-label="Permalink to &quot;IP欺骗&quot;">​</a></h3><ol><li>对电脑添加多个可用 <code>IP</code>，并将IP地址保存在一个 <code>txt</code> 或 <code>csv</code> 文档中</li><li>添加配置元件 <code>CSV Data Set Config</code> 将文档中<code> IP</code> 参数化</li><li>在请求中选择 <code>[Advanced]</code>，<code>implementation</code> 选择 <code>HttpClient4</code>，<code>Source address</code> 选择 <code>IP/Hostname</code>，并输入 <code>IP</code> 参数（<code>${ip}</code>）</li></ol><p>​ <img src="'+Y+'" alt="0"></p><p>​ <img src="'+K+'" alt="0"></p><p>​ <img src="'+W+'" alt="0"></p><p>​ <img src="'+X+'" alt="0"></p><p>连不上网，需要把“首选 <code>DNS</code> 服务器”填上 <code>192.168.1.1</code>，</p><p>​ <img src="'+Z+'" alt="0"></p><p>将网络禁用后重启；</p><p>​ <img src="'+ee+'" alt="0"></p><h3 id="曲线拐点模型分析" tabindex="-1">曲线拐点模型分析 <a class="header-anchor" href="#曲线拐点模型分析" aria-label="Permalink to &quot;曲线拐点模型分析&quot;">​</a></h3><p><strong>1.定义</strong></p><p>性能测试曲线模型是一条随着测试时间不断变化的曲线，与服务器资源，用户数或其他的性能指标密切相关的曲线。</p><p><strong>2.解释</strong></p><p>x轴代表并发用户数，Y轴代表资源利用率、吞吐量、响应时间。</p><p>从左往右依次为轻负载区、重负载区、拐点区</p><p>（1）响应时间：轻负载区变化不大，重负载区增长，拐点区倾斜率增大。</p><p>（2）吞吐量：轻负载区增加，重压力区逐步平稳，拐点区急剧下降。</p><p>​ <img src="'+oe+'" alt="0"></p>',199)]))}const de=p(pe,[["render",te]]);export{ne as __pageData,de as default};
