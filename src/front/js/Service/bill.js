import { URL, getToken } from "../Service/URL.js";

export const createBill = async (
  body_parameters,
  community_id,
  incident_id
) => {
  const API = URL + `/api/bill/${community_id}/${incident_id}`;
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

export const get_bill_by_id = async (bill_id) => {
  const API = URL + `/api/bill/factura/${bill_id}`;
  const token = getToken();
  return await fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getBills = async () => {
  const API = URL + `/api/bill/`;
  return await fetch(API, {
    method: "GET",
  });
};
