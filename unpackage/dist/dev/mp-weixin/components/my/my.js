(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/my/my"],{186:function(n,e,t){"use strict";t.r(e);var o=t(187),r=t(189);for(var a in r)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t(200);var c,i=t(32),s=Object(i["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"3f753d44",null,!1,o["components"],c);s.options.__file="components/my/my.vue",e["default"]=s.exports},187:function(n,e,t){"use strict";t.r(e);var o=t(188);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},188:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return c})),t.d(e,"recyclableRender",(function(){return a})),t.d(e,"components",(function(){return o}));try{o={tnListCell:function(){return Promise.all([t.e("common/vendor"),t.e("tuniao-ui/components/tn-list-cell/tn-list-cell")]).then(t.bind(null,244))},tnLandscape:function(){return t.e("tuniao-ui/components/tn-landscape/tn-landscape").then(t.bind(null,322))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},a=!1,c=[];r._withStripped=!0},189:function(n,e,t){"use strict";t.r(e);var o=t(190),r=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(a);e["default"]=r.a},190:function(n,e,t){"use strict";(function(n,o){var r=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(t(103)),c=r(t(105)),i=function(){Promise.all([t.e("common/vendor"),t.e("tuniao-ui/components/tn-list-cell/tn-list-cell")]).then(function(){return resolve(t(244))}.bind(null,t)).catch(t.oe)},s={name:"about-demo-1",components:{tnListCell:i},props:{number:[String,Number]},watch:{number:function(n){console.log(n),this.userInfo()}},data:function(){return{user:{},show_A:!1,closeBtn:!1,closeColor:"",closeSize:0,closePosition:"rightTop",closeTop:0,closeRight:0,closeBottom:0,closeLeft:0,mask:!0,maskCloseable:!0,showAuthorizationModal:!1,header:""}},created:function(){},methods:{goto:function(e){n.navigateTo({url:e})},userInfo:function(){var n=this;this.$http.user({action:"checkToken"}).then((function(e){console.log(e),n.user=e}))},openAuthorizationModal:function(){console.log(!this.user.nickname),this.user.nickname||(this.showAuthorizationModal=!0)},updatedUserInfoEvent:function(n){var e=this;return(0,c.default)(a.default.mark((function t(){var r;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.uploadFile({filePath:n.avatar,cloudPath:"a.jpg",onUploadProgress:function(n){Math.round(100*n.loaded/n.total)}});case 2:r=t.sent,e.$http.user({action:"setAvatar",params:{avatar:r.filePath,nickname:n.nickname}}).then((function(n){e.showAuthorizationModal=!1,e.userInfo()})),console.log(r.filePath),console.log("获取到的用户信息",n);case 6:case"end":return t.stop()}}),t)})))()},openLandscape:function(){this.show_A=!0},closeLandscape:function(){this.show_A=!1},copyDCloud:function(e){"next"==e?n.navigateTo({url:"/pages/technology/technology"}):n.setClipboardData({data:e,showToast:!1,success:function(){n.showToast({title:"内容已复制到剪切板",icon:"none",duration:2e3})}})},show:function(){n.showToast({title:"暂未开放",icon:"none"})},toPage:function(e){n.navigateTo({url:e})}}};e.default=s}).call(this,t(2)["default"],t(191)["default"])},200:function(n,e,t){"use strict";t.r(e);var o=t(201),r=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(a);e["default"]=r.a},201:function(n,e,t){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/my/my.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/my/my-create-component',
    {
        'components/my/my-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(186))
        })
    },
    [['components/my/my-create-component']]
]);