<template>
	<view class="components-lazy-load">
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>
		<!-- 顶部自定义导航 -->
		<!-- <tn-nav-bar fixed></tn-nav-bar> -->

		<!-- 页面内容 -->
		<view :style="{paddingTop: vuex_custom_bar_height + 'rpx'}">
			<view class="content">
				<block v-for="(item, index) in dataList" :key="index">
					<view class="item" @click='seePic(item)'>
						<ls-loading :highlight-color="'#ff9900'" style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"
							v-if="!item.image_url" :fontSize='20' text="云端绘制中..." :embed='true'
							:animation="'progress'"></ls-loading>

						<tn-lazy-load :index="index" :image="item.image_url" :threshold="-450" :height="'100%'"
							imgMode="widthFix"></tn-lazy-load>
					</view>
				</block>
			</view>
			<!-- <tn-load-more :status="status" @loadmore="getData"></tn-load-more> -->
		</view>
	</view>
</template>

<script>
	import {
		gitDrwHistory
	} from "@/commit/api.js"

	export default {
		name: 'ComponentsLazyLoad',
		data() {
			return {
				status: 'loadmore',
				dataList: []
			}
		},
		onLoad() {
			this.getData()
		},
		onReachBottom() {
			uni.$emit('tOnLazyLoadReachBottom')
			this.getData()
		},
		methods: {
			seePic(item) {
				console.log(item)
				uni.previewImage({
					urls: [item.src]
				})
			},
			getData() {
				let index = 0
				this.status = 'loading'
				gitDrwHistory({
					userId: uni.getStorageSync('userInfo')._id
				}).then((res) => {
					this.dataList = res.data
					this.status = 'loadmore'
				})
				// setTimeout(() => {
				// 	for (let i = 0; i < 10; i++) {
				// 		index = this.$tn.number.randomInt(0, this.data.length - 1)
				// 		this.list.push({
				// 			src: this.data[index].src
				// 		})
				// 	}
				// 	this.status = 'loadmore'
				// }, 1500)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 30rpx;

		.item {
			position: relative;
			flex: 0 0 335rpx;

			margin-bottom: 20rpx;
			border-radius: 10rpx;
			overflow: hidden;
		}
	}
</style>