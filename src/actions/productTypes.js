import {productTypesService} from '../services/productTypes';

export const REQUEST_PRODUCT_TYPES = 'REQUEST_PRODUCT_TYPES';
const requestProductTypes = () => ({
  type: REQUEST_PRODUCT_TYPES
});

export const GET_PRODUCT_TYPES_SUCCESS = 'GET_PRODUCT_TYPES_SUCCESS';
const getProductTypesSuccess = (productTypes) => ({
  type: GET_PRODUCT_TYPES_SUCCESS,
  productTypes
});

export const GET_PRODUCT_TYPES_FAILURE = 'GET_PRODUCT_TYPES_FAILURE';
const getProductTypesFailure = (errorMessage) => ({
  type: GET_PRODUCT_TYPES_FAILURE,
  errorMessage
});

export const fetchProductTypes = () => (dispatch) => {
  dispatch(requestProductTypes());
  return productTypesService.getAll()
    .then(productTypes => {
      dispatch(getProductTypesSuccess(productTypes))
    }, error => {
      dispatch(getProductTypesFailure(error))
    });
};

export const REQUEST_PRODUCT_TYPE = 'REQUEST_PRODUCT_TYPE';
const requestProductType = () => ({
  type: REQUEST_PRODUCT_TYPE
});

export const GET_PRODUCT_TYPE_SUCCESS = 'GET_PRODUCT_TYPE_SUCCESS';
const getProductTypeSuccess = (productType) => ({
  type: GET_PRODUCT_TYPE_SUCCESS,
  productType
});

export const GET_PRODUCT_TYPE_FAILURE = 'GET_PRODUCT_TYPE_FAILURE';
const getProductTypeFailure = (errorMessage) => ({
  type: GET_PRODUCT_TYPE_FAILURE,
  errorMessage
});

export const fetchProductType = (productTypeId) => (dispatch) => {
  dispatch(requestProductType());
  return productTypesService.get(productTypeId)
    .then(productType => {
      dispatch(getProductTypeSuccess(productType));
    }, error => {
      dispatch(getProductTypeFailure(error));
    });
};

export const CREATE_PRODUCT_TYPE = 'CREATE_PRODUCT_TYPE';
const requestCreateProductType = () => ({
  type: CREATE_PRODUCT_TYPE
});

export const CREATE_PRODUCT_TYPE_SUCCESS = 'CREATE_PRODUCT_TYPE_SUCCESS';
const createProductTypeSuccess = (productType) => ({
  type: CREATE_PRODUCT_TYPE_SUCCESS,
  productType
});

export const CREATE_PRODUCT_TYPE_FAILURE = 'CREATE_PRODUCT_TYPE_FAILURE';
const createProductTypeFailure = (errorMessage) => ({
  type: CREATE_PRODUCT_TYPE_FAILURE,
  errorMessage
});

export const createProductType = ({parentId = null, name = null} = {}) =>  dispatch => {
  dispatch(requestCreateProductType());
  return productTypesService.create({parentId, name})
    .then(productType => {
      dispatch(createProductTypeSuccess(productType));
    }, error => {
      dispatch(createProductTypeFailure(error));
    });
};

