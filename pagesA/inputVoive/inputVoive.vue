<template>
	<view class="container">
		<input type="file" id="input_file" @change="handleFileChange" />
		<text class="result">{{ result }}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: "",
				iatWS: null,
			};
		},
		methods: {
			async getWebSocketUrl() {
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
			toString(buffer) {
				var binary = "";
				var bytes = new Uint8Array(buffer);
				var len = bytes.byteLength;
				for (var i = 0; i < len; i++) {
					binary += String.fromCharCode(bytes[i]);
				}
				return binary;
			},
			renderResult(event) {
				// 识别结束
				let jsonData = JSON.parse(resultData);
				if (jsonData.data && jsonData.data.result) {
					let data = jsonData.data.result;
					let str = "";
					let ws = data.ws;
					for (let i = 0; i < ws.length; i++) {
						str = str + ws[i].cw[0].w;
					}
					// 开启wpgs会有此字段(前提：在控制台开通动态修正功能)
					// 取值为 "apd"时表示该片结果是追加到前面的最终结果；取值为"rpl" 时表示替换前面的部分结果，替换范围为rg字段
					if (data.pgs) {
						if (data.pgs === "apd") {
							// 将resultTextTemp同步给resultText
							resultText = resultTextTemp;
						}
						// 将结果存储在resultTextTemp中
						resultTextTemp = resultText + str;
					} else {
						resultText = resultText + str;
					}
					document.getElementById("result").innerText =
						resultTextTemp || resultText || "";
				}
				if (jsonData.code === 0 && jsonData.data.status === 2) {
					iatWS.close();
				}
				if (jsonData.code !== 0) {
					iatWS.close();
					console.error(jsonData);
				}
			},
			handleFileChange(event) {
				const file = event.target.files[0];
				if (file) {
					this.connectWebSocket();
					const reader = uni.createFileReader();
					reader.readAsArrayBuffer({
						filePath: file.path
					});
					reader.onLoad((res) => {
						const audioString = this.toString(res.data);
						let offset = 0;
						while (offset < audioString.length) {
							const subString = audioString.substring(offset, offset + 1280);
							offset += 1280;
							const isEnd = offset >= audioString.length;
							this.iatWS.send(
								JSON.stringify({
									data: {
										status: isEnd ? 2 : 1,
										format: "audio/L16;rate=16000",
										encoding: "raw",
										audio: window.btoa(subString),
									},
								})
							);
						}
					});
					reader.onError((err) => {
						console.error(err);
						this.iatWS.close();
					});
				}
			},
			connectWebSocket() {
				if (!this.iatWS) {
					this.iatWS = uni.connectSocket({
						url: this.getWebSocketUrl()
					});
					this.iatWS.onOpen((res) => {
						const params = {
							common: {
								app_id: APPID,
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
							},
						};
						this.iatWS.send(JSON.stringify(params));
					});
					this.iatWS.onMessage((event) => {
						this.renderResult(event);
					});
					this.iatWS.onError((err) => {
						console.error(err);
						this.iatWS.close();
					});
				}
			},
		},
	};
</script>