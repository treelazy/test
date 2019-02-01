import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import todoReducer from './reducer';
import App from './component/App';

const history = createBrowserHistory();

const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
