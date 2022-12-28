import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Pages/Home/Home';
import './reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);