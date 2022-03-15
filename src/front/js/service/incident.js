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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0NzM3MTEyNSwianRpIjoiYTY1YTAwYTAtOTEyYy00OTNjLWJkMTEtMDE4OTc0MGQ5NzcyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MX0sIm5iZiI6MTY0NzM3MTEyNSwiZXhwIjoxNjQ3MzcyMDI1fQ.zNKWyP3t_lbXaiDHJD5gRMBQRNwdpfLzHlvoB_OuWmE",
    },
    body: JSON.stringify({
      description: body.description,
      severity: body.severity,
      zone: body.zone,
      status: body.status,
    }),
  });
};
