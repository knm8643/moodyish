import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles /global.css';
import './assets/styles /custom.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorkerRegistration.register();
