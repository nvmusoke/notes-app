import React, { Component } from 'react';
// import { hashHistory } from 'react-router';
// import { firebase } from '../utils/firebase';
import CardProcess from './CardProcess';

class Lookup extends Component {

  render() {
    const embedUrl = 'http://www.w3schools.com/'

    return (
      <div className="flexcontainer-parent">
      <iframe
          className="embed-responsive-item"
          src={ embedUrl } width="100%" height="500px"></iframe>
      <CardProcess />
      </div>
    )
  }
}

export default Lookup;
