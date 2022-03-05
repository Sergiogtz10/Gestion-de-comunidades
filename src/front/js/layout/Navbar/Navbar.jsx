import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <aside className="sidebar">
        <nav className="navbar">
          <ul>
            <li className="active">HOME</li>
            <li className="active">INCIDENCIAS</li>
            <li className="active">ACTIVIDADES</li>
            <li className="active">FACTURAS</li>
            <li className="active">PROVEEDORES</li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
