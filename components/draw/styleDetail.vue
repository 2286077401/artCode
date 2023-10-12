<template>
	<view>
		<view class="box">
			<view class="showTitle" style="display: flex;justify-content: space-between;">
				<text>参数命令总览</text><text @click="close">关闭</text>
			</view>
			<view class="boxList">
				<view class="f1 fw">
					参数
				</view>
				<view class="f1 fw">
					简介
				</view>
				<view class="f1 fw">
					使用频率
				</view>
			</view>
			<view class="boxList" v-for="(item,index) in arglData" @click="showPop(item)">
				<view class="f1">
					{{item.arg}}
				</view>
				<view class="f1">
					{{item.intro}}
				</view>
				<view class="f1">
					<tn-rate :disabled="true" :count="5" v-model="item.rate"></tn-rate>
				</view>
			</view>
		</view>

		<tn-popup v-model="show" mode="center" length="80%">
			<view class="showTitle">
				{{title}}
			</view>
			<view class="showCenter">
				<image :src="imageSrc" mode="widthFix" style="width: 100%;"></image>
			</view>
			<view style="font-size: 10rpx;">
				[注] 苹果系统会自动将双连字符(--)更改为破折号(——), 这都不会影响结果.
			</view>
		</tn-popup>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: '参数',
				imageSrc: '',
				show: false,
				arglData: [{
					arg: "--test",
					intro: "漫画风格",
					rate: 4
				}, {
					arg: "--testp",
					intro: "写实风格",
					rate: 4
				}, {
					arg: "--tile",
					intro: "四方连续",
					rate: 1
				}, {
					arg: "--iw",
					intro: "图片权重",
					rate: 4
				}, {
					arg: "--no",
					intro: "排除物件",
					rate: 3
				}, {
					arg: "--video",
					intro: "生成视频",
					rate: 1
				}, {
					arg: "--niji",
					intro: "二次元风格",
					rate: 5
				}, {
					arg: "--ar",
					intro: "图片宽高比",
					rate: 5
				}, {
					arg: "--c",
					intro: "图片随机性",
					rate: 2
				}, {
					arg: "--v",
					intro: "模型V1-5.1",
					rate: 5
				}, {
					arg: "--seed",
					intro: "种子参数",
					rate: 4
				}, {
					arg: "--s",
					intro: "风格化",
					rate: 5
				}, {
					arg: "--q",
					intro: "图片质量",
					rate: 5
				}, {
					arg: "--stop",
					intro: "控制图片模糊",
					rate: 1
				}],
			}
		},
		methods: {
			close() {
				this.$emit('close')
			},
			showPop(e) {
				let t = this
				console.log(e)
				t.title = e.intro
				t.show = true;
				if ("模型V1-5.1" == t.title || "漫画风格" == t.title || "写实风格" == t.title || "二次元风格" == t.title) {
					t.imageSrc = 'https://oss.laf.run/nupa44-bits/version.jpg'
				} else if ("图片宽高比" == t.title) {
					t.imageSrc = 'https://oss.laf.run/nupa44-bits/ar.jpg'
				} else if ("图片随机性" == t.title) {
					t.imageSrc = 'https://oss.laf.run/nupa44-bits/sj.jpg'
				} else if ("图片权重" == t.title) {
					t.imageSrc = 'https://oss.laf.run/nupa44-bits/qz.jpg'
				} else if ("排除物件" == t.title) {
					t.imageSrc = 'https://oss.laf.run/nupa44-bits/pc.jpg'
				} else if ("图片质量" == t.title) {
					t.imageSrc = 'https://oss.laf.run/nupa44-bits/zl.jpg'
				} else if ("种子参数" == t.title) {
					t.imageSrc = 'https://oss.laf.run/nupa44-bits/zz.png'
				} else if ("控制图片模糊" == t.title) {
					t.imageSrc = 'https://oss.laf.run/nupa44-bits/mh.jpg'
				} else if ("风格化" == t.title) {
					t.imageSrc = 'https://oss.laf.run/nupa44-bits/fgh.jpg'
				} else if ("四方连续" == t.title) {
					t.imageSrc = 'https://oss.laf.run/nupa44-bits/sflx.jpg'
				}
				console.log(t.title)
				// 
				// 
			}
		},
	}
</script>
<style scoped lang="scss">
	.showTitle {
		font-weight: bolder;
		margin: 30rpx;

	}

	.showCenter {
		padding: 30rpx;
		max-height: 70vh;
		overflow-y: scroll;
	}



	.box {
		background-color: #606266;
		width: 600rpx;
		text-align: center;
		max-height: 70vh;
		position: absolute;
		top: 50%;
		left: 50%;
		color: white;
		transform: translate(-50%, -50%);
		overflow-y: scroll;
   
		padding: 20rpx;

		.boxList {
			display: flex;

		}

		.f1 {
			flex: 1;
			text-align: center;
			margin-top: 30rpx;

		}

		.fw {
			font-weight: bolder;
		}
	}
</style>