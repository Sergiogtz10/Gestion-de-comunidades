import React, { useState } from "react";
import "./FormOwner.css"

import { postRegisterOwner } from "../../Service/users";

const initialStateErr = {
    name: "",
    last_name: "",
    flat:"",
    email: "",
    phone: "",
    password: "",
    repeat_password: "",
}

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
    
    const [err, setErr] = useState(initialStateErr);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setOwner({ ...owner, [name]: value });
    };
      
    
    const handleClick = (e) => {
        
        e.preventDefault();

        let newerr = { ...initialStateErr };
        
        if (owner.name.length == 0) {
          newerr = { ...newerr, name: "Introduzca su nombre" };
        }
        if (owner.last_name.length == 0) {
          newerr = { ...newerr, last_name: "Introduzca sus apellidos" };
        }
        if(owner.flat.length == 0){
            newerr = { ...newerr, flat: "Introduzca su piso"}
        }
        if (owner.email.length == 0) {
          newerr = { ...newerr, email: "Introduzca su email" };
        }
        if (owner.phone.length !== 9) {
          newerr = { ...newerr, phone: "Introduzca su móvil" };
        }
        if (owner.password.length < 6) {
          newerr = { ...newerr, password: "Introduzca 6 caracteres" };
        }
        if (owner.password !== owner.repeat_password) {
          newerr = { ...newerr, repeat_password: "Las contraseñas no coinciden" };
        }  
        setErr(newerr);

        if(newerr.name == "" && newerr.last_name == "" && newerr.flat == "" && newerr.email == "" && newerr.phone == "" && newerr.password == "" && newerr.repeat_password == ""){
            console.log("todo bien en el fetch owner");
            let newUserOwner = { ...owner };
            delete newUserOwner.repeat_password;
            postRegisterOwner(newUserOwner)
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
        }
    };
    return(

    <div>
         <div>
         <h3 id="title" className="text-center p-2">Registrase como propietario</h3>
            <div className="container fluid card text-center justify-content-center p-4" id="card" style={{width: "700px"}}>
                <form onChange={handleChange} onSubmit={handleClick}> 
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label  className="form-label text-center ">Nombre</label>
                            <input type="text" className="form-control shadow-sm" name="name" id="Nombre"></input>
                            {err.name != "" ?(<div id="validsize" className="col-12 text-danger">{err.name}</div>) : null}
                        </div>
                        <div className="px-3">
                            <label  className="form-label">Apellidos</label>
                            <input type="text" className="form-control shadow-sm" name="last_name" id="Apellidos"></input>
                            {err.last_name != "" ?(<div id="validsize" className="col-12 text-danger">{err.last_name}</div>) : null}
                        </div>
                        <div className="px-3">
                            <label  className="form-label">Piso</label>
                            <input type="text" className="form-control shadow-sm" name="flat" id="Piso"></input>
                            {err.flat != "" ?(<div id="validsize" className="col-12 text-danger">{err.flat}</div>) : null}
                        </div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label  className="form-label">Email</label>
                            <input type="email" className="form-control shadow-sm" name="email" id="Email"></input>
                            {err.email != "" ?(<div id="validsize" className="col-12 text-danger">{err.email}</div>) : null}
                        </div>
                        <div>
                            <label  className="form-label">Telefono</label>
                            <input type="number" className="form-control shadow-sm" name="phone" id="Telefono"></input>
                            {err.phone != "" ?(<div id="validsize" className="col-12 text-danger">{err.phone}</div>) : null}
                        </div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label  className="form-label">Contraseña</label>
                            <input type="password" className="form-control shadow-sm" name="password" id="Contraseña"></input>
                            {err.password != "" ?(<div id="validsize" className="col-12 text-danger">{err.password}</div>) : null}
                        </div>
                        <div>
                            <label  className="form-label">Repetir contraseña</label>
                            <input type="password" className="form-control shadow-sm" name="repeat_password"id="RepetirContraseña"></input>
                            {err.repeat_password != "" ?(<div id="validsize" className="col-12 text-danger">{err.repeat_password}</div>) : null}
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