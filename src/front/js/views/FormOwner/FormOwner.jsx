import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";

import "./FormOwner.css";

import { postRegisterOwner } from "../../Service/users";

const initialStateErr = {
  first_name: "",
  last_name: "",
  flat_number: "",
  email: "",
  phone_number: "",
  password: "",
  repeat_password: "",
};

const FormOwner = () => {
  const [owner, setOwner] = useState({
    first_name: "",
    last_name: "",
    flat_number: "",
    email: "",
    phone_number: "",
    password: "",
    repeat_password: "",
  });

  const community_id = useParams();
  

  const [redirect, setRedirect] = useState(false);

  const [err, setErr] = useState(initialStateErr);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOwner({ ...owner, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    let newerr = { ...initialStateErr };

    if (owner.first_name.length == 0) {
      newerr = { ...newerr, first_name: "Introduzca su nombre" };
    }
    if (owner.last_name.length == 0) {
      newerr = { ...newerr, last_name: "Introduzca sus apellidos" };
    }
    if (owner.flat_number.length == 0) {
      newerr = { ...newerr, flat_number: "Introduzca su piso" };
    }
    if (owner.email.length == 0) {
      newerr = { ...newerr, email: "Introduzca su email" };
    }
    if (owner.phone_number.length !== 9) {
      newerr = { ...newerr, phone_number: "Introduzca su móvil" };
    }
    if (owner.password.length < 6) {
      newerr = { ...newerr, password: "Introduzca 6 caracteres" };
    }
    if (owner.password !== owner.repeat_password) {
      newerr = { ...newerr, repeat_password: "Las contraseñas no coinciden" };
    }
    setErr(newerr);

    if (
      newerr.first_name == "" &&
      newerr.last_name == "" &&
      newerr.flat_number == "" &&
      newerr.email == "" &&
      newerr.phone_number == "" &&
      newerr.password == "" &&
      newerr.repeat_password == ""
    ) {
      
      let newUserOwner = { ...owner };
      delete newUserOwner.repeat_password;
      postRegisterOwner(newUserOwner, community_id.id)
        .then((response) => response.json())
        .then(() => setRedirect(true))
        .catch((error) => console.log(error));
    }
    
  };
  return (
    <div>
      <div className="p-5">
        <div className="container fluid card text-center justify-content-center p-3" id="card" style={{ width: "570px" }}>
        <h4 id="title" className="text-center p-1">Registrase como propietario</h4>
        <hr className="my-3"></hr>
          <form onChange={handleChange} onSubmit={handleClick}>
            <div className="mb-3 d-flex container-fluid">
              <div className="px-3">
                <label className="form-label text-center ">Nombre</label>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  name="first_name"
                  id="Nombre"
                  placeholder="Nombre"
                ></input>
                {err.first_name != "" ? (
                  <div id="valid">
                    {err.first_name}
                  </div>
                ) : null}
              </div>
              <div className="px-3">
                <label className="form-label">Apellidos</label>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  name="last_name"
                  id="Apellidos"
                  placeholder="Apellidos"
                ></input>
                {err.last_name != "" ? (
                  <div id="valid">
                    {err.last_name}
                  </div>
                ) : null}
              </div>
              <div className="px-3">
                <label className="form-label">Piso</label>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  name="flat_number"
                  id="Piso"
                  placeholder="Piso"
                ></input>
                {err.flat_number != "" ? (
                  <div id="valid">
                    {err.flat_number}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mb-3 d-flex container-fluid">
              <div className="px-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control shadow-sm"
                  name="email"
                  id="Email"
                  placeholder="Email"
                ></input>
                {err.email != "" ? (
                  <div id="valid">
                    {err.email}
                  </div>
                ) : null}
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
                  <div id="valid">
                    {err.phone_number}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mb-3 d-flex container-fluid">
              <div className="px-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control shadow-sm"
                  name="password"
                  id="Contraseña"
                  placeholder="Contraseña"
                ></input>
                {err.password != "" ? (
                  <div id="valid">
                    {err.password}
                  </div>
                ) : null}
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
                  <div id="valid">
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
      {redirect ? <Redirect to="/login"></Redirect> : null}
    </div>
  );
};
export default FormOwner;
