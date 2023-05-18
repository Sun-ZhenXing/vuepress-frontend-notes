import{_ as r,r as c,o as t,c as D,d as s,b as l,w as e,e as n,f as p}from"./app-eaa63399.js";const i={},d=s("h1",{id:"axios",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#axios","aria-hidden":"true"},"#"),n(" Axios")],-1),y={class:"table-of-contents"},u={class:"hint-container info"},C=s("p",{class:"hint-container-title"},"官方文档",-1),h={href:"https://axios-http.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.axios-http.cn/docs/intro",target:"_blank",rel:"noopener noreferrer"},m=p('<h2 id="_1-axios" tabindex="-1"><a class="header-anchor" href="#_1-axios" aria-hidden="true">#</a> 1. Axios</h2><h3 id="_1-1-axios-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-axios-简介" aria-hidden="true">#</a> 1.1 Axios 简介</h3><p>Axios 是基于 <code>Promise</code> 可以用于浏览器和 Node.js 的网络请求库。</p><ul><li>它是 <strong>isomorphic</strong> 的（即同一套代码可以运行在浏览器和 Node.js 中）</li><li>在服务端它使用原生 Node.js <code>http</code> 模块</li><li>而在客户端（浏览器）则使用 <code>XMLHttpRequests</code></li></ul><h3 id="_1-2-特性" tabindex="-1"><a class="header-anchor" href="#_1-2-特性" aria-hidden="true">#</a> 1.2 特性</h3>',5),_=s("li",null,[n("从浏览器创建 "),s("code",null,"XMLHttpRequests")],-1),b=s("li",null,"从 Node.js 创建 HTTP 请求",-1),A=s("li",null,"支持 Promise API",-1),E=s("li",null,"拦截请求和响应",-1),x=s("li",null,"转换请求和响应数据",-1),g=s("li",null,"取消请求",-1),f=s("li",null,"自动转换 JSON 数据",-1),F={href:"http://en.wikipedia.org/wiki/Cross-site_request_forgery",target:"_blank",rel:"noopener noreferrer"},k=p(`<h3 id="_1-3-安装" tabindex="-1"><a class="header-anchor" href="#_1-3-安装" aria-hidden="true">#</a> 1.3 安装</h3><p>安装依赖：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">axios</span></span>
<span class="line"><span style="color:#DCDCAA;">bower</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">axios</span></span>
<span class="line"><span style="color:#DCDCAA;">yarn</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">add</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">axios</span></span>
<span class="line"></span></code></pre></div><p>浏览器端：</p><div class="language-html" data-ext="html"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">&lt;!-- jsDelivr CDN --&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js&quot;</span><span style="color:#808080;">&gt;&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;">&lt;!-- unpkg CDN --&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://unpkg.com/axios/dist/axios.min.js&quot;</span><span style="color:#808080;">&gt;&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>CommonJS：</p><div class="language-javascript" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">axios</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;axios/dist/browser/axios.cjs&#39;</span><span style="color:#D4D4D4;">); </span><span style="color:#6A9955;">// browser</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">axios</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;axios/dist/node/axios.cjs&#39;</span><span style="color:#D4D4D4;">); </span><span style="color:#6A9955;">// node</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-用例" tabindex="-1"><a class="header-anchor" href="#_2-用例" aria-hidden="true">#</a> 2. 用例</h2><h3 id="_2-1-commonjs" tabindex="-1"><a class="header-anchor" href="#_2-1-commonjs" aria-hidden="true">#</a> 2.1 CommonJS</h3><div class="language-javascript" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">axios</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;axios&#39;</span><span style="color:#D4D4D4;">).</span><span style="color:#9CDCFE;">default</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-2-浏览器" tabindex="-1"><a class="header-anchor" href="#_2-2-浏览器" aria-hidden="true">#</a> 2.2 浏览器</h3><p>GET 请求示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">axios</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;axios&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 向给定 ID 的用户发起请求</span></span>
<span class="line"><span style="color:#9CDCFE;">axios</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">get</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/user?ID=12345&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">response</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 处理成功情况</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">response</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">catch</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 处理错误情况</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 总是会执行</span></span>
<span class="line"><span style="color:#D4D4D4;">  });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述请求也可以按以下方式完成</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">axios</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">get</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/user&#39;</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">params:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">ID:</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">12345</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">response</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">response</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">catch</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 总是会执行</span></span>
<span class="line"><span style="color:#D4D4D4;">  });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持 <code>async / await</code> 用法：</p><div class="language-javascript" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">getUser</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">try</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">response</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">axios</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">get</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/user?ID=12345&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">response</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">catch</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">error</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>发起一个 POST 请求：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">axios</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">post</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/user&#39;</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">firstName:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Fred&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">lastName:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Flintstone&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">response</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">response</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">catch</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发起多个并发请求：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">getUserAccount</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">axios</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">get</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/user/12345&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">getUserPermissions</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">axios</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">get</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/user/12345/permissions&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4EC9B0;">Promise</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">all</span><span style="color:#D4D4D4;">([</span><span style="color:#DCDCAA;">getUserAccount</span><span style="color:#D4D4D4;">(), </span><span style="color:#DCDCAA;">getUserPermissions</span><span style="color:#D4D4D4;">()])</span></span>
<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">results</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">acct</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">results</span><span style="color:#D4D4D4;">[</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">perm</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">results</span><span style="color:#D4D4D4;">[</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"><span style="color:#D4D4D4;">  });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-下面学习什么" tabindex="-1"><a class="header-anchor" href="#_3-下面学习什么" aria-hidden="true">#</a> 3. 下面学习什么</h2>`,22),j={href:"https://www.axios-http.cn/docs/api_intro",target:"_blank",rel:"noopener noreferrer"},N=p("<li>Axios API <ul><li>创建新的请求 <ul><li><code>axios(config)</code></li><li><code>axios(url[, config])</code></li></ul></li><li>列举可用的请求方式别名</li></ul></li><li>Axios 实例 <ul><li>使用 <code>axios.create([config])</code> 创建实例</li><li>列举可以用的实例方法</li></ul></li><li>请求配置 <ul><li>列举所有创建请求时可以用的配置选项</li></ul></li><li>响应结构 <ul><li>列举一个请求的响应包含的信息</li><li>列举在 <code>then()</code> 方法中包含的信息</li><li>解释 <code>catch()</code> 方法可以捕获的错误信息</li></ul></li><li>默认配置 <ul><li>如何设置全局 <code>axios</code> 默认值</li><li>如何设置自定义实例默认值</li><li>解释配置的优先级</li></ul></li><li>拦截器 <ul><li>如何在请求或响应被 <code>then()</code> 或 <code>catch()</code> 处理前拦截它们</li><li>如何移除拦截器</li><li>如何给自定义的 <code>axios</code> 实例添加拦截器</li></ul></li><li>错误处理 <ul><li>处理错误的一个示例</li><li>如何使用 <code>validateStatus</code> 选项，自定义抛出错误的 HTTP code</li><li>如何使用 <code>toJSON()</code> 获取更多关于 HTTP 错误的信息</li></ul></li><li>取消请求 <ul><li>如何使用 <code>cancel token</code> 取消一个请求</li><li>如何创建 <code>cancel token</code><ul><li><code>CancelToken.source</code> 工厂方法创建一个 <code>cancel token</code></li><li>传递一个 <code>executor()</code> 函数到 <code>CancelToken</code> 的构造函数</li></ul></li><li>注意：可以使用同一个 <code>cancel token</code> 取消多个请求</li></ul></li><li>请求体编码 <ul><li>默认情况下，将 JavaScript 对象序列化为 <code>JSON</code></li><li>如何以 <code>application/x-www-form-urlencoded</code> 格式发送数据</li><li>在浏览器中 <ul><li>可以使用 <code>URLSearchParams API</code></li><li>或者使用 <code>qs</code> 库编码数据</li></ul></li><li>在 Node.js 中 <ul><li>可以使用 <code>querystring</code> 模块</li><li>也可以使用 <code>qs</code> 库</li><li>可以使用 <code>form-data</code> 库获取 <code>Form data</code></li><li>或者使用一个拦截器</li></ul></li></ul></li>",9),w=s("li",null,[s("strong",null,"[兼容性]"),n(" 破坏性更改将以新的次要版本发布")],-1),T=s("strong",null,"[兼容性]",-1),P=s("code",null,"Promises",-1),S={href:"https://github.com/jakearchibald/es6-promise",target:"_blank",rel:"noopener noreferrer"},q=s("li",null,"包含了 TypeScript 类定义",-1),I={href:"https://github.com/axios/axios/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/axios/axios/blob/master/ECOSYSTEM.md",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/axios/axios/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md",target:"_blank",rel:"noopener noreferrer"},G=s("li",null,"鸣谢",-1),H=s("li",null,"开源协议 MIT",-1);function L(R,M){const o=c("router-link"),a=c("ExternalLinkIcon");return t(),D("div",null,[d,s("nav",y,[s("ul",null,[s("li",null,[l(o,{to:"#_1-axios"},{default:e(()=>[n("1. Axios")]),_:1}),s("ul",null,[s("li",null,[l(o,{to:"#_1-1-axios-简介"},{default:e(()=>[n("1.1 Axios 简介")]),_:1})]),s("li",null,[l(o,{to:"#_1-2-特性"},{default:e(()=>[n("1.2 特性")]),_:1})]),s("li",null,[l(o,{to:"#_1-3-安装"},{default:e(()=>[n("1.3 安装")]),_:1})])])]),s("li",null,[l(o,{to:"#_2-用例"},{default:e(()=>[n("2. 用例")]),_:1}),s("ul",null,[s("li",null,[l(o,{to:"#_2-1-commonjs"},{default:e(()=>[n("2.1 CommonJS")]),_:1})]),s("li",null,[l(o,{to:"#_2-2-浏览器"},{default:e(()=>[n("2.2 浏览器")]),_:1})])])]),s("li",null,[l(o,{to:"#_3-下面学习什么"},{default:e(()=>[n("3. 下面学习什么")]),_:1})])])]),s("div",u,[C,s("ul",null,[s("li",null,[s("a",h,[n("官方文档"),l(a)])]),s("li",null,[s("a",v,[n("官方中文文档"),l(a)])])])]),m,s("ul",null,[_,b,A,E,x,g,f,s("li",null,[n("客户端支持防御 "),s("a",F,[n("XSRF"),l(a)])])]),k,s("p",null,[s("a",j,[n("API 参考手册"),l(a)]),n(" 的文档结构和讲解的内容，可用于参考和学习。")]),s("ol",null,[N,s("li",null,[n("注意事项 "),s("ul",null,[w,s("li",null,[T,n(),P,n(" 不受支持的 "),s("a",S,[n("polyfill 方案"),l(a)])]),q,s("li",null,[n("资源 "),s("ul",null,[s("li",null,[s("a",I,[n("变更日志"),l(a)])]),s("li",null,[s("a",O,[n("升级指南"),l(a)])]),s("li",null,[s("a",U,[n("生态系统"),l(a)])]),s("li",null,[s("a",B,[n("贡献指南"),l(a)])]),s("li",null,[s("a",J,[n("行为准则"),l(a)])])])]),G,H])])])])}const X=r(i,[["render",L],["__file","axios.html.vue"]]);export{X as default};
