import React from 'react';
import ProductTypeForm from './ProductTypeForm';
import {createProductType} from '../../actions/productTypes';
import {connect} from 'react-redux';

class CreateProductTypePage extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(values) {
    this.props.dispatch(createProductType(values));
  }

  render() {
    return (
      <div className="create-product-type">
        {/* TODO: Breadcrumbs... one day */}
        <ProductTypeForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }

}


export default connect()(CreateProductTypePage);