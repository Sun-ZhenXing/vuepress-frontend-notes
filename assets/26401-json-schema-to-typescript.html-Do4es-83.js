import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as e}from"./app-C-lF8Tfs.js";const p={},t=e(`<h1 id="26401-json-schema-to-typescript" tabindex="-1"><a class="header-anchor" href="#26401-json-schema-to-typescript"><span>26401. ⚡Json Schema To Typescript</span></a></h1><p>&lt;题目描述&gt;</p><p>::: playground#ts 26401. Json Schema To Typescript</p><p>@file index.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// ============= Test Cases =============</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Equal<span class="token punctuation">,</span> Expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@type-challenges/utils&#39;</span>

<span class="token comment">// + Primitive types</span>
<span class="token keyword">type</span> <span class="token class-name">Type1</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected1</span> <span class="token operator">=</span> <span class="token builtin">string</span>
<span class="token keyword">type</span> <span class="token class-name">Result1</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type1<span class="token punctuation">,</span> Expected1<span class="token operator">&gt;&gt;</span>

<span class="token keyword">type</span> <span class="token class-name">Type2</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected2</span> <span class="token operator">=</span> <span class="token builtin">number</span>
<span class="token keyword">type</span> <span class="token class-name">Result2</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type2<span class="token punctuation">,</span> Expected2<span class="token operator">&gt;&gt;</span>

<span class="token keyword">type</span> <span class="token class-name">Type3</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;boolean&#39;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected3</span> <span class="token operator">=</span> <span class="token builtin">boolean</span>
<span class="token keyword">type</span> <span class="token class-name">Result3</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type3<span class="token punctuation">,</span> Expected3<span class="token operator">&gt;&gt;</span>
<span class="token comment">// - Primitive types</span>

<span class="token comment">// + Enums</span>
<span class="token keyword">type</span> <span class="token class-name">Type4</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span>
  <span class="token keyword">enum</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected4</span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">Result4</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type4<span class="token punctuation">,</span> Expected4<span class="token operator">&gt;&gt;</span>

<span class="token keyword">type</span> <span class="token class-name">Type5</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span>
  <span class="token keyword">enum</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected5</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span>
<span class="token keyword">type</span> <span class="token class-name">Result5</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type5<span class="token punctuation">,</span> Expected5<span class="token operator">&gt;&gt;</span>
<span class="token comment">// - Enums</span>

<span class="token comment">// + Object types</span>
<span class="token keyword">type</span> <span class="token class-name">Type6</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected6</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Result6</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type6<span class="token punctuation">,</span> Expected6<span class="token operator">&gt;&gt;</span>

<span class="token keyword">type</span> <span class="token class-name">Type7</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span>
  properties<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected7</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Result7</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type7<span class="token punctuation">,</span> Expected7<span class="token operator">&gt;&gt;</span>

<span class="token keyword">type</span> <span class="token class-name">Type8</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span>
  properties<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected8</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Result8</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type8<span class="token punctuation">,</span> Expected8<span class="token operator">&gt;&gt;</span>
<span class="token comment">// - Object types</span>

<span class="token comment">// + Arrays</span>
<span class="token keyword">type</span> <span class="token class-name">Type9</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;array&#39;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected9</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token class-name">Result9</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type9<span class="token punctuation">,</span> Expected9<span class="token operator">&gt;&gt;</span>

<span class="token keyword">type</span> <span class="token class-name">Type10</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;array&#39;</span>
  items<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected10</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token class-name">Result10</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type10<span class="token punctuation">,</span> Expected10<span class="token operator">&gt;&gt;</span>

<span class="token keyword">type</span> <span class="token class-name">Type11</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;array&#39;</span>
  items<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected11</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token class-name">Result11</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type11<span class="token punctuation">,</span> Expected11<span class="token operator">&gt;&gt;</span>
<span class="token comment">// - Arrays</span>

<span class="token comment">// + Mixed types</span>
<span class="token keyword">type</span> <span class="token class-name">Type12</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span>
  properties<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span>
      <span class="token keyword">enum</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    b<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected12</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span>
  b<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Result12</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type12<span class="token punctuation">,</span> Expected12<span class="token operator">&gt;&gt;</span>

<span class="token keyword">type</span> <span class="token class-name">Type13</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;array&#39;</span>
  items<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span>
    properties<span class="token operator">:</span> <span class="token punctuation">{</span>
      a<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected13</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token class-name">Result13</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type13<span class="token punctuation">,</span> Expected13<span class="token operator">&gt;&gt;</span>
<span class="token comment">// - Mixed types</span>

<span class="token comment">// + Required fields</span>
<span class="token keyword">type</span> <span class="token class-name">Type14</span> <span class="token operator">=</span> JSONSchema2TS<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span>
  properties<span class="token operator">:</span> <span class="token punctuation">{</span>
    req1<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span> <span class="token punctuation">}</span>
    req2<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span>
      properties<span class="token operator">:</span> <span class="token punctuation">{</span>
        a<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      required<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    add1<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span> <span class="token punctuation">}</span>
    add2<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;array&#39;</span>
      items<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  required<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;req1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;req2&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Expected14</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  req1<span class="token operator">:</span> <span class="token builtin">string</span>
  req2<span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
  add1<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  add2<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Result14</span> <span class="token operator">=</span> Expect<span class="token operator">&lt;</span>Equal<span class="token operator">&lt;</span>Type14<span class="token punctuation">,</span> Expected14<span class="token operator">&gt;&gt;</span>
<span class="token comment">// - Required fields</span>

<span class="token comment">// ============= Your Code Here =============</span>
<span class="token keyword">type</span> <span class="token class-name">JSONSchema2TS<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token builtin">any</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><details class="hint-container details"><summary>点击查看答案</summary><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 你的答案</span>
</code></pre></div></details>`,7),o=[t];function l(c,i){return n(),a("div",null,o)}const u=s(p,[["render",l],["__file","26401-json-schema-to-typescript.html.vue"]]),d=JSON.parse('{"path":"/notebook/typescript/type-challenges/26401-json-schema-to-typescript.html","title":"26401. ⚡Json Schema To Typescript","lang":"zh-CN","frontmatter":{"description":"26401. ⚡Json Schema To Typescript <题目描述> ::: playground#ts 26401. Json Schema To Typescript @file index.ts ::: 点击查看答案","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/typescript/type-challenges/26401-json-schema-to-typescript.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"26401. ⚡Json Schema To Typescript"}],["meta",{"property":"og:description","content":"26401. ⚡Json Schema To Typescript <题目描述> ::: playground#ts 26401. Json Schema To Typescript @file index.ts ::: 点击查看答案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"26401. ⚡Json Schema To Typescript\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1685259723000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"notebook/typescript/type-challenges/26401-json-schema-to-typescript.md","localizedDate":"2023年5月28日","autoDesc":true}');export{u as comp,d as data};
