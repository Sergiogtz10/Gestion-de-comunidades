import React from "react";
import "./Providers.css";
import CardProviders from "./CardProviders.jsx";

const Providers = () => {
  return (
    <div className="container-fluid content mt-5 me-2" id="divProvider">
      <div className="container-fluid mt-5 content row">
        <CardProviders />
      </div>
    </div>
  );
};

export default Providers;
