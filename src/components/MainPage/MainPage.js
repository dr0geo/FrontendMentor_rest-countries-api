import React from 'react';
import styled from 'styled-components';
import { SearchInput } from '../SearchInput/SearchInput';
import { Selecter } from '../Selecter/Selecter';
import { ListItems } from '../ListItems/ListItems';

const Wrapper = styled.div`
  background: ${props => props.darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  margin: auto;
  max-width: 1200px;
  padding: 50px 40px;
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width: 500px) {
    padding: 20px 20px;
  }
`;

const Filter = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 650px) {
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Grid = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 250px);
  grid-auto-flow: row;
  justify-content: space-between;
  margin: 40px 0px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 650px) {
    justify-content: center;
    grid-template-columns: 1fr;
    margin: 10px 0px;
  }
`;
 
export const MainPage = ({ darkMode, countries, handleChange, inputText, handleSelect, regionInput, displayDetails, isClicked, handleDisplayMenu}) => {
  // Filter first by input term, and then by region selected:
  const countriesToDisplay = countries.filter(country => country.name.toLowerCase().includes(inputText.toLowerCase())).filter(country => country.region.toLowerCase().includes(regionInput.toLowerCase()));

  return (
    <Wrapper darkMode={darkMode}>
      <Filter>
        <SearchInput 
          darkMode={darkMode}
          handleChange={handleChange}
        />
        <Selecter
          darkMode={darkMode}
          handleSelect={handleSelect}
          isClicked={isClicked}
          handleDisplayMenu={handleDisplayMenu}
          regionInput={regionInput}
        />
      </Filter>
      <Grid>
        {countriesToDisplay.map(country => <ListItems country={country} darkMode={darkMode} key={country.alpha3Code} displayDetails={displayDetails} />)}
      </Grid>
    </Wrapper>
  );
}