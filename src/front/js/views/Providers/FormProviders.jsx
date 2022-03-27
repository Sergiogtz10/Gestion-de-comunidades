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
  console.log(store.community)
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
    <div id="form-new-provider" className="container m-auto mt-5">
      <h1>Nuevo prooveedor</h1>
      <hr className="my-3"></hr>
      <form className="card p-5" onSubmit={(e) => handleClick(e)}>
        <div className="py-3 w-50">
          <label className="form-label">Nombre del proveedor</label>
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

        <div className="py-3 w-25">
          <label className="form-label">Servicio</label>
          <textarea
            type="text"
            className="form-control shadow-sm"
            placeholder="Servicio que presta"
            name="service"
            onChange={(e) => {
              setService(e.target.value);
            }}
          ></textarea>
          {err.service != "" ? (
            <div className="error">{err.service}</div>
          ) : null}
          <div onChange={(e) => {
              setLogo(e.target.value);
            }}></div>
        </div>
        <div className="py-3 text-end">
          <button className="btn btn-primary create" type="submit">
            Crear
          </button>
        </div>
      </form>
      <div className="py-3 text-start ">
        <Link className="btn btn-primary atras" to={"/providers"}>
          Atrás
        </Link>
      </div>
      {redirect ? <Redirect to="/providers"></Redirect> : null}
    </div>
  );
};

export default FormProviders;
