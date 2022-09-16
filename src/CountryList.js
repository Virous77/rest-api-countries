import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Styles/CountryList.css";

const CountryList = ({ countries }) => {
  const { countryId } = useParams();

  const country = countries.find((item) => item.name.common === countryId);

  return (
    <section className="country-list">
      <div className="back">
        <Link to="/">
          <p>&larr; Back Home</p>
        </Link>
      </div>

      <div className="country-wrap">
        <div className="img">
          <img src={country.flags.svg} alt={country.name.common} />
        </div>

        <div className="country-data">
          <div className="wrap-it">
            <div>
              <h1 className="name">{country.name.common}</h1>
              <h4 className="native-name">
                <span>NativeName:-</span>
                <span>
                  {Object.values(country.name.nativeName)[0].official}
                </span>
              </h4>
              <p className="population">
                <span>Population:-</span>
                <span>{country.population}</span>
              </p>
              <p className="regions">
                <span>Region:-</span>
                <span>{country.region}</span>
              </p>
              <p className="subregion">
                <span>SubRegion:-</span>
                <span>{country.subregion}</span>
              </p>
              <p className="capital">
                <span>Capital:-</span>
                <span>{country.capital}</span>
              </p>
            </div>

            <div className="domain">
              <p className="languages">
                <span>Languages:-</span>
                <span>{Object.values(country.languages)[0]}</span>
              </p>
              <div className="currency">
                <span>Currency:-</span>
                {Object.values(country.currencies).map((cool, idx) => (
                  <span key={idx}>{cool.name}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="border">
            <p className="box">
              <span>Borders:-</span>
              <span className="yes">
                {country.borders?.length ? (
                  country.borders.map((cool, idx) => <li key={idx}>{cool}</li>)
                ) : (
                  <p>No Borders..!!</p>
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryList;
