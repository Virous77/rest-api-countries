import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Styles/FilterSearch.css";

const SearchCountry = (props) => {
  const searchChangeHandler = (e) => {
    props.searchCountry(e.target.value);
  };
  return (
    <main className={`main ${props.theme ? "mainDark" : "mainLight"}`}>
      <FaSearch />
      <input
        className={`input ${props.theme ? "inputDark" : "inputLight"}`}
        type="text"
        placeholder="Search for a country"
        onChange={searchChangeHandler}
      />
    </main>
  );
};

export default SearchCountry;
