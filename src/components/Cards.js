import React, { Component } from 'react';
import Card from './Card.js';
import { firebase, firebaseListToArray } from '../utils/firebase';


class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchterm: '',
      cards:[]
    }
  }
  searchData(val,maybe){
    let searchterm = this.state.searchterm;
    console.log('the searchterm is: ',searchterm);
    firebase.auth().onAuthStateChanged(user=>{
      console.log('user ID in Cards is: ',user.uid);
    });

    firebase.database()
    .ref('/notes/')
    .on('value', data => {
      const cardData = firebaseListToArray(data.val());
      console.log('Cardy data: ', cardData);
      const user = firebase.auth().currentUser;

      const cards = cardData.map(card=>{
          if(card.uid===user.uid){
            // return <Card onTap={this.handleTap.bind(this)} noRoute={this.routeNo.bind(this)} category={card.category} user={card.uid} title={card.title} note={card.note} cardId={card.id}/>;
            return card;
          }
        });
        console.log('what we have: ',cards);

        let final = [];
        for(let i=0; i<cards.length; i++){
          if (!cards[i]){
            console.log('no');
          }else{
            final.push(cards[i]);
          }
        };
        console.log('now we have, ',final);
        let full=final;
        if(maybe===1){
          full = final.map(card=>{
            console.log('card category: ',card.category);
            console.log('searchterm: ',searchterm);
            if(card.category===searchterm){
              return card;
            }
          });
        }

      this.setState({
        cards:full
      });
    });
  }
  componentWillMount(){
    let searchterm = this.props.searchTerm;
    this.setState({
      searchterm:searchterm
    });
    this.searchData(this.state.searchterm,2);
  }
  componentDidMount(){
    let searchterm = this.props.searchTerm;
    this.setState({
      searchterm:searchterm
    });
    this.searchData(this.state.searchterm,1);
  }
  // componentDidUpdate(){
  //   this.searchData(this.state.searchterm,2);
  // }

  handleTap(id){
    console.log('clicked card id: ', id);
    {this.props.onChoose(this.state.cards,id)}
  }
  routeNo(){
  //   console.log('routeNo running');
    {this.props.doNotRoute()}
  }

  render() {
    console.log('cards array in Cards.render(): ',this.state.cards);
        let cards = this.state.cards.map(card=>{
          return <Card onTap={this.handleTap.bind(this)} noRoute={this.routeNo.bind(this)} category={card.category} user={card.uid} title={card.title} note={card.note} cardId={card.id}/>;
        });


        return (

          <section id="cards" className="container-fluid">
            { cards.reverse() }
          </section>
        );
  }
}

export default Cards;
