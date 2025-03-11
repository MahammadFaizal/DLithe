import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css'; // Assuming styles are in a separate CSS file

const Register = () => {
  const [accNo, setAccNo] = useState('');
  const [accHolder, setAccHolder] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('');
  const history = useHistory();

  const registerAccount = () => {
    if (!accNo.match(/^\d{10,}$/)) {
      alert("Invalid Account Number! It should be at least 10 digits.");
      return;
    }
    if (!accHolder.match(/^[A-Za-z\s]+$/)) {
      alert("Invalid Account Holder Name! Only letters allowed.");
      return;
    }
    if (!ifsc.match(/^[A-Z]{4}[0-9]{7}$/)) {
      alert("Invalid IFSC Code! Format: 4 letters + 7 numbers.");
      return;
    }
    if (!phone.match(/^\d{10}$/)) {
      alert("Invalid Phone Number! It should be exactly 10 digits.");
      return;
    }
    if (!branch) {
      alert("Please enter the Bank Branch.");
      return;
    }

    const userData = {
      accNo,
      accHolder,
      ifsc,
      phone,
      branch,
      balance: 0, 
    };

    localStorage.setItem(accNo, JSON.stringify(userData));
    alert("Account Registered Successfully!");
    history.push('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="container">
      <h2>Register Account</h2>
      <input
        type="text"
        placeholder="Account Number"
        value={accNo}
        onChange={(e) => setAccNo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Account Holder Name"
        value={accHolder}
        onChange={(e) => setAccHolder(e.target.value)}
      />
      <input
        type="text"
        placeholder="IFSC Code"
        value={ifsc}
        onChange={(e) => setIfsc(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bank Branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />
      <button onClick={registerAccount}>Register</button>
    </div>
  );
};

export default Register;
