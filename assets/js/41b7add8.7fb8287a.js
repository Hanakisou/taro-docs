"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[84393],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||k[m]||o;return n?r.createElement(f,c(c({ref:e},s),{},{components:n})):r.createElement(f,c({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3750:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const c={title:"Taro.connectSocket(OBJECT)",sidebar_label:"connectSocket"},l=void 0,i={unversionedId:"apis/network/socket/connectSocket",id:"version-1.x/apis/network/socket/connectSocket",title:"Taro.connectSocket(OBJECT)",description:"\u521b\u5efa\u4e00\u4e2a WebSocket \u94fe\u63a5\u3002",source:"@site/versioned_docs/version-1.x/apis/network/socket/connectSocket.md",sourceDirName:"apis/network/socket",slug:"/apis/network/socket/connectSocket",permalink:"/taro-docs/docs/1.x/apis/network/socket/connectSocket",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/network/socket/connectSocket.md",tags:[],version:"1.x",frontMatter:{title:"Taro.connectSocket(OBJECT)",sidebar_label:"connectSocket"},sidebar:"version-1.x/API",previous:{title:"addInterceptor",permalink:"/taro-docs/docs/1.x/apis/network/request/addInterceptor"},next:{title:"sendSocketMessage",permalink:"/taro-docs/docs/1.x/apis/network/socket/sendSocketMessage"}},p={},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],k={toc:s};function d(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket"}),"WebSocket")," \u94fe\u63a5\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u5b58\u5728\u6700\u591a",(0,r.kt)("strong",{parentName:"p"},"\u4e24\u4e2a")," WebSocket \u94fe\u63a5\uff0c\u6bcf\u6b21\u6210\u529f\u8c03\u7528 Taro.connectSocket \u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("a",a({parentName:"p"},{href:"/taro-docs/docs/1.x/apis/network/socket/SocketTask"}),"SocketTask"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"url"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740\uff0c\u5fc5\u987b\u662f wss \u534f\u8bae")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"header"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Object"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"HTTP Header , header \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"method"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u662f GET\uff0c\u6709\u6548\u503c\uff1aOPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"protocols"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"StringArray"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5b50\u534f\u8bae\u6570\u7ec4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"success"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"fail"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"complete"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.connectSocket({\n  url: 'ws://echo.websocket.org/echo',\n  success: function () {\n    console.log('connect success')\n  }\n}).then(task => {\n  task.onOpen(function () {\n    console.log('onOpen')\n    task.send({ data: 'xxx' })\n  })\n  task.onMessage(function (msg) {\n    console.log('onMessage: ', msg)\n    task.close()\n  })\n  task.onError(function () {\n    console.log('onError')\n  })\n  task.onClose(function (e) {\n    console.log('onClose: ', e)\n  })\n})\n")),(0,r.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.connectSocket"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);