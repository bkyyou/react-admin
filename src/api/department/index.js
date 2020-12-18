import instance from '../../util/http.js'

/**
 * 登录
 * @param {*} data 
 * @param {*} config 
 */
export function addDepartment(data, config) {
  return instance.request({
    method: 'post',
    url: '/addDepartment',
    data: data,
    // ...config
  })
}

/**
 * 登录
 * @param {*} data 
 * @param {*} config 
 */
export function getDepartmentList(data, config) {
  return instance.request({
    method: 'get',
    url: '/departmentList',
    params: data,
    ...config
  })
}