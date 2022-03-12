import React from "react";
import { Link } from "react-router-dom";
import "./settings-navbar.css";

const SettingsNavbar = () => {
  return (
    <>
      <div id="avatar" className="d-flex align-items-end">
        <button id="avatar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            class="bi bi-gear-fill"
            viewBox="0 0 16 16"
            id="settings-icon"
          >
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
        </button>
      </div>
      <div id="avatar-menu" className=" d-flexalign-items-center flex-column">
        <div id="cross">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg me-auto"
            viewBox="0 0 16 16"
          >
            <path d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
            <path d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
          </svg>
        </div>
        <Link to="/perfil" className="link-tag">
          <p className="m-0 pb-2 w-100 ps-2 pe-4 pt-3">Mi Perfil</p>
        </Link>
        <p className="m-0 ps-2 pe-4 pb-2">Logout</p>
      </div>
    </>
  );
};

export default SettingsNavbar;
