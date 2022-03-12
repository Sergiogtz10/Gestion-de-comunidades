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

      modifyIncidents: (id, newIncident) => {
        const store = getStore();
        modifyIncidents(id, newIncident)
          .then((res) => res.json())
          .then((data) => {
            const resetIncidents = store.incidents.filter(
              (incident) => incident.id != id
            );
            setStore({ ...store, incidents: resetIncidents });
            setStore({ ...store, incidents: [...store.incidents, data] });
          });
      },
      deleteIncident: () => {
        console.log("borrando");
      },
    },
  };
};

export default getState;
