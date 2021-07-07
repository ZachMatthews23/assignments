import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {MarvelContextProvider} from './MarvelContext'


ReactDOM.render(
  <Router>
      <MarvelContextProvider>
        <App />
      </MarvelContextProvider>  
  </Router>,
  document.getElementById('root')
);