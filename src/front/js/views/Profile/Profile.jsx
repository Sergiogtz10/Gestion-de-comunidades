import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDataUsers } from "../../Service/dataprofile.js";
import "./Profile.css";

const Profile = () => {
  const [dataUser, setDataUser] = useState({});
  const getdata = async () => {
    try {
      const response = await getDataUsers();
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <h3 className="container fluid">Nombre de usuario</h3>
      <div
        id="card"
        className="container fluid card p-4"
        style={{ width: "700px" }}
      >
        <h4 id="titlecardprofile">Datos personales</h4>
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Nombre</li>
            <li className="list-group-item">Apellidos</li>
            <li className="list-group-item">Email</li>
            <li className="list-group-item">Teléfono</li>
          </ul>
          <div className="p-1">
            <button type="submit" className="btn btn-primary" id="boton">
              Actualizar
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div
          id="card"
          className="container fluid card p-4"
          style={{ width: "700px" }}
        >
          <h4 id="titlecardprofile">Comunidades</h4>

          <div className="d-flex flex-column col-md-5 gap-3 p-3">
            <Link to="/form/community">
              <button type="submit" className="btn btn-primary" id="boton">
                Añadir comunidad
              </button>
            </Link>
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
