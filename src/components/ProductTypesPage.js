import React from 'react';
import {connect} from 'react-redux';
import {fetchProductTypes} from '../actions/productTypes';
import {Link} from 'react-router-dom';
import AdminPageTitle from './AdminPageTitle';
import PrimaryButton from './PrimaryButton';
import ProductSummaryCard from './ProductSummaryCard';
import NegativeButton from './NegativeButton';
import {fetchProducts} from '../actions/products';
import {selectProductsWithProductType} from '../selectors/products';
import ProductTypeCard from './ProductTypeCard';

class ProductTypesPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div className="product-types admin__container">
        {/* TODO: One day have breadcrumbs here */}
        <AdminPageTitle>Product Types</AdminPageTitle>
        <div className='product-types__actions'>
          {/* TODO: show actions that can be done for product types */}
          <div className='product-types__actions--left'>

          </div>
          <div className='product-types__actions--right'>
            <PrimaryButton text='Add Product Type' />
          </div>
        </div>
        <div className='product-types__lists'>
          {/* TODO: loop through all product types and show products / stats at a glance */}
          {this.props.productTypes && this.props.productTypes.map(productType => (
            <ProductTypeCard productType={productType} products={selectProductsWithProductType(productType.id, this.props.products)} key={productType.id}/>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.productTypes.isFetching,
  productTypes: state.productTypes.productTypes,
  products: state.products.products
});

const ConnectedProductTypesPage = connect(mapStateToProps)(ProductTypesPage);
export default ConnectedProductTypesPage;