import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext.js";



const CardProviders = () =>{

const { store, actions } = useContext(Context); 

 return (
     <div>
         <div className="card mb-3 mt-4" id="CardProvider">
            <div className="card-header"></div>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p></p>
            </div>
        </div>
     </div>
 )
}

export default CardProviders;