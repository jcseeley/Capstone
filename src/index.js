import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header';


ReactDOM.render(
  <React.Fragment>
    <Header />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);