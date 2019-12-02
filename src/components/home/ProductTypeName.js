import React from 'react';

const ProductTypeName = (props = {
  productType: {}
}) => {
  return (
    <div className='product__product-type-name'>{props.productType.name}</div>
  );
};

export default ProductTypeName;