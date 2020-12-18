import instance from '../../util/http.js'

/**
 * 登录
 * @param {*} data 
 * @param {*} config 
 */
export function login(data, config) {
  return instance.request({
    method: 'post',
    url: '/login',
    data: data
  })
}

/**
 * 注册
 * @param {*} data 
 * @param {*} config 
 */
export function register(data, config) {
  console.log('data', data);
  return instance.request({
    method: 'get',
    url: '/register',
    params: data
  })
}

/**
 * 获取验证码
 */

export function getMs(data, config) {
  var f = new FormData();
  console.log('data', data);
  f.append('username', data.username)
  return instance.request({
    method: 'post',
    url: '/getms',
    data: JSON.stringify(data)
    // data: f,
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
  })
}

// 测试
export function getUserList(data, config) {
  return instance.request({
    method: 'get',
    url: '/getUserList'
    // data: JSON.stringify(data)
    // data: f,
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
  })
}