<template>
	<view style="width: 100vw;height: 100vh;overflow-x: scroll;">
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
			}
		},
		methods: {

		},
		onLoad(option) {
			console.log(option)
			this.url = option.url
		}
	}
</script>

<style>

</style>