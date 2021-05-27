//首页获取网络数据

import { request } from './request'

export function getHomeMultidata() {
  return request({
    url:'home/multidata',
    method:'get'
  })
}