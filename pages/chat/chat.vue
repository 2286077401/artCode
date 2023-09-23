<template>
	<view class="template-loading content">
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>
		<view style="position: relative;padding: 0 20rpx;height: 85vh;">
			<scroll-view scroll-y="true" :scroll-top="scrollTop" :style="{paddingTop:statusBarHeight}" class="scroll-Y"
				:scroll-with-animation="true" @scroll="scroll">
				<view class="chat-item" v-for="(item, index) in chat" :key="index">
					<!-- 问题框 -->
					<uni-transition :show="true" mode="fade-right" v-if="item.problem != ''">
						<view class="chat-item__right">
							<view class="chat-item__right-message" @longtap="copy(item.problem)">
								{{ item.problem }}
							</view>
							<image style="width: 80rpx;height: 80rpx;" mode="widthFix" shape="square"
								:src="item.client_avatar">
							</image>
						</view>
					</uni-transition>
					<!-- 答案框 -->
					<uni-transition :show="true" mode="fade-left">
						<view class="chat-item__left u-flex">
							<image style="width: 80rpx;" mode="widthFix" src="/static/chatlogo.png" shape="square">
							</image>
							<view class="chat-item__left-right">
								<view class="chat-item__left-name"> GPT </view>
								<view class="chat-item__left-bottom">
									<view class="chat-item__left-message" @longtap="copy(item.answer)">
										<text v-if="item.answer == 'error'">网路错误</text>
										<text
											v-if="item.answer != 'error' && item.type === 'text'">{{ item.answer || "思考中..." }}</text>
										<img v-if="item.type === 'image'" :src="item.answer" />
									</view>
									<u-loading-icon v-if="item.answer == ''"></u-loading-icon>
									<u-icon v-if="item.answer == 'error'" name="error"></u-icon>
									<view style="margin-top:auto;">
										<u-icon v-if="item.answer && item.answer != 'error'" @tap="copy(item.answer)"
											name="file-text"></u-icon>
									</view>
								</view>
							</view>
						</view>
					</uni-transition>
				</view>
			</scroll-view>
		</view>
		<!-- 底部输入框 -->
		<view class="input-box">
			<input placeholder="请输入内容" border="surround" v-model="problem">
			</input>
			<view>
				<button style="margin: 0 auto;" class="login__info__item__button tn-cool-bg-color-7--reverse tn-color-white"
					iconColor="#ffffff" color="#98e4f3" size="normal" @tap="getAnswer">
					发送
				</button>
			</view>
		</view>
		<!-- 页面内容 -->
		<view style="padding: 0 25rpx;">
		</view>


	</view>
</template>

<script>
	export default {
		name: 'TemplateLoading',
		components: {

		},
		data() {
			return {
				chat: [],
				openData: [],
				problem: '',
				answer: '',
				currentAnswerIndex: -1,
				platform: 'h5',
				webSocketClient: null,
				upOption: {
					use: false,
					noMoreSize: 0
				},
				downOption: {
					auto: false
				},
				scrollTop: 9999999999,
				left: 'auto',
				right: 40,
				bottom: 300,
				width: 64,
				height: 64,
				iconSize: 48,
				backgroundColor: '#01BEFF',
				fontColor: '#FFFFFF',
				icon: 'open',
				animationType: 'around',
				showMask: true,
				btnList: [{
						icon: 'link',
						text: '链接',
						bgColor: '#E72F8C'
					},
					{
						icon: 'clear',
						text: '清屏',
						textSize: 32,
						bgColor: '#FF7043'
					},
					{
						icon: 'share-triangle',
						text: '分享',
						iconSize: 32,
						iconColor: '#AAAAAA',
						bgColor: '#24F083',
					}
				],
				statusBarHeight: 20
			}
		},
		props: {
			askInfo: String,
			typeName: String
		},
		watch: {
			askInfo(newVal, oldVal) {
				this.askInfo = newVal;
			},
			typeName(newVal, oldVal) {
				this.typeName = newVal;
				this.chat = [];
				this.getChat();
			},
		},
		// onHide() {
		// 	uni.clearStorage('gptType')
		// },
		onLoad() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
			if (uni.getStorageSync('gptType')) {
				uni.setNavigationBarTitle({
					title: uni.getStorageSync('gptType')[0]
				});
				this.chat.push({
					type: 'text',
					problem: uni.getStorageSync('gptType')[0],
					answer: this.askInfo,
				});
			}

			// this.getChat();
			const systemInfo = uni.getSystemInfoSync();
			// 检查当前是否为微信小程序环境
			const isWechatMiniProgram = systemInfo.platform === 'devtools' || systemInfo.platform === 'mp-weixin';
			// 检查当前是否为APP环境
			const isApp = systemInfo.platform === 'android' || systemInfo.platform === 'ios';
			// 检查当前是否为H5环境
			const isH5 = typeof window !== 'undefined' && typeof document !== 'undefined';

			if (isWechatMiniProgram) {
				this.platform = 'isWechat';
			} else if (isApp) {
				this.platform = 'isApp';
			} else if (isH5) {
				this.platform = 'isH5';
			}

		},
		beforeDestroy() {},

		methods: {
			// 点击悬浮按钮的内容
			clickFabItem(e) {
				switch (e.index) {
					case 0: {
						this.$tn.message.toast(`暂未开放`)
						break;
					}
					case 1: {
						this.openData = []
						this.chat = []
						this.getChat()
						this.$tn.message.toast(`已清屏`)
						break;
					}
					case 2: {
						this.$tn.message.toast(`暂未开放`)
						break;
					}
				}
			},
			scroll(e) {
				// console.log(e);
			},
			getChat() {
				this.chat.push({
					type: 'text',
					problem: '',
					answer: this.askInfo,
				});
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
			isJSON(str) {
				try {
					JSON.parse(str);
					return true;
				} catch (error) {
					return false;
				}
			},
			getContentFromData(data) {
				try {
					if (!this.isJSON(data)) {
						return "";
					}
					const jsonData = JSON.parse(data);
					if (
						jsonData &&
						jsonData.choices &&
						jsonData.choices[0] &&
						jsonData.choices[0].delta &&
						jsonData.choices[0].delta.content
					) {
						return jsonData.choices[0].delta.content;
					} else {
						return "";
					}
				} catch (error) {
					console.error("Error extracting content from JSON string:", error);
					return "";
				}
			},
			async connectWebSocket(url) {
				this.webSocketClient = wx.connectSocket({
					url: url,
					timeout: 120000, // 设置超时时间为 120 秒
					header: {
						'content-type': 'application/json'
					},
					success: () => {
						console.log('WebSocket connection established.');
					},
					fail: (error) => {
						console.error('WebSocket connection failed:', error);
					}
				});
			},
			closeWebSocket() {
				// ... 关闭 WebSocket 的逻辑
				if (this.webSocketClient) {
					this.webSocketClient.close();
					console.log('WebSocket connection closed.');
				}
			},
			async requestWebSocketServer(res) {
				if (!res || !res.url || !res.apiopen || !res.apiopen.key || !res.apiopen.prompt || !res.apiopen
					.typeName) {
					console.error("Invalid response or missing parameters.");
					return;
				}

				const key = res.apiopen.key;
				const prompt = res.apiopen.prompt;
				const typeName = res.apiopen.typeName;

				// 根据运行环境选择 WebSocket 实现
				const isWechatMiniProgram = this.platform === 'isWechat';

				const url = res.url;

				const data = JSON.stringify({
					key,
					prompt,
					typeName
				});
				console.log('组织的data参数：>>>>', data);

				if (isWechatMiniProgram) {
					this.connectWebSocket(url);

					wx.onError((error) => {
						console.error('General error:', error);
					});

					wx.onSocketOpen(async () => {
						if (this.webSocketClient.readyState === this.webSocketClient.OPEN) {
							try {
								await this.webSocketClient.send({
									data
								});
							} catch (error) {
								console.error("Error sending data to WebSocket server:", error);
							}
						} else {
							console.error("WebSocket connection is not open.");
						}

					});

					// 使用微信小程序的函数来注册 WebSocket 事件回调

					wx.onSocketMessage((event) => {
						if (event.data === '[DONE]') {
							// 关闭 WebSocket 连接
							this.webSocketClient.close();
						}
						const content = this.getContentFromData(event.data);

						// 更新 answer
						if (content && this.currentAnswerIndex !== -1) {
							const index = this.currentAnswerIndex;
							this.$set(this.chat, index, {
								...this.chat[index],
								type: 'text',
								answer: this.chat[index].answer + content,
							});
						}

					});

					wx.onSocketClose((event) => {
						console.log("WebSocket connection closed. Code:", event.code, "Reason:", event.reason);
					});


					wx.onSocketError((error) => {
						console.error("WebSocket error:", error);
					});

				} else {
					// 实例化 webSocketClient
					this.webSocketClient = new WebSocket(url);
					// WebSocket 连接打开事件
					this.webSocketClient.onopen = async () => {
						try {
							await this.webSocketClient.send(data);
						} catch (error) {
							console.error("Error sending data to WebSocket server:", error);
						}
					};

					// WebSocket 接收数据事件
					this.webSocketClient.onmessage = (event) => {
						if (event.data === '[DONE]') {
							// 关闭 WebSocket 连接
							this.webSocketClient.close();
						}
						const content = this.getContentFromData(event.data);

						// 更新 answer
						if (content && this.currentAnswerIndex !== -1) {
							const index = this.currentAnswerIndex;
							this.$set(this.chat, index, {
								...this.chat[index],
								type: 'text',
								answer: this.chat[index].answer + content,
							});
						}
					};

					// WebSocket 连接关闭事件
					this.webSocketClient.onclose = () => {
						console.log("WebSocket connection closed.");
					};

					// WebSocket 连接错误事件
					this.webSocketClient.onerror = (error) => {
						console.error("WebSocket error:", error);
					};
				}
			},

			async getAnswer() {
				let user = uni.getStorageSync('user');
				this.currentAnswerIndex = this.chat.length
				if (!this.problem) {
					uni.showToast({
						title: '你还没有输入问题呢！',
						icon: 'none'
					});
					return
				}
				this.chat.push({
					type: 'text',
					problem: this.problem,
					answer: '',
					// client_avatar: this.userInfo.avatar
				})
				this.openData.push({
					"role": "user",
					"content": this.problem
				})

				let query = ''
				this.chat.forEach(item => {
					query += `\nQ: ${item.problem}\n`
					query += `A: ${item.answer}。 <|endoftext|>\n`

				})
				query += `Q: ${this.problem}  + "\nA: `
				if (this.typeName == 'painting') {
					query = this.problem
				}

				setTimeout(() => {
					this.scrollTop = this.scrollTop + 1;
				}, 100)
				this.openData.push({
					"role": "user",
					"content": this.problem
				})
				this.$http.openai({
					type: 'chat',
					typeName: this.typeName,
					platform: this.platform,
					data: query
				}).then((res) => {
					console.log(res);
					if (res.code == 0) {
						if (this.typeName == 'painting') {
							this.$set(this.chat, currentAnswerIndex, {
								...this.chat[currentAnswerIndex],
								answer: res.text,
								type: 'image'
							});
						} else {
							this.requestWebSocketServer(res);

						}
					} else {
						this.openData.splice(this.openData.length - 1, 1);
						this.$set(this.chat, currentAnswerIndex, {
							...this.chat[currentAnswerIndex],
							answer: 'error'
						});
						this.$nextTick(() => {
							// this.mescroll.scrollTo(99999999);
							this.scrollTop = 999999999;
						});
					}

				})
				this.problem = ""
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}


	// @import '@/static/css/templatePage/custom_nav_bar.scss';
	// @import '@/static/css/demo.scss';
	.chat-item__right {
		height: auto;
	}

	.chat {
		padding: 20rpx;
		box-sizing: border-box;

		&-item {
			&__left {
				display: flex;
				margin-top: 20rpx;

				&-right {
					margin-left: 20rpx;
				}

				&-name {
					font-size: 24rpx;
				}

				&-message {
					margin-top: 10rpx;
					background: #b3f5d1;
					padding: 20rpx;
					border-radius: 10rpx;
					font-size: 28rpx;
					color: #080808;
					margin-right: 20rpx;
					max-width: 510rpx;
					text-align: justify;
				}

				&-bottom {
					display: flex;
				}
			}

			&__right {
				display: flex;
				margin-top: 20rpx;
				justify-content: flex-end;

				&-message {
					max-width: 510rpx;
					margin-right: 20rpx;
					background: #67d9f5;
					padding: 20rpx;
					border-radius: 10rpx;
					font-size: 28rpx;
					text-align: justify;
				}
			}
		}
	}

	.scroll-Y {
		height: 100vh;
		padding-bottom: calc(220rpx + env(safe-area-inset-bottom));
	}

	.input-box {
		box-sizing: border-box;
		display: flex;
		position: fixed;
		bottom: 0rpx;
		// bottom: calc(110rpx + env(safe-area-inset-bottom));
		left: 0;
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
		background-color: #67d9f5;
	}

	input {
		height: 80rpx;
		line-height: 80rpx;
		padding: 10rpx;
		background-color: white;
		border-radius: 40rpx;
		padding-left: 20rpx;
	}
</style>