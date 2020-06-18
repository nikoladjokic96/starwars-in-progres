import React from "react";
import style from "./character.module.css";
const Person = ({
  title,
  sex,
  birthYear,
  eyeColor,
  hairColor,
  mass,
  height,
}) => {
  return (
    <div className={style.character}>
      <h1>{title}</h1>
      <h3>Gender: {sex}</h3>
      <h3>Year of birth: {birthYear}</h3>
      <p>Eye color: {eyeColor}</p>
      <p>Hair color: {hairColor}</p>
      <p>Weight: {mass}kg</p>
      <p>Height: {height}cm</p>
    </div>
  );
};

export default Person;
