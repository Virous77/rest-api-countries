import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Country from "./Country";
import CountryList from "./CountryList";
import Header from "./Header";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountry] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [theme, setTheme] = useState();
  const [error, setError] = useState(false);

  const fetchCountryData = async () => {
    setIsLoad(true);
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      setError(true);
      setIsLoad(false);
    }

    setCountry(data.sort((a, b) => b.population - a.population));
    setIsLoad(false);
    setError(false);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  const themeHandler = (e) => {
    setTheme(e);
  };

  return (
    <div className="home-page">
      <Header onTheme={themeHandler} />
      {isLoad && <p className="center-load">Loading..</p>}
      {error && <p className="center-load">SomeThing went wrong!</p>}

      <Routes>
        <Route
          path="/"
          element={
            <Country
              countries={countries}
              setCountry={setCountry}
              theme={theme}
              isLoad={isLoad}
              error={error}
            />
          }
        />
        <Route
          path="/:countryId"
          element={<CountryList countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
