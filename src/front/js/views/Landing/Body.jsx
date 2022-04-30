import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";

const Body = () =>{
    return(
        <div>
            <div>
            <div id="backgroundbody" className="container-fluid row">
                <div id="divtitle" className="container align-items-center text-center" style={{width: "400px"}}>
                        <div className="background-white">
                            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Indie+Flower&family=Montserrat:wght@300&family=Pacifico&family=Righteous&display=swap" rel="stylesheet"></link>
                            <h2 id="titlebody" className="header-text-one mb-3">MasterKey es la aplicación que hará la relación con tu comunidad de vecinos más agradable y sencilla</h2>
                        </div>
                </div>
                <div id="login">
                    <div className="d-flex flex-column text-center row">

                        <h5 id="titlelogin">INICIA SESIÓN O REGÍSTRATE</h5>
                        <hr className="my-1"></hr>
                        <Link to="/Login">
                            <button type="button" className="btn btn-success text-center mt-4 col-md-10" id="boton">Iniciar sesión</button>
                        </Link>
                        <Link to="/form/admin">
                            <button type="button" className="btn btn-success mt-4 col-md-10" id="boton">Registrarse</button>
                        </Link>
                        <p id="textregister" className="mt-3">SI TODAVÍA NO TIENES UNA CUENTA DE USUARIO DE MASTERKEY UTILIZA ESTA OPCIÓN PARA ACCEDER AL FORMULARIO DE REGISTRO. TE SOLICITAREMOS LA INFORMACIÓN IMPRESCINDIBLE PARA UTILIZAR LA APLICACIÓN</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Body;