import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";

import { Redirect } from "react-router-dom";
import "./FormAdmin.css";

import { postRegisterAdmin } from "../../Service/users";

const initialStateErr = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  password: "",
  repeat_password: "",
};
const FormAdmin = () => {
  const {store, actions} = useContext(Context);
  const [admin, setAdmin] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    repeat_password: "",
  });
  const [redirect, setRedirect] = useState(false);

  const [err, setErr] = useState(initialStateErr);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdmin({ ...admin, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    let newerr = { ...initialStateErr };

    if (admin.first_name.length == 0) {
      newerr = { ...newerr, first_name: "Introduzca su nombre" };
    }
    if (admin.last_name.length == 0) {
      newerr = { ...newerr, last_name: "Introduzca sus apellidos" };
    }
    if (admin.email.length == 0) {
      newerr = { ...newerr, email: "Introduzca su email" };
    }
    if (admin.phone_number.length !== 9) {
      newerr = { ...newerr, phone_number: "Introduzca su móvil" };
    }
    if (admin.password.length < 6) {
      newerr = { ...newerr, password: "Introduzca 6 caracteres" };
    }
    if (admin.password !== admin.repeat_password) {
      newerr = { ...newerr, repeat_password: "Las contraseñas no coinciden" };
    }
    setErr(newerr);

    if (
      newerr.first_name == "" &&
      newerr.last_name == "" &&
      newerr.email == "" &&
      newerr.phone_number == "" &&
      newerr.password == "" &&
      newerr.repeat_password == ""
    ) {
      let newUserAdmin = { ...admin };
      delete newUserAdmin.repeat_password;
      postRegisterAdmin(newUserAdmin)
        .then((response) => response.json())
        .then((data) => {
          actions.setRegisteradmin(data);
          setRedirect(true);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="p-5">
      <div
        className="container fluid card text-center justify-content-center p-3"
        id="card"
        style={{ width: "550px" }}
      >
        <h4 id="title" className="text-center p-1">
          Registrarse como administrador
        </h4>
        <hr className="my-3"></hr>
        <div className="text-center container-fluid">
        <form onChange={handleChange} onSubmit={handleClick}>
          <div className="mb-3 d-flex">
            <div className="px-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control shadow-sm"
                name="first_name"
                id="Nombre"
                placeholder="Nombre"
              ></input>
              {err.first_name != "" ? <div>{err.first_name}</div> : null}
            </div>
            <div>
              <label className="form-label">Apellidos</label>
              <input
                type="text"
                className="form-control shadow-sm"
                name="last_name"
                id="Apellidos"
                placeholder="Apellidos"
              ></input>
              {err.last_name != "" ? (
                <div id="valid">{err.last_name}</div>
              ) : null}
            </div>
          </div>
          <div className="mb-3 d-flex">
            <div className="px-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control shadow-sm"
                name="email"
                id="Email"
                placeholder="Email"
              ></input>
              {err.email != "" ? <div id="valid">{err.email}</div> : null}
            </div>
            <div>
              <label className="form-label">Telefono</label>
              <input
                type="text"
                className="form-control shadow-sm"
                name="phone_number"
                id="Telefono"
                placeholder="Teléfono"
              ></input>
              {err.phone_number != "" ? (
                <div id="valid">{err.phone_number}</div>
              ) : null}
            </div>
          </div>
          <div className="mb-3 d-flex">
            <div className="px-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control shadow-sm"
                name="password"
                id="Contraseña"
                placeholder="Contraseña"
              ></input>
              {err.password != "" ? <div id="valid">{err.password}</div> : null}
            </div>

            <div>
              <label className="form-label">Repetir contraseña</label>
              <input
                type="password"
                className="form-control shadow-sm"
                name="repeat_password"
                id="RepetirContraseña"
                placeholder="Repetir"
              ></input>
              {err.repeat_password != "" ? (
                <div id="valid">{err.repeat_password}</div>
              ) : null}
            </div>
          </div>

          <div className="p-3">
            <button type="submit" className="btn btn-primary" id="boton">
              Registrarse
            </button>
          </div>
          </form>
        </div>  
      </div>
      {redirect ? <Redirect to="/form/community"></Redirect> : null}
    </div>
  );
};

export default FormAdmin;
