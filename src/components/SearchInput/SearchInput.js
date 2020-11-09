import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  background: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border-radius: 5px 0px 0px 5px;
  padding: 9px 0px 9px 9px;
  position: relative;
  top: 13px;
  transition: all 0.3s ease-in-out;
`;

const Input = styled.input`
  background-color: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border: none;
  border-radius: 0px 5px 5px 0px;
  color: ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
  margin-bottom: 20px;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  width: 350px;
  @media only screen and (max-width: 800px) {
    width: 200px;
  }
`;

export const SearchInput = ({ darkMode, handleChange }) => {
  return (
    <div>
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height="19" width="19" darkMode={darkMode}><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32'/><path fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M338.29 338.29L448 448'/></Svg>
      <Input 
      placeholder="Search for a country..."
      darkMode={darkMode}
      onChange={handleChange}
    />
    </div>
  );
}