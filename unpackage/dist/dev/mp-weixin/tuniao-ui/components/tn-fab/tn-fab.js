(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-fab/tn-fab"],{425:function(t,n,e){"use strict";e.r(n);var i=e(426),a=e(428);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e(430);var r,u=e(33),s=Object(u["default"])(a["default"],i["render"],i["staticRenderFns"],!1,null,"710e8188",null,!1,i["components"],r);s.options.__file="tuniao-ui/components/tn-fab/tn-fab.vue",n["default"]=s.exports},426:function(t,n,e){"use strict";e.r(n);var i=e(427);e.d(n,"render",(function(){return i["render"]})),e.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(n,"components",(function(){return i["components"]}))},427:function(t,n,e){"use strict";var i;e.r(n),e.d(n,"render",(function(){return a})),e.d(n,"staticRenderFns",(function(){return r})),e.d(n,"recyclableRender",(function(){return o})),e.d(n,"components",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$tn.string.getLengthUnitValue(t.fabLeft||t.left)),i=t.$tn.string.getLengthUnitValue(t.fabRight||t.right),a=t.$tn.string.getLengthUnitValue(t.fabBottom||t.bottom),o=t.visibleSync?t.__map(t.btnList,(function(n,e){var i=t.__get_orig(n),a=t.__get_style([t.fabItemStyle(e)]),o="around"!==t.animationType&&(n.imgUrl||n.icon)?t.$tn.string.getLengthUnitValue(n.textSize||28):null,r=t.$tn.string.getLengthUnitValue(t.width),u=t.$tn.string.getLengthUnitValue(t.height),s=t.$tn.string.getLengthUnitValue(t.height),f=t.$tn.string.getLengthUnitValue(t.radius),c=n.imgUrl||n.icon?null:t.$tn.string.getLengthUnitValue(n.textSize||28),h=n.icon?t.$tn.string.getLengthUnitValue(n.iconSize||t.iconSize||64):null,l=n.icon||n.icon||!n.imgUrl?null:t.$tn.string.getLengthUnitValue(n.imgWidth||64),g=n.icon||n.icon||!n.imgUrl?null:t.$tn.string.getLengthUnitValue(n.imgHeight||64);return{$orig:i,s0:a,g3:o,g4:r,g5:u,g6:s,g7:f,g8:c,g9:h,g10:l,g11:g}})):null,r=t.$tn.string.getLengthUnitValue(t.width),u=t.$tn.string.getLengthUnitValue(t.height),s=t.$tn.string.getLengthUnitValue(t.radius),f=t.$tn.string.getLengthUnitValue(t.iconSize||64);t.$mp.data=Object.assign({},{$root:{g0:e,g1:i,g2:a,l0:o,g12:r,g13:u,g14:s,g15:f}})},o=!1,r=[];a._withStripped=!0},428:function(t,n,e){"use strict";e.r(n);var i=e(429),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},429:function(t,n,e){"use strict";(function(t){var i=e(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e(104)),o=i(e(106)),r=i(e(107)),u={name:"tn-fab",mixins:[r.default],props:{btnList:{type:Array,default:function(){return[]}},customBtn:{type:Boolean,default:!1},width:{type:[String,Number],default:88},height:{type:[String,Number],default:88},iconSize:{type:[String,Number],default:64},icon:{type:String,default:"open"},radius:{type:[String,Number],default:"50%"},left:{type:[String,Number],default:"auto"},right:{type:[String,Number],default:"auto"},bottom:{type:[String,Number],default:100},animationType:{type:String,default:"up"},aroundBtnDistance:{type:Number,default:10},zIndex:{type:Number,default:0},showMask:{type:Boolean,default:!0},maskCloseable:{type:Boolean,default:!0}},data:function(){return{showFab:!1,visibleSync:!1,timer:null,fabLeft:0,fabRight:0,fabBottom:0,fabBtnInfo:{width:0,height:0,left:0,right:0,bottom:0},systemInfo:{width:0,height:0},updateProps:!1}},computed:{elZIndex:function(){return this.zIndex||this.$tn.zIndex.fab},propsData:function(){return[this.width,this.height,this.left,this.right,this.bottom]},fabItemStyle:function(){var t=this;return function(n){var e={zIndex:t.elZIndex-2};if("up"===t.animationType||!t.showFab)return e;var i=1;return"auto"===t.left?i=1:"auto"===t.right&&(i=-1),e.transform="rotate(".concat(i*n*60,"deg) translateX(").concat((t.aroundBtnDistance+t.fabBtnInfo.width)*-i,"px)"),e}}},watch:{propsData:function(){this.updateProps=!0}},mounted:function(){var t=this;this.$nextTick((function(){t.getFabBtnRectInfo()}))},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)},methods:{handleClick:function(t){this.close(),this.$emit("click",{index:t})},fabClick:function(){if(this.showFab)this.close();else{if(this.visibleSync)return void(this.visibleSync=!1);this.open()}},clickMask:function(){this.showMask&&this.maskCloseable&&this.close()},open:function(){this.change("visibleSync","showFab",!0),this.translateFabPosition()},close:function(){this.change("showFab","visibleSync",!1),this.fabLeft=0,this.fabRight=0,this.fabBottom=0},change:function(t,n,e){var i=this;this[t]=e,this.timer=e?setTimeout((function(){i[n]=e,i.$emit(e?"open":"close"),clearTimeout(i.timer)}),10):setTimeout((function(){i[n]=e,i.$emit(e?"open":"close"),clearTimeout(i.timer)}),250)},getFabBtnRectInfo:function(){var n=this;return(0,o.default)(a.default.mark((function e(){var i,o;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.getSystemInfoSync(),e.next=3,n._tGetRect(".tn-fab__item__btn--fab");case 3:if(o=e.sent,o){e.next=7;break}return setTimeout((function(){n.getFabBtnRectInfo()}),10),e.abrupt("return");case 7:n.systemInfo={width:i.windowWidth,height:i.windowHeight},n.fabBtnInfo.width=o.width,n.fabBtnInfo.height=o.height,n.fabBtnInfo.left=o.left,n.fabBtnInfo.right=o.right,n.fabBtnInfo.bottom=o.bottom;case 13:case"end":return e.stop()}}),e)})))()},translateFabPosition:function(){if(this.updateProps&&(this.getFabBtnRectInfo(),this.updateProps=!1),"up"!==this.animationType){var t=this.fabBtnInfo.width+this.aroundBtnDistance+10;"auto"===this.left&&t>this.systemInfo.width-this.fabBtnInfo.right?this.fabRight=t+"px":"auto"===this.right&&t>this.fabBtnInfo.left&&(this.fabLeft=t+"px"),t>this.systemInfo.height-this.fabBtnInfo.bottom&&(this.fabBottom=t+"px")}}}};n.default=u}).call(this,e(2)["default"])},430:function(t,n,e){"use strict";e.r(n);var i=e(431),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},431:function(t,n,e){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tuniao-ui/components/tn-fab/tn-fab.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-fab/tn-fab-create-component',
    {
        'tuniao-ui/components/tn-fab/tn-fab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(425))
        })
    },
    [['tuniao-ui/components/tn-fab/tn-fab-create-component']]
]);