import React from 'react';
import {connect} from 'react-redux';
import {fetchProductTypes} from '../actions/productTypes';
import {Link} from 'react-router-dom';
import AdminPageTitle from './AdminPageTitle';
import PrimaryButton from './PrimaryButton';
import ProductSummaryCard from './ProductSummaryCard';

class ProductTypesPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
  }

  render() {
    return (
      <div className="product-types">
        {/* TODO: One day have breadcrumbs here */}
        <AdminPageTitle>Product Types</AdminPageTitle>
        <div className='product-types__actions'>
          {/* TODO: show actions that can be done for product types */}
          <div className='actions__left'>

          </div>
          <div className='actions__right'>
            <PrimaryButton>Add Product Type</PrimaryButton>
          </div>
        </div>
        <div className='product-types__lists'>
          {/* TODO: loop through all product types and show products / stats at a glance */}
          {this.props.productTypes && this.props.productTypes.map(productType => (
            <div className='product-type-overview' id={`product-type-overview-${productType.id}`} key={productType.id}>
              <div className='product-type-overview__header'>
                <div className='product-type-overview__header--left'>
                  <h3>{productType.name}</h3>
                  <h5>{productType.id}</h5>
                </div>
                <div className='product-type-overview__header--right'>
                  <PrimaryButton>
                    Add Product
                  </PrimaryButton>
                </div>
              </div>
              <hr/>
              <div className='product-type-overview__product-list'>
                {productType.products && productType.products.map(product => (
                  <ProductSummaryCard product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.productTypes.isFetching,
  productTypes: state.productTypes.productTypes
});

const ConnectedProductTypesPage = connect(mapStateToProps)(ProductTypesPage);
export default ConnectedProductTypesPage;