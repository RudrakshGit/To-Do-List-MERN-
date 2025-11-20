import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await loginUser(username, password);
    if (res.token) {
      localStorage.setItem('token', res.token);
      localStorage.setItem('username', username);
      navigate('/tasks');
    } else {
      setError(res.msg || 'Login failed');
    }
  };

  return (
    <div className="main-container">
      <h1 className="login-title">Login</h1>
      <p className="login-subtitle">Enter your credentials to continue</p>
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
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
