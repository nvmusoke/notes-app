import React, { Component } from 'react';

import { firebase } from '../utils/firebase';

class LogoutButton extends Component {
  handleClick(e) {
    e.preventDefault();

    firebase.auth().signOut();
  }

  render() {
    return (
      <a
        className="logout-div" onClick={ this.handleClick.bind(this) }>{ this.props.children }</a>
    )
  }
}

export default LogoutButton;
