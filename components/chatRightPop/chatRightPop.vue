<template>
	<view>
		<tn-popup v-model="show" :marginTop="vuex_custom_bar_height" length="50%" :backgroundColor="'#ffffff'"
			:width="'450'" :closeBtn="false" :mode="'left'" @close="closedPopup">
			<view class="popup-content">
				<tn-tabs :list="list" :isScroll="false" :current="current" name="name" @change="change"></tn-tabs>

				<view v-if="type=='xh'">
					<view class="modelBox" v-for="(item,index) in modelData" :key="index">
						<view class="tn-dynamic-bg-1 tn-color-white btnBox" :class="chose==item.name?'active':''"
							@click="choseModel(item.name)">
							<view style="font-size: 30rpx;font-weight: bolder;">星火大模型{{item.name}}</view>
							<text v-if="item.name=='v1.1'">支持[搜索]内置插件</text>
							<text v-else>支持[搜索]、[天气]、[日期]、[诗词]、[字词]、[股票]六个内置插件</text>
						</view>
					</view>
				</view>

				<view v-else>
					<view class="modelBox" v-for="(item,index) in wxList" :key="index">
						<view class="tn-dynamic-bg-1 tn-color-white btnBox" :class="chose==item.name?'active':''"
							@click="choseModel(item.name)">
							<view style="font-size: 30rpx;font-weight: bolder;">{{item.name}}</view>

							<text>{{item.prompt}}</text>
						</view>
					</view>
				</view>
				<!-- <view v-if="current==1">
					<view class="historyBox">
						<text class="f1 tn-text-left tn-text-ellipsis">历史记录</text>
						<text class="tn-icon-edit-form"></text>
						<text class="tn-icon-delete"></text>
					</view>
				</view> -->
			</view>
		</tn-popup>
	</view>
</template>

<script>
	export default {
		name: "chatRightPop",
		props: {
			// 加载中的文字
			type: {
				type: String,
				default: 'xh'
			},
		},
		data() {
			return {
				wxList: [{
					name: 'ERNIE-Bot-turbo',
					type: "turbo",
					prompt: '文心一言',
					url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/eb-instant',
				}, {
					name: 'ERNIE-Bot',
					type: "bot",
					prompt: '文心一言3.0',
					url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions',
				}, {
					name: 'ERNIE-Bot-4',
					type: "bto4",
					prompt: '文心一言4.0',
					url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro',
				}],
				current: 0,
				show: false,
				list: [{
						name: '模型选择'
					},
					// {
					// 	name: '历史记录',
					// },
				],
				modelData: [{
					name: 'v1.1'
				}, {
					name: 'v2.1'
				}, {
					name: 'v3.1'
				}],
				chose: 'v2.1'
			};
		},

		methods: {

			changeShow() {
				this.show = !this.show
			},
			closedPopup(e) {
				console.log(e)
			},
			change(index) {
				this.current = index;
			},
			choseModel(item) {
				this.chose = item
				this.$emit('chatModelData', item)
			}
		},
	}
</script>

<style scoped>
	.btnBox {
		font-size: 20rpx;
		text-align: center;
		padding: 10rpx;
		border-radius: 10rpx;
	}

	.active {
		border: 3rpx solid black;
	}

	.f1 {
		flex: 1;
	}

	.tCen {
		text-align: center;
	}

	.historyBox {
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		height: 50rpx;
		width: 70%;
		margin: 0 auto;
	}

	.modelBox {
		width: 70%;
		margin: 20rpx auto;
	}
</style>