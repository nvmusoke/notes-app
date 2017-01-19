import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <div className="search-dashboard">
        <input className="search" type="text" placeholder="Search"></input>
      </div>
    );
  }
}

export default SearchBar;
