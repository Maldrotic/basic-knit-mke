import React from 'react';
import Card from '../common/Card';
import CardHeader from '../common/CardHeader';
import CardContent from '../common/CardContent';
import CardFooter from '../common/CardFooter';
import PrimaryButton from '../common/PrimaryButton';
import NegativeButton from '../common/NegativeButton';
import ProductSummaryCard from './ProductSummaryCard';

class ProductTypeCard extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Card className='product-type-card'>

        <CardHeader className='product-type-card__header'>
          <div className='product-type-card__header--left'>
            <h3>{this.props.productType.name}</h3>
          </div>

          <div className='product-type-card__header--right'>
            <PrimaryButton text='Add Product' id='add-product-type-button'/>
            <NegativeButton text='X' id='remove-product-type-button'/>
          </div>
        </CardHeader>

        <CardContent className='product-type-card__content'>
          {this.props.products && this.props.products.map(product => <ProductSummaryCard className='product-type-card__product-summary-card'
                                                                                         product={product}
                                                                                         key={product.id}/>)}
        </CardContent>

        <CardFooter className='product-type-card__footer'>
          Hey look I'm a footer.
        </CardFooter>
      </Card>
    );
  }

}

export default ProductTypeCard;