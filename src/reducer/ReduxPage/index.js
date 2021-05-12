// import * as types from '@/actions/mutation-type.js';
import * as types from '../../action/mutation-type';

const initialState = {
  homeName: '课堂',
  // nickname: 'zs'
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
    // return Object.assign({}, state, {
    //   visibilityFilter: action.filter
    // })
  }
}

export default function(state = initialState, action) {
  console.log('reducer reduxpage=====');
  console.log('state', state);
  console.log('action', action);
  // console.log('mutations[action.type]', mutations[action.type]);
  if (!mutations[action.type]) return state;
  // console.log(11111)
  return mutations[action.type](state, action);
}