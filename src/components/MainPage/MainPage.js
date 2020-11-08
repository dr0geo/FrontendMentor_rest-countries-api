import React from 'react';
import styled from 'styled-components';
import { SearchInput } from '../SearchInput/SearchInput';
import { Selecter } from '../Selecter/Selecter';
import { ListItems } from '../ListItems/ListItems';

const Wrapper = styled.div`
  background: ${props => props.darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  margin: auto;
  max-width: 1200px;
  padding: 50px 20px;
  transition: all 0.3s ease-in-out;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Grid = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 250px);
  grid-auto-flow: row;
  justify-content: space-between;
  margin: 50px 0px;
`;
 
export const MainPage = ({ darkMode, countries, handleChange, inputText, handleSelect, regionInput, displayDetails}) => {

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
        />
      </Filter>
      <Grid>
        {countriesToDisplay.map(country => <ListItems country={country} darkMode={darkMode} key={country.alpha3Code} displayDetails={displayDetails} />)}
      </Grid>
    </Wrapper>
  );
}