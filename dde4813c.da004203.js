(window.webpackJsonp=window.webpackJsonp||[]).push([[1482],{1547:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(1761),a=n(1762),c=(n(0),n(1763)),l={title:"Taro.navigateTo(option)",sidebar_label:"navigateTo"},o={unversionedId:"apis/route/navigateTo",id:"apis/route/navigateTo",isDocsHomePage:!1,title:"Taro.navigateTo(option)",description:"\u4fdd\u7559\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762\u3002\u4f46\u662f\u4e0d\u80fd\u8df3\u5230 tabbar \u9875\u9762\u3002\u4f7f\u7528 Taro.navigateBack \u53ef\u4ee5\u8fd4\u56de\u5230\u539f\u9875\u9762\u3002\u5c0f\u7a0b\u5e8f\u4e2d\u9875\u9762\u6808\u6700\u591a\u5341\u5c42\u3002",source:"@site/docs/apis/route/navigateTo.md",slug:"/apis/route/navigateTo",permalink:"/taro/docs/next/apis/route/navigateTo",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/route/navigateTo.md",version:"current",sidebar_label:"navigateTo",sidebar:"API",previous:{title:"Taro.redirectTo(option)",permalink:"/taro/docs/next/apis/route/redirectTo"},next:{title:"Taro.navigateBack(option)",permalink:"/taro/docs/next/apis/route/navigateBack"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4fdd\u7559\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762\u3002\u4f46\u662f\u4e0d\u80fd\u8df3\u5230 tabbar \u9875\u9762\u3002\u4f7f\u7528 Taro.navigateBack \u53ef\u4ee5\u8fd4\u56de\u5230\u539f\u9875\u9762\u3002\u5c0f\u7a0b\u5e8f\u4e2d\u9875\u9762\u6808\u6700\u591a\u5341\u5c42\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"url"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u9700\u8981\u8df3\u8f6c\u7684\u5e94\u7528\u5185\u975e tabBar \u7684\u9875\u9762\u7684\u8def\u5f84, \u8def\u5f84\u540e\u53ef\u4ee5\u5e26\u53c2\u6570\u3002\u53c2\u6570\u4e0e\u8def\u5f84\u4e4b\u95f4\u4f7f\u7528 ",Object(c.b)("code",null,"?")," \u5206\u9694\uff0c\u53c2\u6570\u952e\u4e0e\u53c2\u6570\u503c\u7528 ",Object(c.b)("code",null,"=")," \u76f8\u8fde\uff0c\u4e0d\u540c\u53c2\u6570\u7528 ",Object(c.b)("code",null,"&")," \u5206\u9694\uff1b\u5982 'path?key=value&key2=value2'")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"events"),Object(c.b)("td",null,Object(c.b)("code",null,"Record<string, any>")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u95f4\u901a\u4fe1\u63a5\u53e3\uff0c\u7528\u4e8e\u76d1\u542c\u88ab\u6253\u5f00\u9875\u9762\u53d1\u9001\u5230\u5f53\u524d\u9875\u9762\u7684\u6570\u636e\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.navigateTo({\n  url: 'test?id=1',\n  events: {\n    // \u4e3a\u6307\u5b9a\u4e8b\u4ef6\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u5668\uff0c\u83b7\u53d6\u88ab\u6253\u5f00\u9875\u9762\u4f20\u9001\u5230\u5f53\u524d\u9875\u9762\u7684\u6570\u636e\n    acceptDataFromOpenedPage: function(data) {\n      console.log(data)\n    },\n    someEvent: function(data) {\n      console.log(data)\n    }\n    ...\n  },\n  success: function (res) {\n    // \u901a\u8fc7eventChannel\u5411\u88ab\u6253\u5f00\u9875\u9762\u4f20\u9001\u6570\u636e\n    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.navigateTo"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0},1761:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1762:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},1763:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,s=p["".concat(l,".").concat(d)]||p[d]||O[d]||c;return n?a.a.createElement(s,o(o({ref:t},i),{},{components:n})):a.a.createElement(s,o({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);