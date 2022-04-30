import React from "react";
import "./Advantages.css";

const Advantages = () => {
  return (
    <div>
      <div>
        <h2 id="main-title" className="text-center">
          ¿Que te ayuda a gestionar la aplicación?
        </h2>
        <div id="div-text-intro" className="container">
          <p id="text-intro">
            Ha sido diseñada para que una gestoria o un admistrador designado
            por la comunidad, puedan manejar las distintas tareas que surgen
            como resultado de la convivencia entre vecinos de forma más fluida
          </p>
        </div>
      </div>

      <div className="card-group">
        <div id="card-advantages" className="card">
          <h2 id="title-Advantages" className="card-title">
            Reuniones
          </h2>
        </div>
        <div id="card-advantages1" className="card">
          <h2 id="title-Advantages" className="card-title">
            Incidencias
          </h2>
        </div>
        <div id="card-advantages2" className="card">
          <h2 id="title-Advantages" className="card-title">
            Proveedores
          </h2>
        </div>
        <div id="card-advantages3" className="card">
          <h2 id="title-Advantages" className="card-title">
            Facturas
          </h2>
        </div>
      </div>

      <h3 id="title-agile">AGILIDAD EN</h3>
      <div className="d-flex mb-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid p-4">
          <div
            id="card-explanation"
            className="col d-flex justify-content-center align-items-center"
          >
            <div>
              <div className="card-body">
                <h3 className="card-title">Organizar</h3>
                <p className="card-text">
                  El administrador podrá convocar reuniones de vecinos,
                  establecer horarios de limpieza de cocheras, revisiones del
                  ascensor, o cualquier otra actividad relevante para los mismos
                </p>
              </div>
            </div>
          </div>
          <div
            id="card-explanation"
            className="col d-flex justify-content-center align-items-center"
          >
            <div>
              <div className="card-body">
                <h3 className="card-title">Controlar</h3>
                <p className="card-text">
                  Los vecinos a través de la aplicación tendrán acceso a
                  cualquier incidencia que pueda estar perturbando el normal
                  desarrollo de la convivencia
                </p>
              </div>
            </div>
          </div>
          <div
            id="card-explanation"
            className="col d-flex justify-content-center align-items-center"
          >
            <div>
              <div className="card-body">
                <h3 className="card-title">Conocer</h3>
                <p className="card-text">
                  Cuales son los proveedores de servicios que estan contratados
                  por la comunidad para satisfacer las necesidades de la misma
                </p>
              </div>
            </div>
          </div>
          <div
            id="card-explanation"
            className="col d-flex justify-content-center align-items-center"
          >
            <div>
              <div className="card-body">
                <h3 className="card-title">Administrar</h3>
                <p className="card-text">
                  En cualquier organización es necesario administar los gastos
                  que tienen lugar para buscar la máxima eficiencia. Esta
                  aplicación te lo permite{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="rounded" className="col-md-9"></div>
      </div>
    </div>
  );
};
export default Advantages;
