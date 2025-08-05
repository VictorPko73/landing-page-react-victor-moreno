import React from "react";
import NavBarElemnt from "./navbar";
import JumbotronElement from "./jumbotron";
import CardList from "./card";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<NavBarElemnt />
			<div className="container mx-auto mt-2">
				<JumbotronElement/>
				<CardList/>
			</div>

			

	
		<Footer/>
		</>
	);
};

export default Home;