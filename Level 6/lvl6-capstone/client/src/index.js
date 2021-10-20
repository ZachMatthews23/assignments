import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
import WorkoutsProvider from './context/WorkoutsProvider.js'
import ForumProvider from './context/ForumProvider.js'


ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <WorkoutsProvider>
        <ForumProvider>
          <App />
        </ForumProvider>
      </WorkoutsProvider>
    </UserProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);