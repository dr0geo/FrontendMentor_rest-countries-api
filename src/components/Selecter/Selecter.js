import React from 'react';
import styled from 'styled-components';
import arrow from './down-arrow.svg';

const SelectMenu = styled.select`
  appearance: none;
  background: url(${arrow}) no-repeat right 10px center / 20px 20px;
  background-color: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border: none;
  border-radius: 5px;
  color: ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
  padding: 10px 45px 10px 15px;
  transition: all 0.3s ease-in-out;
`;

export const Selecter = ({ darkMode, handleSelect }) => {
  return (
  <SelectMenu
    darkMode={darkMode}
    onChange={handleSelect}
  >
    <option value="">Filter by Region</option>
    <option value="africa">Africa</option>
    <option value="america">America</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>
  </SelectMenu>
  );
}