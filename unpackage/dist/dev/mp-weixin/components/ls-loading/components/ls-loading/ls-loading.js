(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ls-loading/components/ls-loading/ls-loading"],{144:function(n,e,t){"use strict";t.r(e);var o=t(145),r=t(147);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t(149);var c,u=t(32),a=Object(u["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"91a117f8",null,!1,o["components"],c);a.options.__file="components/ls-loading/components/ls-loading/ls-loading.vue",e["default"]=a.exports},145:function(n,e,t){"use strict";t.r(e);var o=t(146);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},146:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return c})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return o}));var r=function(){var n=this,e=n.$createElement;n._self._c},i=!1,c=[];r._withStripped=!0},147:function(n,e,t){"use strict";t.r(e);var o=t(148),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},148:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){t.e("components/ls-loading/components/ls-loading/components/comb-loader").then(function(){return resolve(t(251))}.bind(null,t)).catch(t.oe)},r=function(){t.e("components/ls-loading/components/ls-loading/components/rise-loader").then(function(){return resolve(t(258))}.bind(null,t)).catch(t.oe)},i=function(){t.e("components/ls-loading/components/ls-loading/components/progress-loader").then(function(){return resolve(t(265))}.bind(null,t)).catch(t.oe)},c=function(){t.e("components/ls-loading/components/ls-loading/components/jump-loader").then(function(){return resolve(t(272))}.bind(null,t)).catch(t.oe)},u={name:"ls-loading",components:{combLoader:o,riseLoader:r,progressLoader:i,jumpLoader:c},props:{nav:{type:Boolean,default:!1},tab:{type:Boolean,default:!1},text:{type:String,default:"正在加载"},embed:{type:Boolean,default:!1},fontSize:{type:[String,Number],default:58},animation:{type:String,default:"progress"},underColor:{type:String,default:"rgba(232,231,232,1)"},highlightColor:{type:String,default:"rgba(244,208,145,1)"}},data:function(){return{topSize:""}},computed:{bottomSize:function(){return this.tab?"50px":"0"}},created:function(){var e=this;setTimeout((function(){var t=n.getSystemInfoSync();e.topSize=e.nav?"".concat(t.statusBarHeight+44,"px"):"0px"}),1)},methods:{defThouch:function(n){},defMove:function(n){}}};e.default=u}).call(this,t(2)["default"])},149:function(n,e,t){"use strict";t.r(e);var o=t(150),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},150:function(n,e,t){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/components/ls-loading/components/ls-loading/ls-loading.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ls-loading/components/ls-loading/ls-loading-create-component',
    {
        'components/ls-loading/components/ls-loading/ls-loading-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(144))
        })
    },
    [['components/ls-loading/components/ls-loading/ls-loading-create-component']]
]);
