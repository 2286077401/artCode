(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-popup/tn-popup"],{470:function(t,e,n){"use strict";n.r(e);var i=n(471),o=n(473);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n(475);var s,u=n(33),l=Object(u["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"01456b9c",null,!1,i["components"],s);l.options.__file="tuniao-ui/components/tn-popup/tn-popup.vue",e["default"]=l.exports},471:function(t,e,n){"use strict";n.r(e);var i=n(472);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},472:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return o})),n.d(e,"staticRenderFns",(function(){return s})),n.d(e,"recyclableRender",(function(){return r})),n.d(e,"components",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.visibleSync?t.__get_style([t.customStyle,t.popupStyle,{zIndex:t.elZIndex-1}]):null),i=t.visibleSync?t.__get_style([t.contentStyle]):null,o=t.visibleSync&&"center"===t.mode?t.__get_style([t.centerStyle]):null,r=t.visibleSync&&"center"===t.mode&&t.closeBtn?t.__get_style([t.closeBtnStyle,{zIndex:t.elZIndex}]):null,s=t.visibleSync&&"center"!==t.mode&&t.closeBtn?t.__get_style([t.closeBtnStyle]):null;t._isMounted||(t.e0=function(t){t.stopPropagation(),t.preventDefault()}),t.$mp.data=Object.assign({},{$root:{s0:n,s1:i,s2:o,s3:r,s4:s}})},r=!1,s=[];o._withStripped=!0},473:function(t,e,n){"use strict";n.r(e);var i=n(474),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},474:function(t,e,n){"use strict";var i=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(107)),r={mixins:[o.default],name:"tn-popup",props:{value:{type:Boolean,default:!1},mode:{type:String,default:"left"},mask:{type:Boolean,default:!0},length:{type:[Number,String],default:"auto"},width:{type:String,default:""},height:{type:String,default:""},zoom:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseable:{type:Boolean,default:!0},customStyle:{type:Object,default:function(){return{}}},borderRadius:{type:Number,default:0},zIndex:{type:Number,default:0},closeBtn:{type:Boolean,default:!1},closeBtnIcon:{type:String,default:"close"},closeBtnPosition:{type:String,default:"top-right"},closeIconColor:{type:String,default:"#AAAAAA"},closeIconSize:{type:Number,default:30},negativeTop:{type:Number,default:0},marginTop:{type:Number,default:0},popup:{type:Boolean,default:!0}},computed:{popupStyle:function(){var t={};return"top"!==this.mode&&"left"!==this.mode&&"right"!==this.mode||!this.marginTop||(t.marginTop=this.$tn.string.getLengthUnitValue(this.marginTop,"px")),t},contentStyle:function(){var t={};if("left"===this.mode||"right"===this.mode?t={width:this.width?this.$tn.string.getLengthUnitValue(this.width):this.$tn.string.getLengthUnitValue(this.length),height:"100%",transform:"translate3D(".concat("left"===this.mode?"-100%":"100%",", 0px, 0px)")}:"top"!==this.mode&&"bottom"!==this.mode||(t={width:"100%",height:this.height?this.$tn.string.getLengthUnitValue(this.height):this.$tn.string.getLengthUnitValue(this.length),transform:"translate3D(0px, ".concat("top"===this.mode?"-100%":"100%",", 0px)")}),t.zIndex=this.elZIndex,this.borderRadius){switch(this.mode){case"left":t.borderRadius="0 ".concat(this.borderRadius,"rpx ").concat(this.borderRadius,"rpx 0");break;case"top":t.borderRadius="0 0 ".concat(this.borderRadius,"rpx ").concat(this.borderRadius,"rpx");break;case"right":t.borderRadius="".concat(this.borderRadius,"rpx 0 0 ").concat(this.borderRadius,"rpx");break;case"bottom":t.borderRadius="".concat(this.borderRadius,"rpx ").concat(this.borderRadius,"rpx 0 0");break}t.overflow="hidden"}return this.backgroundColorStyle&&"center"!==this.mode&&(t.backgroundColor=this.backgroundColorStyle),t},centerStyle:function(){var t={};return t.width=this.width?this.$tn.string.getLengthUnitValue(this.width):this.$tn.string.getLengthUnitValue(this.length),t.height=this.height?this.$tn.string.getLengthUnitValue(this.height):"auto",t.zIndex=this.elZIndex,this.negativeTop&&(t.marginTop="-".concat(this.$tn.string.getLengthUnitValue(this.negativeTop))),this.borderRadius&&(t.borderRadius="".concat(this.borderRadius,"rpx"),t.overflow="hidden"),this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),t},closeBtnStyle:function(){var t={};return this.closeIconColor&&(t.color=this.closeIconColor),this.closeIconSize&&(t.fontSize=this.closeIconSize+"rpx"),t},elZIndex:function(){return this.zIndex?this.zIndex:this.$tn.zIndex.popup}},data:function(){return{timer:null,visibleSync:!1,showPopup:!1,closeFromInner:!1}},watch:{value:function(t){if(t){if(this.visibleSync)return void(this.visibleSync=!1);this.open()}else this.closeFromInner||this.close();this.closeFromInner=!1}},mounted:function(){this.value&&this.open()},methods:{maskClick:function(){this.maskCloseable&&this.close()},open:function(){this.change("visibleSync","showPopup",!0)},close:function(){this.closeFromInner=!0,this.change("showPopup","visibleSync",!1)},modeCenterClose:function(){"center"==this.mode&&this.maskCloseable&&this.close()},change:function(t,e,n){var i=this;!0===this.popup&&this.$emit("input",n),this[t]=n,this.timer=n?setTimeout((function(){i[e]=n,i.$emit(n?"open":"close"),clearTimeout(i.timer)}),10):setTimeout((function(){i[e]=n,i.$emit(n?"open":"close"),clearTimeout(i.timer)}),250)}}};e.default=r},475:function(t,e,n){"use strict";n.r(e);var i=n(476),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},476:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tuniao-ui/components/tn-popup/tn-popup.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-popup/tn-popup-create-component',
    {
        'tuniao-ui/components/tn-popup/tn-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(470))
        })
    },
    [['tuniao-ui/components/tn-popup/tn-popup-create-component']]
]);