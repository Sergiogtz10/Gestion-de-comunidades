import { URL, getToken } from "./URL.js";

export const getCommunity_by_user_id = async () => {
  const API = URL + `/api/rels/`;
  const token = getToken();
  return await fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });
};
