(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-number-box/tn-number-box"],{573:function(t,n,e){"use strict";e.r(n);var i=e(574),u=e(576);for(var r in u)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e(578);var a,s=e(33),l=Object(s["default"])(u["default"],i["render"],i["staticRenderFns"],!1,null,"61aeb8b2",null,!1,i["components"],a);l.options.__file="tuniao-ui/components/tn-number-box/tn-number-box.vue",n["default"]=l.exports},574:function(t,n,e){"use strict";e.r(n);var i=e(575);e.d(n,"render",(function(){return i["render"]})),e.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(n,"components",(function(){return i["components"]}))},575:function(t,n,e){"use strict";var i;e.r(n),e.d(n,"render",(function(){return u})),e.d(n,"staticRenderFns",(function(){return a})),e.d(n,"recyclableRender",(function(){return r})),e.d(n,"components",(function(){return i}));var u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$tn.string.getLengthUnitValue(t.inputHeight)),i=t.$tn.string.getLengthUnitValue(t.inputWidth),u=t.$tn.string.getLengthUnitValue(t.inputHeight),r=t.$tn.string.getLengthUnitValue(t.inputHeight);t.$mp.data=Object.assign({},{$root:{g0:e,g1:i,g2:u,g3:r}})},r=!1,a=[];u._withStripped=!0},576:function(t,n,e){"use strict";e.r(n);var i=e(577),u=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=u.a},577:function(t,n,e){"use strict";(function(t){var i=e(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=i(e(107)),r={mixins:[u.default],name:"tn-number-box",props:{value:{type:Number,default:1},index:{type:[Number,String],default:""},min:{type:Number,default:0},max:{type:Number,default:99999},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},disabledInput:{type:Boolean,default:!1},inputWidth:{type:Number,default:88},inputHeight:{type:Number,default:50},cursorSpacing:{type:Number,default:100},longPress:{type:Boolean,default:!0},longPressTime:{type:Number,default:250},positiveInteger:{type:Boolean,default:!0}},computed:{getCursorSpacing:function(){return Number(t.upx2px(this.cursorSpacing))}},data:function(){return{inputValue:1,longPressTimer:null,changeFromInner:!1,innerChangeTimer:null}},watch:{value:function(t){var n=this;this.changeFromInner||(this.updateInputValue(),this.$nextTick((function(){n.changeFromInner=!1})))},inputValue:function(t,n){var e=this;if(""!==t){var i=0,u=this.$tn.test.number(t);i=u&&t>=this.min&&t<=this.max?t:n,this.positiveInteger&&(t<0||-1!==String(t).indexOf("."))&&(i=Math.floor(t),this.$nextTick((function(){e.inputValue=i}))),this.handleChange(i,"change")}},min:function(){this.updateInputValue()},max:function(){this.updateInputValue()}},created:function(){this.updateInputValue()},methods:{touchStart:function(t){var n=this;this[t](),this.longPress&&(this.longPressTimer&&(clearInterval(this.longPressTimer),this.longPressTimer=null),this.longPressTimer=setInterval((function(){n[t]()}),this.longPressTime))},clearTimer:function(){var t=this;this.$nextTick((function(){t.longPressTimer&&(clearInterval(t.longPressTimer),t.longPressTimer=null)}))},minus:function(){this.computeValue("minus")},plus:function(){this.computeValue("plus")},calcPlus:function(t,n){var e=0,i=0,u=0;try{i=t.toString().split(".")[1].length}catch(a){i=0}try{u=n.toString().split(".")[1].length}catch(a){u=0}e=Math.pow(10,Math.max(i,u));var r=i>=u?i:u;return((t*e+n*e)/e).toFixed(r)},calcMinus:function(t,n){var e=0,i=0,u=0;try{i=t.toString().split(".")[1].length}catch(a){i=0}try{u=n.toString().split(".")[1].length}catch(a){u=0}e=Math.pow(10,Math.max(i,u));var r=i>=u?i:u;return((t*e-n*e)/e).toFixed(r)},computeValue:function(n){if(t.hideKeyboard(),!this.disabled){var e=0;"minus"===n?e=this.calcMinus(this.inputValue,this.step):"plus"===n&&(e=this.calcPlus(this.inputValue,this.step)),e<this.min||e>this.max||(this.inputValue=e,this.handleChange(e,n))}},blurInput:function(t){var n=this,e=0,i=t.detail.value;e=/(^\d+$)/.test(i)&&0!=i[0]?+i:this.min,e>this.max?e=this.max:e<this.min&&(e=this.min),this.$nextTick((function(){n.inputValue=e})),this.handleChange(e,"blur")},focusInput:function(){this.$emit("focus")},updateInputValue:function(){var t=this.value;t<=this.min?t=this.min:t>=this.max&&(t=this.max),this.inputValue=Number(t)},handleChange:function(t,n){var e=this;this.disabled||(this.innerChangeTimer&&(clearTimeout(this.innerChangeTimer),this.innerChangeTimer=null),this.changeFromInner=!0,this.innerChangeTimer=setTimeout((function(){e.changeFromInner=!1}),150),this.$emit("input",Number(t)),this.$emit(n,{value:Number(t),index:this.index}))}}};n.default=r}).call(this,e(2)["default"])},578:function(t,n,e){"use strict";e.r(n);var i=e(579),u=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=u.a},579:function(t,n,e){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tuniao-ui/components/tn-number-box/tn-number-box.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-number-box/tn-number-box-create-component',
    {
        'tuniao-ui/components/tn-number-box/tn-number-box-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(573))
        })
    },
    [['tuniao-ui/components/tn-number-box/tn-number-box-create-component']]
]);
