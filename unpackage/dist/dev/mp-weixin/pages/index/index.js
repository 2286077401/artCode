(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{81:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26);o(t(25));var r=o(t(82));n.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},82:function(n,e,t){"use strict";t.r(e);var o=t(83),r=t(85);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t(87);var c,a=t(32),u=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"57280228",null,!1,o["components"],c);u.options.__file="pages/index/index.vue",e["default"]=u.exports},83:function(n,e,t){"use strict";t.r(e);var o=t(84);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},84:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return c})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return o}));try{o={listPro:function(){return Promise.all([t.e("common/vendor"),t.e("components/listPro/listPro")]).then(t.bind(null,158))},draw:function(){return Promise.all([t.e("common/vendor"),t.e("components/draw/draw")]).then(t.bind(null,165))},indexPage:function(){return t.e("components/indexPage/indexPage").then(t.bind(null,172))},arCode:function(){return Promise.all([t.e("common/vendor"),t.e("components/arCode/arCode")]).then(t.bind(null,179))},my:function(){return Promise.all([t.e("common/vendor"),t.e("components/my/my")]).then(t.bind(null,186))},tnTabbar:function(){return Promise.all([t.e("common/vendor"),t.e("tuniao-ui/components/tn-tabbar/tn-tabbar")]).then(t.bind(null,202))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},i=!1,c=[];r._withStripped=!0},85:function(n,e,t){"use strict";t.r(e);var o=t(86),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},86:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={components:{},data:function(){return{tabberPageLoadFlag:[],tabbarList:[{title:"聊天",activeIcon:"count-fill",inactiveIcon:"menu"},{title:"绘画",activeIcon:"honor-fill",inactiveIcon:"honor"},{title:"应用",activeIcon:"vip-fill",inactiveIcon:"vip",activeIconColor:"#FFFFFF",inactiveIconColor:"#FFFFFF",iconSize:50,out:!0},{title:"艺术二维码",activeIcon:"discover-fill",inactiveIcon:"discover"},{title:"我的",activeIcon:"computer-fill",inactiveIcon:"computer"}],currentIndex:0}},onLoad:function(n){var e=Number(n.index||0);this.tabberPageLoadFlag=this.tabbarList.map((function(n,t){return e===t})),this.switchTabbar(e)},methods:{switchTabbar:function(n){this._switchTabbarPage(n)},tabbarPageScrollLower:function(n){},_switchTabbarPage:function(n){var e=this.tabberPageLoadFlag[n];void 0!==e&&(!1===e&&(this.tabberPageLoadFlag[n]=!0),this.currentIndex=n)}}};e.default=o},87:function(n,e,t){"use strict";t.r(e);var o=t(88),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},88:function(n,e,t){}},[[81,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map