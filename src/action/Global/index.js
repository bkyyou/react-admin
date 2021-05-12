import * as types from '../mutation-type'

export function updateNickName(param) {
  console.log('action global====')
  console.log('param', param);
  return {
    type: types.UPDATE_GLOBAL_NICKNAME,
    payload: param
  }
  // return dispatch
}

export function asyncUpdateNickName(param) {
  console.log('action global====')
  console.log('param', param);
  // return {
  //   type: types.UPDATE_GLOBAL_NICKNAME,
  //   payload: param
  // }
  return (dispatch, getState) => {
    setTimeout(() => {
      // dispatch({
      //   type: types.UPDATE_GLOBAL_NICKNAME,
      //   payload: param
      // })
      dispatch(updateNickName(param));
    }, 1000);
  }
}