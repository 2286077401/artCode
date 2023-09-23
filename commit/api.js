import http from './request.js'

export const login = (data) => http.userLogin('/login', data)
export const getPrompts = () => http.get('/getPrompts')
// export const get60s = () => http.get('/get60s')
export const get60s = () => http.apiGet('/60s')
// export const get60s = () => http.apiGet('/60s')
export const mjSecend = (data) => http.aiPost('/midjourney/imagine?token=d10de36270394f07b4d6a87d9ff9b060', data)
export const mjlow = (data) => http.aiPost('/midjourney/imagine/relax?token=e8c9fd8d5cab4d9e86850722d622f959', data)
export const mjBase = (data) => http.aiPost('/midjourney/imagine/turbo?token=824bc9d30f88481a97aeb704c1d9c977', data)
export const arCode = (data) => http.post('/drwCode', data, '', 300000) //艺术二维码
export const getCodePro = () => http.get('/getCodePro') //艺术二维码
export const gitDrwHistory = (data) => http.post('/gitDrwHistory', data) //艺术二维码
export const getUserInfo = () => http.get('/getUserInfo') //艺术二维码

// {
// {
//     "task_id": "86b30ab4-d0d7-49b9-b65c-ac5e2d4f0127",
//     "image_id": "1099244424803926116",
//     "image_url": "https://midjourney.cdn.zhishuyun.com/attachments/1095707041194065984/1099244424803926116/xo0ixi3_lion_ignore3d420f8d-addb-498c-87f2-d64d8126d047_a82c6465-074d-4933-a49d-3679d9e135bd.png",
//     "actions": [
//         "upsample1",
//         "upsample2",
//         "upsample3",
//         "upsample4",
//         "variation1",
//         "variation2",
//         "variation3",
//         "variation4"
//     ]
// }