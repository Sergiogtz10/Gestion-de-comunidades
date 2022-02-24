import React from "react";
import "./FormCommunity.css"

const FormCommunity = () =>{
    return (
        <div>
            <h3 className="text-center text-primary p-3">Formulario de registro para la communidad</h3>
            <div className="container fluid card justify-content-center p-4" id="card" style={{width: "700px"}}>
                <form> 
                    <div className="mb-3 d-flex">
                        <div className="px-3">
                            <label  className="form-label ">Dirección</label>
                            <input type="Dirección" className="form-control" id="Dirección"></input>
                        </div>
                        <div className="px-3">
                            <label className="Numviviendas" className="form-label">Número de viviendas</label>
                            <input type="Numviviendass" className="form-control" id="Numviviendas"></input>
                        </div>
                    </div>
    
                    <button type="submit" className="btn btn-primary" id="boton">Registrarse</button>
                          
                </form>
            </div>
        </div>
        
    );
}

export default FormCommunity;