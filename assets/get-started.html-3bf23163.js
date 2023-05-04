import{_ as l,M as c,p as i,q as u,Q as n,N as a,V as o,t as s,a1 as t}from"./framework-ee54e473.js";const r={},d=n("h1",{id:"创建项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建项目","aria-hidden":"true"},"#"),s(" 创建项目")],-1),k={class:"table-of-contents"},v=t(`<h2 id="_1-创建-nuxt3-项目" tabindex="-1"><a class="header-anchor" href="#_1-创建-nuxt3-项目" aria-hidden="true">#</a> 1. 创建 Nuxt3 项目</h2><p>本文全部使用 <code>pnpm</code> 作为包管理器，并全面使用 TypeScript。下面创建 Nuxt3 项目：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> dlx nuxi init twitter-clone
<span class="token builtin class-name">cd</span> twitter-clone
</code></pre></div>`,3),g={class:"hint-container details"},m=n("summary",null,"执行错误",-1),b={href:"https://blog.alexsun.top/posts/envs/use-hosts-file.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/nuxt/starter",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">-b</span> v3 https://github.com/nuxt/starter.git twitter-clone
<span class="token builtin class-name">cd</span> twitter-clone

<span class="token comment"># 删除 .git 文件夹</span>
<span class="token comment"># Linux/MacOS</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> .git
<span class="token comment"># Windows</span>
rd /s /q .git
</code></pre></div>`,1),f=t(`<p>现在安装依赖：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i
</code></pre></div><p>创建 Git 仓库：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;init&quot;</span>
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
</code></pre></div><p>添加 <code>@types/node</code> 依赖防止 VS Code 无法解析 Node 类型：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @types/node
</code></pre></div><p>打开 VS Code 进行开发：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>code <span class="token builtin class-name">.</span>
</code></pre></div><p>运行项目：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> dev <span class="token parameter variable">-o</span>
</code></pre></div><h2 id="_2-添加依赖" tabindex="-1"><a class="header-anchor" href="#_2-添加依赖" aria-hidden="true">#</a> 2. 添加依赖</h2><p>现在需要停止运行项目，然后添加依赖。</p><p>首先是 TailwindCSS 插件，由于 <code>@nuxtjs/tailwindcss</code> 依赖于 Webpack，所以先安装 Webpack：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> webpack
</code></pre></div>`,14),_={href:"https://tailwindcss.com/docs/guides/nuxtjs#3",target:"_blank",rel:"noopener noreferrer"},q=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @nuxtjs/tailwindcss tailwindcss@latest postcss@latest autoprefixer@latest
</code></pre></div><p>生成配置文件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> tailwindcss init <span class="token parameter variable">-p</span> <span class="token parameter variable">--ts</span>
</code></pre></div><p>配置 <code>nuxt.config.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// https://nuxt.com/docs/api/configuration/nuxt-config</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  modules<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;@nuxtjs/tailwindcss&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  postcss<span class="token operator">:</span> <span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      tailwindcss<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      autoprefixer<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 <code>tailwind.config.ts</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;tailwindcss&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">darkMode</span><span class="token operator">:</span> <span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">screens</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">xs</span><span class="token operator">:</span> <span class="token string">&quot;614px&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sm</span><span class="token operator">:</span> <span class="token string">&quot;1002px&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">md</span><span class="token operator">:</span> <span class="token string">&quot;1022px&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lg</span><span class="token operator">:</span> <span class="token string">&quot;1092px&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">xl</span><span class="token operator">:</span> <span class="token string">&quot;1280px&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">dim</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token number">50</span><span class="token operator">:</span> <span class="token string">&quot;#5F99F7&quot;</span><span class="token punctuation">,</span>
          <span class="token number">100</span><span class="token operator">:</span> <span class="token string">&quot;#5F99F7&quot;</span><span class="token punctuation">,</span>
          <span class="token number">200</span><span class="token operator">:</span> <span class="token string">&quot;#38444d&quot;</span><span class="token punctuation">,</span>
          <span class="token number">300</span><span class="token operator">:</span> <span class="token string">&quot;#202e3a&quot;</span><span class="token punctuation">,</span>
          <span class="token number">400</span><span class="token operator">:</span> <span class="token string">&quot;#253341&quot;</span><span class="token punctuation">,</span>
          <span class="token number">500</span><span class="token operator">:</span> <span class="token string">&quot;#5F99F7&quot;</span><span class="token punctuation">,</span>
          <span class="token number">600</span><span class="token operator">:</span> <span class="token string">&quot;#5F99F7&quot;</span><span class="token punctuation">,</span>
          <span class="token number">700</span><span class="token operator">:</span> <span class="token string">&quot;#192734&quot;</span><span class="token punctuation">,</span>
          <span class="token number">800</span><span class="token operator">:</span> <span class="token string">&quot;#162d40&quot;</span><span class="token punctuation">,</span>
          <span class="token number">900</span><span class="token operator">:</span> <span class="token string">&quot;#15202b&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;./components/**/*.{js,vue,ts}&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;./layouts/**/*.vue&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;./pages/**/*.vue&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;./plugins/**/*.{js,ts}&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;./nuxt.config.{js,ts}&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;./app.vue&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> satisfies Config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑 <code>App.vue</code> 文件，测试 TailWindCSS 是否生效：</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> darkMode <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ dark: darkMode }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-red-500 dark:text-dim-600<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Twitter clone<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>现在查看效果：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> dev <span class="token parameter variable">-o</span>
</code></pre></div><p>如果看到红色标题代表 TailWindCSS 已经生效了。</p><h2 id="_3-个性化配置" tabindex="-1"><a class="header-anchor" href="#_3-个性化配置" aria-hidden="true">#</a> 3. 个性化配置</h2><p>Vue 开发必备 <em>Vue Language Features (Volar)</em>，也可以额外安装 Vue TypeScript 插件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>code --install-extension Vue.volar
code --install-extension Vue.vscode-typescript-vue-plugin
</code></pre></div><p>这两个插件想必 Vue 开发者都已经安装了，就不放在推荐列表里了。</p><p>我们可能需要让 VS Code 的图标更美观一点，需要安装 <code>material-icon-theme</code> 主题：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>code --install-extension pkief.material-icon-theme
</code></pre></div><p>然后配置 <code>.vscode/settings.json</code>：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;material-icon-theme&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>如果没有安装 <em>Tailwind CSS IntelliSense</em>，那么可以安装此插件获得良好的开发体验：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>code --install-extension bradlc.vscode-tailwindcss
</code></pre></div><p>现在愉快地开发吧！</p>`,23);function y(w,S){const e=c("router-link"),p=c("ExternalLinkIcon");return i(),u("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[a(e,{to:"#_1-创建-nuxt3-项目"},{default:o(()=>[s("1. 创建 Nuxt3 项目")]),_:1})]),n("li",null,[a(e,{to:"#_2-添加依赖"},{default:o(()=>[s("2. 添加依赖")]),_:1})]),n("li",null,[a(e,{to:"#_3-个性化配置"},{default:o(()=>[s("3. 个性化配置")]),_:1})])])]),v,n("details",g,[m,n("p",null,[s("如果执行出错，可以参考 "),n("a",b,[s("配置 hosts 文件"),a(p)]),s("，也可以直接克隆 "),n("a",h,[s("nuxt-starter"),a(p)]),s("：")]),x]),f,n("p",null,[s("然后安装 TailwindCSS，这个步骤也可以参考 "),n("a",_,[s("TailwindCSS 官方文档"),a(p)]),s("：")]),q])}const V=l(r,[["render",y],["__file","get-started.html.vue"]]);export{V as default};
