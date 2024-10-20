import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Signup from './pages/Signup';
import './main.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="account" element={<Account />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  </Router>
);