import React from 'react';

const ProductDescription = (props = {
  product: {}
}) => {
  return (
    <div className='product__description'>{props.product.description}</div>
  );
};

export default ProductDescription;