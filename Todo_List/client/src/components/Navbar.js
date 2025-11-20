import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    const updateAuthStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };
    window.addEventListener('authChange', updateAuthStatus);

    return () => {
      window.removeEventListener('authChange', updateAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.dispatchEvent(new Event('authChange'));
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-link home-link">
          <FaHome className="home-icon" /> Home
        </Link>
      </div>
      <div className="nav-right">
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </>
        ) : (
          <Link to="/" className="nav-link" onClick={handleLogout}>
            Logout
          </Link>
        )}
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
