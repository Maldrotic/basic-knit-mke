import React from 'react';

class AdminActionListLeft extends React.Component {

  render() {
    return (
      <div className='admin-action-list__left'>
        {this.props.children}
      </div>
    );
  }

}

export default AdminActionListLeft;