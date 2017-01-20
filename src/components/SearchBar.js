import React, { Component } from 'react';
import { firebase, firebaseListToArray } from 'firebase';

class SearchBar extends Component {

  render() {
    return (
      <div className="search-dashboard">
        <input onKeyUp={this.props.onSearchTermChanged} className="search" type="text" placeholder="Search your collection"></input>
      </div>
    );
  }
}

export default SearchBar;
