import{_ as e,M as t,p as o,q as c,R as n,t as a,N as p,a1 as r}from"./framework-546207d5.js";const l={},i=r(`<h1 id="docker-快速部署前端" tabindex="-1"><a class="header-anchor" href="#docker-快速部署前端" aria-hidden="true">#</a> Docker 快速部署前端</h1><p>为了快速演示，我们可以使用 Docker 快速部署一个前端项目。</p><p>首先我们需要在前端项目添加一个 <code>Dockerfile</code> 文件，内容如下：</p><div class="language-docker" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx:1.23.3-alpine</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token variable">$PWD</span>/dist/ /usr/share/nginx/html/</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span>
</code></pre></div><p>接着使用下面的命令构建（如果是 Windows 在 WSL 中操作）：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> my_test:v1 <span class="token builtin class-name">.</span>
</code></pre></div><p>构建成功后运行容器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token builtin class-name">test</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
    my_test:v1
</code></pre></div>`,8),d={href:"http://localhost",target:"_blank",rel:"noopener noreferrer"};function k(u,h){const s=t("ExternalLinkIcon");return o(),c("div",null,[i,n("p",null,[a("打开 "),n("a",d,[a("http://localhost"),p(s)]),a(" 即可看到内容。")])])}const g=e(l,[["render",k],["__file","docker.html.vue"]]);export{g as default};
