"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[1419],{26535:function(e,t,a){a.r(t);var l=a(76776),n=a(48446),r=a(93106);const c={};n.forEach((e=>{(e.value||[]).forEach((e=>{var t;c[null==e?void 0:e.key]=!0;const a=(null==e||null===(t=e.value)||void 0===t?void 0:t.properties)||{};Object.keys(a).forEach((e=>{c[e]=!0}))}))})),t.default=function(){const[e,t]=(0,r.useState)(""),a=(e=>{const t=[];return e.match(/^bind/)||n.forEach((a=>{const l=a.value.filter((t=>t.key.toLowerCase()===e.toLowerCase()||t.value.properties[e]||t.value.properties[e.replace(/^on/,"bind")]||Object.keys(t.value.properties).some((t=>t.toLowerCase()===e.toLowerCase()||t.toLowerCase()===e.replace(/^on/,"bind").toLowerCase()))));l.length&&t.push({key:a.key,value:l})})),t})(e),s=[];return a.forEach((e=>{e.value.forEach((e=>{s.includes(e.key)||s.push(e.key)}))})),r.createElement(l.Z,{permalink:"/caniuse"},r.createElement("div",{className:"can-i-use-wrap"},r.createElement("div",{className:"d-flex align-items-center justify-content-center w-100 mb-5"},r.createElement("details",null,r.createElement("summary",null,r.createElement("label",{htmlFor:"can-i-use"},"Can I use"),r.createElement("input",{list:"use-list",id:"can-i-use",name:"can-i-use",type:"text",value:e,onChange:e=>{t(e.target.value)}}),r.createElement("label",null,"?")),"\u5f53\u524d\u652f\u6301",r.createElement("strong",null,"\u7ec4\u4ef6\u5e93"),"\u7cbe\u786e\u67e5\u8be2\uff0c\u53ef\u5339\u914d\u7ec4\u4ef6\u540d\u3001\u5c5e\u6027\u540d"),r.createElement("datalist",{id:"use-list"},Object.keys(c).map(((e,t)=>r.createElement("option",{key:`id_${t}`,value:e}))))),r.createElement("div",{className:"w-100"},s.map((e=>r.createElement(r.Fragment,{key:e},r.createElement("h3",null,e),r.createElement("table",{className:"mb-5"},r.createElement("thead",null,r.createElement("tr",null,a.map((e=>r.createElement("th",{width:1e3/a.length+"px",key:e.key},e.key))))),r.createElement("tbody",null,r.createElement("tr",null,a.map((t=>{const a=t.value.find((t=>t.key===e));return r.createElement("td",{key:t.key},a?"\u2705":"\u274c")})))))))))))}}}]);