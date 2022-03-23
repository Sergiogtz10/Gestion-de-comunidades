import React, { useEffect, useContext } from "react";
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
    <div className="container-fluid content mt-5">
      <h1>Home</h1>
      <h5 className="table-name">ÚLTIMAS INCIDENCIAS</h5>
      <div className="div-table p-2">
        <div className="table-responsive">
          <table className="table table-light table-striped m-0">
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
              {store.incidents
                .filter(
                  (incidents) => incidents.community_id == store.community
                )
                .map((incident, index) => {
                  let count = 0;

                  while (count <= 3) {
                    count++;
                    return (
                      <tr key={index}>
                        <th scope="col">{index + 1}</th>
                        <td scope="col">{incident.description}</td>
                        <td scope="col">{incident.zone}</td>
                        <td scope="col">{incident.severity}</td>
                        <td scope="col">{incident.status}</td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
