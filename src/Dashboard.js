import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css'; // Assuming styles are in a separate CSS file

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const history = useHistory();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    const accNo = localStorage.getItem("loggedInUser");
    if (!accNo) {
      alert("No user logged in!");
      history.push('/login'); // Redirect to login
      return;
    }

    const userData = JSON.parse(localStorage.getItem(accNo));
    if (userData && userData.balance !== undefined) {
      setBalance(userData.balance);
    } else {
      setBalance(0); // Default if no data is found
    }
  };

  const navigate = (page) => {
    history.push(`/${page}`); // Navigate to the specified page
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    history.push('/login'); // Redirect to login
  };

  return (
    <div className="container">
      <h2>Welcome to Your Bank</h2>
      <p>Current Balance: <span id="balance">${balance}</span></p>

      <button onClick={() => navigate('deposit')}>Deposit</button>
      <button onClick={() => navigate('withdraw')}>Withdraw</button>
      <button onClick={() => navigate('balance')}>Balance</button>
      <button onClick={() => navigate('loan')}>Loan</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
