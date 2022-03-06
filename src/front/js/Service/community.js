import { URL } from "./URL";

//communities

export const postRegisterCommunity = (community) => {
	const API = URL + "/api/communities/register/<user_id>"
	return fetch(API),{
		method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        },
		body: JSON.stringify(community)

	}
};

