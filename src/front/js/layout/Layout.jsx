import React from "react";
import PropTypes from "prop-types";
import "./layout.css";

//Layout Components
import Navbar from "./Navbar/Navbar.jsx";

const Layout = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="content">{props.children}</div>
      <footer className="footer text-center">footer</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;