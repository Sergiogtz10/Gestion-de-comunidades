import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./CardProviders.css"
import { useParams } from "react-router-dom";

const CardProviders = () =>{
    const { store, actions } = useContext(Context);
    const { community_id } = useParams();
    console.log("aqui", store.providers)
    
    useEffect(() => {
        actions.getUser();
        actions.getProviders(community_id);
      }, []);
      console.log("hola", store.community)
 return (
    <div className="container-fluid m-auto mt-5 content">
    <h1>Proveedores</h1>
    <div className="navbar row">
      {store.role.role_id == 1 ? (
        <div>
          <Link
            className="btn btn-secondary col-2 mx-4 add"
            to="/form/provider"
          >
            Añadir proveedor
          </Link>
        </div>
      ) : (
        null
      )}
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
                    <input defaultValue={provi.name} className="form-control"></input>
                </td>
                <td>
                    <input defaultValue={provi.service} className="form-control"></input>
                </td> 
            </tr>
            );})}
      </tbody>
      </table>
 </div>
 )
 
};

export default CardProviders;