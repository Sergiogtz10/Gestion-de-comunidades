import {URL} from "./URL.js"


export const postRegisterAdmin= (user) => {
	const API = URL + "/api/users/register/admin"
	return fetch(API),{
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
	}
};

export const postRegisterOwner= (user) => {
	const API = URL + "/api/users/register/owner/<community_id>"
	return fetch(API),{
		method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
	};
};

export const postLogin= (login) => {
	const API = URL + "/api/users/login"
	return fetch(API),{
		method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        },
		body: JSON.stringify(login)
	};
};

