import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as t,c as p,b as s,e,a as o,d as r}from"./app-FEcl1joV.js";const c={},i=s("h1",{id:"tensorflow-lite-入门示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tensorflow-lite-入门示例"},[s("span",null,"TensorFlow Lite 入门示例")])],-1),D=s("h2",{id:"1-android-识别鲜花类型",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#1-android-识别鲜花类型"},[s("span",null,"1. Android 识别鲜花类型")])],-1),d={href:"https://codelabs.developers.google.com/codelabs/recognize-flowers-with-tensorflow-on-android/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://colab.research.google.com/drive/1sqBewUnvdATOO-yblj55EBFb2sM24XHR",target:"_blank",rel:"noopener noreferrer"},C=s("code",null,"FlowerModel.tflite",-1),h=r(`<p>我们克隆官方的项目，然后用 Android Studio 打开。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> clone</span><span style="color:#CE9178;"> https://github.com/hoitab/TFLClassify.git</span></span>
<span class="line"></span></code></pre></div><p>将这个应用运行到手机上，应该能看到教程第四步的效果，每个值都是随机的。</p><p>按照第五步的说明，将 <code>FlowerModel.tflite</code> 加入项目。然后是第六步，查找 TODO List，将每一步的代码复制到指定位置。</p><p>记得注释下面的代码：</p><div class="language-kotlin" data-ext="kt" data-title="kt"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// START - Placeholder code at the start of the codelab. Comment this block of code out.</span></span>
<span class="line"><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> (i </span><span style="color:#569CD6;">in</span><span style="color:#B5CEA8;"> 0</span><span style="color:#D4D4D4;">..MAX_RESULT_DISPLAY-</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    items.</span><span style="color:#DCDCAA;">add</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">Recognition</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;Fake label </span><span style="color:#9CDCFE;">$i</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;">, Random.</span><span style="color:#DCDCAA;">nextFloat</span><span style="color:#D4D4D4;">()))</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#6A9955;">// END - Placeholder code at the start of the codelab. Comment this block of code out.</span></span>
<span class="line"></span></code></pre></div><p>然后可以看到教程第七步的效果。下面是使用 GPU 推理，加入依赖：</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">implementation </span><span style="color:#CE9178;">&#39;org.tensorflow:tensorflow-lite-gpu:2.3.0&#39;</span></span>
<span class="line"></span></code></pre></div><p>然后 Sync，接着修改 TODO 6 的代码为下面的代码即可，重新运行。</p><div class="language-kotlin" data-ext="kt" data-title="kt"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">private</span><span style="color:#569CD6;"> val</span><span style="color:#D4D4D4;"> flowerModel: </span><span style="color:#4EC9B0;">FlowerModel</span><span style="color:#4EC9B0;"> by</span><span style="color:#4EC9B0;"> lazy</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">    // Initialize the Flower Model</span></span>
<span class="line"><span style="color:#6A9955;">    // TODO 6. Optional GPU acceleration</span></span>
<span class="line"><span style="color:#569CD6;">    val</span><span style="color:#D4D4D4;"> compatList = </span><span style="color:#DCDCAA;">CompatibilityList</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">    val</span><span style="color:#D4D4D4;"> options = </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;">(compatList.isDelegateSupportedOnThisDevice) {</span></span>
<span class="line"><span style="color:#D4D4D4;">        Log.</span><span style="color:#DCDCAA;">d</span><span style="color:#D4D4D4;">(TAG, </span><span style="color:#CE9178;">&quot;This device is GPU Compatible &quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">        Model.Options.</span><span style="color:#DCDCAA;">Builder</span><span style="color:#D4D4D4;">().</span><span style="color:#DCDCAA;">setDevice</span><span style="color:#D4D4D4;">(Model.Device.GPU).</span><span style="color:#DCDCAA;">build</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    } </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        Log.</span><span style="color:#DCDCAA;">d</span><span style="color:#D4D4D4;">(TAG, </span><span style="color:#CE9178;">&quot;This device is GPU Incompatible &quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">        Model.Options.</span><span style="color:#DCDCAA;">Builder</span><span style="color:#D4D4D4;">().</span><span style="color:#DCDCAA;">setNumThreads</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">).</span><span style="color:#DCDCAA;">build</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">    FlowerModel.</span><span style="color:#DCDCAA;">newInstance</span><span style="color:#D4D4D4;">(ctx, options)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>如果此时正在使用 GPU 推理，控制台能看到日志。如果出现下面的日志</p><div class="language-console" data-ext="console" data-title="console"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">D/TFL Classify: This device is GPU Incompatible</span></span>
<span class="line"></span></code></pre></div><p>则是 GPU 不兼容，可能是手机的兼容性或版本的兼容性不足。</p>`,13);function u(m,g){const a=l("ExternalLinkIcon");return t(),p("div",null,[i,D,s("p",null,[e("我们可以从 "),s("a",d,[e("官方示例"),o(a)]),e(" 学习最基本的使用方法。")]),s("p",null,[e("我们为了得到模型，需要在 "),s("a",y,[e("Colab"),o(a)]),e(" 上训练一个分类模型。然后下载此模型保存为 "),C,e(" 以备使用。")]),h])}const f=n(c,[["render",u],["__file","get-started.html.vue"]]),E=JSON.parse('{"path":"/android/tflite/get-started.html","title":"TensorFlow Lite 入门示例","lang":"zh-CN","frontmatter":{"description":"TensorFlow Lite 入门示例 1. Android 识别鲜花类型 我们可以从 官方示例 学习最基本的使用方法。 我们为了得到模型，需要在 Colab 上训练一个分类模型。然后下载此模型保存为 FlowerModel.tflite 以备使用。 我们克隆官方的项目，然后用 Android Studio 打开。 将这个应用运行到手机上，应该能看到...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/android/tflite/get-started.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"TensorFlow Lite 入门示例"}],["meta",{"property":"og:description","content":"TensorFlow Lite 入门示例 1. Android 识别鲜花类型 我们可以从 官方示例 学习最基本的使用方法。 我们为了得到模型，需要在 Colab 上训练一个分类模型。然后下载此模型保存为 FlowerModel.tflite 以备使用。 我们克隆官方的项目，然后用 Android Studio 打开。 将这个应用运行到手机上，应该能看到..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T12:03:18.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-04T12:03:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TensorFlow Lite 入门示例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T12:03:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. Android 识别鲜花类型","slug":"1-android-识别鲜花类型","link":"#1-android-识别鲜花类型","children":[]}],"git":{"createdTime":1678028459000,"updatedTime":1714824198000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":2}]},"readingTime":{"minutes":1.3,"words":391},"filePathRelative":"android/tflite/get-started.md","localizedDate":"2023年3月5日","autoDesc":true}');export{f as comp,E as data};
