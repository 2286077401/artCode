<template>
	<view class="components-lazy-load">
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>
		<!-- 顶部自定义导航 -->
		<view class="tn-bg-white top-fixed">
			<tn-tabs :list="fixedList" :current="current" :isScroll="false" activeColor="#000" :bold="true"
				:fontSize="32" :badgeOffset="[20, 50]" @change="tabChange"></tn-tabs>
		</view>
		<!-- 页面内容 -->
		<tn-empty v-if="dataList.length==0" mode="data"></tn-empty>
		<!-- :style="{paddingTop: vuex_custom_bar_height + 'rpx'}" -->
		<view>
			<view class="content">
				<block v-for="(item, index) in dataList" :key="index">
					<view class="item">
						<ls-loading :highlight-color="'#ff9900'"
							style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"
							v-if="item.isLoading" :fontSize='25' text="云端绘制中." :embed='true'
							:animation="'progress'"></ls-loading>
						<tn-lazy-load @click="tn('/pages/drwPubil/detailImage',item)" :index="index"
							:image="item.image_url" :threshold="-450" :height="'100%'"
							imgMode="widthFix"></tn-lazy-load>
						<view v-if="!item.isLoading" class="goOnDrow" @click="goDrow(item)">继续绘制</view>
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
				dataList: [],
				current: 0,
				fixedList: [{
						name: 'AI绘画'
					},
					{
						name: '艺术二维码'
					}
				],
			}
		},
		onLoad() {
			this.getData()
			console.log(this.$socket)
		},
		onReachBottom() {
			uni.$emit('tOnLazyLoadReachBottom')
			this.getData()
		},
		methods: {
			goDrow(item) {
				console.log(item)
				this.$store.commit('changeimageLoad', item);
				uni.navigateTo({
					url:'/pages/index/index?index=1'
				})
			},
			// 跳转
			tn(e, data) {
				uni.setStorageSync('imgData', JSON.stringify(data))
				uni.navigateTo({
					url: e,
				});
			},
			tabChange(index) {
				this.current = index
				this.getData()
			},
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
					type: this.current
				}).then((res) => {
					this.dataList = res.data
					this.status = 'loadmore'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goOnDrow {
		position: absolute;
		bottom: 0;
		width: 100%;
		text-align: center;
		color: white;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #6666667a;
	}

	.components-lazy-load {
		padding-top: 44px;
	}

	.top-fixed {
		position: fixed;
		background-color: rgba(255, 255, 255, 1);
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
		top: 0;
		width: 100%;
		transition: all 0.25s ease-out;
		z-index: 100;
	}

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