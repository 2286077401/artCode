import http from './request.js'
// export const useRes = (data) => http.get('/resUser', data)  //注冊
export const useRes = (data) => http.userRes('/resUser', data)
export const login = (data) => http.userLogin('/login', data)
export const getPrompts = () => http.get('/getPrompts')
// export const get60s = () => http.get('/get60s')
export const get60s = () => http.apiGet('/60s') 
export const mjSecend = (data) => http.aiPost('/midjourney/imagine?token=d10de36270394f07b4d6a87d9ff9b060', data)
export const mjlow = (data) => http.post('/drwImage', data)
export const mjBase = (data) => http.aiPost('/midjourney/imagine/turbo?token=824bc9d30f88481a97aeb704c1d9c977', data)
export const arCode = (data) => http.post('/drwCode', data, '', 300000) //艺术二维码
// export const arCode = (data) => http.aiPost('/qrart/generate?token=4c31c0d76eff40fb8dd29523154ab6ce', data) //艺术二维码
export const getCodePro = () => http.get('/getCodePro')  
export const gitDrwHistory = (data) => http.post('/gitDrwHistory', data)  
export const getUserInfo = () => http.get('/getUserInfo')  

export const wenxinBot2 = (data) => http.post('/wenxin/bot2', data)  //文星一言聊天
export const wenxinBot3 = (data) => http.post('/wenxin/bot3', data)  //文星一言聊天
export const wenxinBot4 = (data) => http.post('/wenxin/bot4', data)  //文星一言聊天

export const getPubilcDrow = (data) => http.get('/getPubilcDrow', data)  //绘画画廊

export const getBanlace = () => http.get('/getBanlace')  //获取用户余额
export const getblacHiste = () => http.get('/getblacHiste')  //获取积分使用明细
export const gitDrowproList = () => http.get('/gitDrowproList')  //获取绘画提示词
export const gitUserState = () => http.get('/gitUserState')  //获取绘画状态
export const textToAudio = (data) => http.post('/text-to-audio',data)  //文字转语音
