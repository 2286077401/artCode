<template>
	<view class="box">
		<view class="box_top"> <text class="tn-icon-constellation" @click="tn('/pages/drwPubil/drwPubil')"></text>前往画廊
		</view>
		<view class="titleNav">
			<text>描述语句</text>
			<view style="display: flex;">
				<!-- <text @click="showProm">内置提示词</text> -->
				<text style="margin-left: 20rpx;" @click="showPop = true">参数详情</text>
			</view>
		</view>
		<view class="topCenter">
			<textarea placeholder="例如：一只猫咪懒洋洋的躺在窗边的桌子上晒着太阳" class="textarer" maxlength="500"
				v-model="drwData.prompt"></textarea>
			<view class="tetxNum">
				<view style="color: gray;">
					<span>{{drwData.prompt.length}}/500</span>
				</view>
				<view style="color: gray;">
					<span style="font-size: 22rpx;">{{randomStyle}} </span>
					<text class="tn-icon-refresh tn-color-black" style="font-size: 30rpx;margin-left: 20rpx;"
						@click="getRandomStyle()"></text>
				</view>
			</view>
		</view>
		<view style="font-size: 20rpx;color:firebrick;padding: 10rpx;">
			推荐:【画面主体】+【画面环境】+【镜头视角】+【风格参考】+【渲染方式】, 关键词之间用'','隔开
		</view>
		<view style="padding: 10rpx;">
			<view style="padding: 8px 0px; line-height: 28px;"><span
					style="font-size: 13px; font-weight: 500;color: white;">画面大小</span></view>
			<view style="font-size: 13px; font-weight: 500;">
				<view class="el-row" style="margin-left: -10px; margin-right: -10px;">
					<view v-for="(item,index) in sizeList" :key="index" class="el-col el-col-4 sizeBox">
						<view :class="choseSize==index?'sizeBorder selectted':'sizeBorder'"
							@click="choseSizeData('--ar '+item.size,index)">
							<view style="padding: 3px 8px;">
								<view class="el-image">
									<image :src="item.path" class="el-image__inner"
										style="object-fit: cover;width: 80rpx;" mode="widthFix"></image>
								</view>
							</view>
							<view class="text-center"><span>{{item.size}}</span></view>
							<view class='text-center titleLst'><span>{{item.name}}</span>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="tn-safe-area-inset-bottom">
			<!-- <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xl tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-rocket" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">风格选择</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey">
					<text class="tn-padding-xs">多选</text>
					<text class="tn-icon-constellation"></text>
				</view>
			</view>

			<view class="tn-tag-content tn-margin tn-text-justify tn-padding-bottom">
				<view v-for="(item, index) in manner" :key="index"
					class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
					:class="[item.select ? `tn-bg-${item.color}--light tn-color-${item.color}` : 'tn-bg-gray--light tn-color-gray--dark']"
					@click="handleMannerClick(index)">
					<text :class="['tn-padding-right-xs tn-icon-' + item.icon]"></text> {{ item.title }}
				</view>
			</view> -->

			<!-- <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-lg tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-science" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">艺术家</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey">
					<text class="tn-padding-xs">多选</text>
					<text class="tn-icon-constellation"></text>
				</view>
			</view>

			<view class="tn-tag-content tn-margin tn-text-justify">
				<view v-for="(item, index) in artist" :key="index"
					class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
					:class="[item.select ? `tn-bg-${item.color}--light tn-color-${item.color}` : 'tn-bg-gray--light tn-color-gray--dark']"
					@click="handleArtistClick(index)">
					<text :class="['tn-padding-right-xs tn-icon-' + item.icon]"></text> {{ item.title }}
				</view>
			</view> -->
		</view>
		<view class='tn-tabbar-height'></view>
		<view class="choseStyle" style="position: relative;">
			<view v-if="!imageIsLoad && imageData==''" class="loading">
				<tn-empty mode="data" text='暂无绘制内容'></tn-empty>
			</view>
			<view v-if="imageIsLoad" class="loading">
				<ls-loading :fontSize='30' text="绘制中,请稍后" :embed='true' :animation="'progress'"></ls-loading>
			</view>
			<image v-if="imageData!=''" :src="imageData.image_url" style="width: 100%;" mode="widthFix"></image>
		 
			<view v-if="imageData!=''" class="grid-container">
				<view class="grid-item" v-for="item in 4" @click="choseImageIndex(item)">
					<view v-if="ImageIndex==item" class="centerBox">
						<view class='aganBtn' @click="useImage('variation'+item,'v')">精修</view>
						<view class='aganBtn' @click="useImage('upsample' + item,'u')">放大</view>
					</view>
				</view>
			</view>
		</view>
		<view class="login-sussuspension begin" style="display: flex;">
			<view class="login__info__item__button tn-cool-bg-color-7--reverse" hover-class="tn-hover"
				:hover-stay-time="150" @click="mjImageDrw()">立即生成(2积分/次)</view>
			<view v-if="imageData !=''" class="login__info__item__button tn-cool-bg-color-7--reverse"
				hover-class="tn-hover" :hover-stay-time="150" @click="saveImage()">保存本地</view>
		</view>
		<tn-popup v-model="showPop" mode="center" length="80%" height="70%">
			<styleDetail @close='showPop=false'></styleDetail>
		</tn-popup>
		<tn-popup v-model="showPramList" mode="center" length="80%" height="70%">
			<tn-subsection :list="menuLisTitle" mode="button" :borderRadius="0" backgroundColor="tn-cool-bg-color-9"
				buttonColor="tn-cool-bg-color-7" inactiveColor="#FFFFFF" activeColor="#FFFFFF"
				@change='changeData'></tn-subsection>
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xl tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-rocket" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">风格选择</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey">
					<text class="tn-padding-xs">多选</text>
					<text class="tn-icon-constellation"></text>
				</view>
			</view>
			<view class="tn-margin tn-text-justify tn-padding-bottom">
				<view v-for="(item, index) in menuChild" :key="index"
					class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
					:class="[styleIndex==index ? `tn-bg-purplered--light tn-color-gray` : 'tn-bg-gray--light tn-color-gray--dark']"
					@click="handleMannerClick(index)">
					<text class="tn-padding-right-xs tn-icon-brand"></text> {{ item.title }}
				</view>
			</view>
		</tn-popup>
	</view>
</template>

<script>
	import styleDetail from "./styleDetail.vue"
	import {
		mapState
	} from 'vuex';
	import {
		mjlow,
		mjSecend,
		mjBase,
		gitDrowproList,
		gitUserState
	} from "@/commit/api.js"
	export default {
		computed: {
			computed: {
				...mapState(['imageData', "imageIsLoad"]),
			},
			gridItemWidth() {
				return 100 / this.col + '%'
			}
		},
		components: {
			styleDetail
		},
		data() {
			return {
				showPramList: false,
				showPop: false,
				choseSize: 90,
				sizeList: [{
						name: '头像图',
						size: '1:1',
						path: 'https://oss.laf.run/nupa44-bits/size/1b1.png'
					},
					{
						name: '手机屏幕',
						size: '2:1',
						path: 'https://oss.laf.run/nupa44-bits/size/2b1.png'
					}, {
						name: '文章配图',
						size: '4:3',
						path: 'https://oss.laf.run/nupa44-bits/size/4b3.png'
					}, {
						name: '社交媒体',
						size: '3:4',
						path: 'https://oss.laf.run/nupa44-bits/size/3b4.png'
					}, {
						name: '电脑壁纸',
						size: '16:9',
						path: 'https://oss.laf.run/nupa44-bits/size/16b9.png'
					}, {
						name: '宣传海报',
						size: '9:16',
						path: 'https://oss.laf.run/nupa44-bits/size/9b16.png'
					}
				],
				isSave: true,
				manner: [{
						icon: "brand",
						title: "插画",
						color: 'red',
						select: false
					},
					{
						icon: "brand",
						title: "动漫风",
						color: 'cyan',
						select: false
					},
					{
						icon: "brand",
						title: "虚幻引擎",
						color: 'blue',
						select: false
					},
					{
						icon: "brand",
						title: "电影打光",
						color: 'green',
						select: false
					},
					{
						icon: "fire-fill",
						title: "赛博朋克",
						color: 'orange',
						select: false
					},
					{
						icon: "brand",
						title: "超现实主义",
						color: 'purplered',
						select: false
					},
					{
						icon: "brand",
						title: "油画",
						color: 'purple',
						select: false
					},
					{
						icon: "brand",
						title: "国画",
						color: 'orangered',
						select: false
					},
					{
						icon: "brand",
						title: "水彩",
						color: 'orangeyellow',
						select: false
					}
				],
				artist: [{
						icon: "light",
						title: "齐白石",
						color: 'red',
						select: false
					},
					{
						icon: "light",
						title: "爱德华·利尔",
						color: 'cyan',
						select: false
					},
					{
						icon: "light",
						title: "梵高",
						color: 'blue',
						select: false
					},
					{
						icon: "light",
						title: "伦勃朗",
						color: 'green',
						select: false
					},
					{
						icon: "light",
						title: "常玉",
						color: 'orange',
						select: false
					},
					{
						icon: "fire-fill",
						title: "吴冠中",
						color: 'purplered',
						select: false
					},
					{
						icon: "light",
						title: "穆夏",
						color: 'purple',
						select: false
					},
					{
						icon: "light",
						title: "毕加索",
						color: 'orangered',
						select: false
					},
					{
						icon: "light",
						title: "李可染",
						color: 'orangeyellow',
						select: false
					}
				],

				currentIndex: 0,
				col: 3,
				drwData: {
					action: 'generate',
					prompt: '', //描述词
					image_id: "", //图像 ID。在第一次生成预览图时，不需要指定该字段。在后续需要对图像进行处理时，需要指定该字段，代表待处理图像的 ID。该 ID 即为第一次生成预览图时返回的 image_id 字段
					timeout: 60000, //超时时间
					callback_url: "", //异步结果
				},
				ImageIndex: '9999',
				menuList: [],
				menuLisTitle: [],
				menuChild: [],
				styleIndex: 0, //风格选择
				randomStyle: "",
			}
		},

		onShow() {
			this.imageData;
			this.imageIsLoad;
		},

		mounted() {
			this.getProList()
			// this.getStatus()
		}, 
		methods: {
			changeData(e) {
				this.menuChild = this.menuList[e.index].list
				console.log(this.menuChild)
			},
			getSocketResu() {
				// let imageData = uni.getStorageSync('IMAGE_DATA')
				this.getStatus()
			},
			getStatus() {
				gitUserState().then((res) => {
					if (res.code == 200) {
						if (res.isLoading) {
							uni.showToast({
								title: '正在绘制，具体绘制结果在画夹查看',
								icon: "none"
							})
							// this.imageIsLoad = true
						}
						// else {
						// 	this.$store.commit('changeimageLoad', res.data);
						// }
					} else {
						uni.showToast({
							title: '查询失败',
							icon: "none"
						})
					}
				})
			},
			choseSizeData(e, index) {
				var regex = / --ar (.*)/;
				if (!regex.test(this.drwData.prompt)) {
					this.drwData.prompt += ' ' + e;
				} else {
					// var newString = this.drwData.prompt.replace(regex, ' ' + e);
					// this.drwData.prompt = newString
					this.drwData.prompt = this.drwData.prompt.replace(new RegExp("--ar\\s+\\S+", "g"), "")
					this.drwData.prompt = this.drwData.prompt.replace(/(^\s*)|(\s*$)/g, "") + ' ' + e
				}
				this.choseSize = index
			},
			showProm() {
				this.showPramList = true
			},
			getProList() {
				this.menuLisTitle = []
				if (!uni.getStorageSync('MENU_LIST')) {
					gitDrowproList().then((res) => {
						if (res.code == 200) {
							console.log(res)
							this.menuList = res.data
							uni.setStorageSync('MENU_LIST', res.data)
							let randomData = this.menuList[Math.floor(Math.random() * this.menuList.length)].list;
							let data = randomData[Math.floor(Math.random() * randomData.length)]
							this.randomStyle = data.detail + data.keyword

							this.menuList.map((res) => {
								this.menuLisTitle.push(res.type)
							})
						}
					})
				} else {
					this.menuList = uni.getStorageSync('MENU_LIST')
					this.menuList.map((res) => {
						this.menuLisTitle.push(res.type)
					})
					console.log(this.menuLisTitle)
				}

			},
			getRandomStyle() {
				if (this.drwData.prompt.length >= 500) {


				} else {
					let randomData = this.menuList[Math.floor(Math.random() * this.menuList.length)].list;
					let data = randomData[Math.floor(Math.random() * randomData.length)]
					this.randomStyle = data.detail + data.keyword
					this.drwData.prompt += ' ' + data.keyword
				}

			},
			saveImage() {
				// #ifdef MP-WEIXIN
				wx.showLoading({
					title: '加载中...'
				});
				//wx.downloadFile方法：下载文件资源到本地
				wx.downloadFile({
					url: this.imageData.image_url, //图片地址
					success: function(res) {
						//wx.saveImageToPhotosAlbum方法：保存图片到系统相册
						wx.saveImageToPhotosAlbum({
							filePath: res.tempFilePath, //图片文件路径
							success: function(data) {
								wx.hideLoading(); //隐藏 loading 提示框
								wx.showModal({
									title: '提示',
									content: '保存成功',
									modalType: false,
								})
							},
							// 接口调用失败的回调函数
							fail: function(err) {
								if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err
									.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err
									.errMsg === "saveImageToPhotosAlbum:fail authorize no response"
								) {
									wx.showModal({
										title: '提示',
										content: '需要您授权保存相册',
										modalType: false,
										success: modalSuccess => {
											wx.openSetting({
												success(settingdata) {
													if (settingdata
														.authSetting[
															'scope.writePhotosAlbum'
														]) {
														wx.showModal({
															title: '提示',
															content: '获取权限成功,再次点击按钮即可保存',
															modalType: false,
														})
													} else {
														wx.showModal({
															title: '提示',
															content: '获取权限失败，将无法保存到相册',
															modalType: false,
														})
													}
												},
												fail(failData) {
													console.log("failData",
														failData)
												},
												complete(finishData) {
													console.log("finishData",
														finishData)
												}
											})
										}
									})
								}
							},
							complete(res) {
								wx.hideLoading();
							}
						})
					}
				})
				// #endif
			},
			useImage(e, type) {
				uni.showModal({
					title: '提示',
					content: type == 'v' ? '是否确认精修当前风格图？' : '是否确认放大当前图片？',
					cancelText: "取消", // 取消按钮的文字 
					confirmText: "确认", // 确认按钮文字 
					showCancel: true, // 是否显示取消按钮，默认为 true
					confirmColor: '#999999',
					cancelColor: '#39B54A',
					success: (res) => {
						if (res.confirm) {
							if (type == 'u') {
								this.isSave = true
							} else {
								this.isSave = false
							}
							this.drwData.image_id = this.imageData.image_id
							this.drwData.action = e
							this.currentIndex = 0
							this.drwData.prompt = ''
							this.$store.dispatch('mjImageDrw', this.drwData)
						}
					}
				})

			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
					fail(e) {
						console.log(e)
					}
				});
			},
			// 处理风格点击事件
			handleMannerClick(index) {
				this.styleIndex = index
			},
			// 处理艺术家点击事件
			handleArtistClick(index) {

			},
			choseImageIndex(index) {
				this.ImageIndex = index
			},
			mjImageDrw() {
				if (this.imageIsLoad) {
					uni.showToast({
						title: '不要着急，正在努力生成！',
						icon: 'none'
					})
					return false
				}
				if (this.drwData.prompt == '') {
					uni.showToast({
						title: '请先输入描述词',
						icon: 'none'
					})
					return false
				}
				// image_id
				// action
				this.currentIndex = 0
				this.drwData.image_id = ''
				this.$store.dispatch('mjImageDrw', this.drwData)
				uni.showModal({
					title: '提示',
					content: '绘制开始是否前往画夹查看？',
					cancelText: "取消", // 取消按钮的文字 
					confirmText: "确认", // 确认按钮文字 
					showCancel: true, // 是否显示取消按钮，默认为 true
					confirmColor: '#999999',
					cancelColor: '#39B54A',
					success: (res) => {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/history/history'
							})
						}
					}
				})
			},
		},

	}
</script>

<style scoped lang="scss">
	.sizeBox {
		padding: 0px 3px;
		text-align: justify;
		color: rgb(255, 255, 255);
		cursor: pointer;
	}

	.sizeBorder {
		border: 1px solid whitesmoke;
		border-radius: 3px;
		margin: 0px auto;
		padding: 3px 0px;
	}

	.el-row:after,
	.el-row:before {
		content: "";
	}

	.el-row {
		position: relative;
	}

	.el-row {
		box-sizing: border-box;
	}

	.el-row:after,
	.el-row:before {
		display: table;
	}

	.el-row:after {
		clear: both;
	}

	[class*=el-col-] {
		box-sizing: border-box;
		float: left;
	}

	.el-col-4 {
		width: 16.66667%;
	}

	.el-image__inner {
		height: 100%;
		width: 100%;
	}

	.el-image {
		display: inline-block;
		overflow: hidden;
		position: relative;
	}

	.el-image__inner {
		vertical-align: top;
	}

	*,
	:after,
	:before {
		box-sizing: border-box;
	}

	img {
		vertical-align: middle;
	}

	.text-center {
		text-align: center !important;
	}



	.selectted {
		border: 1px solid #409eff;
		color: #409eff;
	}


	.titleLst {
		font-size: 10rpx;

	}

	.titleNav {
		color: white;
		padding: 10rpx;
		display: flex;
		justify-content: space-between;
	}

	.tn-tag-content {
		border-radius: 20rpx;
		background-color: #ffffff80;
		box-shadow: 8rpx 8rpx 20rpx 2rpx #ffffff50;
		margin: 0 auto;
		margin-top: 30rpx;
		padding: 20rpx;

		&__item {
			display: inline-block;
			line-height: 45rpx;
			padding: 10rpx 30rpx;
			margin: 20rpx 20rpx 5rpx 0rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	.loading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.tn-icon-fire-fill {
		color: red;
	}


	.choseSizeAct {
		border: 4rpx solid #43e97b;
	}

	.styleActive {
		/deep/ .tn-grid-item__box {
			border: 4rpx solid #43e97b;
			// background: linear-gradient(-120deg, #9A5CE5, #01BEFF, #00F5D4, #43e97b);
		}
	}



	.box {
		background: linear-gradient(-120deg, #9A5CE5, #01BEFF, #00F5D4, #43e97b);
		padding: 20rpx;
		padding-top: 30rpx;
		height: 100vh;
		overflow-y: scroll;
		padding-bottom: 150rpx;

		&_top {
			width: 98%;
			text-align: right;
			color: white;
			padding-bottom: 20rpx;
		}

		.title {
			font-weight: bolder;
		}

		.begin {
			width: calc(100% - 40rpx);
			position: fixed;
			bottom: 200rpx;

			.login__info__item__button {
				width: 80%;
				margin: 0 auto;
				background-image: repeating-linear-gradient(-45deg, #9A5CE5, #00C3FF);
				letter-spacing: .1em;
			}
		}

		.choseStyle {
			width: 700rpx;
			min-height: 700rpx;
			border-radius: 20rpx;
			background-color: #ffffff80;
			box-shadow: 8rpx 8rpx 20rpx 2rpx #ffffff50;
			margin: 0 auto;
			margin-top: 30rpx;
			padding: 20rpx;

			.grid-container {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				display: grid;
				grid-template-columns: repeat(2, 330rpx);
				/* 创建两列，每列宽度为100px */
				// grid-template-rows: repeat(2, 330rpx);
				/* 创建两行，每行高度为100px */
				padding: 20rpx;
			}

			.aganBtn {
				padding: 5rpx 10rpx 5rpx 10rpx;
				margin-bottom: 10rpx;
				border-radius: 20rpx;
				width: 100rpx;
				background-color: #00ccffc4;
			}

			.grid-item {
				// display: flex;
				// flex-direction: column;
				// justify-content: center;
				// justify-items: center;
				// align-items: center;
				// text-align: center;
				color: white;
				font-weight: bolder;
				position: relative;

				.centerBox {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					text-align: center;
				}
			}

			/deep/ .tn-grid-item {
				background-color: #00000000;
				height: 150rpx;
				margin-top: 20rpx;
				width: 200rpx;
				padding: 0;
				border-radius: 20rpx;

			}

			/deep/.tn-grid-item__box {
				box-shadow: 0rpx 5rpx 20rpx 2rpx #ffffff50;
				border-radius: 20rpx;
				width: 200rpx;
				background-color: #f5f5f599;

			}
		}





		.topCenter {
			border-radius: 20rpx;

			width: 700rpx;

			margin: 0 auto;
			padding: 20rpx;
			background-color: #ffffff80;
			box-shadow: 8rpx 8rpx 20rpx 2rpx #ffffff50;

			.textarer {
				width: 100%;
				height: 100%;
				height: 300rpx;
				font-size: 25rpx;
				// box-shadow: ;
			}

			.tetxNum {
				display: flex;
				justify-content: space-between;
			}
		}


	}
</style>