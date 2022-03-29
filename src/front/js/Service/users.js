import { URL, getToken } from "./URL.js";

export const postRegisterAdmin = (user) => {
  const API = URL + "/api/user/register/admin";
  return fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const postRegisterOwner = (user, community_id) => {
  const API = URL + "/api/user/register/owner/" + community_id;
  return fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const postLogin = (login) => {
  const API = URL + "/api/user/login";
  return fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  });
};

export const getUser = async () => {
  const API = URL + `/api/user/`;
  const token = getToken();
  return await fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });
};
