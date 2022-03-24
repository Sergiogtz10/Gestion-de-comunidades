import { URL, getToken } from "./URL.js";

export const getProviders_by_community_id = async (community_id) => {
  const API = URL + `/api/provider/` + community_id;
  const token = getToken();
  return await fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });
};

export const functionCreateProviders = async (body_parameters, community_id) => {
  const API = URL + `/api/provider/` + community_id;
  const token = getToken();
  return await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body_parameters),
  });
};
