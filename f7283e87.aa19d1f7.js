(window.webpackJsonp=window.webpackJsonp||[]).push([[1627],{1692:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return i}));var c=n(1761),r=n(1762),l=(n(0),n(1763)),b={title:"Taro.addCard(option)",sidebar_label:"addCard"},a={unversionedId:"apis/open-api/card/addCard",id:"version-3.x/apis/open-api/card/addCard",isDocsHomePage:!1,title:"Taro.addCard(option)",description:"\u6279\u91cf\u6dfb\u52a0\u5361\u5238\u3002\u53ea\u6709\u901a\u8fc7 \u8ba4\u8bc1 \u7684\u5c0f\u7a0b\u5e8f\u6216\u6587\u5316\u4e92\u52a8\u7c7b\u76ee\u7684\u5c0f\u6e38\u620f\u624d\u80fd\u4f7f\u7528\u3002\u66f4\u591a\u6587\u6863\u8bf7\u53c2\u8003 \u5fae\u4fe1\u5361\u5238\u63a5\u53e3\u6587\u6863\u3002",source:"@site/versioned_docs/version-3.x/apis/open-api/card/addCard.md",slug:"/apis/open-api/card/addCard",permalink:"/taro/docs/apis/open-api/card/addCard",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/card/addCard.md",version:"3.x",sidebar_label:"addCard",sidebar:"version-3.x/API",previous:{title:"Taro.openCard(option)",permalink:"/taro/docs/apis/open-api/card/openCard"},next:{title:"Taro.chooseInvoiceTitle(option)",permalink:"/taro/docs/apis/open-api/invoice/chooseInvoiceTitle"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"RequestInfo",id:"requestinfo",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"AddCardResponseInfo",id:"addcardresponseinfo",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],d={rightToc:o};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(c.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u6279\u91cf\u6dfb\u52a0\u5361\u5238\u3002\u53ea\u6709\u901a\u8fc7 ",Object(l.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/product/renzheng.html"}),"\u8ba4\u8bc1")," \u7684\u5c0f\u7a0b\u5e8f\u6216\u6587\u5316\u4e92\u52a8\u7c7b\u76ee\u7684\u5c0f\u6e38\u620f\u624d\u80fd\u4f7f\u7528\u3002\u66f4\u591a\u6587\u6863\u8bf7\u53c2\u8003 ",Object(l.b)("a",Object(c.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2"}),"\u5fae\u4fe1\u5361\u5238\u63a5\u53e3\u6587\u6863"),"\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"cardExt \u8bf4\u660e"),"\ncardExt \u662f\u5361\u5238\u7684\u6269\u5c55\u53c2\u6570\uff0c\u5176\u503c\u662f\u4e00\u4e2a JSON \u5b57\u7b26\u4e32\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"cardList"),Object(l.b)("td",null,Object(l.b)("code",null,"RequestInfo[]")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u9700\u8981\u6dfb\u52a0\u7684\u5361\u5238\u5217\u8868")),Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h3",{id:"requestinfo"},"RequestInfo"),Object(l.b)("p",null,"\u9700\u8981\u6dfb\u52a0\u7684\u5361\u5238\u5217\u8868"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"cardExt"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u5361\u5238\u7684\u6269\u5c55\u53c2\u6570\u3002\u9700\u5c06 CardExt \u5bf9\u8c61 JSON \u5e8f\u5217\u5316\u4e3a",Object(l.b)("strong",null,"\u5b57\u7b26\u4e32"),"\u4f20\u5165")),Object(l.b)("tr",null,Object(l.b)("td",null,"cardId"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u5361\u5238 ID")))),Object(l.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"cardList"),Object(l.b)("td",null,Object(l.b)("code",null,"AddCardResponseInfo[]")),Object(l.b)("td",null,"\u5361\u5238\u6dfb\u52a0\u7ed3\u679c\u5217\u8868")),Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(l.b)("h3",{id:"addcardresponseinfo"},"AddCardResponseInfo"),Object(l.b)("p",null,"\u5361\u5238\u6dfb\u52a0\u7ed3\u679c\u5217\u8868"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"cardExt"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u5361\u5238\u7684\u6269\u5c55\u53c2\u6570\uff0c\u7ed3\u6784\u8bf7\u53c2\u8003\u4e0b\u6587")),Object(l.b)("tr",null,Object(l.b)("td",null,"cardId"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u7528\u6237\u9886\u53d6\u5230\u5361\u5238\u7684 ID")),Object(l.b)("tr",null,Object(l.b)("td",null,"code"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u52a0\u5bc6 code\uff0c\u4e3a\u7528\u6237\u9886\u53d6\u5230\u5361\u5238\u7684code\u52a0\u5bc6\u540e\u7684\u5b57\u7b26\u4e32\uff0c\u89e3\u5bc6\u8bf7\u53c2\u7167\uff1a",Object(l.b)("a",{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V"},"code \u89e3\u7801\u63a5\u53e3"))),Object(l.b)("tr",null,Object(l.b)("td",null,"isSuccess"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",null,"\u662f\u5426\u6210\u529f")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),'Taro.addCard({\n  cardList: [\n    {\n      cardId: \'\',\n      cardExt: \'{"code": "", "openid": "", "timestamp": "", "signature":""}\'\n    }, {\n      cardId: \'\',\n      cardExt: \'{"code": "", "openid": "", "timestamp": "", "signature":""}\'\n    }\n  ],\n  success: function (res) {\n    console.log(res.cardList) // \u5361\u5238\u6dfb\u52a0\u7ed3\u679c\n  }\n})\n')),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.addCard"),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}i.isMDXComponent=!0},1761:function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return c}))},1762:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return c}))},1763:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var c=n(0),r=n.n(c);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),i=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,l=e.originalType,b=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=i(n),s=c,j=u["".concat(b,".").concat(s)]||u[s]||O[s]||l;return n?r.a.createElement(j,a(a({ref:t},d),{},{components:n})):r.a.createElement(j,a({ref:t},d))}));function j(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=n.length,b=new Array(l);b[0]=s;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:c,b[1]=a;for(var d=2;d<l;d++)b[d]=n[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);