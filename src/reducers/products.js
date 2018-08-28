import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILURE, GET_PRODUCTS_FOR_PRODUCT_TYPE_FAILURE, GET_PRODUCTS_FOR_PRODUCT_TYPE_SUCCESS,
  GET_PRODUCTS_SUCCESS, REQUEST_PRODUCT,
  REQUEST_PRODUCTS, REQUEST_PRODUCTS_FOR_PRODUCT_TYPE
} from '../actions/products';

const defaultProductsState = {
  isFetching: false,
  products: [],
  errorMessage: null
};

export default (state = defaultProductsState, action) => {
  switch (action.type) {
    case REQUEST_PRODUCT:
    case REQUEST_PRODUCTS:
    case REQUEST_PRODUCTS_FOR_PRODUCT_TYPE:
      return {
        ...state,
        isFetching: true
      };

    case GET_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_FOR_PRODUCT_TYPE_SUCCESS:
      const newProductIds = action.products.map(product => product.id);
      return {
        ...state,
        isFetching: false,
        products: [...state.products.filter(product => !newProductIds.includes(product.id)), ...action.products]
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: [...state.products.filter(product => product.id !== action.product.id), action.product]
      };

    case GET_PRODUCT_FAILURE:
    case GET_PRODUCTS_FAILURE:
    case GET_PRODUCTS_FOR_PRODUCT_TYPE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
}