import React, { Component } from 'react';
import { firebase,firebaseListToArray } from '../utils/firebase';


class CardView extends Component {
  handleClick(e){
    console.log('note: ',this.props.cardId);
    var id=this.props.cardId;
    if(confirm('Are you sure?'))
    {
      firebase.database().ref('/notes').child(id).remove();
    }
  }
  viewEdit(){

  }

  updateCard(){

  }

  render() {
    return (
      <div className="card-view panel panel-default">
        <button onClick={this.handleClick.bind(this)}>X</button>

        <h2 className="input-title">{this.props.title}</h2>
        <div className="input-note">{this.props.note}</div>
        <input type="text"></input>
        <textarea />
        <button onClick={this.props.onCancel} className="btn">Cancel</button>
        <button onEdit={this.viewEdit.bind(this)} className="btn">Edit</button>
        <button onSave={this.updateCard.bind(this)} className="btn">Save</button>
      </div>
    )
  }
}

export default CardView;
