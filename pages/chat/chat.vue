<template>
	<view class="">
		<view class="login__bg login__bg--top">
			<image class="bg" src="@/static/Chatbot01.png" mode="widthFix"></image>
		</view>
		<tn-fab :btnList="btnList" :left="left" :right="right" :bottom="bottom" :width="width" :height="height"
			:iconSize="iconSize" :backgroundColor="backgroundColor" :fontColor="fontColor" :icon="icon"
			:animationType="animationType" :showMask="showMask" @click="clickFabItem">
		</tn-fab>

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
							<image style="width: 80rpx;height: 80rpx;border-radius: 50%;" mode="widthFix" shape="square"
								src="https://oss.laf.run/nupa44-bits/12aff9074a7a6692e785266073e1ebe1_1.jpg">
							</image>
						</view>
					</uni-transition>
					<!-- 答案框 -->
					<!-- 					<uni-transition :show="false" mode="fade-left" >
						<view class=" chat-item__left u-flex">
							<image style="width: 80rpx;" mode="widthFix" src="/static/chatlogo.png" shape="square">
							</image>
							<view class="chat-item__left-right">
								<view class="chat-item__left-name"> GPT </view>
								<view class="chat-item__left-bottom">
									<tn-loading></tn-loading>
								</view>
							</view>
						</view>
					</uni-transition> -->
					<uni-transition :show="true" mode="fade-left" v-if="item.answer!=''">
						<view class=" chat-item__left u-flex">
							<image style="width: 80rpx;" mode="widthFix" src="/static/chatlogo.png" shape="square">
							</image>
							<view class="chat-item__left-right">
								<view class="chat-item__left-name"> GPT </view>
								<view class="chat-item__left-bottom">
									<view class="chat-item__left-message" @longtap="copy(item.answer)">
										<text v-if="item.answer == 'error'">网络错误</text>
										<ua-markdown v-if="item.answer != 'error' && item.type === 'text'"
											:source="item.answer || '加载中...'" :showLine="false" />
									</view>
									<tn-loading v-if="item.answer == ''"></tn-loading>
									<u-icon v-if="item.answer == 'error'" name="error"></u-icon>

									<view
										style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
										<textVoice v-if="item.answer && item.answer != 'error'" audioId="audio1"
											:type="'0'" :url="item.answer" audioColor="#68d7bb">
										</textVoice>
										<text v-if="item.answer && item.answer != 'error'" @tap="copy(item.answer)"
											class="tn-icon-copy-fill" style="width: 100%;text-align: left;"></text>
										<!-- 		<text v-if="item.answer && item.answer != 'error'" @tap="copy(item.answer)"
											class="tn-icon-headset"></text> -->
										<!-- <tn-loading></tn-loading> -->
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
			<!-- <text class="tn-icon-voice" style="font-size: 50rpx;font-weight:bolder;color: #767cf2;"></text> -->
			<input :disabled="isLoading" style="flex: 1;" placeholder="请输入内容" border="surround" v-model="problem">
			</input>
			<view style="padding-right: 20rpx;">
				<button :disabled="isLoading" style="margin: 0 auto;margin-left: 20rpx;"
					class="login__info__item__button tn-cool-bg-color-7--reverse tn-color-white" iconColor="#ffffff"
					color="#98e4f3" size="normal" @tap="getAnswer">
					<tn-loading v-if="isLoading" style="margin-right: 10rpx;"></tn-loading>发送
				</button>
			</view>
		</view>
		<!-- 页面内容 -->
		<view style="padding: 0 25rpx;">
		</view>
	</view>
</template>

<script>
	import uaMarkdown from "@/components/ua2-markdown/ua-markdown"
	import {
		wenxinChat
	} from "@/commit/api.js"
	import {
		data
	} from "../../tuniao-ui/libs/mixin/components_color";
	export default {
		name: 'TemplateLoading',
		components: {
			uaMarkdown
		},
		data() {
			return {
				isLoading: false,
				chat: [],
				openData: {
					"messages": []
				},
				problem: '',
				answer: '',
				currentAnswerIndex: -1,
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
		onLoad() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
			if (uni.getStorageSync('gptType')) {
				uni.setNavigationBarTitle({
					title: uni.getStorageSync('gptType').templateName
				});
				this.chat.push({
					type: 'text',
					problem: uni.getStorageSync('gptType').templateName,
					answer: '',
				});
				this.openData.messages.push({
					role: "user",
					content: uni.getStorageSync('gptType').content
				})
				wenxinChat(this.openData).then((res) => {
					this.isLoading = false
					if (res.code == 200) {
						// this.chat.splice(this.openData.messages.length - 1, 1);
						this.askInfo = res.data.messages[res.data.messages.length - 1].content
						this.openData.messages = res.data.messages
						this.chat.push({
							type: 'text',
							problem: "",
							answer: this.askInfo,
						}); 
					} else {
						this.openData.messages = res.data.messages
						this.chat.push({
							type: 'text',
							problem: '',
							answer: 'error',
						});

					}
				})
			}
		},
		beforeDestroy() {},
		onHide() {
			this.isLoading = false
			this.Audio()
		},
		onUnload() {
			this.isLoading = false
			this.Audio()
		}, 
		methods: {
			Audio() {
				uni.$emit('stop')
			},

			// 点击悬浮按钮的内容
			clickFabItem(e) {
				switch (e.index) {
					case 0: {
						this.$tn.message.toast(`暂未开放`)
						break;
					}
					case 1: {
						this.openData.messages = []
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
				this.isLoading = true
				this.chat.push({
					type: 'text',
					problem: this.problem,
					answer: '',
					// client_avatar: this.userInfo.avatar
				})

				let obj = {
					role: "user",
					content: this.problem
				}
				this.openData.messages.push(obj)
				this.problem = ''
				setTimeout(() => {
					this.scrollTop = this.scrollTop + 1;
				}, 100)
				wenxinChat(this.openData).then((res) => {
					this.isLoading = false

					if (res.code == 200) {
						this.askInfo = res.data.messages[res.data.messages.length - 1].content
						this.openData.messages = res.data.messages
						this.chat.push({
							type: 'text',
							problem: "",
							answer: this.askInfo,
						});
						setTimeout(() => {
							this.scrollTop = this.scrollTop + 1;
						}, 100)
					} else {
						this.$nextTick(() => {
							// this.mescroll.scrollTo(99999999);
							this.scrollTop = 999999999;
						});
						this.openData.messages = res.data.messages
						this.chat.push({
							type: 'text',
							problem: '',
							answer: 'error',
						});

					}
				})

				// this.problem = ""
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login__info__item__button {
		letter-spacing: 0;
		text-indent: 0;
	}

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
		padding-bottom: calc(130rpx + env(safe-area-inset-bottom));
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