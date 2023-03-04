import{_ as e,M as o,p as c,q as l,R as n,N as t,V as p,t as s,a1 as u}from"./framework-546207d5.js";const i={},k=n("h1",{id:"使用-okhttp-发送请求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-okhttp-发送请求","aria-hidden":"true"},"#"),s(" 使用 okhttp 发送请求")],-1),r={class:"table-of-contents"},d=u(`<h2 id="_1-添加依赖" tabindex="-1"><a class="header-anchor" href="#_1-添加依赖" aria-hidden="true">#</a> 1. 添加依赖</h2><p>在 <code>build.gradle</code> 中添加：</p><div class="language-gradle" data-ext="gradle"><pre class="language-gradle"><code><span class="token keyword">implementation</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;com.squareup.okhttp3:okhttp:4.10.0&quot;</span></span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_2-基础设置" tabindex="-1"><a class="header-anchor" href="#_2-基础设置" aria-hidden="true">#</a> 2. 基础设置</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">private</span> <span class="token keyword">fun</span> <span class="token function">setTimeoutAndCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> cacheDir <span class="token operator">=</span> externalCacheDir
    <span class="token keyword">val</span> cacheSize <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024L</span>
    <span class="token keyword">val</span> okHttpClientBuilder <span class="token operator">=</span> OkHttpClient<span class="token punctuation">.</span><span class="token function">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">connectTimeout</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> TimeUnit<span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">readTimeout</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> TimeUnit<span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">writeTimeout</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> TimeUnit<span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">cache</span><span class="token punctuation">(</span><span class="token function">Cache</span><span class="token punctuation">(</span><span class="token function">File</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;cache.txt&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> cacheSize<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> okHttpClient <span class="token operator">=</span> okHttpClientBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-发起异步请求" tabindex="-1"><a class="header-anchor" href="#_2-发起异步请求" aria-hidden="true">#</a> 2. 发起异步请求</h2><h3 id="_2-1-基本-get-请求" tabindex="-1"><a class="header-anchor" href="#_2-1-基本-get-请求" aria-hidden="true">#</a> 2.1 基本 GET 请求</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">private</span> <span class="token keyword">fun</span> <span class="token function">asyncGet</span><span class="token punctuation">(</span>url<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> request <span class="token operator">=</span> Request<span class="token punctuation">.</span><span class="token function">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;GET&quot;</span></span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>    <span class="token comment">// 也可以直接使用 .get() 方法 </span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">OkHttpClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newCall</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token keyword">object</span> <span class="token operator">:</span> Callback <span class="token punctuation">{</span>
        <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onFailure</span><span class="token punctuation">(</span>call<span class="token operator">:</span> Call<span class="token punctuation">,</span> e<span class="token operator">:</span> IOException<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onResponse</span><span class="token punctuation">(</span>call<span class="token operator">:</span> Call<span class="token punctuation">,</span> response<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-post-请求" tabindex="-1"><a class="header-anchor" href="#_2-2-post-请求" aria-hidden="true">#</a> 2.2 POST 请求</h3><p>创建请求方法：</p><div class="language-kotlin" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">val</span> requestBody <span class="token operator">=</span> FormBody<span class="token punctuation">.</span><span class="token function">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;username&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;alex&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;password&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;pwdstring&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token keyword">val</span> request <span class="token operator">=</span> Request<span class="token punctuation">.</span><span class="token function">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>requestBody<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_2-3-post-发送文件" tabindex="-1"><a class="header-anchor" href="#_2-3-post-发送文件" aria-hidden="true">#</a> 2.3 POST 发送文件</h3><div class="language-kotlin" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">val</span> filePath <span class="token operator">=</span> Environment<span class="token punctuation">.</span><span class="token function">getExternalStorageDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>absolutePath
<span class="token keyword">val</span> file <span class="token operator">=</span> <span class="token function">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;test.txt&quot;</span></span><span class="token punctuation">)</span>

<span class="token keyword">val</span> request <span class="token operator">=</span> Request<span class="token punctuation">.</span><span class="token function">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">asRequestBody</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;text/txt; charset=utf-8&quot;</span></span><span class="token punctuation">.</span><span class="token function">toMediaType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_2-4-异步下载一个文件" tabindex="-1"><a class="header-anchor" href="#_2-4-异步下载一个文件" aria-hidden="true">#</a> 2.4 异步下载一个文件</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onResponse</span><span class="token punctuation">(</span>call<span class="token operator">:</span> Call<span class="token punctuation">,</span> response<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> inputStream <span class="token operator">=</span> response<span class="token punctuation">.</span>body<span class="token operator">!!</span><span class="token punctuation">.</span><span class="token function">byteStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> filePath <span class="token operator">=</span> Environment<span class="token punctuation">.</span><span class="token function">getExternalStorageDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>absolutePath
    <span class="token keyword">val</span> file <span class="token operator">=</span> <span class="token function">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;test.txt&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> fileOutputStream <span class="token operator">=</span> <span class="token function">FileOutputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token keyword">val</span> buffer <span class="token operator">=</span> <span class="token function">ByteArray</span><span class="token punctuation">(</span><span class="token number">2048</span><span class="token punctuation">)</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> len <span class="token operator">=</span> inputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span>
        fileOutputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>len<span class="token operator">!</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    fileOutputStream<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-异步上传-multipart-文件" tabindex="-1"><a class="header-anchor" href="#_2-5-异步上传-multipart-文件" aria-hidden="true">#</a> 2.5 异步上传 Multipart 文件</h3><div class="language-kotlin" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">val</span> requestBody <span class="token operator">=</span> MultipartBody<span class="token punctuation">.</span><span class="token function">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span>MultipartBody<span class="token punctuation">.</span>FORM<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">addFormDataPart</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;title&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;img&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">addFormDataPart</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;image&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;test.png&quot;</span></span><span class="token punctuation">,</span> RequestBody<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
        <span class="token string-literal singleline"><span class="token string">&quot;image/png&quot;</span></span><span class="token punctuation">.</span><span class="token function">toMediaType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">File</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;/sdcard/test.png&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,17);function v(f,m){const a=o("router-link");return c(),l("div",null,[k,n("nav",r,[n("ul",null,[n("li",null,[t(a,{to:"#_1-添加依赖"},{default:p(()=>[s("1. 添加依赖")]),_:1})]),n("li",null,[t(a,{to:"#_2-基础设置"},{default:p(()=>[s("2. 基础设置")]),_:1})]),n("li",null,[t(a,{to:"#_2-发起异步请求"},{default:p(()=>[s("2. 发起异步请求")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#_2-1-基本-get-请求"},{default:p(()=>[s("2.1 基本 GET 请求")]),_:1})]),n("li",null,[t(a,{to:"#_2-2-post-请求"},{default:p(()=>[s("2.2 POST 请求")]),_:1})]),n("li",null,[t(a,{to:"#_2-3-post-发送文件"},{default:p(()=>[s("2.3 POST 发送文件")]),_:1})]),n("li",null,[t(a,{to:"#_2-4-异步下载一个文件"},{default:p(()=>[s("2.4 异步下载一个文件")]),_:1})]),n("li",null,[t(a,{to:"#_2-5-异步上传-multipart-文件"},{default:p(()=>[s("2.5 异步上传 Multipart 文件")]),_:1})])])])])]),d])}const h=e(i,[["render",v],["__file","use-okhttp.html.vue"]]);export{h as default};
