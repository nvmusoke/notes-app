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
    {this.props.noRoute()}
  }

  onPick(){
    let cardNum = this.props.cardId;
    {this.props.onTap(cardNum)}
  }

  render() {
    return (
      <div onClick={this.onPick.bind(this)} id={this.props.category} className="card panel panel-default">
        <button onClick={this.handleClick.bind(this)}>X</button>

        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default Card;
