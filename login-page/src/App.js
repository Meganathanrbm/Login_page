import React from 'react';
import './App.css';
import Login from './Login';

import { BrowserRouter as Switch, Route, Router, Link } from 'react-router-dom';
import { ReactDOM } from 'react-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />}/>
  
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App