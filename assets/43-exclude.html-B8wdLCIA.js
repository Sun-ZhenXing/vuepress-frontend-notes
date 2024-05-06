import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,d as l}from"./app-FEcl1joV.js";const e={},p=l(`<h1 id="43-exclude" tabindex="-1"><a class="header-anchor" href="#43-exclude"><span>43. Exclude</span></a></h1><p>&lt;题目描述&gt;</p><p>::: playground#ts 43. Exclude</p><p>@file index.ts</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// ============= Test Cases =============</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Equal</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">Expect</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@type-challenges/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> cases</span><span style="color:#D4D4D4;"> = [</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">MyExclude</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;b&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;c&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#CE9178;">&#39;b&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;c&#39;</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">MyExclude</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;b&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;c&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;b&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#CE9178;">&#39;c&#39;</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">MyExclude</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;"> | (() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> void</span><span style="color:#D4D4D4;">), </span><span style="color:#4EC9B0;">Function</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// ============= Your Code Here =============</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> MyExclude</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">U</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">any</span></span>
<span class="line"></span></code></pre></div><p>:::</p><details class="hint-container details"><summary>点击查看答案</summary><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> MyExclude</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">U</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> U</span><span style="color:#D4D4D4;"> ? </span><span style="color:#4EC9B0;">never</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">T</span></span>
<span class="line"></span></code></pre></div></details>`,7),t=[p];function o(c,r){return a(),n("div",null,t)}const i=s(e,[["render",o],["__file","43-exclude.html.vue"]]),d=JSON.parse('{"path":"/notebook/typescript/type-challenges/43-exclude.html","title":"43. Exclude","lang":"zh-CN","frontmatter":{"description":"43. Exclude <题目描述> ::: playground#ts 43. Exclude @file index.ts ::: 点击查看答案","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/typescript/type-challenges/43-exclude.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"43. Exclude"}],["meta",{"property":"og:description","content":"43. Exclude <题目描述> ::: playground#ts 43. Exclude @file index.ts ::: 点击查看答案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"43. Exclude\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1685192661000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.26,"words":78},"filePathRelative":"notebook/typescript/type-challenges/43-exclude.md","localizedDate":"2023年5月27日","autoDesc":true}');export{i as comp,d as data};
