import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cardnave } from "../component/cardnave";

export const Home = () =>{

	const { store, actions } = useContext(Context);

	return(
	
		<div className="text-center mt-5">
			<h1>naves dsde api en FLUX en cardnave</h1>
			{store.naves.map( (nave)=> <Cardnave key={nave.uid} uid={nave.uid}  name={nave.name} /> )}

		</div>
	);
	
} 