// import * as types from '@/actions/mutation-type.js';
import * as types from '../../action/mutation-type';

const initialState = {
  homeName: '课堂'
}

const mutations = {
  [types.QUERY_GLOBAL_NAME](state) {
    console.log('QUERY_GLOBAL_NAME====')
    return { ...state };
  },
  [types.UPDATE_GLOBAL_NAME](state, action) {
    return {
      ...state,
      homeName: action.payload
    }
  }
}

export default function(state = initialState, action) {
  // console.log('action', action);
  // console.log('mutations[action.type]', mutations[action.type]);
  if (!mutations[action.type]) return state;
  // console.log(11111)
  return mutations[action.type](state, action);
}