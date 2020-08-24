import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


import Contact from './components/Contact';
import Login from './components/Login';
import Learn from './components/Learn';
import PlayOffline from './components/PlayOffline';
import PlayOnline from './components/PlayOnline';
import Register from './components/Register';

import awsconfig from './aws-exports';

import store from './redux/store';

Amplify.configure(awsconfig);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/learn">
          <Learn />
        </Route>
        <Route path="/offline">
          <PlayOffline />
        </Route>
        <Route path="/online">
          <PlayOnline />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Learn />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
