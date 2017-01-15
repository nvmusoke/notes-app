import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import dotenv from 'dotenv';
dotenv.config({ silent:true });

import App from './App';
import Home from './components/Home';

import './index.css';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
    </Route>
  </Router>,
  document.getElementById('root')
);
