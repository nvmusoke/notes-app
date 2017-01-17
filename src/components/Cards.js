import React, { Component } from 'react';
import Card from './Card.js';
import { firebase, firebaseListToArray } from '../utils/firebase';


class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    }
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user=>{
      console.log('user ID in Cards is: ',user.uid);
    });
    firebase.database()
    .ref('/notes')
    .on('value', data => {
      const cardData = firebaseListToArray(data.val());
      console.log('Card data: ', cardData);
      this.setState({
        cards:cardData
      });
    });
  }

  render() {
    const cards = this.state.cards.map(card=>{
          return <Card key={this.key} user={card.uid} title={card.title} note={card.note} />;
        });
        console.log('cards array: ',cards);
        return (
          <section id="cards" className="container-fluid">
            { cards }
          </section>
        );
  }
}

export default Cards;
