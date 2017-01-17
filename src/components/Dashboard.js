import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import SearchBar from './SearchBar';
import AddCard from './AddCard';
import Cards from './Cards';
import CardProcess from './CardProcess';
import { firebase } from '../utils/firebase';


class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      showDashboard:true,
      cards: []
    }
  }

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
  handleClick(e){
    e.preventDefault();
    console.log('click handled!');
    this.setState({
      showDashboard:false
    });
  }
  restoreDash(){
    this.setState({
      showDashboard:true
    });
  }

  render() {
    const html=(this.state.showDashboard) ?
    (<div>
        <h1>User Dashboard</h1>
          <SearchBar />
          <AddCard clicked={this.handleClick.bind(this)} />
          <Cards />
      </div>) : <CardProcess finished={this.restoreDash.bind(this)} />;

    return (
      <div>{ html }</div>
    );
  }
}

export default Dashboard;
