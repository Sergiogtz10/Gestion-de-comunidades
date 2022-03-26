import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

import "./home-page.css";

const HomePage = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUser();
    actions.getCommunity();
    actions.getIncidents();
    actions.getOwnerIncidents();
    actions.getAllIncidents();
  }, []);
  console.log(store.incidents);
  return (
    <div className="container-fluid content mt-5 me-2">
      <h1>Home</h1>
      <div className="title-and-table">
        <div className="table-name d-flex justify-content-center">
          ÚLTIMAS INCIDENCIAS DE LA COMUNIDAD
        </div>
        <div className="d-flex justify-content-center">
          <div id="incidents-table" className="div-table m-0">
            <div className="table-responsive d-flex justify-content-center">
              <table className="table table-light table-striped m-0 table-homePage">
                {store.incidents.filter(
                  (incidents) => incidents.community_id == store.community
                ).length > 0 ? (
                  <>
                    <thead>
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
                          (incidents) =>
                            incidents.community_id == store.community
                        )
                        .slice(0, 3)
                        .map((incident, index) => {
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
                  </>
                ) : (
                  <tbody className="empty">
                    <tr>
                      <th scope="row" className="table-secondary">
                        ¡NO HAY INCIDENCIAS DE LA COMUNIDAD! 🥳
                      </th>
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

      <div className="table-name-not-first">
        {store.role.role_id === 1 ? (
          <div className="table-name d-flex justify-content-center">
            ÚLTIMAS INCIDENCIAS PARTICULARES
          </div>
        ) : (
          <div className="table-name d-flex justify-content-center">
            MIS ÚLTIMAS INCIDENCIAS
          </div>
        )}
        <div className="d-flex justify-content-center">
          <div id="incidents-table" className="div-table m-0">
            <div className="table-responsive d-flex justify-content-center">
              <table className="table table-light table-striped m-0 table-homePage">
                {store.role.role_id === 1 ? (
                  <>
                    {store.all_particular_incidents.filter(
                      (incidents) => incidents.community_id == store.community
                    ).length > 0 ? (
                      <>
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Zona</th>
                            <th scope="col">Gravedad</th>
                            <th scope="col">Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          {store.all_particular_incidents
                            .filter(
                              (incidents) =>
                                incidents.community_id === store.community
                            )
                            .slice(0, 3)
                            .map((incident, index) => (
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{incident.description}</td>
                                <td>{incident.zone}</td>
                                <td>{incident.severity}</td>
                                <td>{incident.status}</td>
                              </tr>
                            ))}
                        </tbody>
                      </>
                    ) : (
                      <tbody className="empty">
                        <tr>
                          <th scope="row" className="table-secondary">
                            ¡NO HAY INCIDENCIAS PARTICULARES! 🥳
                          </th>
                        </tr>
                      </tbody>
                    )}
                  </>
                ) : (
                  <>
                    {store.owner_incidents.filter(
                      (incidents) => incidents.common === false
                    ).length > 0 ? (
                      <>
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Zona</th>
                            <th scope="col">Gravedad</th>
                            <th scope="col">Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          {store.owner_incidents
                            .filter((incidents) => incidents.common === false)
                            .slice(0, 3)
                            .map((incident, index) => (
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{incident.description}</td>
                                <td>{incident.zone}</td>
                                <td>{incident.severity}</td>
                                <td>{incident.status}</td>
                              </tr>
                            ))}
                        </tbody>
                      </>
                    ) : (
                      <tbody className="empty">
                        <tr>
                          <th scope="row" className="table-secondary">
                            NO TIENES NINGUNA INCIDENCIA PARTICULAR
                          </th>
                        </tr>
                      </tbody>
                    )}
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/incidencias/particulares">
            <button className="btn boton-ver-mas-homePage">Ver Más</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
