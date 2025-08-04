import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./jumbotron";
import CardList from "./cardList";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
		
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
		
			<div className="row">
				<div className="col-sm-12 navbar">
					
				
			</div>

			</div>
			
			<div className="body">

			</div>

		</div>
	);
};

export default Home;