(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/60s/60s"],{118:function(n,t,e){"use strict";(function(n,t){var o=e(4);e(26);o(e(25));var i=o(e(119));n.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e(1)["default"],e(2)["createPage"])},119:function(n,t,e){"use strict";e.r(t);var o=e(120),i=e(122);for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e(124);var c,r=e(33),s=Object(r["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,"57e448fa",null,!1,o["components"],c);s.options.__file="pages/60s/60s.vue",t["default"]=s.exports},120:function(n,t,e){"use strict";e.r(t);var o=e(121);e.d(t,"render",(function(){return o["render"]})),e.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),e.d(t,"components",(function(){return o["components"]}))},121:function(n,t,e){"use strict";var o;e.r(t),e.d(t,"render",(function(){return i})),e.d(t,"staticRenderFns",(function(){return c})),e.d(t,"recyclableRender",(function(){return a})),e.d(t,"components",(function(){return o}));try{o={tnTabs:function(){return Promise.all([e.e("common/vendor"),e.e("tuniao-ui/components/tn-tabs/tn-tabs")]).then(e.bind(null,477))},tnEmpty:function(){return e.e("tuniao-ui/components/tn-empty/tn-empty").then(e.bind(null,484))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var n=this,t=n.$createElement;n._self._c},a=!1,c=[];i._withStripped=!0},122:function(n,t,e){"use strict";e.r(t);var o=e(123),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a},123:function(n,t,e){"use strict";(function(n){var o=e(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(e(71));var i=e(69),a={data:function(){return{picture:"",droImg:!1,currentIndex:0,chinanData:"",tabbarList:[{name:"60s读懂世界",activeIcon:"discover-fill",inactiveIcon:"discover",url:"https://api.vvhan.com/api/60s"},{name:"微博热搜",activeIcon:"honor",inactiveIcon:"honor",activeIconColor:"#FFFFFF",inactiveIconColor:"#FFFFFF",iconSize:50,out:!0,url:"https://api.vvhan.com/api/wbhot"},{name:"抖音热搜",activeIcon:"honor",inactiveIcon:"honor",activeIconColor:"#FFFFFF",inactiveIconColor:"#FFFFFF",iconSize:50,out:!0,url:"https://api.vvhan.com/api/hotlist?type=douyinHot"},{name:"职场日历",activeIcon:"honor",inactiveIcon:"honor",activeIconColor:"#FFFFFF",inactiveIconColor:"#FFFFFF",iconSize:50,out:!0,url:"https://api.vvhan.com/api/zhichang"},{name:"摸鱼日历",activeIcon:"honor",inactiveIcon:"honor",activeIconColor:"#FFFFFF",inactiveIconColor:"#FFFFFF",iconSize:50,out:!0,url:"https://api.vvhan.com/api/moyu"}]}},onLoad:function(){n.getStorageSync("NEWDATA")?(this.chinanData=n.getStorageSync("NEWDATA"),this.droImg=!0):this.get60data()},methods:{fail:function(n){console.log(n)},done:function(n){console.log("绘制完成:")},save:function(){var t=this.currentIndex;switch(t){case 1:break;case 2:break;default:n.downloadFile({url:this.tabbarList[t].url,success:function(t){200===t.statusCode?n.showToast({title:"保存成功",icon:"none"}):n.showToast({title:"保存失败",icon:"none"})},fail:function(t){n.showToast({title:"保存失败",icon:"none"})}});break}},saveImage:function(){n.saveImageToPhotosAlbum({filePath:this.picture,success:function(t){n.showToast({title:"已保存到相册",icon:"success",duration:2e3})},fail:function(n){console.log(n)}})},open:function(t){n.navigateTo({url:"/pages/webView/webView?url="+t})},tabChange:function(n){this.currentIndex=n},get60data:function(){var t=this;n.showLoading({title:"加载中..."}),(0,i.get60s)().then((function(e){e.data?(n.hideLoading(),n.setStorageSync("NEWDATA",e.data),t.chinanData=e.data,t.droImg=!0):(n.hideLoading(),n.showToast({title:"服务器被挤爆啦！",icon:"none"}))}))}}};t.default=a}).call(this,e(2)["default"])},124:function(n,t,e){"use strict";e.r(t);var o=e(125),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a},125:function(n,t,e){}},[[118,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/60s/60s.js.map