import React, { Component } from 'react';
import NavLink from './NavLink';

class Header extends Component {

  render() {
    return (
      <nav>
      <ul className="nav-ul">
        <li className="nav-li"><NavLink className="navlink" to="/dashboard" onlyActiveOnIndex>Dashboard</NavLink></li>
        <li className="nav-li"><NavLink className="navlink" to="/lookup" onlyActiveOnIndex>Lookup</NavLink></li>
        <li className="nav-li"><NavLink className="navlink" to="/about" onlyActiveOnIndex>About</NavLink></li>

      </ul>
    </nav>
    );
  }
}

export default Header;
