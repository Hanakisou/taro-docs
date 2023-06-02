"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[89441],{79874:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return d}});var r=a(93106);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=s(a),d=n,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},43454:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});a(93106);var r=a(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const i={},l=void 0,p={unversionedId:"CONTRIBUTING",id:"version-3.x/CONTRIBUTING",title:"CONTRIBUTING",description:"We are happy to welcome developers from the community to contribute to Taro \u300aTaro invites you to join in community building\u300b\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/CONTRIBUTING.md",sourceDirName:".",slug:"/CONTRIBUTING",permalink:"/taro-docs/en/docs/CONTRIBUTING",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/CONTRIBUTING.md",tags:[],version:"3.x",frontMatter:{},sidebar:"docs",previous:{title:"Join The Community",permalink:"/taro-docs/en/docs/join-in"},next:{title:"\u8d21\u732e\u6307\u5357",permalink:"/taro-docs/en/docs/CONTRIBUTING-GUIDE"}},s={},m=[{value:"Taro Composition",id:"taro-composition",level:2},{value:"Issue Guides",id:"issue-guides",level:2},{value:"Develop Configuration",id:"develop-configuration",level:2},{value:"Submit Code",id:"submit-code",level:2},{value:"Code Style",id:"code-style",level:2},{value:"Pull Request Guides",id:"pull-request-guides",level:2},{value:"Credits",id:"credits",level:2}],c={toc:m};function u(t){var{components:e}=t,a=o(t,["components"]);return(0,r.kt)("wrapper",n({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are happy to welcome developers from the community to contribute to Taro ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/4714"}),"\u300aTaro invites you to join in community building\u300b"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Submit an RFC or view the relevant RFC, you can view ",(0,r.kt)("a",n({parentName:"li"},{href:"https://github.com/NervJS/taro-rfcs"}),"taro-rfcs repository")),(0,r.kt)("li",{parentName:"ul"},"Share your case, just submit the mini program QR code, you can submit to ",(0,r.kt)("a",n({parentName:"li"},{href:"https://github.com/NervJS/taro-user-cases"}),"taro-user-cases")),(0,r.kt)("li",{parentName:"ul"},"Share your SDK, components , UI libary, project, you can submit to ",(0,r.kt)("a",n({parentName:"li"},{href:"https://taro-ext.jd.com"}),"Examples")),(0,r.kt)("li",{parentName:"ul"},"Share your experience (open source projects, tutorials, articles) you can submit to ",(0,r.kt)("a",n({parentName:"li"},{href:"https://github.com/NervJS/awesome-taro"}),"awesome-taro")," Or contribute to the \u300cTaro Community\u300dOfficial Accounts")),(0,r.kt)("p",null,"Before submitting your code for contribution, you need to spend some time reading the following to ensure that the contribution is in compliance with the specification and will help the community."),(0,r.kt)("h2",n({},{id:"taro-composition"}),"Taro Composition"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"NPM Package"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/babel-preset-taro"}),(0,r.kt)("inlineCode",{parentName:"a"},"babel-preset-taro"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"The babel preset for Taro projects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/taro"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/taro"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Taro's core API for application developers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/shared"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/shared"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"The utils used internally by Taro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/api"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/api"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Public API for all platform of @tarojs/taro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/taro-h5"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-h5"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"H5 API for @tarojs/taro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/router"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/router"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Taro H5 Router")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/react"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/react"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"React renderer for mini program based on react-reconciler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/cli"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/cli"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Taro Development Tools")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/extend"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/extend"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Taro extensions, including jQuery API, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/helper"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/helper"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Internal use of auxiliary method sets for CLI and runner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/service"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/service"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Taro Plugin Kernel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/taro-loader"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-loader"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Webpack loader exposed for use by @tarojs/mini-runner and @tarojs/webpack-runner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/runner-utils"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/runner-utils"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Common tool functions exposed to @tarojs/mini-runner and @tarojs/webpack-runner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/webpack-runner"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/webpack-runner"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Taro H5 Webpack package builder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/mini-runner"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/mini-runner"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Taro mini program Webpack package tools")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/components"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/components"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Taro H5 Standard  component library")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/taroize"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/taroize"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Taro Mini Program Reverse compiler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/with-weapp"}),(0,r.kt)("inlineCode",{parentName:"a"},"@tarojs/with-weapp"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Runtime adapter for reverse conversion")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/eslint-config-taro"}),(0,r.kt)("inlineCode",{parentName:"a"},"eslint-config-taro"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Taro ESLint Rules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://www.npmjs.com/package/eslint-plugin-taro"}),(0,r.kt)("inlineCode",{parentName:"a"},"eslint-plugin-taro"))),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Taro ESLint Plugin")))),(0,r.kt)("h2",n({},{id:"issue-guides"}),"Issue Guides"),(0,r.kt)("p",null,"If you are submitting a bug report, please click ",(0,r.kt)("a",n({parentName:"p"},{href:"https://nervjs.github.io/taro-issue-helper/"}),(0,r.kt)("inlineCode",{parentName:"a"},"New issue"))," \u3002"),(0,r.kt)("p",null,"If you want to implement an important feature for Taro, you need to write an RFC document first, following Taro's",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs"})," RFC System"),"\uff0cThe code can be submitted only after it has been discussed and refined by the community."),(0,r.kt)("h2",n({},{id:"develop-configuration"}),"Develop Configuration"),(0,r.kt)("p",null,"You need to make sure your Node.js version is greater than 8 to clone the repository locally. Run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"$ npm install # or yarn\n$ npm run bootstrap\n$ npm run build\n")),(0,r.kt)("h2",n({},{id:"submit-code"}),"Submit Code"),(0,r.kt)("p",null,"Taro repository adheres to the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"}),"Angular Style Commit Message Conventions"),"\uff0cSo be sure to follow this when entering your commit message, please make sure to follow this convention when publish."),(0,r.kt)("h2",n({},{id:"code-style"}),"Code Style"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JavaScript"),"\uff1aJavaScript style Follow ",(0,r.kt)("a",n({parentName:"li"},{href:"https://github.com/standard/standard"}),"JavaScript Standard Style"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TypeScript"),"\uff1aTypeScript style Follow ","[JavaScript Standard Style]","(",(0,r.kt)("a",n({parentName:"li"},{href:"https://github.com/standard/See"}),"https://github.com/standard/See")," ",(0,r.kt)("inlineCode",{parentName:"li"},"tslint.json")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," in the relevant package directory for details."),(0,r.kt)("li",{parentName:"ul"},"Styles\uff1afollow the ",(0,r.kt)("inlineCode",{parentName:"li"},".stylelintrc")," style in the relevant package directory.")),(0,r.kt)("h2",n({},{id:"pull-request-guides"}),"Pull Request Guides"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure that ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")," compiles successfully;"),(0,r.kt)("li",{parentName:"ol"},"Be sure to submit code that follows the specifications specified in ",(0,r.kt)("inlineCode",{parentName:"li"},".eslintrc"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".tslintrc"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".stylelintrc")," in the relevant package;"),(0,r.kt)("li",{parentName:"ol"},"When the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," of the package in question contains the ",(0,r.kt)("inlineCode",{parentName:"li"},"npm test")," command, it must be ensured that all test cases are required to pass;"),(0,r.kt)("li",{parentName:"ol"},"When a test case is available for the package in question, add the corresponding test case to your submitted code as well;"),(0,r.kt)("li",{parentName:"ol"},"When contribute Code, the commit message needs to follow ",(0,r.kt)("a",n({parentName:"li"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"}),"Angular Style Commit Message Conventions"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"If the contribute code is very complex, you can split the PR into several commits. We will squash when merging.")),(0,r.kt)("h2",n({},{id:"credits"}),"Credits"),(0,r.kt)("p",null,"Thanks to all the developers who have contributed code to Taro\uff1a"),(0,r.kt)("a",{href:"https://github.com/NervJS/taro/graphs/contributors"},(0,r.kt)("img",{src:"https://opencollective.com/taro/contributors.svg?width=890&button=false"})))}u.isMDXComponent=!0}}]);