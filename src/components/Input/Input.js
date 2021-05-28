import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
  return (
    <input
      className="Input"
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      required={props.required}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default Input;
