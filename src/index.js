import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'
import Login from './Pages/Login';
import Routes from './routes'

import { BrowserRouter } from 'react-router-dom';


//quando for iniciar ultilize o npm start;
//caso de o erro: 'react-scripts' não é reconhecido como um comando interno ou externo 
//ultilize o comando: npm install react-scripts --save

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  );

reportWebVitals();
