import{_ as t,M as e,p,q as o,R as n,t as s,N as c,a1 as l}from"./framework-546207d5.js";const i={},u=n("h1",{id:"打印时显示链接地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#打印时显示链接地址","aria-hidden":"true"},"#"),s(" 打印时显示链接地址")],-1),r=n("p",null,"在很多框架中，将内容打印总是默认给链接文字加上链接地址，并附加括号。比如本文使用的 VuePress 也支持这一点。",-1),d={href:"https://blog.alexsun.top/",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>这一点可以参考 Bootstrap 的实现：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
    <span class="token selector">a, a:visited</span> <span class="token punctuation">{</span>
        <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">a[href]:after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; (&quot;</span> <span class="token function">attr</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">abbr[title]:after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; (&quot;</span> <span class="token function">attr</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要覆盖样式：</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
    <span class="token selector">a[href]:after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function v(m,_){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,r,n("p",null,[s("为了测试，请使用浏览器的打印功能，这样 "),n("a",d,[s("这个链接"),c(a)]),s(" 的地址就会显示出来。")]),k])}const b=t(i,[["render",v],["__file","show-links-when-print.html.vue"]]);export{b as default};
