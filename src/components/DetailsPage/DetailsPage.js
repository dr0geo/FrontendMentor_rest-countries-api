import React from 'react';
import styled from 'styled-components';
import backArrow from './arrow-back.svg';
import { DetailedData } from '../DetailedData/DetailedData';

const Wrapper = styled.div`
  background: ${props => props.darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  margin: auto;
  max-width: 1200px;
  padding: 50px 20px;
  transition: all 0.3s ease-in-out;
`;

const BackButton = styled.button`
  background: url(${backArrow}) no-repeat left 30px center / 25px 20px;
  background-color: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px ${props => props.darkMode ? 'hsl(248, 17%, 10%)' : 'lightgray'};
  color: ${props => props.darkMode ? 'white' : 'hsl(200, 15%, 8%)'};
  padding: 10px 40px 10px 60px;
  :hover {
    cursor: pointer;
  }
  transition: all 0.3s ease-in-out;
`;

const FlexRowCont = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 60px 0px;
`;

const Flag = styled.img`
  display: block;
  height: 320px;
  width: 475px;
`;

export const DetailsPage = ({ countries, darkMode, page, backToMainPage }) => {
  const country = countries.filter(country => country.name === page)[0];

  return (
    <Wrapper darkMode={darkMode}>
      <BackButton darkMode={darkMode} onClick={backToMainPage}>Back</BackButton>
      <FlexRowCont>
        <Flag src={country.flag} alt={`${country.name} flag`} />
        <DetailedData country={country} darkMode={darkMode} />
      </FlexRowCont>
    </Wrapper>
  );
}