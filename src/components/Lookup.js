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
    const embedUrl = 'https://repl.it/languages/javascript'

    return (
      <div className="flexcontainer-parent">

      <iframe
          className="embed-responsive-item"
          src={ embedUrl } width="500px" height="600px"></iframe>
      <CardProcess finished={this.restoreDash.bind(this)} />
      </div>
    )
  }
}

export default Lookup;
