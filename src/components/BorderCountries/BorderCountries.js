import React from 'react';
import styled from 'styled-components';

const BorderCountry = styled.em`
  background: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px ${props => props.darkMode ? 'hsl(248, 17%, 10%)' : 'lightgray'};
  margin: 0px 10px;
  padding: 5px 15px;
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
  }
`;

const Paragraph = styled.p`
  padding-top: 20px;
`;

export const BorderCountries = ({ country, darkMode }) => {
  return <Paragraph><strong>Border Countries</strong>: {country.borders.map(country => <BorderCountry darkMode={darkMode}>{country}</BorderCountry>)}</Paragraph>
};
