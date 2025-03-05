import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';


const Services = () => {
  return (
    <div className="container services-container">
      <h2>Services</h2>
      <ul>
        <li><Link to="/transaction">Money Transfer</Link></li>
        <li><Link to="/balance">Check Balance</Link></li>
      </ul>
    </div>
  );
};

export default Services;
