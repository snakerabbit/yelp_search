// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App url='http://localhost:3001/api/results'/>, document.getElementById('root'));
// registerServiceWorker();
//

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import AppContainer from './App_container';
import { fetchResults } from './actions/result_actions';
import * as APIUtil from './util/api_util';

const Root = ({ store }) => (
  <Provider store={store}>
      <AppContainer/>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
