"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[54497],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,b=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84196:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Babel Configuration"},o=void 0,p={unversionedId:"babel-config",id:"version-3.x/babel-config",title:"Babel Configuration",description:"The Babel configuration for the Taro project is located in the babel.config.js file in the root directory, where a preset is added by default: babel-preset-taro, which adds some common presets and plugins depending on the project's technology stack.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/babel-config.md",sourceDirName:".",slug:"/babel-config",permalink:"/taro-docs/en/docs/babel-config",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/babel-config.md",tags:[],version:"3.x",frontMatter:{title:"Babel Configuration"},sidebar:"docs",previous:{title:"Project Configuration",permalink:"/taro-docs/en/docs/project-config"},next:{title:"Overview",permalink:"/taro-docs/en/docs/react-overall"}},s={},u=[{value:"babel-preset-taro",id:"babel-preset-taro",level:2},{value:"1. \u901a\u7528",id:"1-\u901a\u7528",level:4},{value:"presets",id:"presets",level:5},{value:"plugins",id:"plugins",level:5},{value:"2. React",id:"2-react",level:4},{value:"presets",id:"presets-1",level:5},{value:"plugins",id:"plugins-1",level:5},{value:"3. Vue",id:"3-vue",level:4},{value:"presetes",id:"presetes",level:5},{value:"4. Vue3",id:"4-vue3",level:4},{value:"plugins",id:"plugins-2",level:5},{value:"reactJsxRuntime",id:"reactjsxruntime",level:3},{value:"ts",id:"ts",level:3},{value:"hot",id:"hot",level:3},{value:"vueJsx",id:"vuejsx",level:3},{value:"targets",id:"targets",level:3},{value:"useBuiltIns",id:"usebuiltins",level:3},{value:"useBuiltIns: &#39;entry&#39;",id:"usebuiltins-entry",level:4},{value:"useBuiltIns: &#39;usage&#39;",id:"usebuiltins-usage",level:4},{value:"useBuiltIns: false",id:"usebuiltins-false",level:4},{value:"loose",id:"loose",level:3},{value:"debug",id:"debug",level:3},{value:"modules",id:"modules",level:3},{value:"spec",id:"spec",level:3},{value:"configPath",id:"configpath",level:3},{value:"include",id:"include",level:3},{value:"exclude",id:"exclude",level:3},{value:"shippedProposals",id:"shippedproposals",level:3},{value:"forceAllTransforms",id:"forcealltransforms",level:3},{value:"decoratorsBeforeExport",id:"decoratorsbeforeexport",level:3},{value:"decoratorsLegacy",id:"decoratorslegacy",level:3},{value:"absoluteRuntime",id:"absoluteruntime",level:3},{value:"version",id:"version",level:3}],d={toc:u};function c(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Babel configuration for the Taro project is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js")," file in the root directory, where a preset is added by default: ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-preset-taro"),", which adds some common ",(0,a.kt)("inlineCode",{parentName:"p"},"presets")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," depending on the project's technology stack."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),"module.exports = {\n  presets: [\n    ['taro', {/** Babel configuration items */}]\n  ]\n}\n")),(0,a.kt)("p",null,"Developers can modify ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js"),", change the configuration items of ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-preset-taro"),", or add ",(0,a.kt)("inlineCode",{parentName:"p"},"presets")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," that they want."),(0,a.kt)("h2",r({},{id:"babel-preset-taro"}),"babel-preset-taro"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"babel-preset-taro")," will optionally use the following ",(0,a.kt)("inlineCode",{parentName:"p"},"presets")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," depending on the current project's technology stack."),(0,a.kt)("h4",r({},{id:"1-\u901a\u7528"}),"1. \u901a\u7528"),(0,a.kt)("h5",r({},{id:"presets"}),"presets"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@babel/preset-env")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@babel/preset-typescript"),"\uff08TypeScript Environment\uff09")),(0,a.kt)("h5",r({},{id:"plugins"}),"plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@babel/plugin-transform-runtime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@babel/plugin-proposal-decorators")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@babel/plugin-proposal-class-properties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"babel-plugin-dynamic-import-node"),"\uff08Mini  Program Environment\uff09")),(0,a.kt)("h4",r({},{id:"2-react"}),"2. React"),(0,a.kt)("h5",r({},{id:"presets-1"}),"presets"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@babel/preset-react"))),(0,a.kt)("h5",r({},{id:"plugins-1"}),"plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"react-refresh/babel"))),(0,a.kt)("h4",r({},{id:"3-vue"}),"3. Vue"),(0,a.kt)("h5",r({},{id:"presetes"}),"presetes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@vue/babel-preset-jsx"))),(0,a.kt)("h4",r({},{id:"4-vue3"}),"4. Vue3"),(0,a.kt)("h5",r({},{id:"plugins-2"}),"plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@vue/babel-plugin-jsx"))),(0,a.kt)("p",null,"The configuration items for ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-preset-taro")," are described in detail below."),(0,a.kt)("h3",r({},{id:"reactjsxruntime"}),"reactJsxRuntime"),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Effective only when using ",(0,a.kt)("strong",{parentName:"p"},"React"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value"),":",(0,a.kt)("inlineCode",{parentName:"p"},"'automatic'")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-react")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-react#runtime"}),"runtime")," configuration items."),(0,a.kt)("h3",r({},{id:"ts"}),"ts"),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Using Typescript")),(0,a.kt)("h3",r({},{id:"hot"}),"hot"),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Effective only when using ",(0,a.kt)("strong",{parentName:"p"},"React"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value"),":",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"Whether to introduce ",(0,a.kt)("inlineCode",{parentName:"p"},"react-refresh/babel")," to support the use of ",(0,a.kt)("a",r({parentName:"p"},{href:"h5#fast-refresh"}),"fast-refresh"),"\u3002"),(0,a.kt)("h3",r({},{id:"vuejsx"}),"vueJsx"),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Effective only when using ",(0,a.kt)("strong",{parentName:"p"},"Vue/Vue 3"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"Whether to use ",(0,a.kt)("inlineCode",{parentName:"p"},"@vue/babel-preset-jsx")," (Vue) or ",(0,a.kt)("inlineCode",{parentName:"p"},"@vue/babel-plugin-jsx")," (Vue3) to support the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"jsx"),"."),(0,a.kt)("p",null,"When an ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," is passed in, it is equivalent to setting it to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," will be used as an argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"@vue/babel-preset-jsx")," (Vue) or ",(0,a.kt)("inlineCode",{parentName:"p"},"@vue/babel-plugin-jsx")," (Vue3)."),(0,a.kt)("h3",r({},{id:"targets"}),"targets"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"{\n  ios: '9',\n  android: '5'\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#targets"}),"targets"),"configuration items."),(0,a.kt)("h3",r({},{id:"usebuiltins"}),"useBuiltIns"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Valid values"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"'entry'")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"'usage'")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("h4",r({},{id:"usebuiltins-entry"}),"useBuiltIns: 'entry'"),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Advantages"),": global complete polyfill, even if there is incompatible code in the dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),", it will run successfully."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Disadvantages"),": May introduce redundant code and affect global variables.")),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"'entry'")," is passed, it sets the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#usebuiltins"}),"useBuiltIns")," option of ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"'entry'"),", the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#corejs"}),"corejs")," option is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"'3'"),"."),(0,a.kt)("p",null,"Developers need to introduce ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js")," in the entry file ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="src/app.js"',title:'"src/app.js"'}),'import "core-js"\n')),(0,a.kt)("p",null,"Babel will introduce the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js")," dependencies according to ",(0,a.kt)("a",r({parentName:"p"},{href:"babel-config#targets"}),"targets"),". For example, the above code will be compiled as:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="dist/app.js"',title:'"dist/app.js"'}),'import "core-js/modules/es.string.pad-start";\nimport "core-js/modules/es.string.pad-end";\n// ...\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Of course, since Taro sets ",(0,a.kt)("inlineCode",{parentName:"p"},"corejs")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"'3'")," at this point, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js@3")," ",(0,a.kt)("strong",{parentName:"p"},"the ability to manually bring in on-demand"),", see ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#usebuiltins"}),"documentation")," for details")),(0,a.kt)("h4",r({},{id:"usebuiltins-usage"}),"useBuiltIns: 'usage'"),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Advantages"),": Introduces on-demand and does not affect global variables."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Disadvantages"),": By default, dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," are not handled and you need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-loader")," manually.")),(0,a.kt)("p",null,"When passed in ",(0,a.kt)("inlineCode",{parentName:"p"},"'usage'"),", it sets the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs"}),"corejs")," option of ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"3 "),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: When passing in ",(0,a.kt)("inlineCode",{parentName:"p"},"'usage'"),", Taro does not use ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"useBuiltIns: 'usage'")," but ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"corejs: 3"),". The reason for this is: First, there is a conflict when both are set at the same time. Second, the latter does not affect global variables as opposed to the former.")),(0,a.kt)("h4",r({},{id:"usebuiltins-false"}),"useBuiltIns: false"),(0,a.kt)("p",null,"When passed ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#usebuiltins"}),"useBuiltIns")," option of ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," will be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", which will not introduce the ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js "),"."),(0,a.kt)("h3",r({},{id:"loose"}),"loose"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,"Also the ",(0,a.kt)("inlineCode",{parentName:"p"},"loose")," configuration item for ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-class-properties"),"."),(0,a.kt)("h3",r({},{id:"debug"}),"debug"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#debug"}),"debug")," configuration item."),(0,a.kt)("h3",r({},{id:"modules"}),"modules"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#modules"}),"modules")," configuration item\u3002"),(0,a.kt)("h3",r({},{id:"spec"}),"spec"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#spec"}),"spec")," configuration item\u3002"),(0,a.kt)("h3",r({},{id:"configpath"}),"configPath"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#configpath"}),"configPath")," configuration item\u3002"),(0,a.kt)("h3",r({},{id:"include"}),"include"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#include"}),"include")," configuration item\u3002"),(0,a.kt)("h3",r({},{id:"exclude"}),"exclude"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#exclude"}),"exclude")," configuration item\u3002"),(0,a.kt)("h3",r({},{id:"shippedproposals"}),"shippedProposals"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#shippedproposals"}),"shippedProposals")," configuration item\u3002"),(0,a.kt)("h3",r({},{id:"forcealltransforms"}),"forceAllTransforms"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#forcealltransforms"}),"forceAllTransforms")," configuration item\u3002"),(0,a.kt)("h3",r({},{id:"decoratorsbeforeexport"}),"decoratorsBeforeExport"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-decorators")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-proposal-decorators#decoratorsbeforeexport"}),"decoratorsBeforeExport")," configuration item\u3002"),(0,a.kt)("h3",r({},{id:"decoratorslegacy"}),"decoratorsLegacy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-decorators")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-proposal-decorators#legacy"}),"lagacy")," configuration item\u3002"),(0,a.kt)("h3",r({},{id:"absoluteruntime"}),"absoluteRuntime"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value"),": Path to ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," in the developer root ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),":",(0,a.kt)("inlineCode",{parentName:"p"},"string")," "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime#absoluteruntime"}),"absoluteRuntime")," configuration item\u3002"),(0,a.kt)("h3",r({},{id:"version"}),"version"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value"),": Version number of ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," in the developer's root directory."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),":",(0,a.kt)("inlineCode",{parentName:"p"},"string")," "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime#version"}),"version")," configuration item\u3002"))}c.isMDXComponent=!0}}]);