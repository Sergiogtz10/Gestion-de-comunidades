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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0NzA4OTU4NSwianRpIjoiY2RkNDFlNzItM2ExMy00OTE0LWJiMzQtMGU1Mjg4YzE1OWMzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MX0sIm5iZiI6MTY0NzA4OTU4NSwiZXhwIjoxNjQ3MDkwNDg1fQ.2eaxoc9n4WolHwHtUDmdH1AK0_IlUlIQmwDnIJkASrM",
    },
    body: JSON.stringify({
      description: body.description,
      severity: body.severity,
      zone: body.zone,
    }),
  });
};
