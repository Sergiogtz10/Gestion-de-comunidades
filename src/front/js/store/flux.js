import { getIncidents } from "../service/incident.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      incidents: [],
    },
    actions: {
      getIncidents: () => {
        const store = getStore();
        store.incidents = [];
        getIncidents()
          .then((res) => res.json())
          .then((data) => {
            data.map((incident) => {
              setStore({ ...store, incidents: [...store.incidents, incident] });
            });
          })
          .catch((err) => console.error(err));
      },
      deleteIncident: () => {
        console.log("borrando");
      },
    },
  };
};

export default getState;
