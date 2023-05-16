import{_ as n,r as d,o as i,c as a,b as o,a as t,w as r,d as e,e as l}from"./app-78780c47.js";const f={},h=l('<h1 id="overflow" tabindex="-1"><a class="header-anchor" href="#overflow" aria-hidden="true">#</a> overflow</h1><p><code>overflow</code> 是 CSS 的简写属性，其设置了元素溢出时所需的行为——即当元素的内容太大而无法适应它的块级格式化上下文时。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p><code>overflow</code> 属性用于当一个元素太大而无法适应父级容器的大小时需要做什么，常用值如下：</p><ul><li><code>visible</code>：默认值。内容不会回修剪，可以呈现在元素框之外</li><li><code>hidden</code>：如果内容超出父级容器，超出部分将会被隐藏</li><li><code>scroll</code>：无论是否超出容器，都会出现一个滚动条</li><li><code>auto</code>：如果没有超出容器的显示，将会正常显示，如果超出，将会出现一个滚动条</li><li><code>clip</code>：类似于 <code>hidden</code>，内容将以元素的边距（<code>padding</code>）盒进行裁剪。<code>clip</code> 和 <code>hidden</code> 之间的区别是 <code>clip</code> 关键字禁止所有滚动，包括以编程方式的滚动</li></ul><p><code>overflow-x</code> 与 <code>overflow-y</code> 可以分别设置水平和垂直时溢出的部分该怎么怎么处理。</p><p>指定 <code>visible</code>（默认）或 <code>clip</code> 以外的值，会创建一个新的块级格式化上下文。由于技术原因，这是必要的——如果浮动包含滚动元素，它将在每个滚动步骤后强制重新包装内容，从而导致一个缓慢的滚动体验。</p><p>为使 <code>overflow</code> 具有效果，块级水平的容器必须有一个设定的高度（<code>height</code> 或 <code>max-height</code>）或 <code>white-space</code> 设置为 <code>nowrap</code>。</p><p>简单来说，容器必须满足以下条件：</p><ol><li><code>dispaly</code> 的值非 <code>inline</code></li><li>具有尺寸限制。（<code>width</code> / <code>height</code> / <code>max-width</code> / <code>max-height</code> / <code>absolute</code> 拉伸）</li><li>对于单元格 <code>td</code> 等，还需要 <code>table</code> 为 <code>table-layout: fixed</code></li></ol>',9),_=o("code",null,"overflow-x",-1),p=o("code",null,"overflow-y",-1),u=o("code",null,"overflow",-1),v=o("code",null,"overflow-x",-1),w=o("code",null,"overflow-y",-1),b=o("code",null,"visible",-1),m=o("code",null,"visible",-1),x=o("code",null,"visible",-1),g=o("code",null,"auto",-1),k=l('<sup class="footnote-ref"><a href="#footnote1">[1:1]</a><a class="footnote-anchor" id="footnote-ref1:1"></a></sup><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>',2),S=o("hr",{class:"footnotes-sep"},null,-1),C={class:"footnotes"},N={class:"footnotes-list"},y={id:"footnote1",class:"footnote-item"},B={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow",target:"_blank",rel:"noopener noreferrer"},j=o("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),z=o("a",{href:"#footnote-ref1:1",class:"footnote-backref"},"↩︎",-1),V={id:"footnote2",class:"footnote-item"},E=o("code",null,"overflow",-1),I={href:"https://juejin.cn/post/6963255359985156110",target:"_blank",rel:"noopener noreferrer"},L=o("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function W(D,M){const s=d("Badge"),c=d("ExternalLinkIcon");return i(),a("div",null,[h,o("p",null,[t(s,{type:"warning"},{default:r(()=>[e("注意")]),_:1}),e(" 如果 "),_,e(" 与 "),p,e(" 的值相同，结果等同于 "),u,e("。如果 "),v,e(" 与 "),w,e(" 的值不相同，且其中一个属性的值被赋予 "),b,e("，另外一个被赋予一个非 "),m,e(" 的值，第一个被赋予 "),x,e(" 的值会自动变为 "),g,e("。"),k]),S,o("section",C,[o("ol",N,[o("li",y,[o("p",null,[e("overflow，MDN，"),o("a",B,[e("https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow"),t(c)]),e(),j,e(),z])]),o("li",V,[o("p",null,[e("【不一样的 CSS】深入理解 "),E,e("（溢出要学会处理），稀土掘金，"),o("a",I,[e("https://juejin.cn/post/6963255359985156110"),t(c)]),e(),L])])])])])}const q=n(f,[["render",W],["__file","overflow.html.vue"]]);export{q as default};
