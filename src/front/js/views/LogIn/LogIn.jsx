import React, { useState } from "react";
import "./LogIn.css"

const initialStateErr ={
    email: "",
    password: "",
}

const Login = () =>{

    const[ login, setLogin] = useState({
    email: "",
    password: "",
    })

    const[ err, setErr]= useState({ initialStateErr})

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value });
    }

    const handleClick = (e) =>{
        e.preventDefault()  

        let newerr = { ...initialStateErr };
        
        if (login.email.length == 0) {
          newerr = { ...newerr, email: "Introduzca su email" };
        }
        if (login.password.length == 0) {
          newerr = { ...newerr, password: "Introduzca su contraseña" };
        }  
        setErr(newerr);

        if(newerr.password == "" && newerr.password == "") {}
    }
    return (
        <div>
            <h3 id="title"  className="text-center p-3">Log In</h3>
            <div className="container fluid card text-center justify-content-center p-4" id="card" style={{width: "400px"}}>
                <form onSubmit={handleClick} onChange={handleChange}> 
                    <div>
                        <label  className="form-label ">Email</label>
                        <input type="email" className="form-control" id="Email" name="email"></input>
                        {err.email != "" ?(<div id="validsize" className="col-12 text-danger">{err.email}</div>) : null}
                    </div>
                    
                    <div className="py-3">
                        <label  className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="contraseña" name="password"></input>
                        {err.password != "" ?(<div id="validsize" className="col-12 text-danger">{err.password}</div>) : null}
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