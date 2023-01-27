import{_ as d,M as i,p as r,q as n,R as e,N as s,V as c,t as a,a1 as o}from"./framework-d3922052.js";const _={},h=e("h1",{id:"_1-了解同构渲染",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-了解同构渲染","aria-hidden":"true"},"#"),a(" 1. 了解同构渲染")],-1),l=e("h2",{id:"_1-1-模板渲染",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-模板渲染","aria-hidden":"true"},"#"),a(" 1.1 模板渲染")],-1),p=e("strong",null,"模板渲染",-1),u=o('<p>可以在哪些位置进行渲染？</p><ul><li>服务端渲染</li><li>客户端渲染</li><li>同构渲染</li></ul><p>使用同构渲染系统中的数据，部分可能由服务端去渲染，而另一部分由客户端渲染。</p><p>Nuxt3 即同构渲染框架，帮助我们快速开发同构渲染页面。</p><h2 id="_1-2-服务端渲染" tabindex="-1"><a class="header-anchor" href="#_1-2-服务端渲染" aria-hidden="true">#</a> 1.2 服务端渲染</h2><p>早期我们使用服务端渲染，数据通过模板字符串进行拼接，生成 HTML 返回给客户端。</p><p>所有的渲染都发生在服务端，服务器压力大，因为每次请求必须进行一次渲染，然后返回整个页面的数据。但是浏览器会直接得到 HTML 内容，显示更快。</p><p>这类系统主要使用预处理模板的技术（如 PHP、JSP 等），并使用 MVC 设计模式。</p><h2 id="_1-3-客户端渲染" tabindex="-1"><a class="header-anchor" href="#_1-3-客户端渲染" aria-hidden="true">#</a> 1.3 客户端渲染</h2><p>后来我们通过 AJAX 等相关的技术，通过服务器提供 JSON 格式的 API 接口，就可以在客户端渲染各种不同的数据。</p><p>这类系统主要基于 SPA 类的框架（如 React、Vue 等），使用 MVVM 设计模式。</p>',11);function f(x,m){const t=i("Badge");return r(),n("div",null,[h,l,e("p",null,[s(t,{type:"tip",vertical:"middle"},{default:c(()=>[a("定义")]),_:1}),a(),p,a(" 即动态网站使用相同的模板和不同的数据来生成不同的 HTML 页面。")]),u])}const M=d(_,[["render",f],["__file","index.html.vue"]]);export{M as default};
