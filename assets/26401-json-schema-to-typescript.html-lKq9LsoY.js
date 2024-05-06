import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as p}from"./app-FEcl1joV.js";const l={},o=p(`<h1 id="26401-json-schema-to-typescript" tabindex="-1"><a class="header-anchor" href="#26401-json-schema-to-typescript"><span>26401. ⚡Json Schema To Typescript</span></a></h1><p>&lt;题目描述&gt;</p><p>::: playground#ts 26401. Json Schema To Typescript</p><p>@file index.ts</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// ============= Test Cases =============</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Equal</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">Expect</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@type-challenges/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// + Primitive types</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type1</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected1</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result1</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type1</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected1</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type2</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;number&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected2</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result2</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type2</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected2</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type3</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;boolean&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected3</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">boolean</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result3</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type3</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected3</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"><span style="color:#6A9955;">// - Primitive types</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// + Enums</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type4</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">  enum</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;b&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;c&#39;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected4</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;b&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;c&#39;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result4</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type4</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected4</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type5</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;number&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">  enum</span><span style="color:#D4D4D4;">: [</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected5</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;"> | </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;"> | </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result5</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type5</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected5</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"><span style="color:#6A9955;">// - Enums</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// + Object types</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type6</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;object&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected6</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result6</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type6</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected6</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type7</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;object&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">  properties</span><span style="color:#D4D4D4;">: {}</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected7</span><span style="color:#D4D4D4;"> = {}</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result7</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type7</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected7</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type8</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;object&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">  properties</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    a</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">      type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected8</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#9CDCFE;">  a</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result8</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type8</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected8</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"><span style="color:#6A9955;">// - Object types</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// + Arrays</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type9</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;array&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected9</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result9</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type9</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected9</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type10</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;array&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">  items</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected10</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result10</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type10</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected10</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type11</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;array&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">  items</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;object&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected11</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;[]</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result11</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type11</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected11</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"><span style="color:#6A9955;">// - Arrays</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// + Mixed types</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type12</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;object&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">  properties</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    a</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">      type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">      enum</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;b&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;c&#39;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#9CDCFE;">    b</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">      type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;number&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected12</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#9CDCFE;">  a</span><span style="color:#D4D4D4;">?: </span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;b&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;c&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">  b</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result12</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type12</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected12</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type13</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;array&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">  items</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;object&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">    properties</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">      a</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">        type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected13</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#9CDCFE;">  a</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}[]</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result13</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type13</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected13</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"><span style="color:#6A9955;">// - Mixed types</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// + Required fields</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Type14</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;object&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">  properties</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    req1</span><span style="color:#D4D4D4;">: { </span><span style="color:#9CDCFE;">type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;string&#39;</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#9CDCFE;">    req2</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">      type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;object&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">      properties</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">        a</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;number&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#9CDCFE;">      required</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#9CDCFE;">    add1</span><span style="color:#D4D4D4;">: { </span><span style="color:#9CDCFE;">type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;string&#39;</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#9CDCFE;">    add2</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">      type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;array&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">      items</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">        type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;number&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#9CDCFE;">  required</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&#39;req1&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;req2&#39;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Expected14</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#9CDCFE;">  req1</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#9CDCFE;">  req2</span><span style="color:#D4D4D4;">: { </span><span style="color:#9CDCFE;">a</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#9CDCFE;">  add1</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#9CDCFE;">  add2</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> Result14</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Expect</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Equal</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type14</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Expected14</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"><span style="color:#6A9955;">// - Required fields</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// ============= Your Code Here =============</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> JSONSchema2TS</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">any</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>:::</p><details class="hint-container details"><summary>点击查看答案</summary><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 你的答案</span></span>
<span class="line"></span></code></pre></div></details>`,7),e=[o];function t(c,D){return n(),a("div",null,e)}const C=s(l,[["render",t],["__file","26401-json-schema-to-typescript.html.vue"]]),E=JSON.parse('{"path":"/notebook/typescript/type-challenges/26401-json-schema-to-typescript.html","title":"26401. ⚡Json Schema To Typescript","lang":"zh-CN","frontmatter":{"description":"26401. ⚡Json Schema To Typescript <题目描述> ::: playground#ts 26401. Json Schema To Typescript @file index.ts ::: 点击查看答案","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/typescript/type-challenges/26401-json-schema-to-typescript.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"26401. ⚡Json Schema To Typescript"}],["meta",{"property":"og:description","content":"26401. ⚡Json Schema To Typescript <题目描述> ::: playground#ts 26401. Json Schema To Typescript @file index.ts ::: 点击查看答案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"26401. ⚡Json Schema To Typescript\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1685259723000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"notebook/typescript/type-challenges/26401-json-schema-to-typescript.md","localizedDate":"2023年5月28日","autoDesc":true}');export{C as comp,E as data};
