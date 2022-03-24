import React from "react";
import "./Providers.css"
import CardProviders from "./CardProviders.jsx";
import { Link } from "react-router-dom";

const Providers = () =>{
 return (
     <div className="container" id="divProvider">
         <div className="container-fluid mt-5 content row">
            <h1 className="col-sm-12" id="titleproviders">Proveedores de la comunidad</h1>
            <Link to="/form/provider">
            <button type="submit" className="btn col-sm-2" id="boton">Crear proveedor</button>
            </Link>
            <CardProviders />
         </div>
         

     </div>
 )
}

export default Providers;