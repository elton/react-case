import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Component from './components/Component';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/component' element={<Component />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
