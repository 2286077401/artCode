<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		methods: {
			...mapMutations(['changeLoad']),
		},
		onLaunch: function() {
			console.log('App Launch')
			this.$socket.connectWebSocket()
		},
		onShow: function() {
			console.log('App Show', this.imageIsLoad)
		},
		onHide: function() {
			this.changeLoad()
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	// @import "uview-ui/index.scss";
	// @import "@/uni_modules/uview-ui/index.scss";
	@import './tuniao-ui/index.scss';
	@import './tuniao-ui/iconfont.css';
	@import '@/static/animate.min.css';

	.login-sussuspension {
		animation: suspension 3s ease-in-out infinite;
	}

	@keyframes suspension {

		0%,
		100% {
			transform: translate(0, 0);
		}

		50% {
			transform: translate(0rem, 1rem);
		}
	}

	page {
		font-size: 28rpx; 
		// --animate-duration: 1s;
		// --animate-delay: 1s;
		// --animate-repeat: 1;
		// padding-top: var(--status-bar-height);
	}

	.login__bg {
		z-index: -1;
		position: fixed;
	}

	.login__bg--top {
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
	}

	.login__bg--top .bg {
		width: 750rpx;
		will-change: transform;
	}

	.login__info__item__button {
		margin-top: 75rpx;
		margin-bottom: 39rpx;
		width: 100%;
		height: 77rpx;
		text-align: center;
		font-size: 31rpx;
		font-weight: bold;
		line-height: 77rpx;
		letter-spacing: 1em;
		text-indent: 1em;
		border-radius: 39rpx;
		box-shadow: 1rpx 10rpx 24rpx 0rpx rgba(60, 129, 254, 0.35);
	}
</style>