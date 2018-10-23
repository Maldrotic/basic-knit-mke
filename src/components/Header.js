import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderItem from './HeaderItem';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header style={this.props.style} className='header'>
        <div className='header__container header__left'>
          <HeaderItem>
            Knits
          </HeaderItem>
          <HeaderItem>
            Felts
          </HeaderItem>
        </div>
        <div className='header__container header__center'>
          <HeaderTitle />
        </div>
        <div className='header__container header__right'>
          <HeaderItem>
            Denim
          </HeaderItem>
          <HeaderItem>
            Crochets
          </HeaderItem>
        </div>
      </header>
    );
  }

}

export default Header;