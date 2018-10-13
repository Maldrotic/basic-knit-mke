import React from 'react';

const ProductTypeName = (props = {
  productType: {}
}) => {
  return (
    <div className='product-type__name'>{props.productType.name}</div>
  );
};

export default ProductTypeName;