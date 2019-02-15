import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import todoReducer from './reducer';
import App from './component/App';
import { Epics } from './action';

const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(...Object.values(Epics));
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(
  todoReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);
epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
