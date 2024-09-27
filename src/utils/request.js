//axios 封装处理

import axios from "axios";
// 1.根域名配置
// 2.超时时间
// 3.请求拦截器 /响应拦截器

const request = axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout: 5000
})

// 请求拦截器
request.interceptors.request.use((config) =>{
    return config
},(error)=>{
    return Promise.reject(error)
})

// 相应拦截器
request.interceptors.response.use((response) =>{
    return response.data
},(error)=>{
    // 超出2xx会触发
    return Promise.reject(error)
})

export  {request}