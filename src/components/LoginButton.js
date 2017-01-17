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
      <button onClick={ this.handleClick.bind(this) }
        className="btn">{ this.props.children }
      </button>
    )
  }
}

export default LoginButton;
