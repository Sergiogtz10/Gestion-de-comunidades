import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div>
      <h3 className="container fluid">Nombre de usuario</h3>
      <h5 className="container fluid">Datos personales</h5>
      <div id="card" className="container fluid card p-4">
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Nombre</li>
            <li className="list-group-item">Apellidos</li>
            <li className="list-group-item">Email</li>
            <li className="list-group-item">Teléfono</li>
          </ul>
          <button type="submit" className="btn btn-primary" id="boton">
            Actualizar
          </button>
        </div>
      </div>
      <h5 className="container fluid">Comunidades</h5>
      <div id="card" className="container fluid card p-4">
        <div>
          <select className="form-select">
            <option selected>Seleccionar comunidad</option>
            <option value="1">Calle Mayor, 22</option>
          </select>
          <div className="d-flex flex-column col-md-2 gap-3 p-3">
          <button type="submit" className="btn btn-primary" id="boton">
            Añadir comunidad
          </button>
          <button type="submit" className="btn btn-primary" id="boton">
            Añadir propietario
          </button>
          <button type="submit" className="btn btn-primary" id="boton">
            Actualizar
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;