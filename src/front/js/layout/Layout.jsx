import React from "react";
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <>
      <header>Navbar</header>
      <div>{props.children}</div>
      <footer>footer</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
