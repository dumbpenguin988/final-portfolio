import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.js';
import Home from './Home.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Home/>
  </React.StrictMode>
);

// ReactDOM.render(
//   <BrowserRouter>
//       <App />
//   </BrowserRouter>, 
//   document.getElementById('root')
// )
