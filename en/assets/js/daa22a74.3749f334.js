"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15070],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),d=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return l.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=d(n),p=r,m=s["".concat(u,".").concat(p)]||s[p]||k[p]||a;return n?l.createElement(m,o(o({ref:e},c),{},{components:n})):l.createElement(m,o({ref:e},c))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<a;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},30752:function(t,e,n){n.d(e,{Z:function(){return i}});var l=n(93106),r=n(4706),a="tabItem_DpXT";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},o.apply(this,arguments)}function i({children:t,hidden:e,className:n}){return l.createElement("div",o({role:"tabpanel",className:(0,r.Z)(a,n)},{hidden:e}),t)}},20714:function(t,e,n){n.d(e,{Z:function(){return p}});var l=n(93106),r=n(4706),a=n(78949),o=n(46275),i=n(59099),u=n(14376),d="tabList_Q_yt",c="tabItem_hclQ";function k(){return k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},k.apply(this,arguments)}function s(t){var e;const{lazy:n,block:a,defaultValue:s,values:p,groupId:m,className:g}=t,h=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=p?p:h.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),y=(0,o.l)(b,((t,e)=>t.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var f;const N=null===s?s:null!==(f=null!=s?s:null===(e=h.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==f?f:h[0].props.value;if(null!==N&&!b.some((t=>t.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${b.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:x}=(0,i.U)(),[T,w]=(0,l.useState)(N),P=[],{blockElementScrollPositionUntilNextRender:A}=(0,u.o5)();if(null!=m){const t=v[m];null!=t&&t!==T&&b.some((e=>e.value===t))&&w(t)}const E=t=>{const e=t.currentTarget,n=P.indexOf(e),l=b[n].value;l!==T&&(A(e),w(l),null!=m&&x(m,String(l)))},O=t=>{let e=null;switch(t.key){case"Enter":E(t);break;case"ArrowRight":{const l=P.indexOf(t.currentTarget)+1;var n;e=null!==(n=P[l])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(t.currentTarget)-1;var l;e=null!==(l=P[n])&&void 0!==l?l:P[P.length-1];break}}null==e||e.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},g)},b.map((({value:t,label:e,attributes:n})=>l.createElement("li",k({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:t=>P.push(t),onKeyDown:O,onClick:E},n,{className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":T===t})}),null!=e?e:t)))),n?(0,l.cloneElement)(h.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==T})))))}function p(t){const e=(0,a.Z)();return l.createElement(s,k({key:String(e)},t))}},29090:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});n(93106);var l=n(79874),r=n(20714),a=n(30752);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const u={title:"Textarea",sidebar_label:"Textarea"},d=void 0,c={unversionedId:"components/forms/textarea",id:"version-3.x/components/forms/textarea",title:"Textarea",description:"Multi-line input box. This component is a Native Component. Note related limits before use.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/forms/textarea.md",sourceDirName:"components/forms",slug:"/components/forms/textarea",permalink:"/taro-docs/en/docs/components/forms/textarea",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/forms/textarea.md",tags:[],version:"3.x",frontMatter:{title:"Textarea",sidebar_label:"Textarea"},sidebar:"components",previous:{title:"Switch",permalink:"/taro-docs/en/docs/components/forms/switch"},next:{title:"FunctionalPageNavigator",permalink:"/taro-docs/en/docs/components/navig/Functional-Page-Navigator"}},k={},s=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"TextareaProps",id:"textareaprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"onFocusEventDetail",id:"onfocuseventdetail",level:3},{value:"onBlurEventDetail",id:"onblureventdetail",level:3},{value:"onLineChangeEventDetail",id:"onlinechangeeventdetail",level:3},{value:"onInputEventDetail",id:"oninputeventdetail",level:3},{value:"onConfirmEventDetail",id:"onconfirmeventdetail",level:3},{value:"onKeyboardHeightChangeEventDetail",id:"onkeyboardheightchangeeventdetail",level:3},{value:"API Support",id:"api-support",level:2}],p={toc:s};function m(t){var{components:e}=t,n=i(t,["components"]);return(0,l.kt)("wrapper",o({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Multi-line input box. This component is a Native Component. Note related limits before use."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/textarea.html"}),"Reference"))),(0,l.kt)("h2",o({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<TextareaProps>\n")),(0,l.kt)("h2",o({},{id:"examples"}),"Examples"),(0,l.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>Height-adaptive input area with no scroll bars</Text>\n        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>\n        <Text>This is a textarea that can be autofocused</Text>\n        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus/>\n      </View>\n    )\n  }\n}\n"))),(0,l.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <text>Height-adaptive input area with no scroll bars</text>\n    <textarea style="background:#efefef;width:100%;min-height:80px;padding:0 30rpx;" :auto-height="true" />\n    <text>This is a textarea that can be autofocused</text>\n    <textarea style="background:#efefef;width:100%;height:80px;padding:0 30rpx;" :auto-focusd="true" />\n  </view>\n</template>\n')))),(0,l.kt)("h2",o({},{id:"textareaprops"}),"TextareaProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The content in the input box")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"placeholder"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The placeholder used when the input box is empty")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"placeholderStyle"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the style of the placeholder.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"placeholderClass"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"textarea-placeholder"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the style class of the placeholder.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"disabled"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to disable the component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"maxlength"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"140")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,'The maximum length. When it is set to "-1", the maximum length is not limited.')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoFocus"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Auto focus. The keyboard is automatically displayed.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"focus"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Gets focus")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoHeight"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether the height automatically increases. If this property is specified, style.height does not take effect.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fixed"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"If the textarea is in an area of ",(0,l.kt)("code",null,"position:fixed"),", the value of the specified property should always be true.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"cursorSpacing"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the distance between the cursor and the keyboard. It is either the distance between textarea and the bottom of the screen or the distance specified via cursor-spacing, whichever is smaller.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"cursor"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"-1")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the cursor position during focusing.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"showConfirmBar"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to display the bar containing the Done button above the keyboard")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"selectionStart"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"-1")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The start position of the cursor. It takes effect only during auto focusing, and needs to used with selectionEnd.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"selectionEnd"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"-1")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The end position of the cursor. It takes effect only during auto focusing, and needs to used with selectionStart.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"adjustPosition"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to automatically push up the page when the keyboard is displayed")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"holdKeyboard"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to hide the keyboard when the page is clicked when focused")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"disableDefaultPadding"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to remove the default inner margins under iOS")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onFocus"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onFocusEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when the input box is focused. event.detail = ","{value, height}",", where height is the height of the keyboard.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onBlur"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onBlurEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when the input box is unfocused.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onLineChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onLineChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Called when the number of lines in the input box changes, event.detail = ","{height: 0, heightRpx: 0, lineCount: 0}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onInput"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onInputEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"An input event triggered when anything is input via the keyboard, event.detail = ","{value, cursor, keyCode}",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",null,"Return values of the bindinput processing function will not be reflected on textarea."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onConfirm"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onConfirmEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"A confirm event triggered when the ",(0,l.kt)("strong",null,"Done")," button is tapped, event.detail = ","{value: value}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onKeyboardHeightChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onKeyboardHeightChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when the height of the keyboard changes.")))),(0,l.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.value"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.placeholder"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.placeholderStyle"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.placeholderClass"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.disabled"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.maxlength"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.autoFocus"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.focus"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.autoHeight"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.fixed"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.cursorSpacing"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.cursor"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.showConfirmBar"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.selectionStart"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.selectionEnd"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.adjustPosition"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.holdKeyboard"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.disableDefaultPadding"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onFocus"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onBlur"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onLineChange"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onInput"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onConfirm"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onKeyboardHeightChange"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",o({},{id:"onfocuseventdetail"}),"onFocusEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"input value")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"height"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Keyboard height")))),(0,l.kt)("h3",o({},{id:"onblureventdetail"}),"onBlurEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"input value")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"cursor"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"cursor position")))),(0,l.kt)("h3",o({},{id:"onlinechangeeventdetail"}),"onLineChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"height"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"heightRpx"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"lineCount"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number"))))),(0,l.kt)("h3",o({},{id:"oninputeventdetail"}),"onInputEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"input value")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"cursor"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"cursor position")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"keyCode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"key code")))),(0,l.kt)("h3",o({},{id:"onconfirmeventdetail"}),"onConfirmEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"input value")))),(0,l.kt)("h3",o({},{id:"onkeyboardheightchangeeventdetail"}),"onKeyboardHeightChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"height"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Keyboard height")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"duration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Duration")))),(0,l.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"Textarea"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);