import React, { Component } from 'react';

class Instructions extends Component {

  render() {
    return (
      <div>
        <div className="instructions-title">
          <h4>The Gist</h4>
          </div>
          <div className="instructions-container">
          <div className="instructions-card">
            <img className="instructions-img-login" src={require("../../public/images/login.png")} />
            <p>Login with GitHub so we can save cards to your unique collection!</p>
          </div>
          <div className="instructions-card">
            <img className="instructions-img-create" src={require("../../public/images/create.png")} />
            <p>Create a card in the Dashboard or go to the Lookup page
                to search before creating.</p>
          </div>
          <div className="instructions-card">
            <img className="instructions-img-view" src={require("../../public/images/view.png")} />
            <p className="view">Cards are viewable and searchable at any time via the dashboard.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;
