import {
  createIncident,
  createOwnerIncident,
  deleteIncidents,
  getIncidents,
  getOwnerIncidents,
  getAllParticularIncidents,
  modifyIncidents,
} from "../Service/incident.js";
import { getUser } from "../Service/users.js";
import { getCommunity_by_user_id } from "../Service/rel.js";
import { getProviders_by_community_id } from "../Service/provider.js";
import {
  createBill,
  get_bill_by_id,
  getBills,
  modifyBills,
} from "../Service/bill.js";
import { getExpenses, modifyExpenses } from "../Service/expense.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      incidents: [],
      incident_copy: [],
      owner_incidents: [],
      owner_incident_copy: [],
      all_particular_incidents: [],
      registerAdminUser: {},
      role: {},
      user_id: "",
      community: "",
      providers: [],
      bill: {},
      bills: [],
      expenses: [],
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
      getAllIncidents: () => {
        const store = getStore();
        setStore({ ...store, all_particular_incidents: [] });
        getAllParticularIncidents()
          .then((res) => res.json())
          .then((data) => {
            data.map((incident) => {
              setStore({
                ...store,
                all_particular_incidents: [
                  ...store.all_particular_incidents,
                  incident,
                ],
              });
            });
          })
          .catch((err) => console.error(err));
      },
      getOwnerIncidents: () => {
        const store = getStore();
        setStore({ ...store, owner_incidents: [] });
        setStore({ ...store, owner_incident_copy: [] });

        getOwnerIncidents()
          .then((res) => res.json())
          .then((data) => {
            data.map((incident) => {
              setStore({
                ...store,
                owner_incidents: [...store.owner_incidents, incident],
              });
              setStore({
                ...store,
                owner_incident_copy: [...store.owner_incident_copy, incident],
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
      modifyParticularIncidents: (id, newIncident) => {
        const store = getStore();
        modifyIncidents(id, newIncident)
          .then((res) => res.json())
          .then((data) => {
            setStore({ ...store, owner_incidents: [] });
            setStore({ ...store, all_particular_incidents: [] });

            getOwnerIncidents()
              .then((res) => res.json())
              .then((data) => {
                data.map((incident) => {
                  setStore({
                    ...store,
                    owner_incidents: [...store.owner_incidents, incident],
                  });
                });
              })
              .catch((err) => console.error(err));

            getAllParticularIncidents()
              .then((res) => res.json())
              .then((data) => {
                data.map((incident) => {
                  setStore({
                    ...store,
                    all_particular_incidents: [
                      ...store.all_particular_incidents,
                      incident,
                    ],
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
      deleteOwnerIncident: (incident_id) => {
        const store = getStore();
        deleteIncidents(incident_id)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ ...store, owner_incidents: [] });
            setStore({ ...store, all_particular_incidents: [] });
            getOwnerIncidents()
              .then((res) => res.json())
              .then((data) => {
                data.map((incident) => {
                  setStore({
                    ...store,
                    owner_incidents: [...store.owner_incidents, incident],
                  });
                  setStore({
                    ...store,
                    all_particular_incidents: [
                      ...store.all_particular_incidents,
                      incident,
                    ],
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
      createNewParticularIncident: (body, community) => {
        const store = getStore();
        createOwnerIncident(body, community)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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
      setOwnerIncidents: (filteredList) => {
        const store = getStore();
        setStore({ ...store, owner_incidents: filteredList });
      },

      getExpenses: () => {
        const store = getStore();
        setStore({ ...store, expenses: [] });
        getExpenses()
          .then((res) => res.json())
          .then((data) => {
            data.map((expense) => {
              setStore({ ...store, expenses: [...store.expenses, expense] });
            });
          })
          .catch((err) => console.error(err));
      },

      getBills: () => {
        const store = getStore();
        setStore({ ...store, bills: [] });
        getBills()
          .then((res) => res.json())
          .then((data) => {
            data.map((bill) => {
              setStore({ ...store, bills: [...store.bills, bill] });
            });
          })
          .catch((err) => console.error(err));
      },

      modifyExpenses: (id, newExpense) => {
        const store = getStore();
        modifyExpenses(id, newExpense)
          .then((res) => res.json())
          .then((data) => {
            setStore({ ...store, expenses: [] });
            setStore({ ...store, bills: [] });
            getExpenses()
              .then((res) => res.json())
              .then((data) => {
                data.map((expense) => {
                  setStore({
                    ...store,
                    expenses: [...store.expenses, expense],
                  });
                });
              })
              .catch((err) => console.error(err));

            getBills()
              .then((res) => res.json())
              .then((data) => {
                data.map((bill) => {
                  setStore({ ...store, bills: [...store.bills, bill] });
                });
              })
              .catch((err) => console.error(err));
          });
      },

      modifyBills: (id, newExpense) => {
        const store = getStore();
        modifyBills(id, newExpense)
          .then((res) => res.json())
          .then((data) => {
            setStore({ ...store, expenses: [] });
            setStore({ ...store, bills: [] });
            getExpenses()
              .then((res) => res.json())
              .then((data) => {
                data.map((expense) => {
                  setStore({
                    ...store,
                    expenses: [...store.expenses, expense],
                  });
                });
              })
              .catch((err) => console.error(err));

            getBills()
              .then((res) => res.json())
              .then((data) => {
                data.map((bill) => {
                  setStore({ ...store, bills: [...store.bills, bill] });
                });
              })
              .catch((err) => console.error(err));
          });
      },
    },
  };
};

export default getState;
