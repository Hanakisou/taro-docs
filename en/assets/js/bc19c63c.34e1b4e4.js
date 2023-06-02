"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[38944],{79874:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return s}});var r=a(93106);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=d(a),s=n,k=u["".concat(p,".").concat(s)]||u[s]||m[s]||i;return a?r.createElement(k,o(o({ref:e},c),{},{components:a})):r.createElement(k,o({ref:e},c))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81506:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});a(93106);var r=a(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const o={title:"MediaAudioPlayer",sidebar_label:"MediaAudioPlayer"},l=void 0,p={unversionedId:"apis/media/audio/MediaAudioPlayer",id:"apis/media/audio/MediaAudioPlayer",title:"MediaAudioPlayer",description:"MediaAudioPlayer \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.createMediaAudioPlayer \u63a5\u53e3\u83b7\u53d6\u5b9e\u4f8b\u3002",source:"@site/docs/apis/media/audio/MediaAudioPlayer.md",sourceDirName:"apis/media/audio",slug:"/apis/media/audio/MediaAudioPlayer",permalink:"/taro-docs/en/docs/next/apis/media/audio/MediaAudioPlayer",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/media/audio/MediaAudioPlayer.md",tags:[],version:"current",frontMatter:{title:"MediaAudioPlayer",sidebar_label:"MediaAudioPlayer"},sidebar:"API",previous:{title:"InnerAudioContext",permalink:"/taro-docs/en/docs/next/apis/media/audio/InnerAudioContext"},next:{title:"WebAudioContext",permalink:"/taro-docs/en/docs/next/apis/media/audio/WebAudioContext"}},d={},c=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"start",id:"start",level:3},{value:"addAudioSource",id:"addaudiosource",level:3},{value:"removeAudioSource",id:"removeaudiosource",level:3},{value:"stop",id:"stop",level:3},{value:"destroy",id:"destroy",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],m={toc:c};function u(t){var{components:e}=t,o=i(t,["components"]);return(0,r.kt)("wrapper",n({},m,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"MediaAudioPlayer \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("a",n({parentName:"p"},{href:"./createMediaAudioPlayer"}),"Taro.createMediaAudioPlayer")," \u63a5\u53e3\u83b7\u53d6\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",n({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"volume"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u97f3\u91cf\u3002\u8303\u56f4 0~1")))),(0,r.kt)("h3",n({},{id:"start"}),"start"),(0,r.kt)("p",null,"\u542f\u52a8\u64ad\u653e\u5668"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.start.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => Promise<void>\n")),(0,r.kt)("h3",n({},{id:"addaudiosource"}),"addAudioSource"),(0,r.kt)("p",null,"\u6dfb\u52a0\u97f3\u9891\u6e90"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.addAudioSource.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(source: VideoDecoder) => Promise<void>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"source"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"VideoDecoder")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u89c6\u9891\u89e3\u7801\u5668\u5b9e\u4f8b\u3002\u4f5c\u4e3a\u97f3\u9891\u6e90\u6dfb\u52a0\u5230\u97f3\u9891\u64ad\u653e\u5668\u4e2d")))),(0,r.kt)("h3",n({},{id:"removeaudiosource"}),"removeAudioSource"),(0,r.kt)("p",null,"\u79fb\u9664\u97f3\u9891\u6e90"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.removeAudioSource.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(source: VideoDecoder) => Promise<void>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"source"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"VideoDecoder")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u89c6\u9891\u89e3\u7801\u5668\u5b9e\u4f8b")))),(0,r.kt)("h3",n({},{id:"stop"}),"stop"),(0,r.kt)("p",null,"\u505c\u6b62\u64ad\u653e\u5668"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.stop.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => Promise<void>\n")),(0,r.kt)("h3",n({},{id:"destroy"}),"destroy"),(0,r.kt)("p",null,"\u9500\u6bc1\u64ad\u653e\u5668"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.destroy.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => Promise<void>\n")),(0,r.kt)("h2",n({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"Harmony"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaAudioPlayer"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaAudioPlayer.start"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaAudioPlayer.addAudioSource"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaAudioPlayer.removeAudioSource"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaAudioPlayer.stop"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaAudioPlayer.destroy"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},80068:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,a){e.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);