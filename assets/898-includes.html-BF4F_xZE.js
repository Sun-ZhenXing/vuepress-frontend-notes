import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-BdnEjZx0.js";const p={},o=t(`<h1 id="898-includes" tabindex="-1"><a class="header-anchor" href="#898-includes"><span>898. Includes</span></a></h1><p>&lt;题目描述&gt;</p><p>::: playground#ts 898. Includes</p><p>@file index.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// ============= Test Cases =============</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Equal<span class="token punctuation">,</span> Expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@type-challenges/utils&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">cases</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token string">&#39;Kars&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Esidisi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wamuu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Santana&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;Kars&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token string">&#39;Kars&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Esidisi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wamuu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Santana&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;Dio&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token string">&#39;A&#39;</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token string">&#39;A&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">readonly</span> a<span class="token operator">:</span> <span class="token string">&#39;A&#39;</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token keyword">readonly</span> a<span class="token operator">:</span> <span class="token string">&#39;A&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token string">&#39;A&#39;</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
  Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// ============= Your Code Here =============</span>
<span class="token keyword">type</span> <span class="token class-name">Includes<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token builtin">any</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><details class="hint-container details"><summary>点击查看答案</summary><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Includes<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">readonly</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token keyword">infer</span> <span class="token constant">F</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token keyword">infer</span> <span class="token constant">R</span><span class="token punctuation">]</span> <span class="token operator">?</span>
  <span class="token punctuation">(</span>Equal<span class="token operator">&lt;</span><span class="token constant">F</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">true</span></span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> Includes<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token boolean">false</span>
</code></pre></div></details>`,7),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","898-includes.html.vue"]]),d=JSON.parse('{"path":"/notebook/typescript/type-challenges/898-includes.html","title":"898. Includes","lang":"zh-CN","frontmatter":{"description":"898. Includes <题目描述> ::: playground#ts 898. Includes @file index.ts ::: 点击查看答案","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/typescript/type-challenges/898-includes.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"898. Includes"}],["meta",{"property":"og:description","content":"898. Includes <题目描述> ::: playground#ts 898. Includes @file index.ts ::: 点击查看答案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"898. Includes\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1685192661000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.68,"words":204},"filePathRelative":"notebook/typescript/type-challenges/898-includes.md","localizedDate":"2023年5月27日","autoDesc":true}');export{i as comp,d as data};
