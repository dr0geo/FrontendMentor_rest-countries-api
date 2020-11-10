import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  padding: 0px 40px;
  position: relative;
  transition: background 0.3s ease-in-out;
  z-index: 1;
  @media only screen and (max-width: 400px) {
    padding: 0px 10px;
  }
`;

const Title = styled.h1`
  font-size: 1.7em;
  font-weight: 800;
  :hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 650px) {
    font-size: 1.2em;
  }
  @media only screen and (max-width: 400px) {
    font-size: 1em;
  }
`;

const Button = styled.div`
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 0.9em;
  padding: 3px 10px 5px 10px;
  transform: scale(0.95);
  transition: border 0.15s ease-in-out, transform 0.15s ease-in-out;
  :hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 800px) {
    :hover {
    border: 2px solid ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
    transform: scale(1);
    }
    :active {
    transform: scale(0.95);
    }
  }
  @media only screen and (max-width: 400px) {
    font-size: 0.80em;
  }
`;

const Svg = styled.svg`
  fill: ${props => props.darkMode ? 'white' : 'transparent'};
  padding-right: 5px;
  position: relative;
  top: 5px;
  transition: fill 0.2s ease-in-out;
`;

export const Header = ({ onClick, darkMode, backToMainPage }) => {
  return (
    <StyledHeader darkMode={darkMode}>
      <Title onClick={backToMainPage}>Where in the world?</Title>
      <Button 
        onClick={onClick} 
        darkMode={darkMode}
      >
        <Svg 
          xmlns='http://www.w3.org/2000/svg' 
          viewBox='0 0 512 512' 
          height="18" 
          width="18" 
          darkMode={darkMode}
        >
          <path 
            d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z' 
            stroke='currentColor' 
            strokeLinecap='round' 
            strokeLinejoin='round' 
            strokeWidth='32'
          />
        </Svg>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </StyledHeader>
  );
}