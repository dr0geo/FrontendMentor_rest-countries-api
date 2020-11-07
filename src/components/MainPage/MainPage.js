import React from 'react';
import './MainPage.css';
import { SearchInput } from '../SearchInput/SearchInput';
import { Selecter } from '../Selecter/Selecter';
 
export const MainPage = ({ darkMode, countries, handleChange, inputText, handleSelect, regionInput, handleDetailsDisplay }) => {

  const countriesToDisplay = countries.filter(country => country.name.toLowerCase().includes(inputText.toLowerCase())).filter(country => country.region.toLowerCase().includes(regionInput.toLowerCase()));

  return (
    <div className={darkMode ? 'dark-main' : 'light-main'}>
      <div className="filters">
        <SearchInput 
          darkMode={darkMode}
          handleChange={handleChange}
        />
        <Selecter
          darkMode={darkMode}
          handleSelect={handleSelect}
        />
      </div>
      <ul className={darkMode ? 'dark-card' : 'light-card'}>
        {countriesToDisplay.map(country => {
          return (
            <li key={country.alpha3Code} value={country.name} onClick={handleDetailsDisplay} className="base-list">
              <img src={country.flag} alt={`${country.name} flag`} />
              <h2>{country.name}</h2>
              <p><strong>Population:</strong> {country.population.toLocaleString('en-EN')}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}