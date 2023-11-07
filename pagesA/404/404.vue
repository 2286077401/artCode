<template>
	<view class="container">
		<text class="tips">请在手机端浏览器重新打开此页面</text>
		<tn-empty mode="search"></tn-empty>
	</view>
</template>


<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.container {
		max-width: 750px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		background-color: #f5f5f5;
		height: calc(100vh - 44px);
		margin: 0 auto;
	}

	.tips {
		font-size: 18px;
		color: #333;
		margin-bottom: 100rpx;
	}
</style>