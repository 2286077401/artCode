<template>
	<view>
		<tn-nav-bar fixed :isBack="false" :bottomShadow="false" backgroundColor="#008eff">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
				<!-- 搜索框 -->
				<view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center ">
					<view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left tn-color-black">
						<view class="custom-nav__search__icon tn-icon-search"></view>
						<view class="custom-nav__search__text tn-padding-left-xs">
							<input class="custom-nav__search__text_input" @input="serchData" placeholder="输入搜索内容">
						</view>
					</view>
					<!-- <tn-nav-bar fixed alpha customBack>
									<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
										<text class='icon tn-icon-left' style="color: white;font-size: 30rpx;"></text>
										 
									</view>
								</tn-nav-bar> -->
				</view>
			</view>
		</tn-nav-bar>

		<view class="content">
			<view class="bg-contaniner bg-blue">
			</view>

			<!-- <div class="animate__animated animate__bounce">Example</div> -->
			<view class="listBox">
				<view class="nextBox" v-for="(item,index) in promptsList" :key="index">
					<view class="list">
						<view class="list_top">
							<view v-if="indexData != index" @click='showDetail(index)'
								class="animate__animated animate__zoomIn  list_top_title">
								{{item.templateName}}
							</view>
							<view class="animate__animated animate__fadeInUp list_top_left" v-else>
								<image :src="'https://api.multiavatar.com/'+generateRandomString()+'.png'"
									style="width: 70rpx;max-height: 70rpx;" mode="widthFix"></image>
							</view>
							<view class="list_top_righ">
								<text class="tn-icon-more-vertical" style="font-size:50rpx;"></text>
							</view>
						</view>
						<view v-if="indexData == index" class="animate__animated animate__fadeInLeft">
							<view class="list_title">
								{{item.templateName}}
							</view>
							<view class="list_next">
								{{item.content}}
							</view>
							<view class="talkTime">

							</view>
							<view class="">
								<button class="nextBtn" @click="goto(item)">开始对话</button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <tabBar></tabBar> -->
	</view>
</template>

<script>
	import {
		getPrompts
	} from '@/commit/api.js'
	export default {
		data() {
			return {
				timer: null,
				indexData: '',
				promptsList: [],
			}
		},
		mounted() {
			this.getPromptsList()
		},
		methods: {
			serchData(e) {
				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					const index = this.promptsList.findIndex(item => item.templateName.includes(e.detail.value));
					if (index !== -1) {
						const [matchedItem] = this.promptsList.splice(index, 1);
						this.promptsList.unshift(matchedItem);
					} 
				}, 1000);
			},
			goto(item) {
				uni.setStorageSync('gptType', item)
				uni.navigateTo({
					url: '/pages/chat/chat'
				})
			},
			showDetail(index) {
				console.log(index)
				this.indexData = index
			},
			getPromptsList() {
				getPrompts().then((res) => {
					let that = this
					if (res.code == 200) {
						that.promptsList = res.data;
					} else {
						that.listData = [];
					}
				});
			},
			generateRandomString() {
				const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
				let result = "";
				const length = charset.length;
				let random = (Math.random() * 0x100000000) | 0;
				random = ((random >>> 4) ^ random) * 0x100000001;
				for (let i = 0; i < 8; i++) {
					const index = (random >>> (i * 5)) & 0x1F;
					result += charset.charAt(index);
				}
				return result;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding-top:180rpx ;
	}
	.custom-nav {
		height: 100%;
		background-color: #008eff;

		&__search {
			flex-basis: 60%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 70%;
				padding: 10rpx 0;
				margin: 0 30rpx;
				border-radius: 60rpx 60rpx 60rpx 0;
				font-size: 24rpx;
				background-color: rgba(251, 251, 251, 0.7);

			}

			&__icon {
				padding-right: 10rpx;
				margin-left: 20rpx;
				font-size: 30rpx;
			}

			&__text {
				&_input {
					font-size: 20rpx;
					text-align: left;
					color: black;
				}
			}
		}
	}

	.bg-contaniner {
		position: fixed;
		top: -0rpx;
		left: -300rpx;
		--text-color: hsl(0 95% 60%);
		--bg-color: hsl(0 0% 100%);
		--bg-size: 200px;
		height: 100%;
		display: grid;
		place-items: center;
		place-content: center;
		overflow: hidden;
		background-color: var(--bg-color);
		z-index: -1;
	}

	.bg-contaniner::before {
		--size: 150vmax;
		content: "";
		inline-size: var(--size);
		block-size: var(--size);
		background-image: url("https://resource.tuniaokj.com/images/animate/animate3.png");
		background-size: var(--bg-size);
		background-repeat: repeat;
		transform: rotate(45deg);
		opacity: 0.25;
		animation: bg 6s linear infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		.bg-contaniner::before {
			animation-duration: 0s;
		}
	}

	@keyframes bg {
		to {
			background-position: 0 calc(var(--bg-size) * -1);
		}
	}

	.nextBtn {
		width: 280rpx;
		height: 60rpx;
		margin: 0 auto;
		opacity: 1;
		border-radius: 19.11rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0rpx 4.78rpx 38.22rpx rgba(228, 233, 239, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20rpx;

		font-weight: bolder;
		font-size: 20rpx;
		margin-top: 20rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; 
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.listBox {
		width: 100vw;
		column-count: 2;
		// display: flex;
		// flex-wrap: wrap;
		// flex-direction: column;
		// align-items: flex-start;
		text-align: center;
		padding: 0rpx 20rpx 0rpx 20rpx;

	}

	.nextBox {
		width: 100%;
		margin: 10px 0px 0px 0px;

		overflow: hidden;
		break-inside: avoid;
	}

	.list {
		width: 100%;
		border-radius: 25rpx;
		background: #f5f8fcbf;
		margin: 0 auto;
		padding: 20rpx;


		&_next {
			font-size: 15rpx;
			max-height: 100rpx;
			padding: 10rpx;
			text-align: justify;
			overflow-y: scroll;

			padding-bottom: 20rpx;

		}

		&_title {
			text-align: left;
			font-weight: bolder;
			padding: 10rpx;
		}

		&_top {
			display: flex;
			justify-content: space-between;
			font-size: 20rpx;
			text-align: left;

			&_title {
				line-height: 55rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			&_left {
				background-color: white;

				width: 120rpx;
				height: 120rpx;
				opacity: 1;
				border-radius: 28.66rpx;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0rpx 4.78rpx 38.22rpx rgba(228, 233, 239, 0.6);
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 20rpx;
			}

			&_righ {
				color: #b1b1b1;
			}
		}
	}
</style>