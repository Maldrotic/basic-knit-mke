import React from 'react';

const ProductPrice = (props = {
  product: {}
}) => {
  return (
    <div className='product__price'>
      ${props.product.price / 100.0}
    </div>
  );
};

export default ProductPrice;