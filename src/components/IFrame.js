import React, { Component } from 'react';
import Iframe from 'react-iframe';


class iFrame extends Component {

  render() {
    return (

      <div className="container">
      <Iframe url="http://www.w3schools.com"  />
      </div>


    )
  }
}

export default iFrame;
