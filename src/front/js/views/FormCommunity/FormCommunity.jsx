import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Redirect } from "react-router-dom";
import { postRegisterCommunity } from "../../Service/community";
import "./FormCommunity.css";

const initialStateErr = {
  address: "",
  flats: "",
};

const FormCommunity = () => {
  const { store, actions } = useContext(Context);
  const [community, setCommunity] = useState({
    address: "",
    flats: "",
  });
  const [redirect, setRedirect] = useState(false);

  const [err, setErr] = useState(initialStateErr);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCommunity({ ...community, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    let newerr = { ...initialStateErr };

    if (community.address.length == 0) {
      newerr = {
        ...newerr,
        address: "Introduzca la dirección de la comunidad",
      };
    }
    if (community.flats == 0) {
      newerr = { ...newerr, flats: "Introduzca el número de viviendas" };
    }
    setErr(newerr);

    if (newerr.address == "" && newerr.flats == "") {
      console.log("todo bien en el fetch community");
      let newCommunity = { ...community };
      postRegisterCommunity(newCommunity, store.user_id)
        .then((response) => response.json())
        .then(() => setRedirect(true))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="p-5">
      <div
        className="container-fluid card text-center p-3"
        id="card"
        style={{ width: "700px" }}
      >
        <h4 id="title" className="text-center p-1" style={{ color: "white" }}>
          Registrar comunidad
        </h4>
        <hr className="my-3"></hr>
        <form onChange={handleChange} onSubmit={handleClick}>
          <div className="mb-3 d-flex justify-content-center">
            <div className="px-3">
              <label className="form-label ">Dirección</label>
              <input
                type="text"
                className="form-control"
                name="address"
                id="address"
                placeholder="Dirección: calle y número"
              ></input>
              {err.address != "" ? <div id="valid">{err.address}</div> : null}
            </div>
            <div className="px-3">
              <label className="form-label">Número de viviendas</label>
              <input
                type="number"
                className="form-control"
                name="flats"
                id="Numviviendas"
                placeholder="Número de viviendas"
              ></input>
              {err.flats != "" ? <div id="valid">{err.flats}</div> : null}
            </div>
          </div>

          <div className="p-3">
            <button type="submit" className="btn btn-primary" id="boton">
              Registrar
            </button>
          </div>
        </form>
      </div>
      {redirect ? <Redirect to="/login"></Redirect> : null}
    </div>
  );
};

export default FormCommunity;
