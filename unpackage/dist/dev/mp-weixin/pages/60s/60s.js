(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/60s/60s"],{116:function(n,t,o){"use strict";(function(n,t){var e=o(4);o(26);e(o(25));var i=e(o(117));n.__webpack_require_UNI_MP_PLUGIN__=o,t(i.default)}).call(this,o(1)["default"],o(2)["createPage"])},117:function(n,t,o){"use strict";o.r(t);var e=o(118),i=o(120);for(var c in i)["default"].indexOf(c)<0&&function(n){o.d(t,n,(function(){return i[n]}))}(c);o(122);var a,r=o(32),s=Object(r["default"])(i["default"],e["render"],e["staticRenderFns"],!1,null,"57e448fa",null,!1,e["components"],a);s.options.__file="pages/60s/60s.vue",t["default"]=s.exports},118:function(n,t,o){"use strict";o.r(t);var e=o(119);o.d(t,"render",(function(){return e["render"]})),o.d(t,"staticRenderFns",(function(){return e["staticRenderFns"]})),o.d(t,"recyclableRender",(function(){return e["recyclableRender"]})),o.d(t,"components",(function(){return e["components"]}))},119:function(n,t,o){"use strict";var e;o.r(t),o.d(t,"render",(function(){return i})),o.d(t,"staticRenderFns",(function(){return a})),o.d(t,"recyclableRender",(function(){return c})),o.d(t,"components",(function(){return e}));try{e={tnTabs:function(){return Promise.all([o.e("common/vendor"),o.e("tuniao-ui/components/tn-tabs/tn-tabs")]).then(o.bind(null,223))},tnEmpty:function(){return o.e("tuniao-ui/components/tn-empty/tn-empty").then(o.bind(null,230))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var n=this,t=n.$createElement;n._self._c},c=!1,a=[];i._withStripped=!0},120:function(n,t,o){"use strict";o.r(t);var e=o(121),i=o.n(e);for(var c in e)["default"].indexOf(c)<0&&function(n){o.d(t,n,(function(){return e[n]}))}(c);t["default"]=i.a},121:function(n,t,o){"use strict";(function(n){var e=o(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;e(o(70));var i=o(67),c={data:function(){return{picture:"",droImg:!1,currentIndex:0,chinanData:"",tabbarList:[{name:"60s读懂世界",activeIcon:"discover-fill",inactiveIcon:"discover",url:"https://api.vvhan.com/api/60s"},{name:"微博热搜",activeIcon:"honor",inactiveIcon:"honor",activeIconColor:"#FFFFFF",inactiveIconColor:"#FFFFFF",iconSize:50,out:!0,url:"https://api.vvhan.com/api/wbhot"},{name:"抖音热搜",activeIcon:"honor",inactiveIcon:"honor",activeIconColor:"#FFFFFF",inactiveIconColor:"#FFFFFF",iconSize:50,out:!0,url:"https://api.vvhan.com/api/hotlist?type=douyinHot"},{name:"职场日历",activeIcon:"honor",inactiveIcon:"honor",activeIconColor:"#FFFFFF",inactiveIconColor:"#FFFFFF",iconSize:50,out:!0,url:"https://api.vvhan.com/api/zhichang"},{name:"摸鱼日历",activeIcon:"honor",inactiveIcon:"honor",activeIconColor:"#FFFFFF",inactiveIconColor:"#FFFFFF",iconSize:50,out:!0,url:"https://api.vvhan.com/api/moyu"}]}},onLoad:function(){n.getStorageSync("NEWDATA")?(this.chinanData=n.getStorageSync("NEWDATA"),this.droImg=!0):this.get60data()},methods:{fail:function(n){console.log(n)},done:function(n){console.log("绘制完成:")},save:function(){var t=this.currentIndex;switch(t){case 1:break;case 2:break;default:n.downloadFile({url:this.tabbarList[t].url,success:function(t){200===t.statusCode?n.showToast({title:"保存成功",icon:"none"}):n.showToast({title:"保存失败",icon:"none"})},fail:function(t){console.log(t),n.showToast({title:"保存失败",icon:"none"})}});break}},saveImage:function(){n.saveImageToPhotosAlbum({filePath:this.picture,success:function(t){n.showToast({title:"已保存到相册",icon:"success",duration:2e3})},fail:function(n){console.log(n)}})},open:function(t){console.log(t),n.navigateTo({url:"/pages/webView/webView?url="+t})},tabChange:function(n){this.currentIndex=n},get60data:function(){var t=this;n.showLoading({title:"加载中..."}),(0,i.get60s)().then((function(o){console.log(o),o.data?(n.hideLoading(),n.setStorageSync("NEWDATA",o.data),t.chinanData=o.data,t.droImg=!0):(n.hideLoading(),n.showToast({title:"服务器被挤爆啦！",icon:"none"}))}))}}};t.default=c}).call(this,o(2)["default"])},122:function(n,t,o){"use strict";o.r(t);var e=o(123),i=o.n(e);for(var c in e)["default"].indexOf(c)<0&&function(n){o.d(t,n,(function(){return e[n]}))}(c);t["default"]=i.a},123:function(n,t,o){}},[[116,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/60s/60s.js.map