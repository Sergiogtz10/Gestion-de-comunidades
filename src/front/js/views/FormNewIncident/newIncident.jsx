import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "./newIncident.css";
import { Link } from "react-router-dom";

const FormNewIncident = () => {
  const { store, actions } = useContext(Context);
  const [description, setDescription] = useState("");
  const [zone, setZone] = useState("");
  const [severity, setSeverity] = useState("");

  useEffect(() => {
    actions.getUser();
    actions.getCommunity();
  }, []);

  const createIncident = (e) => {
    e.preventDefault();
    let body = { description, zone, severity };
    actions.createNewIncident(body, store.community, store.user_id, true);
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
    </div>
  );
};

export default FormNewIncident;
