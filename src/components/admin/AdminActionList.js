import React from 'react';

class AdminActionList extends React.Component {

  render() {
    return (
      <div className='admin-action-list'>
        {this.props.children}
      </div>
    );
  }

}

export default AdminActionList;