import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./App.css";

const Header = (props) => {
  const [theme, setTheme] = useState(false);

  const themeChangeHandler = () => {
    setTheme(!theme);

    props.onTheme(!theme);
  };

  return (
    <div className={theme ? "navs" : "nav"}>
      <h1 className="h1">Where in the world?</h1>
      <div>
        <button
          className={
            theme
              ? `  ${
                  ((document.body.style.backgroundColor = "hsl(209, 23%, 22%)"),
                  (document.body.style.color = "white"))
                }`
              : `${
                  ((document.body.style.backgroundColor = "white"),
                  (document.body.style.color = "black"))
                }`
          }
          onClick={themeChangeHandler}
        >
          {theme ? (
            <p className={theme ? "theme" : "themes"}>
              <FaMoon /> <span>Dark</span>
            </p>
          ) : (
            <p className={theme ? "theme" : "themes"}>
              <FaSun /> <span>Light</span>
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
