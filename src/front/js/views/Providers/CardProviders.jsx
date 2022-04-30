import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./CardProviders.css";
import { useParams } from "react-router-dom";

const CardProviders = () => {
  const { store, actions } = useContext(Context);
  const { community_id } = useParams();

  useEffect(() => {
    actions.getUser();
    actions.getProviders(community_id);
  }, []);

  const deleteProv = (provider_id) => {
    actions.deleteProvider(provider_id);
  };
  return (
    <div className="container-fluid m-auto mt-1 content">
      <h1>Proveedores</h1>
      <div className="navbar row mb-2">
        {store.role.role_id == 1 ? (
          <div>
            <Link
              className="btn btn-secondary col-2 mx-4 add"
              to="/form/provider"
            >
              Añadir proveedor
            </Link>
          </div>
        ) : null}
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Servicio</th>
          </tr>
        </thead>
        <tbody>
          {store.providers
            .filter((provider) => provider.community_id == store.community)
            .map((provi, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <input
                      id="input_color"
                      defaultValue={provi.name}
                      className="form-control "
                    ></input>
                  </td>
                  <td>
                    <input
                      id="input_color"
                      defaultValue={provi.service}
                      className="form-control"
                    ></input>
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
                        onClick={() => deleteProv(provi.id)}
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </td>
                  ) : null}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CardProviders;
