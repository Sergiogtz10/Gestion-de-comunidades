import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./billDetail.css";

const Bill = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1>Factura</h1>
    </div>
  );
};

export default Bill;
