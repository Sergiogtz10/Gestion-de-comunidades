import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      {/* NAVBAR MOBILE ONLY */}
      <nav className="d-flex align-items-center navbar-mobile">
        <button
          className="d-flex btn btn-primary me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-navbar"
          aria-controls="offcanvas-navbar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvas-navbar"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            LOGO
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <ul className="m-0 p-0">
            <li className="nav-element-mobile nav-link" id="home-link">
              HOME
            </li>
            <li className="nav-element-mobile nav-link">INCIDENCIAS</li>
            <li className="nav-element-mobile nav-link">ACTIVIDADES</li>
            <li className="nav-element-mobile nav-link">FACTURAS</li>
            <li className="nav-element-mobile ">PROVEEDORES</li>
          </ul>
        </div>
      </div>

      {/* NAVBAR DESKTOP ONLY */}
      <aside className="sidebar m-0 p-0">
        <nav className="navbar m-0 p-0">
          <ul className="m-0 p-0">
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
