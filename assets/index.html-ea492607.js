import{_ as r,M as i,p as d,q as k,Q as n,N as e,V as a,t as s,a1 as v}from"./framework-7cf43551.js";const b={},m=n("h1",{id:"_1-sass-语法快速入门",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-sass-语法快速入门","aria-hidden":"true"},"#"),s(" 1. Sass 语法快速入门")],-1),h={class:"table-of-contents"},g=v(`<h2 id="_1-sass-简介" tabindex="-1"><a class="header-anchor" href="#_1-sass-简介" aria-hidden="true">#</a> 1. Sass 简介</h2><p>Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量（variables）、嵌套（nested rules）、混合（mixins）、导入（inline imports）等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>Sass 的特点：</p><ul><li>完全兼容 CSS3</li><li>在 CSS 基础上增加变量、嵌套、混合等功能</li><li>通过函数进行颜色值与属性值的运算</li><li>提供控制指令（control directives）等高级功能</li><li>自定义输出格式</li></ul><h2 id="_2-语法特点" tabindex="-1"><a class="header-anchor" href="#_2-语法特点" aria-hidden="true">#</a> 2. 语法特点</h2><h3 id="_2-1-sass-和-scss" tabindex="-1"><a class="header-anchor" href="#_2-1-sass-和-scss" aria-hidden="true">#</a> 2.1 Sass 和 Scss</h3><p>Sass 有两种语法格式。首先是 SCSS（Sassy CSS），这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是可用的。</p><p>另一种也是最早的 Sass 语法格式，被称为缩进格式（Indented Sass），不使用 <code>;</code> 和 <code>{}</code>，保存在 <code>.sass</code> 文件中，就像下面这样：</p><div class="language-sass line-numbers-mode" data-ext="sass"><pre class="language-sass"><code><span class="token selector">nav</span>
  <span class="token selector">ul</span>
<span class="token property-line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0</span>
<span class="token property-line">    <span class="token property">padding</span><span class="token punctuation">:</span> 0</span>
<span class="token property-line">    <span class="token property">list-style</span><span class="token punctuation">:</span> none</span>

  <span class="token selector">li</span>
<span class="token property-line">    <span class="token property">display</span><span class="token punctuation">:</span> inline-block</span>

  <span class="token selector">a</span>
<span class="token property-line">    <span class="token property">display</span><span class="token punctuation">:</span> block</span>
<span class="token property-line">    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px</span>
<span class="token property-line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但更广泛使用的是 CSS 超集的语法，即 SCSS，保存在 <code>.scss</code> 文件中。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">nav </span><span class="token punctuation">{</span>
  <span class="token selector">ul </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">li </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们只使用第二种语法，并把 <code>.scss</code> 文件就称为 Sass 文件。</p><h3 id="_2-2-使用变量" tabindex="-1"><a class="header-anchor" href="#_2-2-使用变量" aria-hidden="true">#</a> 2.2 使用变量</h3><p>Sass 可以使用下面的语法声明变量：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$variable</span></span><span class="token punctuation">:</span> value<span class="token punctuation">;</span>
</code></pre></div><p>变量值可以是任何有效的</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">.btn.danger </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$red</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token variable">$red</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这一点比 CSS 引入的原生变量早了很多。但是现在看来，我们使用原生的 CSS 变量会更加灵活，这也不是否定 Sass 的变量，它广泛用于静态编译。</p><p>与 CSS 属性不同，变量可以在 CSS 规则块定义之外存在。当变量定义在 CSS 规则块内，那么该变量只能在此规则块内使用。</p><p>这是 CSS 原生的变量语法，能够动态地改变页面的样式：</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--red</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn.danger</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--red<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-3-嵌套" tabindex="-1"><a class="header-anchor" href="#_2-3-嵌套" aria-hidden="true">#</a> 2.3 嵌套</h3><p>在传统的 CSS 中，我们注意到某些类（如 <code>.btn</code>）如果被经常使用，那么它会被重复写很多此，代码会因此臃肿而难以维护。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.btn a</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn.warning</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn.danger</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sass 使用嵌套将其变得优雅：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.btn </span><span class="token punctuation">{</span>
  <span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>.warning </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>.danger </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这还包括有 <code>&amp;</code> 符号的帮助，此外还有一些符号也非常有帮助：</p>`,27),y=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token selector"},".btn "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token selector"},[n("span",{class:"token parent important"},"&"),s(":focus ")]),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"outline"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},"> a "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #fff"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},"+ h2 "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},"~ p "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},[n("span",{class:"token parent important"},"&"),s("::after ")]),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"!"'),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},[n("span",{class:"token parent important"},"&"),s("-header ")]),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #fff"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".btn:focus"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"outline"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".btn > a"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #fff"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".btn + h2"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".btn ~ p"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".btn::after"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"!"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".btn-header"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #fff"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h3",{id:"_2-4-混合",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-4-混合","aria-hidden":"true"},"#"),s(" 2.4 混合")],-1),S=n("p",null,[s("混合允许我们复用重复的代码片段。使用 "),n("code",null,"@mixin"),s(" 定义一个复用片段，然后在指定位置使用 "),n("code",null,"@include"),s(" 引入即可。")],-1),x=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token keyword"},"@mixin"),s(),n("span",{class:"token selector"},"flex-column "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),s(" column"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" gray"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".card "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"@include"),s(" flex-column"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".aside "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"@include"),s(" flex-column"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".card"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),s(" column"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" gray"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".aside"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),s(" column"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" gray"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("p",null,"混合也支持参数传递，这样我们可以以编程的方式创建大量伪类。",-1),$=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token keyword"},"@mixin"),s(),n("span",{class:"token function"},"cool-button"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$color"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$bg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token variable"},"$color"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token variable"},"$bg"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".btn-orange "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"@include"),s(),n("span",{class:"token function"},"cool-button"),n("span",{class:"token punctuation"},"("),s("black"),n("span",{class:"token punctuation"},","),s(" orange"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-css","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".btn-orange"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" black"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" orange"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),z=n("p",null,"混合甚至可以使用流程控制语句：",-1),N=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token keyword"},"@mixin"),s(),n("span",{class:"token function"},"cool-button"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$theme"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"@if"),s(),n("span",{class:"token selector"},[n("span",{class:"token variable"},"$theme"),s(" == 'light' ")]),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" black"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"@else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" black"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token property"},[n("span",{class:"token variable"},"$sizes")]),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},","),s(" 50px"),n("span",{class:"token punctuation"},","),s(" 80px"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"@each"),s(),n("span",{class:"token selector"},[n("span",{class:"token variable"},"$size"),s(" in "),n("span",{class:"token variable"},"$sizes"),s()]),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token selector"},[s(".icon-"),n("span",{class:"token variable"},"#{$size}"),s()]),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token variable"},"$size"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"@include"),s(),n("span",{class:"token function"},"cool-button"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'dark'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".icon-40px"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" black"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".icon-50px"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" black"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".icon-80px"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 80px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" black"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("p",null,[s("后续我们将学习函数指令 "),n("code",null,"@function"),s("，这就像写 JavaScript 程序一样能够控制变量的值。")],-1),E=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token keyword"},"@function"),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$numbers"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},[n("span",{class:"token variable"},"$sum")]),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"@each"),s(),n("span",{class:"token selector"},[n("span",{class:"token variable"},"$number"),s(" in "),n("span",{class:"token variable"},"$numbers"),s()]),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},[n("span",{class:"token variable"},"$sum")]),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token variable"},"$sum"),s(" +"),n("span",{class:"token variable"},"$number"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token variable"},"$sum"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"a "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},[n("span",{class:"token variable"},"$num")]),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},","),s(" 20px"),n("span",{class:"token punctuation"},","),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-css","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"a"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 60px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),T=n("h3",{id:"_2-5-内置函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-5-内置函数","aria-hidden":"true"},"#"),s(" 2.5 内置函数")],-1),j=n("p",null,[s("本节使用颜色函数举例，"),n("code",null,"lighten"),s(" 和 "),n("code",null,"darken"),s(" 函数可以增强或减弱颜色，这样我们可以有效调整颜色的数值而不必手动计算每个颜色的值。")],-1),L=n("div",{class:"language-scss","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token property"},[n("span",{class:"token variable"},"$base-color")]),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token selector"},".card "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"lighten"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$base-color"),n("span",{class:"token punctuation"},","),s(" 25%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"darken"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$base-color"),n("span",{class:"token punctuation"},","),s(" 25%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),q=n("div",{class:"language-css","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".card"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #01ff01"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #000100"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),J=n("hr",{class:"footnotes-sep"},null,-1),M={class:"footnotes"},Q={class:"footnotes-list"},D={id:"footnote1",class:"footnote-item"},F={href:"http://www.sass.hk",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.sass.hk/docs/",target:"_blank",rel:"noopener noreferrer"},H=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function K(O,P){const o=i("router-link"),p=i("CodeTabs"),u=i("ExternalLinkIcon");return d(),k("div",null,[m,n("nav",h,[n("ul",null,[n("li",null,[e(o,{to:"#_1-sass-简介"},{default:a(()=>[s("1. Sass 简介")]),_:1})]),n("li",null,[e(o,{to:"#_2-语法特点"},{default:a(()=>[s("2. 语法特点")]),_:1}),n("ul",null,[n("li",null,[e(o,{to:"#_2-1-sass-和-scss"},{default:a(()=>[s("2.1 Sass 和 Scss")]),_:1})]),n("li",null,[e(o,{to:"#_2-2-使用变量"},{default:a(()=>[s("2.2 使用变量")]),_:1})]),n("li",null,[e(o,{to:"#_2-3-嵌套"},{default:a(()=>[s("2.3 嵌套")]),_:1})]),n("li",null,[e(o,{to:"#_2-4-混合"},{default:a(()=>[s("2.4 混合")]),_:1})]),n("li",null,[e(o,{to:"#_2-5-内置函数"},{default:a(()=>[s("2.5 内置函数")]),_:1})])])])])]),g,e(p,{id:"97",data:[{title:"Sass"},{title:"CSS"}]},{tab0:a(({title:t,value:c,isActive:l})=>[y]),tab1:a(({title:t,value:c,isActive:l})=>[_]),_:1}),f,S,e(p,{id:"111",data:[{title:"Sass"},{title:"CSS"}]},{tab0:a(({title:t,value:c,isActive:l})=>[x]),tab1:a(({title:t,value:c,isActive:l})=>[w]),_:1}),C,e(p,{id:"122",data:[{title:"Sass"},{title:"CSS"}]},{tab0:a(({title:t,value:c,isActive:l})=>[$]),tab1:a(({title:t,value:c,isActive:l})=>[A]),_:1}),z,e(p,{id:"133",data:[{title:"Sass"},{title:"CSS"}]},{tab0:a(({title:t,value:c,isActive:l})=>[N]),tab1:a(({title:t,value:c,isActive:l})=>[V]),_:1}),B,e(p,{id:"144",data:[{title:"Sass"},{title:"CSS"}]},{tab0:a(({title:t,value:c,isActive:l})=>[E]),tab1:a(({title:t,value:c,isActive:l})=>[I]),_:1}),T,j,e(p,{id:"158",data:[{title:"Sass"},{title:"CSS"}]},{tab0:a(({title:t,value:c,isActive:l})=>[L]),tab1:a(({title:t,value:c,isActive:l})=>[q]),_:1}),J,n("section",M,[n("ol",Q,[n("li",D,[n("p",null,[s("Sass 中文文档，"),n("a",F,[s("www.sass.hk"),e(u)]),s("，"),n("a",G,[s("https://www.sass.hk/docs/"),e(u)]),s(),H])])])])])}const U=r(b,[["render",K],["__file","index.html.vue"]]);export{U as default};
