import React from "react";
import NavBarElemnt from "./Navbar";
import Jumbotron from "./jumbotron";
import CardList from "./card";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBarElemnt />
		
			<div className="row container container-fluid mx-auto mt-2">
				<div className="col-12"><Jumbotron
				title = "Hola Mundoo"
				text = "Este es mi jumbotron reutilizableeeeeeeeee"
				buttonText = "Este es Mi Boton"
				/>
				</div>
				
			<CardList/>

			</div>

			<Footer/>

		</div>
	);
};

export default Home;