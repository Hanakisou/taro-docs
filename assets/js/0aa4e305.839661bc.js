"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[44010],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30752:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(93106),a=n(4706),l="tabItem_DpXT";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},20714:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(93106),a=n(4706),l=n(78949),o=n(46275),s=n(59099),i=n(14376),p="tabList_Q_yt",u="tabItem_hclQ";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:h,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,o.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var T;const g=null===m?m:null!==(T=null!=m?m:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==T?T:k[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,E]=(0,r.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=h){const e=y[h];null!=e&&e!==w&&v.some((t=>t.value===e))&&E(e)}const L=e=>{const t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==w&&(O(t),E(r),null!=h&&N(h,String(r)))},C=e=>{let t=null;switch(e.key){case"Enter":L(e);break;case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;var n;t=null!==(n=x[r])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;var r;t=null!==(r=x[n])&&void 0!==r?r:x[x.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},f)},v.map((({value:e,label:t,attributes:n})=>r.createElement("li",c({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>x.push(e),onKeyDown:C,onClick:L},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,c({key:String(t)},e))}},69762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});n(93106);var r=n(79874),a=n(30752),l=n(20714);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"\u6e32\u67d3 HTML"},p=void 0,u={unversionedId:"html",id:"version-3.x/html",title:"\u6e32\u67d3 HTML",description:"\u8bf7\u6ce8\u610f\uff1a\u672c\u7ae0\u8282\u6240\u6709\u5185\u5bb9\u53ea\u5728\u5c0f\u7a0b\u5e8f\u7aef\u8d77\u6548\u679c\u3002",source:"@site/versioned_docs/version-3.x/html.mdx",sourceDirName:".",slug:"/html",permalink:"/taro-docs/docs/html",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/html.mdx",tags:[],version:"3.x",frontMatter:{title:"\u6e32\u67d3 HTML"},sidebar:"docs",previous:{title:"\u7f16\u8bd1\u914d\u7f6e\u8be6\u60c5",permalink:"/taro-docs/docs/config-detail"},next:{title:"\u4f7f\u7528 HTML \u6807\u7b7e",permalink:"/taro-docs/docs/use-h5"}},c={},m=[{value:"\u81ea\u5b9a\u4e49 HTML \u6837\u5f0f",id:"\u81ea\u5b9a\u4e49-html-\u6837\u5f0f",level:2},{value:"\bHTML \u8f6c\u4e49",id:"html-\u8f6c\u4e49",level:2},{value:"\u7ed1\u5b9a\u4e8b\u4ef6",id:"\u7ed1\u5b9a\u4e8b\u4ef6",level:2},{value:"\u9ad8\u7ea7\u9009\u9879",id:"\u9ad8\u7ea7\u9009\u9879",level:2},{value:"skipElements",id:"skipelements",level:3},{value:"voidElements",id:"voidelements",level:3},{value:"closingElements",id:"closingelements",level:3},{value:"transformText",id:"transformtext",level:3},{value:"transformElement",id:"transformelement",level:3}],d={toc:m};function h(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff1a\u672c\u7ae0\u8282\u6240\u6709\u5185\u5bb9\u53ea\u5728\u5c0f\u7a0b\u5e8f\u7aef\u8d77\u6548\u679c\u3002")),(0,r.kt)("p",null,"Taro \u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Element#innerHTML")," \u6216 Vue \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"v-html")," \u6216 React/Nerv \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," \u76f4\u63a5\u6e32\u67d3 HTML:"),(0,r.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),'function helloWorld() {\n  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n\n  return <View dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n'))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view v-html="html"></view>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`,\n      }\n    },\n  }\n<\/script>\n')))),(0,r.kt)("h2",o({},{id:"\u81ea\u5b9a\u4e49-html-\u6837\u5f0f"}),"\u81ea\u5b9a\u4e49 HTML \u6837\u5f0f"),(0,r.kt)("p",null,"\u76f4\u63a5\u8bbe\u7f6e HTML \u4e0d\u4f1a\u8ba9 HTML \u6807\u7b7e\u5e26\u4e0a\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u6837\u5f0f\uff0cTaro \u63d0\u4f9b\u4e24\u79cd\u5185\u7f6e\u6837\u5f0f\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5f15\u5165\u751f\u6548\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html.css"),": ",(0,r.kt)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/CSS2/sample.html"}),"W3C HTML4 \u7684\u5185\u7f6e\u6837\u5f0f"),"\uff0c\u53ea\u6709 HTML4 \u6807\u7b7e\u6837\u5f0f\uff0c\u4f53\u79ef\u8f83\u5c0f\uff0c\u517c\u5bb9\u6027\u5f3a\uff0c\u80fd\u9002\u5e94\u5927\u591a\u6570\u60c5\u51b5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html5.css"),": ",(0,r.kt)("a",o({parentName:"li"},{href:"https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css"}),"Chrome(Blink) HTML5 \u7684\u5185\u7f6e\u6837\u5f0f"),"\uff0c\u5185\u7f6e\u6837\u5f0f\u4e30\u5bcc\uff0c\u5305\u62ec\u4e86\u5927\u591a\u6570 HTML5 \u6807\u7b7e\uff0c\u4f53\u79ef\u8f83\u5927\uff0c\u4e0d\u4e00\u5b9a\u652f\u6301\u6240\u6709\u5c0f\u7a0b\u5e8f\u5bb9\u5668\u3002")),(0,r.kt)("p",null,"\u4e3a\u4e86\u8ba9\u5185\u7f6e\u7684\u6807\u7b7e\u6837\u5f0f\u8d77\u4f5c\u7528\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5c06 HTML \u5bb9\u5668\u7684 CSS \u7c7b\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},".taro_html"),":"),(0,r.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"if (process.env.TARO_ENV !== 'h5') {\n  require('@tarojs/taro/html.css')\n}\n\nfunction helloWorld() {\n  const html = `<h1 style=\"color: red\">Wallace is way taller than other reporters.</h1>`\n\n  return <View className=\"taro_html\" dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view v-html="html" class="taro_html"></view>\n</template>\n\n<script>\n  if (process.env.TARO_ENV !== \'h5\') {\n    require(\'@tarojs/taro/html.css\')\n  }\n\n  export default {\n    data() {\n      return {\n        html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`,\n      }\n    },\n  }\n<\/script>\n')))),(0,r.kt)("p",null,"\u540c\u6837\u5730\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u81ea\u5df1\u7f16\u5199 CSS \u6837\u5f0f\uff0cTaro \u6700\u7ec8\u6e32\u67d3\u7684 HTML \u6807\u7b7e\u7684\u7c7b\u540d\u90fd\u548c HTML \u6807\u7b7e\u540d\u4fdd\u6301\u4e00\u81f4\uff0c\u4f8b\u5982\u6211\u4eec\u7684\u5bb9\u5668 CSS \u7c7b\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"my_css"),"\uff0c\u60f3\u8981\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"h1")," \u6807\u7b7e\u7684\u6837\u5f0f\uff0c\u90a3\u5c31\u8fd9\u6837\u8fd9\u6837\u505a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-css"}),".my_css .h1 {\n  font-size: 30px;\n}\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u503e\u5411\u4e8e\u5176\u4ed6\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u6837\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css"}),"Firefox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://web.archive.org/web/20170122223926/https://www.iecss.com/"}),"Internet Explorer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css"}),"Safari/Chrome(Webkit)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://web.archive.org/web/20161031005401/https://www.iecss.com/opera-10.51.css"}),"Opera")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/html5/rendering.html"}),"W3C HTML5 Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/necolas/normalize.css/blob/master/normalize.css"}),"normalize.css"))),(0,r.kt)("h2",o({},{id:"html-\u8f6c\u4e49"}),"\bHTML \u8f6c\u4e49"),(0,r.kt)("p",null,"\u7531\u4e8e\u8fdb\u884c HTML \u8f6c\u4e49\u9700\u8981\u6d88\u8017\u8f83\u591a\u7684\u6027\u80fd\u548c\u8f83\u5927\u7684\u4f53\u79ef\uff0c\u9ed8\u8ba4\u800c\u8a00 Taro \u7684 HTML \u63a5\u53e3\u53ea\u63a5\u53d7\u8f6c\u4e49\u540e\u7684 HTML \u5b57\u7b26\u4e32\uff0c\u6211\u4eec\u63a8\u8350\u76f4\u63a5\u5728\u670d\u52a1\u7aef\u8fd4\u56de\u8f6c\u4e49\u540e\u7684 HTML\u3002\u5982\u679c\u786e\u5b9e\u9700\u8981\u5728\u5ba2\u6237\u7aef\u8f6c\u4e49\uff0c\u5f00\u6e90\u793e\u533a\u6709\u4e24\u4e2a\u8f83\u597d\u7684\u9009\u62e9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://www.npmjs.com/package/he"}),"he"),": \u4f53\u79ef\u8f83\u5927\uff0c\u4f46\u5f00\u6e90\u534f\u8bae\u66f4\u4e3a\u5bbd\u677e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://www.npmjs.com/package/entities"}),"entities"),": \u4f53\u79ef\u8f83\u5c0f\uff0c\u4f46\u5f00\u6e90\u534f\u8bae\u66f4\u4e3a\u4e25\u683c")),(0,r.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u9700\u8981",(0,r.kt)("a",o({parentName:"p"},{href:"#%E9%AB%98%E7%BA%A7%E9%80%89%E9%A1%B9"}),"\u9ad8\u7ea7\u9009\u9879"),"\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"transformText")," \u914d\u5408 HTML \u8f6c\u4e49\u8fdb\u884c\u5b57\u7b26\u4e32\u6e32\u67d3\u3002"),(0,r.kt)("h2",o({},{id:"\u7ed1\u5b9a\u4e8b\u4ef6"}),"\u7ed1\u5b9a\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u51fa\u4e8e\u4f5c\u7528\u57df\u548c\u5b89\u5168\u56e0\u7d20\u8003\u8651\uff0cTaro \u4f1a\u628a HTML \u5b57\u7b26\u4e32\u4e2d\u7684\u4e8b\u4ef6\u548c JavaScript \u5168\u90e8\u6e05\u9664\u3002\u4f46\u6211\u4eec\u4ecd\u7136\u6709\u529e\u6cd5\u7ed9 HTML \u7ed1\u5b9a\u4e8b\u4ef6\uff1a"),(0,r.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import '@tarojs/taro/html.css'\n\nfunction helloWorld() {\n  const html = `<h1 id=\"test\">Wallace is way taller than other reporters.</h1>`\n\n  useEffect(() => {\n    const el = document.getElementById('test')\n    function testOnTap (event) {\n      // do something\n      ...\n    }\n    el.addEventListener('tap', testOnTap)\n\n    return () => {\n      el.removeEventListener('tap', testOnTap)\n    }\n  }, [])\n\n  return <View className=\"taro_html\" dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),"<template>\n  <view v-html=\"html\" class=\"taro_html\"></view>\n</template>\n\n<script>\n  import '@tarojs/taro/html.css'\n\n  export default {\n    data () {\n      return {\n        html: `<h1 id=\"test\">Wallace is way taller than other reporters.</h1>`\n      }\n    },\n    mounted () {\n      const el = document.getElementById('test')\n      el.addEventListener('tap', this.testOnTap)\n    },\n    testOnTap (event) {\n      // do something\n      ...\n    },\n    beforeDestroy () {\n      const el = document.getElementById('test')\n      el.removeEventListener('tap', this.testOnTap)\n    }\n  }\n<\/script>\n")))),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u52a8\u6001\u7ed1\u5b9a\u4e8b\u4ef6\u7684\u5143\u7d20\u6ca1\u6709 ID \u7684\u8bdd\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528",(0,r.kt)("a",o({parentName:"p"},{href:"#%E9%AB%98%E7%BA%A7%E9%80%89%E9%A1%B9"}),"\u9ad8\u7ea7\u9009\u9879"),"\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"transformElement"),"\u3002"),(0,r.kt)("h2",o({},{id:"\u9ad8\u7ea7\u9009\u9879"}),"\u9ad8\u7ea7\u9009\u9879"),(0,r.kt)("p",null,"\u5982\u679c\u5185\u7f6e\u7684\u529f\u80fd\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\u6216\u6e32\u67d3\u7ed3\u679c\u4e0d\u5982\u9884\u671f\uff0cTaro \u8fd8\u63d0\u4f9b\u4e86 HTML \u6e32\u67d3\u7684\u9ad8\u7ea7\u9009\u9879\uff0c\u9ad8\u7ea7\u9009\u9879\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.options.html")," \u8bbf\u95ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"import Taro from '@tarojs/taro'\n\n// \u4e0d\u89e3\u6790 souce \u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\nTaro.options.html.skipElements.add('source')\n")),(0,r.kt)("h3",o({},{id:"skipelements"}),"skipElements"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"new Set(['style', 'script'])")),(0,r.kt)("p",null,"HashSet \u4e2d\u5305\u542b\u7684 HTML \u6807\u7b7e\u5c06\u4e0d\u4f1a\u88ab\u89e3\u6790\u3002"),(0,r.kt)("h3",o({},{id:"voidelements"}),"voidElements"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"new Set([\n  '!doctype', 'area', 'base', 'br', 'col', 'command',\n  'embed', 'hr', 'img', 'input', 'keygen', 'link',\n  'meta', 'param', 'source', 'track', 'wbr'\n])")),(0,r.kt)("p",null,"HashSet \u4e2d\u5305\u542b\u7684 HTML \u6807\u7b7e\u4e0d\u9700\u8981\u95ed\u5408\u6807\u7b7e\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"<img />"),"\u3002"),(0,r.kt)("h3",o({},{id:"closingelements"}),"closingElements"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"new Set([\n  'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',\n  'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'\n])")),(0,r.kt)("p",null,"HashSet \u4e2d\u5305\u542b\u7684 HTML \u6807\u7b7e\u53ef\u4ee5\u81ea\u52a8\u95ed\u5408\uff0c\u4e14\u4e0d\u80fd\u88ab\u5d4c\u5957\u3002"),(0,r.kt)("h3",o({},{id:"transformtext"}),"transformText"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"(taroText: TaroText, text: Text) => TaroText")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"\u8be5\u51fd\u6570\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u503c\u4e3a Taro \u9ed8\u8ba4\u5904\u7406\u597d\u7684 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/text.ts#L5"}),"TaroText"),"\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f HTML \u89e3\u6790\u5668\u89e3\u6790\u597d\u7684 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L33-L36"}),"Text"),"\uff0c\u6700\u540e\u8fd4\u56de\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"TaroText")," \u5bf9\u8c61\u53c2\u4e0e HTML \u4e2d\u7684\u5b57\u7b26\u4e32\u6e32\u67d3\u3002"),(0,r.kt)("h3",o({},{id:"transformelement"}),"transformElement"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"(taroElement: TaroElement, element: Element) => TaroElement")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"\u8be5\u51fd\u6570\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u503c\u4e3a Taro \u9ed8\u8ba4\u5904\u7406\u597d\u7684 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/element.ts#L15"}),"TaroElement"),"\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f HTML \u89e3\u6790\u5668\u89e3\u6790\u597d\u7684 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L38-L43"}),"Element"),"\uff0c\u6700\u540e\u8fd4\u56de\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"TaroElement")," \u5bf9\u8c61\u53c2\u4e0e HTML \u5143\u7d20\u6e32\u67d3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="\u4ee3\u7801\u793a\u4f8b"',title:'"\u4ee3\u7801\u793a\u4f8b"'}),"// \u7ed9\u6240\u6709 img \u6807\u7b7e\u6dfb\u52a0 aotu \u7c7b\nTaro.options.html.transformElement = (el) => {\n  if (el.nodeName === 'image') {\n    el.setAttribute('class', 'aotu')\n  }\n  return el\n}\n")))}h.isMDXComponent=!0}}]);