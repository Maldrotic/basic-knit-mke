import React, {Component} from 'react'
import {Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class ProductSquare extends Component {

  state = {
    redirect: false
  };

  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push(`/products/${this.props.product.id}`);
  };

  render() {

    const style = {
      background: `url(${this.props.product.thumbnail_url}) center no-repeat `,
      height: '100%',
      backgroundSize: 'cover',
      position: 'relative'
    };

    return (
      <Col sm={4} className='product-square' onClick={this.handleClick}>
        <div className='product-square--background' style={style}>
          <div className='product-square--text-container'>
            <h4 className='product-square--text'>{this.props.product.name}</h4>
          </div>
        </div>
      </Col>
    );
  }
}

export default withRouter(ProductSquare);