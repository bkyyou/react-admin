import instance from '../../util/http.js'

// 下载
export function downloadRandomNum(data, config) {
  return instance.request({
    method: 'get',
    url: '/getRandomNum',
    params: data,
    responseType: 'blob'
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json; charset=utf-8',
    //   // withCredentials: true,
    // },
  })
}

// 下载
export function getPDFRandomNum(data, config) {
  return instance.request({
    method: 'get',
    url: '/getPDFRandomNum',
    params: data,
    responseType: 'blob',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json; charset=utf-8',
    //   // withCredentials: true,
    // },
  })
}