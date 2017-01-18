import React, { Component } from 'react';



import Welcome from './Welcome';
import LoginButton from './LoginButton';
import Instructions from './Instructions';



class LandingPage extends Component {

  render() {
    return (

      <div className="container">
      

        <Welcome />
        <LoginButton>Log in with GitHub</LoginButton>
        <Instructions />
        <LoginButton>Log in with GitHub</LoginButton>

      </div>
    );
  }
}

export default LandingPage;
