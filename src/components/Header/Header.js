import React from 'react';
import styled from 'styled-components';
import moon from './moon.svg';

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
  transition: all 0.3s ease-in-out;
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
  background: url(${moon}) no-repeat left center / 16px 16px;
  font-size: 0.9em;
  padding-left: 20px;
  :hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 400px) {
    font-size: 0.80em;
  }
`;

export const Header = ({ onClick, darkMode, backToMainPage }) => {
  return (
    <StyledHeader darkMode={darkMode}>
      <Title onClick={backToMainPage}>Where in the world?</Title>
      <Button onClick={onClick}>Dark Mode</Button>
    </StyledHeader>
  );
}