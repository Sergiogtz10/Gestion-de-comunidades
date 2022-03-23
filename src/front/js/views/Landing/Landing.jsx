import React from "react";
import "./Landing.css";

import NavbarLanding  from "./NavbarLanding.jsx";
import Body  from "./Body.jsx";
import Advantages  from "./Advantages.jsx";
import Footer from "./Footer.jsx";


const Landing = () =>{
    return(
        <div>
            <NavbarLanding />
            <Body />
            <Advantages />
            <Footer />

        </div>
    );
}

export default Landing;

