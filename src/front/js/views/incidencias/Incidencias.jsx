import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteIncidents } from "../../Service/incident.js";
import { Context } from "../../store/appContext.js";
import "./incidencias.css";

const Incidencias = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getIncidents();
    actions.getUser();
    actions.getCommunity();
  }, []);

  console.log(store.community);
  const severityChange = (inc, e) => {
    const newIncident = {
      description: inc.description,
      zone: inc.zone,
      severity: e.target.value,
      status: inc.status,
    };

    actions.modifyIncidents(inc.id, newIncident);
  };

  const statusChange = (inc, e) => {
    const newIncident = {
      description: inc.description,
      zone: inc.zone,
      severity: inc.severity,
      status: e.target.value,
    };

    actions.modifyIncidents(inc.id, newIncident);
  };

  const descriptionChange = (inc, e) => {
    const newIncident = {
      description: e.target.value,
      zone: inc.zone,
      severity: inc.severity,
      status: inc.status,
    };

    actions.modifyIncidents(inc.id, newIncident);
  };

  const zoneChange = (inc, e) => {
    const newIncident = {
      description: inc.description,
      zone: e.target.value,
      severity: inc.severity,
      status: inc.status,
    };

    actions.modifyIncidents(inc.id, newIncident);
  };

  const deleteInc = (incident_id) => {
    actions.deleteIncident(incident_id);
  };

  return (
    <div className="container m-auto mt-5">
      <h1>Incidencias de la comunidad</h1>
      <div className="navbar row">
        {store.role.role_id == 1 ? (
          <Link
            className="btn btn-secondary col-2 mx-4"
            to="/formNuevaIncidencia"
          >
            Añadir incidencia
          </Link>
        ) : (
          ""
        )}

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
            <th scope="col"></th>
            <th scope="col">Factura</th>
          </tr>
        </thead>
        <tbody>
          {store.incidents.map((inc, index) => {
            return (
              <tr key={index}>
                <th scope="row">1</th>
                <td>
                  {store.role.role_id == 1 ? (
                    <input
                      defaultValue={inc.description}
                      className="form-control"
                      onKeyDown={(e) => {
                        if (e.keyCode == 13 || e.keyCode == 9) {
                          descriptionChange(inc, e);
                        }
                      }}
                    ></input>
                  ) : (
                    inc.description
                  )}
                </td>
                <td>
                  {store.role.role_id == 1 ? (
                    <input
                      defaultValue={inc.zone}
                      className="form-control"
                      onKeyDown={(e) => {
                        if (e.keyCode == 13 || e.keyCode == 9) {
                          zoneChange(inc, e);
                        }
                      }}
                    ></input>
                  ) : (
                    inc.zone
                  )}
                </td>
                <td>
                  {store.role.role_id == 1 ? (
                    <select
                      className="form-select"
                      defaultValue={
                        inc.severity == "Leve"
                          ? "Leve"
                          : inc.severity == "Media"
                          ? "Media"
                          : "Grave"
                      }
                      onChange={(e) => severityChange(inc, e)}
                    >
                      <option value="Leve">Leve</option>
                      <option value="Media">Media</option>
                      <option value="Grave">Grave</option>
                    </select>
                  ) : (
                    inc.severity
                  )}
                </td>
                <td>
                  {store.role.role_id == 1 ? (
                    <select
                      className="form-select"
                      defaultValue={
                        inc.status == "Recibido"
                          ? "Recibido"
                          : inc.status == "En proceso"
                          ? "En proceso"
                          : "Solucionado"
                      }
                      onChange={(e) => statusChange(inc, e)}
                    >
                      <option value="Recibido">Recibido</option>
                      <option value="En proceso">En proceso</option>
                      <option value="Solucionado">Solucionado</option>
                    </select>
                  ) : (
                    inc.status
                  )}
                </td>
                {store.role.role_id == 1 ? (
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash3"
                      viewBox="0 0 16 16"
                      onClick={() => deleteInc(inc.id)}
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </td>
                ) : (
                  <td></td>
                )}

                {store.role.role_id == 1 ? (
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-file-earmark-plus"
                      viewBox="0 0 16 16"
                      onClick={actions.addBill}
                    >
                      <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                      <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    </svg>
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ul className="pagination float-end">
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
    </div>
  );
};

export default Incidencias;