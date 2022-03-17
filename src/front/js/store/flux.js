import {
  createIncident,
  deleteIncidents,
  getIncidents,
  modifyIncidents,
} from "../Service/incident.js";
import { getUser } from "../Service/users.js";
import { getCommunity_by_user_id } from "../Service/rel.js";
import { getProviders_by_community_id } from "../Service/provider.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      incidents: [],
      registerAdminUser: {},
      role: {},
      user_id: "",
      community: "",
      providers: [],
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
            setStore({ ...store, user_id: data.id });
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
        setStore({ ...store, incidents: [] });
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
            setStore({ ...store, incidents: [] });
            getIncidents()
              .then((res) => res.json())
              .then((data) => {
                data.map((incident) => {
                  setStore({
                    ...store,
                    incidents: [...store.incidents, incident],
                  });
                });
              })
              .catch((err) => console.error(err));
          });
      },
      deleteIncident: (incident_id) => {
        const store = getStore();
        deleteIncidents(incident_id)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ ...store, incidents: [] });
            getIncidents()
              .then((res) => res.json())
              .then((data) => {
                data.map((incident) => {
                  setStore({
                    ...store,
                    incidents: [...store.incidents, incident],
                  });
                });
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      },
      createNewIncident: (body, community) => {
        createIncident(body, community)
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      },
      getProviders: (community_id) => {
        const store = getStore();
        console.log(store.community);
        getProviders_by_community_id(community_id)
          .then((res) => res.json())
          .then((data) => setStore({ ...store, providers: data }))
          .catch((err) => console.error(err));
      },
      addBill: () => {
        console.log("añadiendo factura");
      },
    },
  };
};

export default getState;
