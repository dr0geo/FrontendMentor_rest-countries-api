import React from 'react';
import styled from 'styled-components';
import backArrow from './arrow-back.svg';
import { DetailedData } from '../DetailedData/DetailedData';

const Wrapper = styled.div`
  background: ${props => props.darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  margin: auto;
  max-width: 1200px;
  padding: 50px 20px;
`;

const BackButton = styled.button`
  background: url(${backArrow}) no-repeat left 30px center / 25px 20px;
  background-color: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px lightgray;
  padding: 10px 40px 10px 60px;
  :hover {
    cursor: pointer;
  }
`;

const FlexRowCont = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0px;
`;

const Flag = styled.img`
  display: block;
  height: 320px;
  width: 475px;
`;

export const DetailsPage = ({ countries, darkMode }) => {
  const country = countries[0];

  return (
    <Wrapper darkMode={darkMode}>
      <BackButton darkMode={darkMode} />
      <FlexRowCont>
        <Flag src={country.flag} alt={`${country.name} flag`} />
        <DetailedData country={country} darkMode={darkMode} />
      </FlexRowCont>
    </Wrapper>
  );
}