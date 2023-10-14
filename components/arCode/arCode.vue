<template>
	<view class="box">
		<view class="choseStyle" style="position: relative;">
			<view class='titleNav'>二维码类型</view>
			<tn-radio-group v-model="codeDatatype">
				<tn-radio borderColor='#ffffff' activeColor='#88FFEF' @change="radioStyle"
					v-for="(item, index) in styleList" :key="index" :name="item.name" :disabled="item.disabled">
					{{item.name}}
				</tn-radio>
			</tn-radio-group>
			<view class="topCenter">
				<textarea placeholderStyle='color:#EFEFEF' placeholder="输入二维码内容,内容越简洁效果越好" class="textarer"
					maxlength="200" v-model="codeData.content"></textarea>
				<view class="tetxNum">
					<view style="color: #EFEFEF;">
						<span>{{codeData.content.length}}/200</span>
					</view>
					<!-- <view style="color: #EFEFEF;">
						<span style="font-size: 22rpx;">自然风光 山川湖海 落日长河 共赏春色 </span>
						<text class="tn-icon-refresh tn-color-black"
							style="font-size: 30rpx;margin-left: 20rpx;"></text>
					</view> -->
				</view>
			</view>
		</view>
		<view class="choseStyle" style="position: relative;">
			<view class='titleNav'>创作引擎</view>
			<tn-radio-group v-model="engineType">
				<tn-radio activeColor='#88FFEF' @change="radioEngine" v-for="(item, index) in engineList" :key="index"
					:name="item.name" :disabled="item.disabled">
					{{item.name}}
				</tn-radio>
			</tn-radio-group>
			<view class="topCenter">
				<textarea placeholderStyle='color:#EFEFEF' placeholder="请输入二维码提示词,建议使用英文" class="textarer"
					maxlength="500" v-model="codeData.prompt"></textarea>
				<view class="tetxNum">
					<view style="color: #EFEFEF;">
						<span>{{codeData.prompt.length}}/500</span>
					</view>
					<!-- <view style="color: #EFEFEF;">
					<span style="font-size: 22rpx;">自然风光 山川湖海 落日长河 共赏春色 </span>
					<text class="tn-icon-refresh tn-color-black"
						style="font-size: 30rpx;margin-left: 20rpx;"></text>
				</view> -->
				</view>
			</view>
			<view v-if="engineType =='自定义引擎'">

				<view class='titleNav'>
					预设背景风格
				</view>
				<view class='nextNav'>二维码背景的风格，如超现实风格、霓虹效果、手绘风格等</view>
				<tn-scroll-list>
					<view class="tn-flex tn-margin-sm">
						<block v-for="(item, index) in presetList" :key="index">
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="tn-color-black tn-text-lg tn-text-center">
										<text @click="choseCodeStyle(index)"
											:class="codeType==index ? 'imgNumberCen choseSizeAct tn-text-ellipsis':'imgNumberCen tn-text-ellipsis'">{{item.name}}</text>
									</view>
								</view>
							</view>
						</block>
					</view>
				</tn-scroll-list>
				<view class='titleNav'>
					预设二维码组合
				</view>
				<view class='nextNav'> 预设二维码风格组合，如定位框的样式（方形、圆形等）、点的样式（方形、圆形等）</view>
				<image mode="widthFix" style="display: block; width: 50%;margin: 30rpx auto 0rpx auto;"
					:src="'https://oss.laf.run/nupa44-bits/imgCode/'+pattern[paterNum]+'.png'"></image>
				<tn-scroll-list>
					<view class="tn-flex tn-margin-sm">
						<block v-for="(item, index) in pattern" :key="index">
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="tn-color-black tn-text-lg tn-text-center">
										<text @click="chosePatern(index)"
											:class="paterNum==index ? 'imgNumberCen choseSizeAct tn-text-ellipsis':'imgNumberCen tn-text-ellipsis'">{{item}}</text>
									</view>
								</view>
							</view>
						</block>
					</view>
				</tn-scroll-list>
				<view class='titleNav'>
					绘制迭代次数
				</view>
				<view class='nextNav'>当次数越大，绘制的二维码艺术风格越强，范围为 10-20，默认是 16</view>
				<view style="display: flex;width: 90%;margin: 0 auto;">
					<tn-slider activeColor='#88FFEF' style="flex: 2;" v-model="codeData.steps" :min="10" :max="20"
						:step='1'></tn-slider>
					<tn-number-box style="flex: 1;" disabledInput v-model="codeData.steps" :min="10" :max="20"
						:step='1'></tn-number-box>
				</view>
				<!-- <view class='titleNav'>
					二维码的权重
				</view>
				<view class='nextNav'>当权重越大，图片越接近真实二维码，但是艺术化的风格会减弱，取值范围是 10-30，默认是 15</view>
				<view style="display: flex;width: 90%;margin: 0 auto;">
					<tn-slider activeColor='#88FFEF' style="flex: 2;" v-model="codeData.qrw" :min="10" :max="30"
						:step='1'></tn-slider>
					<tn-number-box style="flex:1;" disabledInput v-model="codeData.qrw" :min="10" :max="30"
						:step='1'></tn-number-box>
				</view> -->
				<view class='titleNav'>
					是否保持原始链接
				</view>
				<view class='nextNav'>
					默认情况下会将输入链接缩短为短链接，可以提高扫码率，该值默认为 false</view>
				<view style="display: flex;width: 90%;margin: 0 auto;">
					<tn-radio-group v-model="codeRawurl" @change='changeRawurl'>
						<tn-radio name='是'>
							是
						</tn-radio>
						<tn-radio name='否'>
							否
						</tn-radio>
					</tn-radio-group>
				</view>
				<view class='titleNav'>
					二维码内边距
				</view>
				<view class='nextNav'> 代表二维码内边距的大小，默认是 5</view>
				<view style="display: flex;width: 90%;margin: 0 auto;">
					<tn-slider activeColor='#88FFEF' style="flex: 2;" v-model="codeData.padding_level" :min="0"
						:max="20" :step='5'></tn-slider>
					<tn-number-box style="flex: 1;" disabledInput v-model="codeData.padding_level" :min="0" :max="20"
						:step='5'></tn-number-box>
				</view>
				<view class='titleNav'>
					二维码宽高比
				</view>
				<view class='nextNav'> 默认是 768x768</view>
				<tn-scroll-list>
					<view class="tn-flex tn-margin-sm">
						<block v-for="(item, index) in aspect" :key="index">
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="tn-color-black tn-text-lg tn-text-center">
										<text @click="choseAspect(index)"
											:class="codeAspect==index ? 'imgNumberCen choseSizeAct tn-text-ellipsis':'imgNumberCen tn-text-ellipsis'">{{item}}</text>
									</view>
								</view>
							</view>
						</block>
					</view>
				</tn-scroll-list>
				<view class='titleNav'>
					二维码位置
				</view>
				<view class='nextNav'>默认是 center</view>
				<tn-scroll-list>
					<view class="tn-flex tn-margin-sm">
						<block v-for="(item, index) in position" :key="index">
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="tn-color-black tn-text-lg tn-text-center">
										<text @click="chosePosition(index)"
											:class="codePosition==index ? 'imgNumberCen choseSizeAct tn-text-ellipsis':'imgNumberCen tn-text-ellipsis'">{{item.name}}</text>
									</view>
								</view>
							</view>
						</block>
					</view>
				</tn-scroll-list>
				<view class='titleNav'>
					二维码像素风格
				</view>
				<view class='nextNav'>如方形、圆形等，默认是方形 square</view>
				<image mode="widthFix" style="display: block; width: 50%;margin: 30rpx auto 0rpx auto;"
					:src="'https://oss.laf.run/nupa44-bits/imgCode/'+ pixelList[codePixel].value +'.png'"></image>
				<tn-scroll-list>
					<view class="tn-flex tn-margin-sm">
						<block v-for="(item, index) in pixelList" :key="index">
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="tn-color-black tn-text-lg tn-text-center">
										<text @click="chosePixelList(index)"
											:class="codePixel==index ? 'imgNumberCen choseSizeAct tn-text-ellipsis':'imgNumberCen tn-text-ellipsis'">{{item.name}}</text>
									</view>
								</view>
							</view>
						</block>
					</view>
				</tn-scroll-list>
				<view class='titleNav'>
					二维码纠错等级
				</view>
				<view class='nextNav'> 默认是 H，即最高纠错等级</view>
				<tn-scroll-list>
					<view class="tn-flex tn-margin-sm">
						<block v-for="(item, index) in eclList" :key="index">
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="tn-color-black tn-text-lg tn-text-center">
										<text @click="choseEcl(index)"
											:class="codeEcl==index ? 'imgNumberCen choseSizeAct tn-text-ellipsis':'imgNumberCen tn-text-ellipsis'">{{item}}</text>
									</view>
								</view>
							</view>
						</block>
					</view>
				</tn-scroll-list>
			</view>
			<view class="" v-else>
				<view class='titleNav'>
					预设二维码风格
				</view>
				<view class="container">
					<view v-for="(item,index) in exCodeList " :key="index" @click="coseCode(item)">
						<view :class="activeCode==item._id?'activeCode dyBox':'dyBox'">
							<image style="width: 100%;display: block;" :src="item.image" mode="widthFix"></image>
							<view class="btnTxt">
								{{item.name}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="login-sussuspension begin">
			<view class="login__info__item__button tn-cool-bg-color-7--reverse" hover-class="tn-hover"
				:hover-stay-time="150" @click="codeDrwL()">立即生成(5积分/次)</view>
		</view>
	</view>
</template>

<script>
	import {
		getCodePro
	} from "@/commit/api.js"

	import {
		mapState
	} from 'vuex';
	export default {
		name: "arCode",
		computed: {
			...mapState({
				codeImgData: state => state.codeImgData,
				codeIsLoad: state => state.codeIsLoad,
			}),

		},
		data() {
			return {
				activeCode: '',
				exCodeList: [],
				codePixel: 0,
				codeEcl: 0,
				codePosition: 0,
				codeAspect: 0,
				codeDatatype: "链接", //二维码类型
				codeRawurl: '是',
				eclList: [
					"L",
					"M",
					"Q",
					"H"
				],
				codeData: {
					content: '', //二维码内容
					prompt: "", //绘制指令
					type: 'link', //二维码类型
					preset: "", //背景風格
					pattern: "", //预设二维码圆角 点 风格
					steps: 16, //迭代次数 
					rawurl: 'false', //是否保持原始链接
					padding_level: 5, //二维码内边距
					aspect_ratio: '768x768', //二维码宽高比
					marker_shape: "square", //二維碼四角定位框形状
					position: 'center', //二维码位置
					pixel_style: "square", //二维码像素风格
					ecl: 'H', //纠错等级
					seed: "",
				},
				engineType: "自定义引擎", //引擎选择
				engineList: [{
						name: '高级引擎',
						disabled: false
					},
					{
						name: '自定义引擎',
						disabled: false
					}
				],
				styleList: [{
						name: '链接',
						value: 'link',
						disabled: false
					},
					{
						name: '文本',
						value: 'text',
						disabled: false
					},
					{
						name: '邮箱',
						value: 'email',
						disabled: false
					},
					{
						name: '电话',
						value: 'phone',
						disabled: false
					},
					{
						name: '短信',
						value: 'sms',
						disabled: false
					}
				],
				pixelList: [{
						name: '正方形',
						value: "square",
					},
					{
						name: '圆角',
						value: "rounded",
					},
					{
						name: '点',
						value: "dot",
					}, {
						name: '圆角方形',
						value: "squircle",
					},
					{
						name: '行排列',
						value: "row",
					},
					{
						name: '列排列',
						value: "column",
					}
				],
				presetList: [{
						name: '日落',
						value: "sunset"
					},
					{
						name: '自然',
						value: "floral"
					},
					{
						name: '雪花',
						value: "snowflakes"
					},
					{
						name: '羽毛',
						value: "feathers"
					},
					{
						name: '雨滴',
						value: "raindrops"
					},
					{
						name: '超现实主义',
						value: "ultra-realism"
					},
					{
						name: "史诗王国",
						value: "epic-realms"
					},
					{
						name: '错综复杂的工作室',
						value: "intricate-studio"
					},
					{
						name: "对称杰作",
						value: "symmetric-masterpiece"
					},
					{
						name: "发光的高速公路",
						value: 'luminous-highway'
					},
					{
						name: "天空之旅",
						value: "celestial-journey"
					},
					{
						name: "霓虹机械",
						value: "neon-mech"
					},
					{
						name: "空灵低聚",
						value: "ethereal-low-poly"
					},
					{
						name: "金色的远景",
						value: "golden-vista"
					},
					{
						name: "电影大片",
						value: "cinematic-expanse"
					},
					{
						name: "电影温暖的",
						value: "cinematic-warm"
					},
					{
						name: "荒凉的荒野",
						value: "desolate-wilderness}"
					},
					{
						name: "充满活力的调色板",
						value: "vibrant-palette"
					},
					{
						name: "神秘的旅程",
						value: "enigmatic-journey"
					},
					{
						name: "永恒的电影",
						value: "timeless-cinematic"
					},
					{
						name: "银河星系",
						value: "regal-galaxy"
					},
					{
						name: "杰出的画作",
						value: "illustrious-canvas"
					},
					{
						name: "富有表现力的壁画",
						value: "expressive-mural"
					},
					{
						name: "宁静的雾霾",
						value: "serene-haze"
					}
				],
				codeType: '0', //背景风格
				pattern: [
					"custom",
					"s1",
					"s2",
					"s3",
					"rd1",
					"rd2",
					"rd3",
					"d1",
					"d2",
					"d3",
					"r1",
					"r2",
					"r3",
					"c1",
					"c2",
					"c3",
					"sq1",
					"sq2",
					"sq3"
				],
				aspect: [
					"768x768",
					"1176x672",
					"672x1176",
					"864x672",
					"672x864"
				],
				position: [{
						name: '局中',
						value: "center",
					},
					{
						name: '顶部',
						value: "top",
					},
					{
						name: '右边',
						value: "right",
					},
					{
						name: '底部',
						value: "bottom",
					},
					{
						name: '左边',
						value: "left",
					},
					{
						name: '左上',
						value: "top-left",
					},
					{
						name: '右上',
						value: "top-right",
					},
					{
						name: '左下',
						value: "bottom-left",
					},
					{
						name: '右下',
						value: "bottom-right",
					}
				],
				paterNum: "0",
			};
		},

		mounted() {
			this.codeImgData;
			this.codeIsLoad;
			this.getCodeProList()
		},
		methods: {
			coseCode(item) {
				this.activeCode = item._id
				// uni.showToast({
				// 	title: '功能暂未开放',
				// 	icon: "none",
				// })
				// return; 
				// this.codeData = item.prompt
				Object.assign(this.codeData, item.prompt); 
			},
			getCodeProList() {
				getCodePro().then((res) => {
					if (res.code == 200) {
						this.exCodeList = res.data
					} else {
						uni.showToast({
							title: '请求出错',
							icon: 'none'
						})
					}
				})
			},
			chosePixelList(index) {
				this.codePixel = index
				this.codeData.pixel_style = this.pixelList[index].value
			},
			changeRawurl(index) {
				if (index == '是') {
					this.codeData.rawurl = true
				} else {
					this.codeData.rawurl = false
				}
			},
			codeDrwL() {
				if (this.codeIsLoad) {
					uni.showToast({
						title: '不要着急，正在努力生成！',
						icon: 'none'
					})
					return false
				}
				if (this.prompt == '') {
					uni.showToast({
						title: '请输入描述语！',
						icon: 'none'
					})
					return false
				}
				let updateObj = {
					content: this.codeData.content,
					prompt: this.codeData.prompt,
					type: this.codeData.type,
					preset: this.codeData.preset,
					pattern: this.codeData.pattern,
					steps: this.codeData.steps,
					rawurl: this.codeData.rawurl,
					padding_level: this.codeData.padding_level + '',
					aspect_ratio: this.codeData.aspect_ratio,
					marker_shape: this.codeData.marker_shape,
					position: this.codeData.position,
					pixel_style: this.codeData.pixel_style,
					ecl: this.codeData.ecl,
				};
				this.$store.dispatch('codeDrw', updateObj)
			},
			chosePatern(index) {
				this.paterNum = index
				this.codeData.pattern = this.pattern[index]
			},
			choseEcl(index) {
				this.codeEcl = index
				this.codeData.ecl = this.eclList[index]

			},
			chosePosition(index) {
				this.codePosition = index
				this.codeData.position = this.position[index].value
			},
			choseAspect(index) {
				this.codeAspect = index
				this.codeData.aspect_ratio = this.aspect[index]

			},
			choseCodeStyle(index) {
				this.codeType = index
				this.codeData.preset = this.presetList[index].value
			},
			radioEngine(index) {
				this.activeCode = ''
				this.codeData = {
					content: '', //二维码内容
					prompt: "", //绘制指令
					type: 'link', //二维码类型
					preset: "", //背景風格
					pattern: "", //预设二维码圆角 点 风格
					steps: 16, //迭代次数 
					rawurl: 'false', //是否保持原始链接
					padding_level: 5, //二维码内边距
					aspect_ratio: '768x768', //二维码宽高比
					marker_shape: "square", //二維碼四角定位框形状
					position: 'center', //二维码位置
					pixel_style: "square", //二维码像素风格
					ecl: 'H', //纠错等级
					seed: "",
				}
				this.engineType = index
			},
			radioStyle(index) {
				this.codeData.type = this.styleList.find(item => item.name == index).value
			},
		},
	}
</script>

<style scoped lang="scss">
	.login__info__item__button {
		letter-spacing: .5em;
		width: 80%;
		margin: 0 auto;
	}

	.btnTxt {
		width: 100%;
		position: absolute;
		bottom: 0rpx;
		background-color: #00F5D460;
		color: white;

	}

	.container {
		column-count: 3;
		column-gap: 10px;
		width: 100%;
		position: relative;

		.activeCode {
			border: 1rpx solid #00F5D4;
		}
	}

	.dyBox {
		break-inside: avoid;
		background-color: #f2f2f2;
		// margin-top: 20rpx;
		margin-bottom: 20rpx;
		text-align: center;
		position: relative;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.titleNav {
		color: white;
		padding: 20rpx 0 20rpx 0;
	}

	.nextNav {
		font-size: 15rpx;
		color: #ffffff60;
	}

	/deep/ .tn-margin-sm {
		margin: 0 !important;
	}

	/deep/.tn-slider__button-wrap {
		display: none !important;
	}

	/deep/.tn-scroll-list__indicator {
		margin: 0 !important;
	}

	/deep/ .tn-radio__label {
		color: white !important;
	}

	.tn-radio__label {
		color: white !important;
	}

	.imgNumberBox {
		display: grid;
		grid-template-columns: 32% 32% 32%;
		gap: 10rpx;
	}

	.imgNumberCen {
		width: 100%;
		text-align: center;
		line-height: 40rpx;
		background-color: #f5f5f589;
		// margin: 5rpx auto 5rpx auto;
		padding: 5rpx 10rpx 5rpx 10rpx;
		border-radius: 10rpx;

		display: flex;
		justify-items: center;
		justify-content: center;
		align-items: center;

		font-size: 20rpx;
		color: white;
	}

	.choseSizeAct {
		border: 1rpx solid #43e97b;
		background-color: #43e97b10;
		width: 100%;
		text-align: center;
		line-height: 40rpx;
		padding: 5rpx 10rpx 5rpx 10rpx;
		border-radius: 10rpx;

		display: flex;
		justify-items: center;
		justify-content: center;
		align-items: center;

		font-size: 20rpx;
		color: white;
	}

	.topCenter {
		border-radius: 20rpx;
		width: 100%;
		margin: 0 auto;
		padding: 20rpx;
		background-color: #ffffff80;
		// box-shadow: 8rpx 8rpx 20rpx 2rpx #ffffff;

		.textarer {
			width: 100%;
			height: 100%;
			height: 100rpx;
			font-size: 25rpx;
			// box-shadow: ;
		}

		.tetxNum {
			display: flex;
			justify-content: space-between;
		}
	}

	.box {
		background: linear-gradient(-120deg, #9A5CE5, #01BEFF, #00F5D4, #43e97b);
		padding: 20rpx;
		padding-top: 180rpx;
		height: 100vh;
		overflow-y: scroll;
		padding-bottom: 150rpx;
	}

	.choseStyle {
		width: 700rpx;
		border-radius: 20rpx;
		background-color: #22222260;
		box-shadow: 8rpx 8rpx 20rpx 2rpx #ffffff50;
		margin: 0 auto;
		margin-top: 30rpx;
		padding: 20rpx;
	}
</style>