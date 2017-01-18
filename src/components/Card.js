import React, { Component } from 'react';
import { firebase,firebaseListToArray } from '../utils/firebase';


class Card extends Component {
  handleClick(e){
    console.log('note: ',this.props.cardId);
    var id=this.props.cardId;
    if(confirm('are you sure'))
    {
      firebase.database().ref('/notes').child(id).remove();
    }
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
