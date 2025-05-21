// filepath: c:\Users\melvi\OneDrive\Documenten\school folder\progammer folder\module_projects\8.1_loveufest\8.1-lu-repo\pwa-app-8.1\src\main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)