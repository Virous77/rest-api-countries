import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Country.css";
import SearchCountry from "./SearchCountry";
import FilterCountry from "./FilterCountry";

const Country = ({ countries, setCountry, theme, isLoad, error }) => {
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(false);

  const searchCountry = (e) => {
    setSearch(e);
  };

  return (
    <Fragment>
      {!isLoad && !error && (
        <section className="country-compute">
          <SearchCountry searchCountry={searchCountry} theme={theme} />
          {load && <p className="center-loads">loading...</p>}

          <FilterCountry
            setCountry={setCountry}
            theme={theme}
            setLoad={setLoad}
          />
        </section>
      )}
      <section className="home">
        {countries
          .filter((searc) =>
            searc.name.common.toLowerCase().includes(search.toLowerCase())
          )
          .map((country, idx) => (
            <Link
              to={`/${country.name.common}`}
              key={idx}
              className={`country-home ${
                theme ? "country-homeDark" : "country-homeLight"
              }`}
            >
              <ul>
                <li>
                  <div className="home-img">
                    <img src={country.flags.svg} alt={country.name.common} />
                  </div>
                  <h2>{country.name.common}</h2>

                  <div className="home-info">
                    <span>
                      <p className="country-bold">Population:-</p>{" "}
                      <p>{country.population}</p>
                    </span>
                    <span>
                      <p className="country-bold">Region:- </p>
                      <p>{country.region}</p>
                    </span>
                    <span>
                      <p className="country-bold">Capital:- </p>{" "}
                      <p>{country.capital}</p>
                    </span>
                  </div>
                </li>
              </ul>
            </Link>
          ))}
      </section>
    </Fragment>
  );
};

export default Country;
