import React, { Component } from 'react';
import iframe from 'react-iframe';

class iFrame extends Component {

  render() {
    return (

      <div className="iframe">
        <iframe src="http://www.w3schools.com/embed" height="700px" width="800px">
      </iframe>
      </div>
    )
  }
}


export default iFrame;
