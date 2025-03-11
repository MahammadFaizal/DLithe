import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css'; // Assuming styles are in a separate CSS file

const Deposit = () => {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState('');
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

    const userData = JSON.parse(localStorage.getItem(accNo)) || { balance: 0 };
    setBalance(userData.balance);
  };

  const deposit = () => {
    const amount = parseFloat(depositAmount);
    const accNo = localStorage.getItem("loggedInUser");

    if (!accNo) return;

    const userData = JSON.parse(localStorage.getItem(accNo)) || { balance: 0 };

    if (!isNaN(amount) && amount > 0) {
      userData.balance += amount;
      localStorage.setItem(accNo, JSON.stringify(userData));

      // Update balance display
      setBalance(userData.balance);
      alert("Deposit Successful!");
      history.push('/dashboard'); // Redirect to dashboard
    } else {
      alert("Please enter a valid amount!");
    }
  };

  return (
    <div className="container">
      <h2>Deposit Money</h2>
      <p>Current Balance: <span id="balance">${balance}</span></p>
      <input
        type="number"
        placeholder="Enter Amount"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />
      <button onClick={deposit}>Deposit</button>
    </div>
  );
};

export default Deposit;
