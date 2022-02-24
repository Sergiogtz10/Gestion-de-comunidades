import React from "react";
import "./FormOwner.css"

const FormOwner = () =>{
return(
    <div>
         <div>
         <h3 className="text-center text-primary p-3">Formulario de registro para el propietario</h3>
            <div className="container fluid card justify-content-center p-4" id="card" style={{width: "700px"}}>
                <form> 
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label  className="form-label ">Nombre</label>
                            <input type="Nombre" className="form-control" id="Nombre"></input>
                        </div>
                        <div className="px-3">
                            <label className="Apellidos" className="form-label">Apellidos</label>
                            <input type="Apellidos" className="form-control" id="Apellidos"></input>
                        </div>
                        <div className="px-3">
                            <label className="Piso" className="form-label">Piso</label>
                            <input type="Piso" className="form-control" id="Piso"></input>
                        </div>
                        
                    </div>
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label className="Email" className="form-label">Email</label>
                            <input type="Email" className="form-control" id="Email"></input>
                        </div>
                        <div>
                            <label className="Telefono" className="form-label">Telefono</label>
                            <input type="Telefono" className="form-control" id="Telefono"></input>
                        </div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label className="Contraseña" className="form-label">Contraseña</label>
                            <input type="Contraseña" className="form-control" id="Contraseña"></input>
                        </div>
                        <div>
                            <label className="RepetirContraseña" className="form-label">Repetir contraseña</label>
                            <input type="RepetirContraseña" className="form-control" id="RepetirContraseña"></input>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" id="boton">Registrarse</button>
                          
                </form>
            </div>
        </div>
    </div>
)
}
export default FormOwner;