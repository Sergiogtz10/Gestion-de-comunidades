import React from "react";
import "./Landing.css"
import { Link } from "react-router-dom";

const Landing = () =>{
    return(
        
        <div id="back" className="container-fluid">
            <div className="container py-5">
                <div className="d-flex flex-column flex-lg-row align-items-center mx-5 ">
                    <div className="col-md-8 ps-3 ps-lg-5 p-5">
                        <h1>Master Key</h1>
                        <p className="text-muted fs-5">Master Key es la aplicación que hará la relación con tu comunidad de vecinos más sencilla y agradable</p>
                        <div className="d-flex flex-column col-md-5 gap-4 justify-content-center">
                        <Link to="/form/admin">
                            <button type="button" className="btn btn-success">Registrarse como administrador</button>
                        </Link>
                        <Link to="/Login">
                        <button   type="button" className="btn btn-success">Log In</button>
                        </Link>
                        </div>
                    </div>
                    <img src="https://perezparras.com/wp-content/uploads/2018/09/Neighbours-in-building-434KB-790x790.png" alt="" className="rounded-circle img-fluid col-md-3  ms-lg-2"></img>
                </div>
            </div>
        </div>
    );
}

export default Landing;

