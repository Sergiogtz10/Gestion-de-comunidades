import { URL, getToken } from "./URL"

export const getDataUsers = () =>{

  const API = URL + "/api/user/";
  const token = getToken();
  return fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    
    Authorization: `Bearer ${token} `
    },
  });

}

export const putDataUsers = () =>{
  const API = URL + "/api/user/modify";
  const token = getToken();
  return fetch(API, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    
    Authorization: `Bearer ${token} `
    },
    
  });
  
}