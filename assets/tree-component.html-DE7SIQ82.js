import{f as m,k as A,r as y,o,c,F as v,l as q,b as s,m as d,u as C,t as f,v as B,x as b,a as e,q as _,w as l,e as a,d as h}from"./app-FEcl1joV.js";import{I as F}from"./iconify-BW3arSGb.js";import{_ as g}from"./plugin-vue_export-helper-DlAUqK2U.js";const w=["onClick"],x={class:"name"},k={key:0,class:"sub-tree"},N=m({__name:"TreeTest",props:{items:{}},setup(i){const E=i,D=A([]);return(t,u)=>{const p=y("tree-test",!0);return o(),c("ul",null,[(o(!0),c(v,null,q(E.items,(n,r)=>(o(),c("li",{key:n.name},[s("div",{class:"wrapper",onClick:H=>D.value[r]=!D.value[r]},[n.children&&n.children.length?(o(),d(C(F),{key:0,icon:D.value[r]?"fluent:chevron-down-24-regular":"fluent:chevron-right-24-regular"},null,8,["icon"])):(o(),d(C(F),{key:1,icon:"fluent:document-24-regular"})),s("span",x,f(n.name),1)],8,w),n.children&&n.children.length?(o(),c("div",k,[B(e(p,{items:n.children},null,8,["items"]),[[b,D.value[r]]])])):_("",!0)]))),128))])}}}),T=g(N,[["__scopeId","data-v-7430dfc2"],["__file","TreeTest.vue"]]),S=[{name:"A",children:[{name:"A1",children:[{name:"A1.1"},{name:"A1.2"}]},{name:"A2"}]},{name:"B",children:[{name:"B1"},{name:"B2"}]},{name:"C"}],V=s("h1",{id:"vue-树形组件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue-树形组件"},[s("span",null,"Vue 树形组件")])],-1),I={class:"table-of-contents"},$=s("h2",{id:"1-实现原理",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#1-实现原理"},[s("span",null,"1. 实现原理")])],-1),M=s("p",null,[a("本示例使用 "),s("code",null,"@iconify/vue"),a(" 作为图标库，如果你没有安装，可以使用下面的命令或 HTML 代码安装。")],-1),L=s("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"yarn"),s("span",{style:{color:"#CE9178"}}," add"),s("span",{style:{color:"#569CD6"}}," --dev"),s("span",{style:{color:"#CE9178"}}," @iconify/vue")]),a(`
`),s("span",{class:"line"})])])],-1),j=s("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"npm"),s("span",{style:{color:"#CE9178"}}," install"),s("span",{style:{color:"#569CD6"}}," --save-dev"),s("span",{style:{color:"#CE9178"}}," @iconify/vue")]),a(`
`),s("span",{class:"line"})])])],-1),R=s("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"pnpm"),s("span",{style:{color:"#CE9178"}}," add"),s("span",{style:{color:"#569CD6"}}," --save-dev"),s("span",{style:{color:"#CE9178"}}," @iconify/vue")]),a(`
`),s("span",{class:"line"})])])],-1),z=h(`<p>在 Vue 的 <code>&lt;template&gt;</code> 中使用自身的名称即可实现树形组件。</p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Icon</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@iconify/vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> Node</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  children</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">Node</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#9CDCFE;">  name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> props</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">defineProps</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  items</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Node</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> isShow</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">[]&gt;([])</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">ul</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">li</span><span style="color:#C586C0;"> v-for</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">i</span><span style="color:#569CD6;"> in</span><span style="color:#9CDCFE;"> props</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">items</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">      &lt;</span><span style="color:#569CD6;">div</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;wrapper&quot;</span><span style="color:#D4D4D4;"> @</span><span style="color:#9CDCFE;">click</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">isShow</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">] = !</span><span style="color:#9CDCFE;">isShow</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">        &lt;</span><span style="color:#569CD6;">Icon</span></span>
<span class="line"><span style="color:#C586C0;">          v-if</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;"> &amp;&amp; </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          :</span><span style="color:#9CDCFE;">icon</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">isShow</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">] ? </span><span style="color:#CE9178;">&#39;fluent:chevron-down-24-regular&#39;</span><span style="color:#D4D4D4;"> : </span><span style="color:#CE9178;">&#39;fluent:chevron-right-24-regular&#39;</span><span style="color:#D4D4D4;">&quot;</span></span>
<span class="line"><span style="color:#808080;">        /&gt;</span></span>
<span class="line"><span style="color:#808080;">        &lt;</span><span style="color:#569CD6;">Icon</span><span style="color:#C586C0;"> v-else</span><span style="color:#9CDCFE;"> icon</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;fluent:document-24-regular&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">        &lt;</span><span style="color:#569CD6;">span</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;name&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">{{ </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">span</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">      &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">      &lt;</span><span style="color:#569CD6;">div</span><span style="color:#C586C0;"> v-if</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;"> &amp;&amp; </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;sub-tree&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">        &lt;</span><span style="color:#569CD6;">tree-test</span><span style="color:#9CDCFE;"> v-show</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">isShow</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">items</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">      &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;/</span><span style="color:#569CD6;">li</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">ul</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;scss&quot;</span><span style="color:#9CDCFE;"> scoped</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D7BA7D;">li</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  list-style</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">none</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  user-select</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">none</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">  .wrapper</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    padding</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">.2rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D7BA7D;">    cursor</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">pointer</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    border-radius</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">.2rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">flex</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    align-items</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">center</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">  .wrapper:hover</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    background-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#f5f5f5</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">  svg</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    margin-right</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">5px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.2rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">  .sub-tree</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    padding-left</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>直接使用 <code>TreeTest</code> 组件即可：</p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">TreeTest</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">items</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="2-示例" tabindex="-1"><a class="header-anchor" href="#2-示例"><span>2. 示例</span></a></h2>`,5),P=h(`<details class="hint-container details"><summary>查看数据</summary><div class="language-json" data-ext="json" data-title="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">[</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;A&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;children&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;A1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;children&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">          {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;A1.1&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#D4D4D4;">          {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;A1.2&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        ]</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;A2&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;B&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;children&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;B1&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;B2&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;C&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre></div></details><h2 id="3-递归修改名称" tabindex="-1"><a class="header-anchor" href="#3-递归修改名称"><span>3. 递归修改名称</span></a></h2><p>我们从后端获得的数据往往和树形组件名称不一致，这时候我们需要递归修改名称。</p><p>例如后端得到的数据的名称是 <code>label</code> 和 <code>subNodes</code>，我们需要将其修改为 <code>name</code> 和 <code>children</code>。</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> Data</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  label</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#9CDCFE;">  subNodes</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">Data</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> TreeNode</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  children</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">TreeNode</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#9CDCFE;">  name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> data</span><span style="color:#D4D4D4;"> = [</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#9CDCFE;">    label:</span><span style="color:#CE9178;"> &#39;A&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    subNodes:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        label:</span><span style="color:#CE9178;"> &#39;A1&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        subNodes:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">          {</span></span>
<span class="line"><span style="color:#9CDCFE;">            label:</span><span style="color:#CE9178;"> &#39;A1.1&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#D4D4D4;">          {</span></span>
<span class="line"><span style="color:#9CDCFE;">            label:</span><span style="color:#CE9178;"> &#39;A1.2&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        label:</span><span style="color:#CE9178;"> &#39;A2&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#9CDCFE;">    label:</span><span style="color:#CE9178;"> &#39;B&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    subNodes:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        label:</span><span style="color:#CE9178;"> &#39;B1&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        label:</span><span style="color:#CE9178;"> &#39;B2&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#9CDCFE;">    label:</span><span style="color:#CE9178;"> &#39;C&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> changeNameRecursive</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Data</span><span style="color:#D4D4D4;">[]): </span><span style="color:#4EC9B0;">TreeNode</span><span style="color:#D4D4D4;">[] {</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#9CDCFE;"> data</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">map</span><span style="color:#D4D4D4;">(({ </span><span style="color:#9CDCFE;">label</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">subNodes</span><span style="color:#D4D4D4;"> }) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>
<span class="line"><span style="color:#9CDCFE;">    children:</span><span style="color:#9CDCFE;"> subNodes</span><span style="color:#D4D4D4;"> &amp;&amp; </span><span style="color:#DCDCAA;">changeNameRecursive</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">subNodes</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#9CDCFE;">    name:</span><span style="color:#9CDCFE;"> label</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  }))</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> result</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">changeNameRecursive</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#4FC1FF;">JSON</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">stringify</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">result</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"></span></code></pre></div><h2 id="4-实现默认展开或固定" tabindex="-1"><a class="header-anchor" href="#4-实现默认展开或固定"><span>4. 实现默认展开或固定</span></a></h2><p>细节不予以讨论，本项目实现了一份默认展开的版本，可以参考。</p><details class="hint-container details"><summary>查看代码</summary><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Icon</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@iconify/vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> Node</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // 子节点</span></span>
<span class="line"><span style="color:#9CDCFE;">  children</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">Node</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#6A9955;">  // 是否固定</span></span>
<span class="line"><span style="color:#9CDCFE;">  fixed</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">boolean</span></span>
<span class="line"><span style="color:#6A9955;">  // 标签</span></span>
<span class="line"><span style="color:#9CDCFE;">  label</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">  // 名称</span></span>
<span class="line"><span style="color:#9CDCFE;">  name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">  // 注释</span></span>
<span class="line"><span style="color:#9CDCFE;">  note</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">  // 是否默认显示</span></span>
<span class="line"><span style="color:#9CDCFE;">  show</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">boolean</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> props</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">defineProps</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  items</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Node</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> isShow</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">[]&gt;([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/**</span></span>
<span class="line"><span style="color:#6A9955;"> * 切换显示状态</span></span>
<span class="line"><span style="color:#6A9955;"> * </span><span style="color:#569CD6;">@param</span><span style="color:#9CDCFE;"> i</span><span style="color:#6A9955;"> 第几个节点</span></span>
<span class="line"><span style="color:#6A9955;"> */</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> toggle</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">props</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">items</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">].</span><span style="color:#9CDCFE;">fixed</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#C586C0;">    return</span></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">isShow</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">] === </span><span style="color:#569CD6;">undefined</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">    isShow</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">] = </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#C586C0;">  else</span></span>
<span class="line"><span style="color:#9CDCFE;">    isShow</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">] = !</span><span style="color:#9CDCFE;">isShow</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">ul</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">li</span><span style="color:#C586C0;"> v-for</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">i</span><span style="color:#569CD6;"> in</span><span style="color:#9CDCFE;"> props</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">items</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">      &lt;</span><span style="color:#569CD6;">div</span></span>
<span class="line"><span style="color:#D4D4D4;">        :</span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;">{ </span><span style="color:#C8C8C8;">tooltip</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">note</span><span style="color:#D4D4D4;"> }</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">data-tooltip</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#CE9178;">\`</span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">: </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">note</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;wrapper&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        @</span><span style="color:#9CDCFE;">click</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#DCDCAA;">toggle</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">)</span><span style="color:#D4D4D4;">&quot;</span></span>
<span class="line"><span style="color:#808080;">      &gt;</span></span>
<span class="line"><span style="color:#808080;">        &lt;</span><span style="color:#569CD6;">Icon</span></span>
<span class="line"><span style="color:#C586C0;">          v-if</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;"> &amp;&amp; </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          :</span><span style="color:#9CDCFE;">icon</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;">(!!</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">show</span><span style="color:#D4D4D4;"> !== !!</span><span style="color:#9CDCFE;">isShow</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">]) ? </span><span style="color:#CE9178;">&#39;fluent:chevron-down-24-regular&#39;</span><span style="color:#D4D4D4;"> : </span><span style="color:#CE9178;">&#39;fluent:chevron-right-24-regular&#39;</span><span style="color:#D4D4D4;">&quot;</span></span>
<span class="line"><span style="color:#808080;">        /&gt;</span></span>
<span class="line"><span style="color:#808080;">        &lt;</span><span style="color:#569CD6;">Icon</span><span style="color:#C586C0;"> v-else</span><span style="color:#9CDCFE;"> icon</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;fluent:document-24-regular&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">        &lt;</span><span style="color:#569CD6;">span</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;name&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">{{ </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">span</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">        &lt;</span><span style="color:#569CD6;">span</span><span style="color:#C586C0;"> v-if</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">label</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;label&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">          {{ </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">label</span><span style="color:#D4D4D4;"> }}</span></span>
<span class="line"><span style="color:#808080;">          &lt;</span><span style="color:#569CD6;">Icon</span><span style="color:#C586C0;"> v-if</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">note</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;"> icon</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;fluent:question-circle-24-regular&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">        &lt;/</span><span style="color:#569CD6;">span</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">      &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">      &lt;</span><span style="color:#569CD6;">div</span><span style="color:#C586C0;"> v-if</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;"> &amp;&amp; </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;sub-tree&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">        &lt;</span><span style="color:#569CD6;">TreeNode</span><span style="color:#9CDCFE;"> v-show</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;">!!</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">show</span><span style="color:#D4D4D4;"> !== !!</span><span style="color:#9CDCFE;">isShow</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">items</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">      &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;/</span><span style="color:#569CD6;">li</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">ul</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#9CDCFE;"> scoped</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;scss&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#9CDCFE;">$mono-font</span><span style="color:#D4D4D4;">: Consolas, Monaco, </span><span style="color:#CE9178;">Lucida</span><span style="color:#D4D4D4;"> Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, </span><span style="color:#CE9178;">Courier</span><span style="color:#9CDCFE;"> New</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">monospace</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">ul</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  padding-left</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">li</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  list-style</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">none</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  user-select</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">none</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">  .wrapper</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    padding</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">.2rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D7BA7D;">    cursor</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">pointer</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    border-radius</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">.2rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">flex</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    align-items</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">center</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">    &amp;</span><span style="color:#D7BA7D;">:hover</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D7BA7D;">      cursor</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">pointer</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">      box-shadow</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#B5CEA8;"> 0</span><span style="color:#B5CEA8;"> 15px</span><span style="color:#B5CEA8;"> 0</span><span style="color:#DCDCAA;"> var</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">--box-shadow</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#9CDCFE;">      border-radius</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">10px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">    svg</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      margin-right</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">5px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">      padding-left</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">10px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">      width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.2rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">    span</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      font-family</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$mono-font</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">      &amp;</span><span style="color:#D7BA7D;">.name</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        color</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">var</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">--c-text</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#9CDCFE;">        overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">hidden</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">        white-space</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">nowrap</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">        text-overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ellipsis</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">      &amp;</span><span style="color:#D7BA7D;">.label</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        margin-left</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">        color</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">var</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">--c-text-quote</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#9CDCFE;">        overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">hidden</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">        white-space</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">nowrap</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">        text-overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ellipsis</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">.sub-tree</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  margin-left</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.8rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// Ref: https://picturepan2.github.io/spectre/components/tooltips.html</span></span>
<span class="line"><span style="color:#6A9955;">// Different from the ../styles/tooltip.scss</span></span>
<span class="line"><span style="color:#6A9955;">// If we can split this style and use common style, it will be better.</span></span>
<span class="line"><span style="color:#D7BA7D;">.tooltip</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  position</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">relative</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  &amp;</span><span style="color:#D7BA7D;">::after</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    background</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">rgba</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">48</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">55</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">66</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">.95</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#9CDCFE;">    border-radius</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">.2rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    bottom</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100%</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#fff</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D7BA7D;">    content</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">attr</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">data-tooltip</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#9CDCFE;">    display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">block</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    left</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">50%</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    max-width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">60vw</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    opacity</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">hidden</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    padding</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">.2rem</span><span style="color:#B5CEA8;"> .4rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    pointer-events</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">none</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    position</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">absolute</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    transform</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">translate</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">-50%</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">.4rem</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#9CDCFE;">    transition</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">opacity</span><span style="color:#B5CEA8;"> .2s</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">transform</span><span style="color:#B5CEA8;"> .2s</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    white-space</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">pre-wrap</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    z-index</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">300</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    bottom</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">auto</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    top</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100%</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    font-family</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$mono-font</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  &amp;</span><span style="color:#D7BA7D;">:hover::after</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    opacity</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.9</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    transform</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">translate</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">-50%</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">.2rem</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre></div></details>`,8),Z=m({__name:"tree-component.html",setup(i){return(E,D)=>{const t=y("router-link"),u=y("CodeTabs");return o(),c("div",null,[V,s("nav",I,[s("ul",null,[s("li",null,[e(t,{to:"#1-实现原理"},{default:l(()=>[a("1. 实现原理")]),_:1})]),s("li",null,[e(t,{to:"#2-示例"},{default:l(()=>[a("2. 示例")]),_:1})]),s("li",null,[e(t,{to:"#3-递归修改名称"},{default:l(()=>[a("3. 递归修改名称")]),_:1})]),s("li",null,[e(t,{to:"#4-实现默认展开或固定"},{default:l(()=>[a("4. 实现默认展开或固定")]),_:1})])])]),$,M,e(u,{id:"13",data:[{id:"yarn"},{id:"npm"},{id:"pnpm"}]},{title0:l(({value:p,isActive:n})=>[a("yarn")]),title1:l(({value:p,isActive:n})=>[a("npm")]),title2:l(({value:p,isActive:n})=>[a("pnpm")]),tab0:l(({value:p,isActive:n})=>[L]),tab1:l(({value:p,isActive:n})=>[j]),tab2:l(({value:p,isActive:n})=>[R]),_:1}),z,e(T,{items:C(S)},null,8,["items"]),P])}}}),G=g(Z,[["__file","tree-component.html.vue"]]),K=JSON.parse('{"path":"/vue/collections/tree-component.html","title":"Vue 树形组件","lang":"zh-CN","frontmatter":{"description":"Vue 树形组件 1. 实现原理 本示例使用 @iconify/vue 作为图标库，如果你没有安装，可以使用下面的命令或 HTML 代码安装。 在 Vue 的 <template> 中使用自身的名称即可实现树形组件。 直接使用 TreeTest 组件即可： 2. 示例","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/vue/collections/tree-component.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"Vue 树形组件"}],["meta",{"property":"og:description","content":"Vue 树形组件 1. 实现原理 本示例使用 @iconify/vue 作为图标库，如果你没有安装，可以使用下面的命令或 HTML 代码安装。 在 Vue 的 <template> 中使用自身的名称即可实现树形组件。 直接使用 TreeTest 组件即可： 2. 示例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T11:44:04.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T11:44:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue 树形组件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T11:44:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 实现原理","slug":"1-实现原理","link":"#1-实现原理","children":[]},{"level":2,"title":"2. 示例","slug":"2-示例","link":"#2-示例","children":[]},{"level":2,"title":"3. 递归修改名称","slug":"3-递归修改名称","link":"#3-递归修改名称","children":[]},{"level":2,"title":"4. 实现默认展开或固定","slug":"4-实现默认展开或固定","link":"#4-实现默认展开或固定","children":[]}],"git":{"createdTime":1681286688000,"updatedTime":1714823044000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.87,"words":261},"filePathRelative":"vue/collections/tree-component.md","localizedDate":"2023年4月12日","autoDesc":true}');export{G as comp,K as data};
