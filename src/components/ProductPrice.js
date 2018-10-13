import React from 'react';

const ProductPrice = (props = {
  product: {}
}) => {
  return (
    <div className='product__price'>
      {props.product.price}
    </div>
  );
};

export default ProductPrice;