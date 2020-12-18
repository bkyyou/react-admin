
/**
 * 必须字母 + 函数， 6 - 20 位
 */
export const reg_pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;

/**
 * 邮箱验证
 */

export const reg_emial = /^([a-zA-Z)]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;