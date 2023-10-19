<template>
	<view class="tn-safe-area-inset-bottom">
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>
		<!-- 顶部自定义导航 -->
		<!-- 		<tn-nav-bar fixed customBack :bottomShadow="false" backgroundColor="#FFFFFF">
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left-arrow'></text>
			</view>
			<view class="tn-flex tn-flex-col-center tn-flex-row-center ">
				<text class="tn-text-bold tn-text-xl tn-color-black">积分明细</text>
			</view>
		</tn-nav-bar> -->

		<tn-empty :style="{paddingTop: vuex_custom_bar_height + 'px'}" v-if="integral.length==0" mode="data"></tn-empty>
		<view class="">
			<view class="tn-padding-bottom-lg">
				<view class="tn-flex tn-flex-row-between  tn-padding" v-for="(item,index) in integral" :key="index"
					style="border-bottom: 1rpx solid #6666663d;">
					<view class="justify-content-item">
						<view class="tn-color-gray--dark tn-text-lg">
							{{item.status==999?'注册奖励':'绘画扣除'}}
						</view>
						<view class="tn-color-gray tn-padding-top-xs">
							{{item.creatTime}}
						</view>
					</view>
					<view class="justify-content-item tn-text-xl tn-padding-top">
						<view>{{item.status==1?'-':'+'}} <text style="color: darkred;"> {{item.coin}}</text> </view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		getblacHiste
	} from "@/commit/api.js"


	export default {
		data() {
			return {
				integral: [],
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData() {
				getblacHiste().then((res) => {
					this.integral = res.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 60%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.15);
		border-radius: 1000rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.5);
		color: #FFFFFF;
		font-size: 18px;

		.icon {
			display: block;
			flex: 1;
			margin: auto;
			text-align: center;
		}

	}

	/* 间隔线 start*/
	.tn-strip-bottom-min {
		width: 100%;
		border-bottom: 1rpx solid #F8F9FB;
	}

	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
</style>