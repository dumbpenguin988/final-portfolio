import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterWrapper from './Router-wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterWrapper />
  </React.StrictMode>
);
