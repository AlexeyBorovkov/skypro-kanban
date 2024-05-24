import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '/img/logo.png'
import '/img/logo_dark.png'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
)