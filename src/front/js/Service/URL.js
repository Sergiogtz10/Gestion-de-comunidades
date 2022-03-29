export const URL = process.env.BASENAME;

export const getToken = () => {
  return localStorage.getItem("token");
};
