import { URL } from "./URL.js";

export const postRegisterAdmin = (user) => {
  const API = URL + "/api/user/register/admin";
  return fetch(API, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const postRegisterOwner = (user,community_id) => {
  const API = URL + "/api/user/register/owner/" + community_id;
  return (fetch(API,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }))
};

export const postLogin = (login) => {
  const API = URL + "/api/user/login";
  return fetch(API,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    }
  );
};
