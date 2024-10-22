import React, { Component } from 'react';

import { firebase } from '../utils/firebase';

class LoginButton extends Component {
  handleClick(e) {
    e.preventDefault();
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider);

  }

  render() {
    return (
      <div className="login-container">
      <button onClick={ this.handleClick.bind(this) }
        className="login-btn btn">{ this.props.children }
      </button>
      </div>
    )
  }
}

export default LoginButton;
