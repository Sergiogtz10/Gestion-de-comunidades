import React from "react";
import "./incidencias.css";

const Incidencias = () => {
  return (
    <div>
      <h1>Incidencias de la comunidad</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Descripción</th>
            <th scope="col">Zona</th>
            <th scope="col">Gravedad</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Descripción de la incidencia</td>
            <td>Zona de la incidencia</td>
            <td>Gravedad de la incidencia</td>
            <td>Estado de la incidencia</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Descripción de la incidencia</td>
            <td>Zona de la incidencia</td>
            <td>Gravedad de la incidencia</td>
            <td>Estado de la incidencia</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Descripción de la incidencia</td>
            <td>Zona de la incidencia</td>
            <td>Gravedad de la incidencia</td>
            <td>Estado de la incidencia</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Incidencias;
