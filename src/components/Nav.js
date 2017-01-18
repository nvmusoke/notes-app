import React, { Component } from 'react';
import NavLink from './NavLink';

class Header extends Component {

  render() {
    return (
      <nav>
      <ul>
        <li><NavLink to="/dashboard" onlyActiveOnIndex>Dashboard</NavLink></li>
        <li><NavLink to="/lookup" onlyActiveOnIndex>Lookup</NavLink></li>
        <li><NavLink to="/about" onlyActiveOnIndex>About</NavLink></li>

      </ul>
    </nav>
    );
  }
}

export default Header;
