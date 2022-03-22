import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./navbar-link-desktop.css";

const NavbarLinkDesktop = (props) => {
  return (
    <li className={`nav-element nav-link m-0 p-0 ${props.individualClassLi}`}>
      <Link to={props.link} className="link-tag">
        <div
          className="d-flex align-items-center"
          onClick={props.clickFunction}
        >
          {props.icon}
          <p className={`m-0 ${props.pClassName}`}>{props.linkName}</p>
        </div>
      </Link>
    </li>
  );
};

NavbarLinkDesktop.propTypes = {
  individualClassLi: PropTypes.string,
  link: PropTypes.string,
  clickFunction: PropTypes.func,
  icon: PropTypes.node,
  pClassName: PropTypes.string,
  linkName: PropTypes.string,
};

export default NavbarLinkDesktop;
