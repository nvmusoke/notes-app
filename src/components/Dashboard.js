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
          return value;
        }
      }

      });
      let final = [];
      for(let i=0; i<result.length; i++){
        if (!result[i]){
        }else{
          final.push(result[i]);
        }
      };
      if(final.length === 0){
        this.setState({
          cards:final
        });
      }

      this.setState({
        cards:final
      });
      if(final.length === 0){
        this.setState({
          cards:result
        });
      }
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
    this.setState({
      show:'card',
      cardNum:thisCardId
    });
  }
  cancelCardView(searchTerm){
    console.log('cancelCardView searchTerm: ',searchTerm);
    this.setState({
      show:'dashboard',
      searchTerm:searchTerm
    });
  }
  cutRouting(){
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
      this.setState({
        cards:firebaseListToArray(snapshot),
        searchTerm:term
      });


    const userId = firebase.auth().currentUser.uid;
    let cards=firebaseListToArray(snapshot);
    let result = cards.map(value=>{

      if(value.uid){
        let user = userId.toString();
        let id = value.uid.toString();
      if(user===id){
        return value;
      }
    }

    });
    let final = [];
    for(let i=0; i<result.length; i++){
      if (!result[i]){
      }else{
        final.push(result[i]);
      }
    };
    let absolute = [];
    let testVar = new RegExp(term.toLowerCase());
    for(let i=0; i<final.length; i++){
      if (testVar.test(final[i].category.toLowerCase()) || testVar.test(final[i].note.toLowerCase()) || testVar.test(final[i].title.toLowerCase())){
        absolute.push(final[i]);
      }
    };
    this.setState({
      cards:absolute
    });

    console.log('searchHandle state of cards: ',this.state.cards);
    if(absolute.length===0){
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
              <CardView category={this.state.category} searchTerm={this.state.searchTerm} cardId = { this.state.cardNum } cardNo={this.state.cardNum} onCancel={this.cancelCardView.bind(this)}/>
            </div>);
        break;
      case 'cardprocess' :
        html = <CardProcess finished={ this.restoreDash.bind(this) } />;
        break;
      case 'dashboard':
        html=(<div className="dashboard-options">
                <div>
                  <div className="dashboard-selectors">
                    <SearchBar searchTerm={this.state.searchTerm} onSearchTermChanged={ this.searchTermChanged.bind(this) }/>
                    <AddCard clicked={this.handleClick.bind(this)} />
                    </div>
                <Cards things={cards} onChoose={this.handleChoose.bind(this)} doNotRoute={ this.cutRouting.bind(this) }/>

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
