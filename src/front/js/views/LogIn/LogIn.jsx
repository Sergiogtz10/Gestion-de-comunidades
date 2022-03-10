import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { postLogin } from "../../Service/users";
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

    const[redirect, setRedirect]=useState(false)

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

        if(newerr.password == "" && newerr.password == "") {
            console.log("todo bien en el fetch login");
            postLogin(login)
            .then((response) => response.json())
            .then(()=>setRedirect(true))
            .catch((error) => console.log(error));
        }
    }
    return (
        <div className="p-5">
            <div className="container fluid card text-center justify-content-center p-4" id="card" style={{width: "400px"}}>
                <h4 id="title"  className="text-center font-weight-bold">Login</h4>
                <hr class="my-3"></hr>
                <form onSubmit={handleClick} onChange={handleChange}> 
                    <div>
                        <label  className="form-label ">Email</label>
                        <input type="email" className="form-control shadow-sm" id="Email" placeholder="Email" name="email"></input>
                        {err.email != "" ?(<div id="valid">{err.email}</div>) : null}
                    </div>
                    
                    <div className="py-3">
                        <label  className="form-label">Contraseña</label>
                        <input type="password" className="form-control shadow-sm" id="contraseña"  placeholder="Contraseña" name="password"></input>
                        {err.password != "" ?(<div id="valid">{err.password}</div>) : null}
                    </div>

                    <div className="p-3">
                        <button type="submit" className="btn btn-primary" id="boton">Entrar</button>
                    </div>
                          
                </form>
            </div> 
            {redirect ? <Redirect to= "/"></Redirect>: null}
        </div>
        
    );
}
export default Login;