"use strict";(self.webpackChunkzoomkoding_com=self.webpackChunkzoomkoding_com||[]).push([[501],{3221:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(4503),s=a(5345),l=a(6962),o=a(531);var c=function(e){let{title:t,subtitle:a}=e;return n.createElement("div",{className:"category-page-header-wrapper"},n.createElement("div",{className:"category-page-title"},t),n.createElement("div",{className:"category-page-subtitle"},a))},i=a(9107);var u=function(e){let{pageContext:t}=e;const{edges:a,currentCategory:u}=t,{categories:g}=t,m=(0,n.useMemo)((()=>g.findIndex((e=>e===u))),[g,u]),p=a.map((e=>{let{node:t}=e;return new o.Z(t)})),d=(0,n.useCallback)(((e,t)=>{if(0===t)return(0,r.navigate)("/posts");(0,r.navigate)(`/posts/${g[t]}`)}),[g]);return n.createElement(s.Z,null,n.createElement(l.Z,{title:"Posts"}),n.createElement(c,{title:g[m],subtitle:`${p.length} posts`}),n.createElement(i.Z,{tabIndex:m,onChange:d,tabs:g,posts:p}))}}}]);
//# sourceMappingURL=component---src-templates-category-template-js-390bef4d0a9d1e0516c3.js.map