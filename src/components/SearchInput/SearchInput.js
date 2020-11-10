import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  left: 15px;
  position: relative;
  top: 5px;
  z-index: 1;
`;

const Input = styled.input`
  background: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border: 2px solid transparent;
  border-radius: 5px;
  color: ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
  padding: 10px 0px 10px 40px;
  position: relative;
  top: -32px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out, border 0.2s ease-in-out;
  width: 100%;
  @media only screen and (min-width: 800px) {
    :hover {
      border: 2px solid ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
    }
    :focus {
      border: 2px solid ${props => props.darkMode ? 'teal' : 'gray'};
    }
  }
  @media only screen and (max-width: 800px) {
    width: 85%;
  }
`;

export const SearchInput = ({ darkMode, handleChange }) => {
  return (
    <div>
      <Svg 
        xmlns='http://www.w3.org/2000/svg' 
        viewBox='0 0 512 512' 
        height="19" 
        width="19" 
        darkMode={darkMode}
      >
        <path 
          d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' 
          fill='none' 
          stroke='currentColor' 
          strokeMiterlimit='10' 
          strokeWidth='32'
        />
        <path 
          fill='none' 
          stroke='currentColor' 
          strokeLinecap='round' 
          strokeMiterlimit='10' 
          strokeWidth='32' 
          d='M338.29 338.29L448 448'
        />
      </Svg>
      <Input 
        aria-label="Search country"
        placeholder="Search for a country..."
        darkMode={darkMode}
        onChange={handleChange}
      />
    </div>
  );
}