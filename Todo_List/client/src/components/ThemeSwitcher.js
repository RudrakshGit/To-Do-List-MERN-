import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './ThemeSwitcher.css';
import SunIcon from '../assets/sun-icon.png';
import MoonIcon from '../assets/moon-icon.png';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      <img src={theme === 'light' ? MoonIcon : SunIcon} alt="Toggle Theme" />
    </button>
  );
};

export default ThemeSwitcher;
