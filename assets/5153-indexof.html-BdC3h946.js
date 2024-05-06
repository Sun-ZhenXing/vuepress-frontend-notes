import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as l}from"./app-FEcl1joV.js";const p={},o=l(`<h1 id="5153-indexof" tabindex="-1"><a class="header-anchor" href="#5153-indexof"><span>5153. ⚡Indexof</span></a></h1><p>&lt;题目描述&gt;</p><p>::: playground#ts 5153. Indexof</p><p>@file index.ts</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// ============= Test Cases =============</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Equal</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">Expect</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@type-challenges/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> cases</span><span style="color:#D4D4D4;"> = [</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">IndexOf</span><span style="color:#D4D4D4;">&lt;[</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">], </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">IndexOf</span><span style="color:#D4D4D4;">&lt;[</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">9</span><span style="color:#D4D4D4;">], </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">IndexOf</span><span style="color:#D4D4D4;">&lt;[</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">], </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">&gt;, -</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">IndexOf</span><span style="color:#D4D4D4;">&lt;[</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;">], </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">IndexOf</span><span style="color:#D4D4D4;">&lt;[</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">], </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">IndexOf</span><span style="color:#D4D4D4;">&lt;[</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;">], </span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">IndexOf</span><span style="color:#D4D4D4;">&lt;[</span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">], </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// ============= Your Code Here =============</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> IndexOf</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> any</span><span style="color:#D4D4D4;">[], </span><span style="color:#4EC9B0;">U</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> number</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">any</span></span>
<span class="line"></span></code></pre></div><p>:::</p><details class="hint-container details"><summary>点击查看答案</summary><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 你的答案</span></span>
<span class="line"></span></code></pre></div></details>`,7),e=[o];function t(c,r){return n(),a("div",null,e)}const i=s(p,[["render",t],["__file","5153-indexof.html.vue"]]),E=JSON.parse('{"path":"/notebook/typescript/type-challenges/5153-indexof.html","title":"5153. ⚡Indexof","lang":"zh-CN","frontmatter":{"description":"5153. ⚡Indexof <题目描述> ::: playground#ts 5153. Indexof @file index.ts ::: 点击查看答案","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/typescript/type-challenges/5153-indexof.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"5153. ⚡Indexof"}],["meta",{"property":"og:description","content":"5153. ⚡Indexof <题目描述> ::: playground#ts 5153. Indexof @file index.ts ::: 点击查看答案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5153. ⚡Indexof\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1685756058000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.38,"words":114},"filePathRelative":"notebook/typescript/type-challenges/5153-indexof.md","localizedDate":"2023年6月3日","autoDesc":true}');export{i as comp,E as data};
