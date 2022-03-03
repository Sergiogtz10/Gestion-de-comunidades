import React from "react";
import "./Landing.css"

const Landing = () =>{
    return(
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Bienvenido a tu aplicación de gestión de comunidades</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"></hr>
                
                    <div className="p-3">
                        <button type="submit" className="btn btn-primary" id="boton">Registrar comunidad</button>
                    </div>
                    <div className="p-3">
                        <button type="submit" className="btn btn-primary" id="boton">Log In</button>
                    </div>
                </div>
            </div>
    );
}

export default Landing;