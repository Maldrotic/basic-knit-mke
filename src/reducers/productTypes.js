import {
  REQUEST_PRODUCT_TYPES,
  GET_PRODUCT_TYPES_SUCCESS,
  GET_PRODUCT_TYPES_FAILURE,
  REQUEST_PRODUCT_TYPE,
  GET_PRODUCT_TYPE_SUCCESS,
  GET_PRODUCT_TYPE_FAILURE,
  CREATE_PRODUCT_TYPE_SUCCESS, CREATE_PRODUCT_TYPE_FAILURE, CREATE_PRODUCT_TYPE
} from '../actions/productTypes';

const defaultProductTypesState = {
  isFetching: false,
  productTypes: [],
  errorMessage: null
};

export default (state = defaultProductTypesState, action) => {
  switch (action.type) {
    case REQUEST_PRODUCT_TYPE:
    case REQUEST_PRODUCT_TYPES:
      return {
        ...state,
        isFetching: true
      };
    case GET_PRODUCT_TYPES_SUCCESS:
      const newProductTypeIds = action.productTypes.map(productType => productType.id);
      return {
        ...state,
        isFetching: false,
        productTypes: [...state.productTypes.filter(productType => !newProductTypeIds.includes(productType.id)), ...action.productTypes]
      };
    case GET_PRODUCT_TYPES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case GET_PRODUCT_TYPE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        productTypes: [...state.productTypes.filter(productType => productType.id !== action.productType.id), action.productType]
      };
    case GET_PRODUCT_TYPE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case CREATE_PRODUCT_TYPE:
      return {
        ...state,
        isFetching: true
      };
    case CREATE_PRODUCT_TYPE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        productTypes: [...state.productTypes, action.productType]
      };
    case CREATE_PRODUCT_TYPE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};