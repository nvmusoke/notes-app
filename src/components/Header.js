import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <h4>{ this.props.title }</h4>
    );
  }
}

export default Header;
