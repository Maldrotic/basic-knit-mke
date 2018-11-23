import React from 'react';
import {fetchProduct} from '../actions/products';
import {selectProduct} from '../selectors/products';
import {connect} from 'react-redux';
import {selectProductTypeForProduct} from '../selectors/productTypes';
import {fetchProductType} from '../actions/productTypes';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductTypeName from './ProductTypeName';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';
import Header from './Header';

class ProductPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProduct(parseInt(this.props.match.params.id)));
  }

  componentDidUpdate() {
    if (this.props.product && this.props.productType === undefined) {
      this.props.dispatch(fetchProductType(parseInt(this.props.product.product_type_id)));
    }
  }

  renderPrimaryProductImage(primaryImageId, images) {
    const primaryImage = images.find(image => primaryImageId === image.id);
    return primaryImage && <ProductImage url={primaryImage.url} />;
  }

  render() {
      return (
        <div className="product-page">
          <Header />
          {
            this.props.product && this.props.productType ?
            (
              <div className='product-page__content-container'>
                <div className='product-page__content product-page__content--left-container'>
                  { this.props.product.primary_image_id && (
                    this.renderPrimaryProductImage(this.props.product.primary_image_id, this.props.product.images)
                  )}
                </div>
                <div className='product-page__content product-page__content--right-container'>
                  <div className='product-page__content--right-top'>
                    <ProductName product={this.props.product} />
                  </div>
                  <div className='product-page__content--right-center'>
                    <ProductTypeName productType={this.props.productType} />
                    <ProductDescription product={this.props.product} />
                    <ProductPrice product={this.props.product} />
                    {/*<ProductColors product={this.props.product} />*/}
                    {/*<ProductMaterial product={this.props.product} />*/}
                  </div>
                  <div className='product-page__content--right-bottom'>
                    <button className='button button-request' disabled>
                      Request
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="product-page__content-container">
                Loading product...
              </div>
            )
          }
        </div>
      );
  }
}

const mapStateToProps = (state, props) => ({
  isFetching: state.products.isFetching || state.productTypes.isFetching,
  product: selectProduct(props.match.params.id, state.products.products),
  productType: selectProductTypeForProduct(props.match.params.id, state.products.products, state.productTypes.productTypes)
});

export default connect(mapStateToProps)(ProductPage);