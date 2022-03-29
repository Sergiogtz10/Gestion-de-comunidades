export const URL = process.env.BACKEND_URL;

export const getToken = () => {
  return localStorage.getItem("token");
};
