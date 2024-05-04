import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as i,c as u,b as n,a,w as e,e as s,d as p}from"./app-BdnEjZx0.js";const r={},d=n("h1",{id:"axios",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#axios"},[n("span",null,"Axios")])],-1),k={class:"table-of-contents"},m={class:"hint-container info"},h=n("p",{class:"hint-container-title"},"官方文档",-1),v={href:"https://axios-http.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.axios-http.cn/docs/intro",target:"_blank",rel:"noopener noreferrer"},b=p('<h2 id="1-axios" tabindex="-1"><a class="header-anchor" href="#1-axios"><span>1. Axios</span></a></h2><h3 id="11-axios-简介" tabindex="-1"><a class="header-anchor" href="#11-axios-简介"><span>1.1 Axios 简介</span></a></h3><p>Axios 是基于 <code>Promise</code> 可以用于浏览器和 Node.js 的网络请求库。</p><ul><li>它是 <strong>isomorphic</strong> 的（即同一套代码可以运行在浏览器和 Node.js 中）</li><li>在服务端它使用原生 Node.js <code>http</code> 模块</li><li>而在客户端（浏览器）则使用 <code>XMLHttpRequests</code></li></ul><h3 id="12-特性" tabindex="-1"><a class="header-anchor" href="#12-特性"><span>1.2 特性</span></a></h3>',5),f=n("li",null,[s("从浏览器创建 "),n("code",null,"XMLHttpRequests")],-1),x=n("li",null,"从 Node.js 创建 HTTP 请求",-1),_=n("li",null,"支持 Promise API",-1),y=n("li",null,"拦截请求和响应",-1),j=n("li",null,"转换请求和响应数据",-1),w=n("li",null,"取消请求",-1),A=n("li",null,"自动转换 JSON 数据",-1),N={href:"http://en.wikipedia.org/wiki/Cross-site_request_forgery",target:"_blank",rel:"noopener noreferrer"},T=p(`<h3 id="13-安装" tabindex="-1"><a class="header-anchor" href="#13-安装"><span>1.3 安装</span></a></h3><p>安装依赖：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> axios
bower <span class="token function">install</span> axios
<span class="token function">yarn</span> <span class="token function">add</span> axios
</code></pre></div><p>浏览器端：</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- jsDelivr CDN --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- unpkg CDN --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/axios/dist/axios.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>CommonJS：</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;axios/dist/browser/axios.cjs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// browser</span>
<span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;axios/dist/node/axios.cjs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// node</span>
</code></pre></div><h2 id="2-用例" tabindex="-1"><a class="header-anchor" href="#2-用例"><span>2. 用例</span></a></h2><h3 id="21-commonjs" tabindex="-1"><a class="header-anchor" href="#21-commonjs"><span>2.1 CommonJS</span></a></h3><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;axios&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>
</code></pre></div><h3 id="22-浏览器" tabindex="-1"><a class="header-anchor" href="#22-浏览器"><span>2.2 浏览器</span></a></h3><p>GET 请求示例：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;axios&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 向给定 ID 的用户发起请求</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user?ID=12345&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理成功情况</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理错误情况</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 总是会执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述请求也可以按以下方式完成</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 总是会执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持 <code>async / await</code> 用法：</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user?ID=12345&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>发起一个 POST 请求：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Flintstone&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发起多个并发请求：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345/permissions&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> acct <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> perm <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="3-下面学习什么" tabindex="-1"><a class="header-anchor" href="#3-下面学习什么"><span>3. 下面学习什么</span></a></h2>`,22),P={href:"https://www.axios-http.cn/docs/api_intro",target:"_blank",rel:"noopener noreferrer"},C=p("<li>Axios API <ul><li>创建新的请求 <ul><li><code>axios(config)</code></li><li><code>axios(url[, config])</code></li></ul></li><li>列举可用的请求方式别名</li></ul></li><li>Axios 实例 <ul><li>使用 <code>axios.create([config])</code> 创建实例</li><li>列举可以用的实例方法</li></ul></li><li>请求配置 <ul><li>列举所有创建请求时可以用的配置选项</li></ul></li><li>响应结构 <ul><li>列举一个请求的响应包含的信息</li><li>列举在 <code>then()</code> 方法中包含的信息</li><li>解释 <code>catch()</code> 方法可以捕获的错误信息</li></ul></li><li>默认配置 <ul><li>如何设置全局 <code>axios</code> 默认值</li><li>如何设置自定义实例默认值</li><li>解释配置的优先级</li></ul></li><li>拦截器 <ul><li>如何在请求或响应被 <code>then()</code> 或 <code>catch()</code> 处理前拦截它们</li><li>如何移除拦截器</li><li>如何给自定义的 <code>axios</code> 实例添加拦截器</li></ul></li><li>错误处理 <ul><li>处理错误的一个示例</li><li>如何使用 <code>validateStatus</code> 选项，自定义抛出错误的 HTTP code</li><li>如何使用 <code>toJSON()</code> 获取更多关于 HTTP 错误的信息</li></ul></li><li>取消请求 <ul><li>如何使用 <code>cancel token</code> 取消一个请求</li><li>如何创建 <code>cancel token</code><ul><li><code>CancelToken.source</code> 工厂方法创建一个 <code>cancel token</code></li><li>传递一个 <code>executor()</code> 函数到 <code>CancelToken</code> 的构造函数</li></ul></li><li>注意：可以使用同一个 <code>cancel token</code> 取消多个请求</li></ul></li><li>请求体编码 <ul><li>默认情况下，将 JavaScript 对象序列化为 <code>JSON</code></li><li>如何以 <code>application/x-www-form-urlencoded</code> 格式发送数据</li><li>在浏览器中 <ul><li>可以使用 <code>URLSearchParams API</code></li><li>或者使用 <code>qs</code> 库编码数据</li></ul></li><li>在 Node.js 中 <ul><li>可以使用 <code>querystring</code> 模块</li><li>也可以使用 <code>qs</code> 库</li><li>可以使用 <code>form-data</code> 库获取 <code>Form data</code></li><li>或者使用一个拦截器</li></ul></li></ul></li>",9),q=n("li",null,[n("strong",null,"[兼容性]"),s(" 破坏性更改将以新的次要版本发布")],-1),S=n("strong",null,"[兼容性]",-1),I=n("code",null,"Promises",-1),D={href:"https://github.com/jakearchibald/es6-promise",target:"_blank",rel:"noopener noreferrer"},O=n("li",null,"包含了 TypeScript 类定义",-1),E={href:"https://github.com/axios/axios/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/axios/axios/blob/master/ECOSYSTEM.md",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/axios/axios/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md",target:"_blank",rel:"noopener noreferrer"},M=n("li",null,"鸣谢",-1),R=n("li",null,"开源协议 MIT",-1);function G(X,F){const o=c("router-link"),t=c("ExternalLinkIcon");return i(),u("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[a(o,{to:"#1-axios"},{default:e(()=>[s("1. Axios")]),_:1}),n("ul",null,[n("li",null,[a(o,{to:"#11-axios-简介"},{default:e(()=>[s("1.1 Axios 简介")]),_:1})]),n("li",null,[a(o,{to:"#12-特性"},{default:e(()=>[s("1.2 特性")]),_:1})]),n("li",null,[a(o,{to:"#13-安装"},{default:e(()=>[s("1.3 安装")]),_:1})])])]),n("li",null,[a(o,{to:"#2-用例"},{default:e(()=>[s("2. 用例")]),_:1}),n("ul",null,[n("li",null,[a(o,{to:"#21-commonjs"},{default:e(()=>[s("2.1 CommonJS")]),_:1})]),n("li",null,[a(o,{to:"#22-浏览器"},{default:e(()=>[s("2.2 浏览器")]),_:1})])])]),n("li",null,[a(o,{to:"#3-下面学习什么"},{default:e(()=>[s("3. 下面学习什么")]),_:1})])])]),n("div",m,[h,n("ul",null,[n("li",null,[n("a",v,[s("官方文档"),a(t)])]),n("li",null,[n("a",g,[s("官方中文文档"),a(t)])])])]),b,n("ul",null,[f,x,_,y,j,w,A,n("li",null,[s("客户端支持防御 "),n("a",N,[s("XSRF"),a(t)])])]),T,n("p",null,[n("a",P,[s("API 参考手册"),a(t)]),s(" 的文档结构和讲解的内容，可用于参考和学习。")]),n("ol",null,[C,n("li",null,[s("注意事项 "),n("ul",null,[q,n("li",null,[S,s(),I,s(" 不受支持的 "),n("a",D,[s("polyfill 方案"),a(t)])]),O,n("li",null,[s("资源 "),n("ul",null,[n("li",null,[n("a",E,[s("变更日志"),a(t)])]),n("li",null,[n("a",U,[s("升级指南"),a(t)])]),n("li",null,[n("a",J,[s("生态系统"),a(t)])]),n("li",null,[n("a",H,[s("贡献指南"),a(t)])]),n("li",null,[n("a",L,[s("行为准则"),a(t)])])])]),M,R])])])])}const Z=l(r,[["render",G],["__file","axios.html.vue"]]),z=JSON.parse('{"path":"/notebook/library/axios.html","title":"Axios","lang":"zh-CN","frontmatter":{"description":"Axios 官方文档 官方文档 官方中文文档 1. Axios 1.1 Axios 简介 Axios 是基于 Promise 可以用于浏览器和 Node.js 的网络请求库。 它是 isomorphic 的（即同一套代码可以运行在浏览器和 Node.js 中） 在服务端它使用原生 Node.js http 模块 而在客户端（浏览器）则使用 XMLHtt...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/library/axios.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"Axios"}],["meta",{"property":"og:description","content":"Axios 官方文档 官方文档 官方中文文档 1. Axios 1.1 Axios 简介 Axios 是基于 Promise 可以用于浏览器和 Node.js 的网络请求库。 它是 isomorphic 的（即同一套代码可以运行在浏览器和 Node.js 中） 在服务端它使用原生 Node.js http 模块 而在客户端（浏览器）则使用 XMLHtt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Axios\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. Axios","slug":"1-axios","link":"#1-axios","children":[{"level":3,"title":"1.1 Axios 简介","slug":"11-axios-简介","link":"#11-axios-简介","children":[]},{"level":3,"title":"1.2 特性","slug":"12-特性","link":"#12-特性","children":[]},{"level":3,"title":"1.3 安装","slug":"13-安装","link":"#13-安装","children":[]}]},{"level":2,"title":"2. 用例","slug":"2-用例","link":"#2-用例","children":[{"level":3,"title":"2.1 CommonJS","slug":"21-commonjs","link":"#21-commonjs","children":[]},{"level":3,"title":"2.2 浏览器","slug":"22-浏览器","link":"#22-浏览器","children":[]}]},{"level":2,"title":"3. 下面学习什么","slug":"3-下面学习什么","link":"#3-下面学习什么","children":[]}],"git":{"createdTime":1678754046000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":3.04,"words":913},"filePathRelative":"notebook/library/axios.md","localizedDate":"2023年3月14日","autoDesc":true}');export{Z as comp,z as data};
