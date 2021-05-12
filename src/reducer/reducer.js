

import { bindActionCreators } from 'redux';
import { asyncUpdateNickName } from '../action/Global';

export const bindActions = (extraActions = {}) => dispatch => {
  return bindActionCreators({
    asyncUpdateNickName
  }, dispatch)
};

export const bindState = state => {
  console.log('state', state);
  let { Global, ReduxPage } = state;
  return {
    // ...state,
    ...ReduxPage,
    ...Global
  }
};