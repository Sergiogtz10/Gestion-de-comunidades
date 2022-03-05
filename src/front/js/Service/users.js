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

export const postRegisterOwner= (name, last_name,flat, email, phone, password, repeat_password) => {
	const API = URL + "/api/users/register/owner/<community_id>"
	return fetch(API),{
		method: "POST",
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name:name, last_name:last_name,flat:flat, email: email, phone:phone, password: password, repeat_password:repeat_password })
	};
};

export const postLogin= (email, password) => {
	const API = URL + "/api/users/login"
	return fetch(API),{
		method: "POST",
        mode: "cors",
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        },
		body: JSON.stringify({ email: email, password: password })
	};
};

