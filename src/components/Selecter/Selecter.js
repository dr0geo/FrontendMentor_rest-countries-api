import React from 'react';
import './Selecter.css';

export const Selecter = ({ darkMode, handleSelect }) => {
  return (
  <select
    className={darkMode ? 'dark-select' : 'light-select'}
    onChange={handleSelect}
  >
    <option value="">Filter by Region</option>
    <option value="africa">Africa</option>
    <option value="america">America</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>
  </select>
  );
}