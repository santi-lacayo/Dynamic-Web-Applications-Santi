import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//The root injects our react component somewhere else
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

