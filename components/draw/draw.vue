<template>
	<view class="box">
		<view class="topCenter">
			<textarea placeholder="输入创意点击按钮立即生成" class="textarer" maxlength="200" v-model="drwData.prompt"></textarea>
			<view class="tetxNum">
				<view style="color: gray;">
					<span>{{drwData.prompt.length}}/200</span>
				</view>
				<view style="color: gray;">
					<span style="font-size: 22rpx;">自然风光 山川湖海 落日长河 共赏春色 </span>
					<text class="tn-icon-refresh tn-color-black" style="font-size: 30rpx;margin-left: 20rpx;"></text>
				</view>
			</view>
		</view>
		<view class="choseStyle" style="position: relative;">
			<view v-if="!imageIsLoad && imageData==''" class="loading">
				<tn-empty mode="data" text='暂无绘制内容'></tn-empty>
			</view>
			<view v-if="imageIsLoad" class="loading">
				<ls-loading :fontSize='20' text="———绘制中,请稍后———" :embed='true' :animation="'progress'"></ls-loading>
			</view>
			<image v-if="imageData!=''" :src="imageData.image_url" style="width: 100%;" mode="widthFix"></image>
			<view v-if="imageData!=''" class="grid-container">
				<view class="grid-item" v-for="item in 4" @click="choseImageIndex(item)">
					<view v-if="ImageIndex==item" class="centerBox">
						<view class='aganBtn' @click="useImage(item,'V')">V{{item}}</view>
						<view class='aganBtn' @click="useImage(item,'U')">U{{item}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="login-sussuspension begin">
			<view class="login__info__item__button tn-cool-bg-color-7--reverse" hover-class="tn-hover"
				:hover-stay-time="150" @click="mjImageDrw()">立即生成</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		mjlow,
		mjSecend,
		mjBase
	} from "@/commit/api.js"
	export default {
		computed: {
			...mapState({
				imageData: state => state.imageData,
				imageIsLoad: state => state.imageIsLoad,
			}),
			gridItemWidth() {
				return 100 / this.col + '%'
			}
		},
		data() {
			return {
				currentIndex: 0,
				col: 3,
				drwData: {
					action: 'generate',
					prompt: '', //描述词
					image_id: "", //图像 ID。在第一次生成预览图时，不需要指定该字段。在后续需要对图像进行处理时，需要指定该字段，代表待处理图像的 ID。该 ID 即为第一次生成预览图时返回的 image_id 字段
					timeout: 60000, //超时时间
					callback_url: "", //异步结果
				},
				ImageIndex: '9999',
			}
		},

		onShow() {
			this.imageData;
			this.imageIsLoad;
		},
		methods: {
			choseImageIndex(index) {
				this.ImageIndex = index
			},
			mjImageDrw() {
				this.currentIndex = 0
				this.$store.dispatch('mjImageDrw', this.drwData)
				uni.showModal({
					title: '提示',
					content: '绘制完成是否前往画夹查看？',
					cancelText: "取消", // 取消按钮的文字 
					confirmText: "确认", // 确认按钮文字 
					showCancel: true, // 是否显示取消按钮，默认为 true
					confirmColor: '#999999',
					cancelColor: '#39B54A',
					success: (res) => {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/history/history'
							})
						}
					}
				})
			},
		},

	}
</script>

<style scoped lang="scss">
	.loading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.tn-icon-fire-fill {
		color: red;
	}


	.choseSizeAct {
		border: 4rpx solid #43e97b;
	}

	.styleActive {
		/deep/ .tn-grid-item__box {
			border: 4rpx solid #43e97b;
			// background: linear-gradient(-120deg, #9A5CE5, #01BEFF, #00F5D4, #43e97b);
		}
	}



	.box {
		background: linear-gradient(-120deg, #9A5CE5, #01BEFF, #00F5D4, #43e97b);
		padding: 20rpx;
		padding-top: 180rpx;
		height: 100vh;
		overflow-y: scroll;
		padding-bottom: 150rpx;

		.title {
			font-weight: bolder;
		}

		.begin {
			width: calc(100% - 40rpx);
			position: fixed;
			bottom: 200rpx;

			.login__info__item__button {
				width: 80%;
				margin: 0 auto;
				background-image: repeating-linear-gradient(-45deg, #9A5CE5, #00C3FF);

			}
		}

		.choseStyle {
			width: 700rpx;
			height: 700rpx;
			border-radius: 20rpx;
			background-color: #ffffff80;
			box-shadow: 8rpx 8rpx 20rpx 2rpx #ffffff50;
			margin: 0 auto;
			margin-top: 30rpx;
			padding: 20rpx;

			.grid-container {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				display: grid;
				grid-template-columns: repeat(2, 330rpx);
				/* 创建两列，每列宽度为100px */
				grid-template-rows: repeat(2, 330rpx);
				/* 创建两行，每行高度为100px */
				padding: 20rpx;
			}

			.aganBtn {
				padding: 5rpx 10rpx 5rpx 10rpx;
				margin-bottom: 10rpx;
				border-radius: 20rpx;
				width: 100rpx;
				background-color: #00ccffc4;
			}

			.grid-item {
				// display: flex;
				// flex-direction: column;
				// justify-content: center;
				// justify-items: center;
				// align-items: center;
				// text-align: center;
				color: white;
				font-weight: bolder;
				position: relative;

				.centerBox {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					text-align: center;
				}
			}

			/deep/ .tn-grid-item {
				background-color: #00000000;
				height: 150rpx;
				margin-top: 20rpx;
				width: 200rpx;
				padding: 0;
				border-radius: 20rpx;

			}

			/deep/.tn-grid-item__box {
				box-shadow: 0rpx 5rpx 20rpx 2rpx #ffffff50;
				border-radius: 20rpx;
				width: 200rpx;
				background-color: #f5f5f599;

			}
		}





		.topCenter {
			border-radius: 20rpx;

			width: 700rpx;

			margin: 0 auto;
			padding: 20rpx;
			background-color: #ffffff80;
			box-shadow: 8rpx 8rpx 20rpx 2rpx #ffffff50;

			.textarer {
				width: 100%;
				height: 100%;
				height: 300rpx;
				font-size: 25rpx;
				// box-shadow: ;
			}

			.tetxNum {
				display: flex;
				justify-content: space-between;
			}
		}


	}
</style>