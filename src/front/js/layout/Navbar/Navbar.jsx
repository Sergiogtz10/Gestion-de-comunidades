import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <aside className="sidebar">
        <nav className="navbar">
          <ul>
            <li className="nav-element">HOME</li>
            <li className="nav-element">INCIDENCIAS</li>
            <li className="nav-element">ACTIVIDADES</li>
            <li className="nav-element">FACTURAS</li>
            <li className="nav-element">PROVEEDORES</li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
