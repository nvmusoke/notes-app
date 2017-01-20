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
      cards:[]
    }
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
    this.search(e.target.value);
  }

  search(term){
    this.setState({
      show:'results'
    });
    firebase.database()
    .ref('/notes')
    .on('value',(data)=>{
      let snapshot = data.val();
      console.log('the data: ',firebaseListToArray(snapshot));
      this.setState({
        cards:firebaseListToArray(snapshot)
      });
    })
    const userId = firebase.auth().currentUser.uid;
    let data=this.state.cards;
    let result = data.map(value=>{

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
    let newresult = [];
    for(let i=0; i<final.length; i++){
      if(term === final[i].category){
        newresult.push(final[i]);
      }

    }
    console.log('newresult: ',newresult);
    return newresult;
  }



  render() {
    let dashState = this.state.show;
    let html = '';
    switch (dashState){
      case 'card':
        html = (<div>
              <CardView category={this.state.category} cardId = { this.state.cardNum } cardNo={this.state.cardNum} onCancel={this.cancelCardView.bind(this)}/>
            </div>);
        break;
      // case 'results':
      //   html= (<div><div className="dashboard-options">
      //           <SearchBar onSearchTermChanged={this.searchTermChanged.bind(this)} />
      //           <AddCard clicked={this.handleClick.bind(this)} />
      //
      //           <Cards2 doNotRoute={this.cutRouting.bind(this)} onChoose={this.handleChoose.bind(this)}/>
      //
      //       </div>
      //
      //     </div>);
      // break;
      case 'cardprocess' :
        html = <CardProcess finished={this.restoreDash.bind(this)} />;
        break;
      case 'dashboard':
        html=(<div><div className="dashboard-options">
                <SearchBar onSearchTermChanged={this.searchTermChanged.bind(this)} />
                <AddCard clicked={this.handleClick.bind(this)} />

                <Cards doNotRoute={this.cutRouting.bind(this)} onChoose={this.handleChoose.bind(this)}/>

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
                <Cards onChoose={this.handleChoose.bind(this)} doNotRoute={this.cutRouting.bind(this)}/>

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
