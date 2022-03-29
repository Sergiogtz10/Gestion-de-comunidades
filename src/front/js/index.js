//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//import general style
import "../styles/index.css";

//import your own components
import Layout from "./Layout/layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
