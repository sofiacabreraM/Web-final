import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const appContainer = document.getElementById("app"); 
const root = createRoot(appContainer);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
