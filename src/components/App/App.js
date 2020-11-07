import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { MainPage } from '../MainPage/MainPage';
import { DetailsPage } from '../DetailsPage/DetailsPage';
import './App.css';

export const App = () => {

  //Fetch data from API:
  const url = 'https://restcountries.eu/rest/v2/all';

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(array => array.map(country => {
        return setCountries(prevCountries => [
          ...prevCountries,
          country
        ]);
      }));
  }, []);

  // Use state for light/dark mode:
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setDarkMode(() => !darkMode);

  // Use state for input text:
  const [inputText, setInputText] = useState('');

  const handleChange = ({ target }) => setInputText(target.value);

  //Use state for list input:
  const [regionInput, setRegionInput] = useState('');

  const handleSelect = ({ target }) => setRegionInput(target.value);

  // Use state for displaying details page:
  const [page, setPage] = useState('');

  const handleDetailsDisplay = ({ target }) => setPage(target.value); 

  const mainPage = (
    <MainPage 
      darkMode={darkMode} 
      countries={countries}
      handleChange={handleChange}
      inputText={inputText}
      handleSelect={handleSelect}
      regionInput={regionInput}
      handleDetailsDisplay={handleDetailsDisplay}
    />
  );

  const detailsPage = (
    <DetailsPage
      countries={countries}
      page={page}
    />
  );

  return (
    <div className={darkMode ? 'dark-app' : 'light-app'}>
      <Header onClick={handleClick} darkMode={darkMode} />
      {page === '' ? mainPage : detailsPage }
    </div>
  );
}