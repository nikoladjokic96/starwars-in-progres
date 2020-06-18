import React, { useState, useEffect } from "react";
import "./App.css";
import Person from "./Person";
import Button from "./Button";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    getCharacters();
  }, [query]);
  const getCharacters = async () => {
    // if (!query) {
    //   return;
    // }
    const queryString = query ? `?search=${query}` : "";
    const response = await fetch(`https://swapi.dev/api/people${queryString}`);
    const data = await response.json();
    setCharacters(data.results);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="characters-container">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <Button
          className="search-button"
          type="submit"
          disabled={!search}
          text="Search"
        />
      </form>
      <div className="characters-list">
        {characters.map((person) => (
          <Person
            key={person.name}
            title={person.name}
            birthYear={person.birth_year}
            sex={person.gender}
            eyeColor={person.eye_color}
            hairColor={person.hair_color}
            mass={person.mass}
            height={person.height}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
