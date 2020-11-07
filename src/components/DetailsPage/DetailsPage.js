import React from 'react';
import './DetailsPage.css';

export const DetailsPage = ({ page, countries }) => {
  const country = countries[0];

  return (
    <div className="details">
      <div><button className="back-button">Back</button></div>
      <div className="flex-row">
        <img className="flag" src={country.flag} alt={`${country.name} flag`} />
        <div className="country-details">
          <h2>{country.name}</h2>
          <div>
            <ul className="flex-column">
              <li className="list-item"><strong>Native Name:</strong> {country.nativeName}</li>
              <li className="list-item"><strong>Population:</strong> {country.population}</li>
              <li className="list-item"><strong>Region:</strong> {country.region}</li>
              <li className="list-item"><strong>Sub Region:</strong> {country.subregion}</li>
              <li className="list-item"><strong>Capital:</strong> {country.capital}</li>
              <li className="list-item"><strong>Top Level Domain:</strong> {country.topLevelDomain}</li>
              <li className="list-item"><strong>Currencies:</strong> {country.currencies.name}</li>
              <li className="list-item"><strong>Languages:</strong> {country.languages.name}</li>
            </ul>
          </div>
          <div className="flex-row">
            <h3>Border Countries:</h3>
            <ul className="flex-row">
              {country.borders.map(borderCountry => <li>{borderCountry}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}