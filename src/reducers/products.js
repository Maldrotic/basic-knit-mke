import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS, REQUEST_PRODUCT,
  REQUEST_PRODUCTS
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
      return {
        ...state,
        isFetching: true
      };
    case GET_PRODUCTS_SUCCESS:
      const newProductIds = action.products.map(product => product.id);
      return {
        ...state,
        isFetching: false,
        products: [...state.products.filter(product => !newProductIds.includes(product.id)), ...action.products]
      };
    case GET_PRODUCT_FAILURE:
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: [...state.products.filter(product => product.id !== action.product.id), action.product]
      };
    default:
      return state;
  }
}