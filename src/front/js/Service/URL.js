const URL = "https://3000-jesusbruque-finalproyect-qufm2qz40is.ws-eu34xl.gitpod.io"

//Users

export const getUsers = () => {
	const API = URL + "/users"
	return fetch(API);
};

export const postRegisterAdmin= () => {
	const API = URL + "/users/register/admin"
	return fetch(API);
};

export const postRegisterOwner= () => {
	const API = URL + "/users/register/owner/<community_id>"
	return fetch(API);
};

export const postLogin= () => {
	const API = URL + "/users/login"
	return fetch(API);
};

//communities

export const postRegisterUser = () => {
	const API = URL + "/communities/register/<user_id>"
	return fetch(API);
};









