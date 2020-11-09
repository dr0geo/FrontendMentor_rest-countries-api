import React from 'react';
import styled from 'styled-components';

const BorderCountry = styled.em`
  background: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px ${props => props.darkMode ? 'hsl(248, 17%, 10%)' : 'lightgray'};
  font-size: 0.85em;
  margin: -2px 10px 15px 0px;
  padding: 5px 15px;
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
  }
`;

const Paragraph = styled.p`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
`;

const SubHeader = styled.h3`
  font-weight: 600;
  margin-bottom: 20px;
  margin-right: 10px;
  vertical-align: baseline;
`;

const Span = styled.span`
  font-weight: 400;
`;

export const BorderCountries = ({ country, darkMode, toFullName, displayDetails }) => {

  const fullNameCountries = country.borders.map(alphaCode => toFullName(alphaCode));

  return (
    <Paragraph>
      <SubHeader>Border Countries<Span>:</Span></SubHeader> {fullNameCountries.map(country => <BorderCountry darkMode={darkMode} onClick={() => displayDetails(country.name)}>{country.name}</BorderCountry>)}
    </Paragraph>
  );
};