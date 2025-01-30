import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const res = await registerUser(username, password);
    if (res.msg) {
      navigate('/login');
    } else {
      setError(res.msg || 'Registration failed');
    }
  };

  return (
    <div className="main-container">
      <h1 className="register-title">Register</h1>
      <p className="register-subtitle">Create an account to get started</p>
      <div className="auth-box">
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="input-box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-box"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
