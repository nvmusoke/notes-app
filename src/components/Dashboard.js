import React, { Component } from 'react';

import { hashHistory } from 'react-router';
import { firebase,firebaseListToArray} from '../utils/firebase';

import Nav from './Nav';
import Lookup from './Lookup';
import SearchBar from './SearchBar';
import AddCard from './AddCard';
import Cards from './Cards';
import CardProcess from './CardProcess';
import CardView from './CardView';


class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      showDashboard:true,
      showCardProcess:false,
      showCardView:false,
      show:'',
      cardNum:'',
      cards:[],
      searchTerm:''
    }
  }

    search(){

      firebase.database()
      .ref('/notes')
      .on('value',(data)=>{
        let snapshot = data.val();
        console.log('the data: ',firebaseListToArray(snapshot));
        this.setState({
          cards:firebaseListToArray(snapshot)
        });


      const userId = firebase.auth().currentUser.uid;
      let cards=this.state.cards;
      let result = cards.map(value=>{

        if(value.uid){
          let user = userId.toString();
          let id = value.uid.toString();
        if(user===id){
          console.log('match!');
          return value;
        }
      }

      });
      let final = [];
      for(let i=0; i<result.length; i++){
        if (!result[i]){
          console.log('no');
        }else{
          final.push(result[i]);
        }
      };
      console.log('final: ',final);

      this.setState({
        cards:final
      });
      console.log('current state of cards: ',this.state.cards);
      });

    }



  componentWillMount(){
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
          // console.log('user id: ',user.uid);
        }else{
          hashHistory.push('/');
        }
      });

      this.search();
  }
  handleClick(e){
    e.preventDefault();
    this.setState({
      show:'cardprocess'
    });
  }
  restoreDash(){
    this.setState({
      show:'dashboard'
    });
  }
  handleChoose(cards,thisCardId){
    console.log('thiscardid: ',thisCardId);
    // console.log('cards passed up:',cards);
    this.setState({
      show:'card',
      cardNum:thisCardId
    });
  }
  cancelCardView(){
    console.log('cancelCardView');
    this.setState({
      show:'dashboard'
    });
  }
  cutRouting(){
    console.log('setting state to dashboard');
    var dash = ()=>this.setState({
      show:'dashboard'
    })
    window.setTimeout(dash,50);
  }

  searchTermChanged(e){
    e.preventDefault();
    console.log('now the freaking value is: ',e.target.value);
    let term = e.target.value;
    firebase.database()
    .ref('/notes')
    .on('value',(data)=>{
      let snapshot = data.val();
      console.log('the data: ',firebaseListToArray(snapshot));
      this.setState({
        cards:firebaseListToArray(snapshot)
      });


    const userId = firebase.auth().currentUser.uid;
    let cards=firebaseListToArray(snapshot);
    let result = cards.map(value=>{

      if(value.uid){
        let user = userId.toString();
        let id = value.uid.toString();
      if(user===id){
        console.log('match!');
        return value;
      }
    }

    });
    let final = [];
    for(let i=0; i<result.length; i++){
      if (!result[i]){
        console.log('no');
      }else{
        final.push(result[i]);
      }
    };
    console.log('final: ',final);

    let absolute = [];
    for(let i=0; i<final.length; i++){
      console.log('final category: ',final[i].category);
      console.log('term: ',term);
      if (final[i].category===term){
        absolute.push(final[i]);
      }
    };
    console.log('absolute: ',absolute);
    this.setState({
      cards:absolute
    });
    console.log('searchHandle state of cards: ',this.state.cards);
    if(absolute.length===0){
      console.log('we will set with result: ',result);
      this.setState({
        cards:final
      });
    }

    });


  }


  render() {
    let cards = this.state.cards;
    console.log('cards we will render: ',cards);
    let dashState = this.state.show;
    let html = '';
    switch (dashState){
      case 'card':
        html = (<div>
              <CardView category={this.state.category} cardId = { this.state.cardNum } cardNo={this.state.cardNum} onCancel={this.cancelCardView.bind(this)}/>
            </div>);
        break;
      case 'cardprocess' :
        html = <CardProcess finished={this.restoreDash.bind(this)} />;
        break;
      case 'dashboard':
        html=(<div><div className="dashboard-options">
                <SearchBar onSearchTermChanged={this.searchTermChanged.bind(this)} />
                <AddCard clicked={this.handleClick.bind(this)} />

                <Cards things={cards} doNotRoute={this.cutRouting.bind(this)} onChoose={this.handleChoose.bind(this)}/>

            </div>

          </div>);
        break;
      default:
        html =(<div className="dashboard-options">
                <div>
                  <div className="dashboard-selectors">
                    <SearchBar onSearchTermChanged={this.searchTermChanged.bind(this)}/>
                    <AddCard clicked={this.handleClick.bind(this)} />
                    </div>
                <Cards things={cards} onChoose={this.handleChoose.bind(this)} doNotRoute={this.cutRouting.bind(this)}/>

            </div>

          </div>);

    }


    return (
      <div>

      { html }

      </div>
    );
  }
}

export default Dashboard;
