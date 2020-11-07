import React from 'react';
import './Header.css';

export const Header = ({ onClick, darkMode }) => {
  return (
    <div className={darkMode ? 'dark-header' : 'light-header'}>
      <h1>Where in the world?</h1>
      <div className="dark-mode-button" onClick={onClick}>Dark Mode</div>
    </div>
  );
}