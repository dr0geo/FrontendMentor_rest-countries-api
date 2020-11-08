import React from 'react';
import styled from 'styled-components';
import { BorderCountries } from '../BorderCountries/BorderCountries';

const Wrapper = styled.div`
  padding-left: 70px;
`;

const Title = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  padding-bottom: 20px;
`;

const GridColCont = styled.ul`
  align-content: center;
  display: grid;
  gap: 10px 40px;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

const DetailsLi = styled.li`
  font-size: 0.85em;
  list-style-type: none;
`;

export const DetailedData = ({ country, darkMode }) => {
  return (
    <Wrapper>
      <Title>{country.name}</Title>
      <GridColCont>
        <DetailsLi><strong>Native Name:</strong> {country.nativeName}</DetailsLi>
        <DetailsLi><strong>Population:</strong> {country.population}</DetailsLi>
        <DetailsLi><strong>Region:</strong> {country.region}</DetailsLi>
        <DetailsLi><strong>Sub Region:</strong> {country.subregion}</DetailsLi>
        <DetailsLi><strong>Capital:</strong> {country.capital}</DetailsLi>
        <DetailsLi><strong>Top Level Domain:</strong> {country.topLevelDomain}</DetailsLi>
        <DetailsLi><strong>Currencies:</strong> {country.currencies.name}</DetailsLi>
        <DetailsLi><strong>Languages:</strong> {country.languages.name}</DetailsLi>
      </GridColCont>
        <BorderCountries country={country} darkMode={darkMode} />
    </Wrapper>
  );
};