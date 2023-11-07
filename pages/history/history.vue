<template>
	<view class="pages-a">
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>
		<!-- 顶部自定义导航 -->
		<!-- #ifdef H5 -->
		<view class="tn-bg-white top-fixed">
			<tn-tabs :list="fixedList" :current="current" :isScroll="false" activeColor="#000" :bold="true"
				:fontSize="32" :badgeOffset="[20, 50]" @change="tabChange"></tn-tabs>
		</view>
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<view class="tn-bg-white top-fixed">
			<tn-tabs :list="fixedList" :current="current" :isScroll="false" activeColor="#000" :bold="true"
				:fontSize="32" :badgeOffset="[20, 50]" @change="tabChange"></tn-tabs>
		</view>
		<!-- #endif -->

		<!-- 页面内容 -->
		<tn-empty v-if="dataList.length==0" mode="data"></tn-empty>

		<view class="" v-if="current ==0">
			<view class="" style="padding: 30rpx 20rpx;">
				<tn-waterfall ref="waterfall" v-model="list" @finish="handleWaterFallFinish">
					<template v-slot:left="{ leftList }">
						<view v-for="(item, index) in leftList" :key="item.id" class="wallpaper__item" >
							<view class="item__image">
								<ls-loading :highlight-color="'#ff9900'"
									style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"
									v-if="item.isLoading" :fontSize='25' text="云端绘制中." :embed='true'
									:animation="'progress'"></ls-loading>
								<tn-lazy-load :threshold="6000" height="100%"
									@click="tn('/pages/drwPubil/detailImage?type=2',item)" :image="item.image_url"
									:index="item.id" imgMode="widthFix"></tn-lazy-load>
							</view>
							<view class="item__data">
								<view class="item__title-container tn-padding-xs">
									<text class="item__title tn-color-black">{{ item.prompt }}</text>
								</view>
								<view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
									<!-- <view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">
										{{ tagItem }}
									</view> -->
								</view>

								<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xs">
									<view class="justify-content-item">
										<view class="tn-flex tn-flex-col-center tn-flex-row-left">
											<view class="logo-pic">
												<view class="logo-image">
													<view class=""
														:style="'background-image:url('+ item.userAvatar +');width: 40rpx;height: 40rpx;background-size: cover;'">
													</view>
												</view>
											</view>
											<view class="tn-padding-left-xs">
												<text class="tn-color-gray tn-text-sm">{{ item.userName }}</text>
											</view>

										</view>
									</view>
									<view class="justify-content-item tn-padding-xs">
										<text class="tn-icon-rocket tn-color-gray tn-padding-right-xs"></text>
										<text class="tn-color-gray">{{ millisecondsToTime(item.creatTime)}}</text>
									</view>
								</view>


							</view>
						</view>
					</template>
					<template v-slot:right="{ rightList }">
						<view v-for="(item, index) in rightList" :key="item._id" class="wallpaper__item" >
							<view class="item__image">
								<ls-loading :highlight-color="'#ff9900'"
									style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"
									v-if="item.isLoading" :fontSize='25' text="云端绘制中." :embed='true'
									:animation="'progress'"></ls-loading>
								<tn-lazy-load :threshold="6000" height="100%"
									@click="tn('/pages/drwPubil/detailImage?type=2',item)" :image="item.image_url"
									:index="item._id" imgMode="widthFix"></tn-lazy-load>
							</view>
							<view class="item__data">
								<view class="item__title-container tn-padding-xs">
									<text class="item__title tn-color-black">{{ item.prompt }}</text>
								</view>
								<view class="item__tags-container">
									<!-- <view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">
										{{ tagItem }}
									</view> -->
								</view>
								<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xs">
									<view class="justify-content-item">
										<view class="tn-flex tn-flex-col-center tn-flex-row-left">
											<view class="logo-pic">
												<view class="logo-image">
													<view class=""
														:style="'background-image:url('+ item.userAvatar +');width: 40rpx;height: 40rpx;background-size: cover;'">
													</view>
												</view>
											</view>
											<view class="tn-padding-left-xs">
												<text class="tn-color-gray tn-text-sm">{{ item.userName }}</text>
											</view>

										</view>
									</view>
									<view class="justify-content-item tn-padding-xs">
										<text class="tn-icon-rocket tn-color-gray tn-padding-right-xs"></text>
										<text class="tn-color-gray">{{ millisecondsToTime(item.creatTime) }}</text>
									</view>
								</view>
							</view>
						</view>
					</template>
				</tn-waterfall>
			</view>
			<tn-load-more :status="loadStatus"></tn-load-more>
		</view>
		<!-- <view class='tn-tabbar-height'></view> -->

	</view>
</template>

<script>
	import {
		gitDrwHistory
	} from "@/commit/api.js"
	export default {
		name: 'PagesA',
		data() {
			return {
				current: 0,
				fixedList: [{
						name: 'AI绘画'
					},
					{
						name: '艺术二维码'
					}
				],
				/* 瀑布流*/
				loadStatus: 'loadmore',
				list: [],
				dataList: []
			}
		},
		created() {
			/* 瀑布流*/
			this.getData()
		},
		methods: {
			// 跳转
			tn(e, data) { 
				uni.setStorageSync('imgData', JSON.stringify(data))
				uni.navigateTo({
					url: e,
				});
			},
			millisecondsToTime(milliseconds=' ') { 
				// let seconds = Math.floor(milliseconds / 1000);
				// let minutes = Math.floor(seconds / 60);
				// let hours = Math.floor(minutes / 60);

				// seconds %= 60;
				// minutes %= 60;

				// if (hours == 0 && minutes == 0) {
				// 	return `${seconds}秒`;
				// } else if (hours == 0 && minutes != 0) {
				// 	return `${minutes}分${seconds}秒`;
				// } else {
				// 	return `${hours}时${minutes}分${seconds}秒`;
				// }
				return milliseconds.split(' ')[0]
			},
			tabChange(index) {
				this.current = index
				this.dataList = []
				this.list = []
				this.getData()
			},
			getData() {
				let index = 0
				this.status = 'loading'
				gitDrwHistory({
					type: this.current
				}).then((res) => {
					this.dataList = res.data
					this.getRandomData()
				})
			},


			/* 瀑布流*/
			// 获取随机数据
			getRandomData() {
				this.loadStatus = 'loading'
				for (let i = 0; i < this.dataList.length; i++) {

					let item = JSON.parse(JSON.stringify(this.dataList[i]))
					this.list.push(item)
				} 
			},
			// 瀑布流加载完毕事件
			handleWaterFallFinish() {
				this.loadStatus = 'loadmore'
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.pages-a {
		max-height: 100vh;
	}


	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
		height: calc(140rpx + constant(safe-area-inset-bottom));
	}

	/* 瀑布流*/
	.wallpaper__item {
		background-color: #FFFFFF;
		overflow: hidden;
		margin: 0 10rpx;
		margin-bottom: 40rpx;
		// box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);

		.item {

			/* 图片 start */
			&__image {
				position: relative;
				width: 100%;
				height: auto;
				background-color: #FFFFFF;
				border: 1rpx solid #F8F7F8;
				border-radius: 10rpx;
				overflow: hidden;
			}

			/* 图片 end */

			/* 内容 start */
			&__data {
				padding: 14rpx 0rpx;
			}

			/* 标题 start */
			&__title-container {
				text-align: justify;
				line-height: 38rpx;
				vertical-align: middle;
			}

			&__title {
				font-size: 30rpx;
			}

			/* 标题 end */

			/* 标签 start */
			&__tags-container {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: flex-start;
			}

			&__tag {
				margin: 10rpx;
				color: #7C8191;
				background-color: #F3F2F7;
				padding: 4rpx 14rpx 6rpx;
				border-radius: 10rpx;
				font-size: 20rpx;

				&:first-child {
					margin-left: 0rpx !important;
				}
			}

			/* 标签 end */

			/* 内容 end */
		}
	}
</style>