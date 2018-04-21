import React from 'react'
import {Col} from 'react-bootstrap';

const ProductSquare = (props = {
  product: {}
}) => {
  const style = {
    background: `url(${props.product.thumbnail_url}) center no-repeat `,
    height: '100%',
    backgroundSize: 'cover',
    position: 'relative'
  };

  return (
    <Col sm={4} className='product-square'>
      <div className='product-square--background' style={style}>
        <div className='product-square--text'>
          <h4>{props.product.name}</h4>
        </div>
      </div>
    </Col>
  );
};

export default ProductSquare;