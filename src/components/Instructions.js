import React, { Component } from 'react';

class Instructions extends Component {

  render() {
    return (
      <div>
        <div className="instructions-title">
          <h4>How it Works</h4>
        </div>
        <div className="instructions-container">
          <div className="card">
            <img className="instructions-img-login" src={require("../../public/images/create.png")} />
            <p>Login with GitHub so we can save cards to your unique collection!</p>
          </div>
          <div className="card">
            <img className="instructions-img-create" src={require("../../public/images/create.png")} />
            <p>Create a card directly in your dashboard or go to the Lookup page
                to search for info before creating.</p>
          </div>
          <div className="card">
            <img className="instructions-img-view" src={require("../../public/images/view.png")} />
            <p>Cards are viewable and searchable at any time via the dashboard.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;
