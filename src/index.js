import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import dotenv from 'dotenv';

dotenv.config({ silent:true });
import Lookup from './components/Lookup';

import App from './App';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';



ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ LandingPage } />
      <Route path="/dashboard" component={ Dashboard } />
      <Route path="/lookup" component={ Lookup } />
    </Route>
  </Router>,
  document.getElementById('root')
);
