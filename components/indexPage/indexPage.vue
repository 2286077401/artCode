<template>
	<view class="template-wallpaper tn-safe-area-inset-bottom">
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>
		<!-- 顶部自定义导航 -->
		<!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->
		<!-- 页面内容-->
		<view class="">
			<view class="tn-margin">
				<tn-swiper :list="banner" :height="350" :effect3d="false" mode="rect"></tn-swiper>
			</view>

			<!-- 方式12 start-->
			<view class="tn-flex tn-margin-sm">
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
					<view @click="goto('/pages/60s/60s')"
						class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-orange--light tn-color-orange">
							<view class="tn-icon-moon-fill tn-three"></view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">每日资讯</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
					<view @click="goto('/pagesA/understanImage/understanImage')"
						class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-purple--light tn-color-purple">
							<view class="tn-icon-light-fill tn-three"></view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">图片理解</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
					<view @click="goto('/pagesA/docUnderstan/docUnderstan')"
						class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-indigo--light tn-color-indigo">
							<view class="tn-icon-star-fill tn-three"></view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">文档理解</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-purplered--light tn-color-purplered">
							<view class="tn-icon-like-fill tn-three"></view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">精选测试</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 方式12 end-->

			<!-- banner start-->
			<view class="tn-flex tn-flex-wrap tn-margin-xs">
				<view class=" " style="width: 100%;">
					<view class="image-pic tn-margin-sm"
						style="background-image:url('https://resource.tuniaokj.com/images/shop/phonecase1.jpg')">
						<view class="image-wallpaper">
						</view>
					</view>
				</view>
			</view>
			<!-- banner end-->

			<!-- 比例 start-->
			<view class="tn-flex tn-flex-wrap tn-margin-xs">
				<block v-for="(item, index) in pic" :key="index">
					<view class=" " style="width: 50%;">
						<view class="image-pic tn-margin-sm" :style="'background-image:url(' + item.image + ')'">
							<view class="image-wallpaper">
							</view>
						</view>
					</view>
				</block>
			</view>
			<!-- 比例 end-->

			<!-- 图文 -->
			<!-- <view class="tn-flex tn-flex-direction-column">

				<block v-for="(item,index) in content" :key="index">
					<view class="tn-blogger-content__wrap">
						<view class="">
							<image
								class="tn-blogger-content__main-image tn-blogger-content__main-image--1 tn-margin-bottom tn-margin-top"
								:src="item.mainImage" mode="aspectFill"></image>
						</view>
						<view class="tn-blogger-content__label tn-text-justify">
							<text
								class="tn-blogger-content__label__desc tn-text-lg tn-text-bold tn-color-black">{{ item.desc }}</text>
						</view>

						<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xs">
							<view class="justify-content-item tn-flex tn-flex-col-center">
								<view style="margin-right: 10rpx;margin-left: 0rpx;">
									<view class="tn-color-gray">
										<text class="tn-blogger-content__count-icon tn-icon-flower"></text>
										<text class="tn-padding-right">{{ item.collectionCount }}</text>
										<text class="tn-blogger-content__count-icon tn-icon-message"></text>
										<text class="tn-padding-right">{{ item.commentCount }}</text>
										<text class="tn-blogger-content__count-icon tn-icon-like"></text>
										<text class="">{{ item.likeCount }}</text>
									</view>
								</view>
							</view>
							<view class="justify-content-item tn-text-center">
								<view v-for="(label_item,label_index) in item.label" :key="label_index"
									class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
									<text class="tn-blogger-content__label__item--prefix">#</text> {{ label_item }}
								</view>
							</view>
						</view>
					</view>
				</block>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				banner: [{
					image: require('@/static/banner/wdlj.png')
				}, {
					image: require('@/static/banner/1.png')
				}, {
					image: require('@/static/banner/2.png')
				}, {
					image: require('@/static/banner/3.png')
				}],
				pic: [{
					image: 'https://resource.tuniaokj.com/images/shop/prototype2.jpg'
				}, {
					image: 'https://resource.tuniaokj.com/images/shop/computer2.jpg'
				}, {
					image: 'https://resource.tuniaokj.com/images/shop/pillow.jpg'
				}, {
					image: 'https://resource.tuniaokj.com/images/shop/pillow2.jpg'
				}, {
					image: 'https://resource.tuniaokj.com/images/shop/cup1.jpg'
				}, {
					image: 'https://resource.tuniaokj.com/images/shop/bag2.jpg'
				}],
				// content: [{
				// 		userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
				// 		userName: '兰生',
				// 		date: '2023年12月20日',
				// 		label: ['开源', '创意'],
				// 		desc: '组件',
				// 		mainImage: 'https://resource.tuniaokj.com/images/shop/prototype2.jpg',
				// 		viewUser: {
				// 			latestUserAvatar: [{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
				// 				},
				// 			],
				// 			viewUserCount: 129
				// 		},
				// 		collectionCount: 999,
				// 		commentCount: 999,
				// 		likeCount: 999
				// 	},
				// 	{
				// 		userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
				// 		userName: '兰生',
				// 		date: '2023年12月20日',
				// 		label: ['开源', '创意'],
				// 		desc: '组件',
				// 		mainImage: 'https://resource.tuniaokj.com/images/shop/prototype1.jpg',
				// 		viewUser: {
				// 			latestUserAvatar: [{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
				// 				},
				// 			],
				// 			viewUserCount: 129
				// 		},
				// 		collectionCount: 265,
				// 		commentCount: 22,
				// 		likeCount: 62
				// 	},
				// 	{
				// 		userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
				// 		userName: '兰生',
				// 		date: '2023年12月20日',
				// 		label: ['开源', '创意'],
				// 		desc: '免费开源可商用组件',
				// 		mainImage: 'https://resource.tuniaokj.com/images/shop/computer2.jpg',
				// 		viewUser: {
				// 			latestUserAvatar: [{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
				// 				},
				// 			],
				// 			viewUserCount: 129
				// 		},
				// 		collectionCount: 265,
				// 		commentCount: 22,
				// 		likeCount: 62
				// 	},
				// 	{
				// 		userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
				// 		userName: '兰生',
				// 		date: '2023年12月20日',
				// 		label: ['开源', '创意'],
				// 		desc: '免费开源可商用组件',
				// 		mainImage: 'https://resource.tuniaokj.com/images/shop/phonecase1.jpg',
				// 		viewUser: {
				// 			latestUserAvatar: [{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
				// 				},
				// 			],
				// 			viewUserCount: 129
				// 		},
				// 		collectionCount: 265,
				// 		commentCount: 22,
				// 		likeCount: 62
				// 	},
				// 	{
				// 		userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
				// 		userName: '兰生',
				// 		date: '2023年12月20日',
				// 		label: ['开源', '创意'],
				// 		desc: '免费开源可商用组件',
				// 		mainImage: 'https://resource.tuniaokj.com/images/shop/phonecase2.jpg',
				// 		viewUser: {
				// 			latestUserAvatar: [{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
				// 				},
				// 			],
				// 			viewUserCount: 129
				// 		},
				// 		collectionCount: 265,
				// 		commentCount: 22,
				// 		likeCount: 62
				// 	},
				// 	{
				// 		userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
				// 		userName: '兰生',
				// 		date: '2023年12月20日',
				// 		label: ['开源', '创意'],
				// 		desc: '我们都是好孩子',
				// 		mainImage: 'https://resource.tuniaokj.com/images/shop/watch1.jpg',
				// 		viewUser: {
				// 			latestUserAvatar: [{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
				// 				},
				// 			],
				// 			viewUserCount: 129
				// 		},
				// 		collectionCount: 265,
				// 		commentCount: 22,
				// 		likeCount: 62
				// 	},
				// 	{
				// 		userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
				// 		userName: '兰生',
				// 		date: '2023年12月20日',
				// 		label: ['开源', '创意'],
				// 		desc: '免费开源可商用组件',
				// 		mainImage: 'https://resource.tuniaokj.com/images/shop/sticker.jpg',
				// 		viewUser: {
				// 			latestUserAvatar: [{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
				// 				},
				// 			],
				// 			viewUserCount: 129
				// 		},
				// 		collectionCount: 265,
				// 		commentCount: 22,
				// 		likeCount: 62
				// 	},
				// 	{
				// 		userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
				// 		userName: '兰生',
				// 		date: '2023年12月20日',
				// 		label: ['开源', '创意'],
				// 		desc: '免费开源可商用组件',
				// 		mainImage: 'https://resource.tuniaokj.com/images/shop/card.jpg',
				// 		viewUser: {
				// 			latestUserAvatar: [{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
				// 				},
				// 				{
				// 					src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
				// 				},
				// 			],
				// 			viewUserCount: 129
				// 		},
				// 		collectionCount: 265,
				// 		commentCount: 22,
				// 		likeCount: 62
				// 	}
				// ]
			}
		},
		methods: {
			goto(e) {
				if (e == '/pagesA/docUnderstan/docUnderstan') {
					uni.showToast({
						title: '此功能正在开发，别着急啦~',
						icon: 'none'

					})
					return false
				}
				uni.navigateTo({
					url: e
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.template-wallpaper {
		height: 100vh;
		overflow-y: scroll;

		padding-top: 150rpx;
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			margin-left: 30rpx;
			flex-basis: 5%;
		}

		&__search {
			flex-basis: 70%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 70%;
				padding: 10rpx 0;
				margin: 0 30rpx;
			}

			&__icon {
				padding-right: 10rpx;
				margin-left: 20rpx;
				font-size: 30rpx;
			}

			&__text {
				color: #5d5d5d;
			}
		}
	}

	/* 自定义导航栏内容 end */

	/*logo start */
	.logo-image {
		width: 65rpx;
		height: 65rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 50%;
	}

	/* 图标容器12 start */
	.tn-three {
		position: absolute;
		top: 50%;
		right: 50%;
		bottom: 50%;
		left: 50%;
		transform: translate(-38rpx, -16rpx) rotateX(30deg) rotateY(20deg) rotateZ(-30deg);
		text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
	}

	.icon12 {
		&__item {
			width: 30%;
			background-color: #5d5d5d;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 100rpx;
				height: 100rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;

				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg.png);


				}
			}
		}
	}

	/* 文章内容 start*/
	.tn-blogger-content {
		&__wrap {
			margin: 30rpx;
		}

		&__info {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__label {
			&__item {
				line-height: 45rpx;
				padding: 0 20rpx;
				margin: 5rpx 18rpx 0 0;

				&--prefix {
					color: #00FFC8;
					padding-right: 10rpx;
				}
			}

			&__desc {
				line-height: 55rpx;
			}
		}

		&__main-image {
			border-radius: 16rpx;

			&--1 {
				max-width: 690rpx;
				min-width: 690rpx;
				max-height: 400rpx;
				min-height: 400rpx;
			}

			&--2 {
				max-width: 260rpx;
				max-height: 260rpx;
			}

			&--3 {
				height: 212rpx;
				width: 100%;
			}
		}

		&__count-icon {
			font-size: 40rpx;
			padding-right: 5rpx;
		}
	}

	.image-wallpaper {
		padding: 160rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	/* 文章内容 end*/
</style>