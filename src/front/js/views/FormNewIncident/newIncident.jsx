import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import "./newIncident.css";

const FormNewIncident = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="p-5 ">
      <h4 id="title" className="text-center font-weight-bold">
        Nueva Incidencia
      </h4>
      <hr className="my-3"></hr>
      <form className="card p-5">
        <div className="py-3">
          <label className="form-label">Descripción</label>
          <input
            type="descripcion"
            className="form-control shadow-sm"
            placeholder="Descripción"
            name="descripcion"
          ></input>
        </div>

        <div className="py-3">
          <label className="form-label">Zona</label>
          <input
            type="zona"
            className="form-control shadow-sm"
            placeholder="Zona"
            name="zona"
          ></input>
        </div>

        <div className="py-3">
          <label className="form-label">Gravedad</label>
          <select className="form-select" defaultValue={"Leve"}>
            <option value="Leve">Leve</option>
            <option value="Media">Media</option>
            <option value="Grave">Grave</option>
          </select>
        </div>

        <div className="py-3">
          <button type="submit" className="btn btn-primary" id="boton">
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormNewIncident;
