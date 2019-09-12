/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Manage from './manage';
import Reports from './reports';

ReactDOM.render(<Router>
  <Route path="/manage" component={Manage} />
  <Route path="/reports" component={Reports} />
  <Route exact path="/" component={App} />

</Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
