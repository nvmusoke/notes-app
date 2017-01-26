import React, { Component } from 'react';
import { firebase, firebaseListToArray } from 'firebase';

class SearchBar extends Component {

  render() {
    return (
      <div className="search-dashboard">
        <input ref="searchBar" onKeyUp={this.props.onSearchTermChanged} value={this.props.searchTerm || this.props.children} className="search" type="text"></input>
      </div>
    );
  }
}

export default SearchBar;
