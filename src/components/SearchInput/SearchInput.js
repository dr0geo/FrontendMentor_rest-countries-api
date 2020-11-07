import React from 'react';
import './SearchInput.css';

export const SearchInput = ({ darkMode, handleChange }) => {
  return (
    <input 
      className={darkMode ? 'dark-search' : 'light-search'}
      placeholder="Search for a country..."
      onChange={handleChange}
    />
  );
}