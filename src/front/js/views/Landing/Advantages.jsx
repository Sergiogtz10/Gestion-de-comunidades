import React from "react";
import "./Advantages.css"

const Advantages = () => {
    return (
        <div>
            <div>
                <h2 id="main-title" className="text-center">¿Que te ayuda a gestionar la aplicación?</h2>
                <div id="div-text-intro" className="container">
                    <p id="text-intro">Ha sido diseñada para que una gestoria o un admistrador designado por la comunidad, puedan manejar las distintas tareas que surgen como resultado de la convivencia entre vecinos de forma más fluida</p>
                </div>
            </div>

            <div className="card-group">
                <div id="card-advantages" className="card">
                    <h2 id="title-Advantages" class="card-title">Reuniones</h2>
                </div>
                <div id="card-advantages1" class="card">
                    <h2 id="title-Advantages" class="card-title">Incidencias</h2>
                </div>
                <div id="card-advantages2" className="card">
                     <h2 id="title-Advantages" className="card-title">Proveedores</h2>
                </div>
                <div id="card-advantages3" className="card">
                    <h2 id="title-Advantages"className="card-title">Facturas</h2>
                </div>
            </div>    
            
            <h3 id="title-agile">AGILIDAD EN</h3>
            <div className="d-flex mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid p-4">
                    <div id="card-explanation" className="col">
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">Organizar</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div id="card-explanation" className="col">
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">Controlar</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                             </div>
                        </div>
                    </div>
                    <div id="card-explanation" className="col">
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">Conocer</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div id="card-explanation" className="col">
                        <div>
                            <div class="card-body">
                                <h5 class="card-title">Administrar</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>        
                </div>
                <div id="rounded" className="col-md-9">
                </div>   
            </div>    
        </div>
    )
}
export default Advantages;