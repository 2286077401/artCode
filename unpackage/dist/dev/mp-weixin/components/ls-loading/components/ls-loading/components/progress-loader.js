(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ls-loading/components/ls-loading/components/progress-loader"],{265:function(n,e,t){"use strict";t.r(e);var r=t(266),i=t(268);for(var o in i)["default"].indexOf(o)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(o);t(270);var a,s=t(32),u=Object(s["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"a35c8c70",null,!1,r["components"],a);u.options.__file="components/ls-loading/components/ls-loading/components/progress-loader.vue",e["default"]=u.exports},266:function(n,e,t){"use strict";t.r(e);var r=t(267);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},267:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return i})),t.d(e,"staticRenderFns",(function(){return a})),t.d(e,"recyclableRender",(function(){return o})),t.d(e,"components",(function(){return r}));var i=function(){var n=this,e=n.$createElement;n._self._c},o=!1,a=[];i._withStripped=!0},268:function(n,e,t){"use strict";t.r(e);var r=t(269),i=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=i.a},269:function(n,e,t){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"progress-loader",props:{text:{type:String,default:"正在加载"},fontSize:{type:[String,Number],default:58},underColor:{type:String,default:"#e8e7e8"},highlightColor:{type:String,default:"#00bfff"}},data:function(){return{initting:!0}},mounted:function(){this.initting=!1},destroyed:function(){clearInterval(r)},methods:{createAnimation:function(){var n=this;dom.getComponentRect(this.$refs.wrapper,(function(e){var t=e.size.width+"px";n.levelReset(),setTimeout((function(){n.initting=!1}),40),n.executeAnimation(t)}))},executeAnimation:function(n){var e=this;this.progressLeval(n);var t=0;clearInterval(r),r=setInterval((function(){3==t?(e.levelReset(),t=0):(0==t&&e.progressLeval(n),t++)}),1e3)},levelReset:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0px";animation.transition(this.$refs.progressUnder,{styles:{width:n},duration:0,timingFunction:"linear",needLayout:!1,delay:0})},progressLeval:function(n){animation.transition(this.$refs.progressUnder,{styles:{width:n},duration:3e3,timingFunction:"linear",needLayout:!1,delay:0})}}};e.default=i},270:function(n,e,t){"use strict";t.r(e);var r=t(271),i=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=i.a},271:function(n,e,t){}}]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/components/ls-loading/components/ls-loading/components/progress-loader.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ls-loading/components/ls-loading/components/progress-loader-create-component',
    {
        'components/ls-loading/components/ls-loading/components/progress-loader-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(265))
        })
    },
    [['components/ls-loading/components/ls-loading/components/progress-loader-create-component']]
]);
