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
      // console.log('Card data: ', cardData);
      this.setState({
        cards:cardData
      });
    });
  }

  handleTap(id){
    console.log('clicked card id: ', id);
    {this.props.onChoose(this.state.cards,id)}
  }
  routeNo(){
  //   console.log('routeNo running');
    {this.props.doNotRoute()}
  }

  render() {
    const user = firebase.auth().currentUser;
    const cards = this.state.cards.map(card=>{
          if(card.uid===user.uid){
            return <Card onTap={this.handleTap.bind(this)} noRoute={this.routeNo.bind(this)} category={card.category} user={card.uid} title={card.title} note={card.note} cardId={card.id}/>;
          }
        });
        // console.log('cards array: ',cards);
        return (
          <section id="cards" className="container-fluid">
            { cards.reverse() }
          </section>
        );
  }
}

export default Cards;
