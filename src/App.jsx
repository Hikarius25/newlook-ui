import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Function from './pages/Function';
import Purchase from './pages/Purchase';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:activepage?" element={<Profile />} />
        <Route path="/function" element={<Function />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
  );
};

export default App;
