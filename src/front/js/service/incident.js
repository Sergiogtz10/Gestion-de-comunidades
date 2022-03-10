export const getIncidents = async () => {
  return await fetch(
    `https://3001-sergiogtz10-gestiondecom-hx1yk9l3i6s.ws-eu34.gitpod.io/api/incident/common`,
    {
      method: "GET",
    }
  );
};
