import { getIncidents } from "../service/incident.js";
import { modifyIncidents } from "../service/incident.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      incidents: [],
    },
    actions: {
      getIncidents: () => {
        const store = getStore();
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
