import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { postRegisterCommunity } from "../../Service/community";
import "./FormCommunity.css"

const initialStateErr = {
    address:"",
    flats:""  
}

const FormCommunity = () =>{

    const[community, setCommunity]=useState({
        address:"",
        flats:""
    });
    const[redirect, setRedirect]=useState(false)

    const[err, setErr]=useState(initialStateErr);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCommunity({ ...community, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        let newerr = { ...initialStateErr };

        if(community.address.length == 0){
            newerr ={ ...newerr, address: "Introduzca su dirección"}
        }
        if(community.flats == 0){
            newerr ={...newerr, flats: "Introduzca el número de viviendas"}
        }
        setErr(newerr);

        if(newerr.address == "" && newerr.flats == ""){
            console.log("todo bien en el fetch community");
            let newCommunity = { ...community };
            postRegisterCommunity(newCommunity)
            .then((response) => response.json())
            .then(()=>setRedirect(true))
            .catch((error) => console.log(error));   
        }
    };
    
    return (
        <div>
            <h3 id="title" className="text-center p-3">Formulario de registro para la comunidad</h3>
            <div className="container fluid card text-center justify-content-center p-4" id="card" style={{width: "700px"}}>
                <form onChange={handleChange} onSubmit={handleClick}> 
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label  className="form-label ">Dirección</label>
                            <input type="text" className="form-control" name="address" id="address" ></input>
                            {err.address != "" ?(<div id="validsize" className="col-12 text-danger">{err.address}</div>) : null}
                        </div>
                        <div className="px-3">
                            <label  className="form-label">Número de viviendas</label>
                            <input type="number" className="form-control" name="flats" id="Numviviendas"></input>
                            {err.flats != "" ?(<div id="validsize" className="col-12 text-danger">{err.flats}</div>) : null}
                        </div>
                    </div>
    
                    <div className="p-3">
                        <button type="submit" className="btn btn-primary" id="boton">Registrar comunidad</button>
                    </div>
                          
                </form>
            </div>
            {redirect ? <Redirect to= "/login"></Redirect>: null}
        </div>
        
    );
}

export default FormCommunity;