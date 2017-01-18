import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import dotenv from 'dotenv';

dotenv.config({ silent:true });


import App from './App';
import LandingPage from './components/LandingPage';
import Lookup from './components/Lookup';
import Dashboard from './components/Dashboard';

import About from './components/About'




ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ LandingPage } />
      <Route path="/dashboard" component={ Dashboard } />
      <Route path="/lookup" component={ Lookup } />
      <Route path="/about" component={ About } />
    </Route>
  </Router>,
  document.getElementById('root')
);
