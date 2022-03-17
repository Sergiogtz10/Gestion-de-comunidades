import React from "react";
import PropTypes from "prop-types";
import "./navbar-link-mobile.css";

const NavbarLinkMobile = (props) => {
  return (
    <li className="nav-element-mobile nav-link" id={props.id}>
      {props.linkName}
    </li>
  );
};

NavbarLinkMobile.propTypes = {
  id: PropTypes.string,
  linkName: PropTypes.string,
};

export default NavbarLinkMobile;
