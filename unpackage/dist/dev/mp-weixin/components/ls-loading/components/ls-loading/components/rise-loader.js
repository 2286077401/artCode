(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ls-loading/components/ls-loading/components/rise-loader"],{509:function(e,n,t){"use strict";t.r(n);var r=t(510),i=t(512);for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t(514);var a,u=t(33),s=Object(u["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"9b3e43a8",null,!1,r["components"],a);s.options.__file="components/ls-loading/components/ls-loading/components/rise-loader.vue",n["default"]=s.exports},510:function(e,n,t){"use strict";t.r(n);var r=t(511);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},511:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},o=!1,a=[];i._withStripped=!0},512:function(e,n,t){"use strict";t.r(n);var r=t(513),i=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=i.a},513:function(e,n,t){"use strict";var r;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"rise-loader",props:{text:{type:String,default:"正在加载"},fontSize:{type:[String,Number],default:58},underColor:{type:String,default:"#e8e7e8"},highlightColor:{type:String,default:"#00bfff"}},mounted:function(){},destroyed:function(){clearInterval(r)},methods:{createAnimation:function(){var e=this;dom.getComponentRect(this.$refs.wrapper,(function(n){var t=n.size.height+"px";e.waterLevelReset(t),e.executeAnimation(t)}))},executeAnimation:function(e){var n=this,t=0;clearInterval(r),r=setInterval((function(){3==t?(n.waterLevelReset(e),t=0):(0==t&&n.waterLevelRise(),t++)}),1e3)},waterLevelReset:function(e){animation.transition(this.$refs.riseUnder,{styles:{height:e},duration:0,timingFunction:"linear",needLayout:!1,delay:0})},waterLevelRise:function(){animation.transition(this.$refs.riseUnder,{styles:{height:"0px"},duration:3e3,timingFunction:"linear",needLayout:!1,delay:0})}}};n.default=i},514:function(e,n,t){"use strict";t.r(n);var r=t(515),i=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=i.a},515:function(e,n,t){}}]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/components/ls-loading/components/ls-loading/components/rise-loader.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ls-loading/components/ls-loading/components/rise-loader-create-component',
    {
        'components/ls-loading/components/ls-loading/components/rise-loader-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(509))
        })
    },
    [['components/ls-loading/components/ls-loading/components/rise-loader-create-component']]
]);
