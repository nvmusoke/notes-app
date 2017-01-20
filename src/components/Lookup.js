import React, { Component } from 'react';
// import { hashHistory } from 'react-router';
// import { firebase } from '../utils/firebase';
import CardProcess from './CardProcess';
import { hashHistory } from 'react-router';

class Lookup extends Component {
  restoreDash(){
    hashHistory.push('/dashboard');
  }

  render() {
    const embedUrl = 'http://www.w3schools.com/'

    return (
      <div className="flexcontainer-parent">

      <iframe
          className="embed-responsive-item"
          src={ embedUrl } width="500px" height="500px"></iframe>
      <CardProcess finished={this.restoreDash.bind(this)} />
      </div>
    )
  }
}

export default Lookup;
