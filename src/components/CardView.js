import React, { Component } from 'react';
import { firebase,firebaseListToArray } from '../utils/firebase';


class CardView extends Component {
  constructor(props){
    super(props);
    this.state={
      edit:'',
      hideFields: true,
      hideEdit:false,
      title:'',
      text:''
    }
  }
  componentWillMount(){
    const cardId=this.props.cardNo;
    let cardTitle='';
    let cardNote='';
    firebase.database()
    .ref('/notes')
    .child(cardId)
    .on('value', data => {
      let cardData = data.val();
      cardNote = cardData.note;
      cardTitle = cardData.title;
      console.log('Our fucking card is: ', cardData);
      this.setState({
        title:cardTitle,
        text:cardNote
      });

      console.log('fucking title: ',cardTitle);
    });
  }
  handleClick(e){
    console.log('note: ',this.props.cardId);
    var id=this.props.cardId;
    if(confirm('Are you sure you want to delete this?'))
    {
      firebase.database().ref('/notes').child(id).remove();
    }
    this.props.onCancel();
  }
  handleEdit(){
    console.log('handle edit');
    var id=this.props.cardId;
    // firebase.database().ref('/notes').child(id).update({
    //   title:
    // });
    this.setState({
      hideFields:false,
      hideEdit:true
    });
  }

  editTitle(e){
    this.setState({
      title: e.target.value
    });
  }
  editText(e){
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e){
    const cardId=this.props.cardNo;
    e.preventDefault();
    console.log('submithandle');
      const cardTitle = this.refs.cardTitle.value;
      const cardText = this.refs.cardText.value;

    firebase.database()
      .ref('/notes').child(cardId)
      .update({
        title: cardTitle,
        note: cardText
      })
      .then(data => {
        console.log('Successful save');
        this.props.onCancel();
      });
  }

  render() {

    return (
      <div className="card-view panel panel-default">
      <div className="card-edit">
        <button className="card-view-x-btn" onClick={this.handleClick.bind(this)}>X</button>
        <h2>{ this.state.title }</h2>
        <div>{ this.state.text }</div>
        {this.state.edit}

          <form onSubmit={this.handleSubmit.bind(this)} className="form form-default">
            <div className={ this.state.hideFields ? 'hidden' : '' }>
              <input className="input-title" ref="cardTitle" onKeyUp={this.editTitle.bind(this)} type="text" placeholder="Title"/>
              <textarea className="input-note" ref="cardText" onKeyUp={this.editText.bind(this)}>{this.state.text}</textarea>
            </div>

          </form>
          </div>
          <div className="card-view-btns">
          <button type="button" onClick={this.props.onCancel} className="btn">Cancel</button>
          <button className={this.state.hideEdit ? 'hidden' : 'btn' } type="button"  onClick={this.handleEdit.bind(this)}>Edit</button>
          <input type="submit" className={ this.state.hideFields ? 'hidden' : 'btn' } value="Save"/>
          </div>
      </div>
    )
  }
}

export default CardView;
