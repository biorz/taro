(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{1761:function(e,t,n){"use strict";function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var b in n)Object.prototype.hasOwnProperty.call(n,b)&&(e[b]=n[b])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return b}))},1762:function(e,t,n){"use strict";function b(e,t){if(null==e)return{};var n,b,c={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return b}))},1763:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return p}));var b=n(0),c=n.n(b);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(null==e)return{};var n,b,c=function(e,t){if(null==e)return{};var n,b,c={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var j=c.a.createContext({}),o=function(e){var t=c.a.useContext(j),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=o(e.components);return c.a.createElement(j.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,a=e.originalType,l=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),i=o(n),d=b,p=i["".concat(l,".").concat(d)]||i[d]||u[d]||a;return n?c.a.createElement(p,r(r({ref:t},j),{},{components:n})):c.a.createElement(p,r({ref:t},j))}));function p(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var O in t)hasOwnProperty.call(t,O)&&(r[O]=t[O]);r.originalType=e,r.mdxType="string"==typeof e?e:b,l[1]=r;for(var j=2;j<a;j++)l[j]=n[j];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1764:function(e,t,n){"use strict";function b(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(c&&(c+=" "),c+=t);return c}},1765:function(e,t,n){"use strict";var b=n(0),c=n(1766);t.a=function(){var e=Object(b.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1766:function(e,t,n){"use strict";var b=n(0),c=Object(b.createContext)(void 0);t.a=c},1767:function(e,t,n){"use strict";var b=n(0),c=n.n(b),a=n(1765),l=n(1764),r=n(51),O=n.n(r),j=37,o=39;t.a=function(e){var t=e.lazy,n=e.block,r=e.children,i=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=Object(a.a)(),s=m.tabGroupChoices,g=m.setTabGroupChoices,v=Object(b.useState)(i),N=v[0],y=v[1];if(null!=d){var h=s[d];null!=h&&h!==N&&u.some((function(e){return e.value===h}))&&y(h)}var f=function(e){y(e),null!=d&&g(d,e)},w=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},u.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(l.a)("tabs__item",O.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case o:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case j:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return f(t)},onClick:function(){f(t)}},n)}))),t?Object(b.cloneElement)(r.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},r.map((function(e,t){return Object(b.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},1768:function(e,t,n){"use strict";var b=n(1761),c=n(0),a=n.n(c);t.a=function(e){var t=e.children,n=e.hidden,c=e.className;return a.a.createElement("div",Object(b.a)({role:"tabpanel"},{hidden:n,className:c}),t)}},676:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return j})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var b=n(1761),c=n(1762),a=(n(0),n(1763)),l=n(1767),r=n(1768),O={title:"MovableView",sidebar_label:"MovableView"},j={unversionedId:"components/viewContainer/movable-view",id:"components/viewContainer/movable-view",isDocsHomePage:!1,title:"MovableView",description:"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8\u3002movable-view \u5fc5\u987b\u5728 movable-area \u7ec4\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u662f\u76f4\u63a5\u5b50\u8282\u70b9\uff0c\u5426\u5219\u4e0d\u80fd\u79fb\u52a8\u3002",source:"@site/docs/components/viewContainer/movable-view.md",slug:"/components/viewContainer/movable-view",permalink:"/taro/docs/next/components/viewContainer/movable-view",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/viewContainer/movable-view.md",version:"current",sidebar_label:"MovableView",sidebar:"components",previous:{title:"MovableArea",permalink:"/taro/docs/next/components/viewContainer/movable-area"},next:{title:"CoverView",permalink:"/taro/docs/next/components/viewContainer/cover-view"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"MovableViewProps",id:"movableviewprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TChangeSource",id:"tchangesource",children:[]},{value:"onChangeEventDeatil",id:"onchangeeventdeatil",children:[]},{value:"onScaleEventDeatil",id:"onscaleeventdeatil",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8\u3002movable-view \u5fc5\u987b\u5728 movable-area \u7ec4\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u662f\u76f4\u63a5\u5b50\u8282\u70b9\uff0c\u5426\u5219\u4e0d\u80fd\u79fb\u52a8\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<MovableViewProps>\n")),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)(l.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(a.b)(r.a,{value:"React",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>\u5e26\u8d70\u6211</MovableView>\n      </MovableArea>\n    )\n  }\n}\n"))),Object(a.b)(r.a,{value:"Vue",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-html"}),"  <movable-area style='height: 200px; width: 200px; background: red;'>\n    <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>\u5e26\u6211\u8d70</movable-view>\n  </movable-area>\n")))),Object(a.b)("h2",{id:"movableviewprops"},"MovableViewProps"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"direction"),Object(a.b)("td",null,Object(a.b)("code",null,'"all" | "vertical" | "horizontal" | "none"')),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"none")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"movable-view \u7684\u79fb\u52a8\u65b9\u5411\uff0c\u5c5e\u6027\u503c\u6709",Object(a.b)("code",null,"all"),"\u3001",Object(a.b)("code",null,"vertical"),"\u3001",Object(a.b)("code",null,"horizontal"),"\u3001",Object(a.b)("code",null,"none"))),Object(a.b)("tr",null,Object(a.b)("td",null,"inertia"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"movable-view \u662f\u5426\u5e26\u6709\u60ef\u6027")),Object(a.b)("tr",null,Object(a.b)("td",null,"outOfBounds"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u8d85\u8fc7\u53ef\u79fb\u52a8\u533a\u57df\u540e\uff0cmovable-view \u662f\u5426\u8fd8\u53ef\u4ee5\u79fb\u52a8")),Object(a.b)("tr",null,Object(a.b)("td",null,"x"),Object(a.b)("td",null,Object(a.b)("code",null,"string | number")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5b9a\u4e49 x \u8f74\u65b9\u5411\u7684\u504f\u79fb\uff0c\u5982\u679c x \u7684\u503c\u4e0d\u5728\u53ef\u79fb\u52a8\u8303\u56f4\u5185\uff0c\u4f1a\u81ea\u52a8\u79fb\u52a8\u5230\u53ef\u79fb\u52a8\u8303\u56f4\uff1b\u6539\u53d8 x \u7684\u503c\u4f1a\u89e6\u53d1\u52a8\u753b")),Object(a.b)("tr",null,Object(a.b)("td",null,"y"),Object(a.b)("td",null,Object(a.b)("code",null,"string | number")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5b9a\u4e49 y \u8f74\u65b9\u5411\u7684\u504f\u79fb\uff0c\u5982\u679c y \u7684\u503c\u4e0d\u5728\u53ef\u79fb\u52a8\u8303\u56f4\u5185\uff0c\u4f1a\u81ea\u52a8\u79fb\u52a8\u5230\u53ef\u79fb\u52a8\u8303\u56f4\uff1b\u6539\u53d8 y \u7684\u503c\u4f1a\u89e6\u53d1\u52a8\u753b")),Object(a.b)("tr",null,Object(a.b)("td",null,"damping"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"20")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u963b\u5c3c\u7cfb\u6570\uff0c\u7528\u4e8e\u63a7\u5236x\u6216y\u6539\u53d8\u65f6\u7684\u52a8\u753b\u548c\u8fc7\u754c\u56de\u5f39\u7684\u52a8\u753b\uff0c\u503c\u8d8a\u5927\u79fb\u52a8\u8d8a\u5feb")),Object(a.b)("tr",null,Object(a.b)("td",null,"friction"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"2")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6469\u64e6\u7cfb\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u60ef\u6027\u6ed1\u52a8\u7684\u52a8\u753b\uff0c\u503c\u8d8a\u5927\u6469\u64e6\u529b\u8d8a\u5927\uff0c\u6ed1\u52a8\u8d8a\u5feb\u505c\u6b62\uff1b\u5fc5\u987b\u5927\u4e8e 0\uff0c\u5426\u5219\u4f1a\u88ab\u8bbe\u7f6e\u6210\u9ed8\u8ba4\u503c")),Object(a.b)("tr",null,Object(a.b)("td",null,"disabled"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(a.b)("tr",null,Object(a.b)("td",null,"scale"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u652f\u6301\u53cc\u6307\u7f29\u653e\uff0c\u9ed8\u8ba4\u7f29\u653e\u624b\u52bf\u751f\u6548\u533a\u57df\u662f\u5728 movable-view \u5185")),Object(a.b)("tr",null,Object(a.b)("td",null,"scaleMin"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"0.5")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\u6700\u5c0f\u503c")),Object(a.b)("tr",null,Object(a.b)("td",null,"scaleMax"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"10")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\u6700\u5927\u503c")),Object(a.b)("tr",null,Object(a.b)("td",null,"scaleValue"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"1")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0.5 - 10")),Object(a.b)("tr",null,Object(a.b)("td",null,"animation"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"true")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u4f7f\u7528\u52a8\u753b")),Object(a.b)("tr",null,Object(a.b)("td",null,"onChange"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onChangeEventDeatil>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6")),Object(a.b)("tr",null,Object(a.b)("td",null,"onScale"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onScaleEventDeatil>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u7f29\u653e\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6")),Object(a.b)("tr",null,Object(a.b)("td",null,"onHTouchMove"),Object(a.b)("td",null,Object(a.b)("code",null,"TouchEventFunction")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u521d\u6b21\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8\u4e3a\u6a2a\u5411\u7684\u79fb\u52a8\uff0c\u5982\u679c catch \u6b64\u4e8b\u4ef6\uff0c\u5219\u610f\u5473\u7740 touchmove \u4e8b\u4ef6\u4e5f\u88ab catch")),Object(a.b)("tr",null,Object(a.b)("td",null,"onVTouchMove"),Object(a.b)("td",null,Object(a.b)("code",null,"TouchEventFunction")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u521d\u6b21\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8\u4e3a\u7eb5\u5411\u7684\u79fb\u52a8\uff0c\u5982\u679c catch \u6b64\u4e8b\u4ef6\uff0c\u5219\u610f\u5473\u7740 touchmove \u4e8b\u4ef6\u4e5f\u88ab catch")),Object(a.b)("tr",null,Object(a.b)("td",null,"onDragStart"),Object(a.b)("td",null," "),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5f00\u59cb\u62d6\u52a8\u65f6\u89e6\u53d1")),Object(a.b)("tr",null,Object(a.b)("td",null,"onDragEnd"),Object(a.b)("td",null," "),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u62d6\u52a8\u7ed3\u675f\u65f6\u89e6\u53d1")))),Object(a.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.direction"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.inertia"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.outOfBounds"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.x"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.y"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.damping"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.friction"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.disabled"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.scale"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.scaleMin"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.scaleMax"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.scaleValue"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.animation"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.onChange"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.onScale"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.onHTouchMove"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.onVTouchMove"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.onDragStart"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.onDragEnd"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(a.b)("h3",{id:"tchangesource"},"TChangeSource"),Object(a.b)("p",null,"\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"touch"),Object(a.b)("td",null,"\u62d6\u52a8")),Object(a.b)("tr",null,Object(a.b)("td",null,"touch-out-of-bounds"),Object(a.b)("td",null,"\u8d85\u51fa\u79fb\u52a8\u8303\u56f4")),Object(a.b)("tr",null,Object(a.b)("td",null,"out-of-bounds"),Object(a.b)("td",null,"\u8d85\u51fa\u79fb\u52a8\u8303\u56f4\u540e\u7684\u56de\u5f39")),Object(a.b)("tr",null,Object(a.b)("td",null,"friction"),Object(a.b)("td",null,"\u60ef\u6027")),Object(a.b)("tr",null,Object(a.b)("td",null),Object(a.b)("td",null,"setData")))),Object(a.b)("h3",{id:"onchangeeventdeatil"},"onChangeEventDeatil"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"x"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"X \u5750\u6807")),Object(a.b)("tr",null,Object(a.b)("td",null,"y"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"Y \u5750\u6807")),Object(a.b)("tr",null,Object(a.b)("td",null,"source"),Object(a.b)("td",null,Object(a.b)("code",null,'"" | "touch" | "touch-out-of-bounds" | "out-of-bounds" | "friction"')),Object(a.b)("td",null,"\u89e6\u53d1\u4e8b\u4ef6")))),Object(a.b)("h3",{id:"onscaleeventdeatil"},"onScaleEventDeatil"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"x"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"X \u5750\u6807")),Object(a.b)("tr",null,Object(a.b)("td",null,"y"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"Y \u5750\u6807")),Object(a.b)("tr",null,Object(a.b)("td",null,"scale"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"\u7f29\u653e\u6bd4\u4f8b")))),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"MovableView"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);