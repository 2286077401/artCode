<template>
	<view class="tn-safe-area-inset-bottom">
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>

		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back'>
				<text class='icon tn-icon-left' @click="goBack"></text>
				<text class='icon tn-icon-home-capsule-fill' @click="goBackIndex"></text>
			</view>
		</tn-nav-bar>
		<view class="tn-color-white">
			<view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur button-3"
				@tap="showLandscape">
				<view class="tn-icon-level"></view>
			</view>
			<!-- 		<view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur button-2"
				@click="tn('/pageA/author/author')">
				<view class="tn-icon-my"></view>
			</view>
			<view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur button-1"
				@click="tn('/pageB/chat/chat')">
				<view class="tn-icon-comment"></view>
			</view> -->
		</view>


		<view>
			<l-painter css="width: 750rpx;height:100vh; display:flex;justify-content: center;align-items: center;"
				@fail="fail" @done="done" pathType="url" ref="poster" performance>
				<l-painter-image :src="itemData.image_url" css="background: #ffffff;  width: 750rpx;"></l-painter-image>
			</l-painter>
			<!-- 比例图文 start-->
			<!-- <view class="tn-flex tn-flex-wra "> -->
			<!-- object-fit: cover; height: 100%;font-size: 16rpx;font-weight: 300;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%); -->
			<!-- <image :src="itemData.image_url" class="image-book" style="width: 100%;" mode="widthFix"></image> -->

			<!-- </view> -->
			<!-- 比例图文 end-->
		</view>

		<!-- 页面内容 -->
		<!-- <view class="slideshow">
      <view class="slideshow-image" style="background-image: url('https://cdn.nlark.com/yuque/0/2022/png/280373/1670834344295-assets/web-upload/38d7e292-ee43-4398-a1ed-a60ceec2436b.png')"></view>
    </view> -->

		<!-- 底部tabbar start-->
		<view class="tabbar footerfixed dd-glass tn-color-white" style="border-radius: 100rpx;">
			<view class="action">
				<view class="bar-icon">
					<view class="tn-icon-like-lack">
					</view>
					<!-- <image class="" src='https://resource.tuniaokj.com/images/tabbar/a1.png'></image> -->
				</view>
				<view class="">收藏</view>
			</view>

			<view class="action" @click="save(itemData.image_url)">
				<view class="bar-icon">
					<view class="tn-icon-download">
					</view>
					<!-- <image class="" src='https://resource.tuniaokj.com/images/tabbar/k2.png'></image> -->
				</view>
				<view class="">下载</view>
				<!-- 				<view class="" @click="saveImage(itemData.image_url)">下载</view> -->
			</view>
			<!-- <view class="action" @click="save">
				<view class="bar-icon">
					<view class="tn-icon-flower">
					</view>
				</view>
				<view class="">海报</view>
			</view> -->
			<view class="action" v-if="type==2">
				<button class="tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-button--clear-style"
					open-type="share">
					<view class="bar-icon">
						<view class="tn-icon-send">
						</view>
						<!-- <image class="" src='https://resource.tuniaokj.com/images/tabbar/d2.png'></image> -->
					</view>
					<view class="">公开</view>
				</button>
			</view>
			<view class="action" v-else @click="wring">
				<button class="tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-button--clear-style"
					open-type="share">
					<view class="bar-icon">
						<view class="tn-icon-warning">
						</view>
						<!-- <image class="" src='https://resource.tuniaokj.com/images/tabbar/d2.png'></image> -->
					</view>
					<view class="">举报</view>
				</button>
			</view>
		</view>

		<!-- 压屏窗-->
		<tn-landscape :show="show1" @close="closeLandscape" closePosition="bottom" :closeSize="60">
			<view class="tn-color-white" style="width: 100vw;">

				<view class="" style="margin: 120rpx 60rpx;">
					<view class="tn-flex tn-flex-col-top">

						<view class="">
							<view class="logo-pic tn-shadow">
								<view class="logo-image">
									<view class="tn-shadow-blur"
										style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699053-assets/web-upload/8645ea3a-e0a9-4422-8364-cc5ede305c9f.jpeg');width: 100rpx;height: 100rpx;background-size: cover;">
									</view>
								</view>
							</view>
							<view class="tn-icon-sex-male"
								style="position: absolute;margin: -105rpx 0 0 72rpx;border-radius: 100rpx;background-color: #FFFFFF;color: #FF71D2;padding: 5rpx;">
							</view>
						</view>
						<view class="tn-padding-left-sm tn-padding-top-xs" style="width: 100%;">
							<view class="tn-flex tn-flex-row-between tn-flex-col-between">
								<view class="justify-content-item">
									<text class="tn-text-lg tn-text-bold">{{itemData.userName}}</text>
									<!-- <text class="tn-padding-left-sm tn-padding-right-xs">天使座</text> -->
									<text class="tn-icon-con-virgo"></text>
								</view>
								<!-- <view class="justify-content-item tn-round tn-text-xs tn-bg-orangered--light tn-color-orangered" style="padding: 5rpx 15rpx;">
                  <text class="tn-icon-warning-fill tn-padding-right-xs"></text> 举报
                </view> -->
							</view>
							<view class="tn-padding-top-xs">
								<view class="">
									<text
										class="tn-text-df tn-color-gray--light">{{itemData.creatTime||itemData.data}}</text>
								</view>
							</view>
						</view>
					</view>


					<view class="tn-flex tn-flex-row-between tn-flex-col-between tn-margin-top-xl tn-text-justify">
						<text class="">{{itemData.prompt||''}}</text>
					</view>
				</view>


			</view>
		</tn-landscape>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show1: false,
				itemData: '',
				type: '1',
			}
		},
		onLoad(e) { 
			this.type = e.type
			this.itemData = JSON.parse(uni.getStorageSync('imgData'))
		},
		methods: {
			wring() {
				uni.showToast({
					title: '反馈成功',
					icon: 'none'
				})
			},
			save(path) {
				// #ifdef H5
				var oA = document.createElement("a");
				oA.download = 'aiChat.png'; // 设置下载的文件名，默认是'下载'
				oA.href = path; // 图片url
				oA.target = "_blank"; // 打开在新标签页或新窗口
				document.body.appendChild(oA);
				oA.click();
				oA.remove(); // 下载之后把创建的元素删除
				// #endif

				// #ifndef H5
				this.$refs.poster.canvasToTempFilePathSync({
					fileType: 'jpg',
					quality: 1,
					success: (res) => { 
						this.picture2 = res.tempFilePath
						this.saveImage()
					},
					fail(e) {
						console.log('???????????', e)
					}
				})

				// #endif


				// // #ifdef APP
				// uni.showLoading({
				// 	title: '下载中'
				// })
				// var self = this
				// uni.downloadFile({
				// 	url: e,
				// 	success(res) {
				// 		if (res.statusCode === 200) {
				// 			uni.saveImageToPhotosAlbum({ //保存图片到系统相册。
				// 				filePath: res.tempFilePath, //图片文件路径
				// 				success: function() {
				// 					uni.showToast({
				// 						title: '图片保存成功',
				// 						icon: 'none',
				// 					});
				// 				},
				// 				fail: function(e) {
				// 					uni.showToast({
				// 						title: '图片保存失败',
				// 						icon: 'none',
				// 					});
				// 				}
				// 			});
				// 		}
				// 	},
				// 	fail: (err) => {
				// 		uni.showToast({
				// 			title: '保存失败',
				// 			icon: "none"
				// 		})
				// 	}
				// });

				// // #endif

				// // #ifdef MP-WEIXIN
				// wx.showLoading({
				// 	title: '加载中...'
				// });
				// //wx.downloadFile方法：下载文件资源到本地
				// wx.downloadFile({
				// 	url: e, //图片地址
				// 	success: function(res) {
				// 		//wx.saveImageToPhotosAlbum方法：保存图片到系统相册
				// 		wx.saveImageToPhotosAlbum({
				// 			filePath: res.tempFilePath, //图片文件路径
				// 			success: function(data) {
				// 				wx.hideLoading(); //隐藏 loading 提示框
				// 				wx.showModal({
				// 					title: '提示',
				// 					content: '保存成功',
				// 					modalType: false,
				// 				})
				// 			},
				// 			// 接口调用失败的回调函数
				// 			fail: function(err) {
				// 				if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err
				// 					.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err
				// 					.errMsg === "saveImageToPhotosAlbum:fail authorize no response"
				// 				) {
				// 					wx.showModal({
				// 						title: '提示',
				// 						content: '需要您授权保存相册',
				// 						modalType: false,
				// 						success: modalSuccess => {
				// 							wx.openSetting({
				// 								success(settingdata) {
				// 									if (settingdata
				// 										.authSetting[
				// 											'scope.writePhotosAlbum'
				// 										]) {
				// 										wx.showModal({
				// 											title: '提示',
				// 											content: '获取权限成功,再次点击按钮即可保存',
				// 											modalType: false,
				// 										})
				// 									} else {
				// 										wx.showModal({
				// 											title: '提示',
				// 											content: '获取权限失败，将无法保存到相册',
				// 											modalType: false,
				// 										})
				// 									}
				// 								},
				// 								fail(failData) {
				// 									console.log("failData",
				// 										failData)
				// 								},
				// 								complete(finishData) {
				// 									console.log("finishData",
				// 										finishData)
				// 								}
				// 							})
				// 						}
				// 					})
				// 				}
				// 			},
				// 			complete(res) {
				// 				wx.hideLoading();
				// 			}
				// 		})
				// 	}
				// })
				// // #endif
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
				});
				// #endif
			},
			done(v) {
				console.log('绘制完成:')
			},
			goBackIndex() {
				uni.redirectTo({
					url: "/pages/index/index"
				})
			},
			goBack() {
				uni.navigateBack()
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},

			// 弹出压屏窗
			showLandscape() {
				this.openLandscape()
			},
			// 打开压屏窗
			openLandscape() {
				this.show1 = true
			},
			// 关闭压屏窗
			closeLandscape() {
				this.show1 = false
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tn-safe-area-inset-bottom,
	.tn-flex-wra {
		// height: 100vh;
	}

	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 100%;
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

		&:before {
			content: " ";
			width: 1rpx;
			height: 110%;
			position: absolute;
			top: 22.5%;
			left: 0;
			right: 0;
			margin: auto;
			transform: scale(0.5);
			transform-origin: 0 0;
			pointer-events: none;
			box-sizing: border-box;
			opacity: 0.7;
			background-color: #FFFFFF;
		}
	}

	/* 页面阴影 start*/
	.img-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
		height: 100%;
	}

	.image-book {
		height: 100%;
		font-size: 16rpx;
		font-weight: 300;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.image-picbook {
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
		// clip-path: polygon(160rpx 0, 100% 0, 100% 100%, 0 100%, 0 60rpx,145rpx 50rpx);
	}

	/* 文章内容 end*/

	/* 图标容器15 start */
	.icon15 {
		&__item {
			width: 30%;

			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 100rpx;
				height: 100rpx;
				font-size: 50rpx;
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


				}
			}
		}
	}

	/* 按钮 */
	.button-1 {
		background-color: rgba(0, 0, 0, 0.15);
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		top: 25%;
		right: 30rpx;
		z-index: 1001;
		border-radius: 100px;
	}

	.button-2 {
		background-color: rgba(0, 0, 0, 0.15);
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		top: 35%;
		right: 30rpx;
		z-index: 1001;
		border-radius: 100px;
	}

	.button-3 {
		background-color: rgba(0, 0, 0, 0.15);
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		top: 45%;
		right: 30rpx;
		z-index: 1001;
		border-radius: 100px;
	}

	/* 相册 start*/
	.slideshow {
		top: 0;
		position: absolute;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}



	/* 用户头像 start */
	.logo-image {
		width: 100rpx;
		height: 100rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border: 6rpx solid rgba(255, 255, 255, 0.25);
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 底部tabbar start*/
	/* 毛玻璃*/
	.dd-glass {
		width: 100%;
		backdrop-filter: blur(20rpx);
	}

	.footerfixed {
		position: fixed;
		// margin: 20rpx;
		margin: 40rpx 5%;
		width: 90%;
		bottom: calc(env(safe-area-inset-bottom) / 2);
		;
		z-index: 999;
		background-color: rgba(0, 0, 0, 0.15);
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.tabbar {
		display: flex;
		align-items: center;
		min-height: 110rpx;
		justify-content: space-between;
		padding: 0;
		height: calc(110rpx + env(safe-area-inset-bottom) / 2);
		// padding-bottom: calc(env(safe-area-inset-bottom) / 2);
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
	}

	.tabbar .action .bar-icon image {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
	}
</style>