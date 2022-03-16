import { getIncidents, modifyIncidents } from "../Service/incident.js";
import { getUser } from "../Service/incident.js";
import { getCommunity_by_user_id } from "../Service/rel.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      incidents: [],
      registerAdminUser: {},
      role: {},
      community: "",
    },
    actions: {
      getToken: () => {
        const store = getStore();
        if (store.token) {
          return store.token;
        } else {
          return localStorage.getItem("token");
        }
      },
      setRegisteradmin: (user) => {
        const store = getStore();
        setStore({ ...store, registerAdminUser: user });
      },
      getUser: () => {
        const store = getStore();
        getUser()
          .then((res) => res.json())
          .then((data) => {
            setStore({ ...store, role: data.role });
          })
          .catch((err) => console.error(err));
      },

      getCommunity: () => {
        const store = getStore();
        getCommunity_by_user_id()
          .then((res) => res.json())
          .then((data) => setStore({ ...store, community: data }))
          .catch((err) => console.error(err));
      },
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
