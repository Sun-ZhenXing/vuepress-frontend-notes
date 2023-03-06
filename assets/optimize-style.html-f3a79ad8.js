import{_ as o,M as c,p as l,q as p,R as a,N as s,V as e,t as n,a1 as r}from"./framework-546207d5.js";const i={},d=a("h1",{id:"android-样式优化",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#android-样式优化","aria-hidden":"true"},"#"),n(" Android 样式优化")],-1),u={class:"table-of-contents"},h=r(`<h2 id="_1-如何隐藏标题栏" tabindex="-1"><a class="header-anchor" href="#_1-如何隐藏标题栏" aria-hidden="true">#</a> 1. 如何隐藏标题栏</h2><p>通过更改继承的主题即可，在 <code>themes.xml</code>，默认情况下为：</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Theme.Calc<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Theme.MaterialComponents.DayNight.DarkActionBar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>将 <code>DarkActionBar</code> 修改为 <code>NoActionBar</code> 即可。</p><h2 id="_2-如何自定义图标" tabindex="-1"><a class="header-anchor" href="#_2-如何自定义图标" aria-hidden="true">#</a> 2. 如何自定义图标</h2><p>在 <strong>res</strong> 文件夹上右键，<strong>New</strong> -&gt; <strong>Image Asset</strong>，可以设置前景和背景，可以指定一个资源，也可以指定一个矢量图或普通图像然后自动生成一个图标。</p><div class="hint-container warning"><p class="hint-container-title">资源错误</p><p>Android Stdio 会自动将 SVG 转换为资源文件，但启动时可能报错找不到资源，这是因为 Android Studio 没有生成 XML 声明，需要手动加入：</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
</code></pre></div><p>将上面一行代码粘贴到报错资源的第一行即可。</p></div>`,7);function _(g,m){const t=c("router-link");return l(),p("div",null,[d,a("nav",u,[a("ul",null,[a("li",null,[s(t,{to:"#_1-如何隐藏标题栏"},{default:e(()=>[n("1. 如何隐藏标题栏")]),_:1})]),a("li",null,[s(t,{to:"#_2-如何自定义图标"},{default:e(()=>[n("2. 如何自定义图标")]),_:1})])])]),h])}const x=o(i,[["render",_],["__file","optimize-style.html.vue"]]);export{x as default};
