import React, { useState } from "react";

import "./FormAdmin.css";

import { postRegisterAdmin } from "../../Service/users";

const initialStateErr = {
  name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
  repeat_password: "",
};
const FormAdmin = () => {
  const [admin, setAdmin] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    repeat_password: "",
  });

  const [err, setErr] = useState(initialStateErr);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdmin({ ...admin, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    let newerr = { ...initialStateErr };

    if (admin.name.length == 0) {
      newerr = { ...newerr, name: "Introduzca su nombre" };
    }
    if (admin.last_name.length == 0) {
      newerr = { ...newerr, last_name: "Introduzca sus apellidos" };
    }
    if (admin.email.length == 0) {
      newerr = { ...newerr, email: "Introduzca su email" };
    }
    if (admin.phone.length !== 9) {
      newerr = { ...newerr, phone: "Introduzca su móvil" };
    }
    if (admin.password.length < 6) {
      newerr = { ...newerr, password: "Introduzca 6 caracteres" };
    }
    if (admin.password !== admin.repeat_password) {
      newerr = { ...newerr, repeat_password: "Las contraseñas no coinciden" };
    }
    setErr(newerr);

    if (
      newerr.name == "" &&
      newerr.last_name == "" &&
      newerr.email == "" &&
      newerr.phone == "" &&
      newerr.password == "" &&
      newerr.repeat_password == ""
    ) {
      console.log("todo bien en el fecth");
      let newUserAdmin = { ...admin };
      delete newUserAdmin.repeat_password;
      postRegisterAdmin(newUserAdmin)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };
  console.log(err);
  return (
    <div>
      <h3 id="title" className="text-center  p-3">
        Formulario de registro para el administrador
      </h3>
      <div
        className="container fluid card text-center justify-content-center p-4"
        id="card"
        style={{ width: "700px" }}
      >
        <form onChange={handleChange} onSubmit={handleClick}>
          <div className="mb-3 d-flex">
            <div className="px-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="Nombre"
              ></input>
              {err.name != "" ? (
                <div id="validsize" className="col-12 text-danger">
                  {err.name}
                </div>
              ) : null}
            </div>
            <div>
              <label className="form-label">Apellidos</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                id="Apellidos"
              ></input>
              {err.last_name != "" ? (
                <div id="validsize" className="col-12 text-danger">
                  {err.last_name}
                </div>
              ) : null}
            </div>
          </div>
          <div className="mb-3 d-flex">
            <div className="px-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="Email"
              ></input>
              {err.email != "" ? (
                <div id="validsize" className="col-12 text-danger">
                  {err.email}
                </div>
              ) : null}
            </div>
            <div>
              <label className="form-label">Telefono</label>
              <input
                type="number"
                className="form-control"
                name="phone"
                id="Telefono"
              ></input>
              {err.phone != "" ? (
                <div id="validsize" className="col-12 text-danger">
                  {err.phone}
                </div>
              ) : null}
            </div>
          </div>
          <div className="mb-3 d-flex">
            <div className="px-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="Contraseña"
              ></input>
              {err.password != "" ? (
                <div id="validsize" className="col-12 text-danger">
                  {err.password}
                </div>
              ) : null}
            </div>

            <div>
              <label className="form-label">Repetir contraseña</label>
              <input
                type="password"
                className="form-control"
                name="repeat_password"
                id="RepetirContraseña"
              ></input>
              {err.repeat_password != "" ? (
                <div id="validsize" className="col-12 text-danger">
                  {err.repeat_password}
                </div>
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
  );
};

export default FormAdmin;
