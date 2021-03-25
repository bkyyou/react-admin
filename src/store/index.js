import { createStore, applyMiddleware } from 'redux';
import trunk from 'redux-thunk';
// import reducers from '@/reducer';
import reducers from '../reducer/index';

export default createStore(reducers, applyMiddleware(trunk));