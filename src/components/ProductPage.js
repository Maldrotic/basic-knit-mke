import React from 'react';
import {fetchProduct} from '../actions/products';
import {selectProduct} from '../selectors/products';
import {connect} from 'react-redux';
import {selectProductTypeForProduct} from '../selectors/productTypes';
import {fetchProductType} from '../actions/productTypes';
import ProductImage from './ProductImage';
import {Col, Row} from 'react-bootstrap';
import ProductName from './ProductName';
import ProductTypeName from './ProductTypeName';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';

class ProductPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProduct(parseInt(this.props.match.params.id)));
  }

  componentDidUpdate() {
    if (this.props.product && this.props.productType === undefined) {
      this.props.dispatch(fetchProductType(parseInt(this.props.product.product_type_id)));
    }
  }

  render() {
    if (this.props.product && this.props.productType) {
      return (
        <div className="product">
          <Col className='product__left' sm={6}>
            <Row>
              <ProductImage url={this.props.product.thumbnail_url}/>
            </Row>
          </Col>
          <Col className='product__right' sm={6}>
            <Row>
              <ProductName product={this.props.product} />
              <ProductTypeName productType={this.props.productType} />
              <ProductDescription product={this.props.product} />
              <ProductPrice product={this.props.product} />
            </Row>
          </Col>
        </div>
      );
    } else {
      return (
        <div className="product">
          Loading product...
        </div>
      );
    }
  }
}

const mapStateToProps = (state, props) => ({
  isFetching: state.products.isFetching || state.productTypes.isFetching,
  product: selectProduct(props.match.params.id, state.products.products),
  productType: selectProductTypeForProduct(props.match.params.id, state.products.products, state.productTypes.productTypes)
});

export default connect(mapStateToProps)(ProductPage);