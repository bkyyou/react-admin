import * as type from '../../action/mutation-type';

const initState = {
  nickname: 'zs'
}

const mutations = {
  [type.UPDATE_GLOBAL_NICKNAME]: function(state, action) {
    console.log('reducer global mutations====');
    console.log('state', state);
    console.log('action', action);
    return {
      ...state,
      nickname: action.payload
    }
  }
}

export default function(state = initState, action) {
  console.log('reducer global function====');
  console.log('state', state);
  console.log('action', action);
  if (!mutations[action.type]) return state;

  return mutations[action.type](state, action);
}