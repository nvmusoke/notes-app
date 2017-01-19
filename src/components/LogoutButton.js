import React, { Component } from 'react';

import { firebase } from '../utils/firebase';

class LogoutButton extends Component {
  handleClick(e) {
    e.preventDefault();

    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="logout-div">
      <button
        onClick={ this.handleClick.bind(this) }
        className="btn logout">{ this.props.children }</button>
      </div>
    )
  }
}

export default LogoutButton;
