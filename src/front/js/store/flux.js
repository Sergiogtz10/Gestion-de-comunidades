
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      registerAdminUser: {},
      
    },
    actions: {
      // Users

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
    },
  };
};

export default getState;
