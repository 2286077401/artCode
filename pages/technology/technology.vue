<template>
	<view>
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>
		<view
			class="about-shadow tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm tn-margin-left tn-margin-right">
			<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
				<view class="tn-flex tn-flex-col-center" @click="open('https://laf.run/signup?code=EvaEc9x')">
					<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center  tn-color-white">
						<image style="width: 40rpx;" mode="widthFix"
							src="https://oss.laf.run/nupa44-bits/interviewCode/laflogo.png"></image>
					</view>
					<view class="tn-margin-left-sm tn-flex-1">后台托管地址</view>
					<view
						class="tn-margin-left-sm tn-color-orangered tn-text-sm tn-padding-left-xs tn-padding-right-xs tn-bg-orange--disabled tn-round">
						laf.run</view>
				</view>
			</tn-list-cell>
		</view>
		<view class="about-shadow  tn-margin-left tn-margin-right">
			<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
				<view class="tn-flex tn-flex-col-center"
					@click="open('https://auth.zhishuyun.com/auth/login?inviter_id=b1c9bad9-37f3-4ccd-a9b0-ae6daf66af5c&redirect=https://data.zhishuyun.com')">
					<view style="background-color: #ffffff;border-radius: 50%;"
						class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center  tn-color-white">
						<image style="width: 50rpx;" mode="widthFix"
							src="https://oss.laf.run/nupa44-bits/interviewCode/zsyunLogo.png"></image>
					</view>
					<view class="tn-margin-left-sm tn-flex-1">api接口对接地址</view>
					<view
						class="tn-margin-left-sm tn-color-orangered tn-text-sm tn-padding-left-xs tn-padding-right-xs tn-bg-orange--disabled tn-round">
						知数云</view>
				</view>
			</tn-list-cell>
		</view>

		<view class="about-shadow  tn-padding-top-sm   tn-padding-bottom-sm tn-margin-left tn-margin-right">
			<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
				<view class="tn-flex tn-flex-col-center" @click="openLandscape('18340032859')">
					<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white">
						<text class="tn-icon-allday" style="color: #04c15f;font-size: 50rpx;"></text>
					</view>
					<view class="tn-margin-left-sm tn-flex-1">疑难解答</view>
					<view
						class="tn-margin-left-sm tn-color-orangered tn-text-sm tn-padding-left-xs tn-padding-right-xs tn-bg-orange--disabled tn-round">
						18340032859</view>
				</view>
			</tn-list-cell>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zsyunImage: 'https://oss.laf.run/nupa44-bits/interviewCode/zsyimag.png',
				zsyun: 'https://auth.zhishuyun.com/auth/login?inviter_id=b1c9bad9-37f3-4ccd-a9b0-ae6daf66af5c&redirect=https://data.zhishuyun.com',
				laf: 'https://laf.run/signup?code=EvaEc9x',
				lafImage: 'https://oss.laf.run/nupa44-bits/interviewCode/lafImag.png',
				lafGit: 'https://github.com/labring/laf'
			}
		},
		methods: {
			open(path) { 
				uni.navigateTo({
					url: '/pages/webView/webView?url=' + path
				})
			},
			openLandscape(path) {
				uni.setClipboardData({
					data: path,
					showToast: false,
					success: function() {
						uni.showToast({
							title: '复制成功',
							icon: 'none'
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>