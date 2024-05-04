import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o,c as p,b as n,e as s,a as c,d as i}from"./app-BdnEjZx0.js";const l={},r=n("h1",{id:"打印时显示链接地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#打印时显示链接地址"},[n("span",null,"打印时显示链接地址")])],-1),u=n("p",null,"在很多框架中，将内容打印总是默认给链接文字加上链接地址，并附加括号。比如本文使用的 VuePress 也支持这一点。",-1),d=n("code",null,"Ctrl + P",-1),m={href:"https://blog.alexsun.top/",target:"_blank",rel:"noopener noreferrer"},k=i(`<p>这一点可以参考 Bootstrap 的实现：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要覆盖样式：</p><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
  <span class="token selector">a[href]:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function h(v,g){const t=a("ExternalLinkIcon");return o(),p("div",null,[r,u,n("p",null,[s("为了测试，请使用浏览器的打印功能（可以按 "),d,s("，移动端可以使用菜单中的打印），这样 "),n("a",m,[s("这个链接"),c(t)]),s(" 的地址就会显示出来。")]),k])}const f=e(l,[["render",h],["__file","show-links-when-print.html.vue"]]),y=JSON.parse('{"path":"/notebook/css/show-links-when-print.html","title":"打印时显示链接地址","lang":"zh-CN","frontmatter":{"description":"打印时显示链接地址 在很多框架中，将内容打印总是默认给链接文字加上链接地址，并附加括号。比如本文使用的 VuePress 也支持这一点。 为了测试，请使用浏览器的打印功能（可以按 Ctrl + P，移动端可以使用菜单中的打印），这样 这个链接 的地址就会显示出来。 这一点可以参考 Bootstrap 的实现： 如果需要覆盖样式：","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/css/show-links-when-print.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"打印时显示链接地址"}],["meta",{"property":"og:description","content":"打印时显示链接地址 在很多框架中，将内容打印总是默认给链接文字加上链接地址，并附加括号。比如本文使用的 VuePress 也支持这一点。 为了测试，请使用浏览器的打印功能（可以按 Ctrl + P，移动端可以使用菜单中的打印），这样 这个链接 的地址就会显示出来。 这一点可以参考 Bootstrap 的实现： 如果需要覆盖样式："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"打印时显示链接地址\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1675780538000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.5,"words":151},"filePathRelative":"notebook/css/show-links-when-print.md","localizedDate":"2023年2月7日","autoDesc":true}');export{f as comp,y as data};
