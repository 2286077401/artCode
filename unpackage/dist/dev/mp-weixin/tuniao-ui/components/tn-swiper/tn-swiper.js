(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-swiper/tn-swiper"],{537:function(t,e,n){"use strict";n.r(e);var i=n(538),o=n(540);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n(542);var u,a=n(33),d=Object(a["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"4ba19b58",null,!1,i["components"],u);d.options.__file="tuniao-ui/components/tn-swiper/tn-swiper.vue",e["default"]=d.exports},538:function(t,e,n){"use strict";n.r(e);var i=n(539);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},539:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return o})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return r})),n.d(e,"components",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.swiperStyle])),i=t.__map(t.list,(function(e,n){var i=t.__get_orig(e),o=t.title&&e[t.titleName]?t.__get_style([t.titleStyle]):null;return{$orig:i,s1:o}})),o=t.__get_style([t.indicatorStyle]),r="number"===t.mode?t.list.length:null;t.$mp.data=Object.assign({},{$root:{s0:n,l0:i,s2:o,g0:r}})},r=!1,u=[];o._withStripped=!0},540:function(t,e,n){"use strict";n.r(e);var i=n(541),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},541:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tn-swiper",props:{list:{type:Array,default:function(){return[]}},current:{type:Number,default:0},height:{type:Number,default:250},backgroundColor:{type:String,default:"transparent"},name:{type:String,default:"image"},title:{type:Boolean,default:!1},titleName:{type:String,default:"title"},titleStyle:{type:Object,default:function(){return{}}},radius:{type:Number,default:8},mode:{type:String,default:"round"},indicatorPosition:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousSpacing:{type:Number,default:50},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},duration:{type:Number,default:500},circular:{type:Boolean,default:!0},imageMode:{type:String,default:"aspectFill"}},computed:{backgroundColorStyle:function(){return this.$tn.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$tn.color.getBackgroundColorInternalClass(this.backgroundColor)},swiperStyle:function(){var t={};return this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),this.height&&(t.height=this.height+"rpx"),t},indicatorStyle:function(){var t={};return"topLeft"!==this.indicatorPosition&&"bottomLeft"!==this.indicatorPosition||(t.justifyContent="flex-start"),"topCenter"!==this.indicatorPosition&&"bottomCenter"!==this.indicatorPosition||(t.justifyContent="center"),"topRight"!==this.indicatorPosition&&"bottomRight"!==this.indicatorPosition||(t.justifyContent="flex-end"),["topLeft","topCenter","topRight"].indexOf(this.indicatorPosition)>=0?(t.top="12rpx",t.bottom="auto"):(t.top="auto",t.bottom="12rpx"),t.padding="0 ".concat(this.effect3d?"74rpx":"24rpx"),t},swiperTitleStyle:function(){var t={};return"none"!==this.mode&&""!==this.mode||(t.paddingBottom="12rpx"),["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPosition)>=0&&"number"===this.mode?t.paddingBottom="60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPosition)>=0&&"number"!==this.mode?t.paddingBottom="40rpx":t.paddingBottom="12rpx",t=Object.assign(t,this.titleStyle),t}},data:function(){return{swiperIndex:this.current}},watch:{list:function(t,e){t.length!==e.length&&(this.swiperIndex=0)},current:function(t){this.swiperIndex=t}},methods:{click:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.swiperIndex=e,this.$emit("change",e)}}};e.default=i},542:function(t,e,n){"use strict";n.r(e);var i=n(543),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},543:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tuniao-ui/components/tn-swiper/tn-swiper.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-swiper/tn-swiper-create-component',
    {
        'tuniao-ui/components/tn-swiper/tn-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(537))
        })
    },
    [['tuniao-ui/components/tn-swiper/tn-swiper-create-component']]
]);
