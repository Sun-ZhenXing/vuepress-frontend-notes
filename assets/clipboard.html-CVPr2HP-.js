import{f as p,i as c,j as r,r as D,o as i,c as y,b as s,a as d,w as m,e as u,d as C}from"./app-FEcl1joV.js";import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";const E=s("h1",{id:"剪切板",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#剪切板"},[s("span",null,"剪切板")])],-1),g={class:"table-of-contents"},x=C(`<h2 id="1-获取剪切板上的富文本" tabindex="-1"><a class="header-anchor" href="#1-获取剪切板上的富文本"><span>1. 获取剪切板上的富文本</span></a></h2><p>下面的代码用于获取 HTML 格式的文本信息：</p><div class="language-html" data-ext="html" data-title="html"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">input</span><span style="color:#9CDCFE;"> type</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;text&quot;</span><span style="color:#9CDCFE;"> id</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;input&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">textarea</span><span style="color:#9CDCFE;"> id</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;text&quot;</span><span style="color:#9CDCFE;"> cols</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;30&quot;</span><span style="color:#9CDCFE;"> rows</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;10&quot;</span><span style="color:#808080;">&gt;&lt;/</span><span style="color:#569CD6;">textarea</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> input</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getElementById</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;input&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> text</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getElementById</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;text&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">input</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">addEventListener</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;paste&#39;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // get HTML from clipboard</span></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#4FC1FF;"> html</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">clipboardData</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getData</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;text/html&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">  text</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">html</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>在左边的输入框内粘贴任何富文本，可粘贴为 HTML 代码到右边的文本框内。</p><div style="display:flex;justify-content:space-between;"><input type="text" id="input"><textarea id="text" cols="30" rows="10"></textarea><iframe id="iframe"></iframe></div>`,5),_=p({__name:"clipboard.html",setup(f){function a(t){var o;const n=(o=t.clipboardData)==null?void 0:o.getData("text/html"),e=document.getElementById("text");e.value=n;const l=document.getElementById("iframe");l.contentDocument.body.innerHTML=n}return c(()=>{const t=document.getElementById("input");document.getElementById("text"),t.addEventListener("paste",a)}),r(()=>{document.getElementById("input").removeEventListener("paste",a)}),(t,n)=>{const e=D("router-link");return i(),y("div",null,[E,s("nav",g,[s("ul",null,[s("li",null,[d(e,{to:"#1-获取剪切板上的富文本"},{default:m(()=>[u("1. 获取剪切板上的富文本")]),_:1})])])]),x])}}}),v=h(_,[["__file","clipboard.html.vue"]]),T=JSON.parse('{"path":"/notebook/js/clipboard.html","title":"剪切板","lang":"zh-CN","frontmatter":{"description":"剪切板 1. 获取剪切板上的富文本 下面的代码用于获取 HTML 格式的文本信息： 在左边的输入框内粘贴任何富文本，可粘贴为 HTML 代码到右边的文本框内。","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/notebook/js/clipboard.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"剪切板"}],["meta",{"property":"og:description","content":"剪切板 1. 获取剪切板上的富文本 下面的代码用于获取 HTML 格式的文本信息： 在左边的输入框内粘贴任何富文本，可粘贴为 HTML 代码到右边的文本框内。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"剪切板\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 获取剪切板上的富文本","slug":"1-获取剪切板上的富文本","link":"#1-获取剪切板上的富文本","children":[]}],"git":{"createdTime":1699956271000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.62,"words":187},"filePathRelative":"notebook/js/clipboard.md","localizedDate":"2023年11月14日","autoDesc":true}');export{v as comp,T as data};
