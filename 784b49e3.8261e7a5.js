(window.webpackJsonp=window.webpackJsonp||[]).push([[807],{1761:function(t,e,l){"use strict";function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var b in l)Object.prototype.hasOwnProperty.call(l,b)&&(t[b]=l[b])}return t}).apply(this,arguments)}l.d(e,"a",(function(){return b}))},1762:function(t,e,l){"use strict";function b(t,e){if(null==t)return{};var l,b,n={},c=Object.keys(t);for(b=0;b<c.length;b++)l=c[b],e.indexOf(l)>=0||(n[l]=t[l]);return n}l.d(e,"a",(function(){return b}))},1763:function(t,e,l){"use strict";l.d(e,"a",(function(){return o})),l.d(e,"b",(function(){return s}));var b=l(0),n=l.n(b);function c(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function u(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,b)}return l}function O(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?u(Object(l),!0).forEach((function(e){c(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function j(t,e){if(null==t)return{};var l,b,n=function(t,e){if(null==t)return{};var l,b,n={},c=Object.keys(t);for(b=0;b<c.length;b++)l=c[b],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(b=0;b<c.length;b++)l=c[b],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var r=n.a.createContext({}),d=function(t){var e=n.a.useContext(r),l=e;return t&&(l="function"==typeof t?t(e):O(O({},e),t)),l},o=function(t){var e=d(t.components);return n.a.createElement(r.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},a=n.a.forwardRef((function(t,e){var l=t.components,b=t.mdxType,c=t.originalType,u=t.parentName,r=j(t,["components","mdxType","originalType","parentName"]),o=d(l),a=b,s=o["".concat(u,".").concat(a)]||o[a]||i[a]||c;return l?n.a.createElement(s,O(O({ref:e},r),{},{components:l})):n.a.createElement(s,O({ref:e},r))}));function s(t,e){var l=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var c=l.length,u=new Array(c);u[0]=a;var O={};for(var j in e)hasOwnProperty.call(e,j)&&(O[j]=e[j]);O.originalType=t,O.mdxType="string"==typeof t?t:b,u[1]=O;for(var r=2;r<c;r++)u[r]=l[r];return n.a.createElement.apply(null,u)}return n.a.createElement.apply(null,l)}a.displayName="MDXCreateElement"},873:function(t,e,l){"use strict";l.r(e),l.d(e,"frontMatter",(function(){return u})),l.d(e,"metadata",(function(){return O})),l.d(e,"rightToc",(function(){return j})),l.d(e,"default",(function(){return d}));var b=l(1761),n=l(1762),c=(l(0),l(1763)),u={title:"common",sidebar_label:"common"},O={unversionedId:"components/common",id:"version-2.x/components/common",isDocsHomePage:!1,title:"common",description:"StandardProps",source:"@site/versioned_docs/version-2.x/components/common.md",slug:"/components/common",permalink:"/taro/docs/2.x/components/common",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/common.md",version:"2.x",sidebar_label:"common"},j=[{value:"StandardProps",id:"standardprops",children:[]},{value:"FormItemProps",id:"formitemprops",children:[]},{value:"EventProps",id:"eventprops",children:[]},{value:"CommonEvent",id:"commonevent",children:[]},{value:"BaseEventOrig",id:"baseeventorig",children:[]},{value:"ITouchEvent",id:"itouchevent",children:[]},{value:"CanvasTouch",id:"canvastouch",children:[]},{value:"ITouch",id:"itouch",children:[]},{value:"Target",id:"target",children:[]},{value:"netStatus",id:"netstatus",children:[]}],r={rightToc:j};function d(t){var e=t.components,l=Object(n.a)(t,["components"]);return Object(c.b)("wrapper",Object(b.a)({},r,l,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"standardprops"},"StandardProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"id"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u793a, \u4fdd\u6301\u6574\u4e2a\u9875\u9762\u552f\u4e00")),Object(c.b)("tr",null,Object(c.b)("td",null,"className"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u540c ",Object(c.b)("code",null,"class"),"\uff0c\u5728 React/Nerv \u91cc\u4e00\u822c\u4f7f\u7528 ",Object(c.b)("code",null,"className")," \u4f5c\u4e3a ",Object(c.b)("code",null,"class")," \u7684\u4ee3\u79f0")),Object(c.b)("tr",null,Object(c.b)("td",null,"style"),Object(c.b)("td",null,Object(c.b)("code",null,"string | CSSProperties")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u7ec4\u4ef6\u7684\u5185\u8054\u6837\u5f0f, \u53ef\u4ee5\u52a8\u6001\u8bbe\u7f6e\u7684\u5185\u8054\u6837\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"key"),Object(c.b)("td",null,Object(c.b)("code",null,"string | number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5982\u679c\u5217\u8868\u4e2d\u9879\u76ee\u7684\u4f4d\u7f6e\u4f1a\u52a8\u6001\u6539\u53d8\u6216\u8005\u6709\u65b0\u7684\u9879\u76ee\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\uff0c",Object(c.b)("br",null),"\u9700\u8981\u4f7f\u7528 ",Object(c.b)("code",null,"wx:key")," \u6765\u6307\u5b9a\u5217\u8868\u4e2d\u9879\u76ee\u7684\u552f\u4e00\u7684\u6807\u8bc6\u7b26\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"hidden"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u7ec4\u4ef6\u662f\u5426\u663e\u793a, \u6240\u6709\u7ec4\u4ef6\u9ed8\u8ba4\u663e\u793a")),Object(c.b)("tr",null,Object(c.b)("td",null,"animation"),Object(c.b)("td",null,Object(c.b)("code",null,"{ actions: object[]; }")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u52a8\u753b\u5c5e\u6027")),Object(c.b)("tr",null,Object(c.b)("td",null,"ref"),Object(c.b)("td",null,Object(c.b)("code",null,"string | ((node: any) => any)")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f15\u7528")))),Object(c.b)("h2",{id:"formitemprops"},"FormItemProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"name"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8868\u5355\u6570\u636e\u6807\u8bc6")))),Object(c.b)("h2",{id:"eventprops"},"EventProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"onTouchStart"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: ITouchEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u5f00\u59cb")),Object(c.b)("tr",null,Object(c.b)("td",null,"onTouchMove"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: ITouchEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8")),Object(c.b)("tr",null,Object(c.b)("td",null,"onTouchCancel"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: ITouchEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u88ab\u6253\u65ad\uff0c\u5982\u6765\u7535\u63d0\u9192\uff0c\u5f39\u7a97")),Object(c.b)("tr",null,Object(c.b)("td",null,"onTouchEnd"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: ITouchEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u7ed3\u675f")),Object(c.b)("tr",null,Object(c.b)("td",null,"onClick"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: ITouchEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u89e6\u6478\u540e\u9a6c\u4e0a\u79bb\u5f00")),Object(c.b)("tr",null,Object(c.b)("td",null,"onLongPress"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: CommonEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u89e6\u6478\u540e\uff0c\u8d85\u8fc7350ms\u518d\u79bb\u5f00\uff0c\u5982\u679c\u6307\u5b9a\u4e86\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u5e76\u89e6\u53d1\u4e86\u8fd9\u4e2a\u4e8b\u4ef6\uff0ctap\u4e8b\u4ef6\u5c06\u4e0d\u88ab\u89e6\u53d1")),Object(c.b)("tr",null,Object(c.b)("td",null,"onLongClick"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: CommonEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u89e6\u6478\u540e\uff0c\u8d85\u8fc7350ms\u518d\u79bb\u5f00\uff08\u63a8\u8350\u4f7f\u7528longpress\u4e8b\u4ef6\u4ee3\u66ff\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"onTransitionEnd"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: CommonEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u4f1a\u5728 WXSS transition \u6216 Taro.createAnimation \u52a8\u753b\u7ed3\u675f\u540e\u89e6\u53d1")),Object(c.b)("tr",null,Object(c.b)("td",null,"onAnimationStart"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: CommonEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u4f1a\u5728\u4e00\u4e2a WXSS animation \u52a8\u753b\u5f00\u59cb\u65f6\u89e6\u53d1")),Object(c.b)("tr",null,Object(c.b)("td",null,"onAnimationIteration"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: CommonEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u4f1a\u5728\u4e00\u4e2a WXSS animation \u4e00\u6b21\u8fed\u4ee3\u7ed3\u675f\u65f6\u89e6\u53d1")),Object(c.b)("tr",null,Object(c.b)("td",null,"onAnimationEnd"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: CommonEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u4f1a\u5728\u4e00\u4e2a WXSS animation \u52a8\u753b\u5b8c\u6210\u65f6\u89e6\u53d1")),Object(c.b)("tr",null,Object(c.b)("td",null,"onTouchForceChange"),Object(c.b)("td",null,Object(c.b)("code",null,"(event: CommonEvent) => any")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5728\u652f\u6301 3D Touch \u7684 iPhone \u8bbe\u5907\uff0c\u91cd\u6309\u65f6\u4f1a\u89e6\u53d1")))),Object(c.b)("h2",{id:"commonevent"},"CommonEvent"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"type"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u4e8b\u4ef6\u7c7b\u578b")),Object(c.b)("tr",null,Object(c.b)("td",null,"timeStamp"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u4e8b\u4ef6\u751f\u6210\u65f6\u7684\u65f6\u95f4\u6233")),Object(c.b)("tr",null,Object(c.b)("td",null,"target"),Object(c.b)("td",null,Object(c.b)("code",null,"Target")),Object(c.b)("td",null,"\u89e6\u53d1\u4e8b\u4ef6\u7684\u7ec4\u4ef6\u7684\u4e00\u4e9b\u5c5e\u6027\u503c\u96c6\u5408")),Object(c.b)("tr",null,Object(c.b)("td",null,"currentTarget"),Object(c.b)("td",null,Object(c.b)("code",null,"currentTarget")),Object(c.b)("td",null,"\u5f53\u524d\u7ec4\u4ef6\u7684\u4e00\u4e9b\u5c5e\u6027\u503c\u96c6\u5408")),Object(c.b)("tr",null,Object(c.b)("td",null,"detail"),Object(c.b)("td",null,Object(c.b)("code",null,"T")),Object(c.b)("td",null,"\u989d\u5916\u7684\u4fe1\u606f")),Object(c.b)("tr",null,Object(c.b)("td",null,"preventDefault"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void")),Object(c.b)("td",null,"\u963b\u6b62\u5143\u7d20\u53d1\u751f\u9ed8\u8ba4\u7684\u884c\u4e3a")),Object(c.b)("tr",null,Object(c.b)("td",null,"stopPropagation"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void")),Object(c.b)("td",null,"\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u5230\u7236\u5143\u7d20,\u963b\u6b62\u4efb\u4f55\u7236\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u88ab\u6267\u884c")))),Object(c.b)("h2",{id:"baseeventorig"},"BaseEventOrig"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"type"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u4e8b\u4ef6\u7c7b\u578b")),Object(c.b)("tr",null,Object(c.b)("td",null,"timeStamp"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u4e8b\u4ef6\u751f\u6210\u65f6\u7684\u65f6\u95f4\u6233")),Object(c.b)("tr",null,Object(c.b)("td",null,"target"),Object(c.b)("td",null,Object(c.b)("code",null,"Target")),Object(c.b)("td",null,"\u89e6\u53d1\u4e8b\u4ef6\u7684\u7ec4\u4ef6\u7684\u4e00\u4e9b\u5c5e\u6027\u503c\u96c6\u5408")),Object(c.b)("tr",null,Object(c.b)("td",null,"currentTarget"),Object(c.b)("td",null,Object(c.b)("code",null,"currentTarget")),Object(c.b)("td",null,"\u5f53\u524d\u7ec4\u4ef6\u7684\u4e00\u4e9b\u5c5e\u6027\u503c\u96c6\u5408")),Object(c.b)("tr",null,Object(c.b)("td",null,"detail"),Object(c.b)("td",null,Object(c.b)("code",null,"T")),Object(c.b)("td",null,"\u989d\u5916\u7684\u4fe1\u606f")),Object(c.b)("tr",null,Object(c.b)("td",null,"preventDefault"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void")),Object(c.b)("td",null,"\u963b\u6b62\u5143\u7d20\u53d1\u751f\u9ed8\u8ba4\u7684\u884c\u4e3a")),Object(c.b)("tr",null,Object(c.b)("td",null,"stopPropagation"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void")),Object(c.b)("td",null,"\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u5230\u7236\u5143\u7d20,\u963b\u6b62\u4efb\u4f55\u7236\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u88ab\u6267\u884c")))),Object(c.b)("h2",{id:"itouchevent"},"ITouchEvent"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"touches"),Object(c.b)("td",null,Object(c.b)("code",null,"ITouch[]")),Object(c.b)("td",null,"\u89e6\u6478\u4e8b\u4ef6\uff0c\u5f53\u524d\u505c\u7559\u5728\u5c4f\u5e55\u4e2d\u7684\u89e6\u6478\u70b9\u4fe1\u606f\u7684\u6570\u7ec4")),Object(c.b)("tr",null,Object(c.b)("td",null,"changedTouches"),Object(c.b)("td",null,Object(c.b)("code",null,"CanvasTouch[]")),Object(c.b)("td",null,"\u89e6\u6478\u4e8b\u4ef6\uff0c\u5f53\u524d\u53d8\u5316\u7684\u89e6\u6478\u70b9\u4fe1\u606f\u7684\u6570\u7ec4")))),Object(c.b)("h2",{id:"canvastouch"},"CanvasTouch"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"identifier"),Object(c.b)("td",null,Object(c.b)("code",null,"number"))),Object(c.b)("tr",null,Object(c.b)("td",null,"x"),Object(c.b)("td",null,Object(c.b)("code",null,"number"))),Object(c.b)("tr",null,Object(c.b)("td",null,"y"),Object(c.b)("td",null,Object(c.b)("code",null,"number"))))),Object(c.b)("h2",{id:"itouch"},"ITouch"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"identifier"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u89e6\u6478\u70b9\u7684\u6807\u8bc6\u7b26")),Object(c.b)("tr",null,Object(c.b)("td",null,"pageX"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8ddd\u79bb\u6587\u6863\u5de6\u4e0a\u89d2\u7684\u8ddd\u79bb\uff0c\u6587\u6863\u7684\u5de6\u4e0a\u89d2\u4e3a\u539f\u70b9 \uff0c\u6a2a\u5411\u4e3aX\u8f74\uff0c\u7eb5\u5411\u4e3aY\u8f74")),Object(c.b)("tr",null,Object(c.b)("td",null,"pageY"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8ddd\u79bb\u6587\u6863\u5de6\u4e0a\u89d2\u7684\u8ddd\u79bb\uff0c\u6587\u6863\u7684\u5de6\u4e0a\u89d2\u4e3a\u539f\u70b9 \uff0c\u6a2a\u5411\u4e3aX\u8f74\uff0c\u7eb5\u5411\u4e3aY\u8f74")),Object(c.b)("tr",null,Object(c.b)("td",null,"clientX"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8ddd\u79bb\u9875\u9762\u53ef\u663e\u793a\u533a\u57df\uff08\u5c4f\u5e55\u9664\u53bb\u5bfc\u822a\u6761\uff09\u5de6\u4e0a\u89d2\u8ddd\u79bb\uff0c\u6a2a\u5411\u4e3aX\u8f74\uff0c\u7eb5\u5411\u4e3aY\u8f74")),Object(c.b)("tr",null,Object(c.b)("td",null,"clientY"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8ddd\u79bb\u9875\u9762\u53ef\u663e\u793a\u533a\u57df\uff08\u5c4f\u5e55\u9664\u53bb\u5bfc\u822a\u6761\uff09\u5de6\u4e0a\u89d2\u8ddd\u79bb\uff0c\u6a2a\u5411\u4e3aX\u8f74\uff0c\u7eb5\u5411\u4e3aY\u8f74")))),Object(c.b)("h2",{id:"target"},"Target"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"id"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u4e8b\u4ef6\u6e90\u7ec4\u4ef6\u7684id")),Object(c.b)("tr",null,Object(c.b)("td",null,"tagName"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u5f53\u524d\u7ec4\u4ef6\u7684\u7c7b\u578b")),Object(c.b)("tr",null,Object(c.b)("td",null,"dataset"),Object(c.b)("td",null,Object(c.b)("code",null," ","{ [key: string]: any; }")),Object(c.b)("td",null,"\u4e8b\u4ef6\u6e90\u7ec4\u4ef6\u4e0a\u7531data-\u5f00\u5934\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u7ec4\u6210\u7684\u96c6\u5408")))),Object(c.b)("h2",{id:"netstatus"},"netStatus"),Object(c.b)("p",null,"\u7f51\u7edc\u72b6\u6001\u6570\u636e"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"videoBitrate"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426")),Object(c.b)("tr",null,Object(c.b)("td",null,"audioBitrate"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426")),Object(c.b)("tr",null,Object(c.b)("td",null,"videoFPS"),Object(c.b)("td",null,Object(c.b)("code",null,"string | number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426")),Object(c.b)("tr",null,Object(c.b)("td",null,"videoGOP"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426")),Object(c.b)("tr",null,Object(c.b)("td",null,"netSpeed"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426")),Object(c.b)("tr",null,Object(c.b)("td",null,"netJitter"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426")),Object(c.b)("tr",null,Object(c.b)("td",null,"videoWidth"),Object(c.b)("td",null,Object(c.b)("code",null,"string | number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426")),Object(c.b)("tr",null,Object(c.b)("td",null,"videoHeight"),Object(c.b)("td",null,Object(c.b)("code",null,"string | number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426")))))}d.isMDXComponent=!0}}]);