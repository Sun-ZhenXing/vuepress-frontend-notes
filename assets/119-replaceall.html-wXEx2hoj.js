import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as l,d as n}from"./app-FEcl1joV.js";const o={},p=n(`<h1 id="119-replaceall" tabindex="-1"><a class="header-anchor" href="#119-replaceall"><span>119. Replaceall</span></a></h1><p>&lt;题目描述&gt;</p><p>::: playground#ts 119. Replaceall</p><p>@file index.ts</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// ============= Test Cases =============</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Equal</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">Expect</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@type-challenges/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> cases</span><span style="color:#D4D4D4;"> = [</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;foobar&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;bar&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;foo&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#CE9178;">&#39;foofoo&#39;</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;foobar&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;bag&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;foo&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#CE9178;">&#39;foobar&#39;</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;foobarbar&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;bar&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;foo&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#CE9178;">&#39;foofoofoo&#39;</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;t y p e s&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39; &#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#CE9178;">&#39;types&#39;</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;foobarbar&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;foo&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#CE9178;">&#39;foobarbar&#39;</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;barfoo&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;bar&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;foo&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#CE9178;">&#39;foofoo&#39;</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;foobarfoobar&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;ob&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;b&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#CE9178;">&#39;fobarfobar&#39;</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;foboorfoboar&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;bo&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;b&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#CE9178;">&#39;foborfobar&#39;</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#4EC9B0;">  Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">&gt;, </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// ============= Your Code Here =============</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">S</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">From</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">To</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> string</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">any</span></span>
<span class="line"></span></code></pre></div><p>:::</p><details class="hint-container details"><summary>点击查看答案</summary><p>注意不要重复替换，如果将 <code>\${L}\${To}\${ReplaceAll&lt;R, From, To&gt;}</code> 的 <code>\${To}</code> 放入递归的替换组中则出错。</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span></span>
<span class="line"><span style="color:#4EC9B0;">  S</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> string</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#4EC9B0;">  From</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> string</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#4EC9B0;">  To</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> string</span></span>
<span class="line"><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">From</span><span style="color:#569CD6;"> extends</span><span style="color:#CE9178;"> &#39;&#39;</span><span style="color:#D4D4D4;"> ? </span><span style="color:#4EC9B0;">S</span><span style="color:#D4D4D4;"> :</span></span>
<span class="line"><span style="color:#4EC9B0;">  S</span><span style="color:#569CD6;"> extends</span><span style="color:#CE9178;"> \`</span><span style="color:#569CD6;">\${</span><span style="color:#569CD6;">infer</span><span style="color:#4EC9B0;"> L</span><span style="color:#569CD6;">}\${</span><span style="color:#4EC9B0;">From</span><span style="color:#569CD6;">}\${</span><span style="color:#569CD6;">infer</span><span style="color:#4EC9B0;"> R</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;"> ?</span></span>
<span class="line"><span style="color:#CE9178;">  \`</span><span style="color:#569CD6;">\${</span><span style="color:#4EC9B0;">L</span><span style="color:#569CD6;">}\${</span><span style="color:#4EC9B0;">To</span><span style="color:#569CD6;">}\${</span><span style="color:#4EC9B0;">ReplaceAll</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">R</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">From</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">To</span><span style="color:#D4D4D4;">&gt;</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">S</span></span>
<span class="line"></span></code></pre></div></details>`,7),e=[p];function t(c,r){return a(),l("div",null,e)}const C=s(o,[["render",t],["__file","119-replaceall.html.vue"]]),E=JSON.parse('{"path":"/notebook/typescript/type-challenges/119-replaceall.html","title":"119. Replaceall","lang":"zh-CN","frontmatter":{"description":"119. Replaceall <题目描述> ::: playground#ts 119. Replaceall @file index.ts ::: 点击查看答案 注意不要重复替换，如果将 ${L}${To}${ReplaceAll<R, From, To>} 的 ${To} 放入递归的替换组中则出错。","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/typescript/type-challenges/119-replaceall.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"119. Replaceall"}],["meta",{"property":"og:description","content":"119. Replaceall <题目描述> ::: playground#ts 119. Replaceall @file index.ts ::: 点击查看答案 注意不要重复替换，如果将 ${L}${To}${ReplaceAll<R, From, To>} 的 ${To} 放入递归的替换组中则出错。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"119. Replaceall\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1685259723000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.56,"words":168},"filePathRelative":"notebook/typescript/type-challenges/119-replaceall.md","localizedDate":"2023年5月28日","autoDesc":true}');export{C as comp,E as data};
