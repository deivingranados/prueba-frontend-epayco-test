import React from "react";
import { ButtonProps } from "../../../interfaces";
import "./buttons.css";

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className = "buttonSubmit",
  onClick,
}) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
