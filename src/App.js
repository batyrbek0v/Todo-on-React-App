import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
function App() {
  return (
    <Routes>
      <Route path='/' element={ <Main /> } />
      <Route path='/auth/register' element={ <Register /> } />
      <Route path='/auth/login' element={ <Login /> } />
    </Routes>
  )
}

export default App;
