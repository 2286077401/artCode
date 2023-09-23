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
			// if (inviteUrl == 'https://hzy.huizhanye.com.cn/huizhanye/phone/#/pages/login/linkreg'){
			// 	return
			// }else if(inviteUrl == 'https://hzy.huizhanye.com.cn/huizhanye//phone/#/pages/home/pk/shareTeam/index'){
			// 	return
			// }else if(inviteUrl == 'https://hzy.huizhanye.com.cn/huizhanye//phone/#/pages/home/onlineMall/appZfb/index'){
			// 	return
			// }else if(inviteUrl == 'https://hzy.huizhanye.com.cn/huizhanye//phone/#/pages/home/onlineMall/locationZFB/index'){
			// 	return
			// }else {
			// 	if (!token || !data) {
			// 		uni.clearStorage()
			// 		uni.reLaunch({
			// 			url: '/pages/login/index'
			// 		})
			// 	} else {
			// 		uni.switchTab({
			// 			url: '/pages/home/index'
			// 		})
			// 	}
			// }
		}
	},
	actions: {
		codeDrw({
			commit,
			state
		}, drwData) {
			console.log(drwData)
			state.codeIsLoad = true
			state.codeImgData = '';
			// setTimeout(() => {
			// 	state.codeIsLoad = false;
			// 	state.codeImgData = {
			// 		"image_url": "https://midjourney.cdn.zhishuyun.com/attachments/1124768570157564029/1153349181432414390/menris7228__id3731456_63539022-b5aa-44e5-8245-68c8e2619c63.png",
			// 		"image_id": "1153349181432414390",
			// 		"progress": 100,
			// 		"actions": [
			// 			"upsample1",
			// 			"upsample2",
			// 			"upsample3",
			// 			"upsample4",
			// 			"reroll",
			// 			"variation1",
			// 			"variation2",
			// 			"variation3",
			// 			"variation4"
			// 		],
			// 		"task_id": "5e09c599-99d9-4b78-bb4c-a88b3d77e60e"
			// 	}
			// }, 2000)
			if (drwData.prompt == '' || drwData.content == '') {
				uni.showToast({
					title: '必填项不能为空！',
					icon: 'none'
				})
				return false
			}
			// arCode(drwData).then((res) => {
			// 	console.log(res)
			// 	if (!res.image_url) {
			// 		uni.showToast({
			// 			title: res.detail,
			// 			icon: 'none'
			// 		})
			// 	} else {
			// 		// assuming you have a state for imageRes  
			// 		state.imageData = res
			// 	}
			// })
		},
		mjImageDrw({
			commit,
			state
		}, drwData) {
			state.imageIsLoad = true
			state.imageData = '';
			setTimeout(() => {
				state.imageIsLoad = false;
				state.imageData = {
					"image_url": "https://midjourney.cdn.zhishuyun.com/attachments/1124768570157564029/1153349181432414390/menris7228__id3731456_63539022-b5aa-44e5-8245-68c8e2619c63.png",
					"image_id": "1153349181432414390",
					"progress": 100,
					"actions": [
						"upsample1",
						"upsample2",
						"upsample3",
						"upsample4",
						"reroll",
						"variation1",
						"variation2",
						"variation3",
						"variation4"
					],
					"task_id": "5e09c599-99d9-4b78-bb4c-a88b3d77e60e"
				}
			}, 2000)

			// console.log(drwData)
			// if (drwData.prompt == '' || drwData.drwData == '') {
			// 	uni.showToast({
			// 		title: '必填项不能为空！',
			// 		icon: 'none'
			// 	})
			// 	return false
			// }
			// mjlow(drwData).then((res) => {
			// 	console.log(res)
			// 	if (!res.image_url) {
			// 		uni.showToast({
			// 			title: res.detail,
			// 			icon: 'none'
			// 		})
			// 	} else {
			// 		// assuming you have a state for imageRes  
			// 		state.imageData = res
			// 	}
			// })
		}
	}
})
export default store