import { URL, getToken } from "../Service/URL.js";

export const getExpenses = async () => {
  const API = URL + `/api/expenses/`;
  return await fetch(API, {
    method: "GET",
  });
};

export const modifyExpenses = async (exp_id, body) => {
  const API = URL + `/api/expenses/modify/` + exp_id;
  const token = getToken();
  return await fetch(API, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      details: body.details,
      amount: body.amount,
      date: body.date,
    }),
  });
};

export const createExpense = async (body_parameters, community_id) => {
  const API = URL + `/api/expenses/create/${community_id}`;
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
