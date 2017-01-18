import React, { Component } from 'react';

import { hashHistory } from 'react-router';
import { firebase } from '../utils/firebase';

import Nav from './Nav';
import Lookup from './Lookup';
import SearchBar from './SearchBar';
import AddCard from './AddCard';
import Cards from './Cards';
import CardProcess from './CardProcess';



class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      showDashboard:true,
      showCardProcess:false,
      showCardView:false,
      cards:[]
    }
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
          console.log('logged in on Dashboard: ', user);
          // console.log('user id: ',user.uid);
        }else{
          hashHistory.push('/');
        }
      });

  }
  handleClick(e){
    e.preventDefault();
    console.log('click handled!');
    this.setState({
      show:'cardprocess'
    });
  }
  restoreDash(){
    this.setState({
      show:'dashboard'
    });
  }
  handleChoose(){
    console.log('handling choose');
    this.setState({
      show:'card'
    });
  }

  render() {
    let dashState = this.state.show;
    let html = '';
    switch (dashState){
      case 'card':
        html =   (<div>
              showing card
            </div>);
        break;
      case 'cardprocess' :
        html = <CardProcess finished={this.restoreDash.bind(this)} />;
        break;
      case 'dashboard':
        html=(<div>
              <h1>User Dashboard</h1>
                <SearchBar />
                <AddCard clicked={this.handleClick.bind(this)} />
                <Cards onChoose={this.handleChoose.bind(this)}/>
            </div>);
        break;
      default:
        html = (<div>
              <h1>User Dashboard</h1>
                <SearchBar />
                <AddCard clicked={this.handleClick.bind(this)} />
                <Cards onChoose={this.handleChoose.bind(this)}/>
            </div>);

    }
    // const html=(this.state.showDashboard) ?
    // (<div>
    //     <h1>User Dashboard</h1>
    //       <SearchBar />
    //       <AddCard clicked={this.handleClick.bind(this)} />
    //       <Cards />
    //   </div>) : '';

    return (
      <div>

      { html }

      </div>
    );
  }
}

export default Dashboard;
