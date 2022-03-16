import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";

const FormNewIncident = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="p-5">
      <h1>Formulario nueva incidencia</h1>
    </div>
  );
};

export default FormNewIncident;
