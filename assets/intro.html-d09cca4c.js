import{_ as c,r,o as l,c as p,b as t,a as d,w as a,d as e,e as s}from"./app-a0d7238b.js";const i={},h=t("h1",{id:"tampermonkey-快速入门",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tampermonkey-快速入门","aria-hidden":"true"},"#"),e(" Tampermonkey 快速入门")],-1),u={class:"table-of-contents"},_=t("h2",{id:"1-入门",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#1-入门","aria-hidden":"true"},"#"),e(" 1. 入门")],-1),m={href:"https://www.tampermonkey.net/",target:"_blank",rel:"noopener noreferrer"},y=s(`<h2 id="2-使用开放的用户脚本" tabindex="-1"><a class="header-anchor" href="#2-使用开放的用户脚本" aria-hidden="true">#</a> 2. 使用开放的用户脚本</h2><h2 id="3-编写脚本" tabindex="-1"><a class="header-anchor" href="#3-编写脚本" aria-hidden="true">#</a> 3. 编写脚本</h2><div class="language-javascript" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// ==UserScript==</span></span>
<span class="line"><span style="color:#6A9955;">// @name         New Userscript</span></span>
<span class="line"><span style="color:#6A9955;">// @namespace    http://tampermonkey.net/</span></span>
<span class="line"><span style="color:#6A9955;">// @version      0.1</span></span>
<span class="line"><span style="color:#6A9955;">// @description  try to take over the world!</span></span>
<span class="line"><span style="color:#6A9955;">// @author       You</span></span>
<span class="line"><span style="color:#6A9955;">// @match        https://bbs.tampermonkey.net.cn/thread-1909-1-1.html</span></span>
<span class="line"><span style="color:#6A9955;">// @icon         https://www.google.com/s2/favicons?sz=64&amp;domain=tampermonkey.net.cn</span></span>
<span class="line"><span style="color:#6A9955;">// @grant        none</span></span>
<span class="line"><span style="color:#6A9955;">// ==/UserScript==</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;use strict&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// Your code here...</span></span>
<span class="line"><span style="color:#D4D4D4;">})();</span></span>
<span class="line"></span></code></pre></div><h3 id="31-脚本头信息" tabindex="-1"><a class="header-anchor" href="#31-脚本头信息" aria-hidden="true">#</a> 3.1 脚本头信息</h3>`,4),M={href:"https://www.tampermonkey.net/documentation.php",target:"_blank",rel:"noopener noreferrer"},f=s('<table><thead><tr><th>名称</th><th>描述</th><th>说明</th></tr></thead><tbody><tr><td><code>@name</code></td><td>脚本名称</td><td></td></tr><tr><td><code>@namespace</code></td><td>脚本命名空间</td><td></td></tr><tr><td><code>@version</code></td><td>脚本版本</td><td>语义化版本规则</td></tr><tr><td><code>@author</code></td><td>脚本作者</td><td>-</td></tr><tr><td><code>@description</code></td><td>脚本描述</td><td>-</td></tr><tr><td><code>@include</code></td><td>脚本匹配地址</td><td>可以使用正则表达式</td></tr><tr><td><code>@match</code></td><td>脚本匹配地址</td><td>允许使用通配符，更加严格</td></tr><tr><td><code>@exclude</code></td><td>排除脚本匹配地址</td><td>-</td></tr><tr><td><code>@require</code></td><td>引入外部 JS 文件</td><td>指向脚本开始运行之前加载并执行的 JavaScript 文件</td></tr><tr><td><code>@resource</code></td><td>预加载资源</td><td>预加载的资源由 <code>GM_getResourceURL</code> 访问</td></tr><tr><td><code>@connect</code></td><td>获取网站访问权限</td><td>允许由 <code>GM_xmlhttpRequest</code> 检索的子域</td></tr><tr><td><code>@run-at</code></td><td>脚本的运行时机</td><td>可选项：<code>document-start</code>、<code>body</code>、<code>end</code>、<code>idle</code>、<code>menu</code></td></tr><tr><td><code>@grant</code></td><td>申请 API 权限</td><td><code>none</code> 表示页面环境，<code>unsafeWindow</code> 表示沙盒环境，其他权限由 API 名称指定</td></tr><tr><td><code>@noframes</code></td><td>脚本标记</td><td>标记使脚本在主页上运行，但不在 <code>&lt;iframe&gt;</code> 上运行</td></tr></tbody></table><h3 id="32-api-说明" tabindex="-1"><a class="header-anchor" href="#32-api-说明" aria-hidden="true">#</a> 3.2 API 说明</h3><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><code>GM_addStyle</code></td><td>将给定样式添加到文档中并返回注入的样式元素</td></tr><tr><td><code>GM_addElement</code></td><td>创建指定的 HTML 元素，应用所有给定的属性并返回注入的 HTML 元素，此功能是实验性的</td></tr><tr><td><code>GM_setValue</code></td><td>存储一个给定名称的值</td></tr><tr><td><code>GM_getValue</code></td><td>从 <code>GM_setValue</code> 存储的名称中获取值</td></tr><tr><td><code>GM_deleteValue</code></td><td>将 <code>GM_setValue</code> 存储的名称删除</td></tr><tr><td><code>GM_listValues</code></td><td>列出存储的所有名称</td></tr><tr><td><code>GM_addValueChangeListener</code></td><td>侦听 <code>GM_setValue</code> 储存名称的值的更改并返回更改前和后的值</td></tr><tr><td><code>GM_removeValueChangeListener</code></td><td>删除由 <code>GM_addValueChangeListener</code> 添加的侦听器</td></tr><tr><td><code>GM_log</code></td><td>向控制台记录消息</td></tr><tr><td><code>GM_getResourceText</code></td><td>获取由 <code>@resource</code> 预加载的资源</td></tr><tr><td><code>GM_getResourceURL</code></td><td>获取由 <code>@resource</code> 预加载的 Base64 编码 URI</td></tr><tr><td><code>GM_registerMenuCommand</code></td><td>注册一个菜单，在运行此脚本的页面的中显示</td></tr><tr><td><code>GM_registerMenuCommand</code></td><td>取消由 <code>GM_registerMenuCommand</code> 注册的菜单</td></tr><tr><td><code>GM_openInTab</code></td><td>通过给定的 URL 打开一个新标签页</td></tr><tr><td><code>GM_xmlhttpRequest</code></td><td>通过脚本发送的 XHR 请求</td></tr><tr><td><code>GM_download</code></td><td>通过给定的 URL 下载文件到本地</td></tr><tr><td><code>GM_saveTab</code></td><td>保存选项卡对象，生命周期为选项卡的打开-&gt;关闭</td></tr><tr><td><code>GM_getTab</code></td><td>获取选项卡对象，生命周期为选项卡的打开-&gt;关闭</td></tr><tr><td><code>GM_getTabs</code></td><td>获取所有选项卡对象，生命周期为选项卡的打开-&gt;关闭</td></tr><tr><td><code>GM_notification</code></td><td>显示桌面通知</td></tr><tr><td><code>GM_setClipboard</code></td><td>将数据复制到剪贴板</td></tr></tbody></table>',3);function b(G,g){const o=r("router-link"),n=r("ExternalLinkIcon");return l(),p("div",null,[h,t("nav",u,[t("ul",null,[t("li",null,[d(o,{to:"#1-入门"},{default:a(()=>[e("1. 入门")]),_:1})]),t("li",null,[d(o,{to:"#2-使用开放的用户脚本"},{default:a(()=>[e("2. 使用开放的用户脚本")]),_:1})]),t("li",null,[d(o,{to:"#3-编写脚本"},{default:a(()=>[e("3. 编写脚本")]),_:1}),t("ul",null,[t("li",null,[d(o,{to:"#31-脚本头信息"},{default:a(()=>[e("3.1 脚本头信息")]),_:1})]),t("li",null,[d(o,{to:"#32-api-说明"},{default:a(()=>[e("3.2 API 说明")]),_:1})])])])])]),_,t("p",null,[t("a",m,[e("Tampermonkey"),d(n)]),e(" 是一款免费的浏览器扩展和最为流行的用户脚本管理器，它适用于 Chrome、Microsoft Edge、Safari 以及其他 Chromium 和 Firefox 内核的浏览器。")]),y,t("p",null,[e("推荐阅读 "),t("a",M,[e("官方文档"),d(n)]),e("。")]),f])}const x=c(i,[["render",b],["__file","intro.html.vue"]]);export{x as default};
