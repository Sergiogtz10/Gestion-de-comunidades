import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./FormProviders.css";
import { Context } from "../../store/appContext.js";


const initialStateErr = {
  name: "",
  service: "",
  logo: "",
};
const FormProviders = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState();
  const [service, setService] = useState("");
  const [logo, setLogo] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [err, setErr] = useState(initialStateErr);

  useEffect(() => {
    actions.getUser();
    actions.getCommunity();
  }, []);
  
  const handleClick = (e) => {
    e.preventDefault();
    let newerr = { ...initialStateErr };

    if (name.length == 0) {
      newerr = { ...newerr, name: "Introduzca el nombre del proveedor" };
    }
    if (service.length == 0) {
      newerr = { ...newerr, service: "Introduzca el servicio que presta" };
    }
    
    setErr(newerr);

    if (newerr.name == "" && newerr.service == ""&& newerr.logo == "") {
      let body_parameters ={ name, service, logo};
      actions.createProviders(body_parameters, store.community);
      setRedirect(true);
    }
  };
  console.log(err);

  return (
    <div className="container-fluid m-auto mt-5 content">
      <h1>Nuevo proveedor</h1>
      <hr className="my-3"></hr>
      <div className="py-3 text-start">
        <Link className="btn btn-primary atras" to={"/providers/:community_id"}>
          Atrás
        </Link>
      </div>
      <form className="container fluid card text-center justify-content-center p-3"id="card" style={{ width: "500px" }} onSubmit={(e) => handleClick(e)}>
        <div className="py-3 w-100 container">
          <label className="form-label fs-5">Nombre del proveedor</label>
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Nuevo proveedor"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          {err.name != "" ? <div className="error">{err.name}</div> : null}
        </div>

        <div className="py-3  w-100 container">
          <label className="form-label fs-5">Servicio</label>
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Servicio que presta"
            name="service"
            onChange={(e) => {
              setService(e.target.value);
            }}
          ></input>
          {err.service != "" ? (
            <div className="error">{err.service}</div>
          ) : null}
          <div onChange={(e) => {
              setLogo(e.target.value);
            }}></div>
        </div>
        <div className="py-3 text-center">
          <button className="btn btn-primary create" type="submit">
            Crear
          </button>
        </div>
      </form>
      {redirect ? <Redirect to="/providers/:community_id"></Redirect> : null}
    </div>
  );
};

export default FormProviders;
