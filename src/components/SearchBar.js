import React, { Component } from 'react';
import { firebase, firebaseListToArray } from 'firebase';

class SearchBar extends Component {

  render() {
    return (
      <div className="search-dashboard">
        <input onKeyUp={this.props.onSearch} className="search" type="text" placeholder="Search"></input>
      </div>
    );
  }
}

export default SearchBar;
