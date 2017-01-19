import React, { Component } from 'react';

import LandingPage from './components/LandingPage';
// import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import './App.css';

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
        this.setState({ user });
        hashHistory.push('/dashboard');
      } else {
        console.log('failed to login');
        this.setState({ user: {} });
      }
    });
  }

  sessionButton() {
    if (firebase.auth().currentUser) {
      return <LogoutButton>Logout { this.state.user.displayName }</LogoutButton>;
    }
  }

  render() {

    const welcomeMessage = (firebase.auth().currentUser) ?
      <h4>Hi { this.state.user.displayName }!</h4> :
      '';

    return (
      <div>

        <Header />
        <Nav user={this.state.user}/>
        <div className="content">
        { this.props.children || <LandingPage /> }
        { this.sessionButton() }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
