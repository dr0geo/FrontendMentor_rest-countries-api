import React from 'react';
import './Selecter.css';

export const Selecter = ({ darkMode }) => {
  return (
  <select className={darkMode ? 'dark-select' : 'light-select'}>
    <option value="all-regions">Filter by Region</option>
    <option value="africa">Africa</option>
    <option value="america">America</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>
  </select>
  );
}