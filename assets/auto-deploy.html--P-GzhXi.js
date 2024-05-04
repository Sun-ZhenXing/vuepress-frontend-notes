import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as r,b as n,a as e,w as a,e as s,d as u}from"./app-BdnEjZx0.js";const v={},m=n("h1",{id:"自动化部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自动化部署"},[n("span",null,"自动化部署")])],-1),k={class:"table-of-contents"},b=n("h2",{id:"1-cicd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#1-cicd"},[n("span",null,"1. CI/CD")])],-1),h=n("p",null,"CI/CD 是指持续集成（Continuous Integration）和持续部署（Continuous Deployment）。如果你正在使用 GitHub，那么你可以使用 GitHub Actions 来实现 CI/CD。如果你在维护大型项目，建议使用一些成熟的 CI/CD 系统来保证你的项目的可用性。",-1),f=n("h2",{id:"2-通过定时任务实现自动化部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#2-通过定时任务实现自动化部署"},[n("span",null,"2. 通过定时任务实现自动化部署")])],-1),g=n("p",null,"下面使用简单的定时任务来实现自动化部署，仅用于个人项目或测试。正式环境中请勿使用此方法，推荐使用成熟的 CI/CD 系统。",-1),y=n("p",null,[s("首先，可用使用 "),n("code",null,"release.sh"),s(" 脚本来实现自动化编译并上传到服务器，脚本内容如下：")],-1),_=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# release.sh"),s(`
`),n("span",{class:"token function"},"pnpm"),s(` build

`),n("span",{class:"token function"},"zip"),s(),n("span",{class:"token parameter variable"},"-r"),s(` dist.zip ./.output/*

`),n("span",{class:"token function"},"scp"),s(),n("span",{class:"token parameter variable"},"-i"),s(` root-user.pem dist.zip root@123.123.123.123:/home/admin/

`),n("span",{class:"token function"},"rm"),s(` dist.zip
`)])])],-1),C=n("div",{class:"language-bat","data-ext":"bat","data-title":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`@REM release.cmd
@echo off
call pnpm build

@REM use 7z to zip
7z a dist.zip ./.output/* -r

@REM use WSL to upload file, you can change to other tools
bash -c "scp -i root-user.pem dist.zip root@123.123.123.123:/home/admin/"

del dist.zip
`)])],-1),x=u(`<p>下面，我们在服务器上编写一个 <code>deploy.sh</code> 脚本，用于自动部署。我们以部署静态文件为例：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pushd</span> /home/admin/
<span class="token builtin class-name">echo</span> <span class="token string">&#39;deploy static files ...&#39;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;dist.zip&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">rm</span> /usr/share/nginx/html/docs/* <span class="token parameter variable">-rf</span>
  <span class="token function">unzip</span> <span class="token parameter variable">-qo</span> dist.zip <span class="token parameter variable">-d</span> /usr/share/nginx/html/docs
  <span class="token function">rm</span> dist.zip <span class="token parameter variable">-rf</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;dist.zip not found!&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">文件不完整</p><p>以上脚本存在问题，当上传未完成但文件存在时，会导致文件错误部署，另外，如果部署过程过长而导致两次部署任务重叠也会破坏任务。此时使用下面的脚本，给任务加锁，避免任务重叠。</p><p>脚本中的 <code>sleep 60</code> 为了防止文件上传未完成就开始部署，可以根据实际情况调整。</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pushd</span> /home/admin/
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;locked_deploy.sock&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">else</span>
  <span class="token function">touch</span> locked_deploy.sock
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;deploy static files ...&#39;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;dist.zip&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">sleep</span> <span class="token number">60</span>
  <span class="token function">rm</span> /usr/share/nginx/html/docs/* <span class="token parameter variable">-rf</span>
  <span class="token function">unzip</span> <span class="token parameter variable">-qo</span> dist.zip <span class="token parameter variable">-d</span> /usr/share/nginx/html/docs
  <span class="token function">rm</span> dist.zip <span class="token parameter variable">-rf</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;dist.zip not found!&quot;</span>
<span class="token keyword">fi</span>

<span class="token function">rm</span> locked_deploy.sock
<span class="token function">popd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了让脚本能定期运行，我们需要使用 <code>crontab</code> 命令计划定时任务，下面创建定时任务：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span>
</code></pre></div><p>建议使用 Root 用户来创建定时任务，当需要以其他用户身份运行时，可以使用 <code>su</code> 命令来切换用户。</p><p>然后指定定时任务的执行时间，比如每分钟执行一次：</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">*</span> <span class="token value attr-value">* * * * /bin/bash /home/admin/deploy.sh</span>
</code></pre></div><p>现在，每次运行 <code>release.sh</code> 脚本后，都会自动部署到服务器上。</p><h2 id="3-部署-docker-项目" tabindex="-1"><a class="header-anchor" href="#3-部署-docker-项目"><span>3. 部署 Docker 项目</span></a></h2><p>下面我们部署一个 Nuxt3 项目，此项目运行在 Docker 环境下，这是我们的 <code>Dockerfile</code> 文件：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:18.16.0-alpine3.17</span>

<span class="token instruction"><span class="token keyword">ENV</span> NODE_OPTIONS=--max-old-space-size=4096 <span class="token operator">\\</span>
    TZ=Asia/Shanghai <span class="token operator">\\</span>
    LANG=C.UTF-8 <span class="token operator">\\</span>
    LANGUAGE=C.UTF-8 <span class="token operator">\\</span>
    LC_ALL=C.UTF-8</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> <span class="token variable">$PWD</span>/.output ./.output/</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 3000</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;node&quot;</span>, <span class="token string">&quot;.output/server/index.mjs&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们的部署脚本 <code>deploy.sh</code> 如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pushd</span> /home/admin/
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;locked_deploy.sock&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">else</span>
  <span class="token function">touch</span> locked_deploy.sock
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;dist.zip&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">sleep</span> <span class="token number">60</span>
  <span class="token function">unzip</span> <span class="token parameter variable">-qo</span> dist.zip <span class="token parameter variable">-d</span> repo/.output
  <span class="token function">docker</span> stop test-nuxt-1
  <span class="token function">docker</span> <span class="token function">rm</span> test-nuxt-1
  <span class="token function">docker</span> rmi test-nuxt <span class="token parameter variable">-f</span>

  <span class="token builtin class-name">cd</span> repo
  <span class="token function">docker</span> build <span class="token builtin class-name">.</span> <span class="token parameter variable">-t</span> test-nuxt
  <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 <span class="token parameter variable">--name</span> test-nuxt-1 test-nuxt

  <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
  <span class="token function">rm</span> repo/.output <span class="token parameter variable">-rf</span>
  <span class="token function">rm</span> dist.zip <span class="token parameter variable">-rf</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;not found!&#39;</span>
<span class="token keyword">fi</span>

<span class="token function">rm</span> locked_deploy.sock
<span class="token function">popd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的步骤和上面的一样，设置好定时任务后，每次运行 <code>release.sh</code> 脚本后，都会自动部署到服务器上。</p>`,16);function w(D,z){const t=l("router-link"),p=l("CodeTabs");return d(),r("div",null,[m,n("nav",k,[n("ul",null,[n("li",null,[e(t,{to:"#1-cicd"},{default:a(()=>[s("1. CI/CD")]),_:1})]),n("li",null,[e(t,{to:"#2-通过定时任务实现自动化部署"},{default:a(()=>[s("2. 通过定时任务实现自动化部署")]),_:1})]),n("li",null,[e(t,{to:"#3-部署-docker-项目"},{default:a(()=>[s("3. 部署 Docker 项目")]),_:1})])])]),b,h,f,g,y,e(p,{id:"21",data:[{id:"Linux"},{id:"Windows"}]},{title0:a(({value:i,isActive:o})=>[s("Linux")]),title1:a(({value:i,isActive:o})=>[s("Windows")]),tab0:a(({value:i,isActive:o})=>[_]),tab1:a(({value:i,isActive:o})=>[C]),_:1}),x])}const T=c(v,[["render",w],["__file","auto-deploy.html.vue"]]),A=JSON.parse('{"path":"/notebook/deployment/auto-deploy.html","title":"自动化部署","lang":"zh-CN","frontmatter":{"description":"自动化部署 1. CI/CD CI/CD 是指持续集成（Continuous Integration）和持续部署（Continuous Deployment）。如果你正在使用 GitHub，那么你可以使用 GitHub Actions 来实现 CI/CD。如果你在维护大型项目，建议使用一些成熟的 CI/CD 系统来保证你的项目的可用性。 2. 通过定时...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/deployment/auto-deploy.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"自动化部署"}],["meta",{"property":"og:description","content":"自动化部署 1. CI/CD CI/CD 是指持续集成（Continuous Integration）和持续部署（Continuous Deployment）。如果你正在使用 GitHub，那么你可以使用 GitHub Actions 来实现 CI/CD。如果你在维护大型项目，建议使用一些成熟的 CI/CD 系统来保证你的项目的可用性。 2. 通过定时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自动化部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. CI/CD","slug":"1-cicd","link":"#1-cicd","children":[]},{"level":2,"title":"2. 通过定时任务实现自动化部署","slug":"2-通过定时任务实现自动化部署","link":"#2-通过定时任务实现自动化部署","children":[]},{"level":2,"title":"3. 部署 Docker 项目","slug":"3-部署-docker-项目","link":"#3-部署-docker-项目","children":[]}],"git":{"createdTime":1684642392000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":2.58,"words":773},"filePathRelative":"notebook/deployment/auto-deploy.md","localizedDate":"2023年5月21日","autoDesc":true}');export{T as comp,A as data};
