const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      incidents: [],
    },
    actions: {
      getIncidents: () => {
        console.log("devolviendo incidencias");
      },
    },
  };
};

export default getState;
