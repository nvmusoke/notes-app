import React, { Component } from 'react';
import SelectCategory from './SelectCategory';
import CardForm from './CardForm';
import { hashHistory } from 'react-router';
import { firebase } from '../utils/firebase';


class CardProcess extends Component {

  constructor(props){
    super(props);
    this.state={
      title:'',
      note:'',
      category:'',
      uid:'',
      showCategory:true
    }
  }

  handleTitleTyping(e,value){
    e.preventDefault();
    console.log('my fucking title value: ',value);
    this.setState({
      title:value
    });
  }

  handleTyping(e,value){
    e.preventDefault();
    console.log('my fucking value: ',value);
    this.setState({
      note:value
    });
  }

  handleCategory(e,value){
    e.preventDefault();
    console.log('my fucking category: ',value);
    this.setState({
      category:value
    })
  }
  saveToDash(e){
    e.preventDefault();

    const val=[this.state.title,this.state.note,this.state.category];
    const userId = firebase.auth().currentUser.uid;

    console.log('savetoDash: ',val);

    console.log('back to the fucking dashboard');

    firebase.database()
    .ref('/notes')
    .push({
      title:this.state.title,
      note:this.state.note,
      category:this.state.category,
      uid:userId
    }).then(()=>
      {this.props.finished()}
    );

  }
  saveAndStay(e){
    e.preventDefault();
    const val=[this.state.note,this.state.category];
    const userId = firebase.auth().currentUser.uid;
    console.log('savetoDash: ',val);
    console.log('back to the fucking dashboard');
    firebase.database()
    .ref('/notes')
    .push({
      note:this.state.note,
      category:this.state.category,
      uid:userId,
      title:this.state.title
    });
  }

  handleCategory(e){
    e.preventDefault();
    this.setState({
      showCategory:false
    });
  }
  render() {
    const html = (this.state.showCategory) ? (<SelectCategory onChoose={this.handleCategory.bind(this)}/>)
      :
      (<CardForm onButtonPush={this.saveToDash.bind(this)} onStayButtonPush={this.saveAndStay.bind(this)} onTitleType={this.handleTitleTyping.bind(this)} onType={this.handleTyping.bind(this)}/>)

    return (
      <div>Card Process
        { html }

      </div>
    )
  }
}

export default CardProcess;
