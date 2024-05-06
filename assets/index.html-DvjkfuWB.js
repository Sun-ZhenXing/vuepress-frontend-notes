import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as D,o as i,c as y,b as s,a as e,w as n,e as l,d as C}from"./app-FEcl1joV.js";const d={},E=s("h1",{id:"1-sass-语法快速入门",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#1-sass-语法快速入门"},[s("span",null,"1. Sass 语法快速入门")])],-1),u={class:"table-of-contents"},h=C(`<h2 id="1-sass-简介" tabindex="-1"><a class="header-anchor" href="#1-sass-简介"><span>1. Sass 简介</span></a></h2><p>Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量（variables）、嵌套（nested rules）、混合（mixins）、导入（inline imports）等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>Sass 的特点：</p><ul><li>完全兼容 CSS3</li><li>在 CSS 基础上增加变量、嵌套、混合等功能</li><li>通过函数进行颜色值与属性值的运算</li><li>提供控制指令（control directives）等高级功能</li><li>自定义输出格式</li></ul><h2 id="2-语法特点" tabindex="-1"><a class="header-anchor" href="#2-语法特点"><span>2. 语法特点</span></a></h2><h3 id="21-sass-和-scss" tabindex="-1"><a class="header-anchor" href="#21-sass-和-scss"><span>2.1 Sass 和 Scss</span></a></h3><p>Sass 有两种语法格式。首先是 SCSS（Sassy CSS），这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是可用的。</p><p>另一种也是最早的 Sass 语法格式，被称为缩进格式（Indented Sass），不使用 <code>;</code> 和 <code>{}</code>，保存在 <code>.sass</code> 文件中，就像下面这样：</p><div class="language-sass" data-ext="sass" data-title="sass"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">nav</span></span>
<span class="line"><span style="color:#D7BA7D;">  ul</span></span>
<span class="line"><span style="color:#9CDCFE;">    margin</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#9CDCFE;">    padding</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#9CDCFE;">    list-style</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">  li</span></span>
<span class="line"><span style="color:#9CDCFE;">    display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">inline-block</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">  a</span></span>
<span class="line"><span style="color:#9CDCFE;">    display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">block</span></span>
<span class="line"><span style="color:#9CDCFE;">    padding</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">6</span><span style="color:#C586C0;">px</span><span style="color:#B5CEA8;"> 12</span><span style="color:#C586C0;">px</span></span>
<span class="line"><span style="color:#9CDCFE;">    text-decoration</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">none</span></span>
<span class="line"></span></code></pre></div><p>但更广泛使用的是 CSS 超集的语法，即 SCSS，保存在 <code>.scss</code> 文件中。</p><div class="language-scss" data-ext="scss" data-title="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">nav</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D7BA7D;">  ul</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    margin</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    padding</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    list-style</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">none</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">  li</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">inline-block</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">  a</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">block</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    padding</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">6px</span><span style="color:#B5CEA8;"> 12px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    text-decoration</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">none</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>现在我们只使用第二种语法，并把 <code>.scss</code> 文件就称为 Sass 文件。</p><h3 id="22-使用变量" tabindex="-1"><a class="header-anchor" href="#22-使用变量"><span>2.2 使用变量</span></a></h3><p>Sass 可以使用下面的语法声明变量：</p><div class="language-scss" data-ext="scss" data-title="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">$variable</span><span style="color:#D4D4D4;">: value;</span></span>
<span class="line"></span></code></pre></div><p>变量值可以是任何有效的</p><div class="language-scss" data-ext="scss" data-title="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">$red</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">hsl</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">100%</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">50%</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">.btn.danger</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  color</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$red</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  border</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1px</span><span style="color:#CE9178;"> solid</span><span style="color:#9CDCFE;"> $red</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>这一点比 CSS 引入的原生变量早了很多。但是现在看来，我们使用原生的 CSS 变量会更加灵活，这也不是否定 Sass 的变量，它广泛用于静态编译。</p><p>与 CSS 属性不同，变量可以在 CSS 规则块定义之外存在。当变量定义在 CSS 规则块内，那么该变量只能在此规则块内使用。</p><p>这是 CSS 原生的变量语法，能够动态地改变页面的样式：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --red</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">hsl</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">100%</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">50%</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">.btn.danger</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  color</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">var</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">--red</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#9CDCFE;">  border</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1px</span><span style="color:#CE9178;"> solid</span><span style="color:#DCDCAA;"> var</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">--red</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="23-嵌套" tabindex="-1"><a class="header-anchor" href="#23-嵌套"><span>2.3 嵌套</span></a></h3><p>在传统的 CSS 中，我们注意到某些类（如 <code>.btn</code>）如果被经常使用，那么它会被重复写很多此，代码会因此臃肿而难以维护。</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.btn</span><span style="color:#D7BA7D;"> a</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  font-weight</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">bold</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">.btn.warning</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yellow</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">.btn.danger</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>Sass 使用嵌套将其变得优雅：</p><div class="language-scss" data-ext="scss" data-title="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.btn</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D7BA7D;">  a</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    font-weight</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">bold</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  &amp;</span><span style="color:#D7BA7D;">.warning</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yellow</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  &amp;</span><span style="color:#D7BA7D;">.danger</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>这还包括有 <code>&amp;</code> 符号的帮助，此外还有一些符号也非常有帮助：</p>`,27),A=s("div",{class:"language-scss","data-ext":"scss","data-title":"scss"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".btn"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"  &"),s("span",{style:{color:"#D7BA7D"}},":focus"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"    outline"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"none"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  > "),s("span",{style:{color:"#D7BA7D"}},"a"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"    color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"#fff"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  + "),s("span",{style:{color:"#D7BA7D"}},"h2"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"    text-align"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"center"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  ~ "),s("span",{style:{color:"#D7BA7D"}},"p"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"    text-align"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"center"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"  &"),s("span",{style:{color:"#D7BA7D"}},"::after"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},"    content"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},'"!"'),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"  &"),s("span",{style:{color:"#9CDCFE"}},"-header"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"    color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"#fff"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),b=s("div",{class:"language-css","data-ext":"css","data-title":"css"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".btn:focus"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  outline"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"none"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".btn"),s("span",{style:{color:"#D4D4D4"}}," > "),s("span",{style:{color:"#D7BA7D"}},"a"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"#fff"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".btn"),s("span",{style:{color:"#D4D4D4"}}," + "),s("span",{style:{color:"#D7BA7D"}},"h2"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  text-align"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"center"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".btn"),s("span",{style:{color:"#D4D4D4"}}," ~ "),s("span",{style:{color:"#D7BA7D"}},"p"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  text-align"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"center"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".btn::after"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  content"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},'"!"'),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".btn-header"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"#fff"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),S=s("h3",{id:"24-混合",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#24-混合"},[s("span",null,"2.4 混合")])],-1),g=s("p",null,[l("混合允许我们复用重复的代码片段。使用 "),s("code",null,"@mixin"),l(" 定义一个复用片段，然后在指定位置使用 "),s("code",null,"@include"),l(" 引入即可。")],-1),k=s("div",{class:"language-scss","data-ext":"scss","data-title":"scss"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"@mixin"),s("span",{style:{color:"#DCDCAA"}}," flex-column"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  display"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"flex"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  flex-direction"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"column"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  background"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"gray"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".card"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"  @include"),s("span",{style:{color:"#DCDCAA"}}," flex-column"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".aside"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"  @include"),s("span",{style:{color:"#DCDCAA"}}," flex-column"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),F=s("div",{class:"language-css","data-ext":"css","data-title":"css"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".card"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  display"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"flex"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  flex-direction"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"column"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  background"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"gray"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".aside"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  display"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"flex"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  flex-direction"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"column"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  background"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"gray"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),x=s("p",null,"混合也支持参数传递，这样我们可以以编程的方式创建大量伪类。",-1),v=s("div",{class:"language-scss","data-ext":"scss","data-title":"scss"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"@mixin"),s("span",{style:{color:"#DCDCAA"}}," cool-button"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"$color"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#9CDCFE"}},"$bg"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  display"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"flex"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  justify-content"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"center"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#9CDCFE"}},"$color"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  background-color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#9CDCFE"}},"$bg"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".btn-orange"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"  @include"),s("span",{style:{color:"#DCDCAA"}}," cool-button"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},"black"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#CE9178"}},"orange"),s("span",{style:{color:"#D4D4D4"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),_=s("div",{class:"language-css","data-ext":"css","data-title":"css"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".btn-orange"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  display"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"flex"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  justify-content"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"center"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"black"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  background-color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"orange"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),f=s("p",null,"混合甚至可以使用流程控制语句：",-1),B=s("div",{class:"language-scss","data-ext":"scss","data-title":"scss"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"@mixin"),s("span",{style:{color:"#DCDCAA"}}," cool-button"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"$theme"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"  @if"),s("span",{style:{color:"#9CDCFE"}}," $theme"),s("span",{style:{color:"#D4D4D4"}}," == "),s("span",{style:{color:"#CE9178"}},"'light'"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"    background-color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"white"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"    color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"black"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  } "),s("span",{style:{color:"#C586C0"}},"@else "),s("span",{style:{color:"#D4D4D4"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"    background-color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"black"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"    color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"white"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"$sizes"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"40px"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"50px"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"80px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"@each"),s("span",{style:{color:"#9CDCFE"}}," $size"),s("span",{style:{color:"#C586C0"}}," in"),s("span",{style:{color:"#9CDCFE"}}," $sizes"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},"  .icon-"),s("span",{style:{color:"#9CDCFE"}},"#{$size}"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"    font-size"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#9CDCFE"}},"$size"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"    @include"),s("span",{style:{color:"#DCDCAA"}}," cool-button"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},"'dark'"),s("span",{style:{color:"#D4D4D4"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),m=s("div",{class:"language-css","data-ext":"css","data-title":"css"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".icon-40px"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  font-size"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"40px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  background-color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"black"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"white"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".icon-50px"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  font-size"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"50px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  background-color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"black"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"white"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".icon-80px"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  font-size"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"80px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  background-color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"black"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"white"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),w=s("p",null,[l("后续我们将学习函数指令 "),s("code",null,"@function"),l("，这就像写 JavaScript 程序一样能够控制变量的值。")],-1),$=s("div",{class:"language-scss","data-ext":"scss","data-title":"scss"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"@function"),s("span",{style:{color:"#DCDCAA"}}," sum"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"$numbers"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  $sum"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"  @each"),s("span",{style:{color:"#9CDCFE"}}," $number"),s("span",{style:{color:"#C586C0"}}," in"),s("span",{style:{color:"#9CDCFE"}}," $numbers"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"    $sum"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#9CDCFE"}},"$sum"),s("span",{style:{color:"#D4D4D4"}}," +"),s("span",{style:{color:"#9CDCFE"}},"$number"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"  @return"),s("span",{style:{color:"#9CDCFE"}}," $sum"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},"a"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  $num"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"10px"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"20px"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"30px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  width"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#DCDCAA"}},"sum"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"$num"),s("span",{style:{color:"#D4D4D4"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),z=s("div",{class:"language-css","data-ext":"css","data-title":"css"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},"a"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  width"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"60px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),T=s("h3",{id:"25-内置函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#25-内置函数"},[s("span",null,"2.5 内置函数")])],-1),N=s("p",null,[l("本节使用颜色函数举例，"),s("code",null,"lighten"),l(" 和 "),s("code",null,"darken"),l(" 函数可以增强或减弱颜色，这样我们可以有效调整颜色的数值而不必手动计算每个颜色的值。")],-1),V=s("div",{class:"language-scss","data-ext":"scss","data-title":"scss"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"$base-color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"green"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".card"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  background"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#DCDCAA"}},"lighten"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"$base-color"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"25%"),s("span",{style:{color:"#D4D4D4"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#DCDCAA"}},"darken"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"$base-color"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"25%"),s("span",{style:{color:"#D4D4D4"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),Z=s("div",{class:"language-css","data-ext":"css","data-title":"css"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".card"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  background"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"#01ff01"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE"}},"  color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"#000100"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),j=s("hr",{class:"footnotes-sep"},null,-1),I={class:"footnotes"},q={class:"footnotes-list"},J={id:"footnote1",class:"footnote-item"},L={href:"http://www.sass.hk",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.sass.hk/docs/",target:"_blank",rel:"noopener noreferrer"},M=s("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function O(R,X){const c=D("router-link"),p=D("CodeTabs"),t=D("ExternalLinkIcon");return i(),y("div",null,[E,s("nav",u,[s("ul",null,[s("li",null,[e(c,{to:"#1-sass-简介"},{default:n(()=>[l("1. Sass 简介")]),_:1})]),s("li",null,[e(c,{to:"#2-语法特点"},{default:n(()=>[l("2. 语法特点")]),_:1}),s("ul",null,[s("li",null,[e(c,{to:"#21-sass-和-scss"},{default:n(()=>[l("2.1 Sass 和 Scss")]),_:1})]),s("li",null,[e(c,{to:"#22-使用变量"},{default:n(()=>[l("2.2 使用变量")]),_:1})]),s("li",null,[e(c,{to:"#23-嵌套"},{default:n(()=>[l("2.3 嵌套")]),_:1})]),s("li",null,[e(c,{to:"#24-混合"},{default:n(()=>[l("2.4 混合")]),_:1})]),s("li",null,[e(c,{to:"#25-内置函数"},{default:n(()=>[l("2.5 内置函数")]),_:1})])])])])]),h,e(p,{id:"97",data:[{id:"Sass"},{id:"CSS"}]},{title0:n(({value:a,isActive:o})=>[l("Sass")]),title1:n(({value:a,isActive:o})=>[l("CSS")]),tab0:n(({value:a,isActive:o})=>[A]),tab1:n(({value:a,isActive:o})=>[b]),_:1}),S,g,e(p,{id:"111",data:[{id:"Sass"},{id:"CSS"}]},{title0:n(({value:a,isActive:o})=>[l("Sass")]),title1:n(({value:a,isActive:o})=>[l("CSS")]),tab0:n(({value:a,isActive:o})=>[k]),tab1:n(({value:a,isActive:o})=>[F]),_:1}),x,e(p,{id:"122",data:[{id:"Sass"},{id:"CSS"}]},{title0:n(({value:a,isActive:o})=>[l("Sass")]),title1:n(({value:a,isActive:o})=>[l("CSS")]),tab0:n(({value:a,isActive:o})=>[v]),tab1:n(({value:a,isActive:o})=>[_]),_:1}),f,e(p,{id:"133",data:[{id:"Sass"},{id:"CSS"}]},{title0:n(({value:a,isActive:o})=>[l("Sass")]),title1:n(({value:a,isActive:o})=>[l("CSS")]),tab0:n(({value:a,isActive:o})=>[B]),tab1:n(({value:a,isActive:o})=>[m]),_:1}),w,e(p,{id:"144",data:[{id:"Sass"},{id:"CSS"}]},{title0:n(({value:a,isActive:o})=>[l("Sass")]),title1:n(({value:a,isActive:o})=>[l("CSS")]),tab0:n(({value:a,isActive:o})=>[$]),tab1:n(({value:a,isActive:o})=>[z]),_:1}),T,N,e(p,{id:"158",data:[{id:"Sass"},{id:"CSS"}]},{title0:n(({value:a,isActive:o})=>[l("Sass")]),title1:n(({value:a,isActive:o})=>[l("CSS")]),tab0:n(({value:a,isActive:o})=>[V]),tab1:n(({value:a,isActive:o})=>[Z]),_:1}),j,s("section",I,[s("ol",q,[s("li",J,[s("p",null,[l("Sass 中文文档，"),s("a",L,[l("www.sass.hk"),e(t)]),l("，"),s("a",P,[l("https://www.sass.hk/docs/"),e(t)]),l(),M])])])])])}const K=r(d,[["render",O],["__file","index.html.vue"]]),Q=JSON.parse('{"path":"/notebook/css/sass/chapter01/","title":"1. Sass 语法快速入门","lang":"zh-CN","frontmatter":{"description":"1. Sass 语法快速入门 1. Sass 简介 Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量（variables）、嵌套（nested rules）、混合（mixins）、导入（inline imports）等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/css/sass/chapter01/"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"1. Sass 语法快速入门"}],["meta",{"property":"og:description","content":"1. Sass 语法快速入门 1. Sass 简介 Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量（variables）、嵌套（nested rules）、混合（mixins）、导入（inline imports）等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1. Sass 语法快速入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. Sass 简介","slug":"1-sass-简介","link":"#1-sass-简介","children":[]},{"level":2,"title":"2. 语法特点","slug":"2-语法特点","link":"#2-语法特点","children":[{"level":3,"title":"2.1 Sass 和 Scss","slug":"21-sass-和-scss","link":"#21-sass-和-scss","children":[]},{"level":3,"title":"2.2 使用变量","slug":"22-使用变量","link":"#22-使用变量","children":[]},{"level":3,"title":"2.3 嵌套","slug":"23-嵌套","link":"#23-嵌套","children":[]},{"level":3,"title":"2.4 混合","slug":"24-混合","link":"#24-混合","children":[]},{"level":3,"title":"2.5 内置函数","slug":"25-内置函数","link":"#25-内置函数","children":[]}]}],"git":{"createdTime":1677409430000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":3.65,"words":1095},"filePathRelative":"notebook/css/sass/chapter01/index.md","localizedDate":"2023年2月26日","autoDesc":true}');export{K as comp,Q as data};
