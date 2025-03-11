import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to the ByteStorm Bank</h2>
      <button onClick={() => navigate('/services')}>Go to Services</button>
    </div>
  );
};

export default Home;
