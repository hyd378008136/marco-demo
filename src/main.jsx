import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, StaticRouter, Switch } from './router/index.js';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

moment.locale('zh-cn');
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const composeEnhancers = compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

render(
  <Provider store={store}>
    <Router>

    </Router>
  </Provider>,
  document.getElementById('app')
);
