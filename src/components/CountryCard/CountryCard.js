import React, { useState, useEffect } from 'react';
import './CountryCard.css';

export const CountryCard = () => {
  const url = 'https://restcountries.eu/rest/v2/all';

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(array => array.map(country => {
        return setCountries(prevCountries => [
          ...prevCountries,
          <li key={country.alpha3Code} value={country.name}>
            <img src={country.flag} alt={`${country.name} flag`} />
            <h2>{country.name}</h2>
            <p><strong>Population:</strong> {country.population.toLocaleString('en-EN')}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
          </li>
        ]);
      }));
  }, []);

  return <ul>{countries}</ul>;
}