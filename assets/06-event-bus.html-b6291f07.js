import{_ as p,r as o,o as e,c as D,d as s,e as n,b as l,f as c}from"./app-eaa63399.js";const t={},r=c(`<h1 id="_6-事件总线" tabindex="-1"><a class="header-anchor" href="#_6-事件总线" aria-hidden="true">#</a> 6. 事件总线</h1><p>使用发布订阅模式实现事件总线：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">EventEmitter</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">constructor</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">cache</span><span style="color:#D4D4D4;"> = {}</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">fn</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">cache</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">]) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">cache</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">].</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">fn</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    } </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">cache</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">] = [</span><span style="color:#9CDCFE;">fn</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">off</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">fn</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">tasks</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">cache</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">tasks</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">index</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">tasks</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">findIndex</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">f</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">f</span><span style="color:#D4D4D4;"> === </span><span style="color:#9CDCFE;">fn</span><span style="color:#D4D4D4;"> || </span><span style="color:#9CDCFE;">f</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">callback</span><span style="color:#D4D4D4;"> === </span><span style="color:#9CDCFE;">fn</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;"> &gt;= </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">tasks</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">splice</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">emit</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">once</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">, ...</span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">cache</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">]) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 创建副本，如果回调函数内继续注册相同事件，会造成死循环</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">tasks</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">cache</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">].</span><span style="color:#DCDCAA;">slice</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">fn</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">of</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">tasks</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">(...</span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">once</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">delete</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">cache</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i={class:"hint-container info"},y=s("p",{class:"hint-container-title"},"事件总线",-1),C={href:"https://www.npmjs.com/package/emittery",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"emittery",-1),v={href:"https://www.npmjs.com/package/event-emitter",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"event-emitter",-1),u={href:"https://www.npmjs.com/package/mitt",target:"_blank",rel:"noopener noreferrer"},E=s("code",null,"mitt",-1);function F(h,b){const a=o("ExternalLinkIcon");return e(),D("div",null,[r,s("div",i,[y,s("p",null,[n("实现事件总线第三方库有 "),s("a",C,[d,l(a)]),n("、"),s("a",v,[m,l(a)]),n(" 和 "),s("a",u,[E,l(a)]),n("。")])])])}const _=p(t,[["render",F],["__file","06-event-bus.html.vue"]]);export{_ as default};
