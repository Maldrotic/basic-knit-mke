import React from 'react';
import {Field, reduxForm} from 'redux-form';

const ProductTypeForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form className="product-type-form"
          onSubmit={handleSubmit}>
      <div className="product-type-form__parent-id">
        <label htmlFor="">Parent ID</label>
        <Field name="parent_id" component="input" type="text" />
      </div>
    </form>
  )
};

export default ProductTypeForm;