import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import baseReducer from './base';
import productTypesReducer from './productTypes';
import productsReducer from './products';
import authReducer from './auth';

const rootReducer = combineReducers({
  base: baseReducer,
  auth: authReducer,
  productTypes: productTypesReducer,
  products: productsReducer,
  form: formReducer
});

export default rootReducer;

