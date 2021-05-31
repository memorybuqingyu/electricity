//首页获取网络数据

import { request } from './request'

export function getHomeMultidata() {
  return request({
    url:'home/multidata',
    method:'get'
  })
}

export function getHomeGoods(type,page){
  return request({
    method:'get',
    url:'home/data',
    params:{
      type,
      page
    }
  })
}