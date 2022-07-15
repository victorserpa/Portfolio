import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MyContext } from './context/MyContext'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <MyContext >
      <App />
    </MyContext>
  </React.StrictMode>
)
