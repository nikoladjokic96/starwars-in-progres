import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "#ffe662",
    textDecoration: "none",
  };
  return (
    <nav>
      <Link to="/">
        <div className="logo" alt="star wars logo"></div>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/characters">
          <li>Characters</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
