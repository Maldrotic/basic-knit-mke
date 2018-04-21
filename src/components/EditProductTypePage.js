import React from 'react';
import {connect} from 'react-redux';
import ProductTypeForm from './ProductTypeForm';
import {editProductType, removeProductType} from '../actions/productTypes';

class EditProductTypePage extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      isFetching: false,
      productType: null,
      error: ''
    };
  }

  componentDidMount() {
    this.setState(() => ({ isFetching: true }));
    fetch(`/api/product_types/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(productType => this.setState(() => ({ productType })))
      .catch(() => alert(`Error getting the product type: ${this.props.match.params.id}`))
      .finally(() => {
        this.setState(() => ({ isFetching: false }));
      });
  }

  render() {
    return (
      <div>
        <p>isFetching: {this.state.isFetching ? 'true' : 'false' }</p>
        {
          this.state.productType ? (
            <div>
              <ProductTypeForm
                productType={this.state.productType}
                onSubmit={productType => {
                  this.props.dispatch(editProductType(this.props.match.params.id, productType));
                  this.props.history.push('/admin/product_types');
                }}
              />
              <button
                className="product-type__remove-button"
                onClick={() => {
                  this.props.dispatch(removeProductType(this.props.match.params.id));
                }}
              >
                Remove
              </button>
            </div>
          ) : (
            <div>

            </div>
          )
        }
      </div>
    );
  }
}

const ConnectedEditProductTypePage = connect()(EditProductTypePage);
export default ConnectedEditProductTypePage;