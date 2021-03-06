import React from 'react';
import {fetchProductTypes} from '../../actions/productTypes';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

class ProductForm extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div>
          Product Form is loading...
        </div>
      );
    } else {
      return (
        <div>
          <form className="product-form"
                onSubmit={this.props.handleSubmit}>
            <div className="product-form__product-type-id">
              <label htmlFor="">Product Type ID</label>
              <Field name="productTypeId"
                     component="select"
                     type="text"
                     disabled={this.props.isFetching} >
                <option value={0} />
                {this.props.productTypes.map(productType => <option key={productType.id} value={productType.id}>{productType.name}</option>)}
              </Field>
            </div>
            <div className="product-form__name">
              <label htmlFor="">Name</label>
              <Field name="name"
                     component="input"
                     type="text"
                     disabled={this.props.isFetching} />
            </div>
            <div className="product-form__thumbnail-url">
              <label htmlFor="">Thumbnail URL</label>
              <Field name="thumbnailUrl"
                     component="input"
                     type="text"
                     disabled={this.props.isFetching} />
            </div>
            <button className="product-form__submit"
                    disabled={this.props.isFetching || this.props.pristine || this.props.submitting}
                    type="submit" >
              Submit
            </button>
            <button className="product-form__clear"
                    disabled={this.props.isFetching || this.props.pristine || this.props.submitting}
                    type="button"
                    onClick={this.props.reset}>
              Clear
            </button>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, props) => ({
  initialValues: {
    productTypeId: props.selectedProductTypeId || 0
  },
  isFetching: state.productTypes.isFetching,
  productTypes: state.productTypes.productTypes
});

export default connect(mapStateToProps)(reduxForm({
  form: 'productForm'
})(ProductForm));