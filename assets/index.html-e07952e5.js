import{_ as d,M as i,p as s,q as _,R as e,N as n,V as a,t,a1 as c}from"./framework-bafc524a.js";const u={},h=e("h1",{id:"_1-了解同构渲染",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-了解同构渲染","aria-hidden":"true"},"#"),t(" 1. 了解同构渲染")],-1),p={class:"table-of-contents"},x=e("h2",{id:"_1-1-模板渲染",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-模板渲染","aria-hidden":"true"},"#"),t(" 1.1 模板渲染")],-1),f=e("strong",null,"模板渲染",-1),m=c('<p>可以在哪些位置进行渲染？</p><ul><li>服务端渲染</li><li>客户端渲染</li><li>同构渲染</li></ul><p>使用同构渲染系统中的数据，部分可能由服务端去渲染，而另一部分由客户端渲染。</p><p>Nuxt3 即同构渲染框架，帮助我们快速开发同构渲染页面。</p><h2 id="_1-2-服务端渲染" tabindex="-1"><a class="header-anchor" href="#_1-2-服务端渲染" aria-hidden="true">#</a> 1.2 服务端渲染</h2><p>早期我们使用服务端渲染，数据通过模板字符串进行拼接，生成 HTML 返回给客户端。</p><p>每次请求页面服务器都进行一次渲染，然后返回整个页面的数据。但是浏览器会直接得到 HTML 内容，显示更快。</p><p>这类系统主要使用预处理模板的技术（如 PHP、JSP 等），并使用 MVC 设计模式。</p><p>传统的服务端渲染的主要缺点如下：</p><ul><li>所有的渲染都发生在服务端，因此服务器压力较大</li><li>常常需要返回整个 HTML 数据，占用带宽</li></ul><h2 id="_1-3-客户端渲染" tabindex="-1"><a class="header-anchor" href="#_1-3-客户端渲染" aria-hidden="true">#</a> 1.3 客户端渲染</h2><p>后来我们通过 AJAX 等相关的技术，通过服务器提供 JSON 格式的 API 接口，就可以在客户端渲染各种不同的数据。每次请求可以只请求必要数据，因而可以有更强的灵活性。</p><p>这类系统主要基于 SPA 类的框架（如 React、Vue 等），使用 MVVM 设计模式。</p><p>基于 MVVM 的客户端渲染的主要缺点如下：</p><ul><li>首屏渲染慢</li><li>不利于 SEO（搜索引擎优化）</li></ul><h2 id="_1-4-nuxt3-用于" tabindex="-1"><a class="header-anchor" href="#_1-4-nuxt3-用于" aria-hidden="true">#</a> 1.4 Nuxt3 用于？</h2><p>Nuxt3 是基于 Vue3 的混合式框架，用于解决：</p><ul><li>首屏渲染慢的问题</li><li>SEO 优化问题</li><li>同时兼备客户端渲染的优点</li></ul>',18),N={href:"https://nuxt.com/docs/getting-started/introduction",target:"_blank",rel:"noopener noreferrer"},V={href:"https://nuxt.com.cn/docs/getting-started/introduction",target:"_blank",rel:"noopener noreferrer"};function M(g,b){const l=i("router-link"),r=i("Badge"),o=i("ExternalLinkIcon");return s(),_("div",null,[h,e("nav",p,[e("ul",null,[e("li",null,[n(l,{to:"#_1-1-模板渲染"},{default:a(()=>[t("1.1 模板渲染")]),_:1})]),e("li",null,[n(l,{to:"#_1-2-服务端渲染"},{default:a(()=>[t("1.2 服务端渲染")]),_:1})]),e("li",null,[n(l,{to:"#_1-3-客户端渲染"},{default:a(()=>[t("1.3 客户端渲染")]),_:1})]),e("li",null,[n(l,{to:"#_1-4-nuxt3-用于"},{default:a(()=>[t("1.4 Nuxt3 用于？")]),_:1})])])]),x,e("p",null,[n(r,{type:"tip"},{default:a(()=>[t("定义")]),_:1}),t(),f,t(" 即动态网站使用相同的模板和不同的数据来生成不同的 HTML 页面。")]),m,e("p",null,[t("了解了基本概念之后，你可以在 "),e("a",N,[t("Nuxt 官方文档"),n(o)]),t(" 或 "),e("a",V,[t("Nuxt 中文文档"),n(o)]),t(" 中学习它的基本使用。")])])}const L=d(u,[["render",M],["__file","index.html.vue"]]);export{L as default};
