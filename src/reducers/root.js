import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import baseReducer from './base';
import productTypesReducer from './productTypes';
import productsReducer from './products';

const rootReducer = combineReducers({
  base: baseReducer,
  productTypes: productTypesReducer,
  products: productsReducer,
  form: formReducer
});

export default rootReducer;

