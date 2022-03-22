import React from "react";
import { Link } from "react-router-dom";
import { URL } from "../../Service/URL";

import PropTypes from "prop-types";
import "./settings-menu.css";
import { Redirect } from "react-router-dom";

const SettingsMenu = (props) => {
  const logout = () => {
    window.location.href = "/";
    localStorage.removeItem("token");
  };

  return (
    <div id="avatar-menu" className="d-flex flex-column justify-content-center">
      <div id="cross">
        <span id="opciones" className="m-0">
          Configuración
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
          id="cross-svg"
          onClick={props.clickCrossFunction}
        >
          <path d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
          <path d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
        </svg>
      </div>
      <Link to="/perfil" className="m-0" id="link">
        <div className="d-flex align-items-center p-2 settings-options">
          <p className="m-0 ps-2">Mi Perfil</p>
        </div>
      </Link>
      <div className="d-flex justify-content-center mt-0">
        <div className="separation"></div>
      </div>
      <div
        className="d-flex p-2 align-items-center settings-options"
        id="logout-div"
        onClick={logout}
      >
        <p id="logout-button" className="m-0 ps-2">
          Logout
        </p>
      </div>
    </div>
  );
};

SettingsMenu.propTypes = {
  clickCrossFunction: PropTypes.func,
};

export default SettingsMenu;
