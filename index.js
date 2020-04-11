import React, { Component } from 'react';
import { render } from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './style.css';
import App from './components/App'; 
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

const store = configureStore();

render(
  <ReduxProvider store={store}>
  <Router>
  <App />
  </Router>
  </ReduxProvider>, 
  document.getElementById('root'));
