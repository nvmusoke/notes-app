import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Header from './components/Header';
import Footer from './components/Footer';

import { firebase } from './utils/firebase';
import { hashHistory } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentWillMount() {
    console.log('App firebase: ',firebase);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Logged in:', user);
        this.setState({ user });
        hashHistory.push('/dashboard');
      } else {
        console.log('failed to login');
        this.setState({ user: {} });
      }
    });
  }

  sessionButton() {
    if (!firebase.auth().currentUser) {
      return <LoginButton>Log in with GitHub</LoginButton>;
    } else {
      return <LogoutButton>Logout { this.state.user.displayName }</LogoutButton>;
    }
  }

  render() {
    const welcomeMessage = (firebase.auth().currentUser) ?
      <h4>Hi { this.state.user.displayName }!</h4> :
      '';

    return (
      <div className="container">
        {this.sessionButton() }
        <Header />
        <h1>gistAlt</h1>
        { welcomeMessage }
        <div className="content">
          { this.props.children || <LandingPage /> }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
