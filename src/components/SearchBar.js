import React, { Component } from 'react';
import { firebase, firebaseListToArray } from 'firebase';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm:this.props.searchTerm
    }
  }

  handleFilter(e){
    console.log('handleFilter value is: ',e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }


  render() {
    return (
      <div className="search-dashboard">
        <input ref="searchBar" onChange={this.handleFilter.bind(this)} onKeyUp={this.props.onSearchTermChanged.bind(this)} value={this.state.searchTerm} className="search" type="text" ></input>
      </div>
    );
  }
}

export default SearchBar;
