import React, { Component } from 'react';
import Card from './Card.js';
import { firebase, firebaseListToArray } from '../utils/firebase';


class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards:this.props.things
    }
  }

  componentWillMount(){

    this.setState({
      cards:this.props.things
    });
  }
  componentDidMount(){
    this.setState({
      cards:this.props.things
    });
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
    //map through current card array in this.state.cards:
    const notes = this.props.things
    console.log('cards array in Cards.render(): ',notes);
        let cards = notes.map(card=>{
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
