import React from "react";
import { InputProps } from "../../../interfaces";

const Input: React.FC<InputProps> = ({
  type = "text",
  onChange,
  disabled = false,
  className = "",
  name = "",
  value = "",
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      disabled={disabled}
      className={`btn ${className}`}
    ></input>
  );
};

export default Input;
