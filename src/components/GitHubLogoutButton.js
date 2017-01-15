import React, { Component } from 'react';

import { firebase } from '../utils/firebase';

class GitHubLogoutButton extends Component {
  handleClick(e) {
    e.preventDefault();

    firebase.auth().signOut();
  }

  render() {
    return (
      <button
        onClick={ this.handleClick.bind(this) }
        className="btn">{ this.props.children }</button>
    )
  }
}

export default GitHubLogoutButton;
