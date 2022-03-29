import { URL, getToken } from "./URL";

export const getDataUsers = () => {
  const API = URL + "/api/user/";
  const token = getToken();
  return fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token} `,
    },
  });
};

export const putDataUsers = (body) => {
  const API = URL + "/api/user/modify";
  const token = getToken();
  return fetch(API, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token} `,
    },
    body: JSON.stringify(body),
  });
};


export const getCommunities_admin = async () => {
  const API = URL + "/api/rels/getAllCommunities";
  const token = getToken();
  return await fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
