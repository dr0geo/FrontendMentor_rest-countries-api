import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DetailsPage } from '../DetailsPage/DetailsPage';
import { Header } from '../Header/Header';
import { MainPage } from '../MainPage/MainPage';
import { LoadingPage } from '../LoadingPage/LoadingPage';

const Wrapper = styled.div`
  color: ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
  font-family: 'Nunito-sans', sans-serif;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
`;

export const App = () => {

  //Fetch data from API:
  const url = 'https://restcountries.eu/rest/v2/all';

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(array => array.map(country => {
        return setCountries(prevCountries => [...prevCountries, country]);
      }))
      .then(() => setIsLoaded(true));
  }, []);

  // Use state for light/dark mode:
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setDarkMode(() => !darkMode);

  // Use state for input text:
  const [inputText, setInputText] = useState('');

  const handleChange = ({ target }) => setInputText(target.value);

  // Use state for list input:
  const [regionInput, setRegionInput] = useState('');

  const handleSelect = ({ target }) => setRegionInput(target.value);

  // Use state for loading screen while fetching data:
  const [isLoaded, setIsLoaded] = useState(false);

  // Use state for displaying normal or details page:
  const [page, setPage] = useState('');

  const displayDetails = country => setPage(country);
  const backToMainPage = () => setPage('');

  // Define what to display in the main section:
  const mainPage = (
    isLoaded ? 
      <MainPage 
        darkMode={darkMode} 
        countries={countries}
        handleChange={handleChange}
        inputText={inputText}
        handleSelect={handleSelect}
        regionInput={regionInput}
        displayDetails={displayDetails}
      />
      : <LoadingPage />
  );

  const detailsPage = (
    <DetailsPage 
      darkMode={darkMode}
      countries={countries}
      page={page}
      backToMainPage={backToMainPage}
    />
  );

  return (
    <Wrapper darkMode={darkMode}>
      <Header onClick={handleClick} darkMode={darkMode} />
      {page === '' ? mainPage : detailsPage}
    </Wrapper>
  );
}