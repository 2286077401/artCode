<template>
	<view>
		
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>
		<!-- <image src="../../static/1.png" mode="widthFix" class="centerImg"></image> -->
		<view class="titleBox">
			<view class="title">
				<view>BUG在de我</view>
				<view>代码在写我</view>
				<view>螃蟹在剥我的壳</view>
				<view>满天的我落在枫叶上雪花上</view>
				<view>而你在想我_</view>
			</view>
			<view class="titleNex"> by <span style="color: royalblue;font-weight: bolder;padding-left: 20rpx;">
					Bits迪迦.</span> </view>
			<view style="color: #c3c3c3;">
				5LiN6KeB6bK45LiN6KeB6bm/5LiN6KeB5L2g
			</view>
		</view>
		<view class="btnbox" v-if="isloin">
			<view>
				<button class="tn-bg-blue loginBox" @click="goto('/pages/login/login?type=0')">登录</button>
			</view>
			<view>
				<button class="regBox" @click="goto('/pages/login/login?type=1')">注册</button>
			</view>
		</view>
		<view class="into" v-else>
			<view class="login__info__item__button tn-bg-blue tn-color-white" hover-class="tn-hover"
				:hover-stay-time="150" @click="goto('/pages/index/index')">进入</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isloin: true,
				
			}
		},
		onLoad() {
			this.isloin = !uni.getStorageSync('token')
		},
		methods: {
			goto(e) {
				if (e == '/pages/index/index') {
					uni.reLaunch({
						url: e
					})
				} else {
					uni.navigateTo({
						url: e
					})
				}

			}
		}
	}
</script>

<style scoped lang="scss">
	.centerImg {
		width: 500rpx;
		position: absolute;
		left: 50%;
		top: 30%;
		transform: translate(-50%, -50%);
	}

	.titleBox {
		width: 95%;
		position: absolute;
		left: 50%;
		top: 40%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	.title {
		font-size: 30rpx;
		font-weight: 600;
		letter-spacing: 1rpx;
		color: gray;
		margin: 0 auto;
		line-height: 40rpx;
	}

	.titleNex {
		width: 90%;
		font-size: 30rpx;
		font-weight: 400;
		letter-spacing: -0.6rpx;
		line-height: 64rpx;
		color: rgba(148, 155, 165, 1);
		margin: 0 auto;
		margin-top: 15rpx;
	}

	.loginBox {
		width: 300rpx;
		height: 100rpx;
		opacity: 1;
		border-radius: 30rpx;
		background: rgba(33, 34, 38, 1);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 35.83rpx 35.83rpx 35.83rpx 35.83rpx;
	}

	.regBox {
		width: 300rpx;
		height: 100rpx;
		opacity: 1;
		border-radius: 33.44rpx;
		border: 3.58rpx solid rgba(33, 34, 38, 1);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 35.83rpx 35.83rpx 35.83rpx 35.83rpx;
	}

	.btnbox {
		display: grid;
		grid-template-columns: 50% 50%;
		width: 100%;
		position: fixed;
		bottom: 15%;
	}

	.into {
		position: fixed;
		bottom: 20rpx;
		left: 50%;
		transform: translateX(-50%);

		.btn {
			width: 300rpx;
			height: 100rpx;
			opacity: 1;
			border-radius: 33.44rpx;
			border: 3.58rpx solid rgba(33, 34, 38, 1);
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 35.83rpx 35.83rpx 35.83rpx 35.83rpx;
		}
	}
</style>