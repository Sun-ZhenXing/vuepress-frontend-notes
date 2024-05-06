import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as i,c as D,b as s,a as l,w as a,e as n,d}from"./app-FEcl1joV.js";const C={},y=s("h1",{id:"自动化部署",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自动化部署"},[s("span",null,"自动化部署")])],-1),u={class:"table-of-contents"},h=s("h2",{id:"1-cicd",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#1-cicd"},[s("span",null,"1. CI/CD")])],-1),A=s("p",null,"CI/CD 是指持续集成（Continuous Integration）和持续部署（Continuous Deployment）。如果你正在使用 GitHub，那么你可以使用 GitHub Actions 来实现 CI/CD。如果你在维护大型项目，建议使用一些成熟的 CI/CD 系统来保证你的项目的可用性。",-1),E=s("h2",{id:"2-通过定时任务实现自动化部署",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#2-通过定时任务实现自动化部署"},[s("span",null,"2. 通过定时任务实现自动化部署")])],-1),m=s("p",null,"下面使用简单的定时任务来实现自动化部署，仅用于个人项目或测试。正式环境中请勿使用此方法，推荐使用成熟的 CI/CD 系统。",-1),k=s("p",null,[n("首先，可用使用 "),s("code",null,"release.sh"),n(" 脚本来实现自动化编译并上传到服务器，脚本内容如下：")],-1),b=s("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A9955"}},"# release.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"pnpm"),s("span",{style:{color:"#CE9178"}}," build")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"zip"),s("span",{style:{color:"#569CD6"}}," -r"),s("span",{style:{color:"#CE9178"}}," dist.zip"),s("span",{style:{color:"#CE9178"}}," ./.output/"),s("span",{style:{color:"#569CD6"}},"*")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"scp"),s("span",{style:{color:"#569CD6"}}," -i"),s("span",{style:{color:"#CE9178"}}," root-user.pem"),s("span",{style:{color:"#CE9178"}}," dist.zip"),s("span",{style:{color:"#CE9178"}}," root@123.123.123.123:/home/admin/")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"rm"),s("span",{style:{color:"#CE9178"}}," dist.zip")]),n(`
`),s("span",{class:"line"})])])],-1),f=s("div",{class:"language-bat","data-ext":"bat","data-title":"bat"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"@"),s("span",{style:{color:"#569CD6"}},"REM"),s("span",{style:{color:"#6A9955"}}," release.cmd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"@"),s("span",{style:{color:"#569CD6"}},"echo"),s("span",{style:{color:"#569CD6"}}," off")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"call"),s("span",{style:{color:"#D4D4D4"}}," pnpm build")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"@"),s("span",{style:{color:"#569CD6"}},"REM"),s("span",{style:{color:"#6A9955"}}," use 7z to zip")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"7z a dist.zip ./.output/* -r")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"@"),s("span",{style:{color:"#569CD6"}},"REM"),s("span",{style:{color:"#6A9955"}}," use WSL to upload file, you can change to other tools")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"bash -c "),s("span",{style:{color:"#CE9178"}},'"scp -i root-user.pem dist.zip root@123.123.123.123:/home/admin/"')]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"del"),s("span",{style:{color:"#D4D4D4"}}," dist.zip")]),n(`
`),s("span",{class:"line"})])])],-1),g=d(`<p>下面，我们在服务器上编写一个 <code>deploy.sh</code> 脚本，用于自动部署。我们以部署静态文件为例：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">pushd /home/admin/</span></span>
<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#CE9178;"> &#39;deploy static files ...&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> [ -f </span><span style="color:#CE9178;">&quot;dist.zip&quot;</span><span style="color:#D4D4D4;"> ];</span><span style="color:#C586C0;">then</span></span>
<span class="line"><span style="color:#DCDCAA;">  rm</span><span style="color:#CE9178;"> /usr/share/nginx/html/docs/</span><span style="color:#569CD6;">*</span><span style="color:#569CD6;"> -rf</span></span>
<span class="line"><span style="color:#DCDCAA;">  unzip</span><span style="color:#569CD6;"> -qo</span><span style="color:#CE9178;"> dist.zip</span><span style="color:#569CD6;"> -d</span><span style="color:#CE9178;"> /usr/share/nginx/html/docs</span></span>
<span class="line"><span style="color:#DCDCAA;">  rm</span><span style="color:#CE9178;"> dist.zip</span><span style="color:#569CD6;"> -rf</span></span>
<span class="line"><span style="color:#C586C0;">else</span></span>
<span class="line"><span style="color:#DCDCAA;">  echo</span><span style="color:#CE9178;"> &quot;dist.zip not found!&quot;</span></span>
<span class="line"><span style="color:#C586C0;">fi</span></span>
<span class="line"></span></code></pre></div><div class="hint-container warning"><p class="hint-container-title">文件不完整</p><p>以上脚本存在问题，当上传未完成但文件存在时，会导致文件错误部署，另外，如果部署过程过长而导致两次部署任务重叠也会破坏任务。此时使用下面的脚本，给任务加锁，避免任务重叠。</p><p>脚本中的 <code>sleep 60</code> 为了防止文件上传未完成就开始部署，可以根据实际情况调整。</p></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">pushd /home/admin/</span></span>
<span class="line"><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> [ -f </span><span style="color:#CE9178;">&quot;locked_deploy.sock&quot;</span><span style="color:#D4D4D4;"> ];</span><span style="color:#C586C0;">then</span></span>
<span class="line"><span style="color:#DCDCAA;">  exit</span></span>
<span class="line"><span style="color:#C586C0;">else</span></span>
<span class="line"><span style="color:#DCDCAA;">  touch</span><span style="color:#CE9178;"> locked_deploy.sock</span></span>
<span class="line"><span style="color:#C586C0;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#CE9178;"> &#39;deploy static files ...&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> [ -f </span><span style="color:#CE9178;">&quot;dist.zip&quot;</span><span style="color:#D4D4D4;"> ];</span><span style="color:#C586C0;">then</span></span>
<span class="line"><span style="color:#DCDCAA;">  sleep</span><span style="color:#B5CEA8;"> 60</span></span>
<span class="line"><span style="color:#DCDCAA;">  rm</span><span style="color:#CE9178;"> /usr/share/nginx/html/docs/</span><span style="color:#569CD6;">*</span><span style="color:#569CD6;"> -rf</span></span>
<span class="line"><span style="color:#DCDCAA;">  unzip</span><span style="color:#569CD6;"> -qo</span><span style="color:#CE9178;"> dist.zip</span><span style="color:#569CD6;"> -d</span><span style="color:#CE9178;"> /usr/share/nginx/html/docs</span></span>
<span class="line"><span style="color:#DCDCAA;">  rm</span><span style="color:#CE9178;"> dist.zip</span><span style="color:#569CD6;"> -rf</span></span>
<span class="line"><span style="color:#C586C0;">else</span></span>
<span class="line"><span style="color:#DCDCAA;">  echo</span><span style="color:#CE9178;"> &quot;dist.zip not found!&quot;</span></span>
<span class="line"><span style="color:#C586C0;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">rm</span><span style="color:#CE9178;"> locked_deploy.sock</span></span>
<span class="line"><span style="color:#D4D4D4;">popd</span></span>
<span class="line"></span></code></pre></div><p>为了让脚本能定期运行，我们需要使用 <code>crontab</code> 命令计划定时任务，下面创建定时任务：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">crontab</span><span style="color:#569CD6;"> -e</span></span>
<span class="line"></span></code></pre></div><p>建议使用 Root 用户来创建定时任务，当需要以其他用户身份运行时，可以使用 <code>su</code> 命令来切换用户。</p><p>然后指定定时任务的执行时间，比如每分钟执行一次：</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">* * * * * /bin/bash /home/admin/deploy.sh</span></span>
<span class="line"></span></code></pre></div><p>现在，每次运行 <code>release.sh</code> 脚本后，都会自动部署到服务器上。</p><h2 id="3-部署-docker-项目" tabindex="-1"><a class="header-anchor" href="#3-部署-docker-项目"><span>3. 部署 Docker 项目</span></a></h2><p>下面我们部署一个 Nuxt3 项目，此项目运行在 Docker 环境下，这是我们的 <code>Dockerfile</code> 文件：</p><div class="language-docker" data-ext="docker" data-title="docker"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">FROM</span><span style="color:#D4D4D4;"> node:18.16.0-alpine3.17</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">ENV</span><span style="color:#D4D4D4;"> NODE_OPTIONS=--max-old-space-size=4096 \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    TZ=Asia/Shanghai \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    LANG=C.UTF-8 \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    LANGUAGE=C.UTF-8 \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    LC_ALL=C.UTF-8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">WORKDIR</span><span style="color:#D4D4D4;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">COPY</span><span style="color:#D4D4D4;"> $PWD/.output ./.output/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">EXPOSE</span><span style="color:#D4D4D4;"> 3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">CMD</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&quot;node&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;.output/server/index.mjs&quot;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre></div><p>我们的部署脚本 <code>deploy.sh</code> 如下：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">pushd /home/admin/</span></span>
<span class="line"><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> [ -f </span><span style="color:#CE9178;">&quot;locked_deploy.sock&quot;</span><span style="color:#D4D4D4;"> ];</span><span style="color:#C586C0;">then</span></span>
<span class="line"><span style="color:#DCDCAA;">  exit</span></span>
<span class="line"><span style="color:#C586C0;">else</span></span>
<span class="line"><span style="color:#DCDCAA;">  touch</span><span style="color:#CE9178;"> locked_deploy.sock</span></span>
<span class="line"><span style="color:#C586C0;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> [ -f </span><span style="color:#CE9178;">&quot;dist.zip&quot;</span><span style="color:#D4D4D4;"> ];</span><span style="color:#C586C0;">then</span></span>
<span class="line"><span style="color:#DCDCAA;">  sleep</span><span style="color:#B5CEA8;"> 60</span></span>
<span class="line"><span style="color:#DCDCAA;">  unzip</span><span style="color:#569CD6;"> -qo</span><span style="color:#CE9178;"> dist.zip</span><span style="color:#569CD6;"> -d</span><span style="color:#CE9178;"> repo/.output</span></span>
<span class="line"><span style="color:#DCDCAA;">  docker</span><span style="color:#CE9178;"> stop</span><span style="color:#CE9178;"> test-nuxt-1</span></span>
<span class="line"><span style="color:#DCDCAA;">  docker</span><span style="color:#CE9178;"> rm</span><span style="color:#CE9178;"> test-nuxt-1</span></span>
<span class="line"><span style="color:#DCDCAA;">  docker</span><span style="color:#CE9178;"> rmi</span><span style="color:#CE9178;"> test-nuxt</span><span style="color:#569CD6;"> -f</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">  cd</span><span style="color:#CE9178;"> repo</span></span>
<span class="line"><span style="color:#DCDCAA;">  docker</span><span style="color:#CE9178;"> build</span><span style="color:#CE9178;"> .</span><span style="color:#569CD6;"> -t</span><span style="color:#CE9178;"> test-nuxt</span></span>
<span class="line"><span style="color:#DCDCAA;">  docker</span><span style="color:#CE9178;"> run</span><span style="color:#569CD6;"> -d</span><span style="color:#569CD6;"> -p</span><span style="color:#CE9178;"> 3000:3000</span><span style="color:#569CD6;"> --name</span><span style="color:#CE9178;"> test-nuxt-1</span><span style="color:#CE9178;"> test-nuxt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">  cd</span><span style="color:#CE9178;"> ..</span></span>
<span class="line"><span style="color:#DCDCAA;">  rm</span><span style="color:#CE9178;"> repo/.output</span><span style="color:#569CD6;"> -rf</span></span>
<span class="line"><span style="color:#DCDCAA;">  rm</span><span style="color:#CE9178;"> dist.zip</span><span style="color:#569CD6;"> -rf</span></span>
<span class="line"><span style="color:#C586C0;">else</span></span>
<span class="line"><span style="color:#DCDCAA;">  echo</span><span style="color:#CE9178;"> &#39;not found!&#39;</span></span>
<span class="line"><span style="color:#C586C0;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">rm</span><span style="color:#CE9178;"> locked_deploy.sock</span></span>
<span class="line"><span style="color:#D4D4D4;">popd</span></span>
<span class="line"></span></code></pre></div><p>下面的步骤和上面的一样，设置好定时任务后，每次运行 <code>release.sh</code> 脚本后，都会自动部署到服务器上。</p>`,16);function _(x,v){const o=t("router-link"),c=t("CodeTabs");return i(),D("div",null,[y,s("nav",u,[s("ul",null,[s("li",null,[l(o,{to:"#1-cicd"},{default:a(()=>[n("1. CI/CD")]),_:1})]),s("li",null,[l(o,{to:"#2-通过定时任务实现自动化部署"},{default:a(()=>[n("2. 通过定时任务实现自动化部署")]),_:1})]),s("li",null,[l(o,{to:"#3-部署-docker-项目"},{default:a(()=>[n("3. 部署 Docker 项目")]),_:1})])])]),h,A,E,m,k,l(c,{id:"21",data:[{id:"Linux"},{id:"Windows"}]},{title0:a(({value:e,isActive:p})=>[n("Linux")]),title1:a(({value:e,isActive:p})=>[n("Windows")]),tab0:a(({value:e,isActive:p})=>[b]),tab1:a(({value:e,isActive:p})=>[f]),_:1}),g])}const I=r(C,[["render",_],["__file","auto-deploy.html.vue"]]),T=JSON.parse('{"path":"/notebook/deployment/auto-deploy.html","title":"自动化部署","lang":"zh-CN","frontmatter":{"description":"自动化部署 1. CI/CD CI/CD 是指持续集成（Continuous Integration）和持续部署（Continuous Deployment）。如果你正在使用 GitHub，那么你可以使用 GitHub Actions 来实现 CI/CD。如果你在维护大型项目，建议使用一些成熟的 CI/CD 系统来保证你的项目的可用性。 2. 通过定时...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/deployment/auto-deploy.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"自动化部署"}],["meta",{"property":"og:description","content":"自动化部署 1. CI/CD CI/CD 是指持续集成（Continuous Integration）和持续部署（Continuous Deployment）。如果你正在使用 GitHub，那么你可以使用 GitHub Actions 来实现 CI/CD。如果你在维护大型项目，建议使用一些成熟的 CI/CD 系统来保证你的项目的可用性。 2. 通过定时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自动化部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. CI/CD","slug":"1-cicd","link":"#1-cicd","children":[]},{"level":2,"title":"2. 通过定时任务实现自动化部署","slug":"2-通过定时任务实现自动化部署","link":"#2-通过定时任务实现自动化部署","children":[]},{"level":2,"title":"3. 部署 Docker 项目","slug":"3-部署-docker-项目","link":"#3-部署-docker-项目","children":[]}],"git":{"createdTime":1684642392000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":2.58,"words":773},"filePathRelative":"notebook/deployment/auto-deploy.md","localizedDate":"2023年5月21日","autoDesc":true}');export{I as comp,T as data};
