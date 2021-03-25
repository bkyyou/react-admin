import * as types from '../mutation-type';

// 在页面被触发 this.props.updateName() => updateName => updateName触发了 reducer 中 ReduxPage 中的方法 （action.type 被挂载）
export function updateName(params) {
  console.log('params', params);
  // action = 返回的这个对象
  return {
    type: types.UPDATE_GLOBAL_NAME,
    payload: params
  }
}

export function updateAge(params) {
  console.log('params', params);
  // action = 返回的这个对象
  return {
    type: types.UPDATE_GLOBAL_AGE,
    payload: params
  }
}

export function queryAsyncName(params) {
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log(getState(), 'getState');
      dispatch({
        type: types.QUERY_GLOBAL_NAME,
        payload: params,
      });
    }, 2000);
  };
}


export function asynUpdateName(params) {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(updateName(params));
    }, 3000);
  };
}