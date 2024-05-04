import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-BdnEjZx0.js";const e={},p=t(`<h1 id="298-length-of-string" tabindex="-1"><a class="header-anchor" href="#298-length-of-string"><span>298. Length Of String</span></a></h1><p>&lt;题目描述&gt;</p><p>::: playground#ts 298. Length Of String</p><p>@file index.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// ============= Test Cases =============</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Equal<span class="token punctuation">,</span> Expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@type-challenges/utils&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">cases</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>LengthOfString<span class="token operator">&lt;</span><span class="token string">&#39;&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>LengthOfString<span class="token operator">&lt;</span><span class="token string">&#39;kumiko&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>LengthOfString<span class="token operator">&lt;</span><span class="token string">&#39;reina&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>LengthOfString<span class="token operator">&lt;</span><span class="token string">&#39;Sound! Euphonium&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// ============= Your Code Here =============</span>
<span class="token keyword">type</span> <span class="token class-name">LengthOfString<span class="token operator">&lt;</span><span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token builtin">any</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><details class="hint-container details"><summary>点击查看答案</summary><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">StringToTuple<span class="token operator">&lt;</span>
  <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token constant">R</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Char<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Rest<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">?</span>
  StringToTuple<span class="token operator">&lt;</span>Rest<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token constant">R</span><span class="token punctuation">,</span> Char<span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token constant">R</span>

<span class="token keyword">type</span> <span class="token class-name">LengthOfString<span class="token operator">&lt;</span><span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> StringToTuple<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token string">&#39;length&#39;</span><span class="token punctuation">]</span>
</code></pre></div></details>`,7),o=[p];function l(c,r){return s(),a("div",null,o)}const u=n(e,[["render",l],["__file","298-length-of-string.html.vue"]]),g=JSON.parse('{"path":"/notebook/typescript/type-challenges/298-length-of-string.html","title":"298. Length Of String","lang":"zh-CN","frontmatter":{"description":"298. Length Of String <题目描述> ::: playground#ts 298. Length Of String @file index.ts ::: 点击查看答案","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/typescript/type-challenges/298-length-of-string.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"298. Length Of String"}],["meta",{"property":"og:description","content":"298. Length Of String <题目描述> ::: playground#ts 298. Length Of String @file index.ts ::: 点击查看答案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"298. Length Of String\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1685259723000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"notebook/typescript/type-challenges/298-length-of-string.md","localizedDate":"2023年5月28日","autoDesc":true}');export{u as comp,g as data};
