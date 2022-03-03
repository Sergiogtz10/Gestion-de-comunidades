import React, { useState } from "react";
import "./FormCommunity.css"

const FormCommunity = () =>{

    const[community, setCommunity]=useState({
        address:"",
        number_house:""
    });

    const[err, setErr]=useState({
        address:"",
        number_house:""  
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCommunity({ ...community, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();
       
    };
    
    console.log(community)
    
    return (
        <div>
            <h3 id="title" className="text-center p-3">Formulario de registro para la comunidad</h3>
            <div className="container fluid card text-center justify-content-center p-4" id="card" style={{width: "700px"}}>
                <form onChange={handleChange} onSubmit={handleClick}> 
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label  className="form-label ">Dirección</label>
                            <input type="text" className="form-control" name="address" id="address" ></input>
                        </div>
                        <div className="px-3">
                            <label className="Numviviendas" className="form-label">Número de viviendas</label>
                            <input type="number" className="form-control" name="number_house" id="Numviviendas"></input>
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