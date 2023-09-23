<template>
	<view style="text-align: center;">
		<tn-tabs :list="tabbarList" :activeColor="'#9A5CE5'" :current="currentIndex" :isScroll="true"
			@change="tabChange"></tn-tabs>
		<image show-menu-by-longpress v-if="currentIndex == 0||currentIndex == 3 || currentIndex == 4"
			:src="tabbarList[currentIndex].url" mode="widthFix" style="width: 90vw;margin: 0 auto;margin-top: 20rpx;">
		</image>

		<tn-empty v-if="currentIndex == 1||currentIndex == 2" mode="list" style="padding-top: 200rpx;"></tn-empty>
		<!-- <view v-if="currentIndex == 0" style="margin-top: 20rpx;">
			<view v-if="droImg" style="width:630rpx;margin: 0 auto;border: 1rpx solid #ebebeb;">
				<l-painter css="width:630rpx;" :after-delay='100' @fail="fail" @done="done" pathType="url" ref="poster"
					performance>
					<l-painter-view css="width: 630rpx;height:300rpx;background:#eb6430">
						<l-painter-text text="60S读懂世界"
							css='width:300rpx;font-size: 50rpx;font-weight: bolder;color: white;line-height: 300rpx;text-align: center;margin: 0 auto;'></l-painter-text>
					</l-painter-view>
					<l-painter-view
						css="display:flex;border: 2rpx dotted #eb6430;width: 606rpx;height:65rpx;margin: 0 auto;padding: 10rpx;">
						<l-painter-text css="width: 201rpx;line-height: 80rpx;text-align:center;color:#eb6430;"
							:text="new Date().toLocaleString('ja-JP-u-ca-chinese').split(' ')[0]">
						</l-painter-text>
						<l-painter-text text='NEW'
							css="text-align:center;width: 201rpx;line-height: 80rpx;color:#eb6430;">
						</l-painter-text>
						<l-painter-text :text='new Date().toLocaleDateString()'
							css="text-align:center;width: 201rpx;line-height: 80rpx;color:#eb6430">
						</l-painter-text>
					</l-painter-view>
					<l-painter-view css='width: 630rpx;margin: 0 auto;margin-top: 20rpx;'>
						<l-painter-text v-for="(item,index) in chinanData.news" :key="index" :text="item"
							css="margin: 0 auto;margin-bottom:20rpx;width: 610rpx;text-align: justify;">
						</l-painter-text>
						<l-painter-text :text="chinanData.weiyu"
							css="color:#eb6430;margin: 0 auto;margin-bottom:20rpx;width: 610rpx;text-align: justify;">
						</l-painter-text>
					</l-painter-view>
				</l-painter>
			</view>
			<view class="login-sussuspension begin" @click="save">
				<view class="login__info__item__button tn-cool-bg-color-7--reverse" hover-class="tn-hover"
					:hover-stay-time="150">保存</view>
			</view>
		</view> -->

		<view v-if="currentIndex == 0||currentIndex == 3 || currentIndex == 4" class="login-sussuspension begin"
			@click="save">
			<view class="login__info__item__button tn-cool-bg-color-7--reverse" hover-class="tn-hover"
				:hover-stay-time="150">保存</view>
		</view>
		<view style="width: 100%;height: 50rpx;">
		</view>
	</view>
</template>

<script>
	// new Date().toLocaleString('zh-CN-u-ca-chinese').replace(/(\d+)\s*?年/, (_,y)=>"甲乙丙丁戊己庚辛壬癸".charAt((y-4)%10)+ "子丑寅卯辰巳午未申酉戌亥".charAt((y-4)%12))
	// new Date().toLocaleString('ja-JP-u-ca-chinese')
	import cache from "@/commit/cache.js"
	import {
		get60s
	} from "@/commit/api.js"
	export default {
		data() {
			return {
				picture: '',
				droImg: false,
				currentIndex: 0,
				chinanData: '',
				tabbarList: [
					// {
					// 	name: '国内早报',
					// 	activeIcon: 'count-fill',
					// 	inactiveIcon: 'menu',
					// 	url: 'http://bjb.yunwj.top/php/60miao/qq.php',
					// },
					{
						name: '60s读懂世界',
						activeIcon: 'discover-fill',
						inactiveIcon: 'discover',
						url: 'https://api.vvhan.com/api/60s'
					},
					{
						name: '微博热搜',
						activeIcon: 'honor',
						inactiveIcon: 'honor',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true,
						url: 'https://api.vvhan.com/api/wbhot'
					}, {
						name: '抖音热搜',
						activeIcon: 'honor',
						inactiveIcon: 'honor',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true,
						url: 'https://api.vvhan.com/api/hotlist?type=douyinHot'
					},
					{
						name: '职场日历',
						activeIcon: 'honor',
						inactiveIcon: 'honor',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true,
						url: 'https://api.vvhan.com/api/zhichang'
					}, {
						name: '摸鱼日历',
						activeIcon: 'honor',
						inactiveIcon: 'honor',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true,
						url: 'https://api.vvhan.com/api/moyu'
					},


				],
			}
		},
		onLoad() {
			if (!uni.getStorageSync('NEWDATA')) {
				this.get60data()
			} else {
				this.chinanData = uni.getStorageSync('NEWDATA')
				this.droImg = true
			}

		},
		methods: {

			fail(v) {
				console.log(v)
			},
			done(v) {
				console.log('绘制完成:')
			},
			save() {
				let curr = this.currentIndex
				switch (curr) {

					case 1:
						break;
					case 2:
						break;

					default:
						uni.downloadFile({
							url: this.tabbarList[curr].url, //仅为示例，并非真实的资源
							success: (res) => { 
								if (res.statusCode === 200) {
									uni.showToast({
										title: '保存成功',
										icon: 'none'
									})
								} else {
									uni.showToast({
										title: '保存失败',
										icon: 'none'
									})
								}
							},
							fail(e) {
								console.log(e)
								uni.showToast({
									title: '保存失败',
									icon: 'none'
								})
							}
						});
						break;
				}

				// this.$refs.poster.canvasToTempFilePathSync({
				// 	fileType: 'jpg',
				// 	quality: 1,
				// 	success: (res) => {
				// 		console.log(res.tempFilePath)
				// 		this.picture = res.tempFilePath
				// 		this.saveImage()
				// 	},
				// 	fail(e) {
				// 		console.log('???????????', e)
				// 	}
				// })
			},
			// 保存图征
			saveImage() {
				// #ifndef H5
				uni.saveImageToPhotosAlbum({
					filePath: this.picture,
					success(res) {
						uni.showToast({
							title: '已保存到相册',
							icon: 'success',
							duration: 2000
						});
					},
					fail(e) {
						console.log(e)
					}
				});
				// #endif
			},

			open(e) {
				console.log(e)
				uni.navigateTo({
					url: '/pages/webView/webView?url=' + e,
				})
			},
			tabChange(index) {
				this.currentIndex = index

			},
			get60data() {
				uni.showLoading({
					title: '加载中...'
				})
				get60s().then((res) => {
					console.log(res)
					if (!res.data) {
						uni.hideLoading()
						uni.showToast({
							title: '服务器被挤爆啦！',
							icon: 'none'
						})
					} else {
						uni.hideLoading()
						uni.setStorageSync('NEWDATA', res.data)
						this.chinanData = res.data
						this.droImg = true
					}
				})
			}
		}
	}
</script>

<style scoped>
	page {
		background-image: url('../../static/Chatbot01.png');
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}

	.begin {
		width: calc(100% - 40rpx);
		margin: 0 auto;
		text-align: center;
	}

	.topBox {
		text-align: center;
		width: 630rpx;
		margin: 0 auto;
		border: 1rpx solid #dedede;

	}

	.login__info__item__button {
		width: 80%;
		margin: 0 auto;
		background-image: repeating-linear-gradient(-45deg, #9A5CE5, #00C3FF);
		margin-bottom: 100rpx;
	}

	.listData {
		width: 630rpx;
		margin: 0 auto;
		text-align: justify;
		margin-top: 20rpx;
		padding: 0rpx 20rpx 0rpx 20rpx;
	}

	.riBox {
		justify-content: space-between;
		text-align: center;
		font-weight: bolder;
		color: #eb6430;
		border: 2rpx dotted #eb6430;
		width: 630rpx;
		margin: 0 auto;
		display: flex;
		padding: 10rpx;
	}
</style>