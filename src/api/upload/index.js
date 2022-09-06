import instance from '../../util/http.js'

// 下载
export function downloadRandomNum(data, config) {
  return instance.request({
    method: 'get',
    url: '/getRandomNum',
    params: data,
    responseType: 'blob'
    // responseType: 'arraybuffer'
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

// 下载
export function downloadExcel(data, config) {
  return instance.request({
    method: 'post',
    url: '/downloadExecl',
    // params: data,
    responseType: 'blob',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json; charset=utf-8',
    //   // withCredentials: true,
    // },
  })
}
// 上传
export function uploadApi(data, config) {
  console.log('data', data);
  return instance.request({
    method: 'post',
    url: '/uploadExcel',
    data,
    responseType: 'blob',
    // headers: {
    //   // Accept: 'application/json',
    //   'Content-Type': 'multipart/form-data',
    //   // withCredentials: true,
    // },
    onUploadProgress: (ProgressEvent) => {
      console.log((ProgressEvent.loaded / ProgressEvent.total) * 100);
    },
  })
}