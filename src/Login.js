import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css'; // Assuming styles are in a separate CSS file

const Login = () => {
  const [accNo, setAccNo] = useState('');
  const history = useHistory();

  const loginUser = () => {
    const userData = localStorage.getItem(accNo.trim());
    if (!userData) {
      alert("Account not found! Please register.");
      return;
    }

    localStorage.setItem("loggedInUser", accNo.trim());
    alert("Login Successful!");
    history.push('/dashboard'); // Redirect to dashboard
  };

  const redirectToRegister = () => {
    history.push('/register'); // Redirect to register page
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        id="accNo"
        placeholder="Enter Account Number"
        value={accNo}
        onChange={(e) => setAccNo(e.target.value)}
      />
      <button onClick={loginUser}>Login</button>
      <button onClick={redirectToRegister}>Register</button>
    </div>
  );
};

export default Login;
