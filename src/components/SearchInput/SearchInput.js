import React from 'react';
import styled from 'styled-components';
import glass from './search.svg';

const Input = styled.input`
  background: url(${glass}) no-repeat left 15px center / 20px 20px;
  background-color: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border: none;
  border-radius: 5px;
  color: ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
  padding: 10px 10px 10px 45px;
  transition: all 0.3s ease-in-out;
  width: 30%;
`;

export const SearchInput = ({ darkMode, handleChange }) => {
  return (
    <Input 
      placeholder="Search for a country..."
      darkMode={darkMode}
      onChange={handleChange}
    />
  );
}