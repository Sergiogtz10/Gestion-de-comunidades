import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

import "./home-page.css";

const HomePage = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCommunity();
    actions.getIncidents();
  }, []);

  return (
    <div className="container-fluid content mt-5 me-2">
      <h1>Home</h1>
      <div className="table-name d-flex justify-content-center mt-5">
        ÚLTIMAS INCIDENCIAS DE LA COMUNIDAD
      </div>

      <div className="d-flex justify-content-center">
        <div id="incidents-table" className="div-table m-0">
          <div className="table-responsive d-flex justify-content-center">
            <table className="table table-light table-striped m-0 table-homePage">
              {store.incidents.filter(
                (incidents) => incidents.community_id == store.community
              ).length > 0 ? (
                <tbody>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Zona</th>
                    <th scope="col">Gravedad</th>
                    <th scope="col">Estado</th>
                  </tr>
                  {store.incidents.slice(0, 3).map((incident, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{incident.description}</td>
                        <td>{incident.zone}</td>
                        <td>{incident.severity}</td>
                        <td>{incident.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody id="no-incidents-body">
                  <tr>
                    <td scope="row">
                      <strong>¡NO HAY INCIDENCIAS!</strong>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/incidencias/comunidad">
          <button className="btn boton-ver-mas-homePage">Ver Más</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
