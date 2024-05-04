import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-BdnEjZx0.js";const t={},p=e(`<h1 id="2257-minusone" tabindex="-1"><a class="header-anchor" href="#2257-minusone"><span>2257. ⚡Minusone</span></a></h1><p>&lt;题目描述&gt;</p><p>::: playground#ts 2257. Minusone</p><p>@file index.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// ============= Test Cases =============</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Equal<span class="token punctuation">,</span> Expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@type-challenges/utils&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">cases</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>MinusOne<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>MinusOne<span class="token operator">&lt;</span><span class="token number">55</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>MinusOne<span class="token operator">&lt;</span><span class="token number">3</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>MinusOne<span class="token operator">&lt;</span><span class="token number">100</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>MinusOne<span class="token operator">&lt;</span><span class="token number">1101</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token number">1100</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>MinusOne<span class="token operator">&lt;</span><span class="token number">0</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>MinusOne<span class="token operator">&lt;</span><span class="token number">9_007_199_254_740_992</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token number">9_007_199_254_740_991</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// ============= Your Code Here =============</span>
<span class="token keyword">type</span> <span class="token class-name">MinusOne<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token builtin">any</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><details class="hint-container details"><summary>点击查看答案</summary><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 你的答案</span>
</code></pre></div></details>`,7),o=[p];function l(c,r){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","2257-minusone.html.vue"]]),k=JSON.parse('{"path":"/notebook/typescript/type-challenges/2257-minusone.html","title":"2257. ⚡Minusone","lang":"zh-CN","frontmatter":{"description":"2257. ⚡Minusone <题目描述> ::: playground#ts 2257. Minusone @file index.ts ::: 点击查看答案","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/typescript/type-challenges/2257-minusone.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"2257. ⚡Minusone"}],["meta",{"property":"og:description","content":"2257. ⚡Minusone <题目描述> ::: playground#ts 2257. Minusone @file index.ts ::: 点击查看答案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2257. ⚡Minusone\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1685259723000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.28,"words":83},"filePathRelative":"notebook/typescript/type-challenges/2257-minusone.md","localizedDate":"2023年5月28日","autoDesc":true}');export{d as comp,k as data};
