

import { bindActionCreators } from 'redux';
import { asyncUpdateNickName, updateLoadingState } from '../action/Global';

export const bindActions = (extraActions = {}) => dispatch => {
  return bindActionCreators({
    asyncUpdateNickName,
    updateLoadingState
  }, dispatch)
};

export const bindState = state => {
  // console.log('state', state);
  let { Global, ReduxPage } = state;
  return {
    // ...state,
    ...ReduxPage,
    ...Global
  }
};