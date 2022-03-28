import React from "react";
import { useContext, useEffect} from "react";
import { Context } from "../../store/appContext.js";
import "./Providers.css"
import CardProviders from "./CardProviders.jsx";
import { Link } from "react-router-dom";

const Providers = () =>{
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getUser();
      }, []);

 return (
     <div className="container" id="divProvider">
         <div className="container-fluid mt-5 content row">
            <h1 className="col-sm-12" id="titleproviders">Proveedores de la comunidad</h1>
            {store.role.role_id == 1 ? (
            <Link className="btn btn-secondary col-2 mx-4 add" to="/form/provider"> Añadir proveedor </Link>) : null}
            <CardProviders />
         </div>
         

     </div>
 )
}

export default Providers;