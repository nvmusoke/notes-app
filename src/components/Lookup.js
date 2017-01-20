import React, { Component } from 'react';
// import { hashHistory } from 'react-router';
// import { firebase } from '../utils/firebase';
import CardProcess from './CardProcess';
import { hashHistory } from 'react-router';

class Lookup extends Component {
  constructor(props){
    super(props);
    this.state={
      edit:true,
      url:"http://www.w3schools.com"
    }
  }

  restoreLookup(){
    hashHistory.push('/dashboard');
  }

  handleStart(){
    this.setState({
      edit:false
    });
  }
  changeReplUrl(){
    this.setState({
      url:"https://repl.it/languages/javascript"
    });
  }
  changeCodeWarslUrl(){
    this.setState({
      url:"https://www.codewars.com"
    });
  }

  changeJSFiddleUrl(){
    this.setState({
      url:"https://jsfiddle.net"
    });
  }

  changeW3SchoolsUrl(){
    this.setState({
      url:"http://www.w3schools.com"
    });
  }

  changeCodeFightsUrl(){
    this.setState({
      url:"https://www.codefights.com"
    });
  }


  render() {
    const embedUrl = this.state.url;

    return (

      <div className="flexcontainer-parent">
        <ul className="lookup-links">
        <li><button className="btn" onClick={this.changeReplUrl.bind(this)}>Repl.it</button></li>
        <li><button className="btn" onClick={this.changeCodeWarslUrl.bind(this)}>CodeWars</button></li>
        <li><button className="btn" onClick={this.changeJSFiddleUrl.bind(this)}>JS Fiddle</button></li>
        <li><button className="btn" onClick={this.changeW3SchoolsUrl.bind(this)}>W3Schools</button></li>
        <li><button className="btn" onClick={this.changeCodeFightsUrl.bind(this)}>CodeFights</button></li>
      </ul>
      <iframe
          className="embed-responsive-item"
          src={ embedUrl } width="100%" height="500px"></iframe>
          <CardProcess onCancel={this.handleStart.bind(this)} finished={this.restoreLookup.bind(this)} />
        </div>
    );

  }
}

export default Lookup;
