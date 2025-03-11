import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Assuming styles are in a separate CSS file

const Index = () => {
  const redirectToLogin = () => {
    // Redirect to login page
  };

  return (
    <div>
      <div className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign In</Link></li>
        </ul>
      </div>

      <div className="bank-name">
        <h1>🏦 ByteStorm Bank</h1>
        <Link to="/about" className="about-btn">About Us</Link>
      </div>

      <section className="features-section">
        <h3>Banking Features</h3>
        <div className="features-container">
          <div className="feature-card">
            <h4>🔒 Secure Transactions</h4>
            <p>Your money is safe with our encrypted security.</p>
          </div>
          <div className="feature-card">
            <h4>⚡ Instant Transfers</h4>
            <p>Send and receive money quickly and easily.</p>
          </div>
          <div className="feature-card">
            <h4>💳 Bill Payments</h4>
            <p>Pay bills and recharge your phone anytime.</p>
          </div>
          <div className="feature-card login-card" onClick={redirectToLogin}>
            <h4>🔑 Access More Features</h4>
            <p>Click here to login and access these features.</p>
          </div>
        </div>
      </section>

      <div className="footer">
        <p>© 2025 Future Bank. All rights reserved.</p>
        <p>Contact us at 222-222-222</p>
      </div>
    </div>
  );
};

export default Index;
