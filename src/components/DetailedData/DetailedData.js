import React from 'react';
import styled from 'styled-components';
import { BorderCountries } from '../BorderCountries/BorderCountries';

const Wrapper = styled.div`
  height: 320px;
`;

const FlexColCont = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const DetailsLi = styled.li`
  font-size: 0.8em;
  list-style-type: none;
`;

const FlexRowCont = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0px;
`;

export const DetailedData = ({ country, darkMode }) => {
  return (
    <Wrapper>
      <h2>{country.name}</h2>
      <FlexColCont>
        <DetailsLi><strong>Native Name:</strong> {country.nativeName}</DetailsLi>
        <DetailsLi><strong>Population:</strong> {country.population}</DetailsLi>
        <DetailsLi><strong>Region:</strong> {country.region}</DetailsLi>
        <DetailsLi><strong>Sub Region:</strong> {country.subregion}</DetailsLi>
        <DetailsLi><strong>Capital:</strong> {country.capital}</DetailsLi>
        <DetailsLi><strong>Top Level Domain:</strong> {country.topLevelDomain}</DetailsLi>
        <DetailsLi><strong>Currencies:</strong> {country.currencies.name}</DetailsLi>
        <DetailsLi><strong>Languages:</strong> {country.languages.name}</DetailsLi>
      </FlexColCont>
      <FlexRowCont>
        <BorderCountries country={country} darkMode={darkMode} />
      </FlexRowCont>
    </Wrapper>
  );
};