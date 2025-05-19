import { useState } from 'react'
import React from 'react'
// import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
// import PWABadge from './PWABadge.jsx'
import './App.css'

function App() {
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="light-switch">
      <h2>Toggle Dark/Light Mode</h2>
      <p>
        Click the button to toggle between dark and light mode for this page.
      </p>

      {/* Dark/light mode switch */}
      <button onClick={toggleDarkMode}>Toggle dark mode</button>
    </div>
  );
}

export default App;  