import React, { Component } from 'react';
// import { hashHistory } from 'react-router';
// import { firebase } from '../utils/firebase';

import iFrame from './IFrame';
import CardProcess from './CardProcess';

class Lookup extends Component {

  render() {
    return (
      <div>
        <iFrame />
        <CardProcess />
      </div>
    )
  }
}

export default Lookup;
