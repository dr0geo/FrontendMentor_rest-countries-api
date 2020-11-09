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

const HeaderContainer = styled.div`
  background: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 100%;
  z-index: 1;
`;

const MainContainer = styled.div`
  background: ${props => props.darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  min-height: 100vh;
  transition: all 0.3s ease-in-out;
  width: 100%;
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

  // Reset main page when BackButton is clicked on details page:
  const backToMainPage = () => {
    setPage('');
    setInputText('');
    setRegionInput('');
  };

  // Retrieve full country name from API borders results:
  const toFullName = alphaCode => countries.filter(country => country.alpha3Code === alphaCode)[0];

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
      toFullName={toFullName}
      displayDetails={displayDetails}
    />
  );

  return (
    <Wrapper darkMode={darkMode}>
      <HeaderContainer darkMode={darkMode}>
        <Header onClick={handleClick} darkMode={darkMode} />
      </HeaderContainer>
      <MainContainer darkMode={darkMode}>
        {page === '' ? mainPage : detailsPage}
      </MainContainer>
    </Wrapper>
  );
}