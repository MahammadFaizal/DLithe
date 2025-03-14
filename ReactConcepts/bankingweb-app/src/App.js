import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Services from './components/Services';
import Transaction from './components/Transaction';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;