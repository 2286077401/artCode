import configdata from './config'
import store from 'vuex';
let socketOpen = false;
let socketMsgQueue = [];
let scoketURL = configdata.SOOCKETURL
let sysInfo = uni.getSystemInfoSync() 

function connectWebSocket() {
	uni.connectSocket({
		url: scoketURL, // 替换为您的后端 WebSocket URL,
		success: function() {
			console.log('WebSocket :连接 ' + scoketURL + 'socket server');
		},
		fail: function(error) {
			console.log(error)
			console.error('WebSocket ' + scoketURL + ' 连接建立失败:', error);
		}
	});

	uni.onSocketOpen(function() {
		socketOpen = true;
		// 可以在这里发送初始消息给后端
		sendSocketMessage(JSON.stringify(sysInfo));
	});

	uni.onSocketMessage(function(res) {
		console.log(res.data.includes('SOCKET_ID&'))
		if (res.data.includes('SOCKET_ID&')) {
			uni.setStorageSync('SOCKET_ID', res.data.split('&')[1])
		}
		if (res.data.includes('AI绘制完成&')) {
			uni.setStorageSync('IMAGE_DATA', res.data.split('&')[1])
			// this.$store.commit('changeimageLoad', res.data);
		}

		console.log('收到服务器消息:', res.data);

		// 处理从后端接收到的消息
	});

	uni.onSocketClose(function() {
		console.log('WebSocket 连接已关闭');
		socketOpen = false;

		// 可以在这里处理连接关闭的逻辑
		// 可以在这里重新连接 WebSocket
		connectWebSocket();
	});

	uni.onSocketError(function(error) {
		console.error('WebSocket 错误:', error);

		// 可以在这里处理连接错误的逻辑
	});
}

function sendSocketMessage(message) {
	if (socketOpen) {
		uni.sendSocketMessage({
			data: message
		});
	} else {
		socketMsgQueue.push(message);
	}
}

module.exports = {
	connectWebSocket: connectWebSocket,
	sendSocketMessage: sendSocketMessage
};