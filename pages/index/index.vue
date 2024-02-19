<template>
	<view class="content">
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>
		<!-- #ifdef H5 -->
		<tn-notice-bar :list="list" :show='closeNoticeShow' :rightIcon="false" :closeBtn="true" backgroundColor="tn-main-gradient-indigo"
			@close="closeNoticeShow = false"></tn-notice-bar>
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<tn-notice-bar :style="{paddingTop:'44px'}" :list="list" :show='closeNoticeShow' :rightIcon="false" :closeBtn="true"
			backgroundColor="tn-main-gradient-indigo" @close="closeNoticeShow = false"></tn-notice-bar>
		<!-- #endif -->


		<view v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<listPro ref="listPro"></listPro>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<draw ref="draw"></draw>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[2]" :style="{display: currentIndex === 2 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<indexPage ref="indexPage"></indexPage>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[3]" :style="{display: currentIndex === 3 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<arCode ref="arCode"></arCode>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[4]" :style="{display: currentIndex === 4 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<my ref="my"></my>
			</scroll-view>
		</view>
		<tn-tabbar v-model="currentIndex" :list="tabbarList" activeColor="#838383" inactiveColor="#AAAAAA"
			activeIconColor="tn-cool-bg-color-7" :animation="true" :safeAreaInsetBottom="true"
			@change="switchTabbar"></tn-tabbar>
	</view>
</template>

<script>
	// import aboutUs from "@/pages/aboutUs/aboutUs.vue"  

	export default {
		components: {},
		data() {
			return {
				isSave: true,
				// 自定义底栏对应页面的加载情况
				tabberPageLoadFlag: [],
				// 底部tabbar菜单数据
				tabbarList: [{
						title: '聊天',
						activeIcon: 'count-fill',
						inactiveIcon: 'menu'
					},
					{
						title: '绘画',
						activeIcon: 'honor-fill',
						inactiveIcon: 'honor'
					},
					{
						title: '应用',
						activeIcon: 'vip-fill',
						inactiveIcon: 'vip',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true
					},
					{
						title: '艺术二维码',
						activeIcon: 'discover-fill',
						inactiveIcon: 'discover',
						// count: 100
					},
					{
						title: '我的',
						activeIcon: 'computer-fill',
						inactiveIcon: 'computer',
						// dot: true
					}
				],
				// tabbar当前被选中的序号
				currentIndex: 0,
				list: [
					'完整功能正在陆续开发，敬请期待',
					'BitsAi 1.0.0(内测版已经上线咯) 正在有奖征集BUG',
					'积分问题请主动联系客服微信'
				],
				closeNoticeShow: true,

			}
		},
		onLoad(options) { 
			const index = Number(options.index || 0)
			// 根据底部tabbar菜单列表设置对应页面的加载情况
			this.tabberPageLoadFlag = this.tabbarList.map((item, tabbar_index) => {
				return index === tabbar_index
			})
			this.switchTabbar(Number(uni.getStorageSync('INDEX_CURRENT')||0))
		},
		methods: {
			// 切换导航
			switchTabbar(index) {
				this._switchTabbarPage(index)
				if (index == 1) {
					this.$nextTick(() => {
						this.$refs['draw'].getSocketResu()
					})
				}

			},

			// 导航页面滚动到底部
			tabbarPageScrollLower(e) {},

			// 切换导航页面
			_switchTabbarPage(index) {
				const selectPageFlag = this.tabberPageLoadFlag[index]
				if (selectPageFlag === undefined) {
					return
				}
				if (selectPageFlag === false) {
					this.tabberPageLoadFlag[index] = true
				}
				this.currentIndex = index
				uni.setStorageSync('INDEX_CURRENT',index)
			},

		}
	}
</script>
<style lang="scss" scoped>
	.custom-tabbar-page {
		height: calc(100vh - (100rpx + env(safe-area-inset-bottom) / 2));
	}
	/deep/.template-wallpaper{
		padding-top: 20rpx;
	}
</style>