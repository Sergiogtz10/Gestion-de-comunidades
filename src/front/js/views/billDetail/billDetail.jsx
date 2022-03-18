import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./billDetail.css";

const Bill = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="container m-auto mt-5">
        <h1>Factura</h1>
        <hr className="my-3"></hr>
        <div className="card p-5">
          <ul>
            <li>Concepto</li>
            <li>Cantidad</li>
            <li>Proveedor</li>
            <li>Documento</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bill;
