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
      <h3 className="container fluid">{dataUser.first_name}</h3>
      <div id="card" className="container fluid card p-4" style={{width: "700px"}} >
      <h4 id="titlecardprofile">Datos personales</h4>
        <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{dataUser.first_name}</li>
              <li className="list-group-item">{dataUser.last_name}</li>
              <li className="list-group-item">{dataUser.email}</li>
              <li className="list-group-item">{dataUser.phone_number}</li>
            </ul>
            <div className="p-1">
              <button type="submit" className="btn btn-primary" id="boton">
                Actualizar
              </button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div id="card" className="container fluid card p-4" style={{width: "700px"}}>
              <h4 id="titlecardprofile">Comunidades</h4>
             
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
