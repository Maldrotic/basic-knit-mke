import React from 'react';

class AdminActionListRight extends React.Component {

  render() {
    return (
      <div className='admin-action-list__right'>
        {this.props.children}
      </div>
    );
  }

}

export default AdminActionListRight;