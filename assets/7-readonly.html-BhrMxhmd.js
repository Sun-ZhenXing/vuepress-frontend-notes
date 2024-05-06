import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as e}from"./app-FEcl1joV.js";const l={},o=e(`<h1 id="7-readonly" tabindex="-1"><a class="header-anchor" href="#7-readonly"><span>7. Readonly</span></a></h1><p>实现 <code>Readonly&lt;T&gt;</code> 类型，将 <code>T</code> 的所有属性设置为只读的，这意味着无法重新分配所构造类型的属性。</p><p>::: playground#ts 7. Readonly</p><p>@file index.ts</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// ============= Test Cases =============</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Equal</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">Expect</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@type-challenges/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> cases</span><span style="color:#D4D4D4;"> = [</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">MyReadonly</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Todo1</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#4EC9B0;">Readonly</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Todo1</span><span style="color:#D4D4D4;">&gt;&gt;&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> Todo1</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  title</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#9CDCFE;">  description</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#9CDCFE;">  completed</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">boolean</span></span>
<span class="line"><span style="color:#9CDCFE;">  meta</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    author</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// ============= Your Code Here =============</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> MyReadonly</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">any</span></span>
<span class="line"></span></code></pre></div><p>:::</p><details class="hint-container details"><summary>点击查看答案</summary><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> MyReadonly</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt; = {</span></span>
<span class="line"><span style="color:#569CD6;">  readonly</span><span style="color:#D4D4D4;"> [</span><span style="color:#4EC9B0;">K</span><span style="color:#569CD6;"> in</span><span style="color:#569CD6;"> keyof</span><span style="color:#4EC9B0;"> T</span><span style="color:#D4D4D4;">]: </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">[</span><span style="color:#4EC9B0;">K</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div></details>`,7),p=[o];function t(c,r){return n(),a("div",null,p)}const D=s(l,[["render",t],["__file","7-readonly.html.vue"]]),d=JSON.parse('{"path":"/notebook/typescript/type-challenges/7-readonly.html","title":"7. Readonly","lang":"zh-CN","frontmatter":{"description":"7. Readonly 实现 Readonly<T> 类型，将 T 的所有属性设置为只读的，这意味着无法重新分配所构造类型的属性。 ::: playground#ts 7. Readonly @file index.ts ::: 点击查看答案","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/typescript/type-challenges/7-readonly.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"7. Readonly"}],["meta",{"property":"og:description","content":"7. Readonly 实现 Readonly<T> 类型，将 T 的所有属性设置为只读的，这意味着无法重新分配所构造类型的属性。 ::: playground#ts 7. Readonly @file index.ts ::: 点击查看答案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7. Readonly\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1685026867000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.34,"words":101},"filePathRelative":"notebook/typescript/type-challenges/7-readonly.md","localizedDate":"2023年5月25日","autoDesc":true}');export{D as comp,d as data};
