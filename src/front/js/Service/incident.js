import { URL, getToken } from "../Service/URL.js";

export const getIncidents = async () => {
  const API = URL + `/api/incident/common`;
  return await fetch(API, {
    method: "GET",
  });
};

export const getOwnerIncidents = async () => {
  const API = URL + `/api/incident/particular`;
  const token = getToken();
  return await fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
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

export const deleteIncidents = async (incident_id) => {
  const API = URL + `/api/incident/` + incident_id;
  const token = getToken();
  return await fetch(API, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createIncident = async (body_parameters, community_id) => {
  const API = URL + `/api/incident/common/` + community_id;
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

export const createOwnerIncident = async (body_parameters, community_id) => {
  const API = URL + `/api/incident/owner/` + community_id;
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
