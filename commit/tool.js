/**
 * @description 本地图片转base64 * @param {number} path 图片本地路径 * @returns Promise对象 */
const base64src = (path) => {
	return new Promise((resolve, reject) => {
		// #ifdef APP-PLUS		
		plus.io.resolveLocalFileSystemURL(path, (entry) => {
			entry.file((file) => {
				let fileReader = new plus.io.FileReader() fileReader.readAsDataURL(
					file) fileReader.onloadend = (evt) => {
					let base64 = evt.target.result.split(",")[1] resolve(base64)
				}
			})
		})
		// #endif	
		// #ifdef H5	
		uni.request({
			url: path,
			responseType: 'arraybuffer',
			success: (res) => {
				resolve(uni.arrayBufferToBase64(res.data))
			}
		})
		// #endif		
		// #ifdef MP-WEIXIN		
		uni.getFileSystemManager().readFile({
			filePath: path,
			encoding: 'base64',
			success: (res) => {
				resolve(res.data)
			}
		})
		// #endif	
	})
}

const base64Tosrc = (base64data, name) => {
	const base64 = base64data;
	const time = new Date().getTime();
	const fileName = time + name + '.png';
	const byteCharacters = atob(base64.split(',')[1]);
	const byteArrays = [];
	for (let offset = 0; offset < byteCharacters.length; offset += 512) {
		const slice = byteCharacters.slice(offset, offset + 512);
		const byteNumbers = new Array(slice.length);
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}
		const byteArray = new Uint8Array(byteNumbers);
		byteArrays.push(byteArray);
	}
	const blob = new Blob(byteArrays, {
		type: 'image/png'
	});
	const link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
const swapCharacters = (input) => {
	var characters = input.split('');
	for (var i = 0; i < characters.length - 1; i += 2) {
		var temp = characters[i];
		characters[i] = characters[i + 1];
		characters[i + 1] = temp;
	}
	return characters.join('');
}

export {
	base64src,
	base64Tosrc,
	swapCharacters
}