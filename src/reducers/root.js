import { combineReducers } from 'redux';

import baseReducer from './base';
import productTypesReducer from './productTypes';

const rootReducer = combineReducers({
  base: baseReducer,
  productTypes: productTypesReducer
});

export default rootReducer;

