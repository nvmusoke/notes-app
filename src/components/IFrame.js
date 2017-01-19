import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';

class IFrame extends Component {

  render() {
    return (

      <div className="iframe">
        <Iframe src="http://www.w3schools.com/" height="700px" width="800px">
      </Iframe>
      </div>
    )
  }
}


export default IFrame;
