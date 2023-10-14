<template>
	<view style="padding-bottom: 100rpx;">
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>

		<scroll-view :scroll-y="true" :style="{paddingTop:statusBarHeight}" class="scroll-Y"
			:scroll-with-animation="true">
			<!-- :style="{paddingTop: vuex_custom_bar_height + 'px'}" -->
			<view class="" v-for="(item,index) in historyTextList" :key="index">
				<view class="tn-text-justify">
					<view class="tn-margin tn-no-margin-top" v-if="item.role=='assistant'">
						<view class="tn-flex tn-flex-row-between tn-flex-col-center">
							<view class="justify-content-item">
								<view class="tn-flex tn-flex-col-top tn-flex-row-left">
									<view class="logo-pic tn-margin-top-sm"
										style="background-image:url('https://oss.laf.run/nupa44-bits/chatlogo.png')">
										<view class="logo-image">
										</view>
									</view>
									<view class="tn-padding-right tn-color-black">
										<view class="tn-padding-left-sm tn-text-bold tn-margin-top-sm"
											style="max-width: 62vw;">
											星火
										</view>
										<view class="tn-flex tn-flex-col-center">
											<view class="tn-bg-gray--light tn-margin-sm tn-padding-sm"
												style="max-width: 62vw;border-radius: 0 15rpx 15rpx 15rpx;">
												<ua-markdown :source="item.content || '加载中...'" :showLine="false" />
												<text @tap="copy(item.content)" class="tn-icon-copy-fill"
													style="width: 100%;text-align: left;"></text>
											</view>
											<view class="">
												<!-- 发送失败 -->
												<!-- <text class="tn-icon-warning-fill tn-color-purplered tn-text-xxl"></text> -->
											</view>
										</view>

									</view>

								</view>
							</view>
							<view class="justify-content-item">
								<!-- 预留空位 -->
							</view>
						</view>
					</view>
					<view class="tn-margin tn-no-margin-top" v-if="false">
						<view class="tn-flex tn-flex-row-between tn-flex-col-center">
							<view class="justify-content-item">
								<view class="tn-flex tn-flex-col-top tn-flex-row-left">
									<view class="logo-pic tn-margin-top-sm"
										style="background-image:url('https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg')">
										<view class="logo-image">
										</view>
									</view>
									<view class="tn-padding-right tn-color-black">
										<view class="tn-padding-left-sm tn-text-bold tn-margin-top-sm"
											style="max-width: 62vw;">
											抓住那只猪
										</view>
										<view class="tn-flex tn-flex-col-center">
											<view class="tn-margin-sm" style="max-width: 62vw;">
												<view class="bg-img-cont tn-shadow-blur"
													style="background-image:url('https://resource.tuniaokj.com/images/content/rodion.jpg');">
												</view>
											</view>
											<view class="">
												<!-- 发送失败 -->
												<!-- <text class="tn-icon-warning-fill tn-color-purplered tn-text-xxl"></text> -->
											</view>
										</view>

									</view>

								</view>
							</view>
							<view class="justify-content-item">
								<!-- 预留空位 -->
							</view>
						</view>
					</view>
					<view class="tn-margin tn-no-margin-top" v-if="item.role=='user'">
						<view class="tn-flex tn-flex-row-between tn-flex-col-center">
							<view class="justify-content-item">
								<!-- 预留空位 -->
							</view>
							<view class="justify-content-item">
								<view class="tn-flex tn-flex-col-top tn-flex-row-left">
									<view class="tn-padding-left tn-color-black">
										<view class="tn-padding-right tn-text-bold tn-margin-top-sm tn-text-right"
											style="max-width: 62vw;">
											我
										</view>
										<view class="tn-flex tn-flex-col-center">
											<view class="" v-if="item.conten == '发送失败'">
												<!-- 发送失败 -->
												<text
													class="tn-icon-warning-fill tn-color-purplered tn-text-xxl"></text>
											</view>
											<view class="tn-bg-gray--light tn-margin-sm tn-padding-sm"
												style="max-width: 62vw;border-radius: 15rpx 0 15rpx 15rpx;">
												<ua-markdown :source="item.content || '加载中...'" :showLine="false" />

											</view>
										</view>
									</view>
									<view class="logo-pic tn-margin-top-sm"
										style="background-image:url('https://oss.laf.run/nupa44-bits/12aff9074a7a6692e785266073e1ebe1_1.jpg')">
										<view class="logo-image">
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="tabbar footerfixed tn-bg-white">
			<view class="tn-flex tn-flex-row-between tn-flex-col-center">
				<view class="justify-content-item tn-margin-top" style="flex: 1;">
					<view class="tn-flex tn-flex-row-center tn-flex-col-center">
						<!-- <view class="tn-flex tn-flex-row-center tn-padding-right tn-padding-left">
		          <text class="tn-icon-emoji-good tn-text-xxl"></text>
		        </view> -->
						<view class="tn-flex tn-flex-row-center tn-flex-col-center tn-padding-right tn-padding-left-sm">
							<view
								class="icon27__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-gray">
								<view class="tn-icon-add-circle"></view>
							</view>
							<!-- <view class="icon27__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-text-shadow-orange">
		            <view class="">??</view>
		          </view> -->
							<!-- <view class="avatar-all">
		            <view class="tn-shadow-blur" style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699053-assets/web-upload/8645ea3a-e0a9-4422-8364-cc5ede305c9f.jpeg');width: 60rpx;height: 60rpx;background-size: cover;">
		            </view>
		          </view> -->
						</view>
						<view
							class="topic__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left "
							style="flex: 1;">
							<!-- <view class="topic__info__item__input__left-icon">
		            <view class="tn-icon-emoji-good"></view>
		          </view> -->
							<view class="topic__info__item__input__content">
								<input v-model="TEXT" maxlength="20" :disabled="isLoading"
									placeholder-class="input-placeholder" placeholder="请输入内容" :cursor-spacing="18" />
							</view>
						</view>
					</view>
				</view>
				<view @click="sendToSpark()"
					class="justify-content-item tn-flex-row-center tn-flex-col-center tn-margin-top tn-margin-right">
					<view class="topic__info__item__sure">
						<view class="tn-flex-1 justify-content-item tn-text-center">
							<tn-button shape="round"
								class="login__info__item__button tn-cool-bg-color-7--reverse tn-color-white"
								iconColor="#ffffff" color="#98e4f3" size="normal">
								<text class="tn-color-white" hover-class="tn-hover" :hover-stay-time="150">
									<tn-loading v-if="isLoading" style="margin-right: 10rpx;"></tn-loading>发 送
								</text>
							</tn-button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <button type="default" @click="gun()" style="position: fixed;bottom: 200rpx;left: 50rpx;">滚</button> -->
	</view>
</template>

<script>
	import uaMarkdown from "@/components/ua2-markdown/ua-markdown"
	import * as base64 from "base-64"
	import CryptoJS from '@/commit/crypto-js/crypto-js.js'
	import parser from '@/commit/fast-xml-parser/src/parser'
	import * as utf8 from "utf8"
	export default {
		components: {
			uaMarkdown
		},
		// https://spark-api.xf-yun.com/v1.1/chat  V1.5 domain general
		// https://spark-api.xf-yun.com/v2.1/chat  V2.0 domain generalv2
		data() {
			return {

				isLoading: false,
				TEXT: '',
				APPID: '4ae5ca01', // 控制台获取填写
				APISecret: 'YWE0Yzk2ZTZhNWVlMWQ1OTBhYjRmNDI4',
				APIKey: 'dc335c4380bcabb37503a8c40ca68d1c',
				sparkResult: '',
				historyTextList: [], // 历史会话信息，由于最大token12000,可以结合实际使用，进行移出
				tempRes: '', // 临时答复保存
				listData: [{
					role: 'role',
					text: 'text',
					header: 'header',
					useToken: 'useToken',
					name: 'name'
				}],
				statusBarHeight: 20,
				firstTrigger: false,
			}
		},
		onLoad() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
			if (uni.getStorageSync('gptType')) {
				uni.setNavigationBarTitle({
					title: uni.getStorageSync('gptType').templateName
				});
				console.log(uni.getStorageSync('gptType'))
				this.TEXT = uni.getStorageSync('gptType').content
				// this.historyTextList.push({
				// 	"role": "user",
				// 	"content": this.TEXT
				// })
				this.sendToSpark()
			}
		},
		watch: {
			sparkResult(data) {
				if (data == '') {
					return false
				}
				if (!this.firstTrigger) {
					this.firstTrigger = true;
					this.historyTextList.push({
						"role": "assistant",
						"content": ''
					});
				} else {
					this.historyTextList[this.historyTextList.length - 1].content = data;

				}

			}
		},

		methods: {
			scrollUpdata() {
				uni.pageScrollTo({
					scrollTop: 9999,
					duration: 300,
					success: () => {
						console.log('success')
					},
					fail(err) {
						console.log(err)
					}
				})
			},

			copy(val) {
				uni.setClipboardData({
					data: this.answer || val,
					success: function() {
						uni.showToast({
							title: '复制成功',
							icon: 'none'
						})
					}
				});
			},
			async sendToSpark() {
				if (this.TEXT == '') {
					uni.showToast({
						title: '输入内容不能为空',
						icon: 'none'
					})
					return false
				}
				this.isLoading = true
				this.firstTrigger = false
				let myUrl = await this.getWebSocketUrl();
				this.tempRes = "";
				// this.sparkResult = "";
				let realThis = this;
				this.socketTask = uni.connectSocket({
					//url: encodeURI(encodeURI(myUrl).replace(/\+/g, '%2B')),
					url: myUrl,
					method: 'GET',
					success: res => {
						realThis.isLoading = true;
					}
				})

				realThis.socketTask.onError((res) => {
					realThis.isLoading = false
					realThis.historyTextList.push({
						"role": "user",
						"content": '发送失败'
					})
				})
				realThis.socketTask.onOpen((res) => {
					this.historyTextList.push({
						"role": "user",
						"content": this.TEXT
					})
					let params = {
						"header": {
							"app_id": this.APPID,
							"uid": "aef9f963-7"
						},
						"parameter": {
							"chat": {
								"domain": "generalv2",
								"temperature": 0.5,
								"max_tokens": 1024
							}
						},
						"payload": {
							"message": {
								"text": this.historyTextList
							}
						}
					};
					// this.sparkResult = this.sparkResult + "\r\n我：" + this.TEXT + "\r\n"
					// this.sparkResult += this.sparkResult  

					realThis.socketTask.send({ // 发送消息，，都用uni的官方版本
						data: JSON.stringify(params),
						success() {
							realThis.TEXT = ''
						}
					});
				});

				// 接受到消息时
				realThis.socketTask.onMessage((res) => {
					let obj = JSON.parse(res.data)
					if (obj.header.code == 10013) {
						this.historyTextList.push({
							"role": "assistant",
							"content": '非常抱歉，根据相关法律法规，我们无法提供关于以下内容的答案，包括但不限于：\n\t(1) 涉及国家安全的信息；\n\t(2) 涉及政治与宗教类的信息；\n\t(3) 涉及暴力与恐怖主义的信息；\n\t(4) 涉及黄赌毒类的信息；\n\t(5) 涉及不文明的信息。\n我们会继续遵循相关法规法律的要求，共创一个健康和谐网络环境，谢谢您的理解。\n'
						})
						realThis.isLoading = false
						return
					}
					let dataArray = obj.payload.choices.text;
					for (let i = 0; i < dataArray.length; i++) {
						realThis.sparkResult = realThis.sparkResult + dataArray[i].content
						realThis.tempRes = realThis.tempRes + dataArray[i].content
						// realThis.historyTextList[realThis.historyTextList.length - 1].content  +=  dataArray[i].content
					}
					let temp = JSON.parse(res.data)

					if (temp.header.code !== 0) {
						realThis.isLoading = false

						realThis.socketTask.close({
							success(res) {
								console.log('关闭成功', res)

							},
							fail(err) {
								console.log('关闭失败', err)
							}
						})
					}
					if (temp.header.code === 0) {

						if (res.data && temp.header.status === 2) {
							// realThis.sparkResult = realThis.sparkResult +
							// 	"\r\n**********************************************"
							realThis.scrollUpdata()
							/* let dataArray= obj.payload.choices.text;
							for(let i=0;i<dataArray.length;i++){
								realThis.sparkResult =realThis.sparkResult+ dataArray[i].content
							} */
							setTimeout(() => {
								realThis.socketTask.close({
									success(res) {
										console.log('关闭成功', res)
										realThis.isLoading = false
										realThis.sparkResult = ''
									},
									fail(err) {
										// console.log('关闭失败', err)
									}
								})
							}, 1000)
						}
					}
				})
			},
			// 鉴权
			getWebSocketUrl() {
				return new Promise((resolve, reject) => {
					// https://spark-api.xf-yun.com/v1.1/chat  V1.5 domain general
					// https://spark-api.xf-yun.com/v2.1/chat  V2.0 domain generalv2
					var url = "wss://spark-api.xf-yun.com/v2.1/chat";
					var host = "spark-api.xf-yun.com";
					var apiKeyName = "api_key";
					var date = new Date().toGMTString();
					var algorithm = "hmac-sha256";
					var headers = "host date request-line";
					var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2.1/chat HTTP/1.1`;
					var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, this.APISecret);
					var signature = CryptoJS.enc.Base64.stringify(signatureSha);
					var authorizationOrigin =
						`${apiKeyName}="${this.APIKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`;
					var authorization = base64.encode(authorizationOrigin);
					url = `${url}?authorization=${authorization}&date=${encodeURI(date)}&host=${host}`;
					resolve(url); // 主要是返回地址
				});
			},
		}
	}
</script>

<style scoped>
	/deep/.input-placeholder {
		font-size: 30rpx;
		color: #7C8191;
	}

	.login__info__item__button {
		letter-spacing: 0;
		text-indent: 0;
	}

	.topic__info__item__input__content {
		width: 80%;
		padding-top: 0px;
		padding-left: 15px;
	}

	.topic__info__item__input {
		width: 80%;
		height: 30px;
		background-color: rgba(0, 3, 72, 0.05);
		border-radius: 5px;
		margin-right: 40rpx;
	}

	/* 底部 start*/
	.footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 999;
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.tabbar {
		align-items: center;
		min-height: 130rpx;
		padding: 0;
		height: calc(130rpx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(30rpx + env(safe-area-inset-bottom) / 2);
		padding-left: 10rpx;
		padding-right: 10rpx;
	}

	/* 用户头像 start */
	.logo-image {
		width: 80rpx;
		height: 80rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: top;
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.05);
		border-radius: 50%;
	}

	.bg-img-cont {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 260rpx;
		width: 55vw;
		margin: 10rpx 0 0 0;
		border-radius: 12rpx;
	}
</style>