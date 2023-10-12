import configdata from './config'
import cache from './cache'

module.exports = {
	config: function(name) {
		let token = uni.getStorageSync("token");
		if (!token) {
			uni.reLaunch({
				url: '/pages/login/login'
			})
			return false
		}
		var info = null;
		if (name) {
			var name2 = name.split("."); //字符分割
			if (name2.length > 1) {
				info = configdata[name2[0]][name2[1]] || null;
			} else {
				info = configdata[name] || null;
			}
			if (info == null) {
				let web_config = cache.get("web_config");
				if (web_config) {
					if (name2.length > 1) {
						info = web_config[name2[0]][name2[1]] || null;
					} else {
						info = web_config[name] || null;
					}
				}
			}
		}
		return info;
	},
	uploadImg: function(url, data, header) {
		header = "multipart/form-data";
		url = this.config("APIHOST") + url;
		let token = uni.getStorageSync("token");
		return new Promise((succ, error) => {
			uni.uploadFile({
				url: url,
				files: data,
				name: 'image',
				header: {
					// "content-type": header,
					"token": token
				},
				formData: {
					'userId': uni.getStorageSync('userInfo').id
				},
				success: result => {
					succ.call(self, result.data)
				},
				fail: e => {
					uni.showToast({
						title: '请求超时~',
						icon: 'error'
					})
					error.call(self, e)
				}
			})
		})
	},
	userLogin: function(url, data) {
		url = configdata.APIHOST + url;
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "POST",
				header: {
					"content-type": "application/x-www-form-urlencoded",
				},
				success: function(result) {
					if (result.data.code == '500') {
						uni.clearStorage()
						uni.showToast({
							title: result.data.msg,
							icon: 'none',
							mask: true,
						})
					} else {
						succ.call(self, result.data)
					}
				},
				fail: function(e) {
					uni.showToast({
						title: '请求超时~',
						icon: 'error'
					})
					error.call(self, e)
				}
			})
		})
	},
	userRes: function(url, data) {
		console.log(data)
		url = configdata.APIHOST + url;
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "POST",
				header: {
					"content-type": "application/x-www-form-urlencoded",
				},
				success: function(result) {

					if (result.data.code == '500') {
						uni.clearStorage()
						uni.showToast({
							title: result.data.msg,
							icon: 'none',
							mask: true,
						})
					} else {
						succ.call(self, result.data)
					}
				},
				fail: function(e) {
					uni.showToast({
						title: '请求超时~',
						icon: 'error'
					})
					error.call(self, e)
				}
			})
		})
	},
	post: function(url, data, header, timeout = 300000) {
		let _this = this;
		header = header || "application/json";
		let token = uni.getStorageSync("token");
		url = this.config("APIHOST") + url;
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "POST",
				timeout: timeout,
				header: {
					"content-type": header,
					"token": token
				},
				success: function(result) {
					if (result.data.code == '401') {
						uni.clearStorage()
						uni.showToast({
							title: '登陆信息已过期,请重新登陆',
							icon: 'none',
							mask: true,
							success() {
								setTimeout(() => {
									uni.reLaunch({
										url: '/pages/login/login'
									})
								}, 1000)
							}
						})
					} else if (result.data.code == '200' || result.data.code == '999') {
						succ.call(self, result.data)
					} else {
						uni.showToast({
							title: result.data.msg || '请求出错',
							icon: 'none',
						})
					}
				},
				fail: function(e) {
					uni.showToast({
						title: '请求超时~',
						icon: 'error'
					})
					error.call(self, e)
				}
			})
		})

	},
	aiPost: function(url, data, header) {
		let _this = this;
		header = header || "application/json";
		url = this.config("ROOTPATHAI") + url;
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "POST",
				timeout: 600000,
				header: {
					"content-type": header,
					"accept": "application/json",
				},
				success: function(result) {
					if (result.data.code == '401') {
						uni.clearStorage()
						uni.showToast({
							title: '登陆信息已过期,请重新登陆',
							icon: 'none',
							mask: true,
							success() {
								setTimeout(() => {
									uni.reLaunch({
										url: '/pages/login/login'
									})
								}, 1000)
							}
						})
					} else if (result.data.code == '200') {
						succ.call(self, result.data)
					} else {
						uni.showToast({
							title: result.data.msg,
							icon: 'none',
						})
					}
				},
				fail: function(e) {
					uni.showToast({
						title: '请求超时~',
						icon: 'error'
					})
					error.call(self, e)
				}
			})
		})

	},
	get: function(url, data, header) {
		header = header || "application/x-www-form-urlencoded";
		url = this.config("APIHOST") + url;
		let token = uni.getStorageSync("token");
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "GET",
				header: {
					"content-type": header,
					"token": token
				},
				success: function(result) {
					if (result.data.code == 401) {
						uni.showToast({
							title: result.data.msg,
							icon: 'none',
							duration: 2000
						})
						uni.clearStorage()
						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/login/login'
							})
						}, 2000)
					} else {
						succ.call(self, result.data)
					}

				},
				fail: function(e) {
					uni.showToast({
						title: '请求超时~',
						icon: 'error'
					})
					error.call(self, e)
				}
			})
		})
	},
	apiGet: function(url, data, header) {
		header = header || "application/x-www-form-urlencoded";
		url = this.config("ROOTPATHAUTHER") + url;
		let token = uni.getStorageSync("token");
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "GET",
				header: {
					"content-type": header,
				},
				success: function(result) {
					if (result.data.code == '401') {
						uni.clearStorage()
						uni.showToast({
							title: '登陆信息已过期,请重新登陆',
							icon: 'none',
							mask: true,
							success() {
								setTimeout(() => {
									uni.reLaunch({
										url: '/pages/login/login'
									})
								}, 1000)
							}
						})
					} else if (result.data.code == '200') {
						succ.call(self, result.data)
					} else {
						uni.showToast({
							title: result.data.msg,
							icon: 'none',
						})
					}
				},
				fail: function(e) {
					uni.showToast({
						title: '请求超时~',
						icon: 'error'
					})
					error.call(self, e)
				}
			})
		})
	},
	vvGet: function(url, data, header) {
		header = header || "application/x-www-form-urlencoded";
		url = this.config("ROOTPATHVV") + url;
		let token = uni.getStorageSync("token");
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "GET",
				header: {
					"content-type": header,
				},
				success: function(result) {
					if (result.data.code == '401') {
						uni.clearStorage()
						uni.showToast({
							title: '登陆信息已过期,请重新登陆',
							icon: 'none',
							mask: true,
							success() {
								setTimeout(() => {
									uni.reLaunch({
										url: '/pages/login/login'
									})
								}, 1000)
							}
						})
					} else if (result.data.code == '200') {
						succ.call(self, result.data)
					} else {
						uni.showToast({
							title: result.data.msg,
							icon: 'none',
						})
					}
				},
				fail: function(e) {
					uni.showToast({
						title: '请求超时~',
						icon: 'error'
					})
					error.call(self, e)
				}
			})
		})
	},
	aiGet: function(url, data, header) {
		header = header || "application/x-www-form-urlencoded";
		url = this.config("ROOTPATHAI") + url;
		let token = uni.getStorageSync("token");
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "GET",
				header: {
					"content-type": header,
				},
				success: function(result) {
					if (result.data.code == '401') {
						uni.clearStorage()
						uni.showToast({
							title: '登陆信息已过期,请重新登陆',
							icon: 'none',
							mask: true,
							success() {
								setTimeout(() => {
									uni.reLaunch({
										url: '/pages/login/login'
									})
								}, 1000)
							}
						})
					} else if (result.data.code == '200') {
						succ.call(self, result.data)
					} else {
						uni.showToast({
							title: result.data.msg,
							icon: 'none',
						})
					}
				},
				fail: function(e) {
					uni.showToast({
						title: '请求超时~',
						icon: 'error'
					})
					error.call(self, e)
				}
			})
		})
	}
}