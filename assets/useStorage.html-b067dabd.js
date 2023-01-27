import{_ as c,M as o,p as l,q as i,R as n,t as s,N as a,V as e,a1 as u}from"./framework-d3922052.js";const r={},k={id:"usestorage",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#usestorage","aria-hidden":"true"},"#",-1),g={href:"https://vueuse.org/core/useStorage/",target:"_blank",rel:"noopener noreferrer"},v={class:"table-of-contents"},m=u(`<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><p>响应式的 <code>localStorage</code> / <code>sessionStorage</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useStorage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token comment">// bind object</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useStorage</span><span class="token punctuation">(</span><span class="token string">&#39;my-store&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">,</span> greeting<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// bind boolean</span>
<span class="token keyword">const</span> flag <span class="token operator">=</span> <span class="token function">useStorage</span><span class="token punctuation">(</span><span class="token string">&#39;my-flag&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// returns Ref&lt;boolean&gt;</span>

<span class="token comment">// bind number</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">useStorage</span><span class="token punctuation">(</span><span class="token string">&#39;my-count&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// returns Ref&lt;number&gt;</span>

<span class="token comment">// bind string with SessionStorage</span>
<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">useStorage</span><span class="token punctuation">(</span><span class="token string">&#39;my-id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;some-string-id&#39;</span><span class="token punctuation">,</span> sessionStorage<span class="token punctuation">)</span> <span class="token comment">// returns Ref&lt;string&gt;</span>

<span class="token comment">// delete data from storage</span>
state<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并缺省值" tabindex="-1"><a class="header-anchor" href="#合并缺省值" aria-hidden="true">#</a> 合并缺省值</h2><p>默认情况下，如果键已经存在，那么 <code>useStorage</code> 将使用来自存储的值，并忽略默认值。请注意，当你向默认值添加更多的属性时，如果客户端的存储没有该键，则该键可能是未定义的。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;my-store&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;{&quot;hello&quot;: &quot;hello&quot;}&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useStorage</span><span class="token punctuation">(</span><span class="token string">&#39;my-store&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">,</span> greeting<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> localStorage<span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>greeting<span class="token punctuation">)</span> <span class="token comment">// undefined, since the value is not presented in storage</span>
</code></pre></div><p>为了解决这个问题，可以传递 <code>mergeDefaults</code> 选项：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;my-store&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;{&quot;hello&quot;: &quot;nihao&quot;}&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useStorage</span><span class="token punctuation">(</span>
  <span class="token string">&#39;my-store&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">,</span> greeting<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  localStorage<span class="token punctuation">,</span>
  <span class="token punctuation">{</span> mergeDefaults<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>hello<span class="token punctuation">)</span>    <span class="token comment">// &#39;nihao&#39;, from storage</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>greeting<span class="token punctuation">)</span> <span class="token comment">// &#39;hello&#39;, from merged default value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当设置为 <code>true</code> 时，它将对对象执行 <strong>浅层合并</strong>。你可以传递一个函数来执行自定义的合并（例如，深度合并），例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useStorage</span><span class="token punctuation">(</span>
  <span class="token string">&#39;my-store&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">,</span> greeting<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  localStorage<span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token function-variable function">mergeDefaults</span><span class="token operator">:</span> <span class="token punctuation">(</span>storageValue<span class="token punctuation">,</span> defaults<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">deepMerge</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> storageValue<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre></div><h2 id="自定义序列化" tabindex="-1"><a class="header-anchor" href="#自定义序列化" aria-hidden="true">#</a> 自定义序列化</h2><p>默认情况下，<code>useStorage</code> 会根据提供的默认值的数据类型，智能地使用相应的序列化器。例如，<code>JSON.stringify</code> / <code>JSON.parse</code> 将被用于对象，<code>Number.toString</code> / <code>parseFloat</code> 用于数字，等等。</p><p>你也可以提供你自己的序列化函数给 <code>useStorage</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useStorage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token function">useStorage</span><span class="token punctuation">(</span>
  <span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    serializer<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">read</span><span class="token operator">:</span> <span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token function-variable function">write</span><span class="token operator">:</span> <span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，当你提供 <code>null</code> 作为默认值时，<code>useStorage</code> 不能从它那里假设数据类型。在这种情况下，你可以提供一个自定义的序列化器，或者明确地重新使用内置的序列化器。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StorageSerializers<span class="token punctuation">,</span> useStorage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token keyword">const</span> objectLike <span class="token operator">=</span> <span class="token function">useStorage</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> serializer<span class="token operator">:</span> StorageSerializers<span class="token punctuation">.</span>object <span class="token punctuation">}</span><span class="token punctuation">)</span>
objectLike<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span>
</code></pre></div>`,16);function b(f,h){const p=o("ExternalLinkIcon"),t=o("router-link");return l(),i("div",null,[n("h1",k,[d,s(),n("a",g,[s("useStorage"),a(p)])]),n("nav",v,[n("ul",null,[n("li",null,[a(t,{to:"#使用示例"},{default:e(()=>[s("使用示例")]),_:1})]),n("li",null,[a(t,{to:"#合并缺省值"},{default:e(()=>[s("合并缺省值")]),_:1})]),n("li",null,[a(t,{to:"#自定义序列化"},{default:e(()=>[s("自定义序列化")]),_:1})])])]),m])}const S=c(r,[["render",b],["__file","useStorage.html.vue"]]);export{S as default};
