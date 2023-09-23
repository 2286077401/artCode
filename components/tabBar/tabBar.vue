<template>
	<view>
		<view class="tabbar footerfixed">
			<view class="action">
				<view class="bar-icon">
					<!-- <view class="tn-icon-level">
		      </view> -->
					<image class="" src='https://resource.tuniaokj.com/images/tabbar/yellow/home_cur.png'></image>
				</view>
				<view class="tn-color-black">首页</view>
			</view>
			<view class="action">
				<view class="bar-circle tn-shadow-blur">
					<view class="tn-icon-discover-planet tn-color-white">
					</view>
					<!-- <image class="" src='https://resource.tuniaokj.com/images/tabbar/information_tn.png'></image> -->
				</view>
				<!-- <view class="tn-color-gray">发布</view> -->
			</view>
			<view class="action">
				<view class="bar-icon">
					<!-- <view class="tn-icon-signpost tn-color-gray--dark">
		      </view> -->
					<image class="" src='https://resource.tuniaokj.com/images/tabbar/yellow/me.png'></image>
				</view>
				<view class="tn-color-gray">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tabBar",
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 999;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.tabbar {
		display: flex;
		align-items: center;
		min-height: 110rpx;
		justify-content: space-between;
		padding: 0;
		height: calc(110rpx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	}

	.tabbar .action {
		font-size: 22rpx;
		position: relative;
		flex: 1;
		text-align: center;
		padding: 0;
		display: block;
		height: auto;
		line-height: 1;
		margin: 0;
		overflow: initial;
	}

	.tabbar .action .bar-icon {
		width: 100rpx;
		position: relative;
		display: block;
		height: auto;
		margin: 0 auto 10rpx;
		text-align: center;
		font-size: 42rpx;
		// line-height: 50rpx;
	}

	.tabbar .action .bar-icon image {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
	}

	.tabbar .action .bar-circle {
		position: relative;
		display: block;
		margin: -30rpx auto 20rpx;
		text-align: center;
		font-size: 52rpx;
		line-height: 90rpx;
		background-color: #FFCA28;
		width: 90rpx !important;
		height: 90rpx !important;
		overflow: hidden;
		border-radius: 50%;
		box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(255, 202, 40, 0.5);
	}

	.tabbar .action .bar-circle image {
		width: 60rpx;
		height: 60rpx;
		display: inline-block;
		margin: 15rpx auto 15rpx;
	}
</style>