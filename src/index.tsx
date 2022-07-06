import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './styles/index.scss';

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
