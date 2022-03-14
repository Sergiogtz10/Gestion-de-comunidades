import { URL } from "./URL";

export const postRegisterCommunity = (newCommunity, user_id) => {
	const API = URL + "/api/community/register/" + user_id;
	return fetch(API,{
		method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
		body: JSON.stringify(newCommunity)

	})
};

