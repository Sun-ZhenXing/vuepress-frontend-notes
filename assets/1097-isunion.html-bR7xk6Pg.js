import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as t}from"./app-BdnEjZx0.js";const p={},o=t(`<h1 id="1097-isunion" tabindex="-1"><a class="header-anchor" href="#1097-isunion"><span>1097. Isunion</span></a></h1><p>&lt;题目描述&gt;</p><p>::: playground#ts 1097. Isunion</p><p>@file index.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// ============= Test Cases =============</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Equal<span class="token punctuation">,</span> Expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@type-challenges/utils&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">cases</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;d&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token string">&#39;&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  <span class="token comment">// Cases where T resolves to a non-union type.</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">never</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token string">&#39;a&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>IsUnion<span class="token operator">&lt;</span><span class="token builtin">never</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// ============= Your Code Here =============</span>
<span class="token keyword">type</span> <span class="token class-name">UnionToInterSection<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">any</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">)</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span>arg <span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">R</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token builtin">never</span>
<span class="token keyword">type</span> <span class="token class-name">IsUnion<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">]</span> <span class="token keyword">extends</span> <span class="token punctuation">[</span>UnionToInterSection<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><details class="hint-container details"><summary>点击查看答案</summary><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 你的答案</span>
</code></pre></div></details>`,7),e=[o];function l(c,r){return n(),a("div",null,e)}const u=s(p,[["render",l],["__file","1097-isunion.html.vue"]]),d=JSON.parse('{"path":"/notebook/typescript/type-challenges/1097-isunion.html","title":"1097. Isunion","lang":"zh-CN","frontmatter":{"description":"1097. Isunion <题目描述> ::: playground#ts 1097. Isunion @file index.ts ::: 点击查看答案","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/typescript/type-challenges/1097-isunion.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"1097. Isunion"}],["meta",{"property":"og:description","content":"1097. Isunion <题目描述> ::: playground#ts 1097. Isunion @file index.ts ::: 点击查看答案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1097. Isunion\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1685756058000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.51,"words":154},"filePathRelative":"notebook/typescript/type-challenges/1097-isunion.md","localizedDate":"2023年6月3日","autoDesc":true}');export{u as comp,d as data};
