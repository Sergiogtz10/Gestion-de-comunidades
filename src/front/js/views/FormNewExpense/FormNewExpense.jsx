import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./formNewExpense.css";
import { Redirect } from "react-router-dom";

const FormExpense = () => {
  const { store, actions } = useContext(Context);
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const { community_id } = useParams();
  const [redirect, setRedirect] = useState(false);

  const initialStateErr = {
    details: "",
    amount: "",
    date: "",
  };
  const [err, setErr] = useState(initialStateErr);

  const createExpense = (e) => {
    e.preventDefault();
    let newerr = { ...initialStateErr };
    if (details.length == 0) {
      newerr = {
        ...newerr,
        details: "Introduce el concepto del gasto",
      };
    }
    if (amount.length == 0) {
      newerr = { ...newerr, amount: "Introduce la cantidad" };
    }
    if (date.length == "") {
      newerr = { ...newerr, date: "Selecciona una fecha" };
    }
    setErr(newerr);
    if (newerr.details == "" && newerr.amount == "" && newerr.date == "") {
      let body_parameters = { details, amount, date };
      actions.addExpense(body_parameters, community_id);
      setRedirect(true);
    }
  };
  return (
    <div className="container-fluid m-auto mt-5 content">
      <h1>Nuevo gasto</h1>
      <hr className="my-3"></hr>
      <form
        className="container fluid card text-center justify-content-center p-3"
        id="card"
        style={{ width: "500px" }}
        onSubmit={(e) => createExpense(e)}
      >
        <div className="py-3 w-100 container">
          <label className="form-label">Concepto</label>
          <textarea
            type="text"
            className="form-control shadow-sm"
            placeholder="Concepto de la factura"
            name="concepto"
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          ></textarea>
          {err.details != "" ? (
            <div className="error">{err.details}</div>
          ) : null}
        </div>

        <div className="py-3 w-100 container">
          <label className="form-label">Cantidad</label>
          <input
            type="number"
            className="form-control shadow-sm"
            placeholder="Cantidad"
            name="cantidad"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          ></input>
          {err.amount != "" ? <div className="error">{err.amount}</div> : null}
        </div>

        <div className="py-3 w-100 container">
          <label className="form-label">Fecha</label>
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Fecha"
            name="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
          {err.date != "" ? <div className="error">{err.date}</div> : null}
        </div>

        <div className="py-3 text-center">
          <button className="btn btn-primary create" type="submit">
            Crear
          </button>
        </div>
      </form>
      <div className="py-3 text-center">
        <Link className="btn btn-primary atras" to={"/facturas"}>
          Atrás
        </Link>
      </div>
      {redirect ? <Redirect to="/facturas"></Redirect> : null}
    </div>
  );
};

export default FormExpense;
