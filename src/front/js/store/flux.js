import {
  getUsers,
  postRegisterAdmin,
  postLogin,
  postRegisterOwner,
  postRegisterUser,
} from "../Service/URL.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      
      // Users
      login: (email, password) => {
        fetch(postLogin(), {
          method: "POST",
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password })
            .then((response) => response.json())
            .then((data) => {
              if (data.new_token === undefined) {
                return console.log("Ha ocurrido un error");
              } else {
                return console.log("Ha accedido correctamente");
              };
              localStorage.setItem("jwt-token", data.new_token);
            })
            .catch((error) =>
            console.log("Error loading login from backend", error)
          )
        });
      },
    },
  };
};

export default getState;
