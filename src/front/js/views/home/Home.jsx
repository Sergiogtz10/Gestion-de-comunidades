import React from "react";
import "./home.css";
import FormAdmin from "../FormAdmin/FormAdmin.jsx"
import FormOwner from "../FormOwner/FormOwner.jsx"
import FormCommunity from "../FormCommunity/FormCommunity.jsx"
import Login from "../LogIn/LogIn.jsx";
import Landing from "../Landing/Landing.jsx";

const Home = () => {
	
	return (
		<div>

				<FormAdmin />
				<FormOwner />
				<FormCommunity />
				<Login />
				<Landing />
	
		</div>
	);
};

export default Home;
