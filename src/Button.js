import React from "react";

const Button = (props) => {
  console.log(props);
  return (
    <button
      className={props.className + " " + (props.disabled && "disabled")}
      type={props.type}
    >
      {props.text}
    </button>
  );
};
export default Button;
