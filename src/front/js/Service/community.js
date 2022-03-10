import { URL } from "./URL";

//communities

export const postRegisterCommunity = (newCommunity, user_id) => {
	const API = URL + "/api/communities/register/" + user_id;
	return fetch(API,{
		method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
		body: JSON.stringify(newCommunity)

	})
};

