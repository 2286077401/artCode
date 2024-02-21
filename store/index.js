import Vue from 'vue'
import Vuex from 'vuex'
import {
	mjlow,
	mjSecend,
	mjBase,
	arCode
} from "@/commit/api.js"
Vue.use(Vuex)
let lifeData = {}

// 尝试获取本地是否存在lifeData变量，第一次启动时不存在
try {
	lifeData = uni.getStorageSync('lifeData')
} catch (e) {

}
// 标记需要永久存储的变量，在每次启动时取出，在state中的变量名
let saveStateKeys = ['vuex_user']

// 保存变量到本地存储
const saveLifeData = function(key, value) {
	// 判断变量是否在存储数组中
	if (saveStateKeys.indexOf(key) != -1) {
		// 获取本地存储的lifeData对象，将变量添加到对象中
		let tmpLifeData = uni.getStorageSync('lifeData')
		// 第一次启动时不存在，则放一个空对象
		tmpLifeData = tmpLifeData ? tmpLifeData : {},
			tmpLifeData[key] = value
		// 将变量再次放回本地存储中
		uni.setStorageSync('lifeData', tmpLifeData)
	}
}

const store = new Vuex.Store({
	state: {
		uerInfo: {},
		hasLogin: false,
		imageData: '',
		imageIsLoad: false,
		codeImgData: '',
		codeIsLoad: false,

		// 如果上面从本地获取的lifeData对象下有对应的属性，就赋值给state中对应的变量
		// 加上vuex_前缀，是防止变量名冲突，也让人一目了然
		vuex_user: lifeData.vuex_user ? lifeData.vuex_user : {
			name: '图鸟'
		},

		// 如果vuex_version无需保存到本地永久存储，无需lifeData.vuex_version方式
		// app版本
		vuex_version: "1.0.0",
		// 是否使用自定义导航栏
		vuex_custom_nav_bar: true,
		// 状态栏高度
		vuex_status_bar_height: 0,
		// 自定义导航栏的高度
		vuex_custom_bar_height: 0
	},
	mutations: {
		getImageData() {

		},
		changeimageLoad(state, data) {
			console.log(data)
			state.imageData = data.data
			// state.codeIsLoad = false
		},
		changeLoad(state) {
			state.imageIsLoad = false
			state.codeIsLoad = false
		},
		changeLoadTrue(state) {
			state.imageIsLoad = true
		},
		$tStore(state, payload) {
			// 判断是否多层调用，state中为对象存在的情况，例如user.info.score = 1
			let nameArr = payload.name.split('.')
			let saveKey = ''
			let len = nameArr.length
			if (len >= 2) {
				let obj = state[nameArr[0]]
				for (let i = 1; i < len - 1; i++) {
					obj = obj[nameArr[i]]
				}
				obj[nameArr[len - 1]] = payload.value
				saveKey = nameArr[0]
			} else {
				// 单层级变量
				state[payload.name] = payload.value
				saveKey = payload.name
			}

			// 保存变量到本地中
			saveLifeData(saveKey, state[saveKey])
		},
		login(state, provider) { //改变登录状态 
			state.hasLogin = true
			state.uerInfo.token = provider.token
			state.uerInfo.userName = provider.data.name
			uni.setStorageSync('token', provider.token)
			uni.setStorageSync('userInfo', provider.data)
		},
		logout(state) { //退出登录  
			state.hasLogin = false
			state.uerInfo = {}
			uni.clearStorage()
		},
		loginStatus(state) { //判断登录状态
			let token = uni.getStorageSync('token');
			let data = uni.getStorageSync('userInfo');
			let inviteUrl = window.location.href.split('?')[0]
		}
	},
	actions: {
		codeDrw({
			commit,
			state
		}, drwData) {

			if (drwData.prompt == '' || drwData.content == '') {
				uni.showToast({
					title: '必填项不能为空！',
					icon: 'none'
				})
				return false
			}
			uni.showToast({
				title: '开始绘制，绘制结果在画夹查看！',
				icon: 'none'
			})
			state.codeIsLoad = true
			state.codeImgData = '';

			drwData.socketId = uni.getStorageSync('SOCKET_ID')
			arCode(drwData).then((res) => {
				state.codeIsLoad = false;
				let re = res.data
				if (!re.image_url) {
					uni.showToast({
						title: re.detail,
						icon: 'none'
					})
				} else {
					// assuming you have a state for imageRes  
					state.codeImgData = re
				}
			}).catch((error) => {
				state.codeIsLoad = false;
				console.error('发生错误:', error);
				uni.showToast({
					title: '绘制失败，请重试',
					icon: 'none'
				});
			});
		},
		mjImageDrw({
			commit,
			state
		}, drwData) {
			state.imageIsLoad = true
			state.imageData = '';
			drwData.socketId = uni.getStorageSync('SOCKET_ID')
			mjlow(drwData).then((res) => {
				if (res.code == 999) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					state.imageIsLoad = false;
					return
				}
				if (!res.data.image_url) {
					state.imageIsLoad = true;
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
				} else {
					state.imageIsLoad = false;
					state.imageData = res.data
				}
			})
		}
	}
})
export default store