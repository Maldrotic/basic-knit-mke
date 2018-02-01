import {
  REQUEST_PRODUCT_TYPES,
  RECEIVE_PRODUCT_TYPES
} from '../actions/productTypes';

const defaultProductTypesState = {
  isFetching: false,
  data: []
};

export default (state = defaultProductTypesState, action) => {
  switch (action.type) {
    case REQUEST_PRODUCT_TYPES:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PRODUCT_TYPES:
      return {
        ...state,
        isFetching: false,
        data: action.productTypes
      };
    default:
      return state;
  }
};