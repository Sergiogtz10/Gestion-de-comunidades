import React, { useState } from "react";
import "./FormOwner.css"

const FormOwner = () =>{
    const [owner, setOwner] = useState({
        name: "",
        last_name: "",
        flat:"",
        email: "",
        phone: "",
        password: "",
        repeat_password: "",
      });
    
      const [err, setErr] = useState({
        name: "",
        password: "",
        repeat_password: "",
      });
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setOwner({ ...owner, [name]: value });
      };
      console.log(owner);
    
      const handleClick = (e) => {
        e.preventDefault();
        if (owner.name.length < 2) {
          setErr({ ...err, name: "Error en el nombre" });
        }
        if (owner.password.length < 6) {
          setErr({ ...err, password: "Contraseña con al menos 6 caracteres" });
        }
        if (owner.password != owner.repeat_password) {
          setErr({ ...err, repeat_password: "Las contraseñas no coinciden" });
        }
      };
return(
    <div>
         <div>
         <h3 id="title" className="text-center p-3">Formulario de registro para el propietario</h3>
            <div className="container fluid card text-center justify-content-center p-4" id="card" style={{width: "700px"}}>
                <form onChange={handleChange} onSubmit={handleClick}> 
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label  className="form-label ">Nombre</label>
                            <input type="text" className="form-control" name="name" id="Nombre"></input>
                        </div>
                        <div className="px-3">
                            <label className="Apellidos" className="form-label">Apellidos</label>
                            <input type="text" className="form-control" name="last_name" id="Apellidos"></input>
                        </div>
                        <div className="px-3">
                            <label className="Piso" className="form-label">Piso</label>
                            <input type="text" className="form-control" name="flat" id="Piso"></input>
                        </div>
                        
                    </div>
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label className="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" id="Email"></input>
                        </div>
                        <div>
                            <label className="Telefono" className="form-label">Telefono</label>
                            <input type="number" className="form-control" name="phone" id="Telefono"></input>
                        </div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label className="Contraseña" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="password" id="Contraseña"></input>
                        </div>
                        <div>
                            <label className="RepetirContraseña" className="form-label">Repetir contraseña</label>
                            <input type="password" className="form-control" name="repeat_password"id="RepetirContraseña"></input>
                        </div>
                    </div>
                    <div className="p-3">
                        <button type="submit" className="btn btn-primary" id="boton">Registrarse</button>
                    </div>
                    
                          
                </form>
            </div>
        </div>
    </div>
)
}
export default FormOwner;