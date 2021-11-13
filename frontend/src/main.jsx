import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { IoProvider } from 'socket.io-react-hook';

ReactDOM.render(
  <React.StrictMode>
    <IoProvider>
      <App />
    </IoProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
