import{_ as e,M as o,p,q as c,R as s,t as n,N as t,a1 as l}from"./framework-546207d5.js";const i={},u=s("h1",{id:"tensorflow-lite-入门示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tensorflow-lite-入门示例","aria-hidden":"true"},"#"),n(" TensorFlow Lite 入门示例")],-1),r=s("h2",{id:"_1-android-识别鲜花类型",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-android-识别鲜花类型","aria-hidden":"true"},"#"),n(" 1. Android 识别鲜花类型")],-1),d={href:"https://codelabs.developers.google.com/codelabs/recognize-flowers-with-tensorflow-on-android/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://colab.research.google.com/drive/1sqBewUnvdATOO-yblj55EBFb2sM24XHR",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"FlowerModel.tflite",-1),g=l(`<p>我们克隆官方的项目，然后用 Android Studio 打开。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/hoitab/TFLClassify.git
</code></pre></div><p>将这个应用运行到手机上，应该能看到教程第四步的效果，每个值都是随机的。</p><p>按照第五步的说明，将 <code>FlowerModel.tflite</code> 加入项目。然后是第六步，查找 TODO List，将每一步的代码复制到指定位置。</p><p>记得注释下面的代码：</p><div class="language-kotlin" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">// START - Placeholder code at the start of the codelab. Comment this block of code out.</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">0</span><span class="token operator">..</span>MAX_RESULT_DISPLAY<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    items<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">Recognition</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Fake label </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">i</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> Random<span class="token punctuation">.</span><span class="token function">nextFloat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// END - Placeholder code at the start of the codelab. Comment this block of code out.</span>
</code></pre></div><p>然后可以看到教程第七步的效果。下面是使用 GPU 推理，加入依赖：</p><div class="language-gradle" data-ext="gradle"><pre class="language-gradle"><code><span class="token keyword">implementation</span> <span class="token string">&#39;org.tensorflow:tensorflow-lite-gpu:2.3.0&#39;</span>
</code></pre></div><p>然后 Sync，接着修改 TODO 6 的代码为下面的代码即可，重新运行。</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">private</span> <span class="token keyword">val</span> flowerModel<span class="token operator">:</span> FlowerModel <span class="token keyword">by</span> lazy <span class="token punctuation">{</span>
    <span class="token comment">// Initialize the Flower Model</span>
    <span class="token comment">// TODO 6. Optional GPU acceleration</span>
    <span class="token keyword">val</span> compatList <span class="token operator">=</span> <span class="token function">CompatibilityList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">val</span> options <span class="token operator">=</span> <span class="token keyword">if</span><span class="token punctuation">(</span>compatList<span class="token punctuation">.</span>isDelegateSupportedOnThisDevice<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Log<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>TAG<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;This device is GPU Compatible &quot;</span></span><span class="token punctuation">)</span>
        Model<span class="token punctuation">.</span>Options<span class="token punctuation">.</span><span class="token function">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setDevice</span><span class="token punctuation">(</span>Model<span class="token punctuation">.</span>Device<span class="token punctuation">.</span>GPU<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        Log<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>TAG<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;This device is GPU Incompatible &quot;</span></span><span class="token punctuation">)</span>
        Model<span class="token punctuation">.</span>Options<span class="token punctuation">.</span><span class="token function">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNumThreads</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    FlowerModel<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果此时正在使用 GPU 推理，控制台能看到日志。如果出现下面的日志</p><div class="language-log" data-ext="log"><pre class="language-log"><code>D<span class="token operator">/</span>TFL Classify<span class="token operator">:</span> This device is GPU Incompatible
</code></pre></div><p>则是 GPU 不兼容，可能是手机的兼容性或版本的兼容性不足。</p>`,13);function m(h,b){const a=o("ExternalLinkIcon");return p(),c("div",null,[u,r,s("p",null,[n("我们可以从 "),s("a",d,[n("官方示例"),t(a)]),n(" 学习最基本的使用方法。")]),s("p",null,[n("我们为了得到模型，需要在 "),s("a",k,[n("Colab"),t(a)]),n(" 上训练一个分类模型。然后下载此模型保存为 "),v,n(" 以备使用。")]),g])}const _=e(i,[["render",m],["__file","get-started.html.vue"]]);export{_ as default};
