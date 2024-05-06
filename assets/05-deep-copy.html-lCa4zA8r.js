import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as p}from"./app-FEcl1joV.js";const o={},l=p(`<h1 id="5-深拷贝" tabindex="-1"><a class="header-anchor" href="#5-深拷贝"><span>5. 深拷贝</span></a></h1><p>浅拷贝：</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">/* eslint-disable no-prototype-builtins */</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> function</span><span style="color:#DCDCAA;"> shallowCopy</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">typeof</span><span style="color:#9CDCFE;"> obj</span><span style="color:#D4D4D4;"> !== </span><span style="color:#CE9178;">&#39;object&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#C586C0;">    return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#4FC1FF;"> newObj</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Array</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">isArray</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">) ? [] : {}</span></span>
<span class="line"><span style="color:#C586C0;">  for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> key</span><span style="color:#569CD6;"> in</span><span style="color:#9CDCFE;"> obj</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">hasOwnProperty</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"><span style="color:#9CDCFE;">      newObj</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#9CDCFE;"> newObj</span></span>
<span class="line"></span></code></pre></div><p>简单的深拷贝，只考虑普通对象属性，不考虑内置对象和函数，不能解决循环引用问题：</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> function</span><span style="color:#DCDCAA;"> deepClone</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">typeof</span><span style="color:#9CDCFE;"> obj</span><span style="color:#D4D4D4;"> !== </span><span style="color:#CE9178;">&#39;object&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#C586C0;">    return</span></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#4FC1FF;"> newObj</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Array</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">isArray</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">) ? [] : {}</span></span>
<span class="line"><span style="color:#C586C0;">  for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> key</span><span style="color:#569CD6;"> in</span><span style="color:#9CDCFE;"> obj</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">hasOwnProperty</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"><span style="color:#9CDCFE;">      newObj</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">] = </span><span style="color:#569CD6;">typeof</span><span style="color:#9CDCFE;"> obj</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">] === </span><span style="color:#CE9178;">&#39;object&#39;</span><span style="color:#D4D4D4;"> ? </span><span style="color:#DCDCAA;">deepClone</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">]) : </span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#9CDCFE;"> newObj</span></span>
<span class="line"></span></code></pre></div><p>复杂版深拷贝：基于简单版的基础上，还考虑了内置对象比如 <code>Date</code>、<code>RegExp</code> 等对象和函数以及解决了循环引用的问题：</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">/* eslint-disable no-prototype-builtins */</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> isObject</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">target</span><span style="color:#569CD6;"> =&gt;</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">typeof</span><span style="color:#9CDCFE;"> target</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;object&#39;</span><span style="color:#D4D4D4;"> || </span><span style="color:#569CD6;">typeof</span><span style="color:#9CDCFE;"> target</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;function&#39;</span><span style="color:#D4D4D4;">) &amp;&amp; </span><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;"> !== </span><span style="color:#569CD6;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> function</span><span style="color:#DCDCAA;"> deepClone</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">map</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#DCDCAA;"> WeakMap</span><span style="color:#D4D4D4;">()) {</span></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">map</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">get</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // 获取当前值的构造函数：获取它的类型</span></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#4FC1FF;"> constructor</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">constructor</span></span>
<span class="line"><span style="color:#6A9955;">  // 检测当前对象 target 是否与正则、日期格式对象匹配</span></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">(</span><span style="color:#D16969;">RegExp</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">Date</span><span style="color:#CE9178;">)</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span><span style="color:#569CD6;">i</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">test</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">constructor</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">)) {</span></span>
<span class="line"><span style="color:#6A9955;">    // 创建一个新的特殊对象(正则类/日期类)的实例</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#569CD6;"> new</span><span style="color:#DCDCAA;"> constructor</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#DCDCAA;">isObject</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">)) {</span></span>
<span class="line"><span style="color:#9CDCFE;">    map</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">set</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// 为循环引用的对象做标记</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> cloneTarget</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Array</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">isArray</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">) ? [] : {}</span></span>
<span class="line"><span style="color:#C586C0;">    for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> prop</span><span style="color:#569CD6;"> in</span><span style="color:#9CDCFE;"> target</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">      if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">hasOwnProperty</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">prop</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"><span style="color:#9CDCFE;">        cloneTarget</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">prop</span><span style="color:#D4D4D4;">] = </span><span style="color:#DCDCAA;">deepClone</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">prop</span><span style="color:#D4D4D4;">], </span><span style="color:#9CDCFE;">map</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> cloneTarget</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#C586C0;">  else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> target</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div>`,7),e=[l];function t(D,r){return n(),a("div",null,e)}const C=s(o,[["render",t],["__file","05-deep-copy.html.vue"]]),i=JSON.parse('{"path":"/notebook/js/handwrite-36/05-deep-copy.html","title":"5. 深拷贝","lang":"zh-CN","frontmatter":{"description":"5. 深拷贝 浅拷贝： 简单的深拷贝，只考虑普通对象属性，不考虑内置对象和函数，不能解决循环引用问题： 复杂版深拷贝：基于简单版的基础上，还考虑了内置对象比如 Date、RegExp 等对象和函数以及解决了循环引用的问题：","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/js/handwrite-36/05-deep-copy.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"5. 深拷贝"}],["meta",{"property":"og:description","content":"5. 深拷贝 浅拷贝： 简单的深拷贝，只考虑普通对象属性，不考虑内置对象和函数，不能解决循环引用问题： 复杂版深拷贝：基于简单版的基础上，还考虑了内置对象比如 Date、RegExp 等对象和函数以及解决了循环引用的问题："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5. 深拷贝\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1675939447000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.37,"words":112},"filePathRelative":"notebook/js/handwrite-36/05-deep-copy.md","localizedDate":"2023年2月9日","autoDesc":true}');export{C as comp,i as data};
