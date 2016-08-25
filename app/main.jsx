import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import wrap from './wrap';
import Hello from './components/hello';

const App = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ Hello.Component } />
  </Router>
);

ReactDOM.render(wrap(App, [Hello]), document.getElementById('app'));
