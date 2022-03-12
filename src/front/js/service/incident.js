import { URL } from "./URL.js";

export const getIncidents = async () => {
  const API = URL + `/api/incident/common`;
  return await fetch(API, {
    method: "GET",
  });
};

export const modifyIncidents = async (incident_id, body) => {
  const API = URL + `/api/incident/` + incident_id;
  return await fetch(API, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",

      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0NzA4NTE5OCwianRpIjoiYzg1ZDJiMjMtMjZmNC00N2UwLWFmM2EtNmY5MWU2NmExZjYzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MX0sIm5iZiI6MTY0NzA4NTE5OCwiZXhwIjoxNjQ3MDg2MDk4fQ.885uSpa9fzZCmrptoj1yKqmm0cv1ujHhXi_LHvZLLqE",
    },
    body: JSON.stringify({
      description: body.description,
      severity: body.severity,
      zone: body.zone,
    }),
  });
};
