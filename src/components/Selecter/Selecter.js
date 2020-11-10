import React from 'react';
import styled from 'styled-components';

const SelectMenu = styled.div`
  background: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border: 2px solid transparent;
  border-radius: 5px;
  color: ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
  display: flex;
  font-size: 0.9em;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 10px 15px;
  transition: background 0.3s ease-in-out, border 0.2s ease-in-out, color 0.3s ease-in-out;
  width: 200px;
  :hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 800px) {
    :hover {
      border: 2px solid ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
    }
    :active {
      border: 2px solid transparent;
    }
  }
`;

const Svg = styled.svg`
  background: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  position: relative;
  top: 3px;
  transform: ${props => props.isClicked ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: background 0.3s ease-in-out, transform 0.15s ease-in-out;
`;

const Wrapper = styled.div`
  background-color: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border-radius: 5px;
  position: absolute;
  transform: ${props => props.isClicked ? 'scaleY(1)' : 'scaleY(0)'};
  transform-origin: top center;
  transition: background-color 0.3s ease-in-out, transform 0.15s ease-in-out;
  width: 200px;
  z-index: 1;
`;

const Option = styled.div`
  font-size: 0.9em;
  margin: 4px 0px;
  padding: 3px 15px;
  transition: font-size 0.1s ease-in-out;
  :hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 800px) {
    :hover {
      font-size: 0.95em;
    }
    :active {
      font-size: 0.9em;
    }
  }
`;

export const Selecter = ({ darkMode, handleSelect, isClicked, handleDisplayMenu, regionInput }) => {
  return (
    <div>
      <SelectMenu
        darkMode={darkMode}
        onChange={handleSelect}
        onClick={handleDisplayMenu}
      >
        <p>{regionInput === '' ? 'Filter by Region' : regionInput}</p>
        <Svg 
          xmlns='http://www.w3.org/2000/svg' 
          viewBox='0 0 512 512' 
          height="19" 
          width="19" 
          darkMode={darkMode} 
          isClicked={isClicked}
        >
          <path 
            fill='none' 
            stroke='currentColor' 
            strokeLinecap='round' 
            strokeLinejoin='round' 
            strokeWidth='48' 
            d='M112 184l144 144 144-144'
          />
        </Svg>
      </SelectMenu>
      <Wrapper darkMode={darkMode} isClicked={isClicked}>
        <Option onClick={() => handleSelect('')}>All Regions</Option>
        <Option onClick={() => handleSelect('Africa')}>Africa</Option>
        <Option onClick={() => handleSelect('America')}>America</Option>
        <Option onClick={() => handleSelect('Asia')}>Asia</Option>
        <Option onClick={() => handleSelect('Europe')}>Europe</Option>
        <Option onClick={() => handleSelect('Oceania')}>Oceania</Option>   
      </Wrapper>
    </div>
  );
}