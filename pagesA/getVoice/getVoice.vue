<template>
	<view class="container">
		<view class="status">{{ btnStatus }}</view>
		<view class="button" @click="toggleRecording">{{ buttonLabel }}</view>
		<view class="result">{{ resultText }}</view>
		<button type="default" @click="play">12121</button>
	</view>
</template>

<script>
	import Recorder from 'recorder-core'
	import 'recorder-core/src/engine/mp3'
	import 'recorder-core/src/engine/mp3-engine'
	import * as base64 from "base-64"
	import CryptoJS from '@/commit/crypto-js/crypto-js.js'
	import parser from '@/commit/fast-xml-parser/src/parser'
	import * as utf8 from "utf8"
	export default {
		data() {
			return {
				btnStatus: "UNDEFINED",
				buttonLabel: "开始录音",
				resultText: "",
				recorder: "",
				duration: 0,
				powerLevel: 0,
				iatWS: null,
				resultTextTemp: "",
				countdownInterval: null,

			};
		},
		methods: {
			getWebSocketUrl() {
				return new Promise((resolve, reject) => {
					var url = "wss://iat-api.xfyun.cn/v2/iat";
					var host = "iat-api.xfyun.cn";
					var apiKey = 'dc335c4380bcabb37503a8c40ca68d1c';
					var apiSecret = 'YWE0Yzk2ZTZhNWVlMWQ1OTBhYjRmNDI4';
					var date = new Date().toGMTString();
					var algorithm = "hmac-sha256";
					var headers = "host date request-line";
					var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2/iat HTTP/1.1`;
					var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret);
					var signature = CryptoJS.enc.Base64.stringify(signatureSha);
					console.log(signature)
					var authorizationOrigin =
						`api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`;
					var authorization = btoa(authorizationOrigin);
					url = `${url}?authorization=${authorization}&date=${date}&host=${host}`;
					console.log(url)
					resolve(url);
				});
			},

			h5btn_sub_stop() {
				var This = this;
				var rec = This.recorder;
				This.rec = null;
				if (!rec) {
					console.log("未打开录音", 1);
					return;
				}
				rec.stop(function(blob, duration) {
					console.log('录音结束')
					// var reader = new FileReader();
					// reader.addEventListener("load", function() {
					// 	console.log(reader)

					// }, false);
					// reader.readAsDataURL(blob); 
					This.iatWS.send(
						JSON.stringify({
							data: {
								status: 2,
							},
						})
					);
				}, function(s) {
					console.log("结束出错：" + s, 1);
				}, true); //自动close
			},
			countdown() {
				let that = this
				// 请实现倒计时逻辑
				let seconds = 10;
				that.buttonLabel = `录音中（${seconds}s）`;
				that.countdownInterval = setInterval(() => {
					seconds = seconds - 1;
					if (seconds <= 0) {
						clearInterval(that.countdownInterval);
						that.buttonLabel = "开始录音";
						that.btnStatus = 'CLOSED';
						that.h5btn_sub_stop()
					} else {
						that.buttonLabel = `录音中（${seconds}s）`;
					}
				}, 1000);
			},
			changeBtnStatus(status) {
				this.btnStatus = status;
				if (status === "CONNECTING") {
					this.buttonLabel = "建立连接中";
					this.resultText = "";
					this.resultTextTemp = "";
				} else if (status === "OPEN") {
					this.countdown();
				} else if (status === "CLOSING") {
					this.buttonLabel = "关闭连接中";
				} else if (status === "CLOSED") {
					this.buttonLabel = "开始录音";
				}
			},
			renderResult(resultData) {
				// 请实现结果渲染逻辑
			},

			connectWebSocket() {
				let that = this
				that.getWebSocketUrl().then((res) => {
					that.changeBtnStatus("CONNECTING");
					that.iatWS = uni.connectSocket({
						url: res,
						success(e) {
							console.log('链接成功', e)
						}
					});

					that.iatWS.onOpen((res) => {
						console.log('SOCKETOPEN');
						var params = {
							common: {
								app_id: '4ae5ca01',
							},
							business: {
								language: "zh_cn",
								domain: "iat",
								accent: "mandarin",
								vad_eos: 5000,
								dwa: "wpgs",
							},
							data: {
								status: 0,
								format: "audio/L16;rate=16000",
								encoding: "raw",
							}
						};

						that.iatWS.send(JSON.stringify(params))

						that.iatWS.onMessage((e) => {
							let obj = JSON.parse(e.data);
							that.recorder.stop();
							console.log('接收到消息', obj);
							that.renderResult(e.data);
						});
					});

					that.iatWS.onError((e) => {
						console.log(e);
						that.recorder.stop();
						that.changeBtnStatus("CLOSED");
					});
				})

			},

			play() {
				console.log(this.recorder)
				this.recorder.play()
			},
			toggleRecording() {
				let that = this
				if (that.btnStatus === "UNDEFINED" || that.btnStatus === "CLOSED") {
					that.recorder = new Recorder({
						type: 'mp3',
						bitRate: 16,
						sampleRate: 16000,
						onProcess: function(buffers, powerLevel, duration, sampleRate) {
							that.duration = duration;
							that.powerLevel = powerLevel;
						}
					});
					that.recorder.open(function() {
						that.recorder.start();
						that.changeBtnStatus("OPEN");
						that.connectWebSocket();
						// console.log('已打开')
					}, function(msg, isUserNotAllow) {
						console.log('打开失败')
					});
					that.waitDialogClickFn = function() {
						console.log('打开失败：权限请求被忽略')
					};

				} else if (that.btnStatus === "CONNECTING" || that.btnStatus === "OPEN") {
					console.log('=====')
					that.h5btn_sub_stop()
					// that.recorder.onStop = () => {
					// 	clearInterval(countdownInterval);
					// };
				}
			},
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.status {
		font-size: 24px;
		margin-bottom: 20px;
	}

	.button {
		padding: 10px 20px;
		background-color: #007aff;
		color: #fff;
		border-radius: 5px;
		cursor: pointer;
		user-select: none;
	}

	.result {
		margin-top: 20px;
		font-size: 18px;
	}
</style>