import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import "./incidencias.css";

const Incidencias = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getIncidents();
  });

  return (
    <div className="container m-auto mt-5">
      <h1>Incidencias de la comunidad</h1>
      <div className="navbar row">
        <button type="button" className="btn btn-secondary col-2 mx-4">
          Añadir incidencia
        </button>
        <form className="form-inline col-5">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
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
            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="1">Leve</option>
                <option value="2">Media</option>
                <option value="3">Grave</option>
              </select>
            </td>
            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="1">Recibida</option>
                <option value="2">En proceso</option>
                <option value="3">Solucionada</option>
              </select>
            </td>
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
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Incidencias;
