import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import progressMiddleware from './middlewares/progress';
import getPresistState from './helpers/presistState';
import App from './components/App';

const presistState = getPresistState();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  presistState,
  composeEnhancers(applyMiddleware(progressMiddleware)),
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

// eslint-disable-next-line
injectGlobal`
  ${styledNormalize}

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
