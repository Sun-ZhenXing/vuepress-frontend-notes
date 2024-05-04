import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as p,c as r,b as e,a as o,w as t,d,e as c}from"./app-BdnEjZx0.js";const l={},i=e("h1",{id:"corepack---nodejs-包管理器的管理器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#corepack---nodejs-包管理器的管理器"},[e("span",null,"corepack - Node.js 包管理器的管理器")])],-1),h={class:"table-of-contents"},m=d(`<h2 id="1-简介" tabindex="-1"><a class="header-anchor" href="#1-简介"><span>1. 简介</span></a></h2><p><code>corepack</code> 是一个 Node.js 包管理器的管理器，它可以帮助你管理全局的 Node.js 包管理器，例如 <code>yarn</code> 和 <code>pnpm</code>。</p><p><code>corepack</code> 从 Node.js 14.19.0 开始就包含在 Node.js 中，你可以通过 <code>corepack</code> 命令来使用它。</p><h2 id="2-安装" tabindex="-1"><a class="header-anchor" href="#2-安装"><span>2. 安装</span></a></h2><p>如果你还没有使用过 <code>corepack</code>，你可以通过以下命令来激活它：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
</code></pre></div><p>在一些系统上这需要管理员权限。</p><h2 id="3-使用" tabindex="-1"><a class="header-anchor" href="#3-使用"><span>3. 使用</span></a></h2><p>查看帮助：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>corepack <span class="token parameter variable">--help</span>
</code></pre></div><p>使用 <code>corepack</code> 来激活 <code>pnpm</code> 的最新版本：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>corepack prepare pnpm@latest <span class="token parameter variable">--activate</span>
</code></pre></div><p>也可以指定版本激活：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>corepack prepare pnpm@7 <span class="token parameter variable">--activate</span>
</code></pre></div><p>激活 <code>yarn</code> 最新版本：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>corepack prepare yarn@<span class="token operator">&lt;</span>版本<span class="token operator">&gt;</span> <span class="token parameter variable">--activate</span>
</code></pre></div><h2 id="4-使用代理" tabindex="-1"><a class="header-anchor" href="#4-使用代理"><span>4. 使用代理</span></a></h2><p>经过验证，大陆的网络环境下，使用 <code>corepack</code> 会出现网络问题，部分时间无法下载依赖。</p><p>可以通过设置 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 环境变量来使用代理，例如：</p><p>在 Windows 上，<code>corepack</code> 不支持 SOCKS5 协议，所以 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 需要使用 <code>http://</code> 协议。</p>`,20);function u(k,g){const a=n("router-link");return p(),r("div",null,[i,e("nav",h,[e("ul",null,[e("li",null,[o(a,{to:"#1-简介"},{default:t(()=>[c("1. 简介")]),_:1})]),e("li",null,[o(a,{to:"#2-安装"},{default:t(()=>[c("2. 安装")]),_:1})]),e("li",null,[o(a,{to:"#3-使用"},{default:t(()=>[c("3. 使用")]),_:1})]),e("li",null,[o(a,{to:"#4-使用代理"},{default:t(()=>[c("4. 使用代理")]),_:1})])])]),m])}const b=s(l,[["render",u],["__file","index.html.vue"]]),N=JSON.parse('{"path":"/tools/corepack/","title":"corepack - Node.js 包管理器的管理器","lang":"zh-CN","frontmatter":{"description":"corepack - Node.js 包管理器的管理器 1. 简介 corepack 是一个 Node.js 包管理器的管理器，它可以帮助你管理全局的 Node.js 包管理器，例如 yarn 和 pnpm。 corepack 从 Node.js 14.19.0 开始就包含在 Node.js 中，你可以通过 corepack 命令来使用它。 2. 安装...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/tools/corepack/"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"corepack - Node.js 包管理器的管理器"}],["meta",{"property":"og:description","content":"corepack - Node.js 包管理器的管理器 1. 简介 corepack 是一个 Node.js 包管理器的管理器，它可以帮助你管理全局的 Node.js 包管理器，例如 yarn 和 pnpm。 corepack 从 Node.js 14.19.0 开始就包含在 Node.js 中，你可以通过 corepack 命令来使用它。 2. 安装..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"corepack - Node.js 包管理器的管理器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"1-简介","link":"#1-简介","children":[]},{"level":2,"title":"2. 安装","slug":"2-安装","link":"#2-安装","children":[]},{"level":2,"title":"3. 使用","slug":"3-使用","link":"#3-使用","children":[]},{"level":2,"title":"4. 使用代理","slug":"4-使用代理","link":"#4-使用代理","children":[]}],"git":{"createdTime":1700303763000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"tools/corepack/index.md","localizedDate":"2023年11月18日","autoDesc":true}');export{b as comp,N as data};
