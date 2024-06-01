import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '/img/logo.png'
import '/img/logo_dark.png'
import {BrowserRouter} from "react-router-dom";
import { UserProvider } from './context/userContext.jsx'
import { CardsProvider } from './context/cardsContext.jsx'
import "react-day-picker/dist/style.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <UserProvider>
              <CardsProvider>
                  <App />
             </CardsProvider>
          </UserProvider>
      </BrowserRouter>
  </React.StrictMode>,
)