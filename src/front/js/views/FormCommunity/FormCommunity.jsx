import React, { useState } from "react";
import { postRegisterCommunity } from "../../Service/community";
import "./FormCommunity.css"

const initialStateErr = {
    address:"",
    number_house:""  
}

const FormCommunity = () =>{

    const[community, setCommunity]=useState({
        address:"",
        number_house:""
    });

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
        if(community.number_house == 0){
            newerr ={...newerr, number_house: "Introduzca el número de viviendas"}
        }
        setErr(newerr);

        if(newerr.address == "" && newerr.number_house == ""){
            console.log("todo bien en el fetch community");
            let newCommunity = { ...owner };
            postRegisterCommunity(newCommunity)
                .then((response) => console.log(response))
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
                            <input type="number" className="form-control" name="number_house" id="Numviviendas"></input>
                            {err.number_house != "" ?(<div id="validsize" className="col-12 text-danger">{err.number_house}</div>) : null}
                        </div>
                    </div>
    
                    <div className="p-3">
                        <button type="submit" className="btn btn-primary" id="boton">Registrar comunidad</button>
                    </div>
                          
                </form>
            </div>
        </div>
        
    );
}

export default FormCommunity;