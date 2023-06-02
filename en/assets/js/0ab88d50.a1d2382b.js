"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[62171],{79874:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(93106);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:e},s),{},{components:r})):n.createElement(f,i({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34290:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const i={title:"Taro.reportMonitor(name, value)",sidebar_label:"reportMonitor"},l=void 0,p={unversionedId:"apis/data-analysis/reportMonitor",id:"version-3.x/apis/data-analysis/reportMonitor",title:"Taro.reportMonitor(name, value)",description:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u6570\u636e\u76d1\u63a7\u4e0a\u62a5\u63a5\u53e3\u3002",source:"@site/versioned_docs/version-3.x/apis/data-analysis/reportMonitor.md",sourceDirName:"apis/data-analysis",slug:"/apis/data-analysis/reportMonitor",permalink:"/taro-docs/en/docs/apis/data-analysis/reportMonitor",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/data-analysis/reportMonitor.md",tags:[],version:"3.x",frontMatter:{title:"Taro.reportMonitor(name, value)",sidebar_label:"reportMonitor"},sidebar:"API",previous:{title:"getBackgroundFetchData",permalink:"/taro-docs/en/docs/apis/storage/background-fetch/getBackgroundFetchData"},next:{title:"reportEvent",permalink:"/taro-docs/en/docs/apis/data-analysis/reportEvent"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:s};function m(t){var{components:e}=t,i=o(t,["components"]);return(0,n.kt)("wrapper",a({},u,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u6570\u636e\u76d1\u63a7\u4e0a\u62a5\u63a5\u53e3\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u8bf4\u660e"),"\n\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u300c\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0-\u8fd0\u7ef4\u4e2d\u5fc3-\u6027\u80fd\u76d1\u63a7-\u4e1a\u52a1\u6570\u636e\u76d1\u63a7\u300d\u4e2d\u65b0\u5efa\u76d1\u63a7\u4e8b\u4ef6\uff0c\u914d\u7f6e\u76d1\u63a7\u63cf\u8ff0\u4e0e\u544a\u8b66\u7c7b\u578b\u3002\u6bcf\u4e00\u4e2a\u76d1\u63a7\u4e8b\u4ef6\u5bf9\u5e94\u552f\u4e00\u7684\u76d1\u63a7ID\uff0c\u5f00\u53d1\u8005\u6700\u591a\u53ef\u4ee5\u521b\u5efa128\u4e2a\u76d1\u63a7\u4e8b\u4ef6\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(88421).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportMonitor.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(name: string, value: number) => void\n")),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u76d1\u63a7ID\uff0c\u5728\u300c\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u300d\u65b0\u5efa\u6570\u636e\u6307\u6807\u540e\u83b7\u5f97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u4e0a\u62a5\u6570\u503c\uff0c\u7ecf\u5904\u7406\u540e\u4f1a\u5728\u300c\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u300d\u4e0a\u5c55\u793a\u6bcf\u5206\u949f\u7684\u4e0a\u62a5\u603b\u91cf")))),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.reportMonitor('1', 1)\n")))}m.isMDXComponent=!0},80068:function(t,e,r){e.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,r){e.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(t,e,r){e.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(t,e,r){e.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);