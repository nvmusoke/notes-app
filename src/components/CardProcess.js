import React, { Component } from 'react';
import SelectCategory from './SelectCategory';
import CardForm from './CardForm';
import { hashHistory } from 'react-router';
import { firebase } from '../utils/firebase';


class CardProcess extends Component {
  constructor(props){
    super(props);
    this.state={
      note:'',
      category:''
    }
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
    const val=[this.state.note,this.state.category]
    console.log('savetoDash: ',val);
    console.log('back to the fucking dashboard');
    firebase.database()
    .ref('/notes')
    .push({
      note:this.state.note,
      category:this.state.category
    }).then(()=>
      {this.props.finished()}
    );
  }

  render() {
    return (
      <div>Card Process
        <SelectCategory onChoose={this.handleCategory.bind(this)}/>
        <CardForm onType={this.handleTyping.bind(this)}/>
        <button className="btn">Save and Add Another</button>
        <button onClick={this.saveToDash.bind(this)} className="btn">Save and View Dashboard</button>

      </div>
    )
  }
}

export default CardProcess;
