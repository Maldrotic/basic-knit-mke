import React from 'react';

class HeaderItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='header__item'>
        {this.props.children}
      </div>
    )
  }

}

export default HeaderItem;