(window.webpackJsonp=window.webpackJsonp||[]).push([[630],{1761:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},1762:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},1763:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=d(n),O=a,j=p["".concat(o,".").concat(O)]||p[O]||u[O]||c;return n?r.a.createElement(j,i(i({ref:t},l),{},{components:n})):r.a.createElement(j,i({ref:t},l))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},696:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(1761),r=n(1762),c=(n(0),n(1763)),o={title:"Taro.createVideoContext(videoId, componentInstance)",sidebar_label:"createVideoContext"},i={unversionedId:"apis/multimedia/video/createVideoContext",id:"version-1.x/apis/multimedia/video/createVideoContext",isDocsHomePage:!1,title:"Taro.createVideoContext(videoId, componentInstance)",description:"\u521b\u5efa video \u4e0a\u4e0b\u6587 VideoContext \u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-1.x/apis/multimedia/video/createVideoContext.md",slug:"/apis/multimedia/video/createVideoContext",permalink:"/taro/docs/1.x/apis/multimedia/video/createVideoContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/multimedia/video/createVideoContext.md",version:"1.x",sidebar_label:"createVideoContext",sidebar:"version-1.x/API",previous:{title:"Taro.saveVideoToPhotosAlbum(OBJECT)",permalink:"/taro/docs/1.x/apis/multimedia/video/saveVideoToPhotosAlbum"},next:{title:"Taro.uploadFile(param)",permalink:"/taro/docs/1.x/apis/network/fileTransfer/uploadFile"}},b=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"string videoId",id:"string-videoid",children:[]},{value:"Component componentInstance",id:"component-componentinstance",children:[]}]},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[{value:"object VideoContext",id:"object-videocontext",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],l={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u521b\u5efa video \u4e0a\u4e0b\u6587 VideoContext \u5bf9\u8c61\u3002"),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.createVideoContext.html"}),Object(c.b)("inlineCode",{parentName:"a"},"wx.createVideoContext")),"\u3002"),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"string-videoid"},"string videoId"),Object(c.b)("p",null,"<","Video",">"," \u7ec4\u4ef6\u7684 id"),Object(c.b)("h3",{id:"component-componentinstance"},"Component componentInstance"),Object(c.b)("p",null,"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\uff0c\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\u7684this\uff0c\u4ee5\u64cd\u4f5c\u7ec4\u4ef6\u5185 ","<","Video",">"," \u7ec4\u4ef6"),Object(c.b)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),Object(c.b)("h3",{id:"object-videocontext"},"object VideoContext"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"play()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u64ad\u653e\u89c6\u9891")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pause()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u6682\u505c\u89c6\u9891")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"stop()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u505c\u6b62\u89c6\u9891")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"seek(number position)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8df3\u8f6c\u5230\u6307\u5b9a\u4f4d\u7f6e")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"sendDanmu(object data)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u53d1\u9001\u5f39\u5e55")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"playbackRate(number rate)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u500d\u901f\u64ad\u653e")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"requestFullScreen(object object)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8fdb\u5165\u5168\u5c4f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"exitFullScreen()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u9000\u51fa\u5168\u5c4f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"showStatusBar()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u663e\u793a\u72b6\u6001\u680f\uff0c\u4ec5\u5728iOS\u5168\u5c4f\u4e0b\u6709\u6548")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"hideStatusBar()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u9690\u85cf\u72b6\u6001\u680f\uff0c\u4ec5\u5728iOS\u5168\u5c4f\u4e0b\u6709\u6548")))),Object(c.b)("p",null,"\u6ce8: IOS\u7cfb\u7edf\u4e0b\uff0ch5\u7aef\u90e8\u5206VideoContext\u7684\u5c5e\u6027\u672a\u5b8c\u5168\u5b9e\u73b0\u3002"),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst videoContext = Taro.createVideoContext('myVideo')\n")),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.createVideoContext"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);