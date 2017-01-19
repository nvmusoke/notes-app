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

  onPick(){
    console.log('handlepick');
    {this.props.onTap()}
  }

  render() {
    return (
      <div className="card" onClick={this.onPick.bind(this)} id={this.props.category} >
        <button className="delete-card" onClick={this.handleClick.bind(this)}>X</button>

        <h2>{this.props.title}</h2>

      </div>
    )
  }
}

export default Card;
