import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import SearchBar from './SearchBar';
import AddCard from './AddCard';
import Cards from './Cards';
import { firebase } from '../utils/firebase';




class Dashboard extends Component {
  componentWillMount(){
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
          console.log('logged in on Dashboard: ', user);
        }else{
          hashHistory.push('/');
        }
      });
  }
  render() {
    return (
      <div>
        <h1>User Dashboard</h1>

        <SearchBar />
        <AddCard />
        <Cards />

      </div>
    )
  }
}

export default Dashboard;
