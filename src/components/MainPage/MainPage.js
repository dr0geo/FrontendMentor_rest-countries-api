import React from 'react';
import './MainPage.css';
import { SearchInput } from '../SearchInput/SearchInput';
import { Selecter } from '../Selecter/Selecter';
import { CountryCard } from '../CountryCard/CountryCard';
 
export const MainPage = ({ darkMode, handleChange }) => {
  return (
    <div className={darkMode ? 'dark-main' : 'light-main'}>
      <div className="filters">
        <SearchInput darkMode={darkMode} handleChange={handleChange} />
        <Selecter darkMode={darkMode} />
      </div>
      <div>
        <CountryCard />
      </div>
    </div>
  );
}