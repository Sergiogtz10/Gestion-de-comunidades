import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./billDetail.css";

const Bill = () => {
  const { store, actions } = useContext(Context);
  const { bill_id } = useParams();

  useEffect(() => {
    actions.getBill(bill_id);
  }, []);
  return (
    <div>
      <div className="container m-auto mt-5">
        <h1>Factura</h1>
        <hr className="my-3"></hr>
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Concepto: {store.bill.details}</li>
            <li className="list-group-item">Cantidad:{store.bill.amount}</li>
            <li className="list-group-item">Documento:{store.bill.document}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bill;
