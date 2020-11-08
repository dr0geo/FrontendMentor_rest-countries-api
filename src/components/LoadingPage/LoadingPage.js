import React from 'react';
import styled, { keyframes } from 'styled-components';
import loadIcon from './loading.svg';

const rotation = keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`;

const LoadSymbol = styled.img`
  animation: 1s ${rotation} linear infinite both;
  display: block;
  height: 120px;
  margin: auto;
  margin-top: 35vh;
  width: 120px;
`;

export const LoadingPage = () => {
  return <LoadSymbol src={loadIcon} alt="Loading Icon" />
}