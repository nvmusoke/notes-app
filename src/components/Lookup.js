import React, { Component } from 'react';
// import { hashHistory } from 'react-router';
// import { firebase } from '../utils/firebase';
import CardProcess from './CardProcess';
import { hashHistory } from 'react-router';

class Lookup extends Component {
  constructor(props){
    super(props);
    this.state={
      edit:true
    }
  }

  restoreLookup(){
    hashHistory.push('/dash');
  }

  handleStart(){
    this.setState({
      edit:false
    });
  }

  render() {
    const embedUrl = 'http://www.w3schools.com/'

    return (
      <div className="flexcontainer-parent">
      <iframe
          className="embed-responsive-item"
          src={ embedUrl } width="100%" height="500px"></iframe>
          <CardProcess onCancel={this.handleStart.bind(this)} />
        </div>
    )

  }
}

export default Lookup;
