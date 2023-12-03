<template>
	<view>
		{{signaStr}}
		<button class="tn-cool-bg-color-6--reverse tn-color-white" type="button" @click="choseFile">选择文件</button>
	</view>
</template>

<script>
	import signatureUtils from "@/commit/signatureUtils.js"
	import {
		toBase64
	} from "../tool/tool.js"
	import {
		swapCharacters
	} from "@/commit/tool.js"
	import betsUrl from '@/commit/config.js'
	export default {
		data() {
			return {
				APPID: '4ae5ca01', // 控制台获取填写
				APISecret: swapCharacters(uni.getStorageSync('KEY_LIST').secret),
				APIKey: swapCharacters(uni.getStorageSync('KEY_LIST').apiKey),
				signaStr: ''
			}
		},
		onShow() {
			this.signaStr = signatureUtils().signature
			// this.signaStr = 'enqBy65icL6AxsO3pf7POK5jShc='
			// const result = signatureUtils.generateSignature(this.APPID, this.APISecret);
		},
		methods: {

			choseFile() {
				let that = this
				// #ifdef H5
				uni.chooseFile({
					count: 1, //默认100
					extension: ['.word', '.pdf', '.markdown', '.txt'],
					success: function(res) {
						console.log(res.tempFiles)
						// const tempFilePath = res.tempFilePaths[0]; 
						uni.uploadFile({
							url: betsUrl.ROOTXUNFEI + '/fileUpload',
							filePath: res.tempFilePaths[0],
							name: 'file',
							formData: {
								fileType: 'wiki',
							},
							header: {
								"appId": that.APPID,
								"timestamp": parseInt(Date.now() / 1000),
								"signature": that.signaStr,
								// "Content-Type": 'multipart/form-data'
							},
							success: (res) => {
								console.log(res)
							},
							fail: (error) => {
								console.error('File upload failed. Error:', error);
							},
						});
						// https://chatdoc.xfyun.cn/openapi/fileUpload 
					}
				});
				// #endif 

			},
		}
	}
</script>

<style>

</style>