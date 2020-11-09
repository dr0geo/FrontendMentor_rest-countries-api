import React from 'react';
import styled from 'styled-components';
import { DetailedData } from '../DetailedData/DetailedData';

const Wrapper = styled.div`
  background: ${props => props.darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  margin: auto;
  margin-top: -60px;
  max-width: 1200px;
  padding: 110px 0px;
  position: relative;
  transition: all 0.3s ease-in-out;
`;

const Svg = styled.svg`
  padding-right: 10px;
  position: relative;
  top: 5px;
  transition: all 0.3s ease-in-out;
`;

const BackButton = styled.button`
  background-color: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px ${props => props.darkMode ? 'hsl(248, 17%, 10%)' : 'lightgray'};
  color: ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
  margin-left: 40px;
  padding: 5px 40px 10px 40px;
  transform: scale(0.95);
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.15s ease-in-out;
  :hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 800px) {
    :hover {
      background: ${props => props.darkMode ? 'hsla(0, 0%, 100%, 0.9)' : 'hsla(200, 15%, 8%, 0.95)'};
      color: ${props => props.darkMode ? 'hsl(200, 15%, 8%)' : 'white'};
      transform: scale(1);
    }
    :active {
      transform: scale(0.95);
    }
  }
  @media only screen and (max-width: 800px) {
    margin-left: 6%;
  }
`;

const FlexRowCont = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-right: 50px;
  padding: 60px 0px;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Flag = styled.img`
  box-shadow: ${props => !props.darkMode && '0px 0px 2px 2px lightgray'};
  display: block;
  flex: 1 1 400px;
  margin-left: 40px;
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width: 800px) {
    flex: 1 1 content;
    margin-bottom: 50px;
    width: 95%;
  }
`;

export const DetailsPage = ({ countries, darkMode, page, backToMainPage, toFullName, displayDetails }) => {

  const country = countries.filter(country => country.name === page)[0];

  return (
    <Wrapper darkMode={darkMode}>
      <BackButton 
        darkMode={darkMode} 
        onClick={backToMainPage}
      >
        <Svg 
          xmlns='http://www.w3.org/2000/svg' 
          viewBox='0 0 512 512' 
          height="19" 
          width="19"
        >
          <path 
            fill='none' 
            stroke='currentColor' 
            strokeLinecap='round' 
            strokeLinejoin='round' 
            strokeWidth='48' 
            d='M244 400L100 256l144-144M120 256h292'        
          />
        </Svg>
        Back
      </BackButton>
      <FlexRowCont>
        <Flag 
          src={country.flag} 
          alt={`${country.name} flag`} 
          darkMode={darkMode} 
        />
        <DetailedData 
          country={country} 
          darkMode={darkMode} 
          toFullName={toFullName} 
          displayDetails={displayDetails}
        />
      </FlexRowCont>
    </Wrapper>
  );
}