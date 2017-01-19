import React, { Component } from 'react';
import NavLink from './NavLink';
import { firebase } from '../utils/firebase';
import LogoutButton from './LogoutButton';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  sessionButton() {
    if (firebase.auth().currentUser) {
      return <LogoutButton>Logout { this.state.user.displayName }</LogoutButton>;
    }
  }
  render() {
    return (
      <nav>
      <ul className="nav-ul">
        <li className="nav-li"><NavLink className="navlink-dashboard" to="/dashboard" onlyActiveOnIndex>Dashboard</NavLink></li>
        <li className="nav-li"><NavLink className="navlink-lookup" to="/lookup" onlyActiveOnIndex>Lookup</NavLink></li>
        <li className="nav-li"><NavLink className="navlink-about" to="/about" onlyActiveOnIndex>About</NavLink></li>
        <li className="nav-li"><NavLink className="navlink-about" to="/" onlyActiveOnIndex>{this.sessionButton()}</NavLink></li>

      </ul>
    </nav>
    );
  }
}

export default Header;
