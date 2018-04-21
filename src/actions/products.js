import {productsService} from '../services/products';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
const requestProducts = () => ({
  type: REQUEST_PRODUCTS
});

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  products
});

export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
const getProductsFailure = (errorMessage) => ({
  type: GET_PRODUCTS_FAILURE,
  errorMessage
});

export const fetchProducts = () => (dispatch) => {
  dispatch(requestProducts());
  return productsService.getAll()
    .then(products => {
      dispatch(getProductsSuccess(products));
    }, error => {
      dispatch(getProductsFailure(error));
    });
};

export const REQUEST_PRODUCT = 'REQUEST_PRODUCT';
const requestProduct = () => ({
  type: REQUEST_PRODUCT
});

export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
const getProductSuccess = (product) => ({
  type: GET_PRODUCT_SUCCESS,
  product
});

export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';
const getProductFailure = (errorMessage) => ({
  type: GET_PRODUCT_FAILURE,
  errorMessage
});

export const fetchProduct = (productId) => (dispatch) => {
  dispatch(requestProduct());
  return productsService.get(productId)
    .then(product => {
      dispatch(getProductSuccess(product));
    }, error => {
      dispatch(getProductFailure(error));
    });
};