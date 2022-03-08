import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import temporaryLogo from "../../../img/MasterKeyLogo.png";

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
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
      </nav>

      <div
        className="offcanvas offcanvas-start"
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
            <li className="nav-element-mobile nav-link">PROVEEDORES</li>
          </ul>
        </div>
      </div>

      {/* NAVBAR DESKTOP ONLY */}
      <aside className="sidebar m-0 p-0">
        <nav className="navbar m-0 p-0">
          <div>
            <img id="navbar-desktop-logo" src={temporaryLogo} alt="" />
          </div>
          <ul className="m-0 p-0">
            <li className="nav-element nav-link m-0 p-0">
              <Link to="/" className="link-tag">
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#e9c46a"
                    className="bi bi-house-door-fill navbar-icon mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                  </svg>
                  <p className="text-navbar-router m-0">HOME</p>
                </div>
              </Link>
            </li>

            <li className="nav-element nav-link m-0 p-0">INCIDENCIAS</li>
            <li className="nav-element nav-link m-0 p-0">
              <Link to="/actividades" className="link-tag">
                <p className="m-0">ACTIVIDADES</p>
              </Link>
            </li>
            <li className="nav-element nav-link m-0 p-0">FACTURAS</li>
            <li className="nav-element nav-link m-0 p-0">PROVEEDORES</li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
