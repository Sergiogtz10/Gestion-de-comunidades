import { URL, getToken } from "../Service/URL.js";

export const getExpenses = async () => {
  const API = URL + `/api/expenses/`;
  return await fetch(API, {
    method: "GET",
  });
};
