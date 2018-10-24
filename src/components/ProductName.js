import React from 'react';

const ProductName = (props = {
  product: {}
}) => {
  return (
    <div className='product__name'>{props.product.name}</div>
  )
};

export default ProductName;