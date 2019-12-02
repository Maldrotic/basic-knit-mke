import React from 'react';
import ProductTypeForm from './ProductTypeForm';
import {createProductType, fetchProductTypes} from '../../actions/productTypes';
import {connect} from 'react-redux';
import AdminPageTitle from './AdminPageTitle';

class CreateProductTypePage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    this.props.dispatch(await fetchProductTypes());
  };

  handleSubmit(values) {
    this.props.dispatch(createProductType(values, this.props.authToken));
  }

  render() {
    return (
      <div className="admin__create-product-type-page admin__container">
        {/* TODO: Breadcrumbs... one day */}
        <AdminPageTitle>Create New Product Type</AdminPageTitle>
        {this.props.errorMessage && <p>{this.props.errorMessage}</p>}
        {this.props.isFetching ?
          <p>Fetching data for form...</p> :
          <ProductTypeForm onSubmit={this.handleSubmit.bind(this)} productTypes={this.props.productTypes} isCreating={this.props.isCreating} />
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  isFetching: state.productTypes.isFetching,
  isCreating: state.productTypes.isCreating,
  productTypes: state.productTypes.productTypes,
  errorMessage: state.productTypes.errorMessage,
  authToken: state.auth.token
});

export default connect(mapStateToProps)(CreateProductTypePage);