import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  background : ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border-radius: 5px;
  list-style-type: none;
  padding-bottom: 40px;
  transform: scale(0.95);
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
  :hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 800px) {
    :hover {
      transform: scale(1);
    }
    :active {
      transform: scale(0.95);
    }
  }
`;

const Image = styled.img`
  border-radius: 5px 5px 0px 0px;
  height: 150px;
  width: 250px;
  @media only screen and (max-width: 1200px) {
    height: 55%;
    width: 100%;
  }
  @media only screen and (max-width: 800px) {
    height: auto;
    width: 100%;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.1em;
  font-weight: 800;
  padding: 20px;
`;

const Paragraph = styled.p`
  font-size: 0.9em;
  padding: 0px 20px;
`;

export const ListItems = ({ country, darkMode, displayDetails }) => {
  return (
    <Li 
      value={country.name} 
      darkMode={darkMode} 
      onClick={() => displayDetails(country.name)}
    >
      <Image 
        src={country.flag} 
        alt={`${country.name} flag`}
      />
      <SubTitle>{country.name}</SubTitle>
      <Paragraph><strong>Population:</strong> {country.population.toLocaleString('en-EN')}</Paragraph>
      <Paragraph><strong>Region:</strong> {country.region}</Paragraph>
      <Paragraph><strong>Capital:</strong> {country.capital}</Paragraph>
    </Li>
  );
}