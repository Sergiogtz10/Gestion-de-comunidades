import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./newbill.css";
import { Redirect } from "react-router-dom";

const FormFactura = () => {
  const { store, actions } = useContext(Context);
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState("");
  const [provider_id, setProvider_id] = useState("");
  const [document, setDocument] = useState("");
  const { incident_id, community_id } = useParams();
  const [redirect, setRedirect] = useState(false);

  const initialStateErr = {
    details: "",
    amount: "",
    provider_id: "",
  };
  const [err, setErr] = useState(initialStateErr);

  useEffect(() => {
    actions.getProviders(community_id);
  }, []);

  const createBill = (e) => {
    e.preventDefault();
    let newerr = { ...initialStateErr };
    if (details.length == 0) {
      newerr = {
        ...newerr,
        details: "Introduce el concepto de la factura",
      };
    }
    if (amount.length == 0) {
      newerr = { ...newerr, amount: "Introduce la cantidad" };
    }
    if (provider_id == "") {
      newerr = { ...newerr, provider_id: "Selecciona un proveedor" };
    }
    setErr(newerr);
    if (
      newerr.details == "" &&
      newerr.amount == "" &&
      newerr.provider_id == ""
    ) {
      let body_parameters = { details, amount, provider_id, document };
      actions.addBill(body_parameters, community_id, incident_id);
      setRedirect(true);
    }
  };
  return (
    <div className="container-fluid m-auto mt-5 content">
      <h1>Nueva Factura</h1>
      <hr className="my-3"></hr>
      <form
        className="container fluid card text-center justify-content-center p-3"
        id="card"
        style={{ width: "500px" }}
        onSubmit={(e) => createBill(e)}
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
          <label className="form-label">Proveedor</label>
          <select
            className="form-select"
            onChange={(e) => setProvider_id(e.target.value)}
          >
            <option value="">Selecciona proveedor</option>
            {store.providers.map((provider, index) => {
              return (
                <option key={index} value={provider.id}>
                  {provider.name}
                </option>
              );
            })}
          </select>
          {err.provider_id != "" ? (
            <div className="error">{err.provider_id}</div>
          ) : null}
        </div>

        <div className="py-3 w-100 container">
          <label className="form-label">Añadir documento</label>
          <input
            type="file"
            className="form-control shadow-sm"
            placeholder="Documento en pdf"
            name="documento"
            onChange={(e) => {
              setDocument(e.target.value);
            }}
          ></input>
        </div>

        <div className="py-3 text-end">
          <button className="btn btn-primary create" type="submit">
            Crear
          </button>
        </div>
      </form>
      <div className="py-3 text-start ">
        <Link className="btn btn-primary atras" to={"/incidencias/comunidad"}>
          Volver a incidencias comunes
        </Link>
        <Link
          className="btn btn-primary atras mx-4"
          to={"/incidencias/particulares"}
        >
          Volver a incidencias particulares
        </Link>
      </div>
      {redirect ? <Redirect to="/incidencias/comunidad"></Redirect> : null}
    </div>
  );
};

export default FormFactura;
