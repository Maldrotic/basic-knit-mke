import { combineReducers } from 'redux';

import baseReducer from './base';
import productTypesReducer from './productTypes';
import productsReducer from './products';

const rootReducer = combineReducers({
  base: baseReducer,
  productTypes: productTypesReducer,
  products: productsReducer
});

export default rootReducer;

