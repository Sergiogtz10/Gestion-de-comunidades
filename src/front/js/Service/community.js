import { URL } from "./URL";

//communities

export const postRegisterCommunity = (newCommunity) => {
	const API = URL + "/api/communities/register/"
	return fetch(API,{
		method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
		body: JSON.stringify(newCommunity)

	})
};

