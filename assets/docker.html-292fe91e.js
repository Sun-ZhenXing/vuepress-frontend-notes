import{_ as l,M as o,p as i,q as r,Q as s,N as a,V as p,t as n,a1 as c}from"./framework-d2b9082c.js";const d={},u=s("h1",{id:"docker-部署前端项目",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker-部署前端项目","aria-hidden":"true"},"#"),n(" Docker 部署前端项目")],-1),k={class:"table-of-contents"},v=c(`<h2 id="_1-nginx-快速演示" tabindex="-1"><a class="header-anchor" href="#_1-nginx-快速演示" aria-hidden="true">#</a> 1. Nginx 快速演示</h2><p>为了快速演示，我们可以使用 Docker 快速部署一个前端项目。假设我们的项目构建输出在 <code>/dist/</code> 目录下。</p><p>我们需要在项目添加一个 <code>Dockerfile</code> 文件，内容如下：</p><div class="language-docker" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx:1.23.3-alpine</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token variable">$PWD</span>/dist/ /usr/share/nginx/html/</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span>
</code></pre></div><p>可以在 Linux/WSL2 中使用下面的命令构建：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> my_test:v1 <span class="token builtin class-name">.</span>
</code></pre></div><p>构建成功后运行容器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token builtin class-name">test</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
    my_test:v1
</code></pre></div>`,8),m={href:"http://localhost/",target:"_blank",rel:"noopener noreferrer"},h=c(`<h2 id="_2-编译加部署" tabindex="-1"><a class="header-anchor" href="#_2-编译加部署" aria-hidden="true">#</a> 2. 编译加部署</h2><p>在同一个 <code>Dockerfile</code> 文件中，我们可以使用两个镜像来完成编译和部署。</p><p>如果项目的根目录不是 <code>/</code>，我们可以将 <code>index.html</code> 文件的内容设置为：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;/docs/&#39;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>下面，我们构建一个基于 VuePress 的文档项目（就像本项目一样），使用 <code>pnpm</code> 编译。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># Builder</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:18.15-bullseye <span class="token keyword">as</span> builder</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> *.* ./</span>
<span class="token instruction"><span class="token keyword">COPY</span> docs/ ./docs/</span>

<span class="token instruction"><span class="token keyword">RUN</span> npm install -g pnpm &amp;&amp; <span class="token operator">\\</span>
    pnpm install &amp;&amp; <span class="token operator">\\</span>
    pnpm build</span>

<span class="token comment"># Nginx Server</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx:1.23.3-alpine</span>

<span class="token instruction"><span class="token keyword">ENV</span> TZ=Asia/Shanghai <span class="token operator">\\</span>
    LANG=C.UTF-8 <span class="token operator">\\</span>
    LANGUAGE=C.UTF-8 <span class="token operator">\\</span>
    LC_ALL=C.UTF-8</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr/share/nginx/html/docs/</span>

<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;&lt;script&gt;window.location.href = &#39;/docs/&#39;&lt;/script&gt;&quot;</span> &gt; /usr/share/nginx/html/index.html</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/docs/.vuepress/dist/ ./</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以克隆本项目，然后将上述内容保存为 <code>Dockerfile</code> 放到项目的根目录，然后运行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> my_docs:v1 <span class="token builtin class-name">.</span>
</code></pre></div><p>构建成功后运行容器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token builtin class-name">test</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
    my_docs:v1
</code></pre></div>`,10),g={href:"http://localhost/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://localhost/docs/",target:"_blank",rel:"noopener noreferrer"};function _(f,x){const t=o("router-link"),e=o("ExternalLinkIcon");return i(),r("div",null,[u,s("nav",k,[s("ul",null,[s("li",null,[a(t,{to:"#_1-nginx-快速演示"},{default:p(()=>[n("1. Nginx 快速演示")]),_:1})]),s("li",null,[a(t,{to:"#_2-编译加部署"},{default:p(()=>[n("2. 编译加部署")]),_:1})])])]),v,s("p",null,[n("打开 "),s("a",m,[n("http://localhost/"),a(e)]),n(" 即可看到内容。")]),h,s("p",null,[n("打开 "),s("a",g,[n("http://localhost/"),a(e)]),n(" 即可看到被重定向到 "),s("a",b,[n("http://localhost/docs/"),a(e)]),n("，可以找到本页面的内容。")])])}const w=l(d,[["render",_],["__file","docker.html.vue"]]);export{w as default};
