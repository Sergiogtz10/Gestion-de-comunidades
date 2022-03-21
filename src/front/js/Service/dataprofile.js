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

export const deleteUserData = (user_id) => {
  const API = URL + "/api/user/delete/" + user_id;
  const token = getToken();
  return fetch(API, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
