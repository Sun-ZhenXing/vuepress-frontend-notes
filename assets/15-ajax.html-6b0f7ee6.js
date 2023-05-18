import{_ as s,o as n,c as a,f as l}from"./app-eaa63399.js";const p={},o=l(`<h1 id="_15-ajax" tabindex="-1"><a class="header-anchor" href="#_15-ajax" aria-hidden="true">#</a> 15. Ajax</h1><p>Ajax 简易实现：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">getJSON</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Promise</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">resolve</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">reject</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">xhr</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">XMLHttpRequest</span><span style="color:#D4D4D4;"> ? </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">XMLHttpRequest</span><span style="color:#D4D4D4;">() : </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">ActiveXObject</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Microsoft.XMLHTTP&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">xhr</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">open</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;GET&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">xhr</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">setRequestHeader</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Accept&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;application/json&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">xhr</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">onreadystatechange</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">xhr</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">readyState</span><span style="color:#D4D4D4;"> !== </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">xhr</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">status</span><span style="color:#D4D4D4;"> === </span><span style="color:#B5CEA8;">200</span><span style="color:#D4D4D4;"> || </span><span style="color:#9CDCFE;">xhr</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">status</span><span style="color:#D4D4D4;"> === </span><span style="color:#B5CEA8;">304</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">xhr</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">responseText</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">      } </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#DCDCAA;">reject</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Error</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">xhr</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">responseText</span><span style="color:#D4D4D4;">));</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    };</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">xhr</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">send</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;">  });</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[o];function D(c,r){return n(),a("div",null,e)}const y=s(p,[["render",D],["__file","15-ajax.html.vue"]]);export{y as default};
