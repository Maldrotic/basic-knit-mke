import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {fetchProductTypes} from '../../actions/productTypes';

class ProductTypeForm extends React.Component {

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
          Product Type Form is loading...
        </div>
      );
    } else {
      return (
        <div>
          <form className="product-type-form"
                onSubmit={this.props.handleSubmit}>
            <div className="product-type-form__parent-id">
              <label htmlFor="">Parent ID</label>
              <Field name="parentId" component="select" type="text" disabled={this.props.isFetching} >
                <option value={0} />
                {this.props.productTypes.map(productType => <option key={productType.id} value={productType.id}>{productType.name}</option>)}
              </Field>
            </div>
            <div className="product-type-form__name">
              <label htmlFor="">Name</label>
              <Field name="name" component="input" type="text" disabled={this.props.isFetching} />
            </div>
            <button className="product-type-form__submit"
                    disabled={this.props.isFetching || this.props.pristine || this.props.submitting}
                    type="submit">
              Submit
            </button>
            <button className="product-type-form__clear"
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

const mapStateToProps = (state) => ({
  isFetching: state.productTypes.isFetching,
  productTypes: state.productTypes.productTypes
});

export default connect(mapStateToProps)(reduxForm({
  form: 'productTypeForm'
})(ProductTypeForm));