import CryptoJS from '@/commit/crypto-js/crypto-js.js'
// 生成签名
function generateSignature() {
	const timestamp = parseInt(Date.now() / 1000)
	const data = CryptoJS.enc.Utf8.parse('4ae5ca01' + timestamp);
	const md5Digest = CryptoJS.MD5(data);
	const auth = md5Digest.toString(CryptoJS.enc.Hex);
	const key = CryptoJS.enc.Utf8.parse('YWE0Yzk2ZTZhNWVlMWQ1OTBhYjRmNDI4');
	const text = CryptoJS.enc.Utf8.parse(auth);
	const hmac = CryptoJS.HmacSHA1(text, key);
	const signature = CryptoJS.enc.Base64.stringify(hmac);
	return {
		signature,
	};
}

// 导出 generateSignature 函数

export {
	generateSignature
}