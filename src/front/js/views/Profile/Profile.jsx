import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getDataUsers } from "../../Service/dataprofile.js";
import "./Profile.css";

const Profile = () => {
  
  const[ dataUser, setDataUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  
  });
  
    const getdata = async () => {
    try{
      const response = await getDataUsers();
      const data =  await response.json();
      console.log(data);
      let newUser = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone_number: data.phone_number, 
        password: data.password,
         
      }
      setDataUser(newUser);
      console.log(newUser)
    }catch(error){
      console.log(error)
    }

  }
  useEffect(()=>{
    getdata()
  }, [])

  return (
    <div>
      <h3 id="title" className="container mt-5" style={{width: "500px"}}>{dataUser.first_name + " "+ dataUser.last_name}</h3>
      <div id="card" className="container card p-4" style={{width: "500px"}} >
      <h4 id="titlecardprofile" className="mb-4 text-center">Datos personales</h4>
        <div>
          <form className="text-center">
              <div className="mb-3">
                <input type="text" defaultValue={dataUser.first_name}  id="inputprofile"></input>
              </div>
              <div className="mb-3">
                <input type="text" defaultValue={dataUser.last_name}  id="inputprofile"></input>
              </div>
              <div className="mb-3">
                <input type="text" defaultValue={dataUser.email}  id="inputprofile"></input>
              </div>
              <div className="mb-3">
                <input type="text" defaultValue={dataUser.phone_number}  id="inputprofile"></input>
              </div>
              <div className="mb-3">
                <input type="text" placeholder="Contraseña" defaultValue={dataUser.password}  id="inputprofile"></input>
              </div>
              <div className="mb-3">
                <input type="text" placeholder="Repetir contraseña" id="inputprofile"></input>
              </div>
              <div className="p-1">
                <button type="submit" className="btn btn-primary" id="boton">
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="p-4">
          <div id="card" className="container text-center card p-4" style={{width: "500px"}}>
              <h4 id="titlecardprofile" className=" text-center mb-4">Comunidades</h4>
             
              <div className="d-flex flex-column col-md-5 gap-3 p-3">
                <Link to="/form/community">
                  <button type="submit" className="btn btn-primary" id="boton">
                  Añadir comunidad
                  </button>
                </Link>
                <button type="submit" className="btn btn-primary" id="boton">
                Añadir propietario
                </button>
                <button type="submit" className="btn btn-primary" id="boton">
                Actualizar
                </button>
              </div>
          </div>
        </div>
    </div>
  );
};
export default Profile;
