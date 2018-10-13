import React from 'react';

const ProductImage = (props = {
  url: ''
}) => {
  const style = {
    background: `url(${props.url}) center no-repeat `,
    backgroundSize: 'cover',
    position: 'relative'
  };

  return (
    <div className='product__image' style={style}>
    </div>
  );
};

export default ProductImage;