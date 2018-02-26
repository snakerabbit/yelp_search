import { connect } from 'react-redux';
import { fetchResults, createResult } from './actions/result_actions';
import App from './App';

const mapStateToProps = state =>({
  results: state
});

const mapDispatchToProps = dispatch =>({
  fetchResults: () => dispatch(fetchResults()),
  createResult: searchTerm => dispatch(createResult(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
