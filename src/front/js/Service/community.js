
//communities

export const postRegisterCommunity = (address,number_house) => {
	const API = URL + "/api/communities/register/<user_id>"
	return fetch(API),{
		method: "POST",
        mode: "cors",
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        },
		body: JSON.stringify({ address: address, number_house: number_house })

	}
};

