import React from 'react';
import styled from 'styled-components';

const SelectMenu = styled.div`
  background-color: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border: none;
  border-radius: 5px;
  color: ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
  display: flex;
  font-size: 0.9em;
  justify-content: space-between;
  margin: 5px 0px;
  padding: 10px 15px;
  transition: all 0.3s ease-in-out;
  width: 200px;
  :hover {
    cursor: pointer;
  }
`;

const Svg = styled.svg`
  background: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  padding-left: 5px;
  position: relative;
  top: 5px;
  transition: all 0.3s ease-in-out;
`;

const Wrapper = styled.div`
  background-color: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border-radius: 5px;
  position: absolute;
  transform: ${props => props.isClicked ? 'scaleY(100%)' : 'scaleY(0%)'};
  transform-origin: top center;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  width: 200px;
  z-index: 1;
`;

const Option = styled.div`
  font-size: 0.9em;
  margin: 5px 0px;
  padding: 5px 15px;
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
  }
`;

export const Selecter = ({ darkMode, handleSelect, isClicked, handleDisplayMenu }) => {
  return (
    <div>
      <SelectMenu
        darkMode={darkMode}
        onChange={handleSelect}
        onClick={handleDisplayMenu}
      ><p>Filter by Region</p><Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height="19" width="19" darkMode={darkMode}><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='48' d='M112 184l144 144 144-144'/></Svg>
      </SelectMenu>
      <Wrapper darkMode={darkMode} isClicked={isClicked}>
        <Option value="africa">Africa</Option>
        <Option value="america">America</Option>
        <Option value="asia">Asia</Option>
        <Option value="europe">Europe</Option>
        <Option value="oceania">Oceania</Option>
      </Wrapper>
    </div>
  );
}