import React from 'react';
import styled from 'styled-components';

const BorderCountry = styled.em`
  background: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px lightgray;
`;

export const BorderCountries = ({ country, darkMode }) => {
  return <p><strong>Border Countries:</strong>{country.borders.map(country => <BorderCountry darkMode={darkMode}>{country}</BorderCountry>).join(' ')}</p>
};
