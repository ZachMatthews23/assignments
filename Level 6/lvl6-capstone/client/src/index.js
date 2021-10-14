import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BroweserRouter } from 'react-router-dom'


ReactDOM.render(
  <BroweserRouter>
    <App />
  </BroweserRouter>
  ,
  document.getElementById('root')
);