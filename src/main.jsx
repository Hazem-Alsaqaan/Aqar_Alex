import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from "./redux/store/store.js"
import {HelmetProvider } from 'react-helmet-async';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <HashRouter basename='/'>
          <GoogleOAuthProvider
          clientId={import.meta.env.VITE_CLIENT_ID}>
              <App />
          </GoogleOAuthProvider>
        </HashRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
