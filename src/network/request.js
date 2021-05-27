import axios from 'axios'

export function request(config) {
  //1.创建axios实例
  const instence = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5/',
    timeout: 5000
  })

  //2.axios的拦截器
  instence.interceptors.request.use(config => {

    return config;
  }, err => {

  })

  instence.interceptors.response.use(res => {

    return res;
  }, err => {

  })
  //3.真正的网络请求
  return instence(config);
}