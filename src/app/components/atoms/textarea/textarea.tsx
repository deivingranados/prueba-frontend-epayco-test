import React from "react";
import { TextareaProps } from "../../../interfaces";

const Textarea: React.FC<TextareaProps> = ({
  onChange,
  disabled = false,
  className = "",
  name = "",
  value = "",
}) => {
  return (
    <textarea
      onChange={onChange}
      value={value}
      name={name}
      disabled={disabled}
      className={`btn ${className}`}
    ></textarea>
  );
};

export default Textarea;
