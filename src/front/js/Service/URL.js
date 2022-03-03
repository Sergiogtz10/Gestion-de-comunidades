const URL = "https://3000-jesusbruque-finalproyect-qufm2qz40is.ws-eu34xl.gitpod.io"

//Users

export const getUsers = () => {
	const API = URL + "/"
	return fetch(API);
};

export const postRegisterAdmin= () => {
	const API = URL + "/register/admin"
	return fetch(API);
};

export const postRegisterOwner= () => {
	const API = URL + "/register/owner/<community_id>"
	return fetch(API);
};

export const postLogin= () => {
	const API = URL + "/login"
	return fetch(API);
};

//communities

export const postRegisterUser = () => {
	const API = URL + "/register/<user_id>"
	return fetch(API);
};









