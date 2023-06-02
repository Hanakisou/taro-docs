"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[80187],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),s=r,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"\u6982\u8ff0"},i=void 0,p={unversionedId:"react-overall",id:"react-overall",title:"\u6982\u8ff0",description:"Taro 3 \u652f\u6301\u5c06 Web \u6846\u67b6\u76f4\u63a5\u8fd0\u884c\u5728\u5404\u5e73\u53f0\uff0c\u5f00\u53d1\u8005\u4f7f\u7528\u7684\u662f\u771f\u5b9e\u7684 React \u548c Vue \u7b49\u6846\u67b6\u3002",source:"@site/docs/react-overall.md",sourceDirName:".",slug:"/react-overall",permalink:"/taro-docs/docs/next/react-overall",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/react-overall.md",tags:[],version:"current",frontMatter:{title:"\u6982\u8ff0"},sidebar:"docs",previous:{title:"Babel \u914d\u7f6e",permalink:"/taro-docs/docs/next/babel-config"},next:{title:"\u5165\u53e3\u7ec4\u4ef6",permalink:"/taro-docs/docs/next/react-entry"}},c={},u=[{value:"React API",id:"react-api",level:2},{value:"\u5165\u53e3\u7ec4\u4ef6\u548c\u9875\u9762\u7ec4\u4ef6",id:"\u5165\u53e3\u7ec4\u4ef6\u548c\u9875\u9762\u7ec4\u4ef6",level:2},{value:"\u5185\u7f6e\u7ec4\u4ef6",id:"\u5185\u7f6e\u7ec4\u4ef6",level:2},{value:"Taro \u89c4\u8303",id:"taro-\u89c4\u8303",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"Taro \u89c4\u8303",id:"taro-\u89c4\u8303-1",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:3},{value:"Taro 3 \u5728\u5c0f\u7a0b\u5e8f\u7aef\u7684\u4e8b\u4ef6\u673a\u5236",id:"taro-3-\u5728\u5c0f\u7a0b\u5e8f\u7aef\u7684\u4e8b\u4ef6\u673a\u5236",level:3},{value:"\u963b\u6b62\u6eda\u52a8\u7a7f\u900f",id:"\u963b\u6b62\u6eda\u52a8\u7a7f\u900f",level:3},{value:"\u4e00\u3001\u6837\u5f0f",id:"\u4e00\u6837\u5f0f",level:4},{value:"\u4e8c\u3001catchMove",id:"\u4e8ccatchmove",level:4},{value:"dataset",id:"dataset",level:3},{value:"\u4e00\u822c\u60c5\u51b5",id:"\u4e00\u822c\u60c5\u51b5",level:4},{value:"dataset",id:"dataset-1",level:4},{value:"\u6a21\u677f\u5c5e\u6027",id:"\u6a21\u677f\u5c5e\u6027",level:4},{value:"\u751f\u547d\u5468\u671f\u89e6\u53d1\u673a\u5236",id:"\u751f\u547d\u5468\u671f\u89e6\u53d1\u673a\u5236",level:2},{value:"React \u7684\u751f\u547d\u5468\u671f",id:"react-\u7684\u751f\u547d\u5468\u671f",level:3},{value:"1. componentWillMount ()",id:"1-componentwillmount-",level:5},{value:"2. componentDidMount ()",id:"2-componentdidmount-",level:5},{value:"\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u65b9\u6cd5",id:"\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u65b9\u6cd5",level:3},{value:"Ref",id:"ref",level:2},{value:"React Ref",id:"react-ref",level:3},{value:"\u83b7\u53d6\u5c0f\u7a0b\u5e8f DOM",id:"\u83b7\u53d6\u5c0f\u7a0b\u5e8f-dom",level:3},{value:"Hooks",id:"hooks",level:2},{value:"dangerouslySetInnerHTML",id:"dangerouslysetinnerhtml",level:2},{value:"Minified React error",id:"minified-react-error",level:2},{value:"Error: Minified React error #152 \u62a5\u9519",id:"error-minified-react-error-152-\u62a5\u9519",level:4},{value:"\u5176\u5b83\u9650\u5236",id:"\u5176\u5b83\u9650\u5236",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Taro 3 \u652f\u6301\u5c06 Web \u6846\u67b6\u76f4\u63a5\u8fd0\u884c\u5728\u5404\u5e73\u53f0\uff0c\u5f00\u53d1\u8005\u4f7f\u7528\u7684\u662f\u771f\u5b9e\u7684 React \u548c Vue \u7b49\u6846\u67b6\u3002"),(0,a.kt)("p",null,"\u4f46\u662f Taro \u5728\u7ec4\u4ef6\u3001API\u3001\u8def\u7531\u7b49\u89c4\u8303\u4e0a\uff0c\u9075\u5faa\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u89c4\u8303\uff0c\u6240\u4ee5\u5728 Taro \u4e2d\u4f7f\u7528 React \u548c\u5f00\u53d1\u8005\u719f\u6089\u7684 Web \u7aef\u6709\u4e00\u4e9b\u5dee\u5f02\uff0c\u4ee5\u4e0b\u5c06\u8be6\u7ec6\u5217\u51fa\u3002"),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"[Breaking]"," \u65e7\u9879\u76ee\u5347\u7ea7\u5230 Taro v3.4+ \u8bf7\u5b89\u88c5\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-framework-react"))),(0,a.kt)("h2",r({},{id:"react-api"}),"React API"),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"[Breaking]"," \u4ece Taro 1/2 \u5347\u7ea7\u5230 Taro 3 \u7684\u540c\u5b66\u9700\u8981\u989d\u5916\u5173\u6ce8")),(0,a.kt)("p",null,"\u56e0\u4e3a\u5728 Taro 3 \u4e2d\u5f00\u53d1\u8005\u4f7f\u7528\u7684\u662f\u771f\u5b9e\u7684 React\uff0cReact \u7684 API \u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"useState"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," \u7b49\u90fd\u9700\u8981\u4ece React \u5305\u4e2d\u83b7\u53d6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// \u4ece 'react' \u5305\u4e2d\u83b7\u53d6 React API\nimport React, { Component, useState, useEffect } from 'react'\n")),(0,a.kt)("h2",r({},{id:"\u5165\u53e3\u7ec4\u4ef6\u548c\u9875\u9762\u7ec4\u4ef6"}),"\u5165\u53e3\u7ec4\u4ef6\u548c\u9875\u9762\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u56e0\u4e3a Taro \u9075\u5faa\u5c0f\u7a0b\u5e8f\u7684\u8def\u7531\u89c4\u8303\uff0c\u6240\u4ee5\u5f15\u5165\u4e86",(0,a.kt)("a",r({parentName:"p"},{href:"./react-entry"}),"\u5165\u53e3\u7ec4\u4ef6"),"\u548c",(0,a.kt)("a",r({parentName:"p"},{href:"./react-page"}),"\u9875\u9762\u7ec4\u4ef6"),"\u7684\u6982\u5ff5\uff0c\u5206\u522b\u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u89c4\u8303\u7684\u5165\u53e3\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," \u548c\u9875\u9762\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"page"),"\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a Taro \u5e94\u7528\u7531\u4e00\u4e2a\u5165\u53e3\u7ec4\u4ef6\u548c\u81f3\u5c11\u4e00\u4e2a\u9875\u9762\u7ec4\u4ef6\u6240\u7ec4\u6210\u3002"),(0,a.kt)("h2",r({},{id:"\u5185\u7f6e\u7ec4\u4ef6"}),"\u5185\u7f6e\u7ec4\u4ef6"),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"\u81ea Taro v3.3+\uff0c\u652f\u6301\u4f7f\u7528 H5 \u6807\u7b7e\u8fdb\u884c\u5f00\u53d1\uff0c\u8be6\u60c5\u8bf7\u89c1 ",(0,a.kt)("a",r({parentName:"p"},{href:"use-h5"}),"\u4f7f\u7528 HTML \u6807\u7b7e"))),(0,a.kt)("p",null,"Taro \u4e2d\u53ef\u4ee5\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u89c4\u8303\u7684\u5185\u7f6e\u7ec4\u4ef6\u8fdb\u884c\u5f00\u53d1\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"<View>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"<Text>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"<Button>")," \u7b49\u3002"),(0,a.kt)("h3",r({},{id:"taro-\u89c4\u8303"}),"Taro \u89c4\u8303"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 React \u4e2d\u4f7f\u7528\u8fd9\u4e9b\u5185\u7f6e\u7ec4\u4ef6\u524d\uff0c\u5fc5\u987b\u4ece ",(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/components")," \u8fdb\u884c\u5f15\u5165\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u5c5e\u6027\u9075\u4ece",(0,a.kt)("strong",{parentName:"li"},"\u5927\u9a7c\u5cf0\u5f0f\u547d\u540d\u89c4\u8303"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e8b\u4ef6\u89c4\u8303\u8bf7\u770b\u4e0b\u4e00\u8282\uff1a",(0,a.kt)("a",r({parentName:"li"},{href:"./react-overall#%E4%BA%8B%E4%BB%B6"}),"\u7ec4\u4ef6\u4e8b\u4ef6"),"\u3002")),(0,a.kt)("h3",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),'import { Swiper, SwiperItem } from \'@tarojs/components\'\n\nfunction Index() {\n  return (\n    <Swiper\n      className="box"\n      autoplay\n      interval={1000}\n      indicatorColor="#999"\n      onClick={() => {}}\n      onAnimationFinish={() => {}}\n    >\n      <SwiperItem>\n        <View className="text">1</View>\n      </SwiperItem>\n      <SwiperItem>\n        <View className="text">2</View>\n      </SwiperItem>\n      <SwiperItem>\n        <View className="text">3</View>\n      </SwiperItem>\n    </Swiper>\n  )\n}\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u67d0\u5e73\u53f0\u65b0\u589e\u7684\u7ec4\u4ef6\u6216\u7ec4\u4ef6\u7684\u5c5e\u6027\u8fd8\u6ca1\u88ab Taro \u652f\u6301\uff0c\u53ef\u4ee5\u63d0\u4ea4 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/issues"}),"Issues"),"\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4fee\u590d\u3002"),(0,a.kt)("h2",r({},{id:"\u4e8b\u4ef6"}),"\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u4e8b\u4ef6\u548c Web \u7aef\u4e00\u6837\u3002\u5728\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u56de\u8c03\u4e2d\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"stopPropagation")," \u53ef\u4ee5\u963b\u6b62\u5192\u6ce1\u3002"),(0,a.kt)("h3",r({},{id:"taro-\u89c4\u8303-1"}),"Taro \u89c4\u8303"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5185\u7f6e\u4e8b\u4ef6\u540d\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"on")," \u5f00\u5934\uff0c\u9075\u4ece\u5c0f\u9a7c\u5cf0\u5f0f\uff08camelCase\uff09\u547d\u540d\u89c4\u8303\u3002"),(0,a.kt)("li",{parentName:"ol"},"React \u4e2d\u70b9\u51fb\u4e8b\u4ef6\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick"),"\u3002")),(0,a.kt)("h3",r({},{id:"\u793a\u4f8b\u4ee3\u7801-1"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"function Comp() {\n  function clickHandler(e) {\n    e.stopPropagation() // \u963b\u6b62\u5192\u6ce1\n  }\n\n  function scrollHandler() {}\n\n  // \u53ea\u6709\u5c0f\u7a0b\u5e8f\u7684 bindtap \u5bf9\u5e94 Taro \u7684 onClick\n  // \u5176\u4f59\u5c0f\u7a0b\u5e8f\u4e8b\u4ef6\u540d\u628a bind \u6362\u6210 on \u5373\u662f Taro \u4e8b\u4ef6\u540d\uff08\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u9664\u5916\uff0c\u5b83\u7684\u4e8b\u4ef6\u5c31\u662f\u4ee5 on \u5f00\u5934\uff09\n  return <ScrollView onClick={clickHandler} onScroll={scrollHandler} />\n}\n")),(0,a.kt)("h3",r({},{id:"taro-3-\u5728\u5c0f\u7a0b\u5e8f\u7aef\u7684\u4e8b\u4ef6\u673a\u5236"}),"Taro 3 \u5728\u5c0f\u7a0b\u5e8f\u7aef\u7684\u4e8b\u4ef6\u673a\u5236"),(0,a.kt)("p",null,"\u5728 Taro 1 & 2 \u4e2d\uff0cTaro \u4f1a\u6839\u636e\u5f00\u53d1\u8005\u662f\u5426\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"e.stopPropagation()"),"\uff0c\u6765\u51b3\u5b9a\u5728\u5c0f\u7a0b\u5e8f\u6a21\u677f\u4e2d\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u662f\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"bind")," \u8fd8\u662f\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," \u5f62\u5f0f\u3002\u56e0\u6b64\u4e8b\u4ef6\u5192\u6ce1\u662f\u7531\u5c0f\u7a0b\u5e8f\u63a7\u5236\u7684\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u5728 Taro 3\uff0c\u6211\u4eec\u5728\u5c0f\u7a0b\u5e8f\u903b\u8f91\u5c42\u5b9e\u73b0\u4e86\u4e00\u5957\u4e8b\u4ef6\u7cfb\u7edf\uff0c\u5305\u62ec\u4e8b\u4ef6\u89e6\u53d1\u548c\u4e8b\u4ef6\u5192\u6ce1\u3002\u5728\u5c0f\u7a0b\u5e8f\u6a21\u677f\u4e2d\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u90fd\u662f\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"bind")," \u7684\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u8fd9\u5957\u5728\u903b\u8f91\u5c42\u5b9e\u73b0\u7684\u5c0f\u7a0b\u5e8f\u4e8b\u4ef6\u7cfb\u7edf\u662f\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u7684\uff0c\u4e8b\u4ef6\u56de\u8c03\u80fd\u6b63\u786e\u89e6\u53d1\u3001\u5192\u6ce1\u3001\u505c\u6b62\u5192\u6ce1\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5c0f\u7a0b\u5e8f\u6a21\u677f\u4e2d\u7ed1\u5b9a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"catchtouchmove")," \u4e8b\u4ef6\u9664\u4e86\u53ef\u4ee5\u963b\u6b62\u56de\u8c03\u51fd\u6570\u5192\u6ce1\u89e6\u53d1\u5916\uff0c\u8fd8\u80fd\u963b\u6b62\u89c6\u56fe\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6eda\u52a8\u7a7f\u900f"),"\uff0c\u8fd9\u70b9 Taro \u7684\u4e8b\u4ef6\u7cfb\u7edf\u662f\u505a\u4e0d\u5230\u7684\u3002"),(0,a.kt)("h3",r({},{id:"\u963b\u6b62\u6eda\u52a8\u7a7f\u900f"}),"\u963b\u6b62\u6eda\u52a8\u7a7f\u900f"),(0,a.kt)("p",null,"\u4e0a\u4e00\u70b9\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86 Taro 3 \u7684\u4e8b\u4ef6\u673a\u5236\u3002\u56e0\u4e3a\u4e8b\u4ef6\u90fd\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"bind")," \u7684\u5f62\u5f0f\u8fdb\u884c\u7ed1\u5b9a\uff0c\u56e0\u6b64\u4e0d\u80fd\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"e.stopPropagation()")," \u963b\u6b62\u6eda\u52a8\u7a7f\u900f\u3002"),(0,a.kt)("p",null,"\u9488\u5bf9\u6eda\u52a8\u7a7f\u900f\uff0c\u76ee\u524d\u603b\u7ed3\u4e86\u4e24\u79cd\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,a.kt)("h4",r({},{id:"\u4e00\u6837\u5f0f"}),"\u4e00\u3001\u6837\u5f0f"),(0,a.kt)("p",null,"\u4f7f\u7528\u6837\u5f0f\u89e3\u51b3\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/5984#issuecomment-614502302"}),"\u7981\u6b62\u88ab\u7a7f\u900f\u7684\u7ec4\u4ef6\u6eda\u52a8"),"\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e5f\u662f\u6700\u63a8\u8350\u7684\u505a\u6cd5\u3002"),(0,a.kt)("h4",r({},{id:"\u4e8ccatchmove"}),"\u4e8c\u3001catchMove"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Taro 3.0.21 \u7248\u672c\u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,"\u4f46\u662f\u5730\u56fe\u7ec4\u4ef6\u672c\u8eab\u5c31\u662f\u53ef\u4ee5\u6eda\u52a8\u7684\uff0c\u5373\u4f7f\u56fa\u5b9a\u4e86\u5b83\u7684\u5bbd\u9ad8\u3002\u6240\u4ee5\u7b2c\u4e00\u79cd\u529e\u6cd5\u5904\u7406\u4e0d\u4e86\u5192\u6ce1\u5230\u5730\u56fe\u7ec4\u4ef6\u4e0a\u7684\u6eda\u52a8\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u53ef\u4ee5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," \u7ec4\u4ef6\u589e\u52a0 ",(0,a.kt)("strong",{parentName:"p"},"catchMove")," \u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"// \u8fd9\u4e2a View \u7ec4\u4ef6\u4f1a\u7ed1\u5b9a catchtouchmove \u4e8b\u4ef6\u800c\u4e0d\u662f bindtouchmove\n<View catchMove></View>\n")),(0,a.kt)("h3",r({},{id:"dataset"}),"dataset"),(0,a.kt)("h4",r({},{id:"\u4e00\u822c\u60c5\u51b5"}),"\u4e00\u822c\u60c5\u51b5"),(0,a.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u6309 React\u3001 Vue \u7684 DSL \u7279\u6027\u8fdb\u884c\u601d\u8003\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"dataset")," \u662f\u5c0f\u7a0b\u5e8f\u7684\u7279\u6027\u3002"),(0,a.kt)("h4",r({},{id:"dataset-1"}),"dataset"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dataset")," \u662f\u7279\u522b\u7684\u6a21\u7248\u5c5e\u6027\uff0c\u4e3b\u8981\u4f5c\u7528\u662f\u53ef\u4ee5\u5728\u4e8b\u4ef6\u56de\u8c03\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," \u5bf9\u8c61\u4e2d\u83b7\u53d6\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"dataset")," \u76f8\u5173\u6570\u636e\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u70b9 Taro \u662f\u652f\u6301\u7684"),"\uff0c\u5728\u4e8b\u4ef6\u56de\u8c03\u5bf9\u8c61\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"event.target.dataset")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"event.currentTarget.dataset")," \u83b7\u53d6\u5230\u3002"),(0,a.kt)("h4",r({},{id:"\u6a21\u677f\u5c5e\u6027"}),"\u6a21\u677f\u5c5e\u6027"),(0,a.kt)("p",null,"\u4e0a\u4e00\u70b9\u6240\u8bf4\u7684\uff0cTaro \u5bf9\u4e8e\u5c0f\u7a0b\u5e8f ",(0,a.kt)("inlineCode",{parentName:"p"},"dataset")," \u7684\u6a21\u62df\u662f\u5728\u5c0f\u7a0b\u5e8f\u7684",(0,a.kt)("strong",{parentName:"p"},"\u903b\u8f91\u5c42"),"\u5b9e\u73b0\u7684\u3002",(0,a.kt)("strong",{parentName:"p"},"\u5e76\u6ca1\u6709\u771f\u6b63\u5728\u6a21\u677f\u8bbe\u7f6e\u8fd9\u4e2a\u5c5e\u6027"),"\u3002"),(0,a.kt)("p",null,"\u4f46\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u6709\u4e00\u4e9b API\uff08\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"createIntersectionObserver"),"\uff09\u83b7\u53d6\u5230\u9875\u9762\u7684\u8282\u70b9\u7684\u65f6\u5019\uff0c\u7531\u4e8e\u8282\u70b9\u4e0a\u5b9e\u9645\u6ca1\u6709\u5bf9\u5e94\u7684\u5c5e\u6027\u800c\u83b7\u53d6\u4e0d\u5230\u3002"),(0,a.kt)("p",null,"\u8fd9\u65f6\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-plugin-inject"}),"taro-plugin-inject")," \u63d2\u4ef6\u6ce8\u5165\u4e00\u4e9b\u901a\u7528\u5c5e\u6027\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  plugins: [\n    [\n      '@tarojs/plugin-inject',\n      {\n        components: {\n          View: {\n            'data-index': \"'dataIndex'\",\n          },\n          ScrollView: {\n            'data-observe': \"'dataObserve'\",\n          },\n        },\n      },\n    ],\n  ],\n}\n")),(0,a.kt)("h2",r({},{id:"\u751f\u547d\u5468\u671f\u89e6\u53d1\u673a\u5236"}),"\u751f\u547d\u5468\u671f\u89e6\u53d1\u673a\u5236"),(0,a.kt)("p",null,"Taro 3 \u5728\u5c0f\u7a0b\u5e8f\u903b\u8f91\u5c42\u4e0a\u5b9e\u73b0\u4e86\u4e00\u4efd\u9075\u5faa Web \u6807\u51c6 BOM \u548c DOM API\u3002\u56e0\u6b64 React \u4f7f\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"document.appendChild"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"document.removeChild")," \u7b49 API \u5176\u5b9e\u662f Taro \u6a21\u62df\u5b9e\u73b0\u7684\uff0c\u6700\u7ec8\u7684\u6548\u679c\u662f\u628a React \u7684\u865a\u62df DOM \u6811\u6e32\u67d3\u4e3a Taro \u6a21\u62df\u7684 Web \u6807\u51c6 DOM \u6811\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u5728 Taro3 \u4e2d\uff0cReact \u7684\u751f\u547d\u5468\u671f\u89e6\u53d1\u65f6\u673a\u548c\u6211\u4eec\u5e73\u5e38\u5728 Web \u5f00\u53d1\u4e2d\u7406\u89e3\u7684\u6982\u5ff5\u6709\u4e00\u4e9b\u504f\u5dee\u3002"),(0,a.kt)("h3",r({},{id:"react-\u7684\u751f\u547d\u5468\u671f"}),"React \u7684\u751f\u547d\u5468\u671f"),(0,a.kt)("p",null,"React \u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u5728 Taro \u4e2d\u90fd\u652f\u6301\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u89e6\u53d1\u65f6\u673a\uff1a"),(0,a.kt)("h5",r({},{id:"1-componentwillmount-"}),"1. componentWillMount ()"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"react-page#onload-options"}),"onLoad")," \u4e4b\u540e\uff0c\u9875\u9762\u7ec4\u4ef6\u6e32\u67d3\u5230 Taro \u7684\u865a\u62df DOM \u4e4b\u524d\u89e6\u53d1\u3002"),(0,a.kt)("h5",r({},{id:"2-componentdidmount-"}),"2. componentDidMount ()"),(0,a.kt)("p",null,"\u9875\u9762\u7ec4\u4ef6\u6e32\u67d3\u5230 Taro \u7684\u865a\u62df DOM \u4e4b\u540e\u89e6\u53d1\u3002"),(0,a.kt)("p",null,"\u6b64\u65f6\u80fd\u8bbf\u95ee\u5230 Taro \u7684\u865a\u62df DOM\uff08\u4f7f\u7528 React ref\u3001document.getElementById \u7b49\u624b\u6bb5\uff09\uff0c\u5e76\u652f\u6301\u5bf9\u5176\u8fdb\u884c\u64cd\u4f5c\uff08\u8bbe\u7f6e DOM \u7684 style \u7b49\uff09\u3002"),(0,a.kt)("p",null,"\u4f46\u6b64\u65f6\u4e0d\u4ee3\u8868 Taro \u7684\u865a\u62df DOM \u6570\u636e\u5df2\u7ecf\u5b8c\u6210\u4ece\u903b\u8f91\u5c42 ",(0,a.kt)("inlineCode",{parentName:"p"},"setData")," \u5230\u89c6\u56fe\u5c42\u3002\u56e0\u6b64\u8fd9\u65f6",(0,a.kt)("strong",{parentName:"p"},"\u65e0\u6cd5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"strong"},"createSelectorQuery")," \u7b49\u65b9\u6cd5\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42 DOM \u8282\u70b9\u3002")," \u53ea\u80fd\u5728 ",(0,a.kt)("a",r({parentName:"p"},{href:"react-page#onready-"}),"onReady")," \u751f\u547d\u5468\u671f\u4e2d\u83b7\u53d6\u3002"),(0,a.kt)("h3",r({},{id:"\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u65b9\u6cd5"}),"\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u65b9\u6cd5\uff0c\u5728 Taro \u7684\u9875\u9762\u4e2d\u540c\u6837\u53ef\u4ee5\u4f7f\u7528\uff1a\u5728 Class Component \u4e2d\u4e66\u5199\u540c\u540d\u65b9\u6cd5\u3001\u5728 Functional Component \u4e2d\u4f7f\u7528\u5bf9\u5e94\u7684 Hooks\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u9875\u9762\u65b9\u6cd5\u5728\u5404\u7aef\u7684\u652f\u6301\u7a0b\u5ea6\u4e0d\u4e00\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e86 HOC \u5305\u88f9\u7684\u5c0f\u7a0b\u5e8f\u9875\u9762\u7ec4\u4ef6\uff0c\u5fc5\u987b\u5904\u7406 forwardRef \u6216\u4f7f\u7528\u7ee7\u627f\u7ec4\u4ef6\u7684\u65b9\u5f0f\u800c\u4e0d\u662f\u8fd4\u56de\u7ec4\u4ef6\u7684\u65b9\u5f0f\uff0c\u5426\u5219\u5c0f\u7a0b\u5e8f\u9875\u9762\u65b9\u6cd5\u53ef\u80fd\u4e0d\u4f1a\u88ab\u89e6\u53d1\u3002")),(0,a.kt)("h2",r({},{id:"ref"}),"Ref"),(0,a.kt)("p",null,"\u5728 Taro \u4e2d ref \u7684\u7528\u6cd5\u548c React \u5b8c\u5168\u4e00\u81f4\uff0c\u4f46\u662f\u83b7\u53d6\u5230\u7684 \u201cDOM\u201d \u548c\u6d4f\u89c8\u5668\u73af\u5883\u8fd8\u6709\u5c0f\u7a0b\u5e8f\u73af\u5883\u90fd\u6709\u4e0d\u540c\u3002"),(0,a.kt)("h3",r({},{id:"react-ref"}),"React Ref"),(0,a.kt)("p",null,"\u4f7f\u7528 React Ref \u83b7\u53d6\u5230\u7684\u662f Taro \u7684\u865a\u62df DOM\uff0c\u548c\u6d4f\u89c8\u5668\u7684 DOM \u76f8\u4f3c\uff0c\u53ef\u4ee5\u64cd\u4f5c\u5b83\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"style"),"\uff0c\u8c03\u7528\u5b83\u7684 API \u7b49\u3002"),(0,a.kt)("p",null,"\u4f46\u662f Taro \u7684\u865a\u62df DOM \u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u7684\u903b\u8f91\u5c42\uff0c\u5e76\u4e0d\u662f\u771f\u5b9e\u7684\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u8282\u70b9\uff0c\u5b83\u6ca1\u6709\u5c3a\u5bf8\u5bbd\u9ad8\u7b49\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import React, { createRef } from 'react'\nimport { View } from '@tarojs/components'\n\nexport default class Test extends React.Component {\n  el = createRef()\n\n  componentDidMount() {\n    // \u83b7\u53d6\u5230\u7684 DOM \u5177\u6709\u7c7b\u4f3c HTMLElement \u6216 Text \u7b49\u5bf9\u8c61\u7684 API\n    console.log(this.el.current)\n  }\n\n  render() {\n    return <View id=\"only\" ref={this.el} />\n  }\n}\n")),(0,a.kt)("h3",r({},{id:"\u83b7\u53d6\u5c0f\u7a0b\u5e8f-dom"}),"\u83b7\u53d6\u5c0f\u7a0b\u5e8f DOM"),(0,a.kt)("p",null,"\u83b7\u53d6\u771f\u5b9e\u7684\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u8282\u70b9\uff0c\u9700\u8981\u5728 ",(0,a.kt)("a",r({parentName:"p"},{href:"react-page#onready-"}),"onReady")," \u751f\u547d\u5468\u671f\u4e2d\uff0c\u8c03\u7528\u5c0f\u7a0b\u5e8f\u4e2d\u7528\u4e8e\u83b7\u53d6 DOM \u7684 API\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport Taro from '@tarojs/taro'\n\nexport default class Test extends React.Component {\n  onReady() {\n    // onReady \u89e6\u53d1\u540e\u624d\u80fd\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u7684\u8282\u70b9\n    Taro.createSelectorQuery()\n      .select('#only')\n      .boundingClientRect()\n      .exec((res) => console.log(res))\n  }\n\n  render() {\n    return <View id=\"only\" />\n  }\n}\n")),(0,a.kt)("h2",r({},{id:"hooks"}),"Hooks"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"/taro-docs/docs/next/hooks"}),"Hooks \u6587\u6863")),(0,a.kt)("h2",r({},{id:"dangerouslysetinnerhtml"}),"dangerouslySetInnerHTML"),(0,a.kt)("p",null,"\u5728\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," \u65f6\u6709\u4e00\u4e9b\u989d\u5916\u7684\u914d\u7f6e\u9009\u9879\u548c\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,a.kt)("a",r({parentName:"p"},{href:"html"}),"\u300a\u6e32\u67d3 HTML\u300b"),"\u3002"),(0,a.kt)("h2",r({},{id:"minified-react-error"}),"Minified React error"),(0,a.kt)("p",null,"\u56e0\u4e3a development \u7248\u672c\u7684 React \u4f53\u79ef\u8f83\u5927\uff0c\u4e3a\u4e86\u51cf\u5c11\u5c0f\u7a0b\u5e8f\u4f53\u79ef\uff0c\u65b9\u4fbf\u5f00\u53d1\u65f6\u771f\u673a\u9884\u89c8\u3002Taro \u5728\u6784\u5efa\u5c0f\u7a0b\u5e8f\u65f6\u9ed8\u8ba4\u4f7f\u7528 production \u7248\u672c\u7684 React \u76f8\u5173\u4f9d\u8d56\u3002"),(0,a.kt)("p",null,"\u4f46\u662f production \u7248\u672c\u7684 React \u51fa\u9519\u65f6\u4e0d\u4f1a\u5c55\u793a\u62a5\u9519\u5806\u6808\u7684\u4fe1\u606f\u3002\u56e0\u6b64\u5f53\u4f60\u9047\u5230\u7c7b\u4f3c\u8fd9\u79cd\u62a5\u9519\u65f6\uff1a\u3010Error: Minified React error #152\u3011\u3002\u53ef\u4ee5\u4fee\u6539\u7f16\u8bd1\u914d\u7f6e\u4e2d\u7684 ",(0,a.kt)("a",r({parentName:"p"},{href:"./config-detail#minidebugreact"}),"mini.debugReact")," \u9009\u9879\uff0c\u7136\u540e\u91cd\u65b0\u5f00\u542f\u7f16\u8bd1\u3002\u8fd9\u6837 Taro \u4f1a\u4f7f\u7528 development \u7248\u672c\u7684 React\uff0c\u4ece\u800c\u8f93\u51fa\u62a5\u9519\u5806\u6808\u3002"),(0,a.kt)("h4",r({},{id:"error-minified-react-error-152-\u62a5\u9519"}),"Error: Minified React error #152 \u62a5\u9519"),(0,a.kt)("p",null,(0,a.kt)("img",r({parentName:"p"},{src:"https://storage.jd.com/cjj-pub-images/minified-react-error.png",alt:null}))),(0,a.kt)("h2",r({},{id:"\u5176\u5b83\u9650\u5236"}),"\u5176\u5b83\u9650\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u5c0f\u7a0b\u5e8f\u4e0d\u652f\u6301\u52a8\u6001\u5f15\u5165\uff0c\u56e0\u6b64\u5c0f\u7a0b\u5e8f\u4e2d\u65e0\u6cd5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"React.lazy")," API\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728\u9875\u9762\u7ec4\u4ef6\u7684 DOM \u6811\u4e4b\u5916\u63d2\u5165\u5143\u7d20\uff0c\u56e0\u6b64\u4e0d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"<Portal>"),"\u3002")),(0,a.kt)("h2",r({},{id:"\u5e38\u89c1\u95ee\u9898"}),"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useEffect"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"componentDidMount")," \u4e2d\u83b7\u53d6\u4e0d\u5230\u6e32\u67d3\u5c42\u5143\u7d20\u4fe1\u606f\uff0c",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7116"}),"7116")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useEffect")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"useLayoutEffect")," \u4e2d\u83b7\u53d6\u4e0d\u5230\u7ec4\u4ef6\u6700\u65b0\u7684\u5bbd\u9ad8\uff0c",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7491"}),"#7491")),(0,a.kt)("li",{parentName:"ul"},"\u5d4c\u5957\u5c42\u7ea7\u8f83\u6df1\u65f6\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"selectorQuery")," \u65e0\u6cd5\u67e5\u8be2\u5230\u5b50\u5143\u7d20\uff0c",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7411"}),"#7411")),(0,a.kt)("li",{parentName:"ul"},"Taro React \u652f\u6301\u4f7f\u7528 Recoil\uff0c\u5982\u679c\u4f7f\u7528\u4e2d\u9047\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"ReferenceError: Window is not defined")," \u7684\u62a5\u9519\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/11429"}),"#11429")," \u4ee5\u7ed5\u8fc7\u3002")))}m.isMDXComponent=!0}}]);