import React, { Component } from 'react';



import Welcome from './Welcome';
import LoginButton from './LoginButton';
import Instructions from './Instructions';



class LandingPage extends Component {

  render() {
    return (

      <div className="landingpage-container">


        <Welcome />
        <LoginButton>Login</LoginButton>
        <Instructions />
        <LoginButton>Login</LoginButton>

      </div>
    );
  }
}

export default LandingPage;
