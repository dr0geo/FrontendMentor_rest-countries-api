import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { MainPage } from '../MainPage/MainPage';
import './App.css';

export const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(() => !darkMode);
  }

  return (
    <div className={darkMode ? 'dark-app' : 'light-app'}>
      <Header onClick={handleClick} darkMode={darkMode} />
      <MainPage darkMode={darkMode} />
    </div>
  );
}