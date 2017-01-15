import React, { Component } from 'react';
import Home from './components/Home';
import GitHubLoginButton from './components/GitHubLoginButton';
import GitHubLogoutButton from './components/GitHubLogoutButton';

import { firebase } from './utils/firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
//AUTH KEY PROBLEM IN THE COMPONENTWILLMOUNT FUNCTION AND WELCOMEMESSAGE
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Logged in:', user);
        this.setState({ user });
      } else {
        console.log('failed to login');
        this.setState({ user: {} });
      }
    });
  }

  sessionButton() {
    if (!firebase.auth().currentUser) {
      return <GitHubLoginButton>Log in with GitHub</GitHubLoginButton>;
    } else {
      return <GitHubLogoutButton>Logout { this.state.user.displayName }</GitHubLogoutButton>;
    }
  }

  render() {
    const welcomeMessage = (firebase.auth().currentUser) ?
      <h4>Hi { this.state.user.displayName }!</h4> :
      '';

    return (
      <div className="container">
        {this.sessionButton() }
        <h1>Notemon</h1>
        { welcomeMessage }
        <div className="content">
          { this.props.children || <Home /> }
        </div>
      </div>
    );
  }
}

export default App;
