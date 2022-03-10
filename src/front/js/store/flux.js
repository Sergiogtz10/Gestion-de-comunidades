
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      registercommunity:{}
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
        setStore [{... store, registercommunity : [...store, store.registercommunity, user]}]
      }
      
    }
  }
}

export default getState;
