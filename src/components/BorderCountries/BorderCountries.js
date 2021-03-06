import React from 'react';
import styled from 'styled-components';

const BorderCountry = styled.em`
  background: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px ${props => props.darkMode ? 'hsl(248, 17%, 10%)' : 'lightgray'};
  font-size: 0.85em;
  margin: -2px 10px 15px 0px;
  padding: 5px 15px;
  transform: scale(0.95);
  transition: background 0.3s ease-in-out, transform 0.15s ease-in-out, box-shadow 0.3s ease-in-out;
  :hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 800px) {
    :hover {
    background: ${props => props.darkMode ? 'hsla(0, 0%, 100%, 0.85)' : 'hsla(200, 15%, 8%, 0.95)'};
    color: ${props => props.darkMode ? 'hsl(200, 15%, 8%)' : 'white'};
    transform: scale(1);
    }
    :active {
    transform: scale(0.95);
    }
  }
`;

const Paragraph = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
`;

const SubHeader = styled.p`
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
      <SubHeader>Border Countries<Span>:</Span></SubHeader> {fullNameCountries.map(country => <BorderCountry key={country.alpha3Code} darkMode={darkMode} onClick={() => displayDetails(country.name)}>{country.name}</BorderCountry>)}
    </Paragraph>
  );
};