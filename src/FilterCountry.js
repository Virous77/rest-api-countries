import React, { useEffect } from "react";
import "./Styles/FilterSearch.css";

const FilterCountry = ({ setCountry, theme, setLoad }) => {
  const filterCountryHandler = async (e) => {
    const max = e.target.value;

    setLoad(true);

    if (max === "") return;

    if (max === "all") {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();

      setCountry(data.sort((a, b) => b.population - a.population));
      setLoad(true);
    } else {
      const res = await fetch(`https://restcountries.com/v3.1/region/${max}`);
      const data = await res.json();

      setCountry(data.sort((a, b) => b.population - a.population));
    }
    setLoad(false);
  };

  return (
    <div className={`filter ${theme ? "filterDark" : "filterLight"}`}>
      <select
        className={`select ${theme ? "selectDark" : "selectLight"}`}
        name="MAx"
        id="max"
        onChange={filterCountryHandler}
      >
        <option value="">Filter by Region</option>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="americas">Americas</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterCountry;
