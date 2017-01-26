import React, { Component } from 'react';
import { firebase, firebaseListToArray } from 'firebase';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm:this.props.searchTerm
    }
  }

  // handleFilter(e){
  //   console.log(e.target.value)
  //   this.setState({
  //     searchTerm: e.target.value
  //   })
  // }

  render() {
    return (
      <div className="search-dashboard">
        <input ref="searchBar" onKeyUp={this.props.onSearchTermChanged.bind(this)} className="search" type="text" value={this.state.searchTerm}></input>
      </div>
    );
  }
}

export default SearchBar;
