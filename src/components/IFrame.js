import React, { Component } from 'react';

class iFrame extends Component {

  render() {
    return (

      <div className="iframe">
        <iFrame src="//cdn.iframe.ly/embed.js" async height="700px" width="800px"/>
      </div>
    )
  }
}


export default iFrame;
