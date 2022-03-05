
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
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
      
    }
  }
}

export default getState;
