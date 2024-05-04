import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as r,c as d,b as n,a as e,w as o,e as s,d as l}from"./app-BdnEjZx0.js";const u={},k=n("h1",{id:"docker-部署前端项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-部署前端项目"},[n("span",null,"Docker 部署前端项目")])],-1),m={class:"table-of-contents"},h=l(`<h2 id="1-nginx-快速演示" tabindex="-1"><a class="header-anchor" href="#1-nginx-快速演示"><span>1. Nginx 快速演示</span></a></h2><p>为了快速演示，我们可以使用 Docker 快速部署一个前端项目。假设我们的项目构建输出在 <code>/dist/</code> 目录下。</p><p>我们需要在项目添加一个 <code>Dockerfile</code> 文件，内容如下：</p><div class="language-docker" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx:1.24.0-alpine3.17-slim</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token variable">$PWD</span>/dist/ /usr/share/nginx/html/</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span>
</code></pre></div><p>使用下面的命令构建：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> my_test <span class="token builtin class-name">.</span>
</code></pre></div><p>构建成功后运行容器：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 my_test
</code></pre></div>`,8),g={href:"http://localhost/",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="2-编译并部署" tabindex="-1"><a class="header-anchor" href="#2-编译并部署"><span>2. 编译并部署</span></a></h2><p>在同一个 <code>Dockerfile</code> 文件中，我们可以使用两个镜像来完成编译和部署。</p><p>如果项目的根目录不是 <code>/</code>，我们可以将 <code>index.html</code> 文件的内容设置为：</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;/docs/&#39;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>这样我们就会默认被定向到 <code>/docs/</code> 目录下，也可以使用 <code>nginx.conf</code> 文件来配置。</p><p>下面，我们构建一个基于 VuePress 的文档项目，默认页面是 <code>/vuepress-frontend-notes/</code>（即你现在正在看到的项目），使用 <code>pnpm</code> 编译。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ARG</span> NODE_VERSION=20.12.2</span>
<span class="token instruction"><span class="token keyword">ARG</span> NGINX_VERSION=1.25.5-alpine3.19-slim</span>
<span class="token instruction"><span class="token keyword">ARG</span> NPM_REGISTER=https://registry.npmjs.org</span>

<span class="token comment"># Builder</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:<span class="token variable">$NODE_VERSION</span>-bookworm <span class="token keyword">as</span> builder</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">ARG</span> NPM_REGISTER</span>
<span class="token instruction"><span class="token keyword">COPY</span> . ./</span>
<span class="token instruction"><span class="token keyword">ENV</span> NODE_OPTIONS=--max-old-space-size=4096</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm -v <span class="token operator">\\</span>
    &amp;&amp; npm config set registry <span class="token variable">$NPM_REGISTER</span> <span class="token operator">\\</span>
    &amp;&amp; npm install -g pnpm <span class="token operator">\\</span>
    &amp;&amp; pnpm -v <span class="token operator">\\</span>
    &amp;&amp; pnpm config set registry <span class="token variable">$NPM_REGISTER</span> <span class="token operator">\\</span>
    &amp;&amp; pnpm install <span class="token operator">\\</span>
    &amp;&amp; pnpm build</span>

<span class="token comment"># Nginx Server</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx:<span class="token variable">$NGINX_VERSION</span></span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr/share/nginx/html/vuepress-frontend-notes/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/src/.vuepress/dist/ ./</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;&lt;script&gt;window.location.href = &#39;/vuepress-frontend-notes/&#39;&lt;/script&gt;&quot;</span> &gt; /usr/share/nginx/html/index.html</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以克隆本项目，即上放的 GitHub 地址，本项目提供了上述 <code>Dockerfile</code> 文件，你可以构建镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> vuepress-frontend-notes <span class="token builtin class-name">.</span>
</code></pre></div><p>构建成功后运行容器：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 vuepress-frontend-notes
</code></pre></div>`,11),_={href:"http://localhost/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://localhost/vuepress-frontend-notes/",target:"_blank",rel:"noopener noreferrer"},f={class:"hint-container warning"},y=n("p",{class:"hint-container-title"},"溢出堆空间",-1),x=n("p",null,[s("如果你的项目比较大，或者服务器内存不足，可能在构建时出现 "),n("code",null,"FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory"),s(" 错误。")],-1),N=n("p",null,[s("几种解决方法，其中 "),n("code",null,"4096"),s("（4 GB）可改为你需要的空间大小：")],-1),w=n("li",null,[s("在 "),n("code",null,"Dockerfile"),s(" 中添加 "),n("code",null,"ENV NODE_OPTIONS=--max-old-space-size=4096")],-1),R=n("li",null,[s("添加命令 "),n("code",null,"export NODE_OPTIONS=--max_old_space_size=4096")],-1),D={href:"https://www.npmjs.com/package/increase-memory-limit",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"increase-memory-limit",-1);function O(I,S){const p=t("router-link"),a=t("ExternalLinkIcon"),c=t("Badge");return r(),d("div",null,[k,n("nav",m,[n("ul",null,[n("li",null,[e(p,{to:"#1-nginx-快速演示"},{default:o(()=>[s("1. Nginx 快速演示")]),_:1})]),n("li",null,[e(p,{to:"#2-编译并部署"},{default:o(()=>[s("2. 编译并部署")]),_:1})])])]),h,n("p",null,[s("打开 "),n("a",g,[s("http://localhost/"),e(a)]),s(" 即可看到内容。")]),v,n("p",null,[s("打开 "),n("a",_,[s("http://localhost/"),e(a)]),s(" 即可看到被重定向到 "),n("a",b,[s("http://localhost/vuepress-frontend-notes/"),e(a)]),s("，可以找到本页面的内容。")]),n("div",f,[y,x,N,n("ul",null,[w,R,n("li",null,[e(c,{style:{"user-select":"none"},type:"warning"},{default:o(()=>[s("已弃用")]),_:1}),s(" 使用 "),n("a",D,[E,e(a)]),s(" 插件")])])])])}const T=i(u,[["render",O],["__file","docker.html.vue"]]),G=JSON.parse('{"path":"/notebook/deployment/docker.html","title":"Docker 部署前端项目","lang":"zh-CN","frontmatter":{"description":"Docker 部署前端项目 1. Nginx 快速演示 为了快速演示，我们可以使用 Docker 快速部署一个前端项目。假设我们的项目构建输出在 /dist/ 目录下。 我们需要在项目添加一个 Dockerfile 文件，内容如下： 使用下面的命令构建： 构建成功后运行容器： 打开 http://localhost/ 即可看到内容。 2. 编译并部署 ...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/deployment/docker.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"Docker 部署前端项目"}],["meta",{"property":"og:description","content":"Docker 部署前端项目 1. Nginx 快速演示 为了快速演示，我们可以使用 Docker 快速部署一个前端项目。假设我们的项目构建输出在 /dist/ 目录下。 我们需要在项目添加一个 Dockerfile 文件，内容如下： 使用下面的命令构建： 构建成功后运行容器： 打开 http://localhost/ 即可看到内容。 2. 编译并部署 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker 部署前端项目\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. Nginx 快速演示","slug":"1-nginx-快速演示","link":"#1-nginx-快速演示","children":[]},{"level":2,"title":"2. 编译并部署","slug":"2-编译并部署","link":"#2-编译并部署","children":[]}],"git":{"createdTime":1679289384000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":1.52,"words":455},"filePathRelative":"notebook/deployment/docker.md","localizedDate":"2023年3月20日","autoDesc":true}');export{T as comp,G as data};
