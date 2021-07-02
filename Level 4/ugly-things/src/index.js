import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'
import {UglyProvider} from './UglyContext'


ReactDOM.render(
  <UglyProvider>
    <App />
  </UglyProvider>,
  document.getElementById('root')
)

