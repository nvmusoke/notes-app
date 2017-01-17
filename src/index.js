import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import dotenv from 'dotenv';
dotenv.config({ silent:true });

import App from './App';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

import './index.css';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ LandingPage } />
      <Route path="/dashboard" component={ Dashboard } />
    </Route>
  </Router>,
  document.getElementById('root')
);
