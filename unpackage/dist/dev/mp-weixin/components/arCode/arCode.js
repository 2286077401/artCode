(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/arCode/arCode"],{179:function(e,t,n){"use strict";n.r(t);var a=n(180),o=n(182);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n(184);var r,s=n(32),c=Object(s["default"])(o["default"],a["render"],a["staticRenderFns"],!1,null,"e46d42f8",null,!1,a["components"],r);c.options.__file="components/arCode/arCode.vue",t["default"]=c.exports},180:function(e,t,n){"use strict";n.r(t);var a=n(181);n.d(t,"render",(function(){return a["render"]})),n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(t,"components",(function(){return a["components"]}))},181:function(e,t,n){"use strict";var a;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return r})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return a}));try{a={tnRadioGroup:function(){return Promise.all([n.e("common/vendor"),n.e("tuniao-ui/components/tn-radio-group/tn-radio-group")]).then(n.bind(null,286))},tnRadio:function(){return n.e("tuniao-ui/components/tn-radio/tn-radio").then(n.bind(null,294))},tnScrollList:function(){return n.e("tuniao-ui/components/tn-scroll-list/tn-scroll-list").then(n.bind(null,301))},tnSlider:function(){return n.e("tuniao-ui/components/tn-slider/tn-slider").then(n.bind(null,308))},tnNumberBox:function(){return Promise.all([n.e("common/vendor"),n.e("tuniao-ui/components/tn-number-box/tn-number-box")]).then(n.bind(null,315))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.codeData.content.length),a=e.codeData.prompt.length;e.$mp.data=Object.assign({},{$root:{g0:n,g1:a}})},i=!1,r=[];o._withStripped=!0},182:function(e,t,n){"use strict";n.r(t);var a=n(183),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},183:function(e,t,n){"use strict";(function(e){var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(11)),i=n(67),r=n(66);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"arCode",computed:c({},(0,r.mapState)({codeImgData:function(e){return e.codeImgData},codeIsLoad:function(e){return e.codeIsLoad}})),data:function(){return{activeCode:"",exCodeList:[],codePixel:0,codeEcl:0,codePosition:0,codeAspect:0,codeDatatype:"链接",codeRawurl:"是",eclList:["L","M","Q","H"],codeData:{content:"",prompt:"",type:"link",preset:"sunset",pattern:"",steps:16,qrw:15,rawurl:"false",padding_level:5,aspect_ratio:"768x768",marker_shape:"square",position:"center",pixel_style:"square",ecl:"H",seed:""},engineType:"高级引擎",engineList:[{name:"高级引擎",disabled:!1},{name:"自定义引擎",disabled:!1}],styleList:[{name:"链接",value:"link",disabled:!1},{name:"文本",value:"text",disabled:!1},{name:"邮箱",value:"email",disabled:!1},{name:"电话",value:"phone",disabled:!1},{name:"短信",value:"sms",disabled:!1}],pixelList:[{name:"正方形",value:"square"},{name:"圆角",value:"rounded"},{name:"点",value:"dot"},{name:"圆角方形",value:"squircle"},{name:"行排列",value:"row"},{name:"列排列",value:"column"}],presetList:[{name:"日落",value:"sunset"},{name:"自然",value:"floral"},{name:"雪花",value:"snowflakes"},{name:"羽毛",value:"feathers"},{name:"雨滴",value:"raindrops"},{name:"超现实主义",value:"ultra-realism"},{name:"史诗王国",value:"epic-realms"},{name:"错综复杂的工作室",value:"intricate-studio"},{name:"对称杰作",value:"symmetric-masterpiece"},{name:"发光的高速公路",value:"luminous-highway"},{name:"天空之旅",value:"celestial-journey"},{name:"霓虹机械",value:"neon-mech"},{name:"空灵低聚",value:"ethereal-low-poly"},{name:"金色的远景",value:"golden-vista"},{name:"电影大片",value:"cinematic-expanse"},{name:"电影温暖的",value:"cinematic-warm"},{name:"荒凉的荒野",value:"desolate-wilderness}"},{name:"充满活力的调色板",value:"vibrant-palette"},{name:"神秘的旅程",value:"enigmatic-journey"},{name:"永恒的电影",value:"timeless-cinematic"},{name:"银河星系",value:"regal-galaxy"},{name:"杰出的画作",value:"illustrious-canvas"},{name:"富有表现力的壁画",value:"expressive-mural"},{name:"宁静的雾霾",value:"serene-haze"}],codeType:"0",pattern:["custom","s1","s2","s3","rd1","rd2","rd3","d1","d2","d3","r1","r2","r3","c1","c2","c3","sq1","sq2","sq3"],aspect:["768x768","1176x672","672x1176","864x672","672x864"],position:[{name:"局中",value:"center"},{name:"顶部",value:"top"},{name:"右边",value:"right"},{name:"底部",value:"bottom"},{name:"左边",value:"left"},{name:"左上",value:"top-left"},{name:"右上",value:"top-right"},{name:"左下",value:"bottom-left"},{name:"右下",value:"bottom-right"}],paterNum:"0"}},onShow:function(){this.codeImgData,this.codeIsLoad},mounted:function(){this.getCodeProList()},methods:{coseCode:function(e){this.activeCode=e._id,Object.assign(this.codeData,e.prompt),console.log(JSON.stringify(this.codeData),JSON.stringify(e.prompt))},getCodeProList:function(){var t=this;(0,i.getCodePro)().then((function(n){200==n.code?t.exCodeList=n.data:e.showToast({title:"请求出错",icon:"none"})}))},chosePixelList:function(e){this.codePixel=e,this.codeData.pixel_style=this.pixelList[e].value},changeRawurl:function(e){this.codeData.rawurl="是"==e},codeDrwL:function(){var e={content:this.codeData.content,prompt:this.codeData.prompt,type:this.codeData.type,preset:this.codeData.preset,pattern:this.codeData.pattern,steps:this.codeData.steps,qrw:this.codeData.qrw/10,rawurl:this.codeData.rawurl,padding_level:this.codeData.padding_level+"",aspect_ratio:this.codeData.aspect_ratio,marker_shape:this.codeData.marker_shape,position:this.codeData.position,pixel_style:this.codeData.pixel_style,ecl:this.codeData.ecl};this.$store.dispatch("codeDrw",e)},chosePatern:function(e){this.paterNum=e,this.codeData.pattern=this.pattern[e]},choseEcl:function(e){this.codeEcl=e,this.codeData.ecl=this.eclList[e]},chosePosition:function(e){this.codePosition=e,this.codeData.position=this.position[e].value},choseAspect:function(e){this.codeAspect=e,this.codeData.aspect_ratio=this.aspect[e]},choseCodeStyle:function(e){this.codeType=e,this.codeData.preset=this.presetList[e].value},radioEngine:function(e){this.activeCode="",this.codeData={content:"",prompt:"",type:"link",preset:"sunset",pattern:"",steps:16,qrw:15,rawurl:"false",padding_level:5,aspect_ratio:"768x768",marker_shape:"square",position:"center",pixel_style:"square",ecl:"H",seed:""},this.engineType=e},radioStyle:function(e){this.codeData.type=this.styleList.find((function(t){return t.name==e})).value}}};t.default=l}).call(this,n(2)["default"])},184:function(e,t,n){"use strict";n.r(t);var a=n(185),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},185:function(e,t,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/arCode/arCode.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/arCode/arCode-create-component',
    {
        'components/arCode/arCode-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(179))
        })
    },
    [['components/arCode/arCode-create-component']]
]);