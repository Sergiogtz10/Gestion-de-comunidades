import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div id="navbar" className="d-flex align-items-center">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
