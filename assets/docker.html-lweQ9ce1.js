import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as d,b as s,a,w as l,e as n,d as t}from"./app-FEcl1joV.js";const D={},y=s("h1",{id:"docker-部署前端项目",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker-部署前端项目"},[s("span",null,"Docker 部署前端项目")])],-1),h={class:"table-of-contents"},u=t(`<h2 id="1-nginx-快速演示" tabindex="-1"><a class="header-anchor" href="#1-nginx-快速演示"><span>1. Nginx 快速演示</span></a></h2><p>为了快速演示，我们可以使用 Docker 快速部署一个前端项目。假设我们的项目构建输出在 <code>/dist/</code> 目录下。</p><p>我们需要在项目添加一个 <code>Dockerfile</code> 文件，内容如下：</p><div class="language-docker" data-ext="docker" data-title="docker"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">FROM</span><span style="color:#D4D4D4;"> nginx:1.24.0-alpine3.17-slim</span></span>
<span class="line"><span style="color:#569CD6;">COPY</span><span style="color:#D4D4D4;"> $PWD/dist/ /usr/share/nginx/html/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">EXPOSE</span><span style="color:#D4D4D4;"> 80</span></span>
<span class="line"><span style="color:#569CD6;">CMD</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&quot;nginx&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;-g&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;daemon off;&quot;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre></div><p>使用下面的命令构建：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#CE9178;"> build</span><span style="color:#569CD6;"> -t</span><span style="color:#CE9178;"> my_test</span><span style="color:#CE9178;"> .</span></span>
<span class="line"></span></code></pre></div><p>构建成功后运行容器：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#CE9178;"> run</span><span style="color:#569CD6;"> -itd</span><span style="color:#569CD6;"> -p</span><span style="color:#CE9178;"> 80:80</span><span style="color:#CE9178;"> my_test</span></span>
<span class="line"></span></code></pre></div>`,8),m={href:"http://localhost/",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="2-编译并部署" tabindex="-1"><a class="header-anchor" href="#2-编译并部署"><span>2. 编译并部署</span></a></h2><p>在同一个 <code>Dockerfile</code> 文件中，我们可以使用两个镜像来完成编译和部署。</p><p>如果项目的根目录不是 <code>/</code>，我们可以将 <code>index.html</code> 文件的内容设置为：</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span><span style="color:#9CDCFE;">window</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">location</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">href</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;/docs/&#39;</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>这样我们就会默认被定向到 <code>/docs/</code> 目录下，也可以使用 <code>nginx.conf</code> 文件来配置。</p><p>下面，我们构建一个基于 VuePress 的文档项目，默认页面是 <code>/vuepress-frontend-notes/</code>（即你现在正在看到的项目），使用 <code>pnpm</code> 编译。</p><div class="language-docker" data-ext="docker" data-title="docker"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">ARG</span><span style="color:#D4D4D4;"> NODE_VERSION=20.12.2</span></span>
<span class="line"><span style="color:#569CD6;">ARG</span><span style="color:#D4D4D4;"> NGINX_VERSION=1.25.5-alpine3.19-slim</span></span>
<span class="line"><span style="color:#569CD6;">ARG</span><span style="color:#D4D4D4;"> NPM_REGISTER=https://registry.npmjs.org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Builder</span></span>
<span class="line"><span style="color:#569CD6;">FROM</span><span style="color:#D4D4D4;"> node:$NODE_VERSION-bookworm </span><span style="color:#569CD6;">as</span><span style="color:#D4D4D4;"> builder</span></span>
<span class="line"><span style="color:#569CD6;">WORKDIR</span><span style="color:#D4D4D4;"> /app</span></span>
<span class="line"><span style="color:#569CD6;">ARG</span><span style="color:#D4D4D4;"> NPM_REGISTER</span></span>
<span class="line"><span style="color:#569CD6;">COPY</span><span style="color:#D4D4D4;"> . ./</span></span>
<span class="line"><span style="color:#569CD6;">ENV</span><span style="color:#D4D4D4;"> NODE_OPTIONS=--max-old-space-size=4096</span></span>
<span class="line"><span style="color:#569CD6;">RUN</span><span style="color:#D4D4D4;"> npm -v \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    &amp;&amp; npm config set registry $NPM_REGISTER \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    &amp;&amp; npm install -g pnpm \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    &amp;&amp; pnpm -v \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    &amp;&amp; pnpm config set registry $NPM_REGISTER \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    &amp;&amp; pnpm install \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    &amp;&amp; pnpm build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Nginx Server</span></span>
<span class="line"><span style="color:#569CD6;">FROM</span><span style="color:#D4D4D4;"> nginx:$NGINX_VERSION</span></span>
<span class="line"><span style="color:#569CD6;">WORKDIR</span><span style="color:#D4D4D4;"> /usr/share/nginx/html/vuepress-frontend-notes/</span></span>
<span class="line"><span style="color:#569CD6;">COPY</span><span style="color:#D4D4D4;"> --from=builder /app/src/.vuepress/dist/ ./</span></span>
<span class="line"><span style="color:#569CD6;">RUN</span><span style="color:#D4D4D4;"> echo </span><span style="color:#CE9178;">&quot;&lt;script&gt;window.location.href = &#39;/vuepress-frontend-notes/&#39;&lt;/script&gt;&quot;</span><span style="color:#D4D4D4;"> &gt; /usr/share/nginx/html/index.html</span></span>
<span class="line"><span style="color:#569CD6;">EXPOSE</span><span style="color:#D4D4D4;"> 80</span></span>
<span class="line"><span style="color:#569CD6;">CMD</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&quot;nginx&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;-g&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;daemon off;&quot;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre></div><p>你可以克隆本项目，即上放的 GitHub 地址，本项目提供了上述 <code>Dockerfile</code> 文件，你可以构建镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#CE9178;"> build</span><span style="color:#569CD6;"> -t</span><span style="color:#CE9178;"> vuepress-frontend-notes</span><span style="color:#CE9178;"> .</span></span>
<span class="line"></span></code></pre></div><p>构建成功后运行容器：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#CE9178;"> run</span><span style="color:#569CD6;"> -itd</span><span style="color:#569CD6;"> -p</span><span style="color:#CE9178;"> 80:80</span><span style="color:#CE9178;"> vuepress-frontend-notes</span></span>
<span class="line"></span></code></pre></div>`,11),_={href:"http://localhost/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://localhost/vuepress-frontend-notes/",target:"_blank",rel:"noopener noreferrer"},C={class:"hint-container warning"},E=s("p",{class:"hint-container-title"},"溢出堆空间",-1),f=s("p",null,[n("如果你的项目比较大，或者服务器内存不足，可能在构建时出现 "),s("code",null,"FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory"),n(" 错误。")],-1),x=s("p",null,[n("几种解决方法，其中 "),s("code",null,"4096"),n("（4 GB）可改为你需要的空间大小：")],-1),b=s("li",null,[n("在 "),s("code",null,"Dockerfile"),n(" 中添加 "),s("code",null,"ENV NODE_OPTIONS=--max-old-space-size=4096")],-1),v=s("li",null,[n("添加命令 "),s("code",null,"export NODE_OPTIONS=--max_old_space_size=4096")],-1),N={href:"https://www.npmjs.com/package/increase-memory-limit",target:"_blank",rel:"noopener noreferrer"},R=s("code",null,"increase-memory-limit",-1);function O(A,I){const p=o("router-link"),e=o("ExternalLinkIcon"),c=o("Badge");return i(),d("div",null,[y,s("nav",h,[s("ul",null,[s("li",null,[a(p,{to:"#1-nginx-快速演示"},{default:l(()=>[n("1. Nginx 快速演示")]),_:1})]),s("li",null,[a(p,{to:"#2-编译并部署"},{default:l(()=>[n("2. 编译并部署")]),_:1})])])]),u,s("p",null,[n("打开 "),s("a",m,[n("http://localhost/"),a(e)]),n(" 即可看到内容。")]),g,s("p",null,[n("打开 "),s("a",_,[n("http://localhost/"),a(e)]),n(" 即可看到被重定向到 "),s("a",k,[n("http://localhost/vuepress-frontend-notes/"),a(e)]),n("，可以找到本页面的内容。")]),s("div",C,[E,f,x,s("ul",null,[b,v,s("li",null,[a(c,{style:{"user-select":"none"},type:"warning"},{default:l(()=>[n("已弃用")]),_:1}),n(" 使用 "),s("a",N,[R,a(e)]),n(" 插件")])])])])}const P=r(D,[["render",O],["__file","docker.html.vue"]]),T=JSON.parse('{"path":"/notebook/deployment/docker.html","title":"Docker 部署前端项目","lang":"zh-CN","frontmatter":{"description":"Docker 部署前端项目 1. Nginx 快速演示 为了快速演示，我们可以使用 Docker 快速部署一个前端项目。假设我们的项目构建输出在 /dist/ 目录下。 我们需要在项目添加一个 Dockerfile 文件，内容如下： 使用下面的命令构建： 构建成功后运行容器： 打开 http://localhost/ 即可看到内容。 2. 编译并部署 ...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/deployment/docker.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"Docker 部署前端项目"}],["meta",{"property":"og:description","content":"Docker 部署前端项目 1. Nginx 快速演示 为了快速演示，我们可以使用 Docker 快速部署一个前端项目。假设我们的项目构建输出在 /dist/ 目录下。 我们需要在项目添加一个 Dockerfile 文件，内容如下： 使用下面的命令构建： 构建成功后运行容器： 打开 http://localhost/ 即可看到内容。 2. 编译并部署 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker 部署前端项目\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. Nginx 快速演示","slug":"1-nginx-快速演示","link":"#1-nginx-快速演示","children":[]},{"level":2,"title":"2. 编译并部署","slug":"2-编译并部署","link":"#2-编译并部署","children":[]}],"git":{"createdTime":1679289384000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":1.52,"words":455},"filePathRelative":"notebook/deployment/docker.md","localizedDate":"2023年3月20日","autoDesc":true}');export{P as comp,T as data};
