import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext.js";
import { community_id } from "../Profile.jsx"


const CardProviders = () =>{

const { store, actions } = useContext(Context); 
console.log(community_id)
 return (
     <div>
         {store.providers.map((provider, index) => {
                  return (
                    <div className="card mb-3 mt-4" id="CardProvider">
                        <div key={index} className="card-header"></div>
                        <div className="card-body">
                            <h5 key={index} className="card-title"></h5>
                            <div key={index}></div>
                        </div>
                    </div>
            );})}
     </div>
 )
}

export default CardProviders;