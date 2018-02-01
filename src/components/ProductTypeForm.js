import React from 'react';
import {connect} from 'react-redux';
import {getPossibleParentProductTypes} from '../selectors/productTypes';

class ProductTypeForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      possibleParents: props.possibleParents,
      parentId: '',
      name: '',
      error: ''
    }
  }

  onNameChange(e) {
      const name = e.target.value;
      this.setState(() => ({ name }));
  }

  onParentSelected() {

  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.name) {
      this.setState(() => ({ error: 'Please provide a name'}))
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            autoFocus
            onChange={this.onNameChange}
            placeholder='Name'
            type='text'
            value={this.state.name}
          />
          <select>
            <option value='null'>None</option>
            {this.state.possibleParents && this.state.possibleParents.map(parent => <option value={parent.id}>{parent.name}</option>)}
          </select>
          <button>Add Product Type</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  possibleParents: getPossibleParentProductTypes(state.productTypes.data)
});

const ConnectedProductTypeForm = connect(mapStateToProps)(ProductTypeForm);
export default ConnectedProductTypeForm;