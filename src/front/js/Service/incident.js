import { URL, getToken } from "../Service/URL.js";

export const getIncidents = async () => {
  const API = URL + `/api/incident/common`;
  return await fetch(API, {
    method: "GET",
  });
};

export const modifyIncidents = async (incident_id, body) => {
  const API = URL + `/api/incident/` + incident_id;
  const token = getToken();
  return await fetch(API, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      description: body.description,
      severity: body.severity,
      zone: body.zone,
      status: body.status,
    }),
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
