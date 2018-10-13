import React from 'react';
import Image from 'react-bootstrap/lib/Image';

const ProductImage = (props = {
  url: ''
}) => {
  // const style = {
  //   background: `url(${props.url}) center no-repeat `,
  //   height: '100%',
  //   backgroundSize: 'cover',
  //   position: 'relative'
  // };

  // return (
  //   <div className='product-image--background' style={style}>
  //   </div>
  // );
  return <Image src={props.url} fluid />;
};

export default ProductImage;