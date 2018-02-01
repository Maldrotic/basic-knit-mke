import React from 'react';
import {connect} from 'react-redux';
import ProductTypeForm from './ProductTypeForm';
import {editProductType, removeProductType} from '../actions/productTypes';

const EditProductTypePage = (props) => (
  <div>
    <ProductTypeForm
      productType={props.productType}
      onSubmit={productType => {
        props.dispatch(editProductType(props.productType.id, productType));
        props.history.push('/admin/product_types');
      }}
    />
    <button
      className="product-type__remove-button"
      onClick={() => {
        props.dispatch(removeProductType(props.productType.id));
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => ({
  productType: state.productTypes.data.find(productType => productType.id === props.match.params.id)
});
const ConnectedEditProductTypePage = connect(mapStateToProps)(EditProductTypePage);
export default ConnectedEditProductTypePage;