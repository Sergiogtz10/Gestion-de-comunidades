import React from "react";
import "./LogIn.css"

const Login = () =>{
    return (
        <div>
            <h3 id="title"  className="text-center p-3">Log In</h3>
            <div className="container fluid card text-center justify-content-center p-4" id="card" style={{width: "400px"}}>
                <form> 
                    <div>
                        <label  className="form-label ">Email</label>
                        <input type="Email" className="form-control" id="Email"></input>
                    </div>
                    
                    <div className="py-3">
                        <label className="contraseña" className="form-label">Contraseña</label>
                        <input type="contraseña" className="form-control" id="contraseña"></input>
                    </div>

                    <div className="p-3">
                        <button type="submit" className="btn btn-primary" id="boton">Log In</button>
                    </div>
                          
                </form>
            </div>
        </div>
        
    );
}

export default Login;