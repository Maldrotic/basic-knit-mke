import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = [
  thunkMiddleware
];

export default () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleWare))
  );
};
