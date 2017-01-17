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
      category:''
    }
  }

  handleTyping(e,value){
    e.preventDefault();
    console.log('my fucking value: ',value);
    this.setState({
      title:value,
      note:value
    });
  }
  handleCategory(e,category){
    e.preventDefault();
    console.log('my fucking category: ',category);
    this.setState({
      category:category
    })
  }
  saveToDash(e){
    e.preventDefault();
    const val=[this.state.title, this.state.note, this.state.category]

    console.log('savetoDash: ',val);
    console.log('back to the fucking dashboard');

    firebase.database()
    .ref('/notes')
    .push({
      title: this.state.title,
      note: this.state.note,
      category:this.state.category,
      created: (Math.floor(Date.now() / 1000 ))
    }).then(data => {
      this.props.finished();

      hashHistory.push('/dashboard')
    });
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
