import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux'
import rootReducer from './rootReducer';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compos
const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware())));

export default rootStore;