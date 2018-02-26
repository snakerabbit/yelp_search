import merge from 'lodash/merge';
import {RECEIVE_RESULTS, RECEIVE_RESULT} from '../actions/result_actions';

const resultsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESULTS:
      return merge({}, state, action.results);
    default:
      return state;
  }
};

export default resultsReducer;
