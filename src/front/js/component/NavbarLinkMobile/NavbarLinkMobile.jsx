import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./navbar-link-mobile.css";

const NavbarLinkMobile = (props) => {
  return (
    <>
      <Link to={props.redirect} className="link-tag">
        <li
          className="nav-element-mobile nav-link"
          id={props.id}
          data-bs-dismiss="offcanvas"
        >
          {props.linkName}
        </li>
      </Link>
    </>
  );
};

NavbarLinkMobile.propTypes = {
  id: PropTypes.string,
  linkName: PropTypes.string,
  redirect: PropTypes.string,
};

export default NavbarLinkMobile;
