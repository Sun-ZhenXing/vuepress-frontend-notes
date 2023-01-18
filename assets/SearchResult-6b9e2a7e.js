import{u as te,a as j,k as le,b as ae,P as S,B as oe,c as ne}from"./app-5496a9c1.js";import{r as L,h as O,c as se,u as re,L as ie,aa as ce,o as ue,n as de,j as a,ab as E,z as ve,K as he,i as pe}from"./framework-d3922052.js";function fe(t){if(Array.isArray(t)){for(var e=0,l=Array(t.length);e<t.length;e++)l[e]=t[e];return l}else return Array.from(t)}var R=!1;if(typeof window<"u"){var V={get passive(){R=!0}};window.addEventListener("testPassive",null,V),window.removeEventListener("testPassive",null,V)}var F=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],T=!1,z=-1,H=void 0,b=void 0,U=function(e){return w.some(function(l){return!!(l.options.allowTouchMove&&l.options.allowTouchMove(e))})},$=function(e){var l=e||window.event;return U(l.target)||l.touches.length>1?!0:(l.preventDefault&&l.preventDefault(),!1)},me=function(e){if(b===void 0){var l=!!e&&e.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;l&&o>0&&(b=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}H===void 0&&(H=document.body.style.overflow,document.body.style.overflow="hidden")},ye=function(){b!==void 0&&(document.body.style.paddingRight=b,b=void 0),H!==void 0&&(document.body.style.overflow=H,H=void 0)},ge=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},we=function(e,l){var o=e.targetTouches[0].clientY-z;return U(e.target)?!1:l&&l.scrollTop===0&&o>0||ge(l)&&o<0?$(e):(e.stopPropagation(),!0)},Le=function(e,l){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(n){return n.targetElement===e})){var o={targetElement:e,options:l||{}};w=[].concat(fe(w),[o]),F?(e.ontouchstart=function(n){n.targetTouches.length===1&&(z=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&we(n,e)},T||(document.addEventListener("touchmove",$,R?{passive:!1}:void 0),T=!0)):me(l)}},He=function(){F?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),T&&(document.removeEventListener("touchmove",$,R?{passive:!1}:void 0),T=!1),z=-1):ye(),w=[]};const be="eJyrVtJXsoISJZklOalKVkpPO3ufr17/fM2UF+s2PJ3Q8XJ2m5KOUnJ+XklqXkmxklV0bG1tLQCXVhin";const X=()=>a(S,{name:"close"},()=>a("path",{d:"m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z"}));X.displayName="CloseIcon";const q=()=>a(S,{name:"heading"},()=>a("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));q.displayName="HeadingIcon";const Q=()=>a(S,{name:"heart"},()=>a("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));Q.displayName="HeartIcon";const Y=()=>a(S,{name:"history"},()=>a("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));Y.displayName="HistoryIcon";const K=()=>a(S,{name:"title"},()=>a("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));K.displayName="TitleIcon";const Se={},ke=300,J=5,Ce={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},Oe="search-pro-history-results",y=te(Oe,[]),Te=()=>({history:y,addHistory:t=>{y.value.length<J?y.value=[t,...y.value]:y.value=[t,...y.value.slice(0,J-1)]},removeHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}),$e=L(be),Ae=O(()=>JSON.parse(oe($e.value))),C=(t,e)=>{const l=t.toLowerCase(),o=e.toLowerCase(),n=[];let r=0,v=0;const h=(s,p=!1)=>{let i="";v===0?i=s.length>20?`… ${s.slice(-20)}`:s:p?i=s.length+v>100?`${s.slice(0,100-v)}… `:s:i=s.length>20?`${s.slice(0,20)} … ${s.slice(-20)}`:s,i&&n.push(i),v+=i.length,p||(n.push(["strong",e]),v+=e.length,v>=100&&n.push(" …"))};let f=l.indexOf(o,r);if(f===-1)return null;for(;f>=0;){const s=f+o.length;if(h(t.slice(r,f)),r=s,v>100)break;f=l.indexOf(o,r)}return v<100&&h(t.slice(r),!0),n},N=t=>t.reduce((e,{type:l})=>e+(l==="title"?50:l==="heading"?20:l==="custom"?10:1),0),Me=(t,e)=>{var l;const o={};for(const[n,r]of Object.entries(e)){const v=((l=e[n.replace(/\/[^\\]*$/,"")])==null?void 0:l.title)||"",h=`${v?`${v} > `:""}${r.title}`,f=C(r.title,t);f&&(o[h]=[...o[h]||[],{type:"title",path:n,display:f}]),r.customFields&&Object.entries(r.customFields).forEach(([s,p])=>{p.forEach(i=>{const c=C(i,t);c&&(o[h]=[...o[h]||[],{type:"custom",path:n,index:s,display:c}])})});for(const s of r.contents){const p=C(s.header,t);p&&(o[h]=[...o[h]||[],{type:"heading",path:n+(s.slug?`#${s.slug}`:""),display:p}]);for(const i of s.contents){const c=C(i,t);c&&(o[h]=[...o[h]||[],{type:"content",header:s.header,path:n+(s.slug?`#${s.slug}`:""),display:c}])}}}return Object.keys(o).sort((n,r)=>N(o[n])-N(o[r])).map(n=>({title:n,contents:o[n]}))},Be=t=>{const e=j(),l=L([]),o=O(()=>Ae.value[e.value]),n=ne(r=>{l.value=r?Me(r,o.value):[]},ke);return ve([t,e],()=>{n(t.value)}),l};var Pe=se({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const l=re(),o=ie(),n=j(),r=le(Ce),{history:v,addHistory:h,removeHistory:f}=Te(),s=ce(t,"query"),p=Be(s),i=L(0),c=L(0),P=L(),A=O(()=>p.value.length>0),M=O(()=>p.value[i.value]||null),G=()=>{i.value=i.value>0?i.value-1:p.value.length-1,c.value=M.value.contents.length-1},W=()=>{i.value=i.value<p.value.length-1?i.value+1:0,c.value=0},_=()=>{c.value<M.value.contents.length-1?c.value=c.value+1:W()},Z=()=>{c.value>0?c.value=c.value-1:G()},x=u=>u.map(d=>pe(d)?d:a(d[0],d[1])),D=u=>{if(u.type==="custom"){const d=Se[u.index]||"$content",[g,k=""]=he(d)?d[n.value].split("$content"):d.split("$content");return x([g,...u.display,k])}return x(u.display)},B=()=>{i.value=0,c.value=0,e("updateQuery",""),e("close")};return ue(()=>{ae("keydown",u=>{if(A.value){if(u.key==="ArrowUp")Z();else if(u.key==="ArrowDown")_();else if(u.key==="Enter"){const d=M.value.contents[c.value];o.path!==d.path&&(h(d),l.push(d.path),B())}}}),Le(P.value,{reserveScrollBarGap:!0})}),de(()=>{He()}),()=>a("div",{class:["search-pro-result",{empty:s.value===""?v.value.length===0:!A.value}],ref:P},s.value===""?v.value.length?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},r.value.history),v.value.map((u,d)=>a(E,{to:u.path,class:["search-pro-result-item",{active:c.value===d}],onClick:()=>{console.log("click"),B()}},()=>[a(Y,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[u.type==="content"&&u.header?a("div",{class:"content-header"},u.header):null,a("div",D(u))]),a("button",{class:"search-pro-close-icon",onClick:g=>{g.preventDefault(),g.stopPropagation(),f(d)}},a(X))]))])):r.value.emptyHistory:A.value?a("ul",{class:"search-pro-result-list"},p.value.map(({title:u,contents:d},g)=>{const k=i.value===g;return a("li",{class:["search-pro-result-list-item",{active:k}]},[a("div",{class:"search-pro-result-title"},u||"Documentation"),d.map((m,ee)=>{const I=k&&c.value===ee;return a(E,{to:m.path,class:["search-pro-result-item",{active:I,"aria-selected":I}],onClick:()=>{h(m),B()}},()=>[m.type==="content"?null:a(m.type==="title"?K:m.type==="heading"?q:Q,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[m.type==="content"&&m.header?a("div",{class:"content-header"},m.header):null,a("div",D(m))])])})])})):r.value.emptyResult)}});export{Pe as default};