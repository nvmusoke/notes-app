import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import iframe from 'react-iframe';

class iFrame extends Component {

  render() {
    return (


      <div className="iframe">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/owsfdh4gxyc" frameborder="0" allowfullscreen></iframe>

      </div>
    )
  }
}


export default iFrame;
