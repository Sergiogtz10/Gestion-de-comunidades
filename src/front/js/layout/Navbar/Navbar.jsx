import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <aside className="sidebar m-0 p-0">
        <nav className="navbar m-0 p-0">
          <ul className="m-0 p-0">
            <li className="nav-element w-100">HOME</li>
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
