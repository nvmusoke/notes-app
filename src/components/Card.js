import React, { Component } from 'react';
import { firebase,firebaseListToArray } from '../utils/firebase';


class Card extends Component {
  handleClick(e){
    console.log('note: ',this.props.cardId);
    var id='/notes'+this.props.cardId;
    let db = firebase.database().ref('/notes');
    console.log('db: ',db);
  }

  render() {
    return (
      <div className="card panel panel-default">
        <button onClick={this.handleClick.bind(this)}>X</button>
        <h2>{this.props.title}</h2>
        <div>{this.props.note}</div>
      </div>
    )
  }
}

export default Card;
