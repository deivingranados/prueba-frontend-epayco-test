import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Add Items</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="https://legacy.reactjs.org/" target="_blank">
              React
            </a>
          </li>
          <li>
            <a href="https://nextjs.org/" target="_blank">
              Next
            </a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/" target="_blank">
              Typescript
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
