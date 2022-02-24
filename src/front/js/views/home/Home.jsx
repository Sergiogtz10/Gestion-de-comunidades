import React from "react";
import "./home.css";
import FormAdmin from "../Forms/FormAdmin.jsx"
import FormOwner from "../Forms/FormOwner.jsx"
import FormCommunity from "../Forms/FormCommunity.jsx"

const Home = () => {
	
	return (
		<div>

				<FormAdmin />
				<FormOwner />
				<FormCommunity />
	
		</div>
	);
};

export default Home;
