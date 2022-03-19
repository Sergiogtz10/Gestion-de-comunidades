import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "./newIncident.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const FormNewIncident = () => {
  const { store, actions } = useContext(Context);
  const [description, setDescription] = useState("");
  const [zone, setZone] = useState("");
  const [severity, setSeverity] = useState("");
  const [redirect, setRedirect] = useState(false);

  const initialStateErr = {
    description: "",
    zone: "",
    severity: "",
  };
  const [err, setErr] = useState(initialStateErr);

  useEffect(() => {
    actions.getUser();
    actions.getCommunity();
  }, []);

  const createIncident = (e) => {
    e.preventDefault();
    let newerr = { ...initialStateErr };
    if (description.length == 0) {
      newerr = {
        ...newerr,
        description: "Introduce la descripción de la incidencia",
      };
    }
    if (zone.length == 0) {
      newerr = { ...newerr, zone: "Introduce la zona de la incidencia" };
    }
    if (severity == "") {
      newerr = {
        ...newerr,
        severity: "Introduce la gravedad de la incidencia",
      };
    }

    setErr(newerr);
    console.log(err.description);

    if (
      newerr.description == "" &&
      newerr.zone == "" &&
      newerr.severity == ""
    ) {
      let body_parameters = { description, zone, severity };
      actions.createNewIncident(body_parameters, store.community);
      actions.getIncidents();
      setRedirect(true);
    }
  };

  return (
    <div className="container m-auto mt-5">
      <h1>Nueva Incidencia</h1>
      <hr className="my-3"></hr>
      <form className="card p-5" onSubmit={(e) => createIncident(e)}>
        <div className="py-3 w-50">
          <label className="form-label">Descripción</label>
          <textarea
            type="text"
            className="form-control shadow-sm"
            placeholder="Descripción de la incidencia"
            name="descripcion"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          {err.description != "" ? (
            <div className="error">{err.description}</div>
          ) : null}
        </div>

        <div className="py-3 w-25">
          <label className="form-label">Zona</label>
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Lugar de la incidencia"
            name="zona"
            onChange={(e) => {
              setZone(e.target.value);
            }}
          ></input>
          {err.zone != "" ? <div className="error">{err.zone}</div> : null}
        </div>

        <div className="py-3 w-25">
          <label className="form-label">Gravedad</label>
          <select
            className="form-select"
            defaultValue={""}
            onChange={(e) => setSeverity(e.target.value)}
          >
            <option value="">Selecciona gravedad</option>
            <option value="Leve">Leve</option>
            <option value="Media">Media</option>
            <option value="Grave">Grave</option>
          </select>
          {err.severity != "" ? (
            <div className="error">{err.severity}</div>
          ) : null}
        </div>

        <div className="py-3 text-end">
          <button className="btn btn-primary create" type="submit">
            Crear
          </button>
        </div>
      </form>
      <div className="py-3 text-start ">
        <Link className="btn btn-primary atras" to={"/incidencias/comunidad"}>
          Atrás
        </Link>
      </div>
      {redirect ? <Redirect to="/incidencias/comunidad"></Redirect> : null}
    </div>
  );
};

export default FormNewIncident;
