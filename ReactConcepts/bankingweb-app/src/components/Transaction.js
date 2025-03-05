import React, { useState } from 'react';
import '../styles/Transaction.css';


const Transaction = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Transaction successful!');
  };

  return (
    <div className="container transaction-container">
      <h2>Money Transfer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Recipient Account Number"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default Transaction;
