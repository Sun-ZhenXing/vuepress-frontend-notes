import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as p,b as s,e as n,d as o}from"./app-FEcl1joV.js";const e={},t=s("h1",{id:"10-函数防抖",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#10-函数防抖"},[s("span",null,"10. 函数防抖")])],-1),c=s("p",null,[n("对指定函数进行处理，使得函数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N")]),s("annotation",{encoding:"application/x-tex"},"N")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N")])])]),n(" 秒后执行且只会执行一次，如果 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N")]),s("annotation",{encoding:"application/x-tex"},"N")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N")])])]),n(" 秒内事件再次触发，则会重新计时。")],-1),D=o(`<div class="language-javascript" data-ext="js" data-title="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;"> * @</span><span style="color:#9CDCFE;">param</span><span style="color:#D4D4D4;"> {</span><span style="color:#9CDCFE;">number</span><span style="color:#D4D4D4;">} </span><span style="color:#9CDCFE;">wait</span></span>
<span class="line"><span style="color:#D4D4D4;"> */</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> debounce</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">func</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">wait</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> timeout</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#569CD6;"> function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> context</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> args</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">arguments</span></span>
<span class="line"><span style="color:#DCDCAA;">    clearTimeout</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">timeout</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">    timeout</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      func</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">apply</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    }, </span><span style="color:#9CDCFE;">wait</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre></div><p>测试代码：</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> node</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getElementById</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;layout&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> getUserAction</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">  node</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">innerHTML</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">count</span><span style="color:#D4D4D4;">++</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span></code></pre></div><p>最终版：除了支持 <code>this</code> 和 <code>event</code> 外，还支持以下功能：</p><ul><li>支持立即执行</li><li>函数可能有返回值</li><li>支持取消功能</li></ul><div class="language-javascript" data-ext="js" data-title="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">/* eslint-disable ts/no-this-alias */</span></span>
<span class="line"><span style="color:#6A9955;">/* eslint-disable prefer-rest-params */</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> function</span><span style="color:#DCDCAA;"> debounce</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">func</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">wait</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">immediate</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> timeout</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">result</span></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#DCDCAA;"> debounced</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> context</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> args</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">arguments</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">timeout</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#DCDCAA;">      clearTimeout</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">timeout</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">immediate</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">      // 如果已经执行过，不再执行</span></span>
<span class="line"><span style="color:#569CD6;">      const</span><span style="color:#4FC1FF;"> callNow</span><span style="color:#D4D4D4;"> = !</span><span style="color:#9CDCFE;">timeout</span></span>
<span class="line"><span style="color:#9CDCFE;">      timeout</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        timeout</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">      }, </span><span style="color:#9CDCFE;">wait</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#C586C0;">      if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">callNow</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">        result</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">func</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">apply</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#C586C0;">    else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      timeout</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        func</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">apply</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">      }, </span><span style="color:#9CDCFE;">wait</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> result</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">  debounced</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">cancel</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#DCDCAA;">    clearTimeout</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">timeout</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">    timeout</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#9CDCFE;"> debounced</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div>`,6),r=[t,c,D];function y(i,C){return l(),p("div",null,r)}const u=a(e,[["render",y],["__file","10-debounce.html.vue"]]),F=JSON.parse('{"path":"/notebook/js/handwrite-36/10-debounce.html","title":"10. 函数防抖","lang":"zh-CN","frontmatter":{"description":"10. 函数防抖 对指定函数进行处理，使得函数 N 秒后执行且只会执行一次，如果 N 秒内事件再次触发，则会重新计时。 测试代码： 最终版：除了支持 this 和 event 外，还支持以下功能： 支持立即执行 函数可能有返回值 支持取消功能","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/js/handwrite-36/10-debounce.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"10. 函数防抖"}],["meta",{"property":"og:description","content":"10. 函数防抖 对指定函数进行处理，使得函数 N 秒后执行且只会执行一次，如果 N 秒内事件再次触发，则会重新计时。 测试代码： 最终版：除了支持 this 和 event 外，还支持以下功能： 支持立即执行 函数可能有返回值 支持取消功能"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10. 函数防抖\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1675939447000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.37,"words":111},"filePathRelative":"notebook/js/handwrite-36/10-debounce.md","localizedDate":"2023年2月9日","autoDesc":true}');export{u as comp,F as data};
