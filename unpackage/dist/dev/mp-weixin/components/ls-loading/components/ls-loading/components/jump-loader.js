(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ls-loading/components/ls-loading/components/jump-loader"],{540:function(n,t,e){"use strict";e.r(t);var r=e(541),o=e(543);for(var i in o)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(i);e(545);var u,a=e(33),c=Object(a["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);c.options.__file="components/ls-loading/components/ls-loading/components/jump-loader.vue",t["default"]=c.exports},541:function(n,t,e){"use strict";e.r(t);var r=e(542);e.d(t,"render",(function(){return r["render"]})),e.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(t,"components",(function(){return r["components"]}))},542:function(n,t,e){"use strict";var r;e.r(t),e.d(t,"render",(function(){return o})),e.d(t,"staticRenderFns",(function(){return u})),e.d(t,"recyclableRender",(function(){return i})),e.d(t,"components",(function(){return r}));var o=function(){var n=this,t=n.$createElement;n._self._c},i=!1,u=[];o._withStripped=!0},543:function(n,t,e){"use strict";e.r(t);var r=e(544),o=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=o.a},544:function(n,t,e){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"jump-loader",props:{text:{type:String,default:"正在加载"},fontSize:{type:[String,Number],default:58},color:{type:String,default:"#c7c6c7"}},mounted:function(){setTimeout((function(){}),100)},destroyed:function(){clearInterval(r)},methods:{createAnimation:function(){var n=this,t="translateY(0)",e=!0;this.executeTextAnimation("translateY(-90%)"),clearInterval(r),r=setInterval((function(){t=e?"translateY(0)":"translateY(-90%)",n.executeTextAnimation(t),e=!e}),1e3)},executeTextAnimation:function(n){animation.transition(this.$refs.waveBox,{styles:{transform:n},duration:1e3,timingFunction:"ease-in-out",needLayout:!1,delay:0})}}};t.default=o},545:function(n,t,e){"use strict";e.r(t);var r=e(546),o=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=o.a},546:function(n,t,e){}}]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/components/ls-loading/components/ls-loading/components/jump-loader.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ls-loading/components/ls-loading/components/jump-loader-create-component',
    {
        'components/ls-loading/components/ls-loading/components/jump-loader-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(540))
        })
    },
    [['components/ls-loading/components/ls-loading/components/jump-loader-create-component']]
]);
