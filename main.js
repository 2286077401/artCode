import App from './App'
// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui' 
import lsLoading from '@/components/ls-loading/components/ls-loading/ls-loading.vue'
 import tabBar from "@/components/tabBar/tabBar.vue"
 
import store from '@/store'

Vue.prototype.$store = store
let vuexStore = require('@/store/$tn.mixin.js')

Vue.mixin(vuexStore)
Vue.use(TuniaoUI)
Vue.component('lsLoading', lsLoading)
Vue.component('tabBar', tabBar)
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif