import {
  createIncident,
  deleteIncidents,
  getIncidents,
  modifyIncidents,
} from "../Service/incident.js";
import { getUser } from "../Service/users.js";
import { getCommunity_by_user_id } from "../Service/rel.js";
import { getProviders_by_community_id } from "../Service/provider.js";
import { createBill, get_bill_by_id } from "../Service/bill.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      incidents: [],
      incident_copy: [],
      registerAdminUser: {},
      role: {},
      user_id: "",
      community: "",
      providers: [],
      bill: {},
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
        setStore({ ...store, incident_copy: [] });
        getIncidents()
          .then((res) => res.json())
          .then((data) => {
            data.map((incident) => {
              setStore({ ...store, incidents: [...store.incidents, incident] });
              setStore({
                ...store,
                incident_copy: [...store.incident_copy, incident],
              });
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
        const store = getStore();
        createIncident(body, community)
          .then((res) => res.json())
          .then((data) => {
            setStore({
              ...store,
              incidents: [...store.incidents, data],
            });
          })
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
      addBill: (body, community_id, incident_id) => {
        console.log(body, community_id, incident_id);
        createBill(body, community_id, incident_id)
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      },
      getBill: (bill_id) => {
        const store = getStore();
        get_bill_by_id(bill_id)
          .then((res) => res.json())
          .then((data) => {
            setStore({ ...store, bill: data });
          })
          .catch((err) => console.error(err));
      },

      setIncidents: (filteredList) => {
        const store = getStore();
        setStore({ ...store, incidents: filteredList });
      },
    },
  };
};

export default getState;
