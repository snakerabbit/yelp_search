import * as APIUtil from '../util/api_util';

export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
// export const RECEIVE_RESULT = 'RECEIVE_RESULT';
export const REQUEST_RESULTS = 'REQUEST_RESULTS';

export const fetchResults = () => dispatch => {
	return APIUtil.fetchResults()
		.then(results => dispatch(receiveResults(results.data)));
};

export const createResult = searchTerm => dispatch => {
  return APIUtil.createResult(searchTerm)
    .then(result => dispatch(receiveResults(result.data)));
};


export const receiveResults = results => {
	return {
		type: RECEIVE_RESULTS,
		results
	};
};

// export const receiveResult = result => {
// 	return {
// 		type: RECEIVE_RESULT,
// 		result
// 	};
// };
