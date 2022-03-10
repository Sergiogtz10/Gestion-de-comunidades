import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import temporaryLogo from "../../../img/MasterKeyLogo.png";

const Navbar = () => {
  const [incidentsDropdown, setIncidentsDropdown] = useState(false);

  const handleIncidentsClick = () => {
    if (!incidentsDropdown) {
      setIncidentsDropdown(true);
    } else {
      setIncidentsDropdown(false);
    }
  };

  const handleClick = () => {
    if (incidentsDropdown) {
      setIncidentsDropdown(false);
    }
  };

  console.log({ incidentsDropdown });
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
            <li className="nav-element nav-link m-0 p-0 mt-5">
              <Link to="/" className="link-tag">
                <div
                  className="d-flex align-items-center"
                  onClick={handleClick}
                >
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

            <li className="nav-element nav-link m-0 p-0">
              <div
                className="d-flex align-items-center"
                id="dropdown-incidencias"
                onClick={handleIncidentsClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#e9c46a"
                  className="bi bi-exclamation-triangle-fill navbar-icon mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <p className="text-navbar-router m-0">INCIDENCIAS</p>
              </div>
            </li>

            {incidentsDropdown ? (
              <>
                <li className="nav-element nav-link m-0 p-0">PARTICULARES</li>
                <li className="nav-element nav-link m-0 p-0">COMUNES</li>
              </>
            ) : null}

            <li className="nav-element nav-link m-0 p-0">
              <Link to="/actividades" className="link-tag">
                <div
                  className="d-flex align-items-center"
                  onClick={handleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#e9c46a"
                    className="bi bi-calendar-event-fill navbar-icon mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                  </svg>

                  <p className="m-0 text-navbar-router">ACTIVIDADES</p>
                </div>
              </Link>
            </li>
            <li className="nav-element nav-link m-0 p-0">
              <Link to="/facturas" className="link-tag">
                <div
                  className="d-flex align-items-center"
                  onClick={handleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#e9c46a"
                    className="bi bi-bank2 navbar-icon mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />
                  </svg>
                  <p className="m-0 text-navbar-router">FACTURAS</p>
                </div>
              </Link>
            </li>
            <li className="nav-element nav-link m-0 p-0">
              <Link to="/proveedores" className="link-tag">
                <div
                  className="d-flex align-items-center"
                  onClick={handleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#e9c46a"
                    className="bi bi-droplet-fill navbar-icon mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <p className="m-0 text-navbar-router">PROVEEDORES</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
