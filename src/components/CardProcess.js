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
      uid:''
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
    }).then(()=>
      
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
    }).then(()=>
      {this.props.finished()}
    );
  }

  render() {
    return (
      <div>Card Process
        <SelectCategory onChoose={this.handleCategory.bind(this)}/>
        <CardForm onTitleType={this.handleTitleTyping.bind(this)} onType={this.handleTyping.bind(this)}/>
        <button onClick={this.saveAndStay.bind(this)}  className="btn">Save and Add Another</button>
        <button onClick={this.saveToDash.bind(this)} className="btn">Save and View Dashboard</button>
      </div>
    )
  }
}

export default CardProcess;
