import React from 'react';
import styled, { keyframes } from 'styled-components';
import loadIcon from './loading.svg';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadSymbol = styled.img`
  animation: 1s ${rotation} linear infinite both;
  display: block;
  height: 100px;
  margin: auto;
  width: 100px;
`;

const Margin = styled.div`
  background: 'hsl(0, 0%, 98%)'};
  padding: 18vh;
`;

export const LoadingPage = () => {
  return (
  <div>
    <Margin />
    <LoadSymbol 
      src={loadIcon} 
      alt="" 
    />
  </div>
  );
}