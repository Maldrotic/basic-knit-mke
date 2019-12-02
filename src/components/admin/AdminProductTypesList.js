import React from 'react';
import ProductTypeCard from './ProductTypeCard';
import {selectProductsWithProductType} from '../../selectors/products';


class AdminProductTypesList extends React.Component {

  render() {
    return (
      <div className='admin-products-types-list'>
        {this.props.productTypes.map(productType => <ProductTypeCard productType={productType} products={selectProductsWithProductType(productType.id, this.props.products)} key={productType.id}/>)}
      </div>
    )
  }

}

export default AdminProductTypesList;