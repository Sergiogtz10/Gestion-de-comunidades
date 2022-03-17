import React, {useState} from "react";

const FormProviders = () =>{

    

    return (
        <div className="p-5">
            <div className="container fluid card text-center justify-content-center p-4" id="card" style={{width: "400px"}}>
                <h4 id="title"  className="text-center font-weight-bold">Registrar proveedor</h4>
                <hr className="my-3"></hr>
                <form> 
                    <div>
                        <label  className="form-label ">Servicio</label>
                        <input type="text" className="form-control shadow-sm"  placeholder="Servicio" name="service"></input>
                    </div>
                    
                    <div className="py-3">
                        <label  className="form-label">Proovedor</label>
                        <input type="text" className="form-control shadow-sm"  placeholder="Proveedor" name="provider"></input>
                    </div>     
                </form>
                <div className="p-3">
                        <button type="submit" className="btn btn-primary" id="boton">Registrar</button>
                </div>
            </div> 
           
        </div>
        
    );
}
export default FormProviders;