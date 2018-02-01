import React from 'react';

class HomePage extends React.Component {

  state = {
    items: []
  };

  componentDidMount() {
    fetch('/api/test')
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result.items
        })
      });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Home Page!</h1>
        {this.state.items ? this.state.items.map((item, index) => <p key={index}>{item}</p>) : <p>There are no items</p>}
      </div>
    );
  }
}

export default HomePage;