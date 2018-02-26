import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import resultsReducer from '../reducers/result_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    resultsReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);
export default configureStore;
