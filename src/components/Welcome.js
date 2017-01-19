import React, { Component } from 'react';

class Welcome extends Component {

  render() {
    return (
      <div>
        <div className="hero">
          <img src={require("../../public/images/stairs.png")} />
        </div>
        <div className="welcome-message">
          <h4>Ending the madness... one step at a time</h4>
        </div>
      </div>
    );
  }
}

export default Welcome;
