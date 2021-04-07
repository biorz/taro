(window.webpackJsonp=window.webpackJsonp||[]).push([[1398],{1463:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(1761),a=n(1762),c=(n(0),n(1763)),l={title:"Taro.onBLECharacteristicValueChange(callback)",sidebar_label:"onBLECharacteristicValueChange"},b={unversionedId:"apis/device/ble/onBLECharacteristicValueChange",id:"version-3.x/apis/device/ble/onBLECharacteristicValueChange",isDocsHomePage:!1,title:"Taro.onBLECharacteristicValueChange(callback)",description:"\u76d1\u542c\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u53d8\u5316\u4e8b\u4ef6\u3002\u5fc5\u987b\u5148\u542f\u7528 notifyBLECharacteristicValueChange \u63a5\u53e3\u624d\u80fd\u63a5\u6536\u5230\u8bbe\u5907\u63a8\u9001\u7684 notification\u3002",source:"@site/versioned_docs/version-3.x/apis/device/ble/onBLECharacteristicValueChange.md",slug:"/apis/device/ble/onBLECharacteristicValueChange",permalink:"/taro/docs/apis/device/ble/onBLECharacteristicValueChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/ble/onBLECharacteristicValueChange.md",version:"3.x",sidebar_label:"onBLECharacteristicValueChange",sidebar:"version-3.x/API",previous:{title:"Taro.onBLEConnectionStateChange(callback)",permalink:"/taro/docs/apis/device/ble/onBLEConnectionStateChange"},next:{title:"Taro.notifyBLECharacteristicValueChange(option)",permalink:"/taro/docs/apis/device/ble/notifyBLECharacteristicValueChange"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u76d1\u542c\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u53d8\u5316\u4e8b\u4ef6\u3002\u5fc5\u987b\u5148\u542f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"notifyBLECharacteristicValueChange")," \u63a5\u53e3\u624d\u80fd\u63a5\u6536\u5230\u8bbe\u5907\u63a8\u9001\u7684 notification\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"callback"},"Callback"),Object(c.b)("p",null,"\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"result"),Object(c.b)("td",null,Object(c.b)("code",null,"CallbackResult"))))),Object(c.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"characteristicId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u7684 uuid")),Object(c.b)("tr",null,Object(c.b)("td",null,"deviceId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),Object(c.b)("tr",null,Object(c.b)("td",null,"serviceId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u5bf9\u5e94\u670d\u52a1\u7684 uuid")),Object(c.b)("tr",null,Object(c.b)("td",null,"value"),Object(c.b)("td",null,Object(c.b)("code",null,"ArrayBuffer")),Object(c.b)("td",null,"\u7279\u5f81\u503c\u6700\u65b0\u7684\u503c")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// ArrayBuffer\u8f6c16\u8fdb\u5236\u5b57\u7b26\u4e32\u793a\u4f8b\nfunction ab2hex(buffer) {\n  let hexArr = Array.prototype.map.call(\n    new Uint8Array(buffer),\n    function(bit) {\n      return ('00' + bit.toString(16)).slice(-2)\n    }\n  )\n  return hexArr.join('');\n}\nTaro.onBLECharacteristicValueChange(function (res) {\n  console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)\n  console.log(ab2hex(res.value))\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.onBLECharacteristicValueChange"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1761:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1762:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},1763:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,O=s["".concat(l,".").concat(p)]||s[p]||d[p]||c;return n?a.a.createElement(O,b(b({ref:t},o),{},{components:n})):a.a.createElement(O,b({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=p;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<c;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);