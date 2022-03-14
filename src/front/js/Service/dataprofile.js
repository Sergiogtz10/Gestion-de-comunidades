import { URL } from "./URL";

export const getDataUsers = () =>{
const API = URL + "/api/user/";
return fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

}